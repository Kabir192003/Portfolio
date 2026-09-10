import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// The site-wide case-study format: Swiss-poster registration marks, a
// rule-blue accent, numbered sections, a dot-matrix halftone behind every
// screenshot. Every project page renders through this one template so the
// work reads as one consistent body of work rather than five different
// portfolio experiments.
const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';

const useCaseStudyFonts = () => {
    useEffect(() => {
        if (document.getElementById('case-study-fonts')) return;
        const preconnect1 = document.createElement('link');
        preconnect1.rel = 'preconnect';
        preconnect1.href = 'https://fonts.googleapis.com';
        const preconnect2 = document.createElement('link');
        preconnect2.rel = 'preconnect';
        preconnect2.href = 'https://fonts.gstatic.com';
        preconnect2.crossOrigin = 'anonymous';
        const stylesheet = document.createElement('link');
        stylesheet.id = 'case-study-fonts';
        stylesheet.rel = 'stylesheet';
        stylesheet.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500;700&display=swap';
        document.head.append(preconnect1, preconnect2, stylesheet);
    }, []);
};

const SectionHeading = ({ num, children }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.4rem', color: RULE }}>{String(num).padStart(2, '0')}</span>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', textTransform: 'uppercase' }}>{children}</h2>
    </div>
);

const CaseStudyTemplate = ({ project, nextProject, decisionsNote, challengesHeading }) => {
    useCaseStudyFonts();
    const n = project.impactMetrics.length;

    const challengeCount = project.challenges?.length || 0;
    const challengesLabel = challengesHeading || (
        challengeCount === 2 ? 'Two things worth calling out'
            : challengeCount === 3 ? 'Three things worth calling out'
                : 'What was hard'
    );

    let sectionNum = 0;
    const nextSection = () => { sectionNum += 1; return sectionNum; };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: PAPER, color: INK, fontFamily: "'Source Serif 4', serif" }}
        >
            <div style={{ borderTop: `4px solid ${INK}` }} />
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem clamp(1.25rem, 3vw, 3rem)', borderBottom: `1px solid ${INK}` }}>
                <Link to="/projects" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: INK, textDecoration: 'none' }}>← Index</Link>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.15rem', letterSpacing: '0.02em' }}>KABIROSCOPE</span>
            </nav>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem, 3vw, 2rem) 2rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>{project.category}</span>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.8rem 0 1.1rem' }}>{project.title}</h1>
                {project.tagline && <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: MUTED, maxWidth: '680px', lineHeight: 1.6, marginBottom: '1.75rem' }}>{project.tagline}</p>}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ background: RULE, color: PAPER, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '0.85rem 1.5rem', textDecoration: 'none' }}>View live product ↗</a>
                    )}
                    {project.repoLink && (
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{ border: `1px solid ${INK}`, color: INK, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '0.85rem 1.5rem', textDecoration: 'none' }}>View source</a>
                    )}
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)` }}>
                {project.impactMetrics.map((m, i) => (
                    <div key={m.label} style={{ padding: '1.75rem clamp(1rem, 2vw, 1.75rem)', borderRight: i < n - 1 ? `1px solid ${INK}` : 'none' }}>
                        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', display: 'block', lineHeight: 1 }}>{m.value}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED }}>{m.label}</span>
                    </div>
                ))}
            </div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.25rem clamp(1.25rem, 3vw, 2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', borderBottom: `1px solid ${INK}` }}>
                <div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: '0.35rem' }}>Role</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{project.role}</span>
                </div>
                <div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: '0.35rem' }}>Timeline</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{project.timeline}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'flex-start' }}>
                    {project.tools.map((t) => (
                        <span key={t} style={{ border: `1px solid ${INK}`, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', padding: '5px 10px' }}>{t}</span>
                    ))}
                </div>
            </div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem, 3vw, 2rem) 0', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                <section>
                    <SectionHeading num={nextSection()}>What this is</SectionHeading>
                    {project.overview.map((para, idx) => (
                        <p key={idx} style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.1rem' }}>{para}</p>
                    ))}
                </section>

                <section>
                    <SectionHeading num={nextSection()}>The gap it addresses</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>{project.problem}</p>
                </section>

                <section>
                    <SectionHeading num={nextSection()}>My approach</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>{project.solution}</p>
                </section>

                <section>
                    <SectionHeading num={nextSection()}>Process</SectionHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                        {project.process.map((p) => (
                            <div key={p.step} style={{ border: `1px solid ${INK}`, padding: '1.5rem' }}>
                                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.6rem', color: RULE, display: 'block', marginBottom: '0.5rem' }}>{p.step}</span>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.title}</h3>
                                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: MUTED }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {project.quantData && (
                    <section>
                        <SectionHeading num={nextSection()}>What the numbers said</SectionHeading>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem', padding: '2.25rem', border: `1px solid ${INK}` }}>
                            {project.quantData.map((metric) => (
                                <div key={metric.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{metric.label}</span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {metric.bars.map((bar) => (
                                            <div key={bar.brand} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ width: '64px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: MUTED, flex: 'none' }}>{bar.brand}</span>
                                                <div style={{ flex: 1, height: '10px', background: PAPER, border: `1px solid ${INK}` }}>
                                                    <div style={{ height: '100%', width: `${bar.value * 10}%`, background: RULE }} />
                                                </div>
                                                <span style={{ width: '30px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', fontWeight: 700, textAlign: 'right', flex: 'none' }}>{bar.value.toFixed(1)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.4rem', color: RULE }}>{String(nextSection()).padStart(2, '0')}</span>
                        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', textTransform: 'uppercase' }}>Key decisions</h2>
                    </div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: MUTED, marginBottom: '2rem' }}>
                        {decisionsNote || 'Every screen below is a screenshot of the live, deployed product — not a mockup.'}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {project.designDecisions.map((dec, idx) => {
                            const imageFirst = idx % 2 === 0;
                            return (
                                <div
                                    key={dec.title}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: imageFirst ? 'minmax(0,1.2fr) minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1.2fr)',
                                        gap: '2rem',
                                        alignItems: 'center',
                                    }}
                                    className="cs-decision-row"
                                >
                                    <div style={{ order: imageFirst ? 0 : 2, backgroundImage: 'radial-gradient(circle, rgba(20,20,20,0.14) 1px, transparent 1.6px)', backgroundSize: '7px 7px', padding: '1rem' }}>
                                        <img src={dec.image} alt={dec.title} style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
                                    </div>
                                    <div style={{ order: 1 }}>
                                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{dec.title}</h3>
                                        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: MUTED }}>{dec.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <SectionHeading num={nextSection()}>{challengesLabel}</SectionHeading>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {project.challenges.map((c) => (
                            <div key={c.title} style={{ borderTop: `1px solid ${INK}`, padding: '1.5rem 0' }}>
                                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{c.title}</h3>
                                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: MUTED }}>{c.solution}</p>
                            </div>
                        ))}
                        <div style={{ borderTop: `1px solid ${INK}` }} />
                    </div>
                </section>

                <section>
                    <SectionHeading num={nextSection()}>Where it landed</SectionHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                        {project.outcomes.map((o, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <span style={{ color: RULE, fontFamily: "'Anton', sans-serif", flex: 'none' }}>→</span>
                                <p style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{o}</p>
                            </div>
                        ))}
                    </div>
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: RULE, color: PAPER, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '0.85rem 1.5rem', textDecoration: 'none', marginBottom: '2.5rem' }}>Try it yourself ↗</a>
                    )}

                    <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '2rem' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Reflection</span>
                        <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: 'italic', fontSize: '1.3rem', lineHeight: 1.6, marginTop: '0.75rem', maxWidth: '820px' }}>&ldquo;{project.reflections}&rdquo;</p>
                    </div>
                </section>
            </div>

            {nextProject && (
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem clamp(1.25rem, 3vw, 2rem) 4rem', borderTop: `1px solid ${INK}`, marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: MUTED, textTransform: 'uppercase' }}>Next case study</span>
                    <Link to={nextProject.to} style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.5rem', textTransform: 'uppercase', color: INK, textDecoration: 'none' }}>{nextProject.title} →</Link>
                </div>
            )}
            <div style={{ borderTop: `4px solid ${INK}` }} />

            <style>{`
                @media (max-width: 720px) {
                    .cs-decision-row {
                        grid-template-columns: 1fr !important;
                    }
                    .cs-decision-row > div {
                        order: initial !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default CaseStudyTemplate;
