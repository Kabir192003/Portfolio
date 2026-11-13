import React, { useRef, useState } from 'react';

// Portrait shown as a cool duotone. On load it opens like blinds, strip by strip.
// On hover a soft spotlight of full colour follows the pointer and the plate tilts
// a touch; on touch screens a tap switches the whole photo to colour.
const STRIPS = 8;

const PortraitPlate = ({ src, alt }) => {
    const ref = useRef(null);
    const [on, setOn] = useState(false);
    const [full, setFull] = useState(false);

    const move = (e) => {
        if (e.pointerType === 'touch') return;
        const el = ref.current;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
        el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        el.style.setProperty('--rx', `${((0.5 - y) * 5).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${((x - 0.5) * 6).toFixed(2)}deg`);
    };
    const leave = () => {
        setOn(false);
        const el = ref.current;
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
    };

    return (
        <div
            ref={ref}
            className={`pp${on ? ' pp-on' : ''}${full ? ' pp-full' : ''}`}
            onPointerEnter={(e) => { if (e.pointerType !== 'touch') setOn(true); }}
            onPointerMove={move}
            onPointerLeave={leave}
            onClick={() => setFull((f) => !f)}
            role="img"
            aria-label={alt}
        >
            <div className="pp-tilt">
                <img src={src} alt="" className="pp-img pp-duo" draggable="false" />
                <img src={src} alt="" className="pp-img pp-colour" draggable="false" />
                <div className="pp-blinds" aria-hidden="true">
                    {Array.from({ length: STRIPS }, (_, i) => <span key={i} style={{ '--i': i }} />)}
                </div>
            </div>
            <span className="pp-hint">{full ? '↺ Tap for duotone' : '↗ Hover or tap for colour'}</span>

            <style>{`
                .pp { position: relative; perspective: 900px; cursor: crosshair; user-select: none; --mx: 50%; --my: 40%; --rx: 0deg; --ry: 0deg; }
                .pp-tilt { position: relative; transform: rotateX(var(--rx)) rotateY(var(--ry)); transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); transform-style: preserve-3d; }
                .pp-img { display: block; width: 100%; height: auto; }
                .pp-duo { filter: grayscale(1) contrast(1.12) brightness(1.03) sepia(0.35) hue-rotate(185deg) saturate(1.5); }
                .pp-colour { position: absolute; inset: 0; opacity: 0; transition: opacity 0.45s ease;
                    -webkit-mask-image: radial-gradient(circle 150px at var(--mx) var(--my), #000 45%, transparent 100%);
                    mask-image: radial-gradient(circle 150px at var(--mx) var(--my), #000 45%, transparent 100%); }
                .pp-on .pp-colour { opacity: 1; }
                .pp-full .pp-colour { opacity: 1; -webkit-mask-image: none; mask-image: none; }
                .pp-blinds { position: absolute; inset: -1px; display: flex; pointer-events: none; }
                .pp-blinds span { flex: 1; background: #ebe8e0; transform-origin: top; animation: pp-open 0.9s cubic-bezier(0.76,0,0.24,1) calc(0.25s + var(--i) * 0.07s) forwards; }
                .pp-blinds span:nth-child(odd) { transform-origin: bottom; }
                @keyframes pp-open { to { transform: scaleY(0); } }
                .pp-hint { position: absolute; left: 0; bottom: -0.2rem; background: #2e2bef; color: #f2f0ea; font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; padding: 5px 9px; pointer-events: none; text-transform: uppercase; opacity: 0; animation: pp-fade 0.5s ease 1.3s forwards; }
                @keyframes pp-fade { to { opacity: 1; } }
                @media (hover: none) { .pp-tilt { transform: none; } }
                @media (prefers-reduced-motion: reduce) {
                    .pp-blinds span { animation: none; transform: scaleY(0); }
                    .pp-tilt { transition: none; transform: none; }
                    .pp-hint { animation: none; opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default PortraitPlate;
