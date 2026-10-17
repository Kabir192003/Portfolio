import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mscProjects } from '../data/mscProjects';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';

const Msc = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
        <div style={{ borderTop: `4px solid ${INK}` }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem) 2.5rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>M.Sc. Interactive Digital Media · Trinity College Dublin</span>
            <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.8rem 0 1.25rem' }}>Studio work</h1>
            <p style={{ fontSize: '1.15rem', color: MUTED, maxWidth: '680px', lineHeight: 1.7 }}>
                Coursework and studio projects from my Master's. These sit apart from the product case studies on the <Link to="/projects" style={{ color: RULE, textDecoration: 'underline' }}>work page</Link>: they're where I practised the craft side, 3D, motion and interaction, rather than shipping a product.
            </p>
        </div>
        <div style={{ borderTop: `1px solid ${INK}` }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {mscProjects.filter((p) => p.listed !== false).map((p, i) => (
                <Link
                    key={p.slug}
                    to={`/msc/${p.slug}`}
                    className="msc-row"
                    style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: '2rem', padding: '2rem clamp(1.25rem,3vw,2rem)', borderBottom: `1px solid ${INK}`, textDecoration: 'none', color: INK, alignItems: 'center' }}
                >
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', border: `1px solid ${INK}`, background: INK }}>
                        <img src={p.poster} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <span style={{ position: 'absolute', left: '0.75rem', bottom: '0.75rem', background: INK, color: '#f2f0ea', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.08em', padding: '4px 8px' }}>{p.embed ? "▶ PLAYABLE" : "▶ WALKTHROUGH"}</span>
                    </div>
                    <div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.12em', color: FAINT }}>{String(i + 1).padStart(2, '0')} · {p.module.toUpperCase()}</span>
                        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 1, margin: '0.5rem 0 0.9rem' }}>{p.title}</h2>
                        <p style={{ fontSize: '1rem', lineHeight: 1.65, color: MUTED }}>{p.summary}</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                            {[p.tool, p.kind].map((t) => (
                                <span key={t} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', padding: '3px 8px' }}>{t.toUpperCase()}</span>
                            ))}
                        </div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', fontWeight: 700, color: RULE }}>VIEW PROJECT →</span>
                    </div>
                </Link>
            ))}
        </div>

        <style>{`
            @media (max-width: 760px) {
                .msc-row { grid-template-columns: 1fr !important; }
            }
        `}</style>
    </motion.div>
);

export default Msc;
