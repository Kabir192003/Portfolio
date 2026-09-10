import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Project3 = () => {
    const project = projectsData.project3;

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
                    <img src={project.heroImage} alt={`${project.title} — research subject`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <div style={styles.heroGradientOverlay} />
                </div>

                <div className="container project-hero-content" style={styles.heroContent}>
                    <Link to="/projects" style={styles.backLink}>← Back to Projects</Link>
                    <span style={styles.category}>{project.category}</span>
                    <h1 style={styles.title}>{project.title}</h1>
                    {project.tagline && <p style={styles.tagline}>{project.tagline}</p>}
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
                        <span style={styles.metaLabel}>Deliverable</span>
                        <p style={styles.metaValue}>Comparative UX research report</p>
                    </div>
                </div>

                {/* Tools & Methods */}
                <div style={styles.toolsContainer}>
                    <span style={styles.metaLabel}>Tools & methods</span>
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

                    {/* Problem & Methodology */}
                    <section style={styles.textSection}>
                        <div style={styles.splitLayout} className="project-split-layout">
                            <div style={styles.splitContentCard}>
                                <h3 style={styles.subSectionHeader}>The research question</h3>
                                <p style={styles.detailParagraph}>{project.problem}</p>
                            </div>
                            <div style={styles.splitContentCard}>
                                <h3 style={styles.subSectionHeader}>Methodology</h3>
                                <p style={styles.detailParagraph}>{project.methodology}</p>
                            </div>
                        </div>
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

                    {/* Research design choices */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Research design choices</h2>
                        <div style={styles.decisionGrid}>
                            {project.researchDecisions.map((decision, idx) => (
                                <article key={idx} style={styles.showcaseCard}>
                                    <h4 style={styles.showcaseTitle}>{decision.title}</h4>
                                    <p style={styles.detailParagraph}>{decision.reason}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Quantitative comparison */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">What the numbers said</h2>
                        <p style={styles.paragraph}>Normalised on a 1–10 scale from the 48-user survey — the comparison the rest of this case study is built on.</p>

                        <div style={styles.chartContainer}>
                            {project.quantData.map((metric) => (
                                <div key={metric.label} style={styles.chartRow}>
                                    <div style={styles.chartLabels}>
                                        <span style={styles.chartMetricTitle}>{metric.label}</span>
                                    </div>
                                    <div style={styles.barGroup}>
                                        {metric.bars.map((bar) => (
                                            <div key={bar.brand} style={styles.barWrapper}>
                                                <span style={styles.barBrandLabel}>{bar.brand}</span>
                                                <div style={styles.barTrack}>
                                                    <div style={{ ...styles.barFill, width: `${bar.value * 10}%`, background: bar.brand === 'Swiggy' ? 'var(--accent-2)' : 'var(--accent-color)' }} />
                                                </div>
                                                <span style={styles.barValue}>{bar.value.toFixed(1)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core insights */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Core insights</h2>
                        <div style={styles.insightGrid}>
                            {project.researchInsights.map((insight, idx) => (
                                <article key={insight.title} style={styles.insightCard}>
                                    <span style={styles.insightIndex}>{`${idx + 1}`.padStart(2, '0')}</span>
                                    <h3 style={styles.subSectionHeader}>{insight.title}</h3>
                                    <p style={styles.detailParagraph}>{insight.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Pain points */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Where both apps lose people</h2>
                        <div style={styles.painPointList}>
                            {project.painPoints.map((point) => (
                                <article key={point.title} style={styles.painPointItem}>
                                    <h3 style={styles.subSectionHeader}>{point.title}</h3>
                                    <p style={styles.detailParagraph}>{point.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Recommendations */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Strategic recommendations</h2>
                        <div style={styles.recommendationGrid}>
                            <article style={styles.recommendationCard}>
                                <h3 style={styles.recommendationHeader}>For Swiggy</h3>
                                <div style={styles.recommendationList}>
                                    {project.recommendations.swiggy.map((item) => (
                                        <div key={item.title} style={styles.recommendationItem}>
                                            <h4 style={styles.recommendationTitle}>{item.title}</h4>
                                            <p style={styles.detailParagraph}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <article style={styles.recommendationCard}>
                                <h3 style={styles.recommendationHeader}>For Zomato</h3>
                                <div style={styles.recommendationList}>
                                    {project.recommendations.zomato.map((item) => (
                                        <div key={item.title} style={styles.recommendationItem}>
                                            <h4 style={styles.recommendationTitle}>{item.title}</h4>
                                            <p style={styles.detailParagraph}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
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
    splitLayout: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(1.5rem, 4vw, 2.5rem)',
    },
    splitContentCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(200, 147, 63, 0.05)',
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
    decisionGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
    },
    showcaseCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        padding: '1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(200, 147, 63, 0.05)',
    },
    showcaseTitle: {
        margin: 0,
        fontSize: '1.15rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    chartContainer: {
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.25rem',
        padding: '2.25rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(200, 147, 63, 0.04)',
    },
    chartRow: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    chartLabels: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    chartMetricTitle: {
        fontSize: '1.05rem',
        fontWeight: '500',
        color: 'var(--text-primary)',
    },
    barGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
    },
    barWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    barBrandLabel: {
        width: '64px',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        flex: 'none',
    },
    barTrack: {
        flex: 1,
        height: '12px',
        background: 'var(--surface-color)',
        borderRadius: '99px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
    },
    barFill: {
        height: '100%',
        borderRadius: '99px',
        transition: 'width 1s ease-out',
    },
    barValue: {
        width: '28px',
        fontSize: '0.88rem',
        color: 'var(--text-primary)',
        fontWeight: '600',
        textAlign: 'right',
        flex: 'none',
    },
    insightGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
    },
    insightCard: {
        background: 'rgba(200, 147, 63, 0.05)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-md)',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    insightIndex: {
        width: 'fit-content',
        fontSize: '0.85rem',
        fontWeight: '600',
        letterSpacing: '0.1em',
        color: 'var(--accent-color)',
        padding: '0.35rem 0.65rem',
        border: '1px solid var(--glass-border)',
        borderRadius: '999px',
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
    recommendationGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
    },
    recommendationCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'linear-gradient(160deg, rgba(179, 121, 42, 0.1) 0%, rgba(255, 253, 248, 0.92) 100%)',
        padding: '2rem',
    },
    recommendationHeader: {
        fontSize: '1.3rem',
        marginBottom: '1.25rem',
    },
    recommendationList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    recommendationItem: {
        paddingBottom: '1.1rem',
        borderBottom: '1px solid var(--glass-border)',
    },
    recommendationTitle: {
        fontSize: '1.1rem',
        marginBottom: '0.4rem',
        color: 'var(--text-primary)',
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
};

export default Project3;
