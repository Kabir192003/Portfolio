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
            description: 'Design-focused coursework in user experience, interaction design, web accessibility (WCAG), visual design, interactive storytelling, and prototyping, complemented by full-stack development and immersive technologies.',
            topics: ['User experience', 'Interaction design', 'Web accessibility (WCAG)', 'Visual design', 'Prototyping', 'Interactive storytelling', 'User-centred design', 'Immersive experiences (AR/VR)'],
            capstone: { title: 'StyleBook AI', to: '/projects/6', text: 'A written brand brief in, a checked, exportable design system out. I led a team of four on product direction, UX design and technical implementation, and shipped it with a published Figma plugin.' }
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
                            {edu.topics && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1rem' }}>
                                    {edu.topics.map((t) => <span key={t} style={styles.topic}>{t}</span>)}
                                </div>
                            )}
                            {edu.capstone && (
                                <Link to={edu.capstone.to} style={styles.capstone} className="edu-capstone">
                                    <span style={styles.capLabel}>M.Sc. capstone</span>
                                    <span style={styles.capTitle}>{edu.capstone.title} →</span>
                                    <span style={styles.capText}>{edu.capstone.text}</span>
                                </Link>
                            )}
                            {edu.id === 1 && <Link to="/msc" style={{ display: 'inline-block', marginTop: '1rem', color: 'inherit', textDecoration: 'underline' }}>See my studio work from the course →</Link>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Reusing same styles structure from Experience for consistency
const styles = {
    topic: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem',
        border: '1px solid var(--text-primary)',
        padding: '4px 9px',
    },
    capstone: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
        marginTop: '1.5rem',
        padding: '1.1rem 1.25rem',
        border: '2px solid #2e2bef',
        background: 'rgba(46,43,239,0.05)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        maxWidth: '620px',
    },
    capLabel: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#2e2bef',
    },
    capTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
    },
    capText: {
        fontSize: '1rem',
        lineHeight: 1.55,
        color: 'var(--text-secondary)',
    },
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
