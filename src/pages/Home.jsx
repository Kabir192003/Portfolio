import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScopeMark from '../components/ScopeMark';

const FALLBACK_IMAGE = './sample.jpg';

const SKILLS = [
    'Product Design', 'UX Research', 'Interaction Design', 'Design Systems',
    'Prototyping', 'Front-end Fluency', 'Motion Design', 'Brand Identity',
];

const TICKER_ITEMS = [
    'Product Design', 'Available for work', 'Interaction Design', 'Dublin ↔ Hyderabad',
    'Design Systems', 'Currently at Trinity College Dublin', 'Motion Design', 'Front-end fluent',
];

const STATS = [
    { value: '5', label: 'Case studies' },
    { value: '1', label: 'Live, shippable product' },
    { value: '2', label: 'Countries called home' },
];

const FEATURED = [
    {
        to: '/projects/2',
        img: './workhive/hero.jpg',
        title: 'Work Hive',
        tag: 'Web Platform',
        desc: 'Inherited a high-fidelity prototype where almost nothing worked. Rebuilt it into a live, clickable product — endorsements, search, an editable profile, all of it.',
    },
    {
        to: '/projects/3',
        img: './hgx2.jpg',
        title: 'The Hunger Games',
        tag: 'UX Research',
        desc: 'A data-driven comparison of two food-delivery giants across the journeys that actually decide which one wins.',
    },
    {
        to: '/projects/5',
        img: './tot-hero.png',
        title: 'This or That',
        tag: 'Full-Stack Platform',
        desc: 'A community decision platform with personalised feeds — built, not just designed.',
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
            style={styles.projectImg}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
        />
    );
};

const ProjectCard = ({ to, img, title, tag, desc, index }) => (
    <Reveal delay={index * 0.08} style={styles.cardWrap}>
        <Link to={to} style={{ textDecoration: 'none', display: 'block' }} className="home-project-card">
            <div style={styles.projectCard}>
                <div style={styles.projectImageWrap}>
                    <CardImage src={img} alt={title} />
                </div>
                <div style={styles.projectInfo}>
                    <div style={styles.projectTopRow}>
                        <h3 style={styles.projectTitle}>{title}</h3>
                        <span className="eyebrow" style={styles.projectTag}>{tag}</span>
                    </div>
                    <p style={styles.projectDesc}>{desc}</p>
                    <span style={styles.projectArrow}>View case study →</span>
                </div>
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
                <ScopeMark size={620} style={styles.scopeMark} className="home-scope-mark" />
                <div className="container">
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

                    <div style={styles.projectGrid} className="home-project-grid">
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
    scopeMark: {
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
        opacity: 0.9,
        zIndex: 1,
    },
    heroContent: {
        maxWidth: '760px',
        position: 'relative',
        zIndex: 2,
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
    projectGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
    },
    cardWrap: {
        height: '100%',
    },
    projectCard: {
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--surface-color)',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
    },
    projectImageWrap: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16/10',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
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
    projectInfo: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        flex: 1,
    },
    projectTopRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
    },
    projectTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
    },
    projectTag: {
        flex: 'none',
    },
    projectDesc: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        flex: 1,
    },
    projectArrow: {
        marginTop: '0.25rem',
        fontSize: '0.85rem',
        color: 'var(--accent-color)',
        fontWeight: 500,
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
