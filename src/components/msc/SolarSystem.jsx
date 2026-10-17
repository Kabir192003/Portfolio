import React, { useEffect, useRef, useState } from 'react';

const INK = '#141414';

// p5 is large, so it only loads when this component mounts.
const SolarSystem = () => {
    const host = useRef(null);
    const api = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;
        import('./solarSystemSketch').then(({ createSolarSystem }) => {
            if (cancelled || !host.current) return;
            api.current = createSolarSystem(host.current, { onReady: () => setReady(true) });
            window.__solar = api.current;
        });
        return () => {
            cancelled = true;
            if (api.current) api.current.destroy();
            api.current = null;
        };
    }, []);

    const btn = { fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', border: `1px solid ${INK}`, background: 'transparent', color: INK, padding: '6px 14px', cursor: 'pointer' };

    return (
        <div>
            <div ref={host} style={{ position: 'relative', width: '100%', minHeight: '360px', background: '#000', border: `1px solid ${INK}`, overflow: 'hidden' }}>
                {!ready && <span style={{ position: 'absolute', left: '1rem', top: '1rem', color: '#aaa', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>LOADING TEXTURES…</span>}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button style={btn} onClick={() => api.current && api.current.zoom(50)}>ZOOM IN +</button>
                <button style={btn} onClick={() => api.current && api.current.zoom(-50)}>ZOOM OUT −</button>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#8a8578' }}>Drag to rotate · click a planet · arrow keys also zoom</span>
            </div>
        </div>
    );
};

export default SolarSystem;
