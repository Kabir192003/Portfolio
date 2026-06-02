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
                <h1 style={styles.pageTitle}>StyleBook AI : AI-Powered Design Materials Platform</h1>
                <div style={styles.highlightPanel}>
                    <p style={styles.highlightText}>
                        <strong style={{ color: '#e040fb' }}>In Development (2026)</strong> : A design platform I conceived and am leading the development of, built with a team of four.
                    </p>
                    <p style={styles.subHighlightText}>
                        StyleBook solves a problem every designer knows well: the time lost bouncing between different tools just to assemble a visual identity from scratch. One tab for colours, another for fonts, another for type sizing. StyleBook collapses all of that into a single, intelligent workspace.
                    </p>
                </div>
            </section>

            <section style={styles.topGrid}>
                <article style={styles.objectiveCard}>
                    <h2 style={styles.sectionTitle}>The Core Differentiator</h2>
                    <p style={styles.paragraph}>
                        Typically, designers have to scour various websites and platforms for colour palettes, font pairings, and design inspiration. <strong style={{color: '#d4b7ff'}}>StyleBook AI is a one-stop solution for all of this.</strong>
                    </p>
                    <p style={styles.paragraph}>
                        It unifies a curated browse library (featuring 500+ colours, 200+ fonts, and 50+ hand-crafted themes) with a side-by-side colour comparison tool, allowing designers to see exactly how colours sit together before committing.
                    </p>
                </article>

                <article style={{ ...styles.objectiveCard, border: '1px solid rgba(224, 64, 251, 0.45)' }}>
                    <h2 style={{ ...styles.sectionTitle, color: '#e040fb' }}>AI-Driven Design Intelligence</h2>
                    <p style={styles.paragraph}>
                        Our standout feature is the AI integration. You simply describe your brand in plain language, and the AI mode generates a complete visual identity tailored to your prompt.
                    </p>
                    <p style={styles.paragraph}>
                        It provides you with curated font pairings and colour suggestions complete with exact <strong style={{color: '#fff'}}>HEX codes</strong>. Most importantly, it gives you the <strong style={{color: '#fff'}}>written reasoning</strong> behind every single design choice it makes, empowering you to understand the "why" behind the output.
                    </p>
                </article>
            </section>

            <section style={styles.stackSection}>
                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>My Role : Technical Lead & AI</h2>
                    <p style={styles.paragraph}>
                        Responsible for the overall product architecture, the Claude API integration powering the advanced AI mode, and the UX research informing our product direction. StyleBook is my brainchild, guiding it from the original concept through to the critical design and engineering decisions.
                    </p>
                    
                    <h3 style={{ ...styles.sectionTitle, fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>The Team</h3>
                    <div style={styles.domainGrid}>
                        {team.map((member) => (
                            <div key={member} style={styles.domainChip}>{member}</div>
                        ))}
                    </div>
                </article>

                <article style={styles.researchCard}>
                    <h2 style={styles.sectionTitle}>Tech Stack</h2>
                    <p style={styles.paragraph}>
                        Built on a modern, scalable foundation:
                    </p>
                    <div style={styles.domainGrid}>
                        {stack.map((tech) => (
                            <div key={tech} style={{...styles.domainChip, background: 'rgba(224, 64, 251, 0.08)'}}>{tech}</div>
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
        letterSpacing: '-0.02em',
    },
    highlightPanel: {
        padding: '1.5rem 1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.35)',
        background: 'linear-gradient(150deg, rgba(185, 140, 232, 0.16) 0%, rgba(20, 17, 38, 0.75) 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    },
    highlightText: {
        margin: 0,
        fontSize: '1.2rem',
        color: 'var(--text-primary)',
        lineHeight: '1.65',
    },
    subHighlightText: {
        margin: '1rem 0 0',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.65',
    },
    topGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem',
    },
    stackSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
    },
    researchCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(185, 140, 232, 0.04)',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    objectiveCard: {
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(185, 140, 232, 0.35)',
        background: 'linear-gradient(155deg, rgba(185, 140, 232, 0.12) 0%, rgba(20, 17, 38, 0.85) 100%)',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
    sectionTitle: {
        margin: 0,
        fontSize: '1.75rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.01em',
    },
    paragraph: {
        margin: 0,
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.75',
    },
    domainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '0.8rem',
        margin: '0.5rem 0',
    },
    domainChip: {
        border: '1px solid rgba(185, 140, 232, 0.45)',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(185, 140, 232, 0.12)',
        padding: '0.75rem 1rem',
        color: 'var(--text-primary)',
        fontSize: '0.98rem',
        lineHeight: '1.5',
        textAlign: 'center',
        fontWeight: '500',
        backdropFilter: 'blur(10px)',
    },
};

export default CurrentlyWorkingOn;
