import React from 'react';

// A reticle / rangefinder mark — the literal "scope" in kabiroscope.
// Pure SVG + CSS animation, no WebGL: a deliberate signature visual
// instead of decoration for its own sake.
const ScopeMark = ({ size = 440, style, className }) => {
    const ticks = Array.from({ length: 24 }, (_, i) => i * (360 / 24));

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            style={{ overflow: 'visible', ...style }}
            className={className}
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="scope-core-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="var(--accent-2)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
                </radialGradient>
            </defs>

            <circle cx="100" cy="100" r="95" fill="url(#scope-core-glow)" />

            <g style={{ transformOrigin: '100px 100px', animation: 'scope-spin 90s linear infinite' }}>
                <circle cx="100" cy="100" r="92" fill="none" stroke="var(--accent-soft-border)" strokeWidth="0.8" />
                {ticks.map((deg, i) => (
                    <line
                        key={i}
                        x1="100" y1="6"
                        x2="100" y2={i % 6 === 0 ? '19' : '13'}
                        stroke={i % 6 === 0 ? 'var(--accent-color)' : 'var(--border-strong)'}
                        strokeWidth={i % 6 === 0 ? '1.4' : '0.7'}
                        transform={`rotate(${deg} 100 100)`}
                    />
                ))}
            </g>

            <circle cx="100" cy="100" r="66" fill="none" stroke="var(--accent-2)" strokeOpacity="0.4" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="var(--border-strong)" strokeWidth="0.8" />

            {/* crosshair */}
            <line x1="100" y1="30" x2="100" y2="60" stroke="var(--accent-color)" strokeOpacity="0.55" strokeWidth="0.8" />
            <line x1="100" y1="140" x2="100" y2="170" stroke="var(--accent-color)" strokeOpacity="0.55" strokeWidth="0.8" />
            <line x1="30" y1="100" x2="60" y2="100" stroke="var(--border-strong)" strokeWidth="0.8" />
            <line x1="140" y1="100" x2="170" y2="100" stroke="var(--border-strong)" strokeWidth="0.8" />

            <circle cx="100" cy="100" r="2.6" fill="var(--accent-color)" style={{ animation: 'scope-pulse 3.2s ease-in-out infinite' }} />
        </svg>
    );
};

export default ScopeMark;
