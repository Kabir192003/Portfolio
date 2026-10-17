import React, { useCallback, useEffect, useRef, useState } from 'react';

// Web port of my Processing bubble chart (A5.2): same scales, colours, hover, guides and region filter.
const INK = '#141414';
const MONO = "'JetBrains Mono', monospace";
const LW = 1100, LH = 700;
const M = { left: 60, right: 150, top: 60, bottom: 60 };
const MIN_INC = 400, MAX_INC = 150000, MIN_H = 45, MAX_H = 85, MAX_POP = 1.4e9;
const KEYS = ['AMER', 'EUROPE', 'AFRICA', 'ASIA', 'OCEANIA', 'OTHER'];
const LABELS = ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania', 'Others'];
const COLORS = { AMER: '#2ECC71', EUROPE: '#F1C40F', AFRICA: '#3498DB', ASIA: '#E74C3C', OCEANIA: '#9B59B6', OTHER: '#95A5A6' };
const FONT = 'Arial, Helvetica, sans-serif';

const map = (v, a, b, c, d) => c + ((v - a) / (b - a)) * (d - c);
const mapLog = (v, a, b, c, d) => map(Math.log(v), Math.log(a), Math.log(b), c, d);
const nfc = (n) => Math.round(n).toLocaleString('en-US');

const regionKey = (r) => {
    const u = r.toUpperCase();
    if (u.includes('AMER')) return 'AMER';
    if (u.includes('EUROPE') || u.includes('BALTICS')) return 'EUROPE';
    if (u.includes('AFRICA')) return 'AFRICA';
    if (u.includes('ASIA') || u.includes('NEAR')) return 'ASIA';
    if (u.includes('OCEANIA')) return 'OCEANIA';
    return 'OTHER';
};

const parseCsv = (text) => {
    const rows = [];
    text.trim().split(/\r?\n/).slice(1).forEach((line) => {
        const f = [];
        let cur = '', q = false;
        for (const ch of line) {
            if (ch === '"') q = !q;
            else if (ch === ',' && !q) { f.push(cur); cur = ''; } else cur += ch;
        }
        f.push(cur);
        if (f.length >= 5) rows.push({ country: f[0], region: f[1], income: +f[2], health: +f[3], population: +f[4] });
    });
    return rows;
};

