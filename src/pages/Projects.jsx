import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WORKS, WorkCard as Card } from '../components/WorkCard';

const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';
const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";

// kind drives the filter row: build = designed and built by me, client = client work,
// research = research-led, data = data and visualisation.
const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'build', label: 'Designed + built' },
    { key: 'research', label: 'Research-led' },
    { key: 'data', label: 'Data' },
    { key: 'client', label: 'Client work' },
];

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const shown = WORKS.filter((w) => filter === 'all' || w.kinds.includes(filter));
    const [first, ...rest] = shown;
    const featureFirst = filter === 'all';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: PAPER, color: INK }}
        >
            <div style={{ borderTop: `4px solid ${INK}` }} />

            <header style={{ maxWidth: '1400px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,3rem) 2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                    <span style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.18em', color: FAINT, textTransform: 'uppercase' }}>08 case studies · 05 live products</span>
                    <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(3rem, 9vw, 6.5rem)', lineHeight: 0.9, textTransform: 'uppercase', margin: '0.6rem 0 0' }}>
                        Work<span style={{ color: RULE }}>.</span>
                    </h1>
                </div>
                <p style={{ maxWidth: '460px', fontSize: '1.02rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                    Products I researched, designed and built, plus client work and research. Five are live, so you can use them, not just read about them.
                </p>
            </header>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.25rem,3vw,3rem)' }}>
                <div className="work-filters" role="tablist" aria-label="Filter case studies">
                    {FILTERS.map((f) => {
                        const count = f.key === 'all' ? WORKS.length : WORKS.filter((w) => w.kinds.includes(f.key)).length;
                        const on = filter === f.key;
                        return (
                            <button key={f.key} role="tab" aria-selected={on} onClick={() => setFilter(f.key)} className={on ? 'on' : ''}>
                                {f.label} <span>{String(count).padStart(2, '0')}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem clamp(1.25rem,3vw,3rem) 4rem' }}>
                {featureFirst && first && <Card w={first} featured />}
                <div className="work-grid">
                    {(featureFirst ? rest : shown).map((w) => <Card key={w.id} w={w} />)}
                </div>
            </div>

            <Link to="/msc" className="work-studio-link">
                <span>Also: M.Sc. studio work · 3D, interaction and playable sketches</span>
                <span style={{ color: RULE }}>Open →</span>
            </Link>
            <div style={{ borderTop: `4px solid ${INK}` }} />

            <style>{`
                .work-filters { display: flex; flex-wrap: wrap; gap: 0.5rem; border-top: 1px solid ${INK}; border-bottom: 1px solid ${INK}; padding: 0.9rem 0; }
                .work-filters button { font-family: ${MONO}; font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; background: transparent; color: ${INK}; border: 1px solid ${INK}; padding: 0.5rem 0.8rem; cursor: pointer; transition: background 0.2s, color 0.2s; }
                .work-filters button span { color: ${FAINT}; margin-left: 0.35rem; }
                .work-filters button:hover { background: rgba(46,43,239,0.06); }
                .work-filters button.on { background: ${INK}; color: ${PAPER}; }
                .work-filters button.on span { color: #b9b6ad; }



                .work-studio-link { border-top: 1px solid ${INK}; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1.25rem clamp(1.25rem,3vw,3rem); color: ${INK}; text-decoration: none; font-family: ${MONO}; font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; }
                .work-studio-link:hover { color: ${RULE}; }

                @media (max-width: 900px) {
                }
                @media (prefers-reduced-motion: reduce) {
                }
            `}</style>
        </motion.div>
    );
};

export default Projects;
