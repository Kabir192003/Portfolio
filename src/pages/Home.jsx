import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PixelPortrait from '../components/PixelPortrait';
import { WORKS, WorkCard } from '../components/WorkCard';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const FAINT = '#8a8578';
const PAPER = '#f2f0ea';
const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";
const SERIF = "'Source Serif 4', Georgia, serif";

const STATS = [
    { value: '5', label: 'Live products, designed and built' },
    { value: '500+', label: 'People surveyed for my products' },
    { value: '8', label: 'Case studies' },
    { value: 'M.Sc.', label: 'Interactive Digital Media, Trinity College Dublin' },
];

const CAPABILITIES = [
    { area: 'Design', text: 'Research, flows, interfaces and design systems, from a 300-student survey to the brand and site for Cimelium.', tools: 'Figma · Prototyping · Design systems · Usability testing' },
    { area: 'Engineering', text: 'I build what I design, on real backends, and own the product decisions behind an AI-agent engineering workflow.', tools: 'React · TypeScript · Python · SQL · Postgres / Supabase' },
    { area: 'Data', text: 'Open-data pipelines, back-tested models and survey analysis. Settld’s rent model is checked against 132 published figures.', tools: 'Product analytics · GA4 · Data visualisation · Qlik' },
    { area: 'Product', text: 'Requirements, scope and trade-offs, written as rules engineers can build and QA can test.', tools: 'Requirements · Prioritisation · Scrum · Acceptance testing' },
];

const FEATURED_ID = 'settld';
const SELECTED_IDS = [6, 'pawfect', 2, 1];

