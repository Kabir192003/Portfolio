import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'Master of Human-Computer Interaction',
            institution: 'Carnegie Mellon University',
            period: '2016 - 2018',
            description: 'Focus on cognitive science, interaction design, and user-centered research methods.'
        },
        {
            id: 2,
            degree: 'Bachelor of Fine Arts in Graphic Design',
            institution: 'Rhode Island School of Design',
            period: '2012 - 2016',
            description: 'Foundational studies in visual communication, typography, and early web design.'
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
            <h1 style={styles.pageTitle}>Education</h1>

            <div style={styles.timeline}>
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        style={styles.timelineItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div style={styles.periodColumn}>
                            <span style={styles.period}>{edu.period}</span>
                        </div>
                        <div style={styles.contentColumn}>
                            <h2 style={styles.degree}>{edu.degree}</h2>
                            <h3 style={styles.institution}>{edu.institution}</h3>
                            <p style={styles.description}>{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Reusing same styles structure from Experience for consistency
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
        color: 'var(--accent-color)',
        fontFamily: 'monospace',
        padding: '4px 12px',
        background: 'var(--glass-bg)',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--glass-border)',
        display: 'inline-block',
    },
    degree: {
        fontSize: '1.8rem',
        color: 'var(--text-primary)',
        marginBottom: '0.2rem',
    },
    institution: {
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

export default Education;
