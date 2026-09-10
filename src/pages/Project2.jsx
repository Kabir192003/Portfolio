import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project2 = () => (
    <CaseStudyTemplate
        project={projectsData.project2}
        nextProject={{ title: 'The Hunger Games', to: '/projects/3' }}
    />
);

export default Project2;
