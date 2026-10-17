// Web port of my Processing P3D solar system (A5.4, Visual Computing and Design).
// Same planet table, lighting, camera, slider and HUD as the original sketch.
// p5 has no 3D screenX/screenY, so label positions are projected by hand.
import p5 from 'p5';

const BASE = './msc/solar-system/';

const PLANET_DATA = [
    { name: 'Mercury', r: 8, d: 120, s: 0.04, tex: 'mercury', info: 'Dist: 58M km\nRadius: 2,439 km\nTemp: 167 °C\nMoons: 0' },
    { name: 'Venus', r: 14, d: 170, s: 0.03, tex: 'venus', info: 'Dist: 108M km\nRadius: 6,051 km\nTemp: 464 °C\nMoons: 0' },
    { name: 'Earth', r: 16, d: 240, s: 0.02, tex: 'earth', info: 'Dist: 149.6M km\nRadius: 6,371 km\nTemp: 15 °C\nMoons: 1' },
    { name: 'Mars', r: 12, d: 300, s: 0.015, tex: 'mars', info: 'Dist: 228M km\nRadius: 3,389 km\nTemp: -65 °C\nMoons: 2' },
    { name: 'Jupiter', r: 35, d: 420, s: 0.008, tex: 'jupiter', info: 'Dist: 778M km\nRadius: 69,911 km\nTemp: -110 °C\nMoons: 95' },
    { name: 'Saturn', r: 28, d: 550, s: 0.005, tex: 'saturn', info: 'Dist: 1.4B km\nRadius: 58,232 km\nTemp: -140 °C\nMoons: 274', rings: true },
    { name: 'Uranus', r: 20, d: 660, s: 0.003, tex: 'uranus', info: 'Dist: 2.9B km\nRadius: 25,362 km\nTemp: -195 °C\nMoons: 28' },
    { name: 'Neptune', r: 18, d: 760, s: 0.002, tex: 'neptune', info: 'Dist: 4.5B km\nRadius: 24,622 km\nTemp: -200 °C\nMoons: 16' },
];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function createSolarSystem(container, { onReady } = {}) {
    const bodies = []; // every body incl. sun + moon, in label draw order
    let sun;
    const planets = [];
    let skyTex;
    let camZoom = -800;
    let camRotX = Math.PI / 8;
    let camRotY = 0;
    let speedMult = 1;
    let selected = null;
    let draggingSlider = false;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let W = 1000;
    let H = 800;
    let eyeZ = 693;

    const overlay = document.createElement('canvas');
    const ctx = overlay.getContext('2d');
    Object.assign(overlay.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', touchAction: 'none', cursor: 'grab', outline: 'none' });
    overlay.tabIndex = 0;
    overlay.setAttribute('aria-label', 'Interactive solar system. Drag to rotate, arrow keys to zoom, click a planet for info.');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const makeBody = (name, r, d, s, tex, info) => ({
        name, r, d, s, tex, info, angle: Math.random() * Math.PI * 2, sx: 0, sy: 0, moon: null, rings: false,
    });

    // slider geometry matches the original (x 30, y 125, 160 x 10)
    const SL = { x: 30, y: 125, w: 160, h: 10 };

    const sketch = (p) => {
        p.preload = () => {
            skyTex = p.loadImage(`${BASE}space.jpg`);
            const sunImg = p.loadImage(`${BASE}sun.jpg`);
            sun = makeBody('Sun', 60, 0, 0, sunImg, 'Type: G-Type Star\nMass: 333k Earths\nTemp: 5,500 °C');
            PLANET_DATA.forEach((d) => {
                const b = makeBody(d.name, d.r, d.d, d.s, p.loadImage(`${BASE}${d.tex}.jpg`), d.info);
                b.rings = !!d.rings;
                planets.push(b);
            });
            const earth = planets[2];
            earth.moon = makeBody('Moon', 4, 30, 0.08, p.loadImage(`${BASE}moon.jpg`), 'Dist from Earth: 384k km\nRadius: 1,737 km\nTemp: -53 °C');
            bodies.push(sun, ...planets);
        };

        const fit = () => {
            const w = Math.max(280, Math.floor(container.clientWidth));
            const h = Math.round(clamp(w * (w < 600 ? 1.15 : 0.8), 360, 800));
            W = w; H = h;
            eyeZ = (H / 2) / Math.tan(Math.PI / 6);
            p.resizeCanvas(W, H);
            overlay.width = W * dpr;
            overlay.height = H * dpr;
            container.style.height = `${H}px`;
        };

        p.setup = () => {
            p.pixelDensity(dpr);
            const c = p.createCanvas(10, 10, p.WEBGL);
            c.parent(container);
            c.elt.style.display = 'block';
            container.appendChild(overlay);
            p.setAttributes('antialias', true);
            fit();
            new ResizeObserver(fit).observe(container);
            onReady && onReady();
        };

        // view transform R = Rx(camRotX) * Ry(camRotY), then z += camZoom (as in the original)
        const toView = (x, y, z) => {
            const cy = Math.cos(camRotY), sy = Math.sin(camRotY);
            let x1 = x * cy + z * sy;
            const z1 = -x * sy + z * cy;
            const cx = Math.cos(camRotX), sx = Math.sin(camRotX);
            const y2 = y * cx - z1 * sx;
            const z2 = y * sx + z1 * cx;
            return [x1, y2, z2 + camZoom];
        };

        const project = (x, y, z) => {
            const [vx, vy, vz] = toView(x, y, z);
            const depth = eyeZ - vz;
            if (depth <= 1) return [-9999, -9999];
            const k = eyeZ / depth;
            return [W / 2 + vx * k, H / 2 + vy * k];
        };

        const updateLabelPos = (b, ox, oz, rot) => {
            // label anchor (0, -r-15, 0) in the body's local frame
            b.sx = 0; b.sy = 0;
            const [sx, sy] = project(ox, -b.r - 15, oz);
            b.sx = sx; b.sy = sy;
            return rot;
        };

        // flat ring in the XZ plane (the original used rotateX(HALF_PI) + circle())
        const ring = (rad) => {
            p.beginShape();
            for (let i = 0; i < 128; i++) {
                const a = (i / 128) * Math.PI * 2;
                p.vertex(rad * Math.cos(a), 0, rad * Math.sin(a));
            }
            p.endShape(p.CLOSE);
        };

        const drawBody = (b) => {
            p.push();
            p.texture(b.tex);
            p.noStroke();
            p.sphere(b.r, 40, 40);
            p.pop();
        };

        const renderPlanet = (b, dt) => {
            b.angle += b.s * speedMult * dt;
            p.push();
            if (b.d > 0) {
                p.push();
                p.noFill();
                p.stroke(255, 50);
                p.strokeWeight(1);
                ring(b.d);
                p.pop();
            }
            p.rotateY(b.angle);
            p.translate(b.d, 0, 0);
            // world position of the planet origin (Ry(angle) then x = d)
            const px = b.d * Math.cos(b.angle);
            const pz = -b.d * Math.sin(b.angle);
            updateLabelPos(b, px, pz);
            drawBody(b);
            if (b.rings) {
                p.push();
                p.noFill();
                p.strokeWeight(3);
                p.stroke(200, 180, 140, 200);
                ring(b.r * 2.8 / 2);
                p.stroke(180, 160, 120, 200);
                ring(b.r * 3.4 / 2);
                p.pop();
            }
            if (b.moon) {
                const m = b.moon;
                m.angle += m.s * speedMult * dt;
                p.push();
                p.push();
                p.noFill();
                p.stroke(255, 50);
                p.strokeWeight(1);
                ring(m.d * 2 / 2);
                p.pop();
                p.rotateY(m.angle);
                p.translate(m.d, 0, 0);
                const tot = b.angle + m.angle;
                const mx = px + m.d * Math.cos(tot);
                const mz = pz - m.d * Math.sin(tot);
                updateLabelPos(m, mx, mz);
                drawBody(m);
                p.pop();
            }
            p.pop();
        };

        p.draw = () => {
            const dt = Math.min(p.deltaTime || 16.67, 50) / 16.67;
            p.background(0);
            p.perspective(Math.PI / 3, W / H, eyeZ / 10, eyeZ * 10);

            // camera() with the inverse of the original's model transform, so lights live in true world space
            const cyv = Math.cos(camRotY), syv = Math.sin(camRotY);
            const cxv = Math.cos(camRotX), sxv = Math.sin(camRotX);
            const inv = (x, y, z) => {
                // R^-1 = Ry^-1 Rx^-1
                const y1 = y * cxv + z * sxv;
                const z1 = -y * sxv + z * cxv;
                return [x * cyv - z1 * syv, y1, x * syv + z1 * cyv];
            };
            const e = inv(0, 0, eyeZ - camZoom);
            const c = inv(0, 0, -camZoom);
            const u = inv(0, 1, 0);
            p.camera(e[0], e[1], e[2], c[0], c[1], c[2], u[0], u[1], u[2]);

            // skybox
            p.push();
            p.noLights();
            p.noStroke();
            p.texture(skyTex);
            p.sphere(3000, 40, 40);
            p.pop();

            // the sun is unlit
            p.noLights();
            sun.sx = 0;
            {
                const [sx, sy] = project(0, -sun.r - 15, 0);
                sun.sx = sx; sun.sy = sy;
            }
            drawBody(sun);

            p.ambientLight(80, 80, 80);
            p.pointLight(255, 255, 255, 0, 0, 0);
            planets.forEach((b) => renderPlanet(b, dt));

            drawOverlay();
        };

        const labelOf = (b) => {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'alphabetic';
            ctx.font = '12px "JetBrains Mono", monospace';
            ctx.fillStyle = '#000';
            ctx.fillText(b.name, b.sx + 1, b.sy + 1);
            ctx.fillStyle = selected === b ? 'rgb(100,200,255)' : '#fff';
            ctx.fillText(b.name, b.sx, b.sy);
        };

        const panel = (x, y, w, h) => {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, 8);
            ctx.fill();
        };

        const lines = (txt, x, y, lh = 14.4) => {
            txt.split('\n').forEach((l, i) => ctx.fillText(l, x, y + i * lh));
        };

        const drawOverlay = () => {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, W, H);
            bodies.forEach((b) => { labelOf(b); if (b.moon) labelOf(b.moon); });

            panel(15, 15, 220, 140);
            ctx.textAlign = 'left';
            ctx.fillStyle = '#fff';
            ctx.font = '14px "JetBrains Mono", monospace';
            ctx.fillText('CONTROLS', 30, 40);
            ctx.font = '11px "JetBrains Mono", monospace';
            ctx.fillStyle = 'rgb(200,200,200)';
            lines('Drag Mouse : Rotate Camera\nUp/Down    : Zoom In/Out\nClick Planet: View Info', 30, 60);
            ctx.fillStyle = '#fff';
            ctx.fillText(`Speed: ${speedMult.toFixed(1)}x`, 30, 115);
            ctx.fillStyle = 'rgb(100,100,100)';
            ctx.beginPath(); ctx.roundRect(SL.x, SL.y, SL.w, SL.h, 5); ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.beginPath(); ctx.roundRect(SL.x + (speedMult / 5) * SL.w - 4, SL.y - 2, 8, SL.h + 4, 3); ctx.fill();

            if (selected) {
                const narrow = W < 520;
                const px = narrow ? 15 : W - 220;
                const py = narrow ? 170 : 15;
                const pw = narrow ? 220 : 200;
                panel(px, py, pw, 120);
                ctx.fillStyle = '#fff';
                ctx.font = '14px "JetBrains Mono", monospace';
                ctx.fillText(selected.name.toUpperCase(), px + 15, py + 25);
                ctx.font = '11px "JetBrains Mono", monospace';
                ctx.fillStyle = 'rgb(200,200,200)';
                lines(selected.info, px + 15, py + 45);
            }
        };
    };

    // input
    const pos = (e) => {
        const r = overlay.getBoundingClientRect();
        return [(e.clientX - r.left) * (W / r.width), (e.clientY - r.top) * (H / r.height)];
    };
    const setSpeed = (mx) => { speedMult = (clamp(mx, SL.x, SL.x + SL.w) - SL.x) / SL.w * 5; };

    overlay.addEventListener('pointerdown', (e) => {
        overlay.setPointerCapture(e.pointerId);
        overlay.focus({ preventScroll: true });
        const [mx, my] = pos(e);
        lastX = mx; lastY = my;
        if (mx >= SL.x - 8 && mx <= SL.x + SL.w + 8 && my >= SL.y - 5 && my <= SL.y + SL.h + 5) {
            draggingSlider = true;
            setSpeed(mx);
            return;
        }
        selected = null;
        const hit = (b) => (mx - b.sx) ** 2 + (my - b.sy) ** 2 < 1600;
        if (hit(sun)) selected = sun;
        planets.forEach((b) => {
            if (hit(b)) selected = b;
            if (b.moon && hit(b.moon)) selected = b.moon;
        });
        dragging = true;
        overlay.style.cursor = 'grabbing';
    });
    overlay.addEventListener('pointermove', (e) => {
        const [mx, my] = pos(e);
        if (draggingSlider) setSpeed(mx);
        else if (dragging) {
            camRotY += (mx - lastX) * 0.01;
            camRotX += (my - lastY) * 0.01;
        }
        lastX = mx; lastY = my;
    });
    const up = () => { draggingSlider = false; dragging = false; overlay.style.cursor = 'grab'; };
    overlay.addEventListener('pointerup', up);
    overlay.addEventListener('pointercancel', up);
    overlay.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') { camZoom += 50; e.preventDefault(); }
        if (e.key === 'ArrowDown') { camZoom -= 50; e.preventDefault(); }
    });

    const instance = new p5(sketch, container);

    return {
        zoom: (dz) => { camZoom += dz; },
        // exposed for headless verification
        _state: () => ({ camZoom, camRotX, camRotY, speedMult, selected: selected && selected.name, labels: [sun, ...planets, planets[2] && planets[2].moon].filter(Boolean).map((b) => [b.name, Math.round(b.sx), Math.round(b.sy)]) }),
        destroy: () => { instance.remove(); overlay.remove(); },
    };
}
