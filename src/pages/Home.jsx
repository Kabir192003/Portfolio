import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PortraitReveal from '../components/PortraitReveal';

const FALLBACK_IMAGE = './sample.jpg';
const PORTRAIT_IMAGE = './portrait.jpg';

const SKILLS = [
    'Product Design', 'UX Research', 'Interaction Design', 'Design Systems',
    'Prototyping', 'Front-end Fluency', 'Motion Design', 'Brand Identity',
];

const TICKER_ITEMS = [
    'Product Design', 'Available for work', 'Interaction Design', 'Dublin ↔ Hyderabad',
    'Design Systems', 'Currently at Trinity College Dublin', 'Motion Design', 'Front-end fluent',
];

const STATS = [
    { value: '6', label: 'Case studies' },
    { value: '3', label: 'Live, shippable products' },
    { value: '2', label: 'Countries called home' },
];

const FEATURED = [
    {
        to: '/projects/6',
        img: './stylebook/sb-hero.png',
        title: 'StyleBook AI',
        tag: 'AI Product · Team Lead',
        desc: 'A written brand description in, a verified, exportable design system out. Led a team of four, wrote nearly all of the implementation, published a Figma plugin.',
    },
    {
        to: '/projects/1',
        img: './trekmate-v2/tm-landing.jpg',
        title: 'Trek Mate',
        tag: 'E-commerce',
        desc: 'A generic gear storefront, rebuilt around one point of view — independent makers, field-tested, scored on what actually matters.',
    },
    {
        to: '/projects/2',
        img: './workhive/hero.jpg',
        title: 'Work Hive',
        tag: 'Web Platform',
        desc: 'Inherited a high-fidelity prototype where almost nothing worked. Rebuilt it into a live, clickable product — endorsements, search, an editable profile, all of it.',
    },
];

// ─── Reveal on scroll — one easing, no stagger fireworks ─────────────────────
const Reveal = ({ children, delay = 0, style, as = 'div' }) => {
    const Tag = motion[as] ?? motion.div;
    return (
        <Tag
            style={style}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </Tag>
    );
};

// ─── Magnetic hover — cheap, no dependency, real tactility ───────────────────
const MagneticLink = ({ to, children, className, style }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
    };
    const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0, 0)'; };
    return (
        <Link
            ref={ref}
            to={to}
            className={className}
            style={{ ...style, transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            {children}
        </Link>
    );
};

const Marquee = () => (
    <div className="marquee">
        <div className="marquee-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="marquee-item">{item}</span>
            ))}
        </div>
    </div>
);

const CardImage = ({ src, alt }) => {
    const [failed, setFailed] = React.useState(false);
    if (failed) return <div style={styles.projectImageFallback} />;
    return (
        <img
            src={src || FALLBACK_IMAGE}
            alt={alt}
            className="home-project-image"
            style={styles.projectImg}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
        />
    );
};

// ─── Editorial index row — the case-study list reads like a masthead
// contents page: a ghost number, a big title, and an image that only
// gives up its colour on hover. No cards, no boxes. ─────────────────
const ProjectCard = ({ to, img, title, tag, desc, index }) => (
    <Reveal delay={index * 0.06} style={styles.rowWrap}>
        <Link
            to={to}
            style={styles.rowLink}
            className="home-project-row"
        >
            <span style={styles.rowIndex} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div style={styles.rowText}>
                <div style={styles.rowTopLine}>
                    <h3 style={styles.rowTitle}>{title}</h3>
                    <span className="eyebrow" style={styles.projectTag}>{tag}</span>
                </div>
                <p style={styles.rowDesc}>{desc}</p>
                <span style={styles.projectArrow}>View case study <span className="home-project-arrow-icon">→</span></span>
            </div>
            <div style={styles.rowImageWrap} className="home-project-image-mask">
                <CardImage src={img} alt={title} />
            </div>
        </Link>
    </Reveal>
);

