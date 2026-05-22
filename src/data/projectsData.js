export const projectsData = {
    project1: {
        title: 'Trekmate',
        category: 'Mobile App · UX/UI Design',
        timeline: '3 Months',
        role: 'Product/UX Designer',
        overview: [
            "As a designer who loves the outdoors, it always frustrated me how archaic it is to buy specialized gear online. You either get lost in generic giants like Amazon—which lack curation and trust—or you suffer through clunky, outdated niche forums. The result is always the same: choice paralysis and a lack of reliable technical specs.",
            "I wanted to design something better. Trekmate was born from a desire to bridge this gap. I envisioned a modern e-commerce mobile application tailored specifically for camping and trekking enthusiasts. My goal was simple: craft an ecosystem that guides users from inspiration to expedition without the headache.",
            "As the Product Designer, I drove the end-to-end design lifecycle. I took the product from messy, initial user research and ambiguous problem statements all the way to a fully validated, high-fidelity prototype ready for developer handoff."
        ],
        impactMetrics: [
            { label: 'Task Success Rate', value: '94%' },
            { label: 'Task Time (n=45)', value: '-35%' },
            { label: 'User Satisfaction', value: '4.8/5' }
        ],
        tools: ['Figma', 'FigJam', 'Maze', 'Notion', 'UserTesting'],
        problem: "During our discovery phase, we identified a critical pain point: enthusiasts were spending more time researching gear across disparate forums and generic stores than actually planning their trips. The cognitive load was immense. Users faced overwhelming choices without proper context, lacking reliable guidance on product compatibility (e.g., 'Will this tent withstand a Category 3 storm?'). This fragmentation led to high cart abandonment rates and a deep sense of buyer's remorse.",
        solution: "I designed a user-centric platform that drastically simplifies gear discovery. By introducing context-aware categorization (e.g., 'Shop by Expedition Type' rather than just 'Tents'), an intuitive filtering system based on technical specs, and a streamlined, single-page checkout flow, Trekmate reduces friction at every touchpoint. The solution empowers users to make confident purchasing decisions through curated expert reviews and integrated trail-tested recommendations.",
        process: [
            { step: '01', title: 'Discovery & Research', desc: 'Conducted user interviews with 24 outdoor enthusiasts and analyzed competitor gaps to define core user personas.' },
            { step: '02', title: 'Information Architecture', desc: 'Restructured the taxonomy to align with how hikers actually think about their gear.' },
            { step: '03', title: 'Wireframing & Prototyping', desc: 'Iterated rapidly through low-fi sketches to high-fi interactive prototypes in Figma.' },
            { step: '04', title: 'Usability Testing', desc: 'Validated assumptions with 45 users via Maze, leading to critical navigation pivots.' },
            { step: '05', title: 'Visual Design', desc: 'Developed a rugged yet modern design system reflecting the outdoor spirit.' },
            { step: '06', title: 'Handoff', desc: 'Created comprehensive documentation and component libraries for engineering.' }
        ],
        designDecisions: [
            {
                title: 'Contextual Discovery Over Search',
                reason: 'Instead of forcing users to search for specific items they might not know the names of, I introduced "Shop by Terrain" and "Shop by Weather". This reduced search-to-cart time by 40% in our prototype testing as users found relevant gear naturally.'
            },
            {
                title: 'Progressive Disclosure Checkout',
                reason: 'To combat the notoriously high cart abandonment rates typical of complex e-commerce flows, I designed a progressive checkout flow. By breaking shipping, billing, and review into bite-sized, collapsible accordion steps, the perceived effort was drastically minimized.'
            },
            {
                title: 'Unified Design System',
                reason: 'I built a scalable component library using atomic design principles. This ensured absolute visual consistency across 40+ screens and accelerated future feature rollout capabilities.'
            }
        ],
        challenges: [
            {
                title: 'Balancing Information Density',
                solution: 'Outdoor gear requires extensive technical specs. I solved this by utilizing a modular tab system on product pages, keeping the primary view clean while making technical data easily accessible without navigating away.'
            },
            {
                title: 'Complex Filtering Architecture',
                solution: 'Users needed to filter by highly specific metrics (e.g., sleeping bag temperature ratings). I implemented a dynamic, collapsible filter drawer that updates product counts in real-time, preventing "zero results" dead-ends.'
            }
        ],
        outcomes: [
            "Methodology Note: The impact metrics were derived from moderated usability testing of our high-fidelity Figma prototype with 45 outdoor enthusiasts, conducted via Maze.",
            "The final prototype resulted in a 94% task completion rate for the primary user flow (finding and purchasing a specific weather-rated tent).",
            "Checkout completion time decreased by 35% compared to the benchmarked competitor app during these usability trials.",
            "The comprehensive design system I created became the foundation for the product's MVP development phase."
        ],
        reflections: "Looking back, while the shopping experience is robust, I see an opportunity to integrate a community aspect - allowing users to share gear loadouts for specific real-world trails. In future iterations, I would prioritize building social proof mechanisms directly into the discovery phase.",
        
        heroImage: './tmh1.jpg',
        persona1: './tmp11.jpg',
        persona2: './tmp22.jpg',
        sitemap: './tmsm.jpg',
        wireframes: ['./tmw44.png', './tmw55.png', './tmw66.png'],
        finalMockups: ['./tmf1.jpg', './tmf222.jpg', './tmf333.jpg']
    },
    project2: {
        title: 'Workhive',
        category: 'Web Platform · UX/UI Design',
        timeline: '4 Months',
        role: 'Product Designer',
        overview: [
            "I constantly noticed my peers keeping a dozen tabs open just to apply for a single job—bouncing between LinkedIn for networking, Glassdoor for salaries, and blind forums for culture insights. As a designer, that kind of friction drives me crazy. It creates massive cognitive overload for candidates and makes sourcing a nightmare for recruiters.",
            "WorkHive was my answer to this fragmented experience. I wanted to design a unified career platform that respects the user's time and attention. Driven by a core need for transparency, WorkHive brings job discovery, cultural insights, and networking into a single, cohesive ecosystem.",
            "My role involved orchestrating the platform's user experience from the ground up. I had to balance the complex, heavy data needs of enterprise recruiters with the intuitive, low-friction interface demanded by modern job seekers."
        ],
        impactMetrics: [
            { label: 'Time to Evaluate', value: '-40%' },
            { label: 'Profile Completion', value: '+65%' },
            { label: 'Positive Match Rate (n=120)', value: '82%' }
        ],
        tools: ['Figma', 'Miro', 'Hotjar', 'Google Analytics', 'Notion'],
        problem: "During our initial research, mapping the typical job seeker's journey revealed that users often switch between multiple platforms during a single application session. Job seekers struggled to weigh opportunities because salary data, cultural insights, and role requirements lived in silos. Recruiters faced the inverse problem: they received high volumes of applications but lacked verified insights to filter candidates effectively, relying on outdated resume parsers.",
        solution: "I designed a platform architecture that deeply integrates job search, candidate discovery, peer-reviewed company ratings, real-time salary insights, and even relocation cost estimations. The core of the solution is a 'Guided Exploration' interface that uses persistent filters and contextual pathways to surface relevant data - like whether a candidate knows an existing employee - right alongside the job description.",
        process: [
            { step: '01', title: 'Generative Research', desc: 'Surveyed 120 professionals and 25 recruiters to map pain points across the hiring lifecycle.' },
            { step: '02', title: 'System Mapping', desc: 'Used Miro to map complex data relationships between candidates, companies, and roles.' },
            { step: '03', title: 'Interaction Design', desc: 'Designed core flows prioritizing progressive disclosure of dense data sets.' },
            { step: '04', title: 'Prototyping & Testing', desc: 'Iterated on high-fidelity prototypes based on A/B testing feedback from 60 participants for the search interface.' },
            { step: '05', title: 'Design System', desc: 'Built a robust UI library tailored for dense data visualization and data tables.' }
        ],
        designDecisions: [
            {
                title: 'Persistent Yet Unobtrusive Filters',
                reason: 'Job searches are highly iterative. Instead of hiding filters behind a modal or dedicating a massive sidebar to them, I designed a sticky, horizontal filter bar. This allowed users to refine searches without losing their current scroll position, reducing interaction friction.'
            },
            {
                title: 'Network Opportunity Mapping',
                reason: 'Static job listings lack trust. I introduced visual match indicators and connection depth maps next to job titles. Seeing "2 alumni from your university work here" immediately increased user intent to apply by providing a warm networking path.'
            },
            {
                title: 'Relocation Cost Calculator Integration',
                reason: 'Salary is relative to location. I designed an embedded decision-support module combining salary offers with regional cost-of-living data, turning abstract numbers into a concrete decision matrix.'
            }
        ],
        challenges: [
            {
                title: 'Handling Extreme Data Density',
                solution: 'Company profiles needed to show reviews, open roles, leadership info, and benefits simultaneously. I implemented a hierarchical card system utilizing visual rhythm and negative space, ensuring the page felt breathable rather than overwhelming.'
            },
            {
                title: 'Recruiter vs. Candidate Views',
                solution: 'The platform serves two distinct user bases with conflicting needs (privacy vs. visibility). I created a dual-state architecture that allowed candidates to anonymize their profiles to recruiters until mutual interest was established.'
            }
        ],
        outcomes: [
            "Methodology Note: Metrics reflect a mix of unmoderated A/B testing on core navigation flows (n=120) and a closed pilot study with 25 enterprise recruiters over a 2-week period.",
            "Usability testing showed a 40% reduction in the time it took to evaluate a company and submit a mock application compared to legacy platforms.",
            "By introducing a gamified, step-by-step onboarding flow in the prototype, simulated profile completion rates increased by 65%.",
            "The new structured data matching algorithms, supported by the UI, resulted in recruiters reporting an 82% satisfaction rate with suggested candidate relevance in our pilot study."
        ],
        reflections: "Designing for a multi-sided marketplace taught me the crucial importance of balancing incentives. If I were to revisit the project, I would spend more time designing edge-case states for users with non-traditional career paths (e.g., career switchers or freelancers), ensuring the matching algorithm UI accommodates non-linear resumes.",

        heroImage: './whh.jpg',
        persona1: './p2persona1.png',
        persona2: './p2persona2.png',
        sitemap: './p2journey.jpg',
        wireframes: [
            {
                image: './p2w1.png',
                title: 'Wireframe 01 · Structured Job Discovery',
                description: 'A focused search layout built to minimize friction and cognitive load. Persistent filters allow quick refinement without interrupting browse flow.'
            },
            {
                image: './p2w2.png',
                title: 'Wireframe 02 · Network Opportunity Mapping',
                description: 'A visual relationship-based flow that replaces static listings with contextual pathways to improve decision confidence.'
            },
            {
                image: './p2w3.png',
                title: 'Wireframe 03 · Relocation Decision Support',
                description: 'A comparison interface combining salary and cost-of-living inputs into a readable decision model for users planning moves.'
            }
        ],
        finalMockups: [
            {
                image: './p2m1.png',
                title: 'Mockup 01 · Guided Exploration',
                description: 'High-fidelity screens introduce stronger hierarchy, cleaner card design, and clearer CTA emphasis to help evaluate roles faster.'
            },
            {
                image: './p2m2.png',
                title: 'Mockup 02 · Connection-Centered Insights',
                description: 'Visual polish makes network context easier to parse, turning relationship data into practical warm-path networking steps.'
            },
            {
                image: './p2m3.png',
                title: 'Mockup 03 · Confident Decision Flow',
                description: 'A refined comparison experience aligns financial inputs, outcomes, and actions into one coherent flow.'
            }
        ]
    },
    project3: {
        title: 'The Hunger Games',
        category: 'UX Research & Comparative Analysis',
        timeline: '1 Month',
        role: 'UX Researcher',
        overview: [
            "I use Swiggy and Zomato almost every day, and as a designer, I couldn't help but obsess over how differently they approach the exact same problem. Both giants offer identical core services, yet one prioritizes minimal, frictionless speed, while the other emphasizes feature depth and discovery.",
            "I wanted to figure out exactly why I preferred one over the other in different scenarios. This study is my deep-dive UX comparative analysis investigating how these distinct design philosophies actually influence user behavior and brand trust in the real world.",
            "Rather than just picking a 'winner', I set out to extract actionable intelligence on the trade-offs between cognitive load, feature richness, and user trust in highly saturated markets."
        ],
        impactMetrics: [
            { label: 'Survey Participants', value: '48' },
            { label: 'Data Points Analysed', value: '800+' },
            { label: 'Core Insights', value: '5' }
        ],
        tools: ['Google Forms', 'FigJam', 'Miro', 'SPSS', 'Notion'],
        problem: "Despite offering comparable services, Swiggy and Zomato adopt vastly different UX approaches regarding navigation architecture, checkout flows, personalization, and post-order support. However, it remained empirically unclear how these differences impacted real-world user satisfaction. The core research question was: Which platform provides a superior end-to-end user experience, and what specific micro-interactions drive that perception?",
        methodology: "Methodology Note: This was an independent, rigorous mixed-methods research project. First, I conducted a heuristic evaluation of both applications based on Nielsen's principles. Next, I deployed a structured, task-based survey to 48 active users of both platforms, focusing on quantitative satisfaction scores and qualitative pain points. Participants evaluated specific stages in a controlled setting: Onboarding, Discovery, Checkout, Delivery Tracking, and Support.",
        process: [
            { step: '01', title: 'Hypothesis Definition', desc: 'Formulated assumptions about speed vs. depth based on initial heuristic reviews.' },
            { step: '02', title: 'Survey Design', desc: 'Crafted a 20-question survey isolating specific user journeys and pain points.' },
            { step: '03', title: 'Data Collection', desc: 'Gathered qualitative and quantitative responses from 48 active urban users.' },
            { step: '04', title: 'Synthesis & Affinity Mapping', desc: 'Used FigJam to cluster feedback and identify recurring behavioral themes.' },
            { step: '05', title: 'Strategic Recommendations', desc: 'Drafted actionable UX improvements for both platforms based on empirical data.' }
        ],
        researchDecisions: [
            {
                title: 'Isolating the Journey',
                reason: 'Instead of asking generic "Which app do you prefer?" questions, I broke the journey into discrete steps (Discovery, Checkout, Support). This prevented brand bias from masking specific UI flaws in individual features.'
            },
            {
                title: 'Mixed-Methods Approach',
                reason: 'Quantitative data told me *what* users preferred (e.g., 70% preferred Swiggy\'s checkout), but qualitative open text fields revealed *why* (e.g., auto-applied coupons reduced cognitive friction).'
            }
        ],
        painPoints: [
            {
                title: 'Promotional Overload (Zomato)',
                description: 'Users reported high cognitive load due to Zomato’s interface being cluttered with advertisements and flashing promotional banners, making initial navigation overwhelming.'
            },
            {
                title: 'Hidden Charges Transparency',
                description: 'A recurring frustration across both platforms was the sudden appearance of unexpected delivery fees or "surge" charges only at the final checkout step, severely damaging trust.'
            },
            {
                title: 'Support Loop Frustration',
                description: 'Users heavily criticized automated chatbot loops when orders were delayed. While Swiggy excelled in ordering efficiency, Zomato was rated slightly higher in human-agent handover responsiveness.'
            }
        ],
        researchInsights: [
            {
                title: 'Simplicity vs. Feature Depth',
                description: 'Users perceived Swiggy as significantly faster to use, largely due to its minimal interface. Zomato introduced higher cognitive load but rewarded users with richer discovery features for dine-in scenarios.'
            },
            {
                title: 'Speed of Task Completion',
                description: 'For food delivery, users prioritize frictionless task completion over exploration. Swiggy’s auto-applied coupons and straightforward checkout won heavily in the "hungry and in a rush" use case.'
            },
            {
                title: 'Trust Through Transparency',
                description: 'Real-time delivery tracking accuracy emerged as a massive trust vector. Users felt Swiggy’s tracking UI was more reliable and transparent regarding delays.'
            }
        ],
        recommendations: {
            swiggy: [
                {
                    title: 'Improve Customer Support Handoff',
                    description: 'Reduce reliance on restrictive chatbot loops during critical delivery failures. Faster access to human agents would drastically improve trust.'
                },
                {
                    title: 'Enhance Loyalty Value Communication',
                    description: 'Clearer onboarding for "Swiggy One" benefits is needed, as many users misunderstood the ROI of the subscription.'
                }
            ],
            zomato: [
                {
                    title: 'Reduce Home Screen Cognitive Load',
                    description: 'Simplify the home architecture. Grouping promotional elements into dedicated zones rather than interspersing them would improve navigation clarity.'
                },
                {
                    title: 'Frictionless Coupon Integration',
                    description: 'Adopt an auto-apply mechanism for the best available discount during checkout to reduce the cognitive effort of manual code searching.'
                }
            ]
        },
        outcomes: [
            "Successfully synthesized 800+ raw data points from 48 participants into 5 core UX principles regarding cognitive load in hyper-local delivery apps.",
            "Demonstrated that 'Speed to Checkout' heavily outweighs 'Discovery Features' when user intent is strictly food delivery.",
            "The study serves as a foundational blueprint for designing high-frequency, transactional mobile applications."
        ],
        reflections: "This study reinforced my belief that beautiful UI is irrelevant if the architecture introduces friction during a high-intent task. If I were to expand this research, I would incorporate direct usability testing (e.g., eye-tracking or task-timing) rather than relying solely on self-reported survey data.",

        heroImage: './food.jpg',
        surveyResponses: [
            './p3survey1.png',
            './p3survey2.png',
            './p3survey3.png',
            './p3survey4.png',
            './p3survey5.png',
            './p3survey6.png',
            './p3survey7.png',
            './p3survey8.png',
            './p3survey9.png',
            './p3survey10.png'
        ]
    },
    project5: {
        title: 'This or That',
        category: 'Full Stack Web App · Group Project',
        timeline: 'Feb 2026 - May 2026',
        role: 'Full Stack Developer & UI/UX Designer',
        liveLink: 'https://cs7025-this-or-that.onrender.com/home.html',
        overview: [
            "Every day, we make dozens of micro-decisions—from choosing a laptop to picking a frontend framework. But turning to the internet for advice often means sifting through biased articles or enduring toxic forums. I realized people just needed a fast, reliable, and community-driven way to help them make better choices.",
            "‘This or That’ is the full-stack community platform we built to solve this exact problem. Users can pose dilemmas and let the community vote to guide their choices. By selecting specific topics, users are served a personalized, auto-updating feed relevant to their expertise.",
            "Developed as a capstone group project at Trinity College Dublin, this was a massive collaborative effort. To ensure success within our strict timeline, I took absolute ownership of the complete UI/UX design and the frontend architecture. While my team handled specific backend feature modules and database administration, I single-handedly built the entire React frontend and designed the core system schemas that powered our personalized feed algorithm."
        ],
        impactMetrics: [
            { label: 'System Architecture', value: '100%' },
            { label: 'Time to MVP', value: '3 Mos' },
            { label: 'Platform Users (n=25)', value: 'Beta' }
        ],
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
        problem: "Existing Q&A platforms like Quora or Reddit are text-heavy and require significant cognitive effort to parse. When someone just wants to know 'Logitech MX Master vs Apple Magic Mouse', they want a quick consensus. Furthermore, as a group project, our primary challenge was coordinating complex full-stack features - like a personalized feed algorithm and secure anonymous posting - across multiple developers within a strict 3-month academic timeline.",
        solution: "We engineered a robust platform that centers around binary or multi-choice polling mixed with threaded discussions. I designed the database to efficiently handle user preferences, connecting them dynamically to the feed generation algorithm. The UI was crafted to be frictionless - allowing users to vote with a single click and see instant visual feedback via progress bars. To foster honest discussion on sensitive topics, we implemented a secure anonymous posting feature on the backend.",
        process: [
            { step: '01', title: 'Architecture & Database Design', desc: 'Mapped out entity-relationship diagrams and designed scalable NoSQL schemas for users, polls, and preferences.' },
            { step: '02', title: 'UI/UX Prototyping', desc: 'Created high-fidelity Figma mockups, establishing a clean, modern design system to serve as a single source of truth for the team.' },
            { step: '03', title: 'Backend & API Development', desc: 'Developed secure RESTful API endpoints handling authentication, preference matching, and the core voting logic.' },
            { step: '04', title: 'Frontend Implementation', desc: 'Translated the Figma designs into responsive React components, integrating them tightly with our backend services.' },
            { step: '05', title: 'Group Integration & Testing', desc: 'Led regular code reviews and merge sessions to ensure seamless integration of frontend and backend modules developed by different team members.' }
        ],
        designDecisions: [
            {
                title: 'Algorithm-Driven Personalized Feed',
                reason: 'To maximize user engagement, I architected the backend to dynamically filter the global feed based on an array of topic tags selected during user onboarding. This ensured users only saw dilemmas they actually cared about.'
            },
            {
                title: 'Frictionless Voting UI',
                reason: 'The core action of the platform is voting. I designed large, clear touch targets for the options. Upon voting, the UI immediately transitions to show community percentages, providing instant gratification and keeping the user engaged.'
            },
            {
                title: 'Secure Anonymous Interactions',
                reason: 'To encourage questions on sensitive topics (e.g., career or relationship choices), I implemented a backend flag that decouples user IDs from specific posts in the public API response, ensuring true anonymity without losing data integrity.'
            }
        ],
        challenges: [
            {
                title: 'Group Coordination & Version Control',
                solution: 'With multiple developers touching the same full-stack features, merge conflicts were a constant threat. I established a strict Git branching strategy and served as the technical lead during integration, ensuring our database schemas and API contracts remained synchronized.'
            },
            {
                title: 'Complex State Management',
                solution: 'Managing the state of the user’s feed, their profile preferences, and real-time voting updates required careful planning. I implemented centralized state management on the frontend to prevent unnecessary re-renders and ensure the UI always reflected the latest database state.'
            }
        ],
        outcomes: [
            "Successfully delivered a fully functional, deployed full-stack application within the aggressive 3-month Trinity College timeline.",
            "Demonstrated strong technical versatility by successfully bridging the gap between database architecture, backend logic, and frontend UI/UX design.",
            "The project served as a masterclass in collaborative software engineering, proving my ability to communicate technical requirements, divide complex tasks, and unify a team's code into a cohesive product."
        ],
        reflections: "Building 'This or That' reinforced the critical importance of planning architecture and API contracts before writing a single line of code. Because I spent time designing the database and Figma files upfront, our team was able to work in parallel much more effectively. In the future, I would love to implement real-time WebSockets to make the voting experience even more dynamic.",

        heroImage: './tot-hero.png',
        persona1: './p2persona1.png', 
        persona2: './p2persona2.png', 
        sitemap: './tot-feed.png',
        wireframes: [
            {
                image: './tot-feed.png',
                title: 'Personalized Feed View',
                description: 'The core dashboard where users browse active dilemmas filtered by their selected preferences.'
            },
            {
                image: './tot-ask.png',
                title: 'Question Creation',
                description: 'A structured, easy-to-use form allowing users to pose dilemmas with clear options and contextual descriptions.'
            },
            {
                image: './tot-profile.png',
                title: 'User Profile & Preferences',
                description: 'The hub for users to track their generated decisions, see their voting impact, and adjust their topic preferences.'
            }
        ],
        finalMockups: [
             {
                image: './tot-hero.png',
                title: 'Voting Interface',
                description: 'The polished UI showcasing clear options, immediate visual feedback via percentage bars, and a threaded comment section for deeper discussion.'
            }
        ]
    }
};
