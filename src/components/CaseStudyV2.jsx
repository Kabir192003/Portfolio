import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Short-form case study: a product preview in the first screen, then six sections
// (Overview, Discovery, Design decisions, Iterations, Final experience, Outcomes).
// Visual evidence leads; text supports it.
const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";
const HALFTONE = { backgroundImage: 'radial-gradient(circle, rgba(20,20,20,0.14) 1px, transparent 1.6px)', backgroundSize: '7px 7px' };

const Phone = ({ src, alt, width = 230, scroll = false }) => (
    <figure style={{ width, maxWidth: '100%', margin: 0, flex: 'none' }}>
        <div style={{ borderRadius: width * 0.15, padding: Math.round(width * 0.03), background: INK, boxShadow: '0 28px 50px -30px rgba(20,20,20,0.55)' }}>
            <div className={scroll ? 'cs2-phone-scroll' : undefined} style={{ borderRadius: width * 0.12, overflowX: 'hidden', overflowY: scroll ? 'auto' : 'hidden', aspectRatio: '390 / 844', background: '#f2f2f7' }}>
                <img src={src} alt={alt} loading="lazy" style={{ width: '100%', display: 'block' }} />
            </div>
        </div>
    </figure>
);

// One visual: a desktop screenshot/diagram, or a row of phones
const Visual = ({ image, images, phones, alt, eager }) => {
    if (phones?.length) {
        return (
            <div className="cs2-phones" style={{ ...HALFTONE, padding: '2rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap' }}>
                {phones.map((p) => {
                    const src = typeof p === 'string' ? p : p.src;
                    return <Phone key={src} src={src} alt={alt} scroll={!!p.scroll} width={phones.length > 2 ? 200 : 240} />;
                })}
            </div>
        );
    }
    if (images?.length) {
        return (
            <div className="cs2-pair" style={{ display: 'grid', gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))`, gap: '1rem' }}>
                {images.map((im) => (
                    <figure key={im.src} style={{ margin: 0 }}>
                        <div style={{ ...HALFTONE, padding: '0.75rem' }}>
                            <img src={im.src} alt={im.label || alt} loading="lazy" style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
                        </div>
                        {im.label && <figcaption style={{ fontFamily: MONO, fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.6rem', color: im.tone === 'after' ? RULE : MUTED, fontWeight: 700 }}>{im.label}</figcaption>}
                    </figure>
                ))}
            </div>
        );
    }
    if (!image) return null;
    return (
        <div style={{ ...HALFTONE, padding: '0.9rem' }}>
            <img src={image} alt={alt} loading={eager ? 'eager' : 'lazy'} style={{ width: '100%', display: 'block', border: `1px solid ${INK}` }} />
        </div>
    );
};

const Section = ({ num, name, title, children }) => (
    <section className="cs2-section">
        <div className="cs2-head">
            <span className="cs2-num">{String(num).padStart(2, '0')}</span>
            <span className="cs2-name">{name}</span>
        </div>
        {title && <h2 className="cs2-title">{title}</h2>}
        {children}
    </section>
);

const Label = ({ children, tone }) => (
    <span style={{ display: 'block', fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: tone || RULE, marginBottom: '0.35rem' }}>{children}</span>
);

const CaseStudyV2 = ({ project, nextProject, logo }) => {
    const v = project.v2;
    const o = v.overview;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ background: PAPER, color: INK, fontFamily: "'Source Serif 4', serif" }}>
            <div style={{ borderTop: `4px solid ${INK}` }} />

            {/* Title + product preview, together in the first screen */}
            <header className="cs2-wrap" style={{ paddingTop: '2.25rem' }}>
                <Link to="/projects" className="cs2-back">← All work</Link>
                <span style={{ fontFamily: MONO, fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>{project.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                    {logo && <div style={{ flex: 'none' }}>{logo}</div>}
                    <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(2.4rem, 6vw, 4.6rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.6rem 0 0.9rem' }}>{project.title}</h1>
                </div>
                <p style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', fontStyle: 'italic', color: MUTED, maxWidth: '760px', lineHeight: 1.55, margin: '0 0 1.4rem' }}>{project.tagline}</p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cs2-btn cs2-btn-solid">View live product ↗</a>}
                    {v.links?.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="cs2-btn">{l.label}</a>)}
                    {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="cs2-btn">View source</a>}
                </div>
                <Visual {...v.preview} alt={`${project.title} preview`} eager />
            </header>

            <main className="cs2-wrap">
                {/* 01 Overview */}
                <Section num={1} name="Overview">
                    <p className="cs2-lede">{o.summary}</p>
                    <div className="cs2-facts">
                        <div><Label>Problem</Label><p>{o.problem}</p></div>
                        <div><Label>My role</Label><p>{o.role}</p></div>
                        <div><Label>Team</Label><p>{o.team}</p></div>
                        <div><Label>Timeline</Label><p>{o.timeline}</p></div>
                    </div>
                    {o.stats?.length > 0 && (
                        <div className="cs2-stats" style={{ gridTemplateColumns: `repeat(${o.stats.length}, minmax(0, 1fr))` }}>
                            {o.stats.map((s) => (
                                <div key={s.label}><span className="cs2-stat-v">{s.value}</span><span className="cs2-stat-l">{s.label}</span></div>
                            ))}
                        </div>
                    )}
                </Section>

                {/* 02 Discovery */}
                <Section num={2} name="Discovery" title={v.discovery.title}>
                    {v.discovery.intro && <p className="cs2-body">{v.discovery.intro}</p>}
                    {v.discovery.visual && <div style={{ margin: '1.75rem 0' }}><Visual {...v.discovery.visual} alt="Discovery" /></div>}
                    <div className="cs2-findings">
                        {v.discovery.findings.map((f, i) => (
                            <div key={f.title} className="cs2-finding">
                                <span className="cs2-fnum">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                                {f.ledTo && <p className="cs2-led"><strong>Led to:</strong> {f.ledTo}</p>}
                            </div>
                        ))}
                    </div>
                    {v.discovery.note && <p className="cs2-note">{v.discovery.note}</p>}
                </Section>

                {/* 03 Design decisions */}
                <Section num={3} name="Design decisions" title={v.decisionsTitle}>
                    <div className="cs2-stack">
                        {v.decisions.map((d) => (
                            <article key={d.title} className={`cs2-decision${d.wide || (d.image && d.image.endsWith(".svg")) ? " cs2-wide" : ""}`}>
                                <Visual {...d} alt={d.title} />
                                <div className="cs2-dtext">
                                    <h3>{d.title}</h3>
                                    {d.considered && <p><Label tone={MUTED}>Options considered</Label>{d.considered}</p>}
                                    <p><Label>Chose</Label>{d.chose}</p>
                                    <p><Label tone={MUTED}>Why</Label>{d.why}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>

                {/* 04 Iterations */}
                <Section num={4} name="Iterations" title={v.iterationsTitle}>
                    <div className="cs2-stack">
                        {v.iterations.map((it) => (
                            <article key={it.title} className="cs2-iter">
                                {(it.image || it.images || it.phones) && <Visual {...it} alt={it.title} />}
                                <div className="cs2-itext">
                                    <h3>{it.title}</h3>
                                    {it.feedback && <p><Label tone={MUTED}>What we saw</Label>{it.feedback}</p>}
                                    <p><Label>What changed</Label>{it.change}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>

                {/* 05 Final experience */}
                <Section num={5} name="Final experience" title={v.final.title}>
                    {v.final.note && <p className="cs2-note" style={{ marginTop: 0 }}>{v.final.note}</p>}
                    <div className="cs2-final">
                        {v.final.screens.map((s) => (
                            <figure key={s.title} className={`cs2-screen${s.phones ? ' cs2-screen-phones' : ''}`}>
                                <Visual {...s} alt={s.title} />
                                <figcaption><h3>{s.title}</h3><p>{s.note}</p></figcaption>
                            </figure>
                        ))}
                    </div>
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cs2-btn cs2-btn-solid" style={{ marginTop: '2rem', display: 'inline-block' }}>Try the live product ↗</a>}
                </Section>

                {/* 06 Outcomes */}
                <Section num={6} name="Outcomes" title={v.outcomes.title}>
                    <div className="cs2-outcomes">
                        <div><Label>Results</Label><ul>{v.outcomes.results.map((r) => <li key={r}>{r}</li>)}</ul></div>
                        <div><Label tone="#c2410c">Limitations</Label><ul>{v.outcomes.limitations.map((r) => <li key={r}>{r}</li>)}</ul></div>
                        <div><Label tone={MUTED}>Next</Label><ul>{v.outcomes.next.map((r) => <li key={r}>{r}</li>)}</ul></div>
                    </div>
                    {v.outcomes.reflection && <blockquote className="cs2-quote">{v.outcomes.reflection}</blockquote>}
                </Section>
            </main>

            {nextProject && (
                <div style={{ borderTop: `1px solid ${INK}`, marginTop: '3rem' }}>
                    <div className="cs2-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem clamp(1.25rem, 3vw, 2rem)', flexWrap: 'wrap', gap: '1rem' }}>
                        <span style={{ fontFamily: MONO, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Next case study</span>
                        <Link to={nextProject.to} style={{ fontFamily: ANTON, fontSize: '1.5rem', textTransform: 'uppercase', color: INK, textDecoration: 'none' }}>{nextProject.title} →</Link>
                    </div>
                </div>
            )}
            <div style={{ borderTop: `4px solid ${INK}` }} />

            <style>{`
                .cs2-wrap { max-width: 1100px; margin: 0 auto; padding-left: clamp(1.25rem, 3vw, 2rem); padding-right: clamp(1.25rem, 3vw, 2rem); }
                .cs2-back { display: block; margin-bottom: 1.25rem; font-family: ${MONO}; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: ${MUTED}; text-decoration: none; }
                .cs2-btn { font-family: ${MONO}; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; padding: 0.8rem 1.3rem; text-decoration: none; border: 1px solid ${INK}; color: ${INK}; }
                .cs2-btn-solid { background: ${RULE}; border-color: ${RULE}; color: ${PAPER}; }
                .cs2-section { border-top: 1px solid ${INK}; padding: 3rem 0 0.5rem; margin-top: 3rem; }
                .cs2-head { display: flex; align-items: baseline; gap: 0.9rem; margin-bottom: 0.9rem; }
                .cs2-num { font-family: ${ANTON}; font-size: 1.3rem; color: ${RULE}; }
                .cs2-name { font-family: ${MONO}; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 700; }
                .cs2-title { font-family: ${ANTON}; font-size: clamp(1.6rem, 3vw, 2.3rem); text-transform: uppercase; line-height: 1.05; margin: 0 0 1.25rem; max-width: 900px; }
                .cs2-lede { font-size: clamp(1.15rem, 1.8vw, 1.35rem); line-height: 1.6; max-width: 860px; margin: 0 0 2rem; }
                .cs2-body { font-size: 1.02rem; line-height: 1.7; color: ${MUTED}; max-width: 820px; margin: 0; }
                .cs2-note { font-family: ${MONO}; font-size: 0.78rem; line-height: 1.6; color: ${MUTED}; margin-top: 1.25rem; }
                .cs2-facts { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.5rem; border-top: 2px solid ${INK}; padding-top: 1.25rem; }
                .cs2-facts p { margin: 0; font-size: 0.98rem; line-height: 1.55; }
                .cs2-stats { display: grid; border: 1px solid ${INK}; margin-top: 2rem; }
                .cs2-stats > div { padding: 1.3rem 1.4rem; border-right: 1px solid ${INK}; display: flex; flex-direction: column; gap: 0.35rem; }
                .cs2-stats > div:last-child { border-right: none; }
                .cs2-stat-v { font-family: ${ANTON}; font-size: clamp(1.6rem, 3vw, 2.3rem); line-height: 1; }
                .cs2-stat-l { font-family: ${MONO}; font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: ${MUTED}; line-height: 1.45; }
                .cs2-findings { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; margin-top: 1.75rem; }
                .cs2-finding { border-top: 2px solid ${INK}; padding-top: 0.9rem; }
                .cs2-fnum { font-family: ${MONO}; font-size: 0.72rem; color: ${RULE}; font-weight: 700; }
                .cs2-finding h3, .cs2-dtext h3, .cs2-itext h3, .cs2-screen h3 { font-family: ${ANTON}; font-size: 1.2rem; text-transform: uppercase; line-height: 1.15; margin: 0.35rem 0 0.6rem; }
                .cs2-finding p, .cs2-dtext p, .cs2-itext p, .cs2-screen p { font-size: 0.97rem; line-height: 1.6; color: ${MUTED}; margin: 0 0 0.8rem; }
                .cs2-led { color: ${INK} !important; }
                .cs2-stack { display: flex; flex-direction: column; gap: 3rem; }
                .cs2-decision, .cs2-iter { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: 2rem; align-items: center; }
                .cs2-iter:not(:has(> div:first-child img)) { grid-template-columns: minmax(0, 1fr); }
                .cs2-wide { grid-template-columns: minmax(0, 1fr); }
                .cs2-wide .cs2-dtext { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 0 2rem; }
                .cs2-wide .cs2-dtext h3 { grid-row: span 3; }
                .cs2-iter:has(.cs2-pair) { grid-template-columns: minmax(0, 1fr); }
                .cs2-iter:has(.cs2-pair) .cs2-itext { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 0 2rem; }
                .cs2-iter:has(.cs2-pair) .cs2-itext h3 { grid-row: span 2; }
                .cs2-final { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.25rem 1.75rem; }
                .cs2-screen { margin: 0; }
                .cs2-screen figcaption { margin-top: 0.9rem; }
                .cs2-screen-phones { grid-column: 1 / -1; }
                .cs2-outcomes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.75rem; }
                .cs2-outcomes > div { border-top: 2px solid ${INK}; padding-top: 0.9rem; }
                .cs2-outcomes ul { margin: 0; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.6rem; }
                .cs2-outcomes li { font-size: 0.97rem; line-height: 1.55; }
                .cs2-quote { margin: 2.25rem 0 0; border-left: 4px solid ${RULE}; padding-left: 1.25rem; font-size: 1.1rem; font-style: italic; line-height: 1.65; max-width: 860px; }
                .cs2-phone-scroll::-webkit-scrollbar { display: none; }
                @media (max-width: 860px) {
                    .cs2-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                    .cs2-findings, .cs2-outcomes, .cs2-final { grid-template-columns: minmax(0, 1fr); }
                    .cs2-decision, .cs2-iter { grid-template-columns: minmax(0, 1fr); }
                    .cs2-wide .cs2-dtext, .cs2-iter .cs2-itext { display: block !important; }
                    .cs2-stats { grid-template-columns: minmax(0, 1fr) !important; }
                    .cs2-stats > div { border-right: none; border-bottom: 1px solid ${INK}; }
                    .cs2-stats > div:last-child { border-bottom: none; }
                    .cs2-pair { grid-template-columns: minmax(0, 1fr) !important; }
                }
            `}</style>
        </motion.div>
    );
};

export default CaseStudyV2;
