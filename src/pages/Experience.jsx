import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 0,
            role: 'UX/Interaction Designer',
            company: 'ADAPT Research Centre',
            period: 'Jul 2026 - Present',
            bullets: [
                'Worked alongside researchers and engineers on pilot projects, translating research objectives into structured workflows and documented outputs.',
                'Evaluated and audited large image datasets for generative AI preprocessing, identifying inconsistencies, edge cases and data-quality issues.',
                'Ran structured testing across extended review cycles, documenting findings and helping maintain systems used across project workflows.',
                'Explored emerging AI workflows and translated experimental outputs into technically grounded artefacts for stakeholder review.'
            ]
        },
        {
            id: 1,
            role: 'Product Associate',
            company: 'DreamWeavers',
            period: 'Feb 2025 - Aug 2025',
            bullets: [
                'Defined product requirements and use cases alongside engineers from discovery through QA and release, contributing to a 25% reduction in feature delivery time.',
                'Analysed user behaviour and product funnels to identify high-impact opportunities, contributing to a 15% improvement in product performance.',
                'Used LLMs to accelerate specification, edge-case analysis and stakeholder alignment across multiple product releases.',
                'Worked directly with PMs, engineers and senior stakeholders to evaluate trade-offs and shape product decisions.'
            ]
        },
        {
            id: 2,
            role: 'UI/UX Design Intern',
            company: 'Divine Labs (IIT Delhi)',
            period: 'Mar 2024 - May 2024',
            bullets: [
                'Restructured interaction flows for data-dense dashboards based on observed user behaviour, contributing to a 25% reduction in usability issues.',
                'Rapidly prototyped and tested alternative design directions, contributing to a 40% improvement in key performance metrics.',
                'Synthesised research findings into actionable product and UX improvements for senior stakeholders.',
                'Worked alongside developers throughout implementation to maintain design intent through to the shipped product.'
            ]
        },
        {
            id: 3,
            role: 'Visual Storytelling & Composition Foundation',
            company: '',
            period: '',
            bullets: [
                'Directed and executed visual narratives through photography and video editing.',
                'Developed a strong foundation in visual hierarchy, composition, and color theory, skills that directly inform my approach to UI design and spatial layout.',
                'Managed end-to-end creative projects, ensuring alignment between visual assets and core storytelling objectives.'
            ]
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
                            {exp.period && <span style={styles.period}>{exp.period}</span>}
                        </div>
                        <div style={styles.contentColumn} className="content-column">
                            <h2 style={styles.role} className="role-heading">{exp.role}</h2>
                            {exp.company && <h3 style={styles.company}>{exp.company}</h3>}
                            <ul style={styles.descriptionList} className="timeline-description">
                                {exp.bullets.map((point) => (
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
