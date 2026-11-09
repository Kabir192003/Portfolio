import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const SettldLogo = () => (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#0B5345" />
        <rect x="8" y="8" width="48" height="48" rx="11" fill="#F5B83D" />
        <path d="M18 34 Q24 22 32 32 Q40 42 46 28" fill="none" stroke="#0B5345" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Project8 = () => (
    <CaseStudyTemplate
        project={projectsData.project8}
        nextProject={{ title: 'StyleBook AI', to: '/projects/6' }}
        logo={<SettldLogo />}
        decisionsNote="Every screen below is a screenshot of the live, deployed product, not a mockup."
    />
);

export default Project8;
