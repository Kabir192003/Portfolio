import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Project2 = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const project = projectsData.project2;

    return (
        <motion.div
            className="project-detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Parallax Hero */}
            <div style={styles.heroContainer} className="project-hero">
                <motion.div style={{ ...styles.heroBg, y }}>
                    <img src={project.heroImage} alt={`${project.title} Hero`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={styles.heroGradientOverlay} />
                </motion.div>

                <div className="container project-hero-content" style={styles.heroContent}>
                    <Link to="/projects" style={styles.backLink}>← Back to Projects</Link>
                    <span style={styles.category}>{project.category}</span>
                    <h1 style={styles.title}>{project.title}</h1>
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
                        <span style={styles.metaLabel}>Deliverables</span>
                        <p style={styles.metaValue}>UI/UX Design, Interactive Prototypes, Data Visualization, Design System</p>
                    </div>
                </div>

                {/* Tools & Methods */}
                <div style={styles.toolsContainer}>
                    <span style={styles.metaLabel}>Tools & Methods</span>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Overview & Motivation</h2>
                        <div style={styles.featureCard}>
                            {project.overview.map((para, idx) => (
                                <p key={idx} style={{...styles.paragraph, marginBottom: idx !== project.overview.length - 1 ? '1.5rem' : 0}} className="project-paragraph">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Problem & Solution */}
                    <section style={styles.textSection}>
                        <div style={styles.splitLayout} className="project-split-layout">
                            <div style={styles.splitContentCard}>
                                <h2 style={styles.sectionHeader} className="project-section-header">The Problem</h2>
                                <p style={styles.paragraph} className="project-paragraph">{project.problem}</p>
                            </div>
                            <div style={styles.splitContentCard}>
                                <h2 style={styles.sectionHeader} className="project-section-header">The Solution</h2>
                                <p style={styles.paragraph} className="project-paragraph">{project.solution}</p>
                            </div>
                        </div>
                    </section>

                    {/* My Process */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Design Process</h2>
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

                    {/* User Personas */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">User Personas</h2>
                        <p style={styles.paragraph}>We synthesized behavioral patterns into key personas representing both sides of the marketplace: the high-intent candidate seeking transparency, and the overwhelmed recruiter needing signal through the noise.</p>
                        <div style={styles.imageGrid} className="project-image-grid">
                            <div style={styles.imagePlaceholder} className="persona-image-holder">
                                <img src={project.persona1} alt="User Persona 1" className="persona-image" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div style={styles.imagePlaceholder} className="persona-image-holder">
                                <img src={project.persona2} alt="User Persona 2" className="persona-image" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </section>

                    {/* User Journey Map & Wireframes */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">User Journey & Wireframes</h2>
                        <p style={styles.paragraph}>Mapping the multi-touchpoint journey was crucial. The wireframing phase focused entirely on information architecture and establishing a hierarchy for the dense data tables and profiles required for the platform.</p>
                        <div style={styles.largeImagePlaceholder} className="project-large-image journey-image-holder">
                            <img src={project.sitemap} alt="Sitemap" className="journey-image" style={{ width: '100%', height: '100%' }} />
                        </div>
                        
                        <h3 style={{...styles.subSectionHeader, marginTop: '2.5rem'}}>Initial Wireframes</h3>
                        <div style={styles.showcaseGrid}>
                            {project.wireframes.map((wireframe, idx) => (
                                <article key={wireframe.title} style={styles.showcaseCard}>
                                    <div style={styles.wireframePlaceholder} className="project2-wireframe-holder">
                                        <img src={wireframe.image} alt={`Wireframe ${idx + 1}`} className="project2-wireframe-image" />
                                    </div>
                                    <div style={styles.showcaseTextWrap}>
                                        <h4 style={styles.showcaseTitle}>{wireframe.title}</h4>
                                        <p style={styles.wireframeDescription}>{wireframe.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Design Decisions */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Strategic Design Decisions</h2>
                        <div style={styles.decisionGrid}>
                            {project.designDecisions.map((decision, idx) => (
                                <article key={idx} style={styles.showcaseCard}>
                                    <h4 style={styles.showcaseTitle}>{decision.title}</h4>
                                    <p style={styles.detailParagraph}>{decision.reason}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Key Challenges */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Challenges & Solutions</h2>
                        <div style={styles.painPointList}>
                            {project.challenges.map((challenge, idx) => (
                                <article key={idx} style={styles.painPointItem}>
                                    <h3 style={styles.subSectionHeader}>Challenge: {challenge.title}</h3>
                                    <p style={styles.detailParagraph}><strong>Solution:</strong> {challenge.solution}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Final Mockups */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">High-Fidelity Mockups</h2>
                        <p style={styles.paragraph}>The final interface utilizes a modern, clean aesthetic that prioritizes readability above all else. Subtle elevation and shadow systems establish clear depth, helping users naturally distinguish between interactive elements and static data points.</p>
                        <div style={styles.showcaseGrid}>
                            {project.finalMockups.map((mockup, idx) => (
                                <motion.article
                                    key={mockup.title}
                                    style={styles.showcaseCard}
                                    initial={{ opacity: 0, y: 80, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <motion.div
                                        style={styles.wireframePlaceholder}
                                        className="project2-wireframe-holder"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.35 }}
                                    >
                                        <img src={mockup.image} alt={`${project.title} Final Mockup ${idx + 1}`} className="project2-wireframe-image" />
                                    </motion.div>
                                    <div style={styles.showcaseTextWrap}>
                                        <h4 style={styles.showcaseTitle}>{mockup.title}</h4>
                                        <p style={styles.wireframeDescription}>{mockup.description}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    {/* Outcomes & Reflections */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Outcomes & Next Steps</h2>
                        <div style={styles.conclusionCard}>
                            <h3 style={styles.subSectionHeader}>Impact</h3>
                            <ul style={styles.outcomeList}>
                                {project.outcomes.map((outcome, idx) => (
                                    <li key={idx} style={styles.detailParagraph}>{outcome}</li>
                                ))}
                            </ul>
                            
                            <h3 style={{...styles.subSectionHeader, marginTop: '1.5rem'}}>Reflections</h3>
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
        height: '60vh',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        borderBottom: '1px solid var(--glass-border)',
    },
    heroBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '110%',
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
    impactBanner: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        padding: '2.5rem',
        background: 'linear-gradient(160deg, rgba(185, 140, 232, 0.08) 0%, rgba(20, 17, 38, 0.65) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--glass-border)',
        marginBottom: '3rem',
        marginTop: '-2rem', // Pull up slightly
    },
    impactItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
    },
    impactValue: {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '1',
        margin: 0,
    },
    impactLabel: {
        fontSize: '0.95rem',
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
        background: 'rgba(185, 140, 232, 0.06)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        fontSize: '0.9rem',
        color: 'var(--text-primary)',
        transition: 'all 0.3s ease',
    },
    contentSections: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5.25rem',
    },
    textSection: {
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
    },
    sectionHeader: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
    },
    subSectionHeader: {
        fontSize: '1.3rem',
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
    },
    paragraph: {
        fontSize: '1.12rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.85',
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
    detailParagraph: {
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.75',
        textAlign: 'justify',
    },
    featureCard: {
        padding: '2rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'linear-gradient(160deg, rgba(185, 140, 232, 0.09) 0%, rgba(20, 17, 38, 0.72) 100%)',
    },
    splitLayout: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(1.5rem, 4vw, 3rem)',
    },
    splitContentCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.055)',
    },
    processGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
    },
    processCard: {
        background: 'rgba(185, 140, 232, 0.03)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-md)',
        padding: '1.8rem',
        position: 'relative',
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
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        margin: 0,
    },
    decisionGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
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
        background: 'linear-gradient(90deg, rgba(185, 140, 232, 0.06) 0%, transparent 100%)',
    },
    conclusionCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.06)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    outcomeList: {
        margin: 0,
        paddingLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
    },
    showcaseGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.35rem',
        marginTop: '0.85rem',
    },
    showcaseCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.95rem',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.055)',
    },
    showcaseTextWrap: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    showcaseTitle: {
        margin: 0,
        fontSize: '1.1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        lineHeight: '1.35',
    },
    wireframePlaceholder: {
        width: '100%',
        aspectRatio: '16/10',
        backgroundColor: 'var(--surface-color)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    wireframeDescription: {
        margin: 0,
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.72',
        textAlign: 'justify',
        textJustify: 'inter-word',
        padding: '0.15rem 0.15rem 0',
    },
    imagePlaceholder: {
        width: '100%',
        aspectRatio: '4/3',
        backgroundColor: 'var(--surface-color)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        overflow: 'hidden',
    },
    largeImagePlaceholder: {
        width: '100%',
        height: 'clamp(240px, 42vw, 500px)',
        backgroundColor: 'var(--surface-color)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        marginTop: '2rem',
        overflow: 'hidden',
    }
};

export default Project2;
