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

const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";

// Mobile products show their screens in a phone frame. Full-length captures can
// scroll inside the frame, so a long screen reads the way it does on a phone.
const Phone = ({ src, alt, scroll = false, width = 260 }) => (
    <figure style={{ width, maxWidth: '100%', margin: 0, flex: 'none' }}>
        <div style={{ borderRadius: width * 0.15, padding: Math.round(width * 0.03), background: INK, boxShadow: '0 28px 50px -30px rgba(20,20,20,0.55)' }}>
            <div className={scroll ? 'cs-phone-scroll' : undefined} style={{ borderRadius: width * 0.12, overflowX: 'hidden', overflowY: scroll ? 'auto' : 'hidden', aspectRatio: '390 / 844', background: '#f2f2f7' }}>
                <img src={src} alt={alt} loading="lazy" style={{ width: '100%', display: 'block' }} />
            </div>
        </div>
        {scroll && <figcaption style={{ fontFamily: MONO, fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, textAlign: 'center', marginTop: '0.7rem' }}>Scroll inside the screen</figcaption>}
    </figure>
);

const HALFTONE = { backgroundImage: 'radial-gradient(circle, rgba(20,20,20,0.14) 1px, transparent 1.6px)', backgroundSize: '7px 7px' };

const CaseStudyTemplate = ({ project, nextProject, decisionsNote, decisionsHeading, challengesHeading, logo }) => {
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

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 3vw, 2rem) 2rem' }}>
                <Link to="/projects" style={{ display: 'block', marginBottom: '1.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, textDecoration: 'none' }}>← Index</Link>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>{project.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    {logo && <div style={{ flex: 'none' }}>{logo}</div>}
                    <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.8rem 0 1.1rem' }}>{project.title}</h1>
                </div>
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

            {project.cover && (
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(1.25rem, 3vw, 2rem) 2.25rem' }}>
                    <img src={project.cover} alt={`${project.title} screens`} style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
                </div>
            )}

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

                {project.problemStatement && (
                    <section style={{ borderLeft: `4px solid ${RULE}`, paddingLeft: '1.25rem' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>Problem statement</span>
                        <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: 1.6, marginTop: '0.6rem', maxWidth: '820px' }}>{project.problemStatement}</p>
                    </section>
                )}

                <section>
                    <SectionHeading num={nextSection()}>What this is</SectionHeading>
                    {project.overview.map((para, idx) => (
                        <p key={idx} style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.1rem' }}>{para}</p>
                    ))}
                </section>

                {project.users && (
                    <section>
                        <SectionHeading num={nextSection()}>Who it's for</SectionHeading>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                            {project.users.map((u) => (
                                <div key={u.who} style={{ border: `1px solid ${INK}`, padding: '1.4rem 1.5rem' }}>
                                    <span style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: RULE }}>{u.who}</span>
                                    <p style={{ fontSize: '0.98rem', lineHeight: 1.65, marginTop: '0.6rem' }}>{u.need}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <SectionHeading num={nextSection()}>The gap it addresses</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>{project.problem}</p>
                </section>

                {project.differentiator && (
                    <section>
                        <SectionHeading num={nextSection()}>What makes it different</SectionHeading>
                        <div style={{ background: INK, color: PAPER, padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                            <span style={{ display: 'inline-block', fontFamily: MONO, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', background: project.differentiator.status === 'Live' ? RULE : 'transparent', border: `1px solid ${project.differentiator.status === 'Live' ? RULE : PAPER}`, color: PAPER }}>{project.differentiator.status}</span>
                            <h3 style={{ fontFamily: ANTON, fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', textTransform: 'uppercase', lineHeight: 1.05, margin: '1rem 0 0.9rem' }}>{project.differentiator.title}</h3>
                            <p style={{ fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '760px', color: 'rgba(242,240,234,0.88)' }}>{project.differentiator.body}</p>
                            <div className="cs-diff-points" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem 2rem', marginTop: '1.5rem' }}>
                                {project.differentiator.points.map((pt) => (
                                    <div key={pt} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', borderTop: '1px solid rgba(242,240,234,0.22)', paddingTop: '0.9rem' }}>
                                        <span style={{ color: '#8f8dff', fontFamily: ANTON, flex: 'none' }}>→</span>
                                        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0, color: 'rgba(242,240,234,0.92)' }}>{pt}</p>
                                    </div>
                                ))}
                            </div>
                            {project.differentiator.note && (
                                <p style={{ fontFamily: MONO, fontSize: '0.74rem', letterSpacing: '0.04em', color: 'rgba(242,240,234,0.7)', marginTop: '1.5rem' }}>{project.differentiator.note}</p>
                            )}
                        </div>
                    </section>
                )}

                <section>
                    <SectionHeading num={nextSection()}>My approach</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>{project.solution}</p>
                </section>

                {project.principles && (
                    <section>
                        <SectionHeading num={nextSection()}>{project.principlesTitle || 'Principles I designed by'}</SectionHeading>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
                            {project.principles.map((pr, i) => (
                                <div key={pr.title} style={{ borderTop: `4px solid ${INK}`, paddingTop: '1rem' }}>
                                    <span style={{ fontFamily: MONO, fontSize: '0.72rem', color: RULE, letterSpacing: '0.1em' }}>P{i + 1}</span>
                                    <h3 style={{ fontFamily: ANTON, fontSize: '1.2rem', textTransform: 'uppercase', lineHeight: 1.1, margin: '0.4rem 0 0.55rem' }}>{pr.title}</h3>
                                    <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: MUTED }}>{pr.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

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
                        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', textTransform: 'uppercase' }}>{decisionsHeading || 'Key decisions'}</h2>
                    </div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: MUTED, marginBottom: '2rem' }}>
                        {decisionsNote || 'Every screen below is a screenshot of the live, deployed product, not a mockup.'}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {project.designDecisions.map((dec, idx) => {
                            const imageFirst = idx % 2 === 0;
                            const phone = project.device === 'phone';
                            const shots = dec.images ?? [{ src: dec.image, scroll: dec.scroll }];
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
                                    {phone ? (
                                        <div className="cs-phones" style={{ order: imageFirst ? 0 : 2, ...HALFTONE, padding: '2rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '1.25rem' }}>
                                            {shots.map((shot) => (
                                                <Phone key={shot.src} src={shot.src} alt={dec.title} scroll={shot.scroll} width={shots.length > 1 ? 210 : 250} />
                                            ))}
                                        </div>
                                    ) : (
                                    <div style={{ order: imageFirst ? 0 : 2, ...HALFTONE, padding: '1rem' }}>
                                        <img src={dec.image} alt={dec.title} style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
                                    </div>
                                    )}
                                    <div style={{ order: 1 }}>
                                        <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{dec.title}</h3>
                                        <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: MUTED }}>{dec.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {project.flows?.map((flow) => (
                    <section key={flow.title}>
                        <SectionHeading num={nextSection()}>{flow.title}</SectionHeading>
                        {flow.desc && <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: MUTED, maxWidth: '760px', marginBottom: '1.75rem' }}>{flow.desc}</p>}
                        <div className="cs-rail" style={{ ...HALFTONE, display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '2rem 1.5rem 1.5rem' }}>
                            {flow.steps.map((st, i) => (
                                <div key={st.image} style={{ flex: 'none', width: 200 }}>
                                    <Phone src={st.image} alt={st.caption} width={200} />
                                    <p style={{ fontFamily: MONO, fontSize: '0.72rem', lineHeight: 1.5, marginTop: '0.9rem' }}>
                                        <span style={{ color: RULE, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span> {st.caption}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {project.gallery && (
                    <section>
                        <SectionHeading num={nextSection()}>{project.gallery.title}</SectionHeading>
                        {project.gallery.note && <p style={{ fontFamily: MONO, fontSize: '0.78rem', color: MUTED, marginBottom: '1.75rem' }}>{project.gallery.note}</p>}
                        <div className="cs-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '2rem 1.5rem' }}>
                            {project.gallery.items.map((g) => (
                                <div key={g.image}>
                                    <Phone src={g.image} alt={g.caption} scroll={g.scroll} width={230} />
                                    <p style={{ fontFamily: MONO, fontSize: '0.72rem', lineHeight: 1.5, marginTop: '0.75rem', textAlign: 'center' }}>{g.caption}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

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

                {project.metrics && (
                    <section>
                        <SectionHeading num={nextSection()}>{project.metrics.title || "How I'd measure success"}</SectionHeading>
                        {project.metrics.intro && <p style={{ fontFamily: MONO, fontSize: '0.8rem', lineHeight: 1.6, color: MUTED, marginBottom: '1.25rem', maxWidth: '760px' }}>{project.metrics.intro}</p>}
                        <div>
                            {project.metrics.items.map((m) => (
                                <div key={m.name} className="cs-metric-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.42fr) minmax(0, 1fr)', gap: '1.5rem', borderTop: `1px solid ${INK}`, padding: '1.1rem 0', alignItems: 'baseline' }}>
                                    <h3 style={{ fontFamily: ANTON, fontSize: '1.1rem', textTransform: 'uppercase', lineHeight: 1.15 }}>{m.name}</h3>
                                    <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>{m.why}</p>
                                </div>
                            ))}
                            <div style={{ borderTop: `1px solid ${INK}` }} />
                        </div>
                    </section>
                )}

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
                    .cs-decision-row, .cs-metric-row, .cs-diff-points {
                        grid-template-columns: 1fr !important;
                    }
                    .cs-metric-row { gap: 0.4rem !important; }
                    .cs-decision-row > div {
                        order: initial !important;
                    }
                    .cs-gallery {
                        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                    }
                }
                @media (max-width: 1000px) and (min-width: 721px) {
                    .cs-gallery {
                        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
                    }
                }
                @media (max-width: 480px) {
                    .cs-phones { gap: 0.75rem !important; padding: 1.5rem 0.5rem !important; }
                    .cs-phones figure { width: 46% !important; }
                }
                .cs-gallery figure { margin: 0 auto !important; }
                .cs-phone-scroll { scrollbar-width: none; }
                .cs-phone-scroll::-webkit-scrollbar { display: none; }
                .cs-rail { scrollbar-width: thin; }
            `}</style>
        </motion.div>
    );
};

export default CaseStudyTemplate;
