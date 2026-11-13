import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 0,
            role: 'Product Design Engineer',
            company: 'Cimelium · ADAPT Research Centre, Trinity College Dublin',
            period: 'Jul 2026 to present',
            context: 'Cimelium is an early-stage AI platform for the art market, funded by Enterprise Ireland with funds managed through Trinity. In a small team I own the design of the brand, site and product, and the product decisions behind its engineering.',
            groups: [
                {
                    label: 'Design',
                    bullets: [
                        'Designed and launched cimelium.com, the marketing site for the platform: page layouts, the pilot partner programme and the "Book a call" conversion flow.',
                        'Audited 30+ art-world and art-tech platforms (auction houses, marketplaces, galleries, museums and software), analysing their colour, typography and UI patterns to define a position between technology and art.',
                        'Developed 11 visual identity directions and moodboards that drove stakeholder decisions on brand tone, imagery and colour.',
                        'Built the core design system: Merriweather and DM Sans, a white base with tinted surfaces, a single brick accent, inverted cards, WCAG-compliant contrast and 4px/8px corner standards.',
                        'Designed platform UI for the client workspace (inventory, enquiry dashboards, AI-drafted replies, matching suggestions and task automation), iterating quickly on leadership feedback.'
                    ]
                },
                {
                    label: 'Product engineering',
                    bullets: [
                        'Owned product decisions across a five-sprint modernisation of the internal app-starter platform, including scope cuts, risk trade-offs and sign-off at every stage gate.',
                        'Directed an AI-agent engineering workflow (Agent SCRUM): several AI agents taking work through planning, development, independent testing and release, with a separate agent verifying each stage before it could proceed.',
                        'Led the design of the module system and generator: how modules declare dependencies, the rules for safe combinations, and a feature that recommends modules from an existing app or a plain-language description.',
                        'Ran a full application rebuild as the proof of concept, held to the original\'s acceptance bar (zero unaccepted differences), and signed off UAT on independently re-verified numbers rather than self-reported ones.',
                        'Set and enforced governance for all five sprints: never merge on a failing check, an independent gate for every stage, exact deletion lists approved before action, and every production change reviewed against its diff and test results.'
                    ]
                },
                {
                    label: 'Data',
                    bullets: [
                        'Built an image pipeline that detects and extracts frames from paintings, with DDColor colourisation and colour correction across the asset set.',
                        'Audited and normalised a large CC0 image dataset for generative AI preprocessing, defining evaluation criteria and catching data-quality issues before model training.'
                    ]
                }
            ]
        },
        {
            id: 1,
            role: 'Project Consultant',
            company: 'AnamVR (via Irish Student Consulting Group), Dublin',
            period: 'Oct 2025 to Dec 2025',
            bullets: [
                "Ran a full UX audit of AnamVR's immersive product suite, synthesising qualitative research into a structured insight report with prioritised design recommendations.",
                'Identified critical usability gaps in the VR onboarding and interaction flows; the recommendations were adopted into the next product roadmap cycle.',
                'Presented findings directly to the founders and senior stakeholders, and delivered the three-month engagement on time.'
            ]
        },
        {
            id: 2,
            role: 'Product Associate',
            company: 'DreamWeavers, Hyderabad',
            period: 'Feb 2025 to Aug 2025',
            bullets: [
                'Led market analysis and customer research for PawFect, a client pet care app, turning findings into product requirements, use cases and specifications.',
                'Defined requirements with engineers from discovery through QA and release, so every rule had an owner and a test.',
                'Analysed user behaviour and product funnels to find and prioritise the highest-impact improvements.',
                'Used LLMs to speed up specification drafting and edge-case analysis, and presented trade-offs to PMs, engineers and senior stakeholders.'
            ]
        },
        {
            id: 3,
            role: 'UI/UX Design Intern',
            company: 'Divine Labs (IIT Delhi)',
            period: 'Mar 2024 to May 2024',
            bullets: [
                'Restructured interaction flows across data-dense dashboards for a Learning Management System and the Unimoni portal, as part of a full LMS redesign.',
                'Ran usability tests with students and professors who used the LMS daily, documented the findings and iterated on the design.',
                'Prototyped and tested alternative directions before engineering handoff, and worked with developers through implementation to keep the design intact.'
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
            <p style={styles.intro}>Product Design Engineer: I design products and own the decisions that get them built. Based in Dublin on a Stamp 1G, so no sponsorship is needed.</p>

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
                            {exp.context && <p style={styles.context}>{exp.context}</p>}
                            {(exp.groups ?? [{ label: null, bullets: exp.bullets }]).map((g) => (
                                <div key={g.label ?? 'main'} style={{ marginBottom: '1.25rem' }}>
                                    {g.label && <h4 style={styles.groupLabel}>{g.label}</h4>}
                                    <ul style={styles.descriptionList} className="timeline-description">
                                        {g.bullets.map((point) => (
                                            <li key={point} style={styles.descriptionItem}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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
        marginBottom: '1rem',
    },
    intro: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        maxWidth: '640px',
        marginBottom: '3.5rem',
    },
    context: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        fontStyle: 'italic',
        marginBottom: '1.25rem',
    },
    groupLabel: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-primary)',
        margin: '0 0 0.5rem',
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
