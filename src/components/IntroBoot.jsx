import React, { useState, useEffect, useRef } from 'react';

const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';

const BOOT_LINES = [
    'INDEXING CASE FILES',
    'READING TELEMETRY',
    'ALIGNING GRID',
    'SIGNAL LOCKED.',
];

const SESSION_KEY = 'kabiroscope_intro_shown';

// Boot/intro sequence: a calibration strip fills in, the circuit-trace K
// mark assembles from four scattered fragments, then the whole overlay
// wipes up to reveal the page underneath. Plays once per browser session.
const IntroBoot = () => {
    const [visible, setVisible] = useState(() => {
        try {
            return !sessionStorage.getItem(SESSION_KEY);
        } catch {
            return true;
        }
    });
    const [pct, setPct] = useState(0);
    const [lineIdx, setLineIdx] = useState(0);
    const [assembled, setAssembled] = useState(false);
    const [wiping, setWiping] = useState(false);
    const timers = useRef([]);

    useEffect(() => {
        if (!visible) return undefined;

        try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* ignore */ }

        timers.current.push(setTimeout(() => setAssembled(true), 40));

        const pctInterval = setInterval(() => {
            setPct((p) => {
                const next = Math.min(100, p + 4);
                if (next === 100) clearInterval(pctInterval);
                return next;
            });
        }, 55);

        BOOT_LINES.forEach((_, i) => {
            timers.current.push(setTimeout(() => setLineIdx(i), 200 + i * 420));
        });

        timers.current.push(setTimeout(() => setWiping(true), 1900));
        timers.current.push(setTimeout(() => setVisible(false), 2650));

        return () => {
            clearInterval(pctInterval);
            timers.current.forEach(clearTimeout);
        };
    }, [visible]);

    if (!visible) return null;

    const litUpTo = Math.round((pct / 100) * 60);
    const ticks = Array.from({ length: 60 }, (_, i) => ({
        h: i % 5 === 0 ? 6 : 3,
        bg: i < litUpTo ? RULE : 'transparent',
    }));

    const frag = {
        stem: assembled ? 'translate(0,0)' : 'translate(-160px,-120px) rotate(-25deg)',
        upper: assembled ? 'translate(0,0)' : 'translate(180px,-140px) rotate(30deg)',
        lower: assembled ? 'translate(0,0)' : 'translate(200px,160px) rotate(-40deg)',
        cursor: assembled ? 'translate(0,0)' : 'translate(-140px,180px) rotate(60deg)',
        cursorOpacity: assembled ? 1 : 0,
    };

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: PAPER,
                overflow: 'hidden',
                transform: wiping ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'transform 0.75s cubic-bezier(0.76,0,0.24,1)',
                pointerEvents: wiping ? 'none' : 'auto',
            }}
        >
            <div style={{ borderTop: `4px solid ${INK}`, position: 'absolute', top: 0, left: 0, right: 0 }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem clamp(1.25rem,3vw,3rem)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', color: FAINT }}>LOG // CALIBRATING</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', color: RULE }}>{String(pct).padStart(3, '0')}%</span>
            </div>

            <div style={{ display: 'flex', overflow: 'hidden', height: 6, padding: '0 clamp(1.25rem,3vw,3rem)' }}>
                {ticks.map((tk, i) => (
                    <div key={i} style={{ flex: 1, borderRight: '1px solid rgba(20,20,20,0.15)', height: tk.h, background: tk.bg, transition: 'background 0.15s linear' }} />
                ))}
            </div>

            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: 'min(60vw, 420px)', aspectRatio: '1' }}>
                    <svg viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                        <line x1="40" y1="20" x2="40" y2="180" stroke={INK} strokeWidth="14" style={{ transform: frag.stem, transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)' }} />
                        <path d="M 40 108 L 90 108 L 90 60 L 130 60 L 130 30" fill="none" stroke={INK} strokeWidth="14" strokeLinejoin="round" style={{ transform: frag.upper, transition: 'transform 1s 0.12s cubic-bezier(0.16,1,0.3,1)' }} />
                        <path d="M 40 108 L 90 108 L 90 145 L 135 145 L 135 175" fill="none" stroke={INK} strokeWidth="14" strokeLinejoin="round" style={{ transform: frag.lower, transition: 'transform 1s 0.24s cubic-bezier(0.16,1,0.3,1)' }} />
                        <rect x="150" y="98" width="20" height="26" fill={RULE} style={{ transform: frag.cursor, opacity: frag.cursorOpacity, transition: 'transform 1s 0.36s cubic-bezier(0.16,1,0.3,1), opacity 1s 0.36s' }} />
                    </svg>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '1.4rem clamp(1.25rem,3vw,3rem)', borderTop: `1px solid ${INK}` }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.6rem', textTransform: 'uppercase', color: INK }}>Kabir<span style={{ color: RULE }}>::</span>Scope<span style={{ color: RULE }}>()</span></span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em', color: MUTED, minWidth: '14em', textAlign: 'right' }}>{BOOT_LINES[lineIdx]}</span>
            </div>
        </div>
    );
};

export default IntroBoot;
