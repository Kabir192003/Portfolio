import React from 'react';

// Circuit-trace "K" monogram: a K drawn like a routed PCB trace (straight
// runs, right-angle corners, via-pad dots at each joint), with a solid
// blue terminal-cursor block sitting in the K's open counter.
const LogoMark = ({ size = 28, ink = '#141414', accent = '#2e2bef' }) => (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
        <line x1="40" y1="20" x2="40" y2="180" stroke={ink} strokeWidth="14" />
        <path d="M 40 108 L 90 108 L 90 60 L 130 60 L 130 30" fill="none" stroke={ink} strokeWidth="14" strokeLinejoin="round" />
        <path d="M 40 108 L 90 108 L 90 145 L 135 145 L 135 175" fill="none" stroke={ink} strokeWidth="14" strokeLinejoin="round" />
        <rect x="150" y="98" width="20" height="26" fill={accent} />
    </svg>
);

export default LogoMark;
