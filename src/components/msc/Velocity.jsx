import React, { useEffect, useRef, useState } from 'react';

const INK = '#141414';
const MONO = "'JetBrains Mono', monospace";

const Velocity = () => {
    const host = useRef(null);
    const api = useRef(null);
    const [ready, setReady] = useState(false);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        let cancelled = false;
        import('./velocitySketch').then(({ createVelocity }) => {
            if (cancelled || !host.current) return;
            api.current = createVelocity(host.current, { onReady: () => setReady(true) });
            window.__velocity = api.current;
        });
        return () => {
            cancelled = true;
            if (api.current) api.current.destroy();
            api.current = null;
        };
    }, []);

    const toggleMute = () => {
        const m = !muted;
        setMuted(m);
        if (api.current) api.current.setMuted(m);
    };

    const btn = { fontFamily: MONO, fontSize: '0.78rem', border: `1px solid ${INK}`, background: 'transparent', color: INK, padding: '8px 14px', cursor: 'pointer', touchAction: 'none', userSelect: 'none' };
    const hold = (name) => ({
        onPointerDown: (e) => { e.currentTarget.setPointerCapture(e.pointerId); api.current && api.current.press(name, true); },
        onPointerUp: () => api.current && api.current.press(name, false),
        onPointerCancel: () => api.current && api.current.press(name, false),
    });

    return (
        <div>
            <div ref={host} style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000', border: `1px solid ${INK}`, overflow: 'hidden' }}>
                {!ready && <span style={{ position: 'absolute', left: '1rem', top: '1rem', color: '#aaa', fontFamily: MONO, fontSize: '0.75rem' }}>LOADING…</span>}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button style={btn} onClick={() => { api.current && api.current.focus(); api.current && api.current.press('enter', true); }}>START / RESTART</button>
                <button style={btn} onClick={() => api.current && api.current.press('rain', true)}>TOGGLE RAIN</button>
                <button style={btn} onClick={toggleMute}>{muted ? 'SOUND OFF' : 'SOUND ON'}</button>
                <span style={{ fontFamily: MONO, fontSize: '0.7rem', color: '#8a8578' }}>Click the game first · ↑ ↓ ← → drive · space = clutch / nitro</span>
            </div>
            <div className="velocity-touch" style={{ display: 'none', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                <button style={btn} {...hold('left')}>◀</button>
                <button style={btn} {...hold('right')}>▶</button>
                <button style={btn} {...hold('up')}>GAS</button>
                <button style={btn} {...hold('down')}>BRAKE</button>
                <button style={btn} {...hold('space')}>NITRO / CLUTCH</button>
            </div>
            <style>{`@media (pointer: coarse) { .velocity-touch { display: flex !important; } }`}</style>
        </div>
    );
};

export default Velocity;
