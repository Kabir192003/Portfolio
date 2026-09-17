import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';

const WORKS = [
    {
        num: '01', id: 6, title: 'StyleBook AI', tags: ['AI PRODUCT', 'TEAM LEAD', 'FIGMA PLUGIN'], year: '2026',
        role: projectsData.project6.role,
        status: 'LIVE — SHIPPED',
        stack: projectsData.project6.tools.join(' · '),
        desc: 'Led a team of four, wrote nearly all of the implementation, and shipped it as a working Figma plugin — a verified, exportable design system generated from a written brand description.',
        img: './stylebook/sb-hero-bg.jpg',
    },
    {
        num: '02', id: 1, title: 'Trek Mate', tags: ['E-COMMERCE', 'MOBILE'], year: '2026',
        role: projectsData.project1.role,
        status: 'LIVE — SHIPPED',
        stack: projectsData.project1.tools.join(' · '),
        desc: 'A generic gear storefront, rebuilt around independent makers, field-tested on what actually matters.',
        img: './trekmate-v2/tm-hero-bg.jpg',
    },
    {
        num: '03', id: 2, title: 'Work Hive', tags: ['WEB PLATFORM'], year: '2025',
        role: projectsData.project2.role,
        status: 'LIVE — SHIPPED',
        stack: projectsData.project2.tools.join(' · '),
        desc: 'Inherited a prototype where almost nothing worked. Rebuilt into a live, clickable product — search, endorsements, an editable profile, all of it.',
        img: './workhive/hero.jpg',
    },
    {
        num: '04', id: 3, title: 'The Hunger Games', tags: ['UX RESEARCH'], year: '2025',
        role: projectsData.project3.role,
        status: 'RESEARCH',
        stack: projectsData.project3.tools.join(' · '),
        desc: 'A comparative usability study across the major food delivery apps, built from surveys and interviews.',
        img: './food.jpg',
    },
    {
        num: '05', id: 5, title: 'This or That', tags: ['FULL STACK'], year: '2026',
        role: projectsData.project5.role,
        status: 'LIVE — SHIPPED',
        stack: projectsData.project5.tools.join(' · '),
        desc: 'A deployed community decision platform — React, Node, Express, MongoDB — with an algorithm-driven feed and anonymous posting.',
        img: './tot-hero-bg.jpg',
    },
];

const rowVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
};

