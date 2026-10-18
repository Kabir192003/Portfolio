import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const PawFectLogo = () => (
    <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#0B6B63" />
        <g fill="#FFFFFF">
            <ellipse cx="32" cy="39.5" rx="11" ry="9.5" />
            <ellipse cx="18.5" cy="27.5" rx="5" ry="6.2" />
            <ellipse cx="45.5" cy="27.5" rx="5" ry="6.2" />
            <ellipse cx="26" cy="18" rx="4.6" ry="5.8" />
            <ellipse cx="38" cy="18" rx="4.6" ry="5.8" />
        </g>
        <path d="M27.4 40l3.2 3.2 6.2-6.7" fill="none" stroke="#F2894E" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Project7 = () => (
    <CaseStudyTemplate
        project={projectsData.project7}
        nextProject={{ title: 'Trek Mate', to: '/projects/1' }}
        logo={<PawFectLogo />}
        decisionsNote="Every screen below is a screenshot of the working prototype, running on sample data."
    />
);

export default Project7;
