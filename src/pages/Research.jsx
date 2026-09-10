import React from 'react';
import { motion } from 'framer-motion';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';

const DOMAINS = ['Human-Computer Interaction (HCI)', 'Cognitive Psychology', 'Interactive Digital Media'];

const OBJECTIVES = [
    'Examine how immersive media influences user perception, attention, and emotional engagement.',
    'Evaluate the role of interactivity and sensory design in shaping user experience.',
    'Identify psychological factors such as presence, flow, and embodiment that contribute to immersion.',
    'Propose design principles that enhance engagement, realism, and satisfaction in immersive digital environments.',
];

const SectionHeading = ({ num, children }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.4rem', color: RULE }}>{num}</span>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', textTransform: 'uppercase' }}>{children}</h2>
    </div>
);

const Research = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem) 2rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>Research · IBM Mentorship Program</span>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', textTransform: 'uppercase', lineHeight: 1.02, margin: '0.8rem 0 1.25rem' }}>
                    Immersive Media and User Perception
                </h1>
                <p style={{ fontSize: '1.1rem', color: MUTED, maxWidth: '680px', lineHeight: 1.7 }}>
                    The psychology of interaction, selected for the IBM Mentorship Program: mentorship and exposure to industry practice in technology and innovation. This page tracks the ongoing research.
                </p>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem)', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                <section>
                    <SectionHeading num="01">Overview</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.1rem' }}>
                        This research explores how immersive technologies such as Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) influence user perception, emotional engagement, and interaction. As immersive media becomes increasingly integrated into digital products, understanding the psychological impact of these environments is essential for designing meaningful and intuitive experiences.
                    </p>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                        The study focuses on how factors such as sensory input, interactivity, and cognitive load shape user responses and contribute to a sense of presence within immersive environments.
                    </p>
                </section>

                <section>
                    <SectionHeading num="02">Research motivation</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.1rem' }}>
                        With the rapid advancement of immersive technologies, digital experiences are evolving beyond traditional screens into interactive spatial environments. Designers must understand how users perceive, feel, and behave within these environments.
                    </p>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                        This research aims to bridge the gap between technology, psychology, and user experience design, helping identify design principles that improve engagement, realism, and usability in immersive systems.
                    </p>
                </section>

                <section>
                    <SectionHeading num="03">Research domain</SectionHeading>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>This study sits at the intersection of three disciplines:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                        {DOMAINS.map((d) => (
                            <div key={d} style={{ border: `1px solid ${INK}`, padding: '1rem 1.1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.5 }}>{d}</div>
                        ))}
                    </div>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
                        Insights from these fields help understand how users interpret immersive environments and how design choices influence interaction quality and emotional engagement.
                    </p>
                </section>

                <section>
                    <SectionHeading num="04">Research objectives</SectionHeading>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {OBJECTIVES.map((o, idx) => (
                            <div key={o} style={{ borderTop: `1px solid ${INK}`, padding: '1.5rem 0', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.1rem', color: RULE, flex: 'none' }}>{String(idx + 1).padStart(2, '0')}</span>
                                <p style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>{o}</p>
                            </div>
                        ))}
                        <div style={{ borderTop: `1px solid ${INK}` }} />
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Research;
