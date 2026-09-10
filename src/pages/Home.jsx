import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const PAPER = '#f2f0ea';

const TODAY = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

const SKILL_STACK = ['PRODUCT DESIGN', 'UX RESEARCH', 'INTERACTION DESIGN', 'DESIGN SYSTEMS', 'INFORMATION ARCHITECTURE', 'USABILITY TESTING', 'PRODUCT ANALYTICS'];
const TOOLS_CRAFT = ['PROTOTYPING', 'FRONT-END', 'MOTION DESIGN', 'FIGMA', 'PYTHON', 'SQL', 'REACT'];
const STATS = [
    { label: 'CASE STUDIES', value: '5' },
    { label: 'LIVE, SHIPPABLE PRODUCTS', value: '4' },
    { label: 'PRODUCT & DESIGN — EXPERIENCE', value: '1+ YRS' },
];

const CAPABILITIES = [
    { area: 'PRODUCT', items: 'Research · Requirements · Prioritisation · Product Analytics · Testing' },
    { area: 'TECHNOLOGY', items: 'Python · SQL · React · JavaScript · REST APIs · AI/LLM workflows' },
    { area: 'DESIGN', items: 'UX · Interaction Design · Prototyping · Information Architecture · Usability Testing' },
    { area: 'DATA', items: 'Analysis · Visualisation · Funnel Analysis · Structured Problem Solving' },
];

const INDEX_ITEMS = [
    { num: '01', label: 'STYLEBOOK AI' },
    { num: '02', label: 'TREK MATE' },
    { num: '03', label: 'WORK HIVE' },
    { num: '04', label: 'HUNGER GAMES' },
    { num: '05', label: 'THIS OR THAT' },
];
const FEATURED_TAGS = ['AI PRODUCT', 'TEAM LEAD', 'FIGMA PLUGIN'];

const PROJECTS = [
    { num: '02', year: '2026 · SHIPPED', title: 'Trek Mate', meta: 'SOLO REDESIGN', tags: ['E-COMMERCE', 'MOBILE'], desc: 'A generic gear storefront, rebuilt around independent makers, field-tested on what actually matters.', img: './trekmate-v2/tm-mockup.png', link: '/projects/1' },
    { num: '03', year: '2025 · SHIPPED', title: 'Work Hive', meta: 'SOLO REDESIGN', tags: ['WEB PLATFORM'], desc: 'Inherited a prototype where almost nothing worked. Rebuilt into a live, clickable product — search, endorsements, an editable profile, all of it.', img: './workhive/wh-mockup.png', link: '/projects/2' },
    { num: '04', year: '2025 · RESEARCH', title: 'The Hunger Games', meta: 'SOLO RESEARCH', tags: ['UX RESEARCH'], desc: 'A comparative usability study across the major food delivery apps, built from surveys and interviews.', img: './hg-mockup.png', link: '/projects/3' },
    { num: '05', year: '2026 · SHIPPED', title: 'This or That', meta: 'TECHNICAL LEAD', tags: ['FULL STACK'], desc: 'A deployed community decision platform — React, Node, Express, MongoDB — with an algorithm-driven feed and anonymous posting.', img: './tot-mockup.png', link: '/projects/5' },
];

const Chip = ({ children }) => (
    <span style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', padding: '4px 10px' }}>{children}</span>
);