const Home = () => {
    const heroRef = useRef(null);

    const handleHeroMouseMove = (e) => {
        const el = heroRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mx', `${x}%`);
        el.style.setProperty('--my', `${y}%`);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                style={styles.heroSection}
                className="home-hero"
                onMouseMove={handleHeroMouseMove}
            >
                <motion.div
                    className="glow-orb"
                    style={{ width: 520, height: 520, top: '-14%', left: '-8%', background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)' }}
                    animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="glow-orb"
                    style={{ width: 420, height: 420, bottom: '-18%', right: '4%', background: 'radial-gradient(circle, var(--accent-2-glow), transparent 70%)' }}
                    animate={{ x: [0, -24, 12, 0], y: [0, 18, -12, 0] }}
                    transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                />
                <div className="home-hero-glow" />
                <div className="container">
                    <div style={styles.heroGrid} className="home-hero-grid">
                        <div style={styles.heroContent} className="home-hero-content">
                            <motion.span
                                className="eyebrow"
                                style={styles.heroEyebrow}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Kabir Sharma — Product Designer
                            </motion.span>

                            <motion.h1
                                style={styles.heroTitle}
                                className="home-hero-title"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.08 }}
                            >
                                Most portfolios show you the mockup.{' '}
                                <span className="text-gradient glow-text">This one shows you what happens when you click it.</span>
                            </motion.h1>

                            <motion.p
                                style={styles.heroSubtitle}
                                className="home-hero-subtitle"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.16 }}
                            >
                                I design interfaces, then I use them the way a stranger would — which is
                                usually where the real work starts. Based between Dublin and Hyderabad,
                                currently studying interactive digital media at Trinity College Dublin.
                            </motion.p>

                            <motion.div
                                style={styles.heroActions}
                                className="home-hero-actions"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.24 }}
                            >
                                <MagneticLink to="/projects" className="glass-button btn-primary" style={styles.primaryCta}>
                                    View the work
                                </MagneticLink>
                                <MagneticLink to="/contact" className="home-ghost-link" style={styles.ghostLink}>
                                    Say hello →
                                </MagneticLink>
                            </motion.div>
                        </div>

                        <motion.div
                            className="home-hero-portrait"
                            style={{ justifySelf: 'end' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            <PortraitReveal
                                src={PORTRAIT_IMAGE}
                                alt="Kabir Sharma"
                                radius={150}
                                style={styles.heroPortrait}
                                wrapStyle={styles.heroPortraitWrap}
                                caption={<span style={styles.heroPortraitCaption}>hover to reveal</span>}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Marquee />

            <div className="container">
                {/* ── STATS ────────────────────────────────────────────── */}
                <Reveal style={styles.statsBar}>
                    {STATS.map((s) => (
                        <div key={s.label} style={styles.statItem}>
                            <span className="text-gradient" style={styles.statValue}>{s.value}</span>
                            <span style={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </Reveal>
                {/* ── SKILLS ───────────────────────────────────────────── */}
                <section style={styles.section} className="home-section">
                    <Reveal>
                        <div style={styles.sectionHeader}>
                            <span className="eyebrow">What I actually do</span>
                            <h2 style={styles.sectionTitle}>Core skills</h2>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div style={styles.skillsGrid}>
                            {SKILLS.map((s) => (
                                <span key={s} className="home-skill-pill" style={styles.skillPill}>{s}</span>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* ── FEATURED PROJECTS ────────────────────────────────── */}
                <section style={styles.section} className="home-section">
                    <Reveal>
                        <div style={styles.sectionHeader}>
                            <span className="eyebrow">Selected work</span>
                            <h2 style={styles.sectionTitle}>Case studies</h2>
                        </div>
                    </Reveal>

                    <div style={styles.projectList} className="home-project-list">
                        {FEATURED.map((p, i) => (
                            <ProjectCard key={p.to} {...p} index={i} />
                        ))}
                    </div>

                    <Reveal delay={0.15}>
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link to="/projects" className="glass-button" style={{ padding: '13px 32px' }}>
                                See all projects
                            </Link>
                        </div>
                    </Reveal>
                </section>

                {/* ── CTA ──────────────────────────────────────────────── */}
                <section style={styles.ctaSection} className="home-section">
                    <Reveal>
                        <div style={styles.ctaInner} className="home-cta-inner">
                            <div className="home-cta-glow" />
                            <span className="eyebrow" style={{ color: 'var(--text-tertiary)', position: 'relative' }}>Currently open to work</span>
                            <h2 style={{ ...styles.ctaTitle, position: 'relative' }}>Have something that<br />needs to actually work?</h2>
                            <MagneticLink to="/contact" className="glass-button btn-primary" style={{ ...styles.ctaButton, position: 'relative' }}>
                                Get in touch
                            </MagneticLink>
                        </div>
                    </Reveal>
                </section>
            </div>
        </motion.div>
    );
};

const styles = {
    heroSection: {
        position: 'relative',
        padding: 'clamp(4rem, 12vh, 8rem) 0 clamp(3rem, 8vh, 5rem)',
        overflow: 'hidden',
    },
    heroGrid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        zIndex: 2,
    },
    heroContent: {
        maxWidth: '680px',
        position: 'relative',
        zIndex: 2,
    },
    heroPortraitWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.9rem',
        justifySelf: 'end',
    },
    heroPortrait: {
        filter: 'drop-shadow(0 30px 50px rgba(33, 29, 22, 0.16))',
    },
    heroPortraitCaption: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
    },
    heroEyebrow: {
        marginBottom: '1.5rem',
    },
    heroTitle: {
        fontSize: 'clamp(2.6rem, 6.6vw, 4.6rem)',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: 1.06,
        marginBottom: '1.75rem',
    },
    heroSubtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        color: 'var(--text-secondary)',
        lineHeight: 1.75,
        maxWidth: '520px',
        marginBottom: '2.25rem',
    },
    heroActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    primaryCta: {
        padding: '14px 32px',
        fontSize: '0.98rem',
    },
    ghostLink: {
        fontSize: '0.98rem',
        color: 'var(--text-secondary)',
        fontWeight: 500,
        transition: 'color var(--transition-fast)',
    },
    statsBar: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(2.5rem, 6vw, 5rem)',
        padding: '3.5rem 0',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
    },
    statValue: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1,
    },
    statLabel: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        letterSpacing: '0.01em',
    },
    section: {
        marginBottom: '6.5rem',
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        marginBottom: '2.25rem',
    },
    sectionTitle: {
        fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
    },
    skillsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.6rem',
    },
    skillPill: {
        padding: '9px 18px',
        background: 'var(--surface-color)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        fontWeight: 500,
        transition: 'border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast)',
        cursor: 'default',
    },
    projectList: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowWrap: {
        width: '100%',
    },
    rowLink: {
        display: 'grid',
        gridTemplateColumns: 'auto minmax(0, 1fr) minmax(180px, 300px)',
        alignItems: 'center',
        gap: 'clamp(1.25rem, 3vw, 2.75rem)',
        padding: 'clamp(1.75rem, 4vw, 2.75rem) 0',
        textDecoration: 'none',
    },
    rowIndex: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        color: 'var(--text-tertiary)',
        letterSpacing: '0.05em',
    },
    rowText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        minWidth: 0,
    },
    rowTopLine: {
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: '0.85rem',
    },
    rowTitle: {
        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
    },
    projectTag: {
        flex: 'none',
    },
    rowDesc: {
        fontSize: '0.95rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        maxWidth: '48ch',
    },
    projectArrow: {
        marginTop: '0.3rem',
        fontSize: '0.85rem',
        color: 'var(--accent-color)',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3em',
    },
    rowImageWrap: {
        position: 'relative',
        width: '100%',
        aspectRatio: '5/4',
        overflow: 'visible',
        justifySelf: 'end',
    },
    projectImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'block',
    },
    projectImageFallback: {
        width: '100%',
        height: '100%',
        background: 'var(--surface-light)',
    },
    ctaSection: {
        marginBottom: '4rem',
    },
    ctaInner: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '3.5rem',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-color)',
        border: '1px solid var(--border)',
        gap: '1rem',
    },
    ctaTitle: {
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
    },
    ctaButton: {
        padding: '14px 34px',
        marginTop: '0.75rem',
    },
};

export default Home;