const DataViz = () => {
    const ref = useRef(null);
    const [rows, setRows] = useState(null);
    const [show, setShow] = useState(() => Object.fromEntries(KEYS.map((k) => [k, true])));
    const mouse = useRef({ x: -1, y: -1 });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    useEffect(() => {
        fetch('./msc/data-viz/gapminder.csv').then((r) => r.text()).then((t) => setRows(parseCsv(t)));
    }, []);

    const draw = useCallback(() => {
        const cv = ref.current;
        if (!cv || !rows) return;
        const ctx = cv.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = 'rgb(250,250,250)';
        ctx.fillRect(0, 0, LW, LH);
        const { x: mx, y: my } = mouse.current;
        const px = (v) => mapLog(v, MIN_INC, MAX_INC, M.left, LW - M.right);
        const py = (v) => map(v, MIN_H, MAX_H, LH - M.bottom, M.top);

        ctx.fillStyle = 'rgb(50,50,50)';
        ctx.font = `bold 20px ${FONT}`;
        ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
        ctx.fillText('Global Health, Wealth & Population 2018', M.left, 40);

        // axes and grid
        ctx.lineWidth = 1;
        ctx.font = `12px ${FONT}`;
        ctx.fillStyle = 'rgb(100,100,100)';
        ctx.strokeStyle = 'rgb(200,200,200)';
        ctx.beginPath(); ctx.moveTo(M.left, LH - M.bottom); ctx.lineTo(LW - M.right, LH - M.bottom); ctx.stroke();
        ctx.textAlign = 'center';
        ctx.fillText('Income (GDP/Capita)', (LW - M.right + M.left) / 2, LH - 15);
        [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000].forEach((v) => {
            const x = px(v);
            ctx.strokeStyle = 'rgb(200,200,200)';
            ctx.beginPath(); ctx.moveTo(x, LH - M.bottom); ctx.lineTo(x, LH - M.bottom + 5); ctx.stroke();
            ctx.fillText(nfc(v), x, LH - M.bottom + 20);
            ctx.strokeStyle = 'rgb(240,240,240)';
            ctx.beginPath(); ctx.moveTo(x, M.top); ctx.lineTo(x, LH - M.bottom); ctx.stroke();
        });
        ctx.strokeStyle = 'rgb(200,200,200)';
        ctx.beginPath(); ctx.moveTo(M.left, M.top); ctx.lineTo(M.left, LH - M.bottom); ctx.stroke();
        ctx.save(); ctx.translate(20, LH / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('Life Expectancy (Years)', 0, 0); ctx.restore();
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        for (let y = 50; y <= 85; y += 5) {
            const yy = py(y);
            ctx.fillStyle = 'rgb(100,100,100)';
            ctx.fillText(String(y), M.left - 8, yy);
            ctx.strokeStyle = 'rgb(240,240,240)';
            ctx.beginPath(); ctx.moveTo(M.left, yy); ctx.lineTo(LW - M.right, yy); ctx.stroke();
        }

        // legend
        const lx = LW - M.right + 20, ly = M.top + 40;
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.font = `14px ${FONT}`; ctx.fillStyle = '#000';
        ctx.fillText('Filter Regions:', lx, ly - 30);
        ctx.font = `13px ${FONT}`;
        KEYS.forEach((k, i) => { ctx.fillStyle = show[k] ? COLORS[k] : 'rgb(200,200,200)'; ctx.fillText(LABELS[i], lx, ly + i * 30); });
        ctx.font = `11px ${FONT}`; ctx.fillStyle = 'rgb(100,100,100)';
        ctx.fillText('Bubble size represents', lx, ly + KEYS.length * 30 + 20);
        ctx.fillText('population', lx, ly + KEYS.length * 30 + 35);

        // bubbles
        let hover = null;
        rows.forEach((r) => {
            const k = regionKey(r.region);
            if (!show[k]) return;
            const x = px(r.income), y = py(r.health);
            const rad = Math.sqrt(map(r.population, 0, MAX_POP, 20, 5000));
            if (Math.hypot(mx - x, my - y) < rad) hover = { r, k, x, y, rad };
            else {
                ctx.globalAlpha = 180 / 255;
                ctx.fillStyle = COLORS[k];
                ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
                ctx.globalAlpha = 1;
            }
        });

        if (hover) {
            const { r, k, x, y, rad } = hover;
            ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 1;
            const dashed = (x1, y1, x2, y2) => {
                const d = Math.hypot(x2 - x1, y2 - y1);
                for (let i = 0; i < d; i += 10) {
                    const t1 = i / d, t2 = Math.min(1, (i + 5) / d);
                    ctx.beginPath();
                    ctx.moveTo(x1 + (x2 - x1) * t1, y1 + (y2 - y1) * t1);
                    ctx.lineTo(x1 + (x2 - x1) * t2, y1 + (y2 - y1) * t2);
                    ctx.stroke();
                }
            };
            dashed(x, y, x, LH - M.bottom);
            dashed(x, y, M.left, y);
            ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.fillStyle = COLORS[k];
            ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

            const t = r.country;
            const d = `GDP: $${nfc(r.income)} | Life: ${r.health}`;
            ctx.font = `12px ${FONT}`;
            const w = Math.max(ctx.measureText(t).width, ctx.measureText(d).width) + 25, h = 50;
            let tx = x, ty = y;
            if (tx + w > LW) tx -= w + 10; else tx += 15;
            if (ty + h > LH) ty -= h + 10; else ty += 15;
            ctx.fillStyle = 'rgba(255,255,255,0.98)'; ctx.strokeStyle = '#000'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.roundRect(tx, ty, w, h, 6); ctx.fill(); ctx.stroke();
            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
            ctx.fillStyle = '#000'; ctx.font = `12px ${FONT}`; ctx.fillText(t, tx + 10, ty + 8);
            ctx.fillStyle = 'rgb(80,80,80)'; ctx.font = `11px ${FONT}`; ctx.fillText(d, tx + 10, ty + 28);
        }
    }, [rows, show, dpr]);

    useEffect(() => { draw(); }, [draw]);

    const pos = (e) => {
        const r = ref.current.getBoundingClientRect();
        return [(e.clientX - r.left) * (LW / r.width), (e.clientY - r.top) * (LH / r.height)];
    };
    const onMove = (e) => { const [x, y] = pos(e); mouse.current = { x, y }; draw(); };
    const onLeave = () => { mouse.current = { x: -1, y: -1 }; draw(); };
    const onDown = (e) => {
        const [x, y] = pos(e);
        mouse.current = { x, y };
        const lx = LW - M.right + 20, ly = M.top + 40;
        KEYS.forEach((k, i) => {
            if (x > lx && x < lx + 100 && y > ly + i * 30 - 10 && y < ly + i * 30 + 10) setShow((s) => ({ ...s, [k]: !s[k] }));
        });
        draw();
    };
    const save = () => {
        const a = document.createElement('a');
        a.href = ref.current.toDataURL('image/png');
        a.download = 'global-health-wealth-population.png';
        a.click();
    };

    const btn = { fontFamily: MONO, fontSize: '0.78rem', border: `1px solid ${INK}`, background: 'transparent', color: INK, padding: '8px 12px', cursor: 'pointer' };

    return (
        <div>
            <div style={{ overflowX: 'auto', border: `1px solid ${INK}` }}>
                <canvas
                    ref={ref}
                    width={LW * dpr}
                    height={LH * dpr}
                    onPointerMove={onMove}
                    onPointerLeave={onLeave}
                    onPointerDown={onDown}
                    role="img"
                    aria-label="Bubble chart of countries: income on a log scale against life expectancy, bubble size by population, coloured by region"
                    style={{ width: '100%', minWidth: '720px', height: 'auto', display: 'block', cursor: 'crosshair' }}
                />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.7rem' }}>
                <button style={btn} onClick={() => setShow(Object.fromEntries(KEYS.map((k) => [k, true])))}>Show all regions</button>
                <button style={btn} onClick={save}>Download chart (PNG)</button>
                <span style={{ fontFamily: MONO, fontSize: '0.7rem', color: '#8a8578' }}>Hover a bubble for details · click a region name on the right to hide or show it</span>
            </div>
        </div>
    );
};

export default DataViz;
