import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';
const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";

// kind drives the filter row: build = designed and built by me, client = client work,
// research = research-led, data = data and visualisation.
const WORKS = [
    {
        num: '01', id: 'settld', title: 'Settld', year: '2026', status: 'LIVE', kinds: ['build', 'data', 'research'],
        role: 'Solo · research, design and build',
        tags: ['Open data', 'Routing', 'React'],
        desc: 'Helps students choose where to live in Dublin before they sign a lease: rent, the real journey to college and what is nearby, for 106 areas, with the source of every number shown. Built after surveying 300+ students.',
        img: './settld/settld-mockup.jpg',
    },
    {
        num: '02', id: 6, title: 'StyleBook AI', year: '2026', status: 'LIVE', kinds: ['build', 'research'],
        role: 'Project lead · team of four',
        tags: ['AI product', 'Design systems', 'Figma plugin'],
        desc: 'A written brand brief in, a checked, exportable design system out. Shaped by a survey of 200+ designers, with every AI-proposed colour pair measured and repaired in code.',
        img: './stylebook/sb-mockup.jpg',
    },
    {
        num: '03', id: 'pawfect', title: 'PawFect', year: '2025', status: 'CLIENT WORK', kinds: ['client'],
        role: 'Product Associate · DreamWeavers',
        tags: ['Mobile app', 'Requirements', 'UX'],
        desc: 'A pet care app for a veterinary clinic in Hyderabad: booking, a digital health passport, reminders worked out from the record, and every price shown before you pay.',
        img: './pawfect/pf-mockup.jpg',
    },
    {
        num: '04', id: 2, title: 'Work Hive', year: '2026', status: 'LIVE', kinds: ['build'],
        role: 'Solo · design and full stack',
        tags: ['Web platform', 'Supabase', 'Security'],
        desc: 'A hiring platform where named, job-specific endorsements from real colleagues travel with every application. 18 screens on a real Postgres backend.',
        img: './workhive/wh-mockup.jpg',
    },
    {
        num: '05', id: 1, title: 'Trek Mate', year: '2026', status: 'LIVE', kinds: ['build'],
        role: 'Solo · design and front end',
        tags: ['E-commerce', 'React', 'TypeScript'],
        desc: 'An outdoor gear store designed around the whole pack. A live planner shows your base weight and ranks lighter swaps by what each gram saved costs you.',
        img: './trekmate-v3/tm3-mockup.jpg',
    },
    {
        num: '06', id: 5, title: 'This or That', year: '2026', status: 'LIVE', kinds: ['build', 'research'],
        role: 'Research, redesign and full stack',
        tags: ['Redesign', 'Research', 'Node + Postgres'],
        desc: 'A community decision app, redesigned around one finding: people vote differently once they can see the crowd. Results stay hidden until you vote.',
        img: './tot2/tot-mockup.jpg',
    },
    {
        num: '07', id: 3, title: 'The Hunger Games', year: '2025', status: 'RESEARCH', kinds: ['research', 'data'],
        role: 'Solo UX researcher',
        tags: ['UX research', 'Survey', 'Heuristics'],
        desc: 'Swiggy vs Zomato: a mixed-methods study of two apps solving the same problem in opposite ways, from a heuristic review and a survey of 48 users.',
        img: './hg-mockup.jpg',
    },
    {
        num: '08', id: 'data-viz', title: 'Global Health & Wealth', year: '2026', status: 'PLAYABLE', kinds: ['data'],
        role: 'Design and code · M.Sc. coursework',
        tags: ['Data viz', 'Interactive'],
        desc: 'An interactive bubble chart of 186 countries. Hover any bubble for its data and click the legend to filter regions.',
        img: './msc/data-viz/banner.jpg',
    },
];

const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'build', label: 'Designed + built' },
    { key: 'research', label: 'Research-led' },
    { key: 'data', label: 'Data' },
    { key: 'client', label: 'Client work' },
];

