import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project5 = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    // Rich data for Project 5
    const project = {
        title: 'This or That',
        category: 'Full Stack Web App · Group Project',
        timeline: 'Feb 2026 - May 2026',
        role: 'Full Stack Developer & UI/UX Designer',
        overview: [
            "We make dozens of micro-decisions every day, from choosing what laptop to buy, to deciding what framework to learn next. However, turning to the internet for advice often means sifting through biased articles or enduring toxic forum environments. People need a fast, reliable, and community-driven way to help them make better choices.",
            "‘This or That’ is a full-stack community decision platform built to solve this exact problem. Users can ask questions, pose dilemmas, and let the community vote and comment to guide their choices. By creating a profile and selecting specific topics of interest, users are served a personalized, automatically updating feed of decisions relevant to their expertise.",
            "Developed as a capstone group project at Trinity College Dublin, this application represents a true full-stack endeavor. I took ownership of designing the entire system architecture, the database schemas, the complete UI/UX, and significant portions of both the frontend and backend development. It was an exercise not just in coding, but in effective technical leadership and group collaboration."
        ],
        impactMetrics: [
            { label: 'System Architecture', value: '100%' },
            { label: 'Time to MVP', value: '3 Mos' },
            { label: 'Group Grade', value: 'A+' }
        ],
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
        problem: "Existing Q&A platforms like Quora or Reddit are text-heavy and require significant cognitive effort to parse. When someone just wants to know 'Logitech MX Master vs Apple Magic Mouse', they want a quick consensus. Furthermore, as a group project, our primary challenge was coordinating complex full-stack features—like a personalized feed algorithm and secure anonymous posting—across multiple developers within a strict 3-month academic timeline.",
        solution: "We engineered a robust platform that centers around binary or multi-choice polling mixed with threaded discussions. I designed the database to efficiently handle user preferences, connecting them dynamically to the feed generation algorithm. The UI was crafted to be frictionless—allowing users to vote with a single click and see instant visual feedback via progress bars. To foster honest discussion on sensitive topics, we implemented a secure anonymous posting feature on the backend.",
        process: [
            { step: '01', title: 'Architecture & Database Design', desc: 'Mapped out entity-relationship diagrams and designed scalable NoSQL schemas for users, polls, and preferences.' },
            { step: '02', title: 'UI/UX Prototyping', desc: 'Created high-fidelity Figma mockups, establishing a clean, modern design system to serve as a single source of truth for the team.' },
            { step: '03', title: 'Backend & API Development', desc: 'Developed secure RESTful API endpoints handling authentication, preference matching, and the core voting logic.' },
            { step: '04', title: 'Frontend Implementation', desc: 'Translated the Figma designs into responsive React components, integrating them tightly with our backend services.' },
            { step: '05', title: 'Group Integration & Testing', desc: 'Led regular code reviews and merge sessions to ensure seamless integration of frontend and backend modules developed by different team members.' }
        ],
        designDecisions: [
            {
                title: 'Algorithm-Driven Personalized Feed',
                reason: 'To maximize user engagement, I architected the backend to dynamically filter the global feed based on an array of topic tags selected during user onboarding. This ensured users only saw dilemmas they actually cared about.'
            },
            {
                title: 'Frictionless Voting UI',
                reason: 'The core action of the platform is voting. I designed large, clear touch targets for the options. Upon voting, the UI immediately transitions to show community percentages, providing instant gratification and keeping the user engaged.'
            },
            {
                title: 'Secure Anonymous Interactions',
                reason: 'To encourage questions on sensitive topics (e.g., career or relationship choices), I implemented a backend flag that decouples user IDs from specific posts in the public API response, ensuring true anonymity without losing data integrity.'
            }
        ],
        challenges: [
            {
                title: 'Group Coordination & Version Control',
                solution: 'With multiple developers touching the same full-stack features, merge conflicts were a constant threat. I established a strict Git branching strategy and served as the technical lead during integration, ensuring our database schemas and API contracts remained synchronized.'
            },
            {
                title: 'Complex State Management',
                solution: 'Managing the state of the user’s feed, their profile preferences, and real-time voting updates required careful planning. I implemented centralized state management on the frontend to prevent unnecessary re-renders and ensure the UI always reflected the latest database state.'
            }
        ],
        outcomes: [
            "Successfully delivered a fully functional, deployed full-stack application within the aggressive 3-month Trinity College timeline.",
            "Demonstrated strong technical versatility by successfully bridging the gap between database architecture, backend logic, and frontend UI/UX design.",
            "The project served as a masterclass in collaborative software engineering, proving my ability to communicate technical requirements, divide complex tasks, and unify a team's code into a cohesive product."
        ],
        reflections: "Building 'This or That' reinforced the critical importance of planning architecture and API contracts before writing a single line of code. Because I spent time designing the database and Figma files upfront, our team was able to work in parallel much more effectively. In the future, I would love to implement real-time WebSockets to make the voting experience even more dynamic.",

        heroImage: './tot-hero.png',
        persona1: './p2persona1.png', // Reusing placeholder for now
        persona2: './p2persona2.png', // Reusing placeholder for now
        sitemap: './tot-feed.png',
        wireframes: [
            {
                image: './tot-feed.png',
                title: 'Personalized Feed View',
                description: 'The core dashboard where users browse active dilemmas filtered by their selected preferences.'
            },
            {
                image: './tot-ask.png',
                title: 'Question Creation',
                description: 'A structured, easy-to-use form allowing users to pose dilemmas with clear options and contextual descriptions.'
            },
            {
                image: './tot-profile.png',
                title: 'User Profile & Preferences',
                description: 'The hub for users to track their generated decisions, see their voting impact, and adjust their topic preferences.'
            }
        ],
        finalMockups: [
             {
                image: './tot-hero.png',
                title: 'Voting Interface',
                description: 'The polished UI showcasing clear options, immediate visual feedback via percentage bars, and a threaded comment section for deeper discussion.'
            }
        ]
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
                    <img src={project.heroImage} alt={`${project.title} Hero`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
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
                        <p style={styles.metaValue}>System Architecture, DB Design, API Development, UI/UX Design, Frontend Dev</p>
                    </div>
                </div>

                {/* Tools & Methods */}
                <div style={styles.toolsContainer}>
                    <span style={styles.metaLabel}>Tech Stack & Tools</span>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Project Context & Motivation</h2>
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
                                <h2 style={styles.sectionHeader} className="project-section-header">The Challenge</h2>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Full-Stack Development Process</h2>
                        <p style={styles.paragraph}>As a core architect of this group project, I ensured we followed a structured lifecycle, moving logically from data modeling to final UI implementation.</p>
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

                    {/* Technical & Design Decisions */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Key Architectural & UX Decisions</h2>
                        <div style={styles.decisionGrid}>
                            {project.designDecisions.map((decision, idx) => (
                                <article key={idx} style={styles.showcaseCard}>
                                    <h4 style={styles.showcaseTitle}>{decision.title}</h4>
                                    <p style={styles.detailParagraph}>{decision.reason}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* UI Showcase */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Interface Highlights</h2>
                        <p style={styles.paragraph}>The interface was designed to be clean, inviting, and highly functional, putting the community's choices front and center.</p>
                        
                        <div style={styles.showcaseGrid}>
                            {project.wireframes.map((wireframe, idx) => (
                                <article key={wireframe.title} style={styles.showcaseCard}>
                                    <div style={styles.wireframePlaceholder} className="project2-wireframe-holder">
                                        <img src={wireframe.image} alt={`Interface ${idx + 1}`} className="project2-wireframe-image" />
                                    </div>
                                    <div style={styles.showcaseTextWrap}>
                                        <h4 style={styles.showcaseTitle}>{wireframe.title}</h4>
                                        <p style={styles.wireframeDescription}>{wireframe.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        
                         <div style={{...styles.showcaseGrid, marginTop: '2rem'}}>
                            {project.finalMockups.map((mockup, idx) => (
                                <article key={mockup.title} style={styles.showcaseCard}>
                                    <div style={styles.wireframePlaceholder} className="project2-wireframe-holder">
                                        <img src={mockup.image} alt={`Final Interface ${idx + 1}`} className="project2-wireframe-image" />
                                    </div>
                                    <div style={styles.showcaseTextWrap}>
                                        <h4 style={styles.showcaseTitle}>{mockup.title}</h4>
                                        <p style={styles.wireframeDescription}>{mockup.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Key Challenges */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Technical Challenges & Team Collaboration</h2>
                        <div style={styles.painPointList}>
                            {project.challenges.map((challenge, idx) => (
                                <article key={idx} style={styles.painPointItem}>
                                    <h3 style={styles.subSectionHeader}>Challenge: {challenge.title}</h3>
                                    <p style={styles.detailParagraph}><strong>Solution:</strong> {challenge.solution}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Outcomes & Reflections */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Outcomes & Growth</h2>
                        <div style={styles.conclusionCard}>
                            <h3 style={styles.subSectionHeader}>Project Impact</h3>
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
    project2WireframeImage: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
        objectPosition: 'center top',
    }
};

export default Project5;
