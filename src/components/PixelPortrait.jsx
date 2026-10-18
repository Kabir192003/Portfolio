import React, { useEffect, useRef } from 'react';

// Portrait drawn as ordered-dither dots. Moving the pointer across it paints a fading
// trail that reveals the real colour photo underneath.
const INK = '20,20,20';
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

const PixelPortrait = ({ src, alt, cell = 4, radius = 100, style }) => {
    const wrapRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let img, dots, mask, mctx, tmp, tctx;
        let W = 0, H = 0, dpr = 1;
        let raf = 0, alive = true;
        let last = null;
        let sweep = null;
        let busy = false;
        let lastActive = 0;
        let cur = null;

        const buildDots = () => {
            // sample the photo at cell resolution, then dither to dots
            const cols = Math.max(1, Math.round(W / cell));
            const rows = Math.max(1, Math.round(H / cell));
            const sm = document.createElement('canvas');
            sm.width = cols; sm.height = rows;
            const sx = sm.getContext('2d', { willReadFrequently: true });
            sx.drawImage(img, 0, 0, cols, rows);
            const d = sx.getImageData(0, 0, cols, rows).data;
            dots = document.createElement('canvas');
            dots.width = W * dpr; dots.height = H * dpr;
            const dx = dots.getContext('2d');
            dx.scale(dpr, dpr);
            const cw = W / cols, ch = H / rows;
            dx.fillStyle = `rgb(${INK})`;
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const i = (y * cols + x) * 4;
                    const a = d[i + 3] / 255;
                    if (a < 0.5) continue;
                    let lum = (0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]) / 255;
                    lum = Math.min(1, Math.max(0, (Math.pow(lum, 0.8) - 0.5) * 1.3 + 0.5)); // lift mid-tones, add contrast
                    const dark = 1 - lum;
                    const t = (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16;
                    if (dark > t) dx.fillRect(x * cw, y * ch, cw * 0.82, ch * 0.82);
                }
            }
        };

        const resize = () => {
            if (!img) return;
            const w = wrap.clientWidth;
            if (!w) return;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = w; H = Math.round(w * (img.naturalHeight / img.naturalWidth));
            canvas.width = W * dpr; canvas.height = H * dpr;
            canvas.style.height = `${H}px`;
            mask = document.createElement('canvas'); mask.width = W * dpr; mask.height = H * dpr;
            mctx = mask.getContext('2d');
            tmp = document.createElement('canvas'); tmp.width = W * dpr; tmp.height = H * dpr;
            tctx = tmp.getContext('2d');
            buildDots();
            render();
        };

        const render = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(dots, 0, 0);
            // colour photo, cut by the mask
            tctx.globalCompositeOperation = 'source-over';
            tctx.clearRect(0, 0, tmp.width, tmp.height);
            tctx.drawImage(img, 0, 0, tmp.width, tmp.height);
            tctx.globalCompositeOperation = 'destination-in';
            tctx.drawImage(mask, 0, 0);
            tctx.globalCompositeOperation = 'source-over';
            ctx.drawImage(tmp, 0, 0);
        };

        const stamp = (x, y, r) => {
            const g = mctx.createRadialGradient(x * dpr, y * dpr, 0, x * dpr, y * dpr, r * dpr);
            g.addColorStop(0, 'rgba(0,0,0,1)');
            g.addColorStop(0.72, 'rgba(0,0,0,1)');
            g.addColorStop(0.9, 'rgba(0,0,0,0.5)');
            g.addColorStop(1, 'rgba(0,0,0,0)');
            mctx.fillStyle = g;
            mctx.beginPath(); mctx.arc(x * dpr, y * dpr, r * dpr, 0, Math.PI * 2); mctx.fill();
        };
        const R = () => Math.max(radius, W * 0.3); // big enough to uncover a whole face
        const stroke = (x, y) => {
            lastActive = performance.now();
            if (last) {
                const dx = x - last.x, dy = y - last.y;
                const n = Math.max(1, Math.ceil(Math.hypot(dx, dy) / (R() * 0.3)));
                for (let i = 1; i <= n; i++) stamp(last.x + (dx * i) / n, last.y + (dy * i) / n, R());
            } else stamp(x, y, R());
            last = { x, y };
        };

        const loop = () => {
            raf = 0;
            if (!alive || !mctx) return;
            // fade the trail
            mctx.globalCompositeOperation = 'destination-out';
            mctx.fillStyle = 'rgba(0,0,0,0.035)';
            mctx.fillRect(0, 0, mask.width, mask.height);
            mctx.globalCompositeOperation = 'source-over';
            if (busy && cur) { stamp(cur.x, cur.y, R()); lastActive = performance.now(); }
            if (sweep) {
                const t = (performance.now() - sweep.t0) / sweep.dur;
                if (t >= 1) sweep = null;
                else {
                    const e = t * t * (3 - 2 * t);
                    const p = sweep.pts;
                    const k = e * (p.length - 1), i = Math.min(p.length - 2, Math.floor(k)), f = k - i;
                    stroke((p[i][0] + (p[i + 1][0] - p[i][0]) * f) * W, (p[i][1] + (p[i + 1][1] - p[i][1]) * f) * H);
                }
            }
            render();
            // keep animating until the trail has faded, then clear any 8-bit residue and stop
            if (sweep || busy || performance.now() - lastActive < 3800) raf = requestAnimationFrame(loop);
            else { mctx.clearRect(0, 0, mask.width, mask.height); render(); last = null; }
        };
        const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

        const pos = (e) => {
            const r = canvas.getBoundingClientRect();
            return [e.clientX - r.left, e.clientY - r.top];
        };
        const onMove = (e) => { const [x, y] = pos(e); cur = { x, y }; sweep = null; stroke(x, y); kick(); };
        const onEnter = (e) => { busy = true; last = null; const [x, y] = pos(e); cur = { x, y }; sweep = null; stroke(x, y); kick(); };
        const onLeave = () => { busy = false; cur = null; last = null; kick(); };
        wrap.addEventListener('pointermove', onMove);
        wrap.addEventListener('pointerenter', onEnter);
        wrap.addEventListener('pointerleave', onLeave);
        wrap.addEventListener('pointerdown', onEnter);

        const im = new Image();
        im.onload = () => {
            img = im;
            resize();
            if (!reduce) {
                // a short hint sweep so people see it responds
                sweep = { t0: performance.now() + 600, dur: 2200, pts: [[0.2, 0.25], [0.7, 0.35], [0.35, 0.6], [0.75, 0.8]] };
                const start = () => { if (alive) kick(); };
                setTimeout(start, 600);
            }
        };
        im.src = src;
        const ro = new ResizeObserver(resize);
        ro.observe(wrap);

        return () => {
            alive = false;
            if (raf) cancelAnimationFrame(raf);
            ro.disconnect();
            wrap.removeEventListener('pointermove', onMove);
            wrap.removeEventListener('pointerenter', onEnter);
            wrap.removeEventListener('pointerleave', onLeave);
            wrap.removeEventListener('pointerdown', onEnter);
        };
    }, [src, cell, radius]);

    return (
        <div ref={wrapRef} style={{ position: 'relative', width: '100%', touchAction: 'pan-y', cursor: 'crosshair', ...style }}>
            <canvas ref={canvasRef} role="img" aria-label={alt} style={{ width: '100%', display: 'block' }} />
            <span style={{ position: 'absolute', left: 0, bottom: '-0.2rem', background: '#2e2bef', color: '#f2f0ea', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', padding: '5px 9px', pointerEvents: 'none' }}>
                ↗ MOVE ACROSS THE PORTRAIT TO REVEAL
            </span>
        </div>
    );
};

export default PixelPortrait;
