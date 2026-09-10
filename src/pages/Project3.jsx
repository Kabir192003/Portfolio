import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project3 = () => (
    <CaseStudyTemplate
        project={projectsData.project3}
        nextProject={{ title: 'This or That', to: '/projects/5' }}
        decisionsNote="Photography for illustration — every figure alongside is from the 48-user survey, not a mockup."
        challengesHeading="Where both apps lose people"
    />
);

export default Project3;
