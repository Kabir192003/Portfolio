import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project5 = () => (
    <CaseStudyTemplate
        project={projectsData.project5}
        nextProject={{ title: 'StyleBook AI', to: '/projects/6' }}
    />
);

export default Project5;
