import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorDot = useRef(null);
    const cursorRing = useRef(null);
    const isCoarsePointer = typeof window !== 'undefined'
        && window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (isCoarsePointer) {
        return null;
    }

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;
        let rafId;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Dot follows instantly
            dotX = mouseX;
            dotY = mouseY;

            // Ring lags behind with lerp
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            // Clamp ring so the dot always stays inside it
            const dx = dotX - ringX;
            const dy = dotY - ringY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 14; // ring radius minus dot radius
            if (dist > maxDist) {
                ringX = dotX - (dx / dist) * maxDist;
                ringY = dotY - (dy / dist) * maxDist;
            }

            if (cursorDot.current) {
                cursorDot.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
            }
            if (cursorRing.current) {
                cursorRing.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        const onEnterInteractive = () => {
            cursorRing.current?.classList.add('cursor-ring--hover');
            cursorDot.current?.classList.add('cursor-dot--hover');
        };
        const onLeaveInteractive = () => {
            cursorRing.current?.classList.remove('cursor-ring--hover');
            cursorDot.current?.classList.remove('cursor-dot--hover');
        };

        window.addEventListener('mousemove', onMove);
        rafId = requestAnimationFrame(animate);

        // Attach hover effect to all interactive elements
        const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', onEnterInteractive);
            el.addEventListener('mouseleave', onLeaveInteractive);
        });

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            {/* Core dot */}
            <div
                ref={cursorDot}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#b98ce8',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    marginLeft: '-3px',
                    marginTop: '-3px',
                    transition: 'width 0.2s, height 0.2s, background 0.2s',
                    willChange: 'transform',
                    boxShadow: '0 0 10px 2px rgba(185,140,232,0.45)',
                }}
                className="cursor-dot"
            />
            {/* Trailing ring */}
            <div
                ref={cursorRing}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(185, 140, 232, 0.4)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    marginLeft: '-18px',
                    marginTop: '-18px',
                    transition: 'width 0.3s, height 0.3s, border-color 0.3s',
                    willChange: 'transform',
                    backdropFilter: 'blur(1px)',
                }}
                className="cursor-ring"
            />
            <style>{`
                .cursor-ring--hover {
                    width: 60px !important;
                    height: 60px !important;
                    margin-left: -30px !important;
                    margin-top: -30px !important;
                    border-color: rgba(185, 140, 232, 0.62) !important;
                    background: rgba(185, 140, 232, 0.08) !important;
                }
                .cursor-dot--hover {
                    width: 10px !important;
                    height: 10px !important;
                    margin-left: -5px !important;
                    margin-top: -5px !important;
                    background: #f3ecff !important;
                    box-shadow: 0 0 14px 3px rgba(185,140,232,0.62) !important;
                }

                /* Hide the browser default cursor globally when custom cursor is active */
                * { cursor: none !important; }
            `}</style>
        </>
    );
};

export default CustomCursor;
