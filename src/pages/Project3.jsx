import React from 'react';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { projectsData } from '../data/projectsData';

const Project3 = () => (
    <CaseStudyTemplate
        project={projectsData.project3}
        nextProject={{ title: 'This or That', to: '/projects/5' }}
        decisionsNote="Photography for illustration. Every figure alongside comes from the 48-user survey, not a mockup."
        decisionsHeading="What the research found"
        challengesHeading="Where both apps lose people"
    />
);

export default Project3;
