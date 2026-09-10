import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const PAPER = '#f2f0ea';

const TIMELINE = [
    { year: '2021', label: 'B.Tech Computer Science begins', place: 'Anurag University, Hyderabad' },
    { year: '2024', label: 'UI/UX Design Intern', place: 'Divine Labs, IIT Delhi' },
    { year: '2025', label: 'B.Tech completed, 8.09 GPA', place: 'Anurag University, Hyderabad' },
    { year: '2025', label: 'Product Associate', place: 'DreamWeavers' },
    { year: '2025', label: 'M.Sc. Interactive Digital Media begins', place: 'Trinity College Dublin' },
    { year: '2026', label: 'Research Assistant, UX/Interaction Designer', place: 'ADAPT Research Centre' },
];

const INTEREST_STATS = [
    { value: '15+', label: 'Countries visited' },
    { value: '12,000+', label: 'KM driven across Europe' },
];

const CAPABILITIES = [
    { area: 'PRODUCT', items: 'Research · Requirements · Prioritisation · Product Analytics · Testing' },
    { area: 'TECHNOLOGY', items: 'Python · SQL · React · JavaScript · REST APIs · AI/LLM workflows' },
    { area: 'DESIGN', items: 'UX · Interaction Design · Prototyping · Information Architecture · Usability Testing' },
    { area: 'DATA', items: 'Analysis · Visualisation · Funnel Analysis · Structured Problem Solving' },
];

const Chip = ({ children }) => (
    <span style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', padding: '4px 10px' }}>{children}</span>
);

// A meditating figure on a lotus base — a light sketch of Hyderabad's
// Buddha statue on Hussain Sagar, not a literal likeness.
const BuddhaMark = ({ size = 70 }) => (
    <svg width={size} height={size * 1.3} viewBox="0 0 70 90" style={{ overflow: 'visible' }}>
        <circle cx="35" cy="18" r="10" fill="none" stroke={RULE} strokeWidth="1.4" />
        <path d="M20 34 Q35 24 50 34 L50 55 Q35 62 20 55 Z" fill="none" stroke={RULE} strokeWidth="1.4" />
        <path d="M14 62 Q35 72 56 62 L60 70 Q35 82 10 70 Z" fill="none" stroke={RULE} strokeWidth="1.4" />
        <path d="M6 74 Q35 86 64 74" fill="none" stroke={RULE} strokeWidth="1.2" />
    </svg>
);

