import React, { useCallback, useEffect, useRef, useState } from 'react';

// Web port of my Processing image-processing sketch (A5.3). Same maths, run per pixel on a 800x600 canvas.
const INK = '#141414';
const RULE = '#2e2bef';
const MONO = "'JetBrains Mono', monospace";
const W = 800;
const H = 600;
const FILTERS = ['None', 'Grayscale', 'Invert', 'Color Swap', 'Red Tint', 'Green Tint', 'Blue Tint', 'Posterize', 'Noise', 'Sepia', 'Blur'];
const KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Q'];

const clamp = (v) => Math.min(255, Math.max(0, v));

function processPixels(src, filter, brightness) {
    const out = new Uint8ClampedArray(src.length);
    for (let i = 0; i < src.length; i += 4) {
        let r = clamp(src[i] + brightness);
        let g = clamp(src[i + 1] + brightness);
        let b = clamp(src[i + 2] + brightness);
        if (filter !== 10) {
            switch (filter) {
                case 1: { const gr = (r + g + b) / 3; r = g = b = gr; break; }
                case 2: r = 255 - r; g = 255 - g; b = 255 - b; break;
                case 3: { const t = r; r = b; b = t; break; }
                case 4: g *= 0.5; b *= 0.5; break;
                case 5: r *= 0.5; b *= 0.5; break;
                case 6: r *= 0.5; g *= 0.5; break;
                case 7: { const f = 255 / 4; r = Math.floor(r / f) * f; g = Math.floor(g / f) * f; b = Math.floor(b / f) * f; break; }
                case 8: { const n = Math.random() * 60 - 30; r = clamp(r + n); g = clamp(g + n); b = clamp(b + n); break; }
                case 9: {
                    const sr = clamp(r * 0.393 + g * 0.769 + b * 0.189);
                    const sg = clamp(r * 0.349 + g * 0.686 + b * 0.168);
                    const sb = clamp(r * 0.272 + g * 0.534 + b * 0.131);
                    r = sr; g = sg; b = sb; break;
                }
                default: break;
            }
        }
        out[i] = r; out[i + 1] = g; out[i + 2] = b; out[i + 3] = 255;
    }
    if (filter === 10) {
        // 3x3 box blur on the brightness-adjusted copy; border pixels stay as they are
        const tmp = out.slice();
        for (let x = 1; x < W - 1; x++) {
            for (let y = 1; y < H - 1; y++) {
                let r = 0, g = 0, b = 0;
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        const k = ((x + dx) + (y + dy) * W) * 4;
                        r += tmp[k]; g += tmp[k + 1]; b += tmp[k + 2];
                    }
                }
                const o = (x + y * W) * 4;
                out[o] = r / 9; out[o + 1] = g / 9; out[o + 2] = b / 9;
            }
        }
    }
    return out;
}

const ImageLab = () => {
    const canvasRef = useRef(null);
    const srcRef = useRef(null);
    const [filter, setFilter] = useState(0);
    const [brightness, setBrightness] = useState(0);
    const [split, setSplit] = useState(false);
    const [ready, setReady] = useState(false);
    const [saved, setSaved] = useState(false);
    const origCanvas = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            const c = document.createElement('canvas');
            c.width = W; c.height = H;
            const x = c.getContext('2d', { willReadFrequently: true });
            x.drawImage(img, 0, 0, W, H);
            srcRef.current = x.getImageData(0, 0, W, H).data;
            origCanvas.current = c;
            setReady(true);
        };
        img.src = './msc/image-lab/source.jpg';
    }, []);

    const draw = useCallback(() => {
        const cv = canvasRef.current;
        if (!cv || !srcRef.current) return;
        const ctx = cv.getContext('2d');
        const px = processPixels(srcRef.current, filter, brightness);
        const proc = new ImageData(px, W, H);
        if (split) {
            const tmp = document.createElement('canvas');
            tmp.width = W; tmp.height = H;
            tmp.getContext('2d').putImageData(proc, 0, 0);
            ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
            ctx.drawImage(origCanvas.current, 0, 0, W / 2, H);
            ctx.drawImage(tmp, W / 2, 0, W / 2, H);
            ctx.strokeStyle = '#ff0000'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
        } else {
            ctx.putImageData(proc, 0, 0);
        }
    }, [filter, brightness, split]);

    useEffect(() => { if (ready) draw(); }, [ready, draw]);

    const save = () => {
        const a = document.createElement('a');
        a.href = canvasRef.current.toDataURL('image/jpeg', 0.92);
        a.download = 'filtered-image.jpg';
        a.click();
        setSaved(true);
        setTimeout(() => setSaved(false), 1200);
    };

    const reset = () => { setFilter(0); setBrightness(0); };
    const bright = (d) => setBrightness((b) => Math.min(100, Math.max(-100, b + d)));

    const onKey = (e) => {
        const k = e.key;
        if (/^[0-9]$/.test(k)) { k === '0' ? reset() : setFilter(Number(k)); }
        else if (k === 'q' || k === 'Q') setFilter(10);
        else if (k === ' ') setSplit((s) => !s);
        else if (k === 'ArrowUp') bright(5);
        else if (k === 'ArrowDown') bright(-5);
        else if (k === 's' || k === 'S') save();
        else return;
        e.preventDefault();
    };

    const btn = (active) => ({ fontFamily: MONO, fontSize: '0.72rem', border: `1px solid ${INK}`, background: active ? INK : 'transparent', color: active ? '#f2f0ea' : INK, padding: '6px 10px', cursor: 'pointer' });

    return (
        <div tabIndex={0} onKeyDown={onKey} style={{ outline: 'none' }} aria-label="Image filter lab. Number keys choose filters, arrow keys change brightness, space toggles split view.">
            <div style={{ position: 'relative', border: `1px solid ${INK}`, background: '#000', lineHeight: 0 }}>
                <canvas ref={canvasRef} width={W} height={H} style={{ width: '100%', height: 'auto', display: 'block' }} />
                {saved && <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: '#00c800', color: '#fff', fontFamily: MONO, fontSize: '0.9rem', padding: '14px 28px', lineHeight: 1 }}>IMAGE SAVED!</span>}
                {!ready && <span style={{ position: 'absolute', left: 16, top: 16, color: '#aaa', fontFamily: MONO, fontSize: '0.75rem' }}>LOADING…</span>}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.8rem' }}>
                {FILTERS.map((name, i) => (
                    <button key={name} style={btn(filter === i)} onClick={() => setFilter(i)}>
                        {KEYS[i]} · {name}
                    </button>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem', alignItems: 'center' }}>
                <button style={btn(false)} onClick={() => bright(-5)}>BRIGHTNESS −</button>
                <span style={{ fontFamily: MONO, fontSize: '0.78rem', minWidth: '5.5rem', textAlign: 'center', color: RULE }}>{brightness > 0 ? '+' : ''}{brightness}</span>
                <button style={btn(false)} onClick={() => bright(5)}>BRIGHTNESS +</button>
                <button style={btn(split)} onClick={() => setSplit((s) => !s)}>SPLIT VIEW</button>
                <button style={btn(false)} onClick={reset}>RESET</button>
                <button style={btn(false)} onClick={save}>SAVE IMAGE</button>
            </div>
            <p style={{ fontFamily: MONO, fontSize: '0.7rem', color: '#8a8578', marginTop: '0.6rem' }}>Keys work too: 0–9 and Q pick filters, ↑ ↓ brightness, space split, S save. Click the image first.</p>
        </div>
    );
};

export default ImageLab;
