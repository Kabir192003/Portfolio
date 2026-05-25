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
        
        heroImage: './tmh.jpg',
        personas: [
            {
                name: 'Rohan S.',
                demographics: '28 · Software Engineer · Bangalore, India',
                archetype: 'WEEKEND WARRIOR',
                tags: ['Weekend warrior', 'Tech-savvy', 'Budget-conscious'],
                quote: "I spend more time comparing tent specs on Reddit threads than actually planning my route.",
                painPoints: [
                    'Overwhelmed by conflicting reviews spread across 4–5 different sites',
                    'Cannot verify if mid-range gear actually performs in heavy rain',
                    'No way to check item compatibility (e.g. sleeping bag + tent system)'
                ],
                goals: [
                    'Find reliable gear under budget without hours of prior research',
                    'Trust verified technical specs sourced from real trekkers'
                ],
                metrics: [
                    { label: 'trips / year', value: '4–6x' },
                    { label: 'research per purchase', value: '3–5 hrs' },
                    { label: 'cart abandonment', value: 'High' }
                ]
            },
            {
                name: 'Maya K.',
                demographics: '35 · Physiotherapist · Vancouver, Canada',
                archetype: 'EXPERIENCED HIKER',
                tags: ['Experienced hiker', 'Safety-first', 'Sustainability-minded'],
                quote: "I'll pay premium if I know exactly why it's worth it — but no one ever tells me that.",
                painPoints: [
                    'Marketing copy replaces actual technical data',
                    'Hard to filter for sustainable or ethically-made options',
                    "Buyer's remorse after trusting vague 'all-season' claims"
                ],
                goals: [
                    'Access deep spec sheets and real-world condition performance data',
                    'Discover brands aligned with her environmental values'
                ],
                metrics: [
                    { label: 'trips / year', value: '10–15x' },
                    { label: 'avg. item spend', value: '$400+' },
                    { label: 'platform loyalty', value: 'Low' }
                ]
            },
            {
                name: 'Daniel P.',
                demographics: '42 · High School Teacher · Munich, Germany',
                archetype: 'CASUAL FAMILY CAMPER',
                tags: ['Casual camper', 'Family trips', 'First-time buyer'],
                quote: "I just want someone to tell me what to buy for a 3-day trip with two kids — I don't care about ultralight everything.",
                painPoints: [
                    'Jargon-heavy product descriptions exclude non-expert buyers',
                    "No curated 'starter kit' exists for casual, family-oriented use cases",
                    'Fear of buying the wrong gear and ruining a family trip'
                ],
                goals: [
                    "Get guided, scenario-based recommendations ('family weekend in forest')",
                    'Understand gear in plain language with clear return policy'
                ],
                metrics: [
                    { label: 'trips / year', value: '2–3x' },
                    { label: 'total budget', value: '€600' },
                    { label: 'decision anxiety', value: 'High' }
                ]
            },
            {
                name: 'Ava L.',
                demographics: '24 · Outdoors Content Creator · Sydney, Australia',
                archetype: 'GEAR INFLUENCER',
                tags: ['Gear influencer', 'Aesthetics-driven', 'Community-focused'],
                quote: "My audience trusts me, so I need to trust what I recommend. Right now I test gear myself because there's no platform I'd stake my reputation on.",
                painPoints: [
                    'No platform aggregates community reviews with real trail condition data',
                    'Sponsored content erodes trust — needs unbiased, credible curation',
                    'Generic storefronts lack shareable, linkable product stories'
                ],
                goals: [
                    "Build a trusted 'gear list' she can share publicly with her community",
                    'Discover new product releases before they go mainstream'
                ],
                metrics: [
                    { label: 'gear purchases', value: 'Monthly' },
                    { label: 'social followers', value: '82K' },
                    { label: 'brand influence', value: 'Very high' }
                ]
            },
            {
                name: 'James T.',
                demographics: '51 · Retired Military Officer · Colorado, USA',
                archetype: 'EXPERT SURVIVALIST',
                tags: ['Expert survivalist', 'Performance-obsessed', 'Brand-skeptical'],
                quote: "I've seen cheap gear fail in the field. I need failure modes, not star ratings.",
                painPoints: [
                    "Consumer-grade reviews don't reflect extreme-condition performance",
                    'No way to compare edge-case specs (tensile strength, temperature floor)',
                    'Over-marketed products crowd out genuinely superior gear'
                ],
                goals: [
                    'Access military-grade or expedition-tested equipment with raw specs',
                    'Filter by verified expert reviews from guides and mountaineers'
                ],
                metrics: [
                    { label: 'trips / year', value: '20+' },
                    { label: 'avg. spend', value: '$1,500+' },
                    { label: 'impulse buys', value: 'Zero' }
                ]
            }
        ],
        journeys: [
            {
                personaName: 'Daniel P.',
                archetype: 'Casual Family Camper',
                scenario: 'Daniel wants to take his family on their first 2-night forest camping trip. He has no existing gear and a budget of €600 for the whole family.',
                phases: ['Trigger', 'Discovery', 'Research', 'Decision', 'Purchase', 'Post-Purchase'],
                rows: {
                    actions: [
                        'Kids ask about camping after watching a nature documentary',
                        "Searches 'beginner camping gear family of 4'; browses REI & decathlon",
                        'Reads buying guides; gets confused by conflicting weight & price tiers',
                        'Calls his outdoorsy brother-in-law; gets a basic list',
                        'Buys a bundle kit from a sporting goods store in person',
                        'Trip goes well; wishes he had packed a ground mat; forgets to review anything'
                    ],
                    thoughts: [
                        '"This could be a great family memory if I can figure out the gear."',
                        '"Do I really need a 4-season tent for one weekend trip? This feels like overkill."',
                        '"\'Ultralight\' this, \'three-pole system\' that — I have no idea what half this means."',
                        '"I give up researching. I\'ll just ask Klaus — he\'s done this before."',
                        '"The guy in the store was helpful but I\'m not sure I got the best value."',
                        '"Good trip but I feel like I\'m missing something. Maybe a checklist would help."'
                    ],
                    emotions: ['Excited', 'Curious', 'Overwhelmed', 'Frustrated', 'Neutral', 'Hopeful'],
                    painPoints: [
                        'Inspiration exists but no guided starting point for beginners',
                        "No scenario-based filtering ('family, 2 nights, summer forest')",
                        'Jargon-heavy content excludes non-expert shoppers',
                        'Falls out of the digital funnel — converts offline via personal advice',
                        'In-store conversion means lost data and no digital relationship',
                        'No follow-up, no checklist, no re-engagement hook'
                    ],
                    opportunities: [
                        "'Plan my trip' wizard as a guided onboarding entry point",
                        'Scenario filters: group size, experience level, terrain, duration',
                        'Plain-language gear explainers with parent-friendly framing',
                        'Expert chat or in-app assistant to replace the phone call',
                        'Starter kit bundles with transparent value comparison',
                        "Post-trip checklist + 'What to add next time' nudge email"
                    ]
                }
            },
            {
                personaName: 'Rohan S.',
                archetype: 'Weekend Warrior',
                scenario: "Rohan's weekend trek is 3 weeks away. His current tent leaked badly on the last trip. He needs a reliable upgrade under ₹8,000 — fast.",
                phases: ['Trigger', 'Discovery', 'Research', 'Decision', 'Purchase', 'Post-Purchase'],
                rows: {
                    actions: [
                        'Remembers wet sleeping bag; decides to buy a new tent',
                        "Googles 'best budget trekking tent India'; lands on Amazon & Reddit threads",
                        'Opens 6 tabs; cross-references specs & user comments for 2 hrs',
                        'Shortlists 2 tents; asks in a WhatsApp group for opinions',
                        'Buys on Amazon after a friend vouches for one option',
                        'Sets up tent at home; shares quick review in the group chat'
                    ],
                    thoughts: [
                        '"My tent totally failed me last monsoon. Never again."',
                        '"There are thousands of results. Which of these are actually for India\'s conditions?"',
                        '"This one says 3000mm HH but the comments say it leaks. Who do I trust?"',
                        '"I\'ll just ask someone who\'s actually used it. Specs mean nothing if people hate it."',
                        '"Fine — if Arjun says it\'s good I\'ll go with it."',
                        '"Decent. I wish I\'d found this info before spending 2 hours Googling."'
                    ],
                    emotions: ['Frustrated', 'Overwhelmed', 'Confused', 'Anxious', 'Relieved', 'Satisfied'],
                    painPoints: [
                        'No clear event triggers the search — pure frustration',
                        'Generic results, no India-specific trail condition context',
                        'Conflicting specs & reviews across platforms with no resolution',
                        'Has to rely on personal network because no trusted source exists',
                        'Decision made on social proof, not verified data',
                        'Post-purchase validation loop happens outside the platform'
                    ],
                    opportunities: [
                        "Contextual entry — 'Planning a monsoon trek?' prompts",
                        'Curated collections filtered by region & season',
                        "Community-verified spec badges (e.g. 'Monsoon tested')",
                        'In-app Q&A; with certified gear experts',
                        'Compatibility checker & peer review aggregation',
                        'Prompt post-trip review with structured trail conditions'
                    ]
                }
            },
            {
                personaName: 'Ava L.',
                archetype: 'Gear Influencer',
                scenario: 'Ava is preparing a "Best Lightweight Layering for Alpine Summer" post. She needs to test, verify, and confidently recommend 3–4 products to 82K followers.',
                phases: ['Trigger', 'Discovery', 'Research', 'Decision', 'Purchase', 'Post-Purchase'],
                rows: {
                    actions: [
                        'Follower DM asks for alpine layering recs; sees engagement opportunity',
                        'Browses brand sites, gear blogs & Trailforks; checks for affiliate options',
                        'Downloads spec sheets, emails 2 brands for media samples, reads 1-star reviews',
                        'Narrows to 3 items she can personally test before the post goes live',
                        'Buys 1; receives 2 as press samples; stress-tests all three on a day hike',
                        'Posts reel with honest breakdown; links bio to her curated gear page'
                    ],
                    thoughts: [
                        '"My audience trusts me. A bad rec damages that trust permanently."',
                        '"Most affiliate schemes push me toward bestsellers, not the best product."',
                        '"The brand says \'exceptional moisture wicking\'. I need to know the fabric GSM and actual sweat tests."',
                        '"I\'ll only recommend things I\'ve personally worn above 2,500m."',
                        '"Stress-testing takes a full day. I wish there were verified trail reviews I could trust."',
                        '"The reel performed well but the link-in-bio flow is clunky. I need a shareable gear list."'
                    ],
                    emotions: ['Excited', 'Skeptical', 'Frustrated', 'Curious', 'Hopeful', 'Delighted'],
                    painPoints: [
                        'No platform surfaces gear discovery in a creator-first context',
                        'Affiliate incentives misalign with authentic recommendation',
                        'Raw technical specs are buried behind marketing copy',
                        'No way to filter by verified expert/expedition reviews',
                        'Validation requires personal testing — no trusted third-party data',
                        'No native shareable gear list or creator storefront feature'
                    ],
                    opportunities: [
                        'Creator profile with curated public gear lists',
                        'Bias-transparent curation: distinguish editorial vs. sponsored picks',
                        'Raw spec data layer toggle alongside product marketing copy',
                        'Verified expedition reviews from guides and certified professionals',
                        'Aggregated community trail-condition performance data per product',
                        "Shareable 'Ava's Alpine Kit' link page with affiliate transparency"
                    ]
                }
            }
        ],
        designRationale: [
            {
                image: './trekmate-new/tm-onboarding.png',
                title: 'Onboarding: Emotional Connection First',
                rationale: "Before asking for a single piece of user data, I wanted to establish trust and a premium feel. The full-bleed landscape creates an immediate emotional connection. The prominent 'Skip' button respects the user's time—a critical tradeoff to reduce early bounce rates."
            },
            {
                image: './trekmate-new/tm-home.png',
                title: 'Home: Contextual Discovery',
                rationale: "Instead of forcing users to search raw categories, the home screen curates gear contextually (e.g., 'Winter Capsule '26'). This guides users based on their immediate environmental needs, drastically reducing cognitive load and choice paralysis."
            },
            {
                image: './trekmate-new/tm-browse.png',
                title: 'Browse: Visual Evaluation Hierarchy',
                rationale: "Horizontal, scrollable filter pills keep the vertical space entirely dedicated to large product cards. Because expensive gear requires intense visual evaluation, I maximized the image real estate while keeping critical data (price, rating) immediately scannable."
            },
            {
                image: './trekmate-new/tm-product.png',
                title: 'Product Detail: Conversion Focus',
                rationale: "The 'Add to cart' button is sticky at the bottom, ensuring the primary conversion action is always accessible regardless of scroll depth. The visual hierarchy prioritizes the price and key technical specs immediately below the product title."
            },
            {
                image: './trekmate-new/tm-profile.png',
                title: 'Profile: Building an Ecosystem',
                rationale: "To turn a purely transactional e-commerce app into a lifestyle habit, I introduced the 'Field Journal'. This feature allows users to log their trips and gear performance, building a retention loop that keeps them coming back long after a purchase."
            },
            {
                image: './trekmate-new/tm-cart.png',
                title: 'Cart: Transparent Cost Breakdown',
                rationale: "To build immediate trust before checkout, the cart explicitly breaks down the subtotal, shipping, and estimated tax. Large, frictionless quantity toggles and clear item removal actions ensure users maintain full control without navigating away."
            },
            {
                image: './trekmate-new/tm-shipping.png',
                title: 'Checkout: Contextual Delivery',
                rationale: "Outdoor enthusiasts often need gear delivered directly to a basecamp. By integrating a 'Ship to a trailhead' option alongside standard delivery methods, the checkout flow dynamically adapts to the unique logistical realities of an adventurer."
            },
            {
                image: './trekmate-new/tm-order.png',
                title: 'Order Confirmation: Resolving Anxiety',
                rationale: "Post-purchase anxiety is mitigated through a clean, definitive success state. Highlighting the exact delivery window, the tracking email destination, and providing a singular call-to-action back to the home screen creates a reassuring cognitive loop."
            },
            {
                image: './trekmate-new/tm-saved.png',
                title: 'Saved: High-Consideration Holding',
                rationale: "The Saved tab acts as a strategic holding area for high-consideration items. Visual indicators like the 'Editor's Pick' badge and explicit community rating scores help users continuously validate their choices over time before committing to a final purchase."
            }
        ]
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
        personas: [
            {
                name: 'Aisha R.',
                demographics: '29 · Freelance UX Designer → Full-time · Dubai, UAE',
                archetype: 'FREELANCER GOING PERMANENT',
                tags: ['Career transition', 'Portfolio-led', 'Remote-first'],
                quote: "Freelancing taught me a lot but I can't tell if my portfolio reads the same as someone with a traditional job title. I feel invisible on standard job platforms.",
                painPoints: [
                    'Freelance experience is undervalued by ATS systems built for linear careers',
                    'No mechanism to showcase project impact or client outcomes — only job titles',
                    'Remote-first roles are hard to filter and often have hidden location requirements'
                ],
                goals: [
                    'Present project-based work in a format that registers with recruiters',
                    'Find roles that value outcome-driven portfolios over traditional CVs'
                ],
                metrics: [
                    { label: 'freelance experience', value: '5 yrs' },
                    { label: 'ATS pass-throughs', value: 'Zero' },
                    { label: 'imposter syndrome', value: 'High' }
                ]
            },
            {
                name: 'David L.',
                demographics: '38 · Staff Software Engineer · Berlin, Germany',
                archetype: 'PASSIVE CANDIDATE',
                tags: ['Passive candidate', 'Selective', 'Compensation-focused'],
                quote: "I get 10 LinkedIn InMails a week. None of them know what I actually work on. If something compelling existed, I might look — but I'm not going to hunt.",
                painPoints: [
                    'Inbound recruiter outreach is generic and irrelevant to his actual expertise',
                    'No way to signal selective openness without triggering a flood of messages',
                    'Relocation trade-offs (cost of living, tax, equity) are impossible to model'
                ],
                goals: [
                    'Receive only hyper-relevant, pre-qualified opportunities on his terms',
                    'Model total compensation including equity, tax, and cost-of-living adjustments'
                ],
                metrics: [
                    { label: 'recruiter InMails', value: '10x/week' },
                    { label: 'response rate', value: '0.5%' },
                    { label: 'selectivity', value: 'High' }
                ]
            },
            {
                name: 'Priya M.',
                demographics: '24 · Recent CS Graduate · Pune, India',
                archetype: 'FIRST-TIME JOB SEEKER',
                tags: ['Entry-level', 'Tech-focused', 'Referral-dependent'],
                quote: "I have 8 tabs open right now — LinkedIn, Glassdoor, Blind, two company career pages, and I still don't know if any of these jobs are actually a good fit.",
                painPoints: [
                    'No single place to see salary, culture, and role requirements together',
                    'Cannot tell if a connection at a company would give a genuine referral',
                    'Overwhelmed by volume — no smart filtering for entry-level roles vs. senior'
                ],
                goals: [
                    'Find roles matched to her skills and growth stage, not just keywords',
                    'Understand culture and salary before investing time in an application'
                ],
                metrics: [
                    { label: 'tabs per session', value: '8–12' },
                    { label: 'avg. search duration', value: '3–4 wks' },
                    { label: 'drop-off rate', value: 'High' }
                ]
            },
            {
                name: 'Sarah K.',
                demographics: '41 · Senior Talent Acquisition Lead · New York, USA',
                archetype: 'ENTERPRISE RECRUITER',
                tags: ['Enterprise recruiter', 'Volume-overwhelmed', 'Data-hungry'],
                quote: "I get 400 applications for a single role. My current ATS tells me nothing useful. I spend more time screening than actually recruiting.",
                painPoints: [
                    'ATS keyword matching surfaces irrelevant candidates and filters out good ones',
                    'No verified cultural fit signal — self-reported skills can\'t be trusted',
                    'Impossible to communicate employer brand authentically at scale'
                ],
                goals: [
                    'Surface pre-vetted, culture-matched candidates with verified signals',
                    'Reduce time-to-hire by 40% without sacrificing quality'
                ],
                metrics: [
                    { label: 'apps per role', value: '400+' },
                    { label: 'avg. time-to-hire', value: '42 days' },
                    { label: 'cost-per-hire', value: '$28K' }
                ]
            },
            {
                name: 'Marcus T.',
                demographics: '33 · Marketing Manager · London, UK',
                archetype: 'MID-CAREER SWITCHER',
                tags: ['Career-switcher', 'Salary-driven', 'Risk-averse'],
                quote: "I know I'm underpaid but I can't validate it without sounding desperate in interviews. I need real numbers, not 'competitive salary'.",
                painPoints: [
                    'Salary bands are hidden until deep in the interview process',
                    'Unclear which of his skills transfer across industries',
                    'Cultural fit is impossible to assess from polished company pages'
                ],
                goals: [
                    'Access verified salary data by role, company, and location before applying',
                    'Map transferable skills to new industries with confidence'
                ],
                metrics: [
                    { label: 'avg. switch timeline', value: '6 months' },
                    { label: 'target salary jump', value: '£20K+' },
                    { label: 'platform trust', value: 'Low' }
                ]
            }
        ],
        journeys: [
            {
                personaName: 'Marcus T.',
                archetype: 'Mid-Career Switcher',
                scenario: 'Marcus wants to move from marketing into product management. He needs to validate his salary expectations, map his transferable skills, and avoid wasting time on roles that won\'t see his CV fairly.',
                phases: ['Trigger', 'Discovery', 'Validation', 'Networking', 'Interview', 'Decision'],
                rows: {
                    actions: [
                        'Gets passed over for promotion; decides to explore external options seriously',
                        'Searches PM roles on LinkedIn; filters by experience level but results are inconsistent',
                        'Visits Glassdoor and Levels.fyi for salary data; compares to his current package',
                        'Reaches out to 6 contacts at target companies; only 2 respond meaningfully',
                        'Gets 3 interviews; asked about PM experience he technically doesn\'t have yet',
                        'Receives an offer 15% below his minimum; has to negotiate blind without market data'
                    ],
                    thoughts: [
                        '"I\'ve been doing PM work without the title for two years. I just need someone to see that."',
                        '"These JDs all say 3–5 years PM experience. Do I even qualify? I can\'t tell."',
                        '"Levels.fyi only covers big tech. I\'m targeting scale-ups — there\'s nothing for me here."',
                        '"I need a warm intro but I don\'t know who to ask or how to frame it without looking desperate."',
                        '"They keep asking for PM experience as if my 6 years of go-to-market work is irrelevant."',
                        '"I need to know the market rate before I walk into this negotiation or I\'ll leave money on the table."'
                    ],
                    emotions: ['Frustrated', 'Curious', 'Impatient', 'Anxious', 'Skeptical', 'Cautious'],
                    painPoints: [
                        'No platform recognises or surfaces transferable-skill equivalency',
                        'Experience level filters don\'t account for adjacent career paths',
                        'Salary data gaps for mid-market and scale-up companies',
                        'Warm intro infrastructure doesn\'t exist beyond cold LinkedIn DMs',
                        'Interview processes are calibrated for traditional career paths only',
                        'Offer negotiation happens without real-time, role-specific comp benchmarks'
                    ],
                    opportunities: [
                        'Skill-translation engine: map marketing competencies to PM role requirements',
                        'Fuzzy experience matching: \'You qualify for 73% of this role based on adjacent skills\'',
                        'Scale-up salary database crowdsourced from verified WorkHive users',
                        'Warm intro layer: mutual connections flagged with relationship context',
                        'Interview prep tailored to career-switch narratives, not just job history',
                        'Live comp benchmarking tool accessible during active offer stage'
                    ]
                }
            },
            {
                personaName: 'Priya M.',
                archetype: 'First-Time Job Seeker',
                scenario: 'Priya graduated 3 months ago and has been applying for junior product roles. She\'s managing the process across 8+ tabs and still hasn\'t had a single first-round call.',
                phases: ['Trigger', 'Discovery', 'Research', 'Application', 'Waiting', 'Post-Outcome'],
                rows: {
                    actions: [
                        'Sees a LinkedIn post about entry-level PM roles; opens LinkedIn, Glassdoor, and Blind simultaneously',
                        'Searches \'junior product manager\'; finds hundreds of roles with no salary info or culture signals',
                        'Reads 3 Glassdoor review pages; scrolls Blind threads; opens company LinkedIn to check team size',
                        'Tailors CV for each role; writes cover letters without knowing if salary meets her threshold',
                        'Sends 14 applications; checks email obsessively for 2 weeks; hears back from 2',
                        'Gets rejected post-interview; has no feedback; can\'t tell if it was fit, salary, or skill gap'
                    ],
                    thoughts: [
                        '"There must be a better way to find the right role — not just any role."',
                        '"How am I supposed to know which of these 400 results are actually entry-level?"',
                        '"The reviews say great culture but everyone who left says the opposite. Who do I believe?"',
                        '"I spent 3 hours on this application and I don\'t even know if the salary works for me."',
                        '"Is my application even being read by a person? It feels like a black hole."',
                        '"I have no idea what I did wrong. I can\'t improve if no one tells me anything."'
                    ],
                    emotions: ['Hopeful', 'Overwhelmed', 'Confused', 'Anxious', 'Anxious', 'Frustrated'],
                    painPoints: [
                        'No unified starting point — must cobble together data from multiple platforms',
                        'Zero salary transparency at the discovery stage wastes application effort',
                        'Culture signals are contradictory and unverified — hard to triangulate',
                        'Blind applications with no confirmation of relevance erode confidence',
                        'ATS black hole creates anxiety and disengagement from the process',
                        'No feedback loop means no way to iterate or improve'
                    ],
                    opportunities: [
                        'Unified dashboard: role, salary, culture, and team visibility in one view',
                        'Smart entry-level filter with salary range displayed upfront',
                        'Verified culture ratings with recency weighting and role-specific filters',
                        'Connection alerts: \'You know 2 people at this company\' alongside JD',
                        'Application tracker with estimated response timelines per company',
                        'Anonymised post-rejection insights: where in the funnel and why'
                    ]
                }
            },
            {
                personaName: 'Sarah K.',
                archetype: 'Enterprise Recruiter',
                scenario: 'Sarah is hiring a Senior Data Engineer. She received 380 applications in 72 hours. Her ATS shortlisted 40 but most are poorly matched. She needs to identify the top 5 in under a week.',
                phases: ['Brief', 'Sourcing', 'Screening', 'Shortlisting', 'Interviews', 'Offer'],
                rows: {
                    actions: [
                        'Receives hiring brief from Engineering VP; posts JD across LinkedIn, Indeed, and company site',
                        '380 applications arrive; ATS auto-screens on keywords; flags 40 for review',
                        'Manually reviews 40 CVs; many are keyword-stuffed and don\'t reflect actual skills',
                        'Schedules 12 phone screens in 3 days; only 4 proceed to hiring manager round',
                        '3 final-round candidates; 1 drops out citing poor culture perception from Glassdoor',
                        'Extends offer to top candidate; loses them to a competitor who moved faster'
                    ],
                    thoughts: [
                        '"The brief says senior but the hiring manager means something different every time."',
                        '"Why is the ATS surfacing junior candidates for a senior role — again?"',
                        '"Half these CVs list tools they\'ve clearly never used seriously. How do I verify this?"',
                        '"I\'m spending 70% of my time on people who aren\'t close to a fit. This is unsustainable."',
                        '"We lost a great candidate because our Glassdoor reviews haven\'t been updated in 18 months."',
                        '"Our process is too slow. By the time we decide, the best people are gone."'
                    ],
                    emotions: ['Neutral', 'Overwhelmed', 'Frustrated', 'Impatient', 'Frustrated', 'Frustrated'],
                    painPoints: [
                        'JD calibration gap between recruiter and hiring manager creates bad sourcing',
                        'ATS keyword matching generates volume without quality signal',
                        'No way to verify depth of claimed technical skills pre-screen',
                        'Excessive time spent on early-stage filtering that adds no real value',
                        'Employer brand is unmanaged and actively hurts candidate conversion',
                        'Slow internal process loses top candidates to faster-moving competitors'
                    ],
                    opportunities: [
                        'Calibration wizard: structured brief-taking to align recruiter and HM upfront',
                        'Verified skills signals from peer endorsements and project history',
                        'AI-assisted ranking based on role-specific competency fit, not keywords',
                        'Async screening tools: structured video or written responses to save phone time',
                        'Employer brand dashboard: curate, respond to, and track culture perception',
                        'Pipeline velocity tracker with competitive benchmarks and drop-off alerts'
                    ]
                }
            }
        ],
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
        designRationale: [
            {
                image: './p2m1.png',
                title: 'Guided Exploration: Minimizing Cognitive Load',
                description: 'Instead of overwhelming the user with a massive wall of text, I utilized progressive disclosure. The clean card layout creates a strict visual hierarchy. The primary CTA ("Apply") is given maximum visual weight, while secondary actions are de-emphasized to prevent choice paralysis.'
            },
            {
                image: './p2m2.png',
                title: 'Connection-Centered Insights: Building Trust',
                description: 'A key tradeoff was sacrificing screen real estate to show network connections upfront. Why? Because seeing "2 alumni work here" creates instant trust. I designed a horizontal scroll for these connections so they remain visible without pushing critical job details below the fold.'
            },
            {
                image: './p2m3.png',
                title: 'Confident Decision Flow: Anchoring Data',
                description: 'Salary means nothing without context. By anchoring the salary offer next to real-time regional cost-of-living data, I transformed abstract numbers into a concrete decision matrix. The layout uses high contrast and clear data visualization to make complex financial comparisons effortless.'
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
        designRationale: [
            {
                image: './tot-feed.png',
                title: 'Personalized Feed: Algorithm-Driven Discovery',
                description: 'Instead of an overwhelming chronological firehose, the feed relies on user-declared expertise. By dynamically filtering dilemmas based on their profile tags, we significantly increased engagement rates and response quality.'
            },
            {
                image: './tot-hero.png',
                title: 'Hybrid Polling System: Structured Empathy',
                description: 'We had to balance quantitative data (polls) with qualitative context (comments). The interface prioritizes the poll visual to capture immediate votes, while anchoring the discussion thread directly below for deeper context.'
            },
            {
                image: './tot-ask.png',
                title: 'Decision Creation: Frictionless Input',
                description: 'Creating a poll needed to be as easy as sending a tweet. I designed a progressive input flow that expands based on the poll type (text vs image), ensuring the user is never confronted with an overwhelming form.'
            }
        ]
    }
};