// The Spire of Dublin — a tapering needle, easy to draw honestly.
const SpireMark = ({ size = 70 }) => (
    <svg width={size * 0.4} height={size * 1.3} viewBox="0 0 20 90" style={{ overflow: 'visible' }}>
        <path d="M9 2 L11 2 L13 88 L7 88 Z" fill="none" stroke={RULE} strokeWidth="1.4" />
        <line x1="4" y1="88" x2="16" y2="88" stroke={RULE} strokeWidth="1.4" />
    </svg>
);

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem) 2.5rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>About</span>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', textTransform: 'uppercase', lineHeight: 1.02, margin: '0.8rem 0 1.25rem' }}>
                    What the case studies<br />don't show.
                </h1>
                <p style={{ fontSize: '1.1rem', color: MUTED, maxWidth: '640px', lineHeight: 1.7 }}>
                    The portfolio covers the work. This page covers the rest, why I ended up here, how the two cities fit together, and what I actually do when I'm not at a screen.
                </p>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            {/* Long story short */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: MUTED, display: 'block', marginBottom: '1.5rem' }}>LONG STORY SHORT</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)', gap: '3rem', alignItems: 'start' }} className="about-narrative-grid">
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '4/5',
                            WebkitMaskImage: 'radial-gradient(ellipse 74% 82% at 50% 42%, #000 30%, transparent 100%)',
                            maskImage: 'radial-gradient(ellipse 74% 82% at 50% 42%, #000 30%, transparent 100%)',
                        }}
                    >
                        <img src="./portrait.jpg" alt="Kabir Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(1) contrast(1.05)', display: 'block' }} />
                    </div>
                    <div>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                            I started in computer science, not design, at Anurag University in Hyderabad. The pivot happened during an internship at Divine Labs, restructuring dashboards nobody could actually navigate, and realising the interesting problem wasn't the code underneath, it was the decisions about what a person sees first and what they never need to see at all.
                        </p>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            That's what took me from a Product Associate role at DreamWeavers, shaping requirements alongside engineers, to Trinity College Dublin for a Master's in Interactive Digital Media, and now to a research role at ADAPT, where the work is closer to the technical side again, dataset auditing and structured testing for generative AI workflows. The pattern underneath all of it is the same: engineering background, design instincts, and an unwillingness to leave a decision unexamined just because it's inconvenient to check.
                        </p>
                        <blockquote style={{ borderLeft: `3px solid ${RULE}`, paddingLeft: '1.5rem', margin: '1.75rem 0' }}>
                            <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.9rem', color: INK, lineHeight: 1.3 }}>
                                still the same job either way, decide what matters, cut what doesn't.
                            </span>
                        </blockquote>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8 }}>
                            Everything on the work page is what came out of that. This page is the part that doesn't fit in a case study.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            {/* Route map */}
            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: MUTED, display: 'block', marginBottom: '2.5rem' }}>ROUTE MAP</span>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', padding: '0 1rem 2.5rem' }} className="about-route-map">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 'none' }}>
                        <BuddhaMark />
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase' }}>Hyderabad</h3>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: MUTED }}>WHERE IT STARTED</span>
                    </div>

                    <svg viewBox="0 0 400 40" preserveAspectRatio="none" style={{ flex: 1, height: '40px', margin: '0 1rem 2.5rem' }} className="about-route-line">
                        <path d="M0 34 Q200 -10 400 34" fill="none" stroke={RULE} strokeWidth="1.6" />
                        <text x="192" y="18" fontSize="16" fill={RULE}>✈</text>
                    </svg>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 'none' }}>
                        <SpireMark />
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.3rem', textTransform: 'uppercase' }}>Dublin</h3>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: MUTED }}>WHERE IT'S GOING</span>
                    </div>
                </div>

                <div style={{ borderTop: `1px solid ${INK}`, display: 'grid', gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`, gap: '1rem' }} className="about-timeline-grid">
                    {TIMELINE.map((t) => (
                        <div key={t.year + t.label} style={{ borderLeft: `1px solid ${INK}`, paddingLeft: '0.85rem', paddingTop: '1rem' }}>
                            <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.1rem', color: RULE, display: 'block' }}>{t.year}</span>
                            <span style={{ fontSize: '0.88rem', display: 'block', marginTop: '0.3rem', lineHeight: 1.4 }}>{t.label}</span>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: MUTED, display: 'block', marginTop: '0.3rem' }}>{t.place}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            {/* Outside the build */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: RULE, display: 'block', marginBottom: '1.5rem' }}>OUTSIDE THE BUILD</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(220px,1fr)', gap: '3rem', alignItems: 'start' }} className="about-outside-grid">
                    <div>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                            Most of my time outside work goes toward cars, not as a spectator but somewhere I've actually put the miles in. I've driven over 12,000km across Europe at this point, usually just to see a stretch of road or a car event in person rather than watch it happen on a screen. That's taken me to more than fifteen countries so far, and what keeps pulling me back isn't really the cars themselves so much as the local culture that builds up around them in each place, who shows up, what they've built, why they care.
                        </p>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                            The same attention that goes into a product's details ends up in how I look at a watch or a car too, what a specific decision was actually for, not just what it looks like on the surface. It's a slower, more deliberate way of paying attention than most of my working week allows, which is probably why I keep making time for it.
                        </p>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.8 }}>
                            A camera usually comes along for the ride too. Nothing formal, just a running collection of whatever the road, the cars or the trip in front of me looked like that day. <Link to="/photography" style={{ color: RULE, textDecoration: 'underline' }}>A small set of that is here</Link>, if you'd rather look than read.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {INTEREST_STATS.map((s) => (
                            <div key={s.label} style={{ borderTop: `1px solid ${INK}`, paddingTop: '0.9rem' }}>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.8rem', margin: 0 }}>{s.value}</h3>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: MUTED }}>{s.label}</span>
                            </div>
                        ))}
                        <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '0.9rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Motorsport', 'Car culture', 'Watch collecting', 'Photography', 'Road trips'].map((tg) => <Chip key={tg}>{tg.toUpperCase()}</Chip>)}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            {/* What I bring */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem clamp(1.25rem,3vw,3rem)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: MUTED, display: 'block', marginBottom: '1.75rem' }}>WHAT I WORK ACROSS</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                    {CAPABILITIES.map((c) => (
                        <div key={c.area} style={{ borderTop: `2px solid ${INK}`, paddingTop: '0.9rem' }}>
                            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.15rem', letterSpacing: '0.02em', marginBottom: '0.6rem' }}>{c.area}</h3>
                            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{c.items}</p>
                        </div>
                    ))}
                </div>

                <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem 3rem', fontSize: '0.95rem' }}>
                    <span><strong>Based in</strong> <span style={{ color: MUTED }}>Dublin ↔ Hyderabad</span></span>
                    <span><strong>Languages</strong> <span style={{ color: MUTED }}>English · Hindi · Telugu</span></span>
                    <span><strong>Education</strong> <span style={{ color: MUTED }}>M.Sc. Interactive Digital Media, Trinity College Dublin · B.Tech Computer Science &amp; Engineering, Anurag University</span></span>
                    <span><strong>Status</strong> <span style={{ color: MUTED }}>Open to work</span></span>
                </div>
            </div>

            <style>{`
                @media (max-width: 800px) {
                    .about-narrative-grid, .about-outside-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .about-route-map {
                        flex-direction: column !important;
                        gap: 1.5rem;
                    }
                    .about-route-line {
                        display: none;
                    }
                    .about-timeline-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default About;
