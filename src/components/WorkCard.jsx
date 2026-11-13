import React from 'react';
import { Link } from 'react-router-dom';

export const WORKS = [
    {
        num: '01', id: 'settld', title: 'Settld', year: '2026', status: 'LIVE', kinds: ['build', 'data', 'research'],
        role: 'Solo · research, design and build',
        tags: ['Open data', 'Routing', 'React'],
        desc: 'Helps students choose where to live in Dublin before they sign a lease: rent, the real journey to college and what is nearby, for 106 areas, with the source of every number shown. Built after surveying 300+ students.',
        img: './settld/settld-mockup.jpg',
    },
    {
        num: '02', id: 6, title: 'StyleBook AI', year: '2026', status: 'LIVE', kinds: ['build', 'research'],
        role: 'Project lead · team of four',
        tags: ['AI product', 'Design systems', 'Figma plugin'],
        desc: 'A written brand brief in, a checked, exportable design system out. Shaped by a survey of 200+ designers, with every AI-proposed colour pair measured and repaired in code.',
        img: './stylebook/sb-mockup.jpg',
    },
    {
        num: '03', id: 'pawfect', title: 'PawFect', year: '2025', status: 'CLIENT WORK', kinds: ['client'],
        role: 'Product Associate · DreamWeavers',
        tags: ['Mobile app', 'Requirements', 'UX'],
        desc: 'A pet care app for a veterinary clinic in Hyderabad: booking, a digital health passport, reminders worked out from the record, and every price shown before you pay.',
        img: './pawfect/pf-mockup.jpg',
    },
    {
        num: '04', id: 2, title: 'Work Hive', year: '2026', status: 'LIVE', kinds: ['build'],
        role: 'Solo · design and full stack',
        tags: ['Web platform', 'Supabase', 'Security'],
        desc: 'A hiring platform where named, job-specific endorsements from real colleagues travel with every application. 18 screens on a real Postgres backend.',
        img: './workhive/wh-mockup.jpg',
    },
    {
        num: '05', id: 1, title: 'Trek Mate', year: '2026', status: 'LIVE', kinds: ['build'],
        role: 'Solo · design and front end',
        tags: ['E-commerce', 'React', 'TypeScript'],
        desc: 'An outdoor gear store designed around the whole pack. A live planner shows your base weight and ranks lighter swaps by what each gram saved costs you.',
        img: './trekmate-v3/tm3-mockup.jpg',
    },
    {
        num: '06', id: 5, title: 'This or That', year: '2026', status: 'LIVE', kinds: ['build', 'research'],
        role: 'Research, redesign and full stack',
        tags: ['Redesign', 'Research', 'Node + Postgres'],
        desc: 'A community decision app, redesigned around one finding: people vote differently once they can see the crowd. Results stay hidden until you vote.',
        img: './tot2/tot-mockup.jpg',
    },
    {
        num: '07', id: 3, title: 'The Hunger Games', year: '2025', status: 'RESEARCH', kinds: ['research', 'data'],
        role: 'Solo UX researcher',
        tags: ['UX research', 'Survey', 'Heuristics'],
        desc: 'Swiggy vs Zomato: a mixed-methods study of two apps solving the same problem in opposite ways, from a heuristic review and a survey of 48 users.',
        img: './hg-mockup.jpg',
    },
    {
        num: '08', id: 'data-viz', title: 'Global Health & Wealth', year: '2026', status: 'PLAYABLE', kinds: ['data'],
        role: 'Design and code · M.Sc. coursework',
        tags: ['Data viz', 'Interactive'],
        desc: 'An interactive bubble chart of 186 countries. Hover any bubble for its data and click the legend to filter regions.',
        img: './msc/data-viz/banner.jpg',
    },
];


export const WorkCard = ({ w, featured }) => (
    <Link to={`/projects/${w.id}`} className={`work-card${featured ? ' work-card-featured' : ''}`} aria-label={`${w.title} case study`}>
        <div className="work-card-media">
            <img src={w.img} alt="" loading={featured ? 'eager' : 'lazy'} />
        </div>
        <div className="work-card-body">
            <div className="work-card-top">
                <span className="work-card-num">{w.num}</span>
                <span className="work-card-status">{w.status}</span>
                <span className="work-card-meta">{w.role} · {w.year}</span>
            </div>
            <h2 className="work-card-title">{w.title}</h2>
            <p className="work-card-desc">{w.desc}</p>
            <div className="work-card-foot">
                <div className="work-card-tags">
                    {w.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <span className="work-card-cta">Case study <span aria-hidden="true">→</span></span>
            </div>
        </div>
    </Link>
);


export default WorkCard;
