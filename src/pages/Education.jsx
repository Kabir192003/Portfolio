import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'M.Sc. Interactive Digital Media (69%)',
            institution: 'Trinity College Dublin, Ireland',
            period: 'Sep 2025 to Sep 2026',
            description: 'Coursework projects in full-stack development with Java, web design, AR/VR, graphic design, game design, video editing and 3D modelling in Blender.'
        },
        {
            id: 2,
            degree: 'B.Tech Computer Science and Engineering (GPA 8.09/10)',
            institution: 'Anurag University, Hyderabad, India',
            period: 'Oct 2021 to May 2025',
            description: 'Worked in SQL, Python, Java, JavaScript and React. Major project: co-authored a research paper and report on a low-cost solar tracking device.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container section education-page"
        >
            <h1 style={styles.pageTitle}>Education</h1>

            <div style={styles.timeline} className="timeline">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        style={styles.timelineItem}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div style={styles.periodColumn} className="period-column">
                            <span style={styles.period}>{edu.period}</span>
                        </div>
                        <div style={styles.contentColumn} className="content-column">
                            <h2 style={styles.degree} className="role-heading">{edu.degree}</h2>
                            <h3 style={styles.institution}>{edu.institution}</h3>
                            <p style={styles.description} className="timeline-description">{edu.description}</p>
                            {edu.id === 1 && <Link to="/msc" style={{ display: 'inline-block', marginTop: '0.75rem', color: 'inherit', textDecoration: 'underline' }}>See my studio work from the course →</Link>}
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
