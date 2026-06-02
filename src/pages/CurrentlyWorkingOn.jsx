import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyWorkingOn = () => {
    const stack = [
        'Next.js',
        'TypeScript',
        'Claude API',
        'Supabase',
        'Stripe',
        'Framer Motion',
    ];

    const team = [
        'Kabir (Technical Lead + AI)',
        'Amna',
        'Dhanshri',
        'Qi',
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
                <h1 style={styles.pageTitle}>StyleBook AI — AI-Based Design Materials Platform</h1>
                <div style={styles.highlightPanel}>
                    <p style={styles.highlightText}>
                        <strong style={{ color: '#e040fb' }}>In Development (2026)</strong> — A design platform I conceived and am leading the development of, built with a team of four.
                    </p>
                    <p style={styles.subHighlightText}>
                        StyleBook solves a problem every designer knows well: the time lost bouncing between tools just to assemble a visual identity from scratch. One tab for colours, another for fonts, another for type sizing. StyleBook collapses all of that into one place.
                    </p>
                </div>
            </section>

            <section style={styles.topGrid}>
                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Two Core Experiences</h2>
                    <p style={styles.paragraph}>
                        <strong style={{color: '#d4b7ff'}}>A curated browse library</strong> with 500+ colours, 200+ fonts, and 50+ hand-crafted themes — all filterable by mood and style, with a side-by-side colour comparison tool so designers can see exactly how colours sit together before committing.
                    </p>
                    <p style={styles.paragraph}>
                        <strong style={{color: '#d4b7ff'}}>An AI mode</strong> where you describe your brand in plain language and receive a complete visual identity: colour palette, font pairings, and type scale, with written reasoning behind every single choice.
                    </p>
                </article>

                <article style={styles.objectiveCard}>
                    <h2 style={styles.sectionTitle}>The Differentiator</h2>
                    <p style={styles.paragraph}>
                        The differentiator is that reasoning. Most tools give you output. StyleBook tells you why.
                    </p>
                    <p style={styles.paragraph}>
                        StyleBook is my brainchild — from the original concept through to the design and engineering decisions shaping how it gets built.
                    </p>
                </article>
            </section>

            <section style={styles.stackSection}>
                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>My Role</h2>
                    <p style={styles.paragraph}>
                        <strong style={{color: '#d4b7ff'}}>Technical lead and AI integration.</strong> Responsible for the overall product architecture, the Claude API integration powering the AI mode, and UX research informing the product direction.
                    </p>
                    
                    <h3 style={{ ...styles.sectionTitle, fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Team</h3>
                    <div style={styles.domainGrid}>
                        {team.map((member) => (
                            <div key={member} style={styles.domainChip}>{member}</div>
                        ))}
                    </div>
                </article>

                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Tech Stack</h2>
                    <p style={styles.paragraph}>
                        We are utilizing a modern, scalable technology stack:
                    </p>
                    <div style={styles.domainGrid}>
                        {stack.map((tech) => (
                            <div key={tech} style={styles.domainChip}>{tech}</div>
                        ))}
                    </div>
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
        padding: '1.25rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.28)',
        background: 'linear-gradient(150deg, rgba(185, 140, 232, 0.16) 0%, rgba(20, 17, 38, 0.75) 100%)',
    },
    highlightText: {
        margin: 0,
        fontSize: '1.15rem',
        color: 'var(--text-primary)',
        lineHeight: '1.65',
    },
    subHighlightText: {
        margin: '0.85rem 0 0',
        fontSize: '1.05rem',
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
    },
    researchCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.06)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    objectiveCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.35)',
        background: 'linear-gradient(155deg, rgba(185, 140, 232, 0.15) 0%, rgba(20, 17, 38, 0.85) 100%)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
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
    },
    domainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
        textAlign: 'center',
    },
};

export default CurrentlyWorkingOn;
