import React, { useCallback, useEffect, useRef, useState } from 'react';

// Web port of my Processing image-processing sketch (A5.3). Same maths, run per pixel on a 800x600 canvas.
const INK = '#141414';
const RULE = '#2e2bef';
const MONO = "'JetBrains Mono', monospace";
const W = 800;
const H = 600;
const FILTERS = ['None', 'Grayscale', 'Invert', 'Color Swap', 'Red Tint', 'Green Tint', 'Blue Tint', 'Posterize', 'Noise', 'Sepia', 'Blur'];

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

    const btn = (active) => ({ fontFamily: MONO, fontSize: '0.78rem', border: `1px solid ${INK}`, background: active ? INK : 'transparent', color: active ? '#f2f0ea' : INK, padding: '8px 12px', cursor: 'pointer' });
    const group = { borderTop: `1px solid ${INK}`, padding: '0.9rem 0 0.2rem', marginTop: '0.9rem' };
    const heading = { fontFamily: MONO, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: RULE, marginBottom: '0.55rem' };
    const hint = { fontFamily: MONO, fontSize: '0.7rem', color: '#8a8578', marginLeft: '0.5rem' };

    return (
        <div tabIndex={0} onKeyDown={onKey} style={{ outline: 'none' }} aria-label="Image filter lab. Number keys choose filters, arrow keys change brightness, space toggles before and after.">
            <div style={{ position: 'relative', border: `1px solid ${INK}`, background: '#000', lineHeight: 0 }}>
                <canvas ref={canvasRef} width={W} height={H} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <span style={{ position: 'absolute', left: 12, top: 12, background: INK, color: '#f2f0ea', fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.08em', padding: '6px 10px', lineHeight: 1.2 }}>
                    {split ? 'BEFORE (LEFT) · AFTER (RIGHT)' : filter === 0 ? 'ORIGINAL PHOTO' : `FILTER: ${FILTERS[filter].toUpperCase()}`}
                </span>
                {saved && <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: '#00c800', color: '#fff', fontFamily: MONO, fontSize: '0.9rem', padding: '14px 28px', lineHeight: 1 }}>IMAGE SAVED!</span>}
                {!ready && <span style={{ position: 'absolute', left: 16, top: 16, color: '#aaa', fontFamily: MONO, fontSize: '0.75rem' }}>LOADING…</span>}
            </div>

            <div style={group}>
                <div style={heading}>1 · Pick a filter <span style={hint}>(click one, then try another)</span></div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {FILTERS.map((name, i) => (
                        <button key={name} style={btn(filter === i)} onClick={() => setFilter(i)} aria-pressed={filter === i}>
                            {i === 0 ? 'No filter' : name}
                        </button>
                    ))}
                </div>
            </div>

            <div style={group}>
                <div style={heading}>2 · Brightness <span style={{ ...hint, color: RULE }}>{brightness > 0 ? '+' : ''}{brightness}</span></div>
                <input type="range" min={-100} max={100} step={5} value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} aria-label="Brightness" style={{ width: '100%', maxWidth: '420px', accentColor: RULE }} />
            </div>

            <div style={group}>
                <div style={heading}>3 · Compare and save</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <button style={btn(split)} onClick={() => setSplit((s) => !s)} aria-pressed={split}>{split ? 'Showing before / after' : 'Show before / after'}</button>
                    <button style={btn(false)} onClick={reset}>Reset everything</button>
                    <button style={btn(false)} onClick={save}>Download image</button>
                </div>
                <p style={{ ...hint, marginLeft: 0, marginTop: '0.8rem', lineHeight: 1.6 }}>Keyboard shortcuts (click the image first): 1–9 and Q choose filters, 0 resets, ↑ ↓ change brightness, space toggles before / after, S downloads.</p>
            </div>
        </div>
    );
};

export default ImageLab;
