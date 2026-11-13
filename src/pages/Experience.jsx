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
                        'Audited 30+ art-world and art-tech platforms (auction houses, marketplaces, galleries, museums and software) on colour, typography and UI patterns, then developed 11 visual identity directions and moodboards that drove stakeholder decisions on brand tone, imagery and colour.',
                        'Built the core design system: Merriweather and DM Sans, a white base with tinted surfaces, a single brick accent, inverted cards, WCAG-compliant contrast and 4px/8px corner standards.',
                        'Designed platform UI for the client workspace (inventory, enquiry dashboards, AI-drafted replies, matching suggestions and task automation), iterating quickly on leadership feedback.'
                    ]
                },
                {
                    label: 'Product engineering',
                    bullets: [
                        'Owned product decisions across a five-sprint modernisation of the internal app-starter platform, including scope cuts, risk trade-offs and sign-off at every stage gate, working alongside fellow developers and reporting to the manager for his input.',
                        'Directed an AI-agent engineering workflow (Agent SCRUM): several AI agents taking work through planning, development, independent testing and release, with a separate agent verifying each stage before it could proceed.',
                        'Led the design of the module system and generator: how modules declare dependencies, the rules for safe combinations, and a feature that recommends modules from an existing app or a plain-language description.',
                        'Ran a full application rebuild as the proof of concept, held to the original\'s acceptance bar (zero unaccepted differences), and signed off UAT on independently re-verified numbers rather than self-reported ones.',
                        'Set and enforced governance for all five sprints: never merge on a failing check, an independent gate for every stage, exact deletion lists approved before action, and every production change reviewed against its diff and test results.'
                    ]
                },
                {
                    label: 'Data',
                    bullets: [
                        'Built a Python (OpenCV, NumPy) pipeline that detects and crops artwork from about 3,700 museum photographs, reviewing the outputs and recording the cases that needed manual attention.'
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
                'Defined requirements and use cases alongside engineers, documented decisions and stayed involved through QA and release, cutting feature delivery time by 25%.',
                'Analysed user behaviour and product data, including Google Analytics 4 funnel tracking, into recommendations that contributed to a 15% lift in product performance.',
                'Handled SEO for the PawFect product and designed WCAG-aligned interfaces.',
                'Used structured analysis to pressure-test ideas and align stakeholders before any build work began, reducing ambiguity across multiple releases.'
            ]
        },
        {
            id: 3,
            role: 'UI/UX Design Intern',
            company: 'Divine Labs (IIT Delhi)',
            period: 'Mar 2024 to May 2024',
            bullets: [
                'Collected and surveyed user data and ran usability tests with the students and professors who used the LMS daily, documenting findings and iterating on feedback, which improved key metrics by 40%.',
                'Restructured interaction flows in data-dense dashboards for the LMS and the Unimoni portal after a systematic review of user behaviour, reducing usability issues by 25%.',
                'Designed WCAG-aligned interfaces with Google Material Design, used Playwright for automated UI tests and Jira to track work.'
            ]
        }
    ];

    const achievements = [
        { title: 'Speaker, official Claude Code event, Dublin', when: 'May 2026', desc: 'Explained practical uses of Claude Code to a room of around 100 people at an event hosted by Claude Code\'s ambassador.' },
        { title: 'Runner-up, Bower School AI Hackathon, T-Hub Hyderabad (100+ teams)', when: 'Sep 2024', desc: 'Built DAYA, a RAG-powered behavioural support platform for caregivers (Next.js, TypeScript, Claude API, pgvector).' },
        { title: 'Second runner-up, Microsoft InnoQuest Hackathon (80+ teams)', when: 'Jun 2024', desc: 'Built an AI-driven campus venue booking platform that automated scheduling and approvals.' },
        { title: 'Team lead, Data Dynamo Hackathon (Qlik Sense)', when: '', desc: 'Led the analysis and dashboards that found products priced above $75 were over-discounted, estimating close to $1M of recoverable profit.' },
    ];
    const certifications = ['Scrum Fundamentals Certified (SFC), SCRUMstudy', 'AWS Certified Cloud Practitioner', 'Google UX Design Professional Certificate'];

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

            <h2 style={styles.sectionTitle}>Achievements</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {achievements.map((a) => (
                    <div key={a.title} style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>{a.title}</h3>
                            {a.when && <span style={{ ...styles.period, fontSize: '0.8rem' }}>{a.when}</span>}
                        </div>
                        <p style={{ ...styles.descriptionItem, marginTop: '0.4rem' }}>{a.desc}</p>
                    </div>
                ))}
            </div>

            <h2 style={styles.sectionTitle}>Certifications</h2>
            <ul style={styles.descriptionList}>
                {certifications.map((c) => <li key={c} style={styles.descriptionItem}>{c}</li>)}
            </ul>

            <a href="./Kabir_Sharma_CV.pdf" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '3rem', border: '1px solid var(--text-primary)', padding: '0.9rem 1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>Download the full CV (PDF) ↓</a>
        </motion.div>
    );
};

const styles = {
    pageTitle: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '1rem',
    },
    sectionTitle: {
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        margin: '5rem 0 1.5rem',
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
