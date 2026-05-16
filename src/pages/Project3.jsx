import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Project3 = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    // Hardcoded, rich data for Project 3
    const project = {
        title: 'The Hunger Games',
        category: 'UX Research & Comparative Analysis',
        timeline: '1 Month',
        role: 'UX Researcher & Analyst',
        overview: [
            "Swiggy and Zomato have fundamentally transformed urban food discovery and delivery. Both giants offer nearly identical core services—food delivery, dine-in bookings, and loyalty subscriptions—yet their market positioning and user experiences differ significantly. One prioritizes minimal, frictionless speed; the other emphasizes feature depth and discovery.",
            "This study is a deep-dive UX comparative analysis investigating how these distinct design philosophies influence user behavior, task efficiency, and brand perception. By evaluating the platforms across the entire food-ordering journey, I sought to uncover the subtle UI/UX decisions that drive a user to choose one app over the other in a highly saturated market.",
            "Rather than declaring an absolute 'winner', this research provides actionable intelligence on the trade-offs between cognitive load, feature richness, and user trust."
        ],
        impactMetrics: [
            { label: 'Participants', value: '40+' },
            { label: 'Data Points', value: '800+' },
            { label: 'Key Insights', value: '5' }
        ],
        tools: ['Google Forms', 'FigJam', 'Miro', 'SPSS', 'Notion'],
        problem: "Despite offering comparable services, Swiggy and Zomato adopt vastly different UX approaches regarding navigation architecture, checkout flows, personalization, and post-order support. However, it remained empirically unclear how these differences impacted real-world user satisfaction. The core research question was: Which platform provides a superior end-to-end user experience, and what specific micro-interactions drive that perception?",
        methodology: "I designed a mixed-methods research approach. First, I conducted a heuristic evaluation of both applications. Next, I deployed a structured survey to 40 active users of both platforms, focusing on quantitative satisfaction scores and qualitative pain points. Participants evaluated specific stages: Onboarding, Discovery, Checkout, Delivery Tracking, and Support.",
        process: [
            { step: '01', title: 'Hypothesis Definition', desc: 'Formulated assumptions about speed vs. depth based on initial heuristic reviews.' },
            { step: '02', title: 'Survey Design', desc: 'Crafted a 20-question survey isolating specific user journeys and pain points.' },
            { step: '03', title: 'Data Collection', desc: 'Gathered qualitative and quantitative responses from 40 active urban users.' },
            { step: '04', title: 'Synthesis & Affinity Mapping', desc: 'Used FigJam to cluster feedback and identify recurring behavioral themes.' },
            { step: '05', title: 'Strategic Recommendations', desc: 'Drafted actionable UX improvements for both platforms based on empirical data.' }
        ],
        researchDecisions: [
            {
                title: 'Isolating the Journey',
                reason: 'Instead of asking generic "Which app do you prefer?" questions, I broke the journey into discrete steps (Discovery, Checkout, Support). This prevented brand bias from masking specific UI flaws in individual features.'
            },
            {
                title: 'Mixed-Methods Approach',
                reason: 'Quantitative data told me *what* users preferred (e.g., 70% preferred Swiggy\'s checkout), but qualitative open text fields revealed *why* (e.g., auto-applied coupons reduced cognitive friction).'
            }
        ],
        painPoints: [
            {
                title: 'Promotional Overload (Zomato)',
                description: 'Users reported high cognitive load due to Zomato’s interface being cluttered with advertisements and flashing promotional banners, making initial navigation overwhelming.'
            },
            {
                title: 'Hidden Charges Transparency',
                description: 'A recurring frustration across both platforms was the sudden appearance of unexpected delivery fees or "surge" charges only at the final checkout step, severely damaging trust.'
            },
            {
                title: 'Support Loop Frustration',
                description: 'Users heavily criticized automated chatbot loops when orders were delayed. While Swiggy excelled in ordering efficiency, Zomato was rated slightly higher in human-agent handover responsiveness.'
            }
        ],
        researchInsights: [
            {
                title: 'Simplicity vs. Feature Depth',
                description: 'Users perceived Swiggy as significantly faster to use, largely due to its minimal interface. Zomato introduced higher cognitive load but rewarded users with richer discovery features for dine-in scenarios.'
            },
            {
                title: 'Speed of Task Completion',
                description: 'For food delivery, users prioritize frictionless task completion over exploration. Swiggy’s auto-applied coupons and straightforward checkout won heavily in the "hungry and in a rush" use case.'
            },
            {
                title: 'Trust Through Transparency',
                description: 'Real-time delivery tracking accuracy emerged as a massive trust vector. Users felt Swiggy’s tracking UI was more reliable and transparent regarding delays.'
            }
        ],
        recommendations: {
            swiggy: [
                {
                    title: 'Improve Customer Support Handoff',
                    description: 'Reduce reliance on restrictive chatbot loops during critical delivery failures. Faster access to human agents would drastically improve trust.'
                },
                {
                    title: 'Enhance Loyalty Value Communication',
                    description: 'Clearer onboarding for "Swiggy One" benefits is needed, as many users misunderstood the ROI of the subscription.'
                }
            ],
            zomato: [
                {
                    title: 'Reduce Home Screen Cognitive Load',
                    description: 'Simplify the home architecture. Grouping promotional elements into dedicated zones rather than interspersing them would improve navigation clarity.'
                },
                {
                    title: 'Frictionless Coupon Integration',
                    description: 'Adopt an auto-apply mechanism for the best available discount during checkout to reduce the cognitive effort of manual code searching.'
                }
            ]
        },
        outcomes: [
            "Successfully synthesized 800+ raw data points into 5 core UX principles regarding cognitive load in hyper-local delivery apps.",
            "Demonstrated that 'Speed to Checkout' heavily outweighs 'Discovery Features' when user intent is strictly food delivery.",
            "The study serves as a foundational blueprint for designing high-frequency, transactional mobile applications."
        ],
        reflections: "This study reinforced my belief that beautiful UI is irrelevant if the architecture introduces friction during a high-intent task. If I were to expand this research, I would incorporate direct usability testing (e.g., eye-tracking or task-timing) rather than relying solely on self-reported survey data.",

        heroImage: './food.jpg',
        surveyResponses: [
            './p3survey1.png',
            './p3survey2.png',
            './p3survey3.png',
            './p3survey4.png',
            './p3survey5.png',
            './p3survey6.png',
            './p3survey7.png',
            './p3survey8.png',
            './p3survey9.png',
            './p3survey10.png'
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
                        <p style={styles.metaValue}>Survey Design, Data Synthesis, Heuristic Evaluation, UX Recommendations</p>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Context & Motivation</h2>
                        <div style={styles.featureCard}>
                            {project.overview.map((para, idx) => (
                                <p key={idx} style={{...styles.paragraph, marginBottom: idx !== project.overview.length - 1 ? '1.5rem' : 0}} className="project-paragraph">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Problem & Methodology */}
                    <section style={styles.textSection}>
                        <div style={styles.splitLayout} className="project-split-layout">
                            <div style={styles.splitContentCard}>
                                <h2 style={styles.sectionHeader} className="project-section-header">The Research Problem</h2>
                                <p style={styles.paragraph} className="project-paragraph">{project.problem}</p>
                            </div>
                            <div style={styles.splitContentCard}>
                                <h2 style={styles.sectionHeader} className="project-section-header">Methodology</h2>
                                <p style={styles.paragraph} className="project-paragraph">{project.methodology}</p>
                            </div>
                        </div>
                    </section>

                    {/* My Process */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Research Process</h2>
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
                    
                    {/* Research Design Decisions */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Research Design Choices</h2>
                        <div style={styles.decisionGrid}>
                            {project.researchDecisions.map((decision, idx) => (
                                <article key={idx} style={styles.showcaseCard}>
                                    <h4 style={styles.showcaseTitle}>{decision.title}</h4>
                                    <p style={styles.detailParagraph}>{decision.reason}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Survey Responses Visuals */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Raw Data & Survey Responses</h2>
                        <p style={styles.paragraph}>Quantitative data was gathered across 20 distinct metrics, capturing user sentiment across the entire application lifecycle.</p>
                        <div style={styles.imageGrid} className="project-image-grid">
                            {project.surveyResponses.map((response, idx) => (
                                <div key={idx} style={styles.imagePlaceholder} className="persona-image-holder">
                                    <img
                                        src={response}
                                        alt={`Survey Response ${idx + 1}`}
                                        className="persona-image"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Research Insights */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Core Research Insights</h2>
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

                    {/* Pain Points Discovered */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Critical User Pain Points</h2>
                        <div style={styles.painPointList}>
                            {project.painPoints.map((point) => (
                                <article key={point.title} style={styles.painPointItem}>
                                    <h3 style={styles.subSectionHeader}>{point.title}</h3>
                                    <p style={styles.detailParagraph}>{point.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Recommendations */}
                    <section style={styles.textSection}>
                        <h2 style={styles.sectionHeader} className="project-section-header">Strategic Recommendations</h2>
                        <div style={styles.recommendationGrid}>
                            <article style={styles.recommendationCard}>
                                <h3 style={styles.recommendationHeader}>Recommendations for Swiggy</h3>
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
                                <h3 style={styles.recommendationHeader}>Recommendations for Zomato</h3>
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
                        <h2 style={styles.sectionHeader} className="project-section-header">Outcomes & Reflections</h2>
                        <div style={styles.conclusionCard}>
                            <h3 style={styles.subSectionHeader}>Study Impact</h3>
                            <ul style={styles.outcomeList}>
                                {project.outcomes.map((outcome, idx) => (
                                    <li key={idx} style={styles.detailParagraph}>{outcome}</li>
                                ))}
                            </ul>
                            
                            <h3 style={{...styles.subSectionHeader, marginTop: '1.5rem'}}>Personal Reflections</h3>
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
    insightGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
    },
    insightCard: {
        background: 'rgba(185, 140, 232, 0.05)',
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
        marginBottom: '0.2rem',
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
    recommendationGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
    },
    recommendationCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'linear-gradient(160deg, rgba(185, 140, 232, 0.08) 0%, rgba(20, 17, 38, 0.65) 100%)',
        padding: '2rem',
    },
    recommendationHeader: {
        fontSize: '1.4rem',
        marginBottom: '1.5rem',
    },
    recommendationList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    recommendationItem: {
        paddingBottom: '1.25rem',
        borderBottom: '1px solid rgba(185, 140, 232, 0.18)',
    },
    recommendationTitle: {
        fontSize: '1.15rem',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
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
    }
};

export default Project3;
