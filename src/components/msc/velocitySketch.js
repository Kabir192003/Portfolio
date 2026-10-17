// Web port of my Processing P3D night-highway racer "Velocity".
// Game rules, physics, lighting set-up and HUD follow the original sketch; the sketch
// is stepped at a fixed 60 Hz so it plays the same on any display.
import p5 from 'p5';

const BASE = './msc/velocity/';
const HW = 700; // HIGHWAY_WIDTH
const TRACK_LENGTH = 150000;
const PLAYING = 0, GAME_OVER = 1, PRE_RACE = 2, START_SCREEN = 3;
const LW = 1280, LH = 720; // logical size, as in the original
const STEP = 1000 / 60;
const TAU = Math.PI * 2;

const rand = (a, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const map = (v, a, b, c, d) => c + ((v - a) / (b - a)) * (d - c);
const lerpAngle = (a, b, amt) => {
    let diff = b - a;
    while (diff < -Math.PI) diff += TAU;
    while (diff > Math.PI) diff -= TAU;
    return a + diff * amt;
};
const seeded = (seed) => {
    let s = seed >>> 0;
    return () => {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = s;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

export function createVelocity(container, { onReady } = {}) {
    let p5i;
    let W = 960, H = 540;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const overlay = document.createElement('canvas');
    const ctx = overlay.getContext('2d');
    Object.assign(overlay.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none' });

    // ---- game state -------------------------------------------------------
    const keys = { up: false, left: false, down: false, right: false, space: false };
    let clutchArmed = false;
    let gameState = START_SCREEN;
    let player;
    let particles = [];
    let city = [];
    let opponents = [];
    let boosters = [];
    let camX = 0, camZ = 0, camLookX = 0, camLookZ = 0, camTilt = 0;
    let raceTimer = 30, countdownTimer = 3.99;
    let screenShake = 0, damageVignette = 0;
    let gameOverReason = '';
    let startGreenTime = 0, reactionTime = 0, reacted = false;
    let currentRPM = 1000, currentVol = 0;
    let isRaining = false;
    let simFrame = 0;
    let acc = 0;
    let lastRank = 1;
    let tex = {};
    let geo = {};
    let visible = true;
    const now = () => performance.now();

    // ---- audio (Web Audio replaces processing.sound) ----------------------
    const audio = { ctx: null, gain: null, src: null, buffer: null, muted: false, loading: false };
    const initAudio = () => {
        if (audio.ctx || audio.loading) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audio.loading = true;
        audio.ctx = new AC();
        audio.gain = audio.ctx.createGain();
        audio.gain.gain.value = 0;
        audio.gain.connect(audio.ctx.destination);
        fetch(`${BASE}engine.mp3`)
            .then((r) => r.arrayBuffer())
            .then((b) => audio.ctx.decodeAudioData(b))
            .then((buf) => {
                audio.buffer = buf;
                audio.src = audio.ctx.createBufferSource();
                audio.src.buffer = buf;
                audio.src.loop = true;
                audio.src.connect(audio.gain);
                audio.src.start();
            })
            .catch(() => {});
    };
    const setAudio = (rate, vol) => {
        if (!audio.ctx || !audio.src) return;
        const t = audio.ctx.currentTime;
        audio.src.playbackRate.setTargetAtTime(rate, t, 0.03);
        audio.gain.gain.setTargetAtTime(audio.muted || !visible ? 0 : vol * 0.55, t, 0.05);
    };

    // ---- entities ---------------------------------------------------------
    class Car {
        constructor() {
            this.x = 0; this.y = -12; this.z = 0;
            this.heading = -Math.PI / 2;
            this.velocityAngle = -Math.PI / 2;
            this.speed = 0; this.maxSpeed = 155;
            this.currentGear = 1; this.inventoryBoosts = 0; this.activeBoostTimer = 0;
            this.trailL = []; this.trailR = [];
        }
        update() {
            if (this.activeBoostTimer > 0) {
                this.maxSpeed = 185; this.speed = 185;
                this.activeBoostTimer -= 1 / 60;
                this.emitBoostFlames();
            } else this.maxSpeed = 155;

            if (gameState === PLAYING && reacted && this.activeBoostTimer <= 0) {
                if (keys.up) this.speed += 4;
                if (keys.down) this.speed -= 6;
            } else if (!reacted) {
                this.speed = 0;
                if (gameState === PRE_RACE && keys.up && keys.space && simFrame % 5 === 0) {
                    particles.push(new Particle(this.x - 45, this.y, this.z, [200, 200, 200], rand(5, 15)));
                }
            }
            this.speed *= 0.985;
            this.speed = clamp(this.speed, -20, this.maxSpeed);

            const turnSpeed = map(Math.abs(this.speed), 0, this.maxSpeed, 0.005, 0.04);
            const grip = isRaining ? 0.02 : 0.08;
            if (keys.left) this.heading -= turnSpeed;
            if (keys.right) this.heading += turnSpeed;
            this.velocityAngle = lerpAngle(this.velocityAngle, this.heading, grip);
            this.x += Math.cos(this.velocityAngle) * this.speed;
            this.z += Math.sin(this.velocityAngle) * this.speed;

            if (this.x < -HW + 45) { this.x = -HW + 45; triggerGameOver('CRASHED!'); }
            else if (this.x > HW - 45) { this.x = HW - 45; triggerGameOver('CRASHED!'); }
            this.updateTrails();
        }
        triggerBoost() {
            if (this.inventoryBoosts > 0 && this.activeBoostTimer <= 0 && reacted) {
                this.inventoryBoosts--;
                this.activeBoostTimer = 1.5;
                screenShake = 15;
            }
        }
        emitBoostFlames() {
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(this.x - Math.cos(this.heading) * 45, this.y, this.z - Math.sin(this.heading) * 45, [0, 200, 255], rand(20, 50)));
            }
        }
        updateTrails() {
            const h = this.heading;
            this.trailL.unshift([this.x - Math.cos(h) * 45 + Math.cos(h - Math.PI / 2) * 18, this.y + 2, this.z - Math.sin(h) * 45 + Math.sin(h - Math.PI / 2) * 18]);
            this.trailR.unshift([this.x - Math.cos(h) * 45 + Math.cos(h + Math.PI / 2) * 18, this.y + 2, this.z - Math.sin(h) * 45 + Math.sin(h + Math.PI / 2) * 18]);
            if (this.trailL.length > 20) this.trailL.pop();
            if (this.trailR.length > 20) this.trailR.pop();
        }
    }

    class Particle {
        constructor(x, y, z, c, force) {
            this.x = x; this.y = y; this.z = z;
            let vx = rand(-1, 1), vy = rand(-1, 0.5), vz = rand(-1, 1);
            const m = Math.hypot(vx, vy, vz) || 1;
            this.vx = (vx / m) * force; this.vy = (vy / m) * force; this.vz = (vz / m) * force;
            this.life = 255; this.c = c;
        }
        update() {
            this.x += this.vx; this.y += this.vy; this.z += this.vz;
            this.vx *= 0.92; this.vy *= 0.92; this.vz *= 0.92;
            this.life -= 12;
        }
    }

    class Booster {
        constructor(x, z) { this.x = x; this.z = z; this.active = true; }
    }

    class Opponent {
        constructor(x, z) {
            this.x = x; this.y = -12; this.z = z;
            this.w = 45; this.h = 20; this.d = 90;
            this.speed = 0; this.baseMaxSpeed = 150; this.maxSpeed = 150;
            this.targetX = x; this.reactionDelay = rand(50, 250);
            this.started = false; this.activeBoostTimer = 0;
            this.color = [rand(100, 255), rand(100, 255), rand(100, 255)];
        }
        update() {
            if (!this.started && now() - startGreenTime > this.reactionDelay) this.started = true;
            if (!this.started) return;
            if (this.activeBoostTimer > 0) {
                this.maxSpeed = 185; this.speed = 185;
                this.activeBoostTimer -= 1 / 60;
            } else {
                this.maxSpeed = this.baseMaxSpeed;
                this.speed += 4;
                this.speed *= 0.985;
                this.speed = clamp(this.speed, 0, this.maxSpeed);
            }
            this.z -= this.speed;
            if (Math.random() < 0.005) this.targetX = clamp(this.x + rand(-150, 150), -HW + 80, HW - 80);
            this.x = lerp(this.x, this.targetX, 0.015);
        }
        triggerBoost() { this.activeBoostTimer = 1.5; }
        checkCollision(px, pz) {
            return px > this.x - this.w / 2 - 25 && px < this.x + this.w / 2 + 25 && pz > this.z - this.d / 2 - 25 && pz < this.z + this.d / 2 + 25;
        }
    }

    class Building {
        constructor() {
            this.w = rand(200, 600); this.h = rand(800, 2500); this.d = rand(200, 600);
            this.win = null;
            this.gen = 0;
            this.reposition(0);
        }
        reposition(pz) {
            if (Math.random() > 0.5) this.x = rand(HW + 100 + this.w / 2, HW + 2500);
            else this.x = rand(-HW - 2500, -HW - 100 - this.w / 2);
            this.z = pz - rand(3000, 15000);
            this.seed = Math.floor(rand(100000));
            if (this.win && p5i) p5i.freeGeometry(this.win);
            this.win = null;
        }
        buildWindows() {
            const r = seeded(this.seed);
            const g = new p5.Geometry(1, 1);
            g.vertexAmbients = [];
            g.gid = `win-${this.seed}-${this.w | 0}-${this.h | 0}-${++this.gen}-${Math.random()}`;
            const fz = this.d / 2 + 1;
            for (let wy = -this.h / 2 + 50; wy < this.h / 2 - 50; wy += 45) {
                for (let wx = -this.w / 2 + 30; wx < this.w / 2 - 30; wx += 30) {
                    if (r() > 0.65) {
                        const a = (200 + r() * 55) / 255;
                        const base = g.vertices.length;
                        [[wx, wy], [wx + 15, wy], [wx + 15, wy + 20], [wx, wy + 20]].forEach(([vx, vy]) => {
                            g.vertices.push(new p5.Vector(vx, vy, fz));
                            g.vertexNormals.push(new p5.Vector(0, 0, 1));
                            g.uvs.push(0, 0);
                            g.vertexColors.push(1, 1, 240 / 255, a);
                        });
                        g.faces.push([base, base + 1, base + 2], [base, base + 2, base + 3]);
                    }
                }
            }
            return g;
        }
    }

    // ---- game flow --------------------------------------------------------
    function resetGame() {
        city.forEach((b) => b.win && p5i.freeGeometry(b.win));
        player = new Car();
        particles = []; city = []; opponents = []; boosters = [];
        raceTimer = 30; countdownTimer = 3.99;
        gameState = PRE_RACE;
        damageVignette = 0; reacted = false; clutchArmed = false; reactionTime = 0;
        currentRPM = 1000; currentVol = 0;
        for (let i = 0; i < 60; i++) city.push(new Building());
        [-450, -250, -100, 100, 250, 450].forEach((x) => opponents.push(new Opponent(x, 0)));
        for (let i = 0; i < 12; i++) {
            const z = -2000 - i * (TRACK_LENGTH / 12) - rand(1000);
            boosters.push(new Booster(rand(-HW + 100, HW - 100), z));
        }
        camX = 0; camZ = 400; camLookX = 0; camLookZ = 0;
    }

    function triggerGameOver(reason) {
        if (gameState === GAME_OVER) return;
        gameState = GAME_OVER;
        gameOverReason = reason;
        screenShake = 50;
        damageVignette = 255;
        if (reason === 'CRASHED!') {
            for (let i = 0; i < 100; i++) particles.push(new Particle(player.x, player.y, player.z, [255, 50, 0], rand(20, 50)));
        }
        if (reason === 'FINISH!') {
            lastRank = 1 + opponents.filter((o) => o.z < player.z).length;
        }
    }

    function step() {
        simFrame++;
        if (gameState === PRE_RACE) {
            countdownTimer -= 1 / 60;
            if (keys.space) clutchArmed = true;
            if (countdownTimer <= 0) { gameState = PLAYING; startGreenTime = now(); }
        } else if (gameState === PLAYING) {
            if (!reacted) {
                if (keys.space) clutchArmed = true;
                if (clutchArmed && keys.up && !keys.space) {
                    reacted = true; reactionTime = now() - startGreenTime;
                    player.speed = 15; currentRPM = 4000;
                } else if (!clutchArmed && keys.up && !keys.space) {
                    reacted = true; reactionTime = now() - startGreenTime;
                    currentRPM = 4000;
                }
            }
            player.update();
            raceTimer -= 1 / 60;
            if (raceTimer <= 0) triggerGameOver('FINISH!');
        }

        // engine RPM and volume
        let targetRPM = 0, targetVol = 0;
        if (gameState === START_SCREEN || gameState === GAME_OVER) { targetRPM = 0; targetVol = 0; }
        else if (gameState === PRE_RACE || (gameState === PLAYING && !reacted)) {
            if (keys.up) { targetRPM = 7500 + Math.sin(simFrame * 0.8) * 300; targetVol = 0.8; }
            else { targetRPM = 1000; targetVol = 0.3; }
        } else if (gameState === PLAYING && reacted) {
            if (keys.up) {
                const maxSpd = 155, gears = 6, per = maxSpd / gears;
                const gear = Math.min(gears, Math.max(1, Math.ceil(player.speed / per)));
                if (gear > player.currentGear) { currentRPM = 4500; player.currentGear = gear; }
                else if (gear < player.currentGear) player.currentGear = gear;
                if (player.speed >= maxSpd - 2) targetRPM = 8500;
                else targetRPM = map(player.speed, (gear - 1) * per, gear * per, 4500, 8500);
                targetVol = 0.8;
            } else {
                targetRPM = map(player.speed, 0, 155, 1000, 3500);
                targetVol = 0.4;
            }
            if (player.activeBoostTimer > 0) { targetRPM = 9500; targetVol = 1; }
        }
        currentRPM = lerp(currentRPM, targetRPM, 0.25);
        currentVol = lerp(currentVol, targetVol, 0.15);

        // camera
        const tcx = player.x - Math.cos(player.velocityAngle) * 400;
        const tcz = player.z - Math.sin(player.velocityAngle) * 400;
        camX = lerp(camX, tcx, 0.15);
        camZ = lerp(camZ, tcz, 0.15);
        camLookX = lerp(camLookX, player.x, 0.2);
        camLookZ = lerp(camLookZ, player.z, 0.2);
        let targetTilt = 0;
        if (keys.left && player.speed > 10) targetTilt = -0.12;
        if (keys.right && player.speed > 10) targetTilt = 0.12;
        camTilt = lerp(camTilt, targetTilt, 0.1);
        screenShake *= 0.85;
        if (damageVignette > 0) damageVignette *= 0.85;

        // world
        city.forEach((b) => { if (player.z - b.z < -2000) b.reposition(player.z); });
        boosters.forEach((b) => {
            if (!b.active || gameState !== PLAYING) return;
            if (Math.hypot(player.x - b.x, player.z - b.z) < 100) {
                b.active = false; player.inventoryBoosts++;
                for (let i = 0; i < 15; i++) particles.push(new Particle(b.x, -20, b.z, [0, 255, 255], 15));
                return;
            }
            for (const o of opponents) {
                if (Math.hypot(o.x - b.x, o.z - b.z) < 100) {
                    b.active = false; o.triggerBoost();
                    for (let i = 0; i < 15; i++) particles.push(new Particle(b.x, -20, b.z, [0, 255, 255], 15));
                    break;
                }
            }
        });
        for (const o of opponents) {
            if (gameState === PLAYING) o.update();
            if (gameState === PLAYING && o.checkCollision(player.x, player.z)) triggerGameOver('CRASHED!');
        }
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            if (particles[i].life <= 0) particles.splice(i, 1);
        }
    }

    // ---- input ------------------------------------------------------------
    function press(name, down) {
        if (down) initAudio();
        if (name === 'enter') {
            if (!down) return;
            if (gameState === START_SCREEN) { gameState = PRE_RACE; return; }
            if (gameState === GAME_OVER) { resetGame(); return; }
            return;
        }
        if (name === 'rain') { if (down) isRaining = !isRaining; return; }
        if (name === 'space') {
            if (down && !keys.space && gameState === PLAYING && reacted) player.triggerBoost();
            keys.space = down;
            return;
        }
        if (name in keys) keys[name] = down;
    }
    const KEYMAP = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', ' ': 'space', Enter: 'enter', r: 'rain', R: 'rain' };
    const onKeyDown = (e) => {
        const n = KEYMAP[e.key];
        if (!n) return;
        e.preventDefault();
        if (e.repeat && (n === 'rain' || n === 'enter')) return;
        press(n, true);
    };
    const onKeyUp = (e) => {
        const n = KEYMAP[e.key];
        if (!n) return;
        e.preventDefault();
        press(n, false);
    };
    const releaseAll = () => { Object.keys(keys).forEach((k) => { keys[k] = false; }); };
    container.tabIndex = 0;
    container.style.outline = 'none';
    container.addEventListener('keydown', onKeyDown);
    container.addEventListener('keyup', onKeyUp);
    container.addEventListener('blur', releaseAll);
    const onCanvasClick = () => {
        container.focus({ preventScroll: true });
        initAudio();
        if (gameState === START_SCREEN || gameState === GAME_OVER) press('enter', true);
    };
    container.addEventListener('pointerdown', onCanvasClick);

    // ---- geometry helpers -------------------------------------------------
    const quadGeo = (id, quads) => {
        const g = new p5.Geometry(1, 1);
        g.gid = id;
        g.vertexAmbients = [];
        quads.forEach((q) => {
            const [a, b, c] = q;
            const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
            const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
            let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
            const m = Math.hypot(nx, ny, nz) || 1;
            nx /= m; ny /= m; nz /= m;
            if (ny > 0) { nx = -nx; ny = -ny; nz = -nz; } // face up (y is down)
            const base = g.vertices.length;
            q.forEach((v) => {
                g.vertices.push(new p5.Vector(v[0], v[1], v[2]));
                g.vertexNormals.push(new p5.Vector(nx, ny, nz));
                g.uvs.push(v[3] || 0, v[4] || 0);
            });
            g.faces.push([base, base + 1, base + 2], [base, base + 2, base + 3]);
        });
        return g;
    };

    // ---- rendering --------------------------------------------------------
    const sketch = (p) => {

        p.preload = () => {
            tex.asphalt = p.loadImage(`${BASE}asphalt.jpg`);
            tex.stars = p.loadImage(`${BASE}stars.jpg`);
            tex.moon = p.loadImage(`${BASE}moon.jpg`);
        };

        const fit = () => {
            W = Math.max(320, Math.floor(container.clientWidth));
            H = Math.round((W * LH) / LW);
            p.resizeCanvas(W, H);
            overlay.width = W * dpr;
            overlay.height = H * dpr;
            container.style.height = `${H}px`;
        };

        p.setup = () => {
            p5i = p;
            p.pixelDensity(Math.min(dpr, 1.5));
            const c = p.createCanvas(10, 10, p.WEBGL);
            c.parent(container);
            c.elt.style.display = 'block';
            c.elt.style.width = '100%';
            c.elt.style.height = '100%';
            container.appendChild(overlay);
            p.textureWrap(p.REPEAT);
            p.noStroke();
            p.tint(255);

            geo.roadTex = quadGeo('v-road-tex', [[[-HW, 0, 0, 0, 0], [HW, 0, 0, 1, 0], [HW, 0, -400, 1, -1], [-HW, 0, -400, 0, -1]]]);
            geo.yellow = quadGeo('v-yellow', [
                [[-HW + 15, 0.5, 0], [-HW + 35, 0.5, 0], [-HW + 35, 0.5, -400], [-HW + 15, 0.5, -400]],
                [[HW - 35, 0.5, 0], [HW - 15, 0.5, 0], [HW - 15, 0.5, -400], [HW - 35, 0.5, -400]],
            ]);
            const lw = HW / 1.5;
            geo.dash = quadGeo('v-dash', [
                [[-lw / 2 - 12, 0.5, 0], [-lw / 2 + 12, 0.5, 0], [-lw / 2 + 12, 0.5, -400], [-lw / 2 - 12, 0.5, -400]],
                [[lw / 2 - 12, 0.5, 0], [lw / 2 + 12, 0.5, 0], [lw / 2 + 12, 0.5, -400], [lw / 2 - 12, 0.5, -400]],
            ]);
            geo.curb = quadGeo('v-curb', [
                [[-HW - 60, -40, 0], [-HW, -40, 0], [-HW, -40, -400], [-HW - 60, -40, -400]],
                [[HW, -40, 0], [HW + 60, -40, 0], [HW + 60, -40, -400], [HW, -40, -400]],
            ]);
            geo.start = quadGeo('v-start', [[[-HW, 1, 50], [HW, 1, 50], [HW, 1, -50], [-HW, 1, -50]]]);
            geo.sky = quadGeo('v-sky', [[[-200000, -100000, 0, 0, 0], [200000, -100000, 0, 8, 0], [200000, 100000, 0, 8, 4], [-200000, 100000, 0, 0, 4]]]);
            geo.chassis = quadGeo('v-chassis', [
                [[-45, -5, -20], [45, 0, -22], [45, 0, 22], [-45, -5, 20]],
                [[-45, -15, -15], [20, -12, -18], [20, -12, 18], [-45, -15, 15]],
            ]);
            geo.roof = quadGeo('v-roof', [[[18, -12, -16], [40, -2, -18], [40, -2, 18], [18, -12, 16]]]);

            fit();
            new ResizeObserver(fit).observe(container);
            resetGame();
            gameState = START_SCREEN;
            const io = new IntersectionObserver(([en]) => {
                visible = en.isIntersecting;
                if (visible) p.loop(); else { p.noLoop(); setAudio(0.5, 0); }
            }, { threshold: 0.05 });
            io.observe(container);
            container._io = io;
            onReady && onReady();
        };

        const box = (w, h, d) => p.box(w, h, d);

        const drawNightSky = () => {
            p.push();
            p.translate(player.x, -10000, player.z - 130000);
            p.noLights();
            p.tint(255);
            p.texture(tex.stars);
            p.model(geo.sky);
            p.tint(255);
            p.pop();
        };

        const drawMoon = () => {
            p.push();
            p.translate(player.x + 25000, -18000, player.z - 110000);
            p.noLights();
            p.blendMode(p.ADD);
            p.rotateY(simFrame * 0.0005);
            p.rotateZ(Math.PI / 8);
            p.texture(tex.moon);
            p.sphere(12000, 28, 18);
            p.blendMode(p.BLEND);
            p.pop();
        };

        const drawStreetLight = (x, z, isLeft) => {
            p.push();
            p.translate(x, 0, z);
            p.fill(50, 55, 60);
            p.translate(0, -300, 0);
            box(20, 600, 20);
            const dir = isLeft ? 1 : -1;
            p.translate(150 * dir, -290, 0);
            box(300, 15, 15);
            p.translate(130 * dir, 10, 0);
            p.emissiveMaterial(255, 230, 150);
            p.fill(255);
            box(50, 10, 30);
            p.emissiveMaterial(0, 0, 0);
            p.blendMode(p.ADD);
            p.fill(255, 200, 100, 80);
            p.sphere(60, 12, 8);
            p.fill(255, 200, 100, 30);
            p.sphere(120, 12, 8);
            p.blendMode(p.BLEND);
            p.pop();
        };

        const drawHighway = () => {
            const startZ = Math.trunc(player.z / 400) * 400;
            for (let z = startZ + 400; z > startZ - 12000; z -= 400) {
                p.push();
                p.translate(0, 0, z);
                p.tint(180);
                p.texture(tex.asphalt);
                p.model(geo.roadTex);
                p.tint(255);
                p.fill(255, 200, 0);
                p.model(geo.yellow);
                if (z % 800 === 0) { p.fill(255); p.model(geo.dash); }
                p.fill(15, 18, 25);
                p.model(geo.curb);
                if (z === 400) { p.fill(255); p.model(geo.start); }
                p.pop();

                if (z % 1200 === 0) {
                    drawStreetLight(-HW - 40, z, true);
                    drawStreetLight(HW + 40, z, false);
                    p.push();
                    p.translate(0, 2, z);
                    p.rotateX(Math.PI / 2);
                    p.blendMode(p.ADD);
                    for (let i = 1; i <= 4; i++) {
                        p.fill(255, 180, 80, 60 / i);
                        p.ellipse(-HW + 200, 0, 700 + i * 150, 500 + i * 100, 24);
                        p.ellipse(HW - 200, 0, 700 + i * 150, 500 + i * 100, 24);
                    }
                    p.blendMode(p.BLEND);
                    p.pop();
                }
            }
        };

        const drawBuilding = (b) => {
            const distZ = Math.max(0, player.z - b.z);
            if (distZ > 15000 || distZ < -4000) return;
            if (!b.win) b.win = b.buildWindows();
            p.push();
            p.translate(b.x, -b.h / 2, b.z);
            p.fill(45, 50, 65);
            box(b.w, b.h, b.d);
            p.blendMode(p.ADD);
            p.emissiveMaterial(255, 255, 200);
            p.fill(255);
            p.model(b.win);
            p.emissiveMaterial(0, 0, 0);
            p.blendMode(p.BLEND);
            p.pop();
        };

        const drawBooster = (b) => {
            if (!b.active) return;
            const distZ = Math.max(0, player.z - b.z);
            if (distZ > 12000 || distZ < -1000) return;
            p.push();
            p.translate(b.x, -40 + Math.sin(simFrame * 0.1) * 15, b.z);
            p.rotateY(simFrame * 0.05);
            p.rotateX(simFrame * 0.03);
            p.blendMode(p.ADD);
            p.fill(0, 255, 255, 200);
            box(60, 60, 60);
            p.fill(255);
            box(30, 30, 30);
            p.blendMode(p.BLEND);
            p.pop();
        };

        const taillights = (list) => {
            p.blendMode(p.ADD);
            list.forEach(([c, x, y, z, w, h, d]) => {
                p.push();
                p.fill(c[0], c[1], c[2]);
                p.translate(x, y, z);
                box(w, h, d);
                p.pop();
            });
            p.blendMode(p.BLEND);
        };

        const drawOpponent = (o) => {
            const distZ = Math.max(0, player.z - o.z);
            if (distZ > 12000 || distZ < -2000) return;
            p.push();
            p.translate(o.x, o.y, o.z);
            p.fill(o.color[0], o.color[1], o.color[2]);
            p.specularMaterial(255);
            p.shininess(20);
            box(o.w, o.h, o.d);
            p.push();
            p.translate(0, -12, -5);
            p.fill(30);
            box(35, 12, 50);
            p.pop();
            const t = [[[255, 20, 0], -16, 0, o.d / 2 + 1, 10, 6, 2], [[255, 20, 0], 16, 0, o.d / 2 + 1, 10, 6, 2]];
            if (o.activeBoostTimer > 0) t.push([[0, 200, 255], -16, 0, o.d / 2 + 10, 8, 8, 20], [[0, 200, 255], 16, 0, o.d / 2 + 10, 8, 8, 20]);
            taillights(t);
            p.pop();
        };

        const drawPlayer = () => {
            p.push();
            p.translate(player.x, player.y, player.z);
            if (gameState === PRE_RACE && keys.up && keys.space) p.translate(rand(-1.5, 1.5), rand(-0.5, 0.5), 0);
            p.rotateY(-player.heading);
            p.fill(20, 20, 25);
            p.specularMaterial(255);
            p.shininess(25);
            p.model(geo.chassis);
            p.fill(10);
            p.shininess(100);
            p.model(geo.roof);
            taillights([[[255, 0, 0], -46, -10, -12, 2, 4, 15], [[255, 0, 0], -46, -10, 12, 2, 4, 15]]);
            p.pop();
            // light trails
            p.blendMode(p.ADD);
            p.strokeWeight(6);
            [player.trailL, player.trailR].forEach((tr) => {
                for (let i = 0; i < tr.length - 1; i++) {
                    p.stroke(255, 50, 50, map(i, 0, 20, 150, 0));
                    p.line(tr[i][0], tr[i][1], tr[i][2], tr[i + 1][0], tr[i + 1][1], tr[i + 1][2]);
                }
            });
            p.noStroke();
            p.blendMode(p.BLEND);
        };

        const drawParticles = () => {
            const gl = p.drawingContext;
            p.blendMode(p.ADD);
            gl.disable(gl.DEPTH_TEST);
            particles.forEach((q) => {
                p.stroke(q.c[0], q.c[1], q.c[2], q.life);
                p.strokeWeight(rand(4, 12));
                p.point(q.x, q.y, q.z);
            });
            gl.enable(gl.DEPTH_TEST);
            p.noStroke();
            p.blendMode(p.BLEND);
        };

        p.draw = () => {
            if (!player) return;
            acc += Math.min(p.deltaTime || STEP, 100);
            let n = 0;
            while (acc >= STEP && n < 4) { step(); acc -= STEP; n++; }
            if (n === 4) acc = 0;

            const rate = Math.max(0.1, map(currentRPM, 1000, 9000, 0.5, 2.2));
            setAudio(rate, currentVol);

            p.noStroke();
            p.tint(255);
            p.blendMode(p.BLEND);
            p.background(25, 30, 40);
            p.perspective(Math.PI / 3, LW / LH, 10, 150000);
            p.camera(camX, -250, camZ, camLookX, 0, camLookZ, Math.sin(camTilt), Math.cos(camTilt), 0);
            if (screenShake > 0.5) p.translate(rand(-screenShake, screenShake), rand(-screenShake, screenShake) * 0.5, 0);

            drawNightSky();
            drawMoon();

            p.lightFalloff(1.0, 0.0005, 0.000001);
            p.ambientLight(90, 90, 100);
            p.directionalLight(220, 230, 255, -0.8, 1, -0.3);
            if (gameState === PLAYING || gameState === PRE_RACE || gameState === START_SCREEN) {
                p.spotLight(255, 255, 255, player.x, -50, player.z, Math.cos(player.heading), -0.05, Math.sin(player.heading), Math.PI / 2, 150);
            }

            drawHighway();
            city.forEach(drawBuilding);
            boosters.forEach(drawBooster);
            opponents.forEach(drawOpponent);
            if (gameState !== GAME_OVER) drawPlayer();
            drawParticles();

            drawOverlay();
        };

        // ---- 2D overlay: rain, speed lines, HUD ------------------------
        const FONT = '"Helvetica Neue", Arial, sans-serif';
        const rgba = (r, g, b, a = 1) => `rgba(${r},${g},${b},${a})`;
        const text = (s, x, y, size, color, align = 'center', base = 'middle', weight = '400') => {
            ctx.font = `${weight} ${size}px ${FONT}`;
            ctx.textAlign = align;
            ctx.textBaseline = base;
            ctx.fillStyle = color;
            ctx.fillText(s, x, y);
        };
        const rrect = (x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); };

        const drawRain = () => {
            ctx.globalCompositeOperation = 'lighter';
            ctx.lineWidth = 1.5;
            const sx = Math.cos(player.velocityAngle + Math.PI / 2) * player.speed * 0.8;
            const sy = player.speed * 2.5 + 40;
            for (let i = 0; i < 300; i++) {
                const x = rand(-400, LW + 400), y = rand(-400, LH), len = rand(20, 80);
                ctx.strokeStyle = rgba(200, 220, 255, rand(50, 150) / 255);
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + sx, y + len + sy); ctx.stroke();
            }
            ctx.globalCompositeOperation = 'source-over';
        };

        const drawSpeedLines = () => {
            const bi = map(player.speed, 130, 185, 0, 1);
            if (bi <= 0 || gameState !== PLAYING) return;
            ctx.globalCompositeOperation = 'lighter';
            ctx.save();
            ctx.translate(LW / 2, LH / 2);
            ctx.strokeStyle = rgba(255, 255, 255, (80 * bi) / 255);
            ctx.lineWidth = 3;
            const r = seeded(Math.floor(simFrame / 2));
            const num = Math.floor(50 * bi);
            for (let i = 0; i < num; i++) {
                const a = r() * TAU, rs = 150 + r() * 250, ll = (100 + r() * 300) * bi;
                ctx.beginPath();
                ctx.moveTo(Math.cos(a) * rs, Math.sin(a) * rs);
                ctx.lineTo(Math.cos(a) * (rs + ll), Math.sin(a) * (rs + ll));
                ctx.stroke();
            }
            ctx.restore();
            ctx.globalCompositeOperation = 'source-over';
        };

        const lights = (greens, reds) => {
            ctx.save();
            ctx.translate(LW / 2, LH / 3 - 50);
            ctx.fillStyle = rgba(10, 10, 10, 200 / 255);
            ctx.strokeStyle = 'rgb(50,50,50)';
            ctx.lineWidth = 4;
            rrect(-250, -60, 500, 120, 15); ctx.fill(); ctx.stroke();
            for (let i = 0; i < 3; i++) {
                ctx.fillStyle = greens ? 'rgb(0,255,0)' : reds > i ? 'rgb(255,0,0)' : 'rgb(50,0,0)';
                ctx.beginPath(); ctx.arc(-150 + i * 150, 0, 40, 0, TAU); ctx.fill();
            }
            ctx.restore();
        };

        const drawRadar = () => {
            const rx = LW - 120, ry = LH - 120, size = 180, scan = 8000, half = size / 2;
            ctx.save();
            ctx.translate(rx, ry);
            ctx.fillStyle = rgba(10, 10, 15, 200 / 255);
            ctx.strokeStyle = rgba(100, 100, 120, 150 / 255);
            ctx.lineWidth = 2;
            rrect(-half, -half, size, size, 5); ctx.fill(); ctx.stroke();
            const sy = map((simFrame * 60) % scan, 0, scan, half, -half);
            ctx.strokeStyle = rgba(200, 255, 255, 150 / 255);
            ctx.beginPath(); ctx.moveTo(-half, sy); ctx.lineTo(half, sy); ctx.stroke();
            const dot = (x, z, r, col) => {
                const dz = player.z - z;
                if (dz > -scan / 4 && dz < scan) {
                    const mx = clamp(map(x, -HW, HW, -half, half), -half + 5, half - 5);
                    const my = clamp(map(dz, -scan / 4, scan, half, -half), -half + 5, half - 5);
                    ctx.fillStyle = col;
                    ctx.beginPath(); ctx.arc(mx, my, r, 0, TAU); ctx.fill();
                }
            };
            boosters.forEach((b) => b.active && dot(b.x, b.z, 2, 'rgb(0,255,255)'));
            opponents.forEach((o) => dot(o.x, o.z, 4, 'rgb(255,50,50)'));
            const pmx = map(player.x, -HW, HW, -half, half);
            const pmy = map(0, -scan / 4, scan, half, -half);
            ctx.fillStyle = '#fff';
            ctx.beginPath(); ctx.moveTo(pmx - 5, pmy); ctx.lineTo(pmx + 5, pmy); ctx.lineTo(pmx, pmy - 8); ctx.closePath(); ctx.fill();
            ctx.restore();
        };

        const drawHUD = () => {
            const blink = simFrame % 60 < 30;
            if (gameState === START_SCREEN) {
                ctx.fillStyle = 'rgba(0,0,0,0.82)';
                ctx.fillRect(0, 0, LW, LH);
                text('V E L O C I T Y', LW / 2 + 4, LH / 2 - 176, 80, 'rgb(255,0,150)', 'center', 'middle', '700');
                text('V E L O C I T Y', LW / 2 - 4, LH / 2 - 184, 80, 'rgb(0,255,255)', 'center', 'middle', '700');
                text('V E L O C I T Y', LW / 2, LH / 2 - 180, 80, '#fff', 'center', 'middle', '700');
                text('HOW TO PLAY', LW / 2, LH / 2 - 70, 30, '#fff');
                const g = 'rgb(200,200,200)';
                text('[ UP ] / [ DOWN ] : Accelerate & Brake', LW / 2, LH / 2 - 10, 22, g);
                text('[ LEFT ] / [ RIGHT ] : Steer Vehicle', LW / 2, LH / 2 + 30, 22, g);
                text('[ SPACE ] : Use Nitro Boost / Clutch', LW / 2, LH / 2 + 70, 22, g);
                text('[ R ] : Toggle High-Speed Rain', LW / 2, LH / 2 + 110, 22, g);
                text('PRO TIP: Hold [UP] + [SPACE] before the green light to Rev your clutch!', LW / 2, LH / 2 + 170, 24, 'rgb(255,100,100)');
                if (blink) text('PRESS [ ENTER ] OR CLICK TO START', LW / 2, LH / 2 + 250, 30, 'rgb(100,255,100)');
            }

            if (damageVignette > 1) {
                ctx.strokeStyle = rgba(255, 0, 0, damageVignette / 255);
                ctx.lineWidth = 15;
                ctx.strokeRect(0, 0, LW, LH);
            }

            if (gameState === PRE_RACE) {
                lights(false, Math.floor(4 - countdownTimer));
                if (!keys.space) text('HOLD [UP] + [SPACE] TO REV CLUTCH!', LW / 2, LH / 2 + 50, 24, 'rgb(255,100,100)');
                else text('REVVING... RELEASE SPACE ON GREEN!', LW / 2, LH / 2 + 50, 24, 'rgb(100,255,100)');
            }

            if (gameState === PLAYING || gameState === PRE_RACE) {
                if (gameState === PLAYING && now() - startGreenTime < 1000) lights(true, 0);

                // speedometer
                ctx.save();
                ctx.translate(120, LH - 120);
                ctx.lineCap = 'round';
                const sA = Math.PI - Math.PI / 4, eA = TAU + Math.PI / 4;
                ctx.lineWidth = 8;
                ctx.strokeStyle = 'rgb(50,50,50)';
                ctx.beginPath(); ctx.arc(0, 0, 90, sA, eA); ctx.stroke();
                const ang = Math.max(sA + 0.001, map(player.speed, 0, 190, sA, eA));
                ctx.strokeStyle = player.speed > 150 ? 'rgb(255,50,50)' : player.activeBoostTimer > 0 ? 'rgb(0,255,255)' : '#fff';
                ctx.beginPath(); ctx.arc(0, 0, 90, sA, Math.min(ang, eA)); ctx.stroke();
                text(String(Math.trunc(player.speed)), 0, -10, 48, '#fff');
                text('KM/H', 0, 30, 16, 'rgb(150,150,150)');
                ctx.restore();

                // rpm dial
                ctx.save();
                ctx.translate(340, LH - 120);
                ctx.fillStyle = rgba(20, 20, 25, 230 / 255);
                ctx.beginPath(); ctx.arc(0, 0, 80, 0, TAU); ctx.fill();
                const sa = Math.PI - Math.PI / 4, ea = TAU + Math.PI / 4;
                ctx.lineWidth = 2;
                for (let i = 0; i <= 9; i++) {
                    const a = map(i, 0, 9, sa, ea);
                    ctx.strokeStyle = i >= 8 ? 'rgb(255,50,50)' : 'rgb(200,200,200)';
                    ctx.beginPath(); ctx.moveTo(Math.cos(a) * 55, Math.sin(a) * 55); ctx.lineTo(Math.cos(a) * 70, Math.sin(a) * 70); ctx.stroke();
                    text(String(i), Math.cos(a) * 40, Math.sin(a) * 40, 12, '#fff');
                }
                const na = map(currentRPM, 0, 9000, sa, ea);
                ctx.strokeStyle = 'rgb(255,50,50)'; ctx.lineWidth = 4;
                ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(na) * 65, Math.sin(na) * 65); ctx.stroke();
                ctx.fillStyle = 'rgb(50,50,50)';
                ctx.beginPath(); ctx.arc(0, 0, 7.5, 0, TAU); ctx.fill();
                text('RPM x1000', 0, -25, 10, 'rgb(150,150,150)');
                const gear = !reacted ? 0 : Math.max(1, Math.ceil(player.speed / (player.maxSpeed / 6)));
                text(gear === 0 ? 'N' : String(gear), 0, 30, 24, '#fff');
                ctx.restore();

                // boosts
                text('BOOSTS (SPACE)', 450, LH - 100, 20, '#fff', 'left', 'top');
                for (let i = 0; i < player.inventoryBoosts; i++) {
                    ctx.fillStyle = 'rgb(0,255,255)'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
                    rrect(450 + i * 30, LH - 70, 20, 20, 3); ctx.fill(); ctx.stroke();
                }

                // timers
                text('RACE TIME', LW - 40, 40, 20, '#fff', 'right', 'top');
                const rt = Math.max(0, raceTimer);
                const tstr = `${String(Math.floor(rt)).padStart(2, '0')}.${Math.floor((rt % 1) * 10)}s`;
                text(tstr, LW - 40, 65, 36, raceTimer < 5 && simFrame % 20 < 10 ? 'rgb(255,50,50)' : '#fff', 'right', 'top');
                if (reacted) text(`REACTION: ${(reactionTime / 1000).toFixed(3)}s`, LW - 40, 110, 20, 'rgb(100,255,100)', 'right', 'top');
                drawRadar();
            } else if (gameState === GAME_OVER) {
                ctx.fillStyle = 'rgba(0,0,0,0.86)';
                ctx.fillRect(0, 0, LW, LH);
                text(gameOverReason, LW / 2, LH / 2 - 100, 60, '#fff', 'center', 'middle', '700');
                if (gameOverReason === 'FINISH!') {
                    const rank = lastRank;
                    const suf = rank === 1 ? 'ST' : rank === 2 ? 'ND' : rank === 3 ? 'RD' : 'TH';
                    text(`YOU FINISHED: ${rank}${suf} PLACE`, LW / 2, LH / 2 - 20, 50, 'rgb(255,215,0)');
                }
                if (reacted) text(`REACTION TIME: ${(reactionTime / 1000).toFixed(3)}s`, LW / 2, LH / 2 + 50, 30, 'rgb(100,255,100)');
                if (blink) text('PRESS [ ENTER ] OR CLICK TO RESTART', LW / 2, LH / 2 + 120, 20, 'rgb(150,150,150)');
            }
        };

        function drawOverlay() {
            const k = (W * dpr) / LW;
            ctx.setTransform(k, 0, 0, k, 0, 0);
            ctx.clearRect(0, 0, LW, LH);
            if (isRaining) drawRain();
            drawSpeedLines();
            drawHUD();
        }
    };

    p5i = new p5(sketch, container);

    return {
        press,
        setMuted: (m) => { audio.muted = m; },
        focus: () => container.focus({ preventScroll: true }),
        _state: () => ({ gameState, speed: player && player.speed, z: player && player.z, raceTimer, reacted, particles: particles.length, boosters: player && player.inventoryBoosts }),
        destroy: () => {
            container.removeEventListener('keydown', onKeyDown);
            container.removeEventListener('keyup', onKeyUp);
            container.removeEventListener('blur', releaseAll);
            container.removeEventListener('pointerdown', onCanvasClick);
            if (container._io) container._io.disconnect();
            if (audio.src) { try { audio.src.stop(); } catch { /* already stopped */ } }
            if (audio.ctx) audio.ctx.close();
            p5i.remove();
            overlay.remove();
        },
    };
}
