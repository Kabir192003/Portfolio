import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 0,
            role: 'Research Assistant, UX/Interaction Designer',
            company: 'ADAPT Research Centre',
            period: 'Jul 2026 - Present',
            bullets: [
                'Built an atomic design system from scratch and used it to design the project website UI, establishing the components and patterns that kept the interface consistent as the project grew.',
                'Developed an AI detection model to identify and extract frames from paintings, integrating the DD Color library for image colourisation and using Affinity for cropping and colour correction across the resulting asset set.',
                'Audited and normalised a large CC0 image dataset for generative AI preprocessing, defining evaluation criteria and catching inconsistencies, edge cases and data-quality issues before they reached model training.',
                'Ran structured testing across extended review cycles, maintaining data catalogues and documented systems, and turning experimental outputs into technically grounded artefacts for researchers, engineers and stakeholders.'
            ]
        },
        {
            id: 1,
            role: 'Project Consultant',
            company: 'AnamVR (via Irish Student Consulting Group), Dublin',
            period: 'Oct 2025 - Dec 2025',
            bullets: [
                "Conducted a full UX audit of AnamVR's immersive product suite, synthesising qualitative research into a structured insight report with prioritised, actionable design recommendations for the product team.",
                'Identified critical usability gaps in the VR onboarding and interaction flows; recommendations were directly adopted into the next product roadmap cycle.',
                'Delivered the engagement on time within a 3-month consulting scope, operating independently in an early-stage startup environment.',
                'Presented findings and recommendations directly to founders and senior stakeholders, translating research into decisions the team could act on immediately.'
            ]
        },
        {
            id: 2,
            role: 'Product Associate',
            company: 'DreamWeavers',
            period: 'Feb 2025 - Aug 2025',
            bullets: [
                'Led market analysis and customer insight research for PawFect, a client pet care app, turning findings into product requirements, use cases and documented specifications.',
                'Defined requirements alongside engineers from discovery through QA and release, cutting feature delivery time by 25%.',
                'Analysed user behaviour and product funnels to identify high-impact opportunities, lifting overall product performance by 15%.',
                'Used LLMs to accelerate specification drafting, edge-case analysis and stakeholder alignment across multiple releases, and presented trade-offs directly to PMs, engineers and senior stakeholders.'
            ]
        },
        {
            id: 3,
            role: 'UI/UX Design Intern',
            company: 'Divine Labs (IIT Delhi)',
            period: 'Mar 2024 - May 2024',
            bullets: [
                'Restructured interaction flows across data-dense dashboards for a Learning Management System and the Unimoni portal, working within the team on a full LMS redesign and reducing usability issues by 25%.',
                'Ran usability testing with students and professors who used the LMS daily, documenting findings and iterating on the design, which improved key performance metrics by 40%.',
                'Prototyped and tested alternative design directions rapidly before engineering handoff, synthesising research findings into actionable product and UX improvements for senior stakeholders.',
                'Worked alongside developers through implementation to keep design intent intact in the shipped product, joining design critiques and handoff reviews.'
            ]
        },
        {
            id: 4,
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
