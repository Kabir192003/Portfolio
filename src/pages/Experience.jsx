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
            id: 0,
            role: 'Research Assistant, UX/Interaction Designer',
            company: 'ADAPT Research Centre, Trinity College Dublin',
            period: 'Jul 2026 - Present',
            description: 'Working inside a university research centre alongside researchers and engineers on pilot projects, turning research goals into concrete, documented outputs rather than open-ended exploration. Reviewed and audited a large set of CC0 images against defined criteria for generative AI dataset pre-processing, flagging inconsistencies and edge cases back to the team. Ran structured testing on outputs and kept detailed records across long review cycles, and helped maintain a documented system used across the team\'s workflows as requirements evolved.'
        },
        {
            id: 1,
            role: 'Product Associate',
            company: 'DreamWeavers',
            period: 'Feb 2025 - Aug 2025',
            description: 'Defined product requirements and use cases from day one alongside engineers, staying involved through QA and release rather than handing off a spec and moving on — a big part of why feature delivery time dropped 25%. Dug into user behaviour and product data myself to find what was actually worth building next, which fed into a 15% lift in overall product performance. Pressure-tested ideas with research and structured analysis before any build work started, and presented the rationale and trade-offs directly to PMs and engineers in sprint reviews rather than leaving it in a doc nobody read.'
        },
        {
            id: 2,
            role: 'UI/UX Design Intern',
            company: 'Divine Labs (IIT Delhi)',
            period: 'Mar 2024 - May 2024',
            description: 'Restructured interaction flows in data-dense dashboards after closely reviewing how people actually used them, then stayed involved through the build so the shipped product matched the intended design — that follow-through was a big part of the 25% drop in usability issues, not just the redesign itself. Ran usability tests to validate design directions before engineering handoff, documenting what I found in enough detail to actually act on it, which improved key performance metrics by 40%. Presented findings straight to senior stakeholders through sketches, flows and interactive prototypes rather than a slide deck of screenshots.'
        },
        {
            id: 3,
            role: 'Visual Storytelling & Composition Foundation',
            company: '',
            period: '',
            description: 'Directed and executed visual narratives through photography and video editing. Developed a strong foundation in visual hierarchy, composition, and color theory - skills that directly inform my approach to UI design and spatial layout. Managed end-to-end creative projects, ensuring alignment between visual assets and core storytelling objectives.'
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