const Card = ({ w, featured }) => (
    <Link to={`/projects/${w.id}`} className={`work-card${featured ? ' work-card-featured' : ''}`} aria-label={`${w.title} case study`}>
        <div className="work-card-media">
            <img src={w.img} alt="" loading={featured ? 'eager' : 'lazy'} />
        </div>
        <div className="work-card-body">
            <div className="work-card-top">
                <span className="work-card-num">{w.num}</span>
                <span className="work-card-status">{w.status}</span>
                <span className="work-card-meta">{w.role} · {w.year}</span>
            </div>
            <h2 className="work-card-title">{w.title}</h2>
            <p className="work-card-desc">{w.desc}</p>
            <div className="work-card-foot">
                <div className="work-card-tags">
                    {w.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <span className="work-card-cta">Case study <span aria-hidden="true">→</span></span>
            </div>
        </div>
    </Link>
);

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

                .work-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem 2rem; margin-top: 2.5rem; }
                .work-card { display: flex; flex-direction: column; color: ${INK}; text-decoration: none; border: 1px solid ${INK}; background: ${PAPER}; transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s; }
                .work-card:hover { transform: translateY(-4px); box-shadow: 8px 8px 0 ${INK}; }
                .work-card:focus-visible { outline: 3px solid ${RULE}; outline-offset: 3px; }
                .work-card-media { position: relative; aspect-ratio: 3 / 2; overflow: hidden; border-bottom: 1px solid ${INK}; background: #e6e3db; }
                .work-card-media img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
                .work-card:hover .work-card-media img { transform: scale(1.03); }
                .work-card-status { font-family: ${MONO}; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; background: rgba(46,43,239,0.08); color: ${RULE}; border: 1px solid ${RULE}; padding: 2px 7px; white-space: nowrap; }
                .work-card-body { padding: 1.4rem 1.5rem 1.5rem; display: flex; flex-direction: column; flex: 1; }
                .work-card-top { display: flex; align-items: center; flex-wrap: wrap; gap: 0.4rem 0.8rem; margin-bottom: 0.6rem; }
                .work-card-num { font-family: ${ANTON}; font-size: 1.15rem; color: ${RULE}; }
                .work-card-meta { font-family: ${MONO}; font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; color: ${MUTED}; }
                .work-card-title { font-family: ${ANTON}; font-size: clamp(1.6rem, 2.6vw, 2.2rem); text-transform: uppercase; line-height: 1; margin: 0 0 0.7rem; }
                .work-card-desc { font-size: 0.98rem; line-height: 1.6; color: ${MUTED}; margin: 0 0 1.25rem; max-width: 58ch; }
                .work-card-foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
                .work-card-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
                .work-card-tags span { font-family: ${MONO}; font-size: 0.64rem; letter-spacing: 0.04em; border: 1px solid ${INK}; padding: 3px 8px; }
                .work-card-cta { font-family: ${MONO}; font-size: 0.78rem; font-weight: 700; color: ${RULE}; white-space: nowrap; }
                .work-card:hover .work-card-cta { text-decoration: underline; }

                .work-card-featured { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr); }
                .work-card-featured .work-card-media { border-bottom: none; border-right: 1px solid ${INK}; aspect-ratio: auto; min-height: 100%; }
                .work-card-featured .work-card-body { padding: 2rem 2.25rem; justify-content: center; }
                .work-card-featured .work-card-title { font-size: clamp(2.2rem, 4vw, 3.4rem); }
                .work-card-featured .work-card-desc { font-size: 1.05rem; }

                .work-studio-link { border-top: 1px solid ${INK}; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1.25rem clamp(1.25rem,3vw,3rem); color: ${INK}; text-decoration: none; font-family: ${MONO}; font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; }
                .work-studio-link:hover { color: ${RULE}; }

                @media (max-width: 900px) {
                    .work-grid { grid-template-columns: minmax(0, 1fr); gap: 1.75rem; margin-top: 1.75rem; }
                    .work-card-featured { grid-template-columns: minmax(0, 1fr); }
                    .work-card-featured .work-card-media { border-right: none; border-bottom: 1px solid ${INK}; aspect-ratio: 3 / 2; }
                    .work-card-featured .work-card-body { padding: 1.4rem 1.5rem 1.5rem; }
                    .work-card:hover { transform: none; box-shadow: none; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .work-card, .work-card-media img { transition: none; }
                }
            `}</style>
        </motion.div>
    );
};

export default Projects;
