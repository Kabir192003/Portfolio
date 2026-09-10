import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Project6 = () => {
    const project = projectsData.project6;

    return (
        <motion.div
            className="project-detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero */}
            <div style={styles.heroContainer} className="project-hero">
                <div style={styles.heroBg}>
                    <img src={project.heroImage} alt={`${project.title} — Home screen`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    <div style={styles.heroGradientOverlay} />
                </div>

                <div className="container project-hero-content" style={styles.heroContent}>
                    <Link to="/projects" style={styles.backLink}>← Back to Projects</Link>
                    <span style={styles.category}>{project.category}</span>
                    <h1 style={styles.title}>{project.title}</h1>
                    {project.tagline && <p style={styles.tagline}>{project.tagline}</p>}
                    <div style={styles.heroCtaRow}>
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.ctaPrimary}>
                                View live product ↗
                            </a>
                        )}
                        {project.repoLink && (
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={styles.ctaSecondary}>
                                View source
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="container section">

                {/* Impact Banner */}
                <div style={styles.impactBanner}>
                    {project.impactMetrics.map((metric, idx) => (
                        <div key={idx} style={styles.impactItem}>
                            <h3 style={styles.impactValue} className="text-gradient">{metric.value}</h3>
                            <span style={styles.impactLabel}>{metric.label}</span>
                        </div>
                    ))}
                </div>

                {/* Project Meta Info */}
                <div style={styles.metaGrid} className="project-meta-grid">
                    <div>
                        <span style={styles.metaLabel}>Role</span>
                        <p style={styles.metaValue}>{project.role}</p>
                    </div>
                    <div>
                        <span style={styles.metaLabel}>Timeline</span>
                        <p style={styles.metaValue}>{project.timeline}</p>
                    </div>
                    <div>
                        <span style={styles.metaLabel}>Live product</span>
                        <p style={styles.metaValue}>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>stylebook.site ↗</a>
                        </p>
                    </div>
                </div>

                {/* Tools & Methods */}
                <div style={styles.toolsContainer}>
                    <span style={styles.metaLabel}>Approach</span>
                    <div style={styles.toolsRow}>
                        {project.tools.map((tool) => (
                            <span key={tool} style={styles.toolPill}>{tool}</span>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div style={styles.contentSections} className="project-content-sections">

                    {/* Overview */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">What this is</h2>
                        <div style={styles.featureCard}>
                            {project.overview.map((para, idx) => (
                                <p key={idx} style={{ ...styles.paragraph, marginBottom: idx !== project.overview.length - 1 ? '1.5rem' : 0 }} className="project-paragraph">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Problem */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">The gap in the market</h2>
                        <p style={styles.paragraph} className="project-paragraph">{project.problem}</p>
                    </section>

                    {/* Solution */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">My approach</h2>
                        <p style={styles.paragraph} className="project-paragraph">{project.solution}</p>
                    </section>

                    {/* Process */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Process</h2>
                        <div style={styles.processGrid}>
                            {project.process.map((step, idx) => (
                                <div key={idx} style={styles.processCard}>
                                    <span style={styles.processStepBadge}>{step.step}</span>
                                    <h3 style={styles.processTitle}>{step.title}</h3>
                                    <p style={styles.detailParagraph}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Decisions, each with a real screenshot */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Key decisions</h2>
                        <p style={styles.paragraph}>Every screen below is a screenshot of the live, deployed product — not a mockup.</p>
                        <div style={styles.rationaleGrid}>
                            {project.designDecisions.map((mockup, idx) => (
                                <div key={idx} style={{ ...styles.rationaleRow, flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div style={styles.rationaleImageHolder} className="project2-wireframe-holder">
                                        <img src={mockup.image} alt={mockup.title} className="project2-wireframe-image" />
                                    </div>
                                    <div style={styles.rationaleContent}>
                                        <h3 style={styles.subSectionHeader}>{mockup.title}</h3>
                                        <p style={styles.detailParagraph}>{mockup.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Three things worth calling out</h2>
                        <div style={styles.painPointList}>
                            {project.challenges.map((challenge, idx) => (
                                <article key={idx} style={styles.painPointItem}>
                                    <h3 style={styles.subSectionHeader}>{challenge.title}</h3>
                                    <p style={styles.detailParagraph}>{challenge.solution}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Outcomes & Reflections */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Where it landed</h2>
                        <div style={styles.conclusionCard}>
                            <ul style={styles.outcomeList}>
                                {project.outcomes.map((outcome, idx) => (
                                    <li key={idx} style={styles.detailParagraph}>{outcome}</li>
                                ))}
                            </ul>
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaPrimary, alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                                    Try it yourself ↗
                                </a>
                            )}
                            <h3 style={{ ...styles.subSectionHeader, marginTop: '1.5rem' }}>Reflection</h3>
                            <p style={styles.detailParagraph}>{project.reflections}</p>
                        </div>
                    </section>

                </div>
            </div>
        </motion.div>
    );
};

const styles = {
    heroContainer: {
        position: 'relative',
        height: '58vh',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        borderBottom: '1px solid var(--glass-border)',
    },
    heroBg: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'var(--surface-color)',
        zIndex: -1,
    },
    heroGradientOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 80%)',
    },
    heroContent: {
        position: 'relative',
        zIndex: 1,
        paddingBottom: '3rem',
    },
    backLink: {
        display: 'inline-block',
        marginBottom: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        transition: 'color var(--transition-fast)',
    },
    category: {
        display: 'block',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--accent-color)',
        marginBottom: '0.5rem',
    },
    title: {
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    },
    tagline: {
        fontSize: '1.15rem',
        color: 'var(--text-secondary)',
        maxWidth: '640px',
        marginTop: '0.75rem',
        lineHeight: '1.6',
    },
    heroCtaRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.9rem',
        marginTop: '1.75rem',
    },
    ctaPrimary: {
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--accent-color)',
        color: '#141126',
        fontWeight: '600',
        fontSize: '0.95rem',
    },
    ctaSecondary: {
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-primary)',
        fontWeight: '500',
        fontSize: '0.95rem',
    },
    inlineLink: {
        color: 'var(--accent-color)',
    },
    impactBanner: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        padding: '2.5rem',
        background: 'linear-gradient(160deg, rgba(179, 121, 42, 0.1) 0%, rgba(255, 253, 248, 0.9) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--glass-border)',
        marginBottom: '3rem',
        marginTop: '-2rem',
    },
    impactItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
    },
    impactValue: {
        fontSize: '2.4rem',
        fontWeight: '700',
        lineHeight: '1.1',
        margin: 0,
    },
    impactLabel: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    metaGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid var(--glass-border)',
        marginBottom: '2rem',
    },
    metaLabel: {
        display: 'block',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    metaValue: {
        fontSize: '1.1rem',
        fontWeight: '500',
    },
    toolsContainer: {
        marginBottom: '4rem',
    },
    toolsRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        marginTop: '0.8rem',
    },
    toolPill: {
        padding: '0.4rem 1.2rem',
        background: 'rgba(200, 147, 63, 0.06)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        fontSize: '0.9rem',
        color: 'var(--text-primary)',
    },
    contentSections: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4.5rem',
    },
    textSection: {
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
    },
    sectionHeader: {
        fontSize: '1.85rem',
        marginBottom: '1.25rem',
    },
    subSectionHeader: {
        fontSize: '1.3rem',
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
    },
    detailParagraph: {
        fontSize: '1.03rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.75',
    },
    featureCard: {
        padding: '2rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'linear-gradient(160deg, rgba(179, 121, 42, 0.1) 0%, rgba(255, 253, 248, 0.92) 100%)',
    },
    processGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
    },
    processCard: {
        background: 'rgba(200, 147, 63, 0.03)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-md)',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    processStepBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'var(--glass-bg)',
        border: '1px solid var(--accent-color)',
        color: 'var(--accent-color)',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    processTitle: {
        fontSize: '1.15rem',
        color: 'var(--text-primary)',
        margin: 0,
    },
    painPointList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
    },
    painPointItem: {
        padding: '1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'linear-gradient(90deg, rgba(200, 147, 63, 0.06) 0%, transparent 100%)',
    },
    conclusionCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(200, 147, 63, 0.06)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    outcomeList: {
        margin: 0,
        paddingLeft: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    rationaleGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        marginTop: '2rem',
    },
    rationaleRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.5rem',
        alignItems: 'center',
    },
    rationaleImageHolder: {
        flex: '1 1 480px',
        aspectRatio: '16/10',
        backgroundColor: 'var(--surface-color)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    rationaleContent: {
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
    },
};

export default Project6;
