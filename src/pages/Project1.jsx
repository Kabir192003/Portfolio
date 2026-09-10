import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project1 = () => (
    <CaseStudyTemplate
        project={projectsData.project1}
        nextProject={{ title: 'Work Hive', to: '/projects/2' }}
    />
);

export default Project1;
