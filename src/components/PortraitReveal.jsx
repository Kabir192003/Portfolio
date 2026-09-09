import React, { useRef, useState } from 'react';

// A free-floating portrait: black & white at rest, colour bleeds in
// under the cursor in a soft torchlight circle. No card, no border —
// the edges feather into the page so it never reads as a boxed image.
const PortraitReveal = ({ src, alt = '', style, className, radius = 160, wrapStyle, caption }) => {
    const wrapRef = useRef(null);
    const [failed, setFailed] = useState(false);

    const setPos = (x, y) => {
        const el = wrapRef.current;
        if (!el) return;
        el.style.setProperty('--rx', `${x}px`);
        el.style.setProperty('--ry', `${y}px`);
    };

    const onMove = (e) => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setPos(e.clientX - rect.left, e.clientY - rect.top);
    };

    const onLeave = () => {
        const el = wrapRef.current;
        if (!el) return;
        // Park the reveal circle off-frame so colour fades out smoothly
        el.style.setProperty('--rx', '-9999px');
        el.style.setProperty('--ry', '-9999px');
    };

    if (failed) return null;

    return (
        <div style={wrapStyle}>
            <div
                ref={wrapRef}
                className={`portrait-reveal ${className || ''}`}
                style={{ '--radius': `${radius}px`, ...style }}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
            >
                <img src={src} alt={alt} className="portrait-reveal-bw" draggable="false" onError={() => setFailed(true)} />
                <img src={src} alt="" aria-hidden="true" className="portrait-reveal-color" draggable="false" />
            </div>
            {caption}
        </div>
    );
};

export default PortraitReveal;