const fade = {
    hidden: { opacity: 0, y: 14 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.05 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

const Mark = ({ pos }) => <span className={`home-mark home-mark-${pos}`} aria-hidden="true" />;

const Home = () => {
    const featured = WORKS.find((w) => w.id === FEATURED_ID);
    const selected = SELECTED_IDS.map((id) => WORKS.find((w) => w.id === id)).filter(Boolean);
    const scrollToWork = (e) => {
        e.preventDefault();
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: PAPER, color: INK }}>
            {/* Hero */}
            <section className="home-hero">
                <div className="home-hero-text">
                    <motion.p custom={0} variants={fade} initial="hidden" animate="visible" className="home-eyebrow">
                        Kabir Sharma <span>·</span> Product Design Engineer <span>·</span> Dublin
                    </motion.p>
                    <motion.h1 custom={1} variants={fade} initial="hidden" animate="visible" className="home-title">
                        I research the problem, design the product <em>and build&nbsp;it.</em>
                    </motion.h1>
                    <motion.p custom={2} variants={fade} initial="hidden" animate="visible" className="home-lede">
                        Product Design Engineer at Cimelium, an Enterprise Ireland funded startup at Trinity College Dublin. Five of my products are live, so you can use them, not just look at mockups.
                    </motion.p>
                    <motion.div custom={3} variants={fade} initial="hidden" animate="visible" className="home-ctas">
                        <a href="#work" onClick={scrollToWork} className="home-btn home-btn-solid">See the work ↓</a>
                        <a href="./Kabir_Sharma_CV.pdf" target="_blank" rel="noreferrer" className="home-btn">Download CV</a>
                        <a href="mailto:kabiroscope@gmail.com" className="home-mail">kabiroscope@gmail.com</a>
                    </motion.div>
                    <motion.p custom={4} variants={fade} initial="hidden" animate="visible" className="home-status">
                        <span className="home-dot" /> Open to product designer, design engineer and data roles · Stamp 1G, no sponsorship needed
                    </motion.p>
                </div>

                <motion.figure custom={2} variants={fade} initial="hidden" animate="visible" className="home-plate">
                    <Mark pos="tl" /><Mark pos="tr" /><Mark pos="bl" /><Mark pos="br" />
                    <div className="home-plate-inner">
                        <PixelPortrait src="./portrait-cutout.webp" alt="Kabir Sharma" />
                    </div>
                    <figcaption>
                        <span>Fig. 01 · Kabir Sharma</span>
                        <span>53.34° N, 6.25° W</span>
                    </figcaption>
                </motion.figure>
            </section>

            {/* Stats */}
            <section className="home-stats" aria-label="At a glance">
                {STATS.map((s) => (
                    <div key={s.label}>
                        <span className="home-stat-value">{s.value}</span>
                        <span className="home-stat-label">{s.label}</span>
                    </div>
                ))}
            </section>

            {/* Work */}
            <section id="work" className="home-section">
                <div className="home-section-head">
                    <div>
                        <span className="home-kicker">Selected work</span>
                        <h2 className="home-h2">Real problems, <em>shipped.</em></h2>
                    </div>
                    <Link to="/projects" className="home-link">All 8 case studies →</Link>
                </div>
                {featured && <WorkCard w={featured} featured />}
                <div className="work-grid">
                    {selected.map((w) => <WorkCard key={w.id} w={w} />)}
                </div>
            </section>

            {/* What I do */}
            <section className="home-section home-section-rule">
                <div className="home-section-head">
                    <div>
                        <span className="home-kicker">What I do</span>
                        <h2 className="home-h2">One person, <em>the whole loop.</em></h2>
                    </div>
                    <Link to="/experience" className="home-link">Experience →</Link>
                </div>
                <div className="home-caps">
                    {CAPABILITIES.map((c, i) => (
                        <div key={c.area}>
                            <span className="home-cap-num">{String(i + 1).padStart(2, '0')}</span>
                            <h3>{c.area}</h3>
                            <p>{c.text}</p>
                            <span className="home-cap-tools">{c.tools}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Outside the build */}
            <section className="home-outside">
                <p>
                    <span className="home-kicker">Outside the build</span>
                    15+ countries and 12,000 km driven across Europe chasing car events, a growing watch collection, and a camera that comes along.
                </p>
                <Link to="/about" className="home-btn">Read the story →</Link>
            </section>

            <style>{`
                .home-hero { max-width: 1320px; margin: 0 auto; padding: clamp(3rem, 7vw, 6rem) clamp(1.25rem, 3vw, 3rem) clamp(3rem, 6vw, 5rem); display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: clamp(2rem, 5vw, 5rem); align-items: center; }
                .home-eyebrow { font-family: ${MONO}; font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase; color: ${MUTED}; margin: 0 0 1.6rem; }
                .home-eyebrow span { color: ${RULE}; margin: 0 0.35em; }
                .home-title { font-family: ${SERIF}; font-weight: 400; font-size: clamp(2.5rem, 5.4vw, 4.9rem); line-height: 1.04; letter-spacing: -0.02em; margin: 0; text-transform: none; }
                .home-title em, .home-h2 em { font-style: italic; color: ${RULE}; }
                .home-lede { font-size: clamp(1.02rem, 1.4vw, 1.15rem); line-height: 1.65; color: ${MUTED}; max-width: 54ch; margin: 1.6rem 0 2rem; }
                .home-ctas { display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem 1rem; }
                .home-btn { display: inline-block; font-family: ${MONO}; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${INK}; border: 1px solid ${INK}; padding: 0.95rem 1.4rem; text-decoration: none; transition: background 0.2s, color 0.2s; }
                .home-btn:hover { background: ${INK}; color: ${PAPER}; }
                .home-btn-solid { background: ${RULE}; border-color: ${RULE}; color: ${PAPER}; }
                .home-btn-solid:hover { background: ${INK}; border-color: ${INK}; }
                .home-mail { font-family: ${MONO}; font-size: 0.8rem; color: ${MUTED}; text-decoration: underline; text-underline-offset: 4px; margin-left: 0.4rem; }
                .home-mail:hover { color: ${RULE}; }
                .home-status { display: flex; align-items: center; gap: 0.6rem; font-family: ${MONO}; font-size: 0.72rem; letter-spacing: 0.04em; color: ${MUTED}; margin: 2rem 0 0; line-height: 1.6; }
                .home-dot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: ${RULE}; box-shadow: 0 0 0 4px rgba(46,43,239,0.15); }

                .home-plate { position: relative; margin: 0; padding: 1.1rem; border: 1px solid ${INK}; background: #ebe8e0; }
                .home-plate-inner { overflow: hidden; }
                .home-plate figcaption { display: flex; justify-content: space-between; gap: 1rem; font-family: ${MONO}; font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${MUTED}; border-top: 1px solid ${INK}; padding-top: 0.75rem; margin-top: 0.9rem; }
                .home-mark { position: absolute; width: 14px; height: 14px; border-color: ${RULE}; border-style: solid; border-width: 0; }
                .home-mark-tl { top: -8px; left: -8px; border-top-width: 2px; border-left-width: 2px; }
                .home-mark-tr { top: -8px; right: -8px; border-top-width: 2px; border-right-width: 2px; }
                .home-mark-bl { bottom: -8px; left: -8px; border-bottom-width: 2px; border-left-width: 2px; }
                .home-mark-br { bottom: -8px; right: -8px; border-bottom-width: 2px; border-right-width: 2px; }

                .home-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid ${INK}; border-bottom: 1px solid ${INK}; }
                .home-stats > div { padding: 1.8rem clamp(1.25rem, 3vw, 3rem); border-right: 1px solid ${INK}; display: flex; flex-direction: column; gap: 0.4rem; }
                .home-stats > div:last-child { border-right: none; }
                .home-stat-value { font-family: ${ANTON}; font-size: clamp(2rem, 3.6vw, 3rem); line-height: 1; }
                .home-stat-label { font-family: ${MONO}; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: ${MUTED}; line-height: 1.5; }

                .home-section { max-width: 1400px; margin: 0 auto; padding: clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 3vw, 3rem) 1rem; }
                .home-section-rule { border-top: 1px solid ${INK}; max-width: none; }
                .home-section-rule > * { max-width: 1304px; margin-left: auto; margin-right: auto; }
                .home-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2.25rem; }
                .home-kicker { display: block; font-family: ${MONO}; font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: ${RULE}; font-weight: 700; margin-bottom: 0.7rem; }
                .home-h2 { font-family: ${SERIF}; font-weight: 400; font-size: clamp(2rem, 3.8vw, 3.2rem); line-height: 1.05; letter-spacing: -0.015em; text-transform: none; margin: 0; }
                .home-link { font-family: ${MONO}; font-size: 0.82rem; font-weight: 700; color: ${RULE}; text-decoration: underline; text-underline-offset: 4px; }

                .home-caps { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; padding-bottom: 4rem; }
                .home-caps > div { border-top: 2px solid ${INK}; padding-top: 1rem; display: flex; flex-direction: column; }
                .home-cap-num { font-family: ${MONO}; font-size: 0.7rem; color: ${FAINT}; }
                .home-caps h3 { font-family: ${ANTON}; font-size: 1.35rem; text-transform: uppercase; margin: 0.35rem 0 0.6rem; }
                .home-caps p { font-size: 0.98rem; line-height: 1.6; color: ${MUTED}; margin: 0 0 1rem; }
                .home-cap-tools { margin-top: auto; font-family: ${MONO}; font-size: 0.7rem; line-height: 1.7; color: ${INK}; }

                .home-outside { border-top: 1px solid ${INK}; max-width: 1304px; margin: 0 auto; padding: 3rem clamp(1.25rem, 3vw, 3rem) 4rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
                .home-outside p { font-size: 1.08rem; line-height: 1.7; max-width: 60ch; margin: 0; }

                @media (max-width: 960px) {
                    .home-hero { grid-template-columns: minmax(0, 1fr); }
                    .home-plate { max-width: 440px; }
                    .home-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                    .home-stats > div:nth-child(2) { border-right: none; }
                    .home-stats > div:nth-child(-n+2) { border-bottom: 1px solid ${INK}; }
                    .home-caps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }
                @media (max-width: 560px) {
                    .home-caps { grid-template-columns: minmax(0, 1fr); }
                    .home-mail { margin-left: 0; }
                }
            `}</style>
        </motion.div>
    );
};

export default Home;
