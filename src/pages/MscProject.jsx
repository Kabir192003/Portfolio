import React, { Suspense, lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMscProject } from '../data/mscProjects';

const EMBEDS = {
    solar: lazy(() => import('../components/msc/SolarSystem')),
    image: lazy(() => import('../components/msc/ImageLab')),
};

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';
const MONO = "'JetBrains Mono', monospace";

const wrap = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(1.25rem,3vw,2rem)' };
const label = { fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE };
const h2 = { fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '0.5rem 0 1rem' };

const Section = ({ eyebrow, title, children }) => (
    <section style={{ borderTop: `1px solid ${INK}`, padding: '2.5rem 0' }}>
        <div style={wrap}>
            <span style={label}>{eyebrow}</span>
            <h2 style={h2}>{title}</h2>
            {children}
        </div>
    </section>
);

const Table = ({ rows, cols }) => (
    <div style={{ border: `1px solid ${INK}` }}>
        {rows.map((r, i) => (
            <div key={i} className="msc-trow" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.35fr) minmax(0,1fr)', gap: '1rem', padding: '0.85rem 1rem', borderTop: i ? `1px solid ${INK}` : 'none', alignItems: 'baseline' }}>
                <strong style={{ fontFamily: MONO, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r[cols[0]]}</strong>
                <span style={{ color: MUTED, lineHeight: 1.6 }}>{r[cols[1]]}</span>
            </div>
        ))}
    </div>
);

const MscProject = () => {
    const { slug } = useParams();
    const p = getMscProject(slug);

    if (!p) {
        return (
            <div style={{ ...wrap, padding: '4rem 2rem' }}>
                <p>Project not found. <Link to="/msc" style={{ color: RULE }}>Back to studio work</Link></p>
            </div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div style={{ borderTop: `4px solid ${INK}` }} />
            <header style={{ ...wrap, padding: '3rem clamp(1.25rem,3vw,2rem) 2rem' }}>
                <Link to="/msc" style={{ ...label, textDecoration: 'none' }}>← Studio work</Link>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.9rem 0 1rem' }}>{p.title}</h1>
                <div style={{ fontFamily: MONO, fontSize: '0.78rem', color: FAINT, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {p.module} · {p.tool}
                </div>
                <p style={{ fontSize: '1.15rem', color: MUTED, lineHeight: 1.7, maxWidth: '720px', marginTop: '1.25rem' }}>{p.summary}</p>
            </header>

            <div style={wrap}>
                {p.embed ? (
                    <div style={{ paddingBottom: '1.5rem' }}>
                        <span style={label}>{p.embedTitle}</span>
                        <p style={{ color: MUTED, margin: '0.4rem 0 0.9rem', lineHeight: 1.6 }}>{p.embedNote}</p>
                        <Suspense fallback={<div style={{ height: 480, background: '#000' }} />}>
                            {React.createElement(EMBEDS[p.embed])}
                        </Suspense>
                    </div>
                ) : p.video ? (
                    <video src={p.video} poster={p.poster} controls playsInline preload="metadata" style={{ width: '100%', display: 'block', border: `1px solid ${INK}`, background: INK }} />
                ) : null}
            </div>

            <div style={{ ...wrap, padding: '2rem clamp(1.25rem,3vw,2rem)' }}>
                <div className="msc-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', border: `1px solid ${INK}` }}>
                    {p.stats.map((s, i) => (
                        <div key={s.label} style={{ padding: '1.25rem', borderLeft: i ? `1px solid ${INK}` : 'none' }}>
                            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: '2.2rem', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: MONO, fontSize: '0.7rem', color: FAINT, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <Section eyebrow="The brief" title="What it had to do">
                <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: '720px' }}>{p.brief.intro}</p>
                <ol style={{ margin: '1rem 0 0', paddingLeft: '1.4rem', color: MUTED, lineHeight: 1.9 }}>
                    {p.brief.objectives.map((o) => <li key={o}>{o}</li>)}
                </ol>
            </Section>

            <Section eyebrow="Concept" title="How I approached it">
                <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: '760px' }}>{p.concept}</p>
            </Section>

            {p.renders.length > 0 && (
                <Section eyebrow="Renders" title={p.rendersTitle || 'Final frames'}>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {p.renders.map((r) => (
                            <figure key={r.src} style={{ margin: 0 }}>
                                <img src={r.src} alt={r.title} loading="lazy" style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
                                <figcaption style={{ marginTop: '0.7rem', color: MUTED, lineHeight: 1.6 }}>
                                    <strong style={{ fontFamily: MONO, fontSize: '0.8rem', textTransform: 'uppercase' }}>{r.title}.</strong> {r.caption}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </Section>
            )}

            <Section eyebrow="Mapping" title={p.mapTitle || 'Requirement to object'}>
                <Table rows={p.objectiveMap} cols={['object', 'objectives']} />
            </Section>

            <Section eyebrow="Build notes" title="How it was made">
                <Table rows={p.built} cols={['name', 'how']} />
            </Section>

            <Section eyebrow={p.noteEyebrow || 'Lighting'} title={p.noteTitle || 'Light and shadow'}>
                <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: '760px' }}>{p.lighting}</p>
            </Section>

            <Section eyebrow="Credits" title="What I didn't make">
                {p.imported.length > 0 && (
                    <p style={{ color: MUTED, lineHeight: 1.7 }}>Imported assets: {p.imported.join(', ')}.</p>
                )}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 1rem', lineHeight: 1.9 }}>
                    {p.credits.map((c) => (
                        <li key={c.source}>{c.label}: <a href={c.href} target="_blank" rel="noreferrer" style={{ color: RULE }}>{c.source}</a></li>
                    ))}
                </ul>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{p.creditNote}</p>
            </Section>

            <div style={{ borderTop: `4px solid ${INK}` }} />
            <style>{`
                @media (max-width: 700px) {
                    .msc-stats { grid-template-columns: 1fr !important; }
                    .msc-stats > div { border-left: none !important; border-top: 1px solid ${INK}; }
                    .msc-stats > div:first-child { border-top: none; }
                    .msc-trow { grid-template-columns: 1fr !important; gap: 0.25rem !important; }
                }
            `}</style>
        </motion.div>
    );
};

export default MscProject;
