import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const toBulletPoints = (description) =>
        description
            .split('.')
            .map((item) => item.trim())
            .filter(Boolean)
            .map((item) => `${item}.`);

    const experiences = [
        {
            id: 1,
            role: 'Junior Product Associate',
            company: 'Dream Weavers',
            period: 'Feb 2025 - Aug 2025',
            description: 'Led cross-functional implementation of design & operations, transforming product needs into operational plans and enhancing delivery schedule by 25%. Collaborated with cross-functional stakeholders to align business objectives with execution strategies. Analysed product milestones and operational data to identify trends and bottlenecks, enabling data- driven prioritization and improving overall product performance by 15%.'
        },
        {
            id: 2,
            role: 'UI/UX Intern',
            company: 'Divine Labs',
            period: 'Mar 2024 - May 2024',
            description: 'Designed dashboards and LMS interfaces with attention to the hierarchy of information, accessibility, and logical navigation to improve clarity, decrease cognitive load, and enhance task efficiency. Refined requirements into user flows and prototypes and worked with stakeholders to reconcile business requirements with user requirements and tested solutions early in development, which led to a 25% decrease in usability problems. Utilised testing insights and analytics to prioritise high-impact improvements, enhancing overall product performance by 40%.'
        },
        {
            id: 3,
            role: 'Photography & Video Editing',
            company: 'Self-Employed',
            period: '2020 - Present',
            description: 'Explored photography and video editing as a personal creative pursuit, focusing on visual storytelling, composition, and editing techniques.'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container section experience-page"
        >
            <h1 style={styles.pageTitle}>Work Experience</h1>

            <div style={styles.timeline} className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        style={styles.timelineItem}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <div style={styles.periodColumn} className="period-column">
                            <span style={styles.period}>{exp.period}</span>
                        </div>
                        <div style={styles.contentColumn} className="content-column">
                            <h2 style={styles.role} className="role-heading">{exp.role}</h2>
                            <h3 style={styles.company}>{exp.company}</h3>
                            <ul style={styles.descriptionList} className="timeline-description">
                                {toBulletPoints(exp.description).map((point) => (
                                    <li key={point} style={styles.descriptionItem}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
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
    descriptionList: {
        margin: 0,
        paddingLeft: '1.15rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.55rem',
    },
    descriptionItem: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
};

export default Experience;