const HighlightChip = ({ children }) => (
    <span style={{ border: `1px solid ${RULE}`, background: 'rgba(46, 43, 239, 0.1)', color: RULE, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.7rem', padding: '4px 10px' }}>{children}</span>
);

// A small circular hand-signature mark — a personal flourish echoing
// the "signed off" feel of a printed proof, drawn as one loose stroke.
const SignatureMark = ({ size = 44 }) => (
    <svg width={size} height={size} viewBox="0 0 44 44" style={{ overflow: 'visible', filter: 'url(#sketch-wobble)' }}>
        <circle cx="22" cy="22" r="21" fill="none" stroke={INK} strokeWidth="1" />
        <path d="M13 28 Q15 14 18 14 Q20 14 18 22 Q17 27 20 27 Q23 27 25 18 Q26 14 28 14 Q31 14 29 22 Q28 27 31 26" fill="none" stroke={INK} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
);

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Page title */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px', margin: '0 auto 1.5rem', paddingBottom: '0.6rem', borderBottom: `1px solid rgba(20,20,20,0.16)`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.04em', color: MUTED, flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span>Portfolio — Vol. 01</span>
                    <span>{TODAY}</span>
                </div>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.8rem, 9vw, 7.5rem)', letterSpacing: '0.01em', lineHeight: 0.95, margin: 0, textTransform: 'uppercase' }}>Kabir Sharma</h1>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: RULE, fontWeight: 700, marginTop: '1.1rem' }}>Technology × Product × Design</p>
                <p style={{ fontSize: '1.05rem', color: MUTED, maxWidth: '560px', margin: '0.9rem auto 0', lineHeight: 1.65 }}>I turn complex problems into practical digital products through research, data, design and technology.</p>
            </div>
            <div style={{ borderTop: `1px solid ${INK}` }} />

            {/* Profile / portrait / stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(360px,720px) minmax(0,1fr)', maxWidth: '1400px', margin: '0 auto' }} className="home-profile-grid">
                <div style={{ padding: '2.75rem clamp(1.25rem,3vw,3rem)', borderRight: `1px solid ${INK}` }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700 }}>PROFILE</span>
                    <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.9rem,3.4vw,2.7rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0.9rem 0 1.4rem' }}>
                        From mockups<br />to <span style={{ color: RULE }}>things that run</span>
                    </h2>
                    <p style={{ fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                        <strong>Five product case studies, four of them live and clickable.</strong> I design interfaces, then use them the way a stranger would — which is usually where the real work starts.
                    </p>
                    <Link to="/projects/6" style={{ display: 'block', textAlign: 'center', background: RULE, color: '#f2f0ea', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.9rem', padding: '1rem', textDecoration: 'none', marginBottom: '2.25rem' }}>Selected work ↓</Link>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: `1px solid ${INK}`, paddingTop: '1.25rem' }}>
                        <div>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', color: MUTED, display: 'block', marginBottom: '0.6rem' }}>SKILL STACK</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {SKILL_STACK.map((s) => (
                                    <span key={s} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', padding: '6px 10px', textAlign: 'center' }}>{s}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', color: MUTED, display: 'block', marginBottom: '0.6rem' }}>TOOLS &amp; CRAFT</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {TOOLS_CRAFT.map((t) => (
                                    <span key={t} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', padding: '6px 10px', textAlign: 'center' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative', padding: '1rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="home-portrait-col">
                    <div style={{ position: 'relative', width: '460px', maxWidth: '100%' }}>
                        <img
                            src="./portrait-cutout.png"
                            alt="Kabir Sharma"
                            style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(1) contrast(1.05)' }}
                        />

                        {/* Hand-drawn wobble, shared by every doodle below */}
                        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                            <filter id="sketch-wobble" x="-20%" y="-20%" width="140%" height="140%">
                                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
                            </filter>
                        </svg>

                        {/* Camera — floats in the left margin beside the hair */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', top: '8%', left: '-32%', width: '150px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-camera">
                            <path d="M8 30 L8 12 L28 12 L28 30 Z M8 20 L2 15 L2 25 Z" fill="none" stroke={RULE} strokeWidth="2.1" />
                            <circle cx="18" cy="21" r="5" fill="none" stroke={RULE} strokeWidth="2.1" />
                        </svg>
                        {/* Speech bubble — right margin, paper-filled so it reads clearly */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', top: '4%', right: '-34%', width: '150px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-speech">
                            <path d="M4 30 Q4 8 26 8 Q48 8 48 22 Q48 32 36 32 L20 32 L14 38 L16 30" fill={PAPER} stroke={RULE} strokeWidth="2.1" />
                            <text x="8" y="24" fontFamily="Anton" fontSize="7.5" fill={RULE} transform="rotate(-4 10 24)">hi, there...</text>
                        </svg>
                        {/* TV — right margin, lower */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', top: '48%', right: '-36%', width: '115px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-tv">
                            <rect x="8" y="10" width="34" height="22" rx="1.5" fill="none" stroke={RULE} strokeWidth="2" />
                            <path d="M18 10 L14 3 M32 10 L36 3" fill="none" stroke={RULE} strokeWidth="1.8" />
                            <circle cx="36" cy="16" r="1.6" fill="none" stroke={RULE} strokeWidth="1.6" />
                        </svg>
                        {/* Pen + notebook — left margin, lower */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', top: '46%', left: '-38%', width: '135px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-pen">
                            <path d="M6 34 L6 16 L26 16 L26 34 Z" fill="none" stroke={RULE} strokeWidth="1.8" />
                            <path d="M9 21 L23 21 M9 25 L23 25 M9 29 L18 29" fill="none" stroke={RULE} strokeWidth="1.5" />
                            <path d="M32 34 L44 12 L48 15 L36 37 Z" fill="none" stroke={RULE} strokeWidth="1.8" />
                            <path d="M44 12 L48 15" stroke={RULE} strokeWidth="1.8" />
                        </svg>
                        {/* Laptop, Figma — bottom-right margin */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', bottom: '-16%', right: '-32%', width: '150px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-laptop">
                            <rect x="10" y="6" width="34" height="22" rx="1.5" fill="none" stroke={RULE} strokeWidth="1.9" />
                            <path d="M4 32 L50 32 L45 28 L9 28 Z" fill="none" stroke={RULE} strokeWidth="1.9" />
                            <circle cx="19" cy="14" r="2.2" fill="none" stroke={RULE} strokeWidth="1.4" />
                            <circle cx="26" cy="14" r="2.2" fill="none" stroke={RULE} strokeWidth="1.4" />
                            <circle cx="19" cy="20" r="2.2" fill="none" stroke={RULE} strokeWidth="1.4" />
                            <text x="14" y="26" fontFamily="Anton" fontSize="5.5" fill={RULE}>figma</text>
                        </svg>
                        {/* Code brackets — bottom-left margin */}
                        <svg viewBox="0 0 60 40" style={{ position: 'absolute', bottom: '4%', left: '-24%', width: '90px', overflow: 'visible', filter: 'url(#sketch-wobble)' }} className="home-doodle-code">
                            <text x="2" y="24" fontFamily="Anton" fontSize="16" fill={RULE}>&lt;/&gt;</text>
                        </svg>

                    </div>

                    {/* Below the image — real document flow, so it actually fills the remaining column height */}
                    <div style={{ width: '460px', maxWidth: '100%', marginTop: '2rem' }}>
                        <Link to="/about" style={{ textDecoration: 'none', display: 'block', transform: 'rotate(-2deg)', marginBottom: '1.5rem' }}>
                            <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', color: RULE, lineHeight: 1.2 }}>
                                chasing car events when I'm not building →
                            </span>
                        </Link>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['MOTORSPORT', 'WATCHES', 'TRAVEL', 'PHOTOGRAPHY'].map((tg) => (
                                <span key={tg} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', padding: '4px 10px' }}>{tg}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '2.75rem clamp(1.25rem,3vw,3rem)', borderLeft: `1px solid ${INK}`, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em', fontWeight: 700, color: RULE }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: RULE, display: 'inline-block' }} />OPEN TO WORK
                    </span>

                    <div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', color: MUTED }}>BASED BETWEEN</span>
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.6rem', textTransform: 'uppercase', margin: '0.3rem 0' }}>Dublin &amp; Hyderabad</h3>
                    </div>
                    <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '1.25rem' }} />

                    {STATS.map((st) => (
                        <React.Fragment key={st.label}>
                            <div>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', color: MUTED }}>{st.label}</span>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', margin: '0.25rem 0' }}>{st.value}</h3>
                            </div>
                            <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '1.25rem' }} />
                        </React.Fragment>
                    ))}

                    <div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', color: MUTED }}>EDUCATION</span>
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.2rem', textTransform: 'uppercase', margin: '0.3rem 0' }}>M.Sc. Interactive Digital Media</h3>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: MUTED, display: 'block', marginBottom: '0.5rem' }}>Trinity College Dublin</span>
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.2rem', textTransform: 'uppercase', margin: '0.3rem 0' }}>B.Tech Computer Science</h3>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: MUTED }}>Anurag University</span>
                    </div>
                    <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '1.25rem' }} />
                    <Link to="/about" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', fontWeight: 700, color: RULE, textDecoration: 'underline' }}>More about me →</Link>
                </div>
            </div>

            {/* Capabilities */}
            <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.75rem clamp(1.25rem,3vw,3rem)' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: MUTED, display: 'block', marginBottom: '1.75rem' }}>WHAT I WORK ACROSS</span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {CAPABILITIES.map((c) => (
                            <div key={c.area} style={{ borderTop: `2px solid ${INK}`, paddingTop: '0.9rem' }}>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.15rem', letterSpacing: '0.02em', marginBottom: '0.6rem' }}>{c.area}</h3>
                                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{c.items}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '0.9rem clamp(1.25rem,3vw,3rem)', overflowX: 'auto', borderBottom: `1px solid ${INK}` }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 700, flex: 'none' }}>INDEX</span>
                {INDEX_ITEMS.map((ix) => (
                    <span key={ix.num} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', whiteSpace: 'nowrap', flex: 'none' }}>
                        <span style={{ color: RULE, fontWeight: 700 }}>{ix.num}</span> {ix.label}
                    </span>
                ))}
            </div>

            {/* Featured */}
            <div id="work" style={{ maxWidth: '1400px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,3rem) 2rem' }}>
                <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>Featured — a system, not a mockup</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(280px,420px)', gap: '2.5rem', alignItems: 'start' }} className="home-featured-grid">
                    <div style={{ position: 'relative', backgroundImage: 'radial-gradient(circle, rgba(20,20,20,0.14) 1px, transparent 1.6px)', backgroundSize: '7px 7px', padding: '1.75rem' }}>
                        <img src="./stylebook/sb-hero.png" alt="StyleBook AI" style={{ width: '100%', display: 'block', transform: 'rotate(-1deg)', boxShadow: '0 20px 40px -16px rgba(20,20,20,0.35)', border: `1px solid ${INK}` }} />
                    </div>
                    <div>
                        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.4rem', color: RULE }}>01</span>
                        <div style={{ display: 'flex', gap: '0.6rem', margin: '0.8rem 0 1.1rem', flexWrap: 'wrap' }}>
                            <HighlightChip>2026 · SHIPPED</HighlightChip>
                            {FEATURED_TAGS.map((tg) => <Chip key={tg}>{tg}</Chip>)}
                        </div>
                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.6rem,2.6vw,2.1rem)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1rem' }}>StyleBook AI: a brand brief in, a design system out</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Led a team of four, wrote nearly all of the implementation, and shipped it as a working Figma plugin — a verified, exportable design system generated from a written brand description.</p>
                        <Link to="/projects/6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', fontWeight: 700, color: RULE, textDecoration: 'underline' }}>Case study →</Link>
                    </div>
                </div>
            </div>

            {/* Selected work */}
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem clamp(1.25rem,3vw,3rem) 5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem', borderTop: `1px solid ${INK}`, paddingTop: '1.5rem' }}>
                    <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.8rem,3.4vw,2.4rem)', textTransform: 'uppercase' }}>Selected work</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: MUTED }}>2023 — 2026</span>
                        <SignatureMark />
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${INK}` }} className="home-selected-grid">
                    {PROJECTS.map((proj, idx) => {
                        const isLeftCol = idx % 2 === 0;
                        const isTopRow = idx < PROJECTS.length - (PROJECTS.length % 2 === 0 ? 2 : 1);
                        return (
                            <div
                                key={proj.num}
                                className="home-selected-cell"
                                style={{
                                    padding: 'clamp(1.5rem, 3vw, 2.75rem)',
                                    borderRight: isLeftCol ? `1px solid ${INK}` : 'none',
                                    borderBottom: isTopRow ? `1px solid ${INK}` : 'none',
                                }}
                            >
                                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.4rem', color: RULE, display: 'block', marginBottom: '1rem' }}>{proj.num}</span>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <img src={proj.img} alt={proj.title} style={{ width: '100%', display: 'block' }} />
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                                    <HighlightChip>{proj.year}</HighlightChip>
                                    {proj.tags.map((tg) => (
                                        <span key={tg} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', padding: '3px 9px' }}>{tg}</span>
                                    ))}
                                </div>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{proj.title}</h3>
                                <p style={{ fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: '46ch' }}>{proj.desc}</p>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: MUTED, letterSpacing: '0.04em' }}>{proj.meta}</span>
                                    <Link to={proj.link} style={{ flex: 'none', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', fontWeight: 700, color: RULE, textDecoration: 'underline' }}>Case study →</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Outside the build — teaser */}
            <div style={{ borderTop: `1px solid ${INK}` }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,3rem) 4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700, color: RULE, display: 'block', marginBottom: '0.75rem' }}>OUTSIDE THE BUILD</span>
                        <p style={{ fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '560px' }}>15+ countries, 12,000km driven across Europe chasing car events, a growing watch collection, and a camera that comes along for the ride.</p>
                    </div>
                    <Link to="/about" style={{ flex: 'none', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', border: `1px solid ${INK}`, padding: '0.85rem 1.5rem', textDecoration: 'none', color: INK }}>Read the story →</Link>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .home-profile-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .home-profile-grid > div {
                        border-right: none !important;
                        border-left: none !important;
                        border-bottom: 1px solid ${INK};
                    }
                    .home-doodle-speech, .home-doodle-code, .home-doodle-pen, .home-doodle-laptop, .home-doodle-tv, .home-doodle-camera {
                        display: none;
                    }
                    .home-featured-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .home-selected-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .home-selected-cell {
                        border-right: none !important;
                        border-bottom: 1px solid ${INK} !important;
                    }
                    .home-selected-cell:last-child {
                        border-bottom: none !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Home;
