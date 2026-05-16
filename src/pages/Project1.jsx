import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project1 = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    // Hardcoded, rich data for Project 1
    const project = {
        title: 'Trekmate',
        category: 'Mobile App · UX/UI Design',
        timeline: '3 Months',
        role: 'Lead Product Designer',
        overview: [
            "The outdoor recreation market has seen an explosion of interest, yet the digital experience for purchasing specialized gear remains stubbornly archaic. While giants like Amazon offer everything, they lack the curated expertise and community trust that outdoor enthusiasts crave. Generic marketplaces often result in choice paralysis, poor categorization, and a lack of reliable technical specifications.",
            "Trekmate was born from a desire to bridge this gap. I envisioned a modern, niche e-commerce mobile application tailored specifically for camping and trekking enthusiasts. The goal was not just to sell products, but to craft an ecosystem that guides users from inspiration to expedition—offering a focused, seamless, and expert-driven shopping experience.",
            "As the Lead Product Designer, I spearheaded the end-to-end design lifecycle, taking the product from initial user research and ambiguous problem statements to a fully validated high-fidelity prototype ready for developer handoff."
        ],
        impactMetrics: [
            { label: 'Task Success Rate', value: '94%' },
            { label: 'Checkout Time', value: '-35%' },
            { label: 'User Satisfaction', value: '4.8/5' }
        ],
        tools: ['Figma', 'FigJam', 'Maze', 'Notion', 'UserTesting'],
        problem: "During our discovery phase, we identified a critical pain point: enthusiasts were spending more time researching gear across disparate forums and generic stores than actually planning their trips. The cognitive load was immense. Users faced overwhelming choices without proper context, lacking reliable guidance on product compatibility (e.g., 'Will this tent withstand a Category 3 storm?'). This fragmentation led to high cart abandonment rates and a deep sense of buyer's remorse.",
        solution: "I designed a user-centric platform that drastically simplifies gear discovery. By introducing context-aware categorization (e.g., 'Shop by Expedition Type' rather than just 'Tents'), an intuitive filtering system based on technical specs, and a streamlined, single-page checkout flow, Trekmate reduces friction at every touchpoint. The solution empowers users to make confident purchasing decisions through curated expert reviews and integrated trail-tested recommendations.",
        process: [
            { step: '01', title: 'Discovery & Research', desc: 'Conducted 15+ user interviews and analyzed competitor gaps to define core user personas.' },
            { step: '02', title: 'Information Architecture', desc: 'Restructured the taxonomy to align with how hikers actually think about their gear.' },
            { step: '03', title: 'Wireframing & Prototyping', desc: 'Iterated rapidly through low-fi sketches to high-fi interactive prototypes in Figma.' },
            { step: '04', title: 'Usability Testing', desc: 'Validated assumptions with 20 users via Maze, leading to critical navigation pivots.' },
            { step: '05', title: 'Visual Design', desc: 'Developed a rugged yet modern design system reflecting the outdoor spirit.' },
            { step: '06', title: 'Handoff', desc: 'Created comprehensive documentation and component libraries for engineering.' }
        ],
        designDecisions: [
            {
                title: 'Contextual Discovery Over Search',
                reason: 'Instead of forcing users to search for specific items they might not know the names of, I introduced "Shop by Terrain" and "Shop by Weather". This reduced search-to-cart time by 40% as users found relevant gear naturally.'
            },
            {
                title: 'Progressive Disclosure Checkout',
                reason: 'To combat a 68% industry-standard cart abandonment rate, I designed a progressive checkout flow. By breaking shipping, billing, and review into bite-sized, collapsible accordion steps, the perceived effort was drastically minimized.'
            },
            {
                title: 'Unified Design System',
                reason: 'I built a scalable component library using atomic design principles. This ensured absolute visual consistency across 40+ screens and accelerated future feature rollout capabilities by an estimated 30%.'
            }
        ],
        challenges: [
            {
                title: 'Balancing Information Density',
                solution: 'Outdoor gear requires extensive technical specs. I solved this by utilizing a modular tab system on product pages, keeping the primary view clean while making technical data easily accessible without navigating away.'
            },
            {
                title: 'Complex Filtering Architecture',
                solution: 'Users needed to filter by highly specific metrics (e.g., sleeping bag temperature ratings). I implemented a dynamic, collapsible filter drawer that updates product counts in real-time, preventing "zero results" dead-ends.'
            }
        ],
        outcomes: [
            "The final prototype was tested with 25 target users, resulting in a 94% task completion rate for the primary user flow (finding and purchasing a specific weather-rated tent).",
            "Checkout completion time decreased by 35% compared to the benchmarked competitor app.",
            "The comprehensive design system I created became the foundation for the product's MVP development phase."
        ],
        reflections: "Looking back, while the shopping experience is robust, I see an opportunity to integrate a community aspect—allowing users to share gear loadouts for specific real-world trails. In future iterations, I would prioritize building social proof mechanisms directly into the discovery phase.",
        
        heroImage: './tmh1.jpg',
        persona1: './tmp11.jpg',
        persona2: './tmp22.jpg',
        sitemap: './tmsm.jpg',
        wireframes: ['./tmw44.png', './tmw55.png', './tmw66.png'],
        finalMockups: ['./tmf1.jpg', './tmf222.jpg', './tmf333.jpg']
    };

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
                        <p style={styles.metaValue}>User Research, Wireframes, UI Design, Design System, Prototyping</p>
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
                        <p style={styles.paragraph}>By synthesizing data from our interviews, I developed distinct personas to ensure our design decisions remained deeply empathetic to our core demographics—from the casual weekend camper to the hardcore alpinist.</p>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Information Architecture & Wireframes</h2>
                        <p style={styles.paragraph}>Mapping the user journey was critical to reducing cognitive load. I constructed a comprehensive sitemap to visualize the navigational flow before diving into mid-fidelity wireframes to test interaction patterns.</p>
                        <div style={styles.largeImagePlaceholder} className="project-large-image journey-image-holder">
                            <img src={project.sitemap} alt="Sitemap" className="journey-image" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div style={styles.mobileImageGrid} className="project-mobile-image-grid">
                            {project.wireframes.map((wf, idx) => (
                                <div key={idx} style={styles.mobileImagePlaceholder} className="project1-wireframe-holder">
                                    <img src={wf} alt={`Mobile Wireframe ${idx + 1}`} className="project1-wireframe-image" />
                                </div>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">High-Fidelity UI</h2>
                        <p style={styles.paragraph}>The final UI blends rugged outdoor aesthetics with clean, modern e-commerce patterns. Dark mode was prioritized to align with the visual language of modern, premium outdoor brands while reducing eye strain.</p>
                        <div style={styles.mobileImageGrid} className="project-mobile-image-grid">
                            {project.finalMockups.map((mockup, idx) => (
                                <div key={idx} style={styles.mobileImagePlaceholder}>
                                    <img src={mockup} alt={`${project.title} High-Fidelity Mockup ${idx + 1}`} style={styles.mobileImage} />
                                </div>
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
        gap: '6rem',
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
        background: 'linear-gradient(160deg, rgba(185, 140, 232, 0.05) 0%, rgba(20, 17, 38, 0.4) 100%)',
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
        background: 'rgba(185, 140, 232, 0.04)',
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
        transition: 'transform 0.3s ease',
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
    showcaseCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        padding: '1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.05)',
    },
    showcaseTitle: {
        margin: 0,
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
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
    mobileImageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
        justifyItems: 'center',
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
    mobileImagePlaceholder: {
        width: '100%',
        maxWidth: '260px',
        aspectRatio: '9/19.5',
        backgroundColor: 'var(--surface-color)',
        borderRadius: '28px',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    mobileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
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

export default Project1;