const Projects = () => {
    const [active, setActive] = useState(0);
    const crosshairRef = useRef(null);
    const labelRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            const el = crosshairRef.current;
            if (!el) return;
            el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            if (labelRef.current) {
                labelRef.current.textContent = `X ${String(e.clientX).padStart(4, '0')} · Y ${String(e.clientY).padStart(4, '0')}`;
            }
        };
        const onKey = (e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(WORKS.length - 1, a + 1)); }
            if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('keydown', onKey);
        };
    }, []);

    const ap = WORKS[active];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: PAPER, color: INK, fontFamily: "'JetBrains Mono', monospace" }}
        >
            {/* Telemetry crosshair — decorative, follows the cursor */}
            <div
                ref={crosshairRef}
                style={{ position: 'fixed', top: 0, left: 0, width: 1, height: 1, zIndex: 5, pointerEvents: 'none', transform: 'translate(-9999px,-9999px)' }}
            >
                <div style={{ position: 'absolute', left: -9000, top: 0, width: 18000, height: 1, background: 'rgba(46,43,239,0.2)' }} />
                <div style={{ position: 'absolute', top: -9000, left: 0, width: 1, height: 18000, background: 'rgba(46,43,239,0.2)' }} />
                <span ref={labelRef} style={{ position: 'absolute', top: 8, left: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.05em', color: RULE, whiteSpace: 'nowrap', background: PAPER, padding: '1px 4px' }}>X 0000 · Y 0000</span>
            </div>

            <div style={{ borderTop: `4px solid ${INK}` }} />

            <div style={{ padding: '4rem clamp(1.25rem,3vw,3rem) 2.5rem' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: FAINT, textTransform: 'uppercase' }}>LOG // {String(WORKS.length).padStart(2, '0')} ENTRIES CAPTURED</span>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(3rem, 10vw, 7.5rem)', lineHeight: 0.88, textTransform: 'uppercase', margin: '0.6rem 0 0' }}>
                    Selected<br />Traces<span style={{ color: RULE }}>.</span>
                </h1>
                <p style={{ maxWidth: '560px', fontSize: '1rem', lineHeight: 1.65, color: MUTED, marginTop: '1.5rem' }}>
                    Five products, run through their paces. Hover an entry to pull it up on the scope — role, status and stack on the right update live.
                </p>
            </div>
            <div style={{ borderTop: `1px solid ${INK}` }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(320px,460px)', maxWidth: '1500px', margin: '0 auto' }} className="works-grid">

                <div style={{ borderRight: `1px solid ${INK}` }} className="works-index">
                    {WORKS.map((w, i) => {
                        const isActive = i === active;
                        return (
                            <motion.div
                                key={w.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={rowVariants}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
                                tabIndex={0}
                                style={{
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr auto',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    padding: '1.6rem clamp(1.25rem,3vw,3rem)',
                                    borderTop: `1px solid ${INK}`,
                                    cursor: 'pointer',
                                    outline: 'none',
                                    transition: 'background 0.25s',
                                    background: isActive ? 'rgba(46,43,239,0.04)' : 'transparent',
                                }}
                            >
                                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? RULE : FAINT, transition: 'color 0.25s' }}>{w.num}</span>
                                <div style={{ minWidth: 0 }}>
                                    <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.8rem,4.4vw,3.6rem)', textTransform: 'uppercase', lineHeight: 1, margin: 0, transition: 'color 0.25s', color: isActive ? RULE : INK }}>{w.title}</h2>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                                        {w.tags.map((tg) => (
                                            <span key={tg} style={{ border: `1px solid ${INK}`, fontSize: '0.65rem', letterSpacing: '0.05em', padding: '3px 8px' }}>{tg}</span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', flex: 'none' }}>
                                    <span style={{ display: 'block', fontSize: '0.72rem', color: FAINT, letterSpacing: '0.08em' }}>{w.year}</span>
                                    <span style={{ display: 'block', fontSize: '0.72rem', color: MUTED, marginTop: '0.2rem' }}>SHEET {w.num}</span>
                                </div>
                                <div style={{ position: 'absolute', left: 0, bottom: -1, height: 2, background: RULE, width: isActive ? '100%' : '0%', transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1)' }} />
                            </motion.div>
                        );
                    })}
                </div>

                <div style={{ position: 'relative' }} className="works-scope-col">
                    <div style={{ position: 'sticky', top: '84px', padding: '2rem clamp(1rem,2vw,1.75rem)' }}>
                        <div style={{ position: 'relative', background: INK, border: `1px solid ${INK}`, overflow: 'hidden' }}>
                            <div className="scope-scanlines" />
                            <div className="scope-sweep" />

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(242,240,234,0.15)' }}>
                                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: PAPER }}>SCOPE.FEED</span>
                                <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: RULE }}>FRAME {String(active + 1).padStart(2, '0')}/{String(WORKS.length).padStart(2, '0')}</span>
                            </div>

                            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                                <img src={ap.img} alt={ap.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.3) contrast(1.08)', opacity: 0.92, display: 'block' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,20,20,0) 55%, rgba(20,20,20,0.85) 100%)' }} />
                                <span style={{ position: 'absolute', bottom: '0.9rem', left: '1rem', fontFamily: "'Anton', sans-serif", fontSize: '1.6rem', textTransform: 'uppercase', color: PAPER }}>{ap.title}</span>
                            </div>

                            <div style={{ padding: '1.1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem 1.5rem', borderBottom: '1px solid rgba(242,240,234,0.15)' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.1em', color: FAINT }}>ROLE</span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: PAPER, marginTop: '0.2rem' }}>{ap.role}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.1em', color: FAINT }}>STATUS</span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: RULE, marginTop: '0.2rem' }}>{ap.status}</span>
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.1em', color: FAINT }}>STACK</span>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: PAPER, marginTop: '0.2rem' }}>{ap.stack}</span>
                                </div>
                            </div>

                            <p style={{ padding: '1.1rem', margin: 0, fontSize: '0.85rem', lineHeight: 1.65, color: '#cfcdc4', borderBottom: '1px solid rgba(242,240,234,0.15)' }}>{ap.desc}</p>

                            <Link to={`/projects/${ap.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', color: PAPER, textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }} className="scope-run-link">
                                <span>Run case study</span>
                                <span>→</span>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.68rem', color: FAINT, letterSpacing: '0.06em' }}>
                            <span>53.3498°N · SHEET {ap.num}</span>
                            <span>SIGNAL LOCKED</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem clamp(1.25rem,3vw,3rem)', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: MUTED }}>{String(WORKS.length).padStart(2, '0')} CASE STUDIES · 04 LIVE, SHIPPABLE</span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: MUTED }}>DUBLIN</span>
            </div>
            <div style={{ borderTop: `4px solid ${INK}` }} />

            <style>{`
                @keyframes worksScan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
                .scope-scanlines {
                    position: absolute; inset: 0;
                    background: repeating-linear-gradient(to bottom, rgba(46,43,239,0.08) 0px, rgba(46,43,239,0.08) 1px, transparent 1px, transparent 3px);
                    pointer-events: none; z-index: 2;
                }
                .scope-sweep {
                    position: absolute; left: 0; right: 0; height: 40%;
                    background: linear-gradient(to bottom, transparent, rgba(46,43,239,0.12), transparent);
                    animation: worksScan 5s linear infinite;
                    pointer-events: none; z-index: 2;
                }
                .scope-run-link:hover { color: ${RULE} !important; }
                @media (max-width: 860px) {
                    .works-grid { grid-template-columns: 1fr !important; }
                    .works-index { border-right: none !important; }
                    .works-scope-col > div { position: relative !important; top: 0 !important; }
                }
            `}</style>
        </motion.div>
    );
};

export default Projects;
