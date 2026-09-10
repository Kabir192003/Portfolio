import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project6 = () => (
    <CaseStudyTemplate
        project={projectsData.project6}
        nextProject={{ title: 'Trek Mate', to: '/projects/1' }}
    />
);

export default Project6;
