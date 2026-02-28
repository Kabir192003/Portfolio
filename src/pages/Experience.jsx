import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Senior UI/UX Designer',
            company: 'TechCorp Solutions',
            period: '2023 - Present',
            description: 'Leading the design system team, reducing time to market for new features by 40%. Spearheaded the redesign of the core enterprise dashboard serving over 50k DAU.'
        },
        {
            id: 2,
            role: 'Product Designer',
            company: 'Innovate.io',
            period: '2020 - 2023',
            description: 'Designed cross-platform mobile experiences for B2C health tech applications. Conducted comprehensive user research, improving user retention by 25%.'
        },
        {
            id: 3,
            role: 'Junior UI Designer',
            company: 'Creative Agency',
            period: '2018 - 2020',
            description: 'Supported the design of immersive e-commerce websites and crafted interactive prototypes for key client pitches.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container section"
        >
            <h1 style={styles.pageTitle}>Work Experience</h1>

            <div style={styles.timeline}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        style={styles.timelineItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div style={styles.periodColumn}>
                            <span style={styles.period}>{exp.period}</span>
                        </div>
                        <div style={styles.contentColumn}>
                            <h2 style={styles.role}>{exp.role}</h2>
                            <h3 style={styles.company}>{exp.company}</h3>
                            <p style={styles.description}>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const styles = {
    pageTitle: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '4rem',
    },
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        position: 'relative',
        paddingLeft: '1rem',
        borderLeft: '1px solid var(--glass-border)',
    },
    timelineItem: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        position: 'relative',
    },
    periodColumn: {
        flex: '1 1 200px',
    },
    contentColumn: {
        flex: '3 1 400px',
    },
    period: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontFamily: 'monospace',
        padding: '4px 12px',
        background: 'var(--glass-bg)',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--glass-border)',
        display: 'inline-block',
    },
    role: {
        fontSize: '1.8rem',
        color: 'var(--text-primary)',
        marginBottom: '0.2rem',
    },
    company: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        fontWeight: '400',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    }
};

export default Experience;
