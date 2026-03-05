import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
    const domains = [
        'Human-Computer Interaction (HCI)',
        'Cognitive Psychology',
        'Interactive Digital Media',
    ];

    const objectives = [
        'Examine how immersive media influences user perception, attention, and emotional engagement.',
        'Evaluate the role of interactivity and sensory design in shaping user experience.',
        'Identify psychological factors such as presence, flow, and embodiment that contribute to immersion.',
        'Propose design principles that enhance engagement, realism, and satisfaction in immersive digital environments.',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container section research-page"
        >
            <section style={styles.heroBlock}>
                <h1 style={styles.pageTitle}>Immersive Media and User Perception: The Psychology of Interaction</h1>
                <div style={styles.highlightPanel}>
                    <p style={styles.highlightText}>
                        Selected for the IBM Mentorship Program, gaining mentorship and exposure to industry practices in technology and innovation.
                    </p>
                    <p style={styles.subHighlightText}>
                        This page showcases my ongoing research project.
                    </p>
                </div>
            </section>

            <section style={styles.topGrid}>
                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Overview</h2>
                    <p style={styles.paragraph}>
                        This research explores how immersive technologies such as Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) influence user perception, emotional engagement, and interaction. As immersive media becomes increasingly integrated into digital products, understanding the psychological impact of these environments is essential for designing meaningful and intuitive experiences.
                    </p>
                    <p style={styles.paragraph}>
                        The study focuses on how factors such as sensory input, interactivity, and cognitive load shape user responses and contribute to a sense of presence within immersive environments.
                    </p>
                </article>

                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Research Motivation</h2>
                    <p style={styles.paragraph}>
                        With the rapid advancement of immersive technologies, digital experiences are evolving beyond traditional screens into interactive spatial environments. Designers must understand how users perceive, feel, and behave within these environments.
                    </p>
                    <p style={styles.paragraph}>
                        This research aims to bridge the gap between technology, psychology, and user experience design, helping identify design principles that improve engagement, realism, and usability in immersive systems.
                    </p>
                </article>
            </section>

            <section style={styles.stackSection}>
                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Research Domain</h2>
                    <p style={styles.paragraph}>
                        This study lies at the intersection of three disciplines:
                    </p>
                    <div style={styles.domainGrid}>
                        {domains.map((domain) => (
                            <div key={domain} style={styles.domainChip}>{domain}</div>
                        ))}
                    </div>
                    <p style={styles.paragraph}>
                        Insights from these fields help understand how users interpret immersive environments and how design choices influence interaction quality and emotional engagement.
                    </p>
                </article>

                <article style={styles.objectiveCard}>
                    <h2 style={styles.sectionTitle}>Research Objectives</h2>
                    <p style={styles.paragraph}>
                        The research focuses on the following objectives:
                    </p>
                    <ul style={styles.objectiveList}>
                        {objectives.map((objective) => (
                            <li key={objective} style={styles.objectiveItem}>{objective}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </motion.div>
    );
};

const styles = {
    heroBlock: {
        marginBottom: '2.5rem',
    },
    pageTitle: {
        fontSize: 'clamp(2.2rem, 5vw, 3.7rem)',
        marginBottom: '1.35rem',
        maxWidth: '1100px',
        lineHeight: '1.12',
    },
    highlightPanel: {
        padding: '1.05rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.28)',
        background: 'linear-gradient(150deg, rgba(185, 140, 232, 0.16) 0%, rgba(20, 17, 38, 0.75) 100%)',
    },
    highlightText: {
        margin: 0,
        fontSize: '1.05rem',
        color: 'var(--text-primary)',
        lineHeight: '1.65',
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
    subHighlightText: {
        margin: '0.65rem 0 0',
        fontSize: '0.98rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    topGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.25rem',
    },
    stackSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    researchCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.06)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
    },
    objectiveCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.35)',
        background: 'linear-gradient(155deg, rgba(185, 140, 232, 0.15) 0%, rgba(20, 17, 38, 0.85) 100%)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
    },
    sectionTitle: {
        margin: 0,
        fontSize: '1.65rem',
        color: 'var(--text-primary)',
    },
    paragraph: {
        margin: 0,
        fontSize: '1.08rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.72',
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
    domainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.8rem',
        margin: '0.2rem 0',
    },
    domainChip: {
        border: '1px solid rgba(185, 140, 232, 0.35)',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(185, 140, 232, 0.09)',
        padding: '0.65rem 0.8rem',
        color: 'var(--text-primary)',
        fontSize: '0.98rem',
        lineHeight: '1.5',
    },
    objectiveList: {
        margin: 0,
        paddingLeft: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.62rem',
    },
    objectiveItem: {
        fontSize: '1.08rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.68',
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
};

export default Research;
