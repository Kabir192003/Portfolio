export const projectsData = {
    project1: {
        title: 'Trekmate',
        category: 'Mobile App · UX/UI Design',
        timeline: '3 Months',
        role: 'Product/UX Designer',
        overview: [
            "I identified a gap in the outdoor gear e-commerce space: enthusiasts were drowning in generic platforms like Amazon with no curation, or struggling through outdated niche forums. The result was always choice paralysis and zero reliable technical guidance. I set out to fix that.",
            "Trekmate is a specialized e-commerce mobile app I designed from the ground up for camping and trekking enthusiasts. It guides users from inspiration to expedition in a single, curated experience. I conducted 24 user interviews and validated the final prototype with 45 real users, achieving a 94% task success rate.",
            "I owned the entire product design lifecycle solo. From initial user research, persona development, and information architecture through to a complete, scalable design system across 40+ screens and a fully interactive prototype ready for developer handoff."
        ],
        impactMetrics: [
            { label: 'Task Success Rate', value: '94%' },
            { label: 'Task Time (n=45)', value: '-35%' },
            { label: 'User Satisfaction', value: '4.8/5' }
        ],
        tools: ['Figma', 'FigJam', 'Maze', 'Notion', 'UserTesting'],
        problem: "My research revealed that enthusiasts spent more time researching gear across 4-5 different platforms than actually planning their trips. The cognitive load was immense: overwhelming choices, no product compatibility guidance, and zero context-aware filtering. This directly caused high cart abandonment and widespread buyer's remorse across the market.",
        solution: "I replaced generic browsing with context-aware categorization I designed from scratch: 'Shop by Expedition Type' and 'Shop by Weather' instead of just 'Tents'. I built an intuitive technical spec filtering system, a streamlined single-page checkout flow, and integrated trail-tested recommendations. In prototype testing, my contextual discovery approach reduced search-to-cart time by 40%.",
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
            "Validated with 45 real outdoor enthusiasts via Maze: achieved a 94% task completion rate on the primary purchase flow.",
            "My checkout redesign cut completion time by 35% compared to the benchmarked competitor app.",
            "My contextual discovery system ('Shop by Terrain', 'Shop by Weather') reduced search-to-cart time by 40% in prototype testing.",
            "The 40+ screen design system I built became the single source of truth for the product's MVP development phase."
        ],
        reflections: "This project sharpened my ability to translate complex user research into tangible product decisions. The biggest lesson: contextual discovery massively outperforms traditional search when users don't know exactly what they need. Next iteration would integrate community gear loadouts to add social proof directly into the discovery flow.",
        
        heroImage: './trekmate-banner-hero.png',
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
        title: 'Work Hive',
        tagline: 'Endorsement-based hiring, rebuilt from a broken prototype into a working product',
        category: 'Web Platform · Product Design',
        timeline: 'Solo, rapid iteration',
        role: 'Product Designer — audited, redesigned and shipped',
        liveLink: 'https://kabir192003.github.io/WorkHive/',
        repoLink: 'https://github.com/Kabir192003/WorkHive',
        overview: [
            "Work Hive is a hiring platform built around a simple idea: a short, named endorsement from someone you actually worked with tells a recruiter more than another line on a resume. I inherited a high-fidelity click-through of it — good bones, real visual craft — but almost nothing underneath actually worked. Applying to a job silently did nothing. Every company on the ratings page showed the same hard-coded write-up. The 'people you may know' panel showed contacts with no relationship to whatever job you'd just been looking at.",
            "My job was to close that gap: take a design that looked finished and make it behave like a real product, without losing the visual language that made it worth building in the first place. That meant auditing every screen as a user would actually use it, deciding what 'done' meant for each core flow, and rebuilding the data and interaction layer underneath the UI — not just patching the parts that were visibly broken."
        ],
        impactMetrics: [
            { label: 'Core flows taken from broken to working', value: '6' },
            { label: 'Companies & roles modelled for real filtering', value: '100 / 112' },
            { label: 'Cities in the live cost-of-living tool', value: '15' }
        ],
        tools: ['Rapid UI iteration', 'Component-driven prototyping', 'Shipped as a live, working build'],
        problem: "The prototype read well in a click-through but fell apart under real use. Search returned six jobs total, so every filter looked broken because there was nothing to filter. Apply Direct — the platform's entire reason for existing — didn't navigate anywhere from the job list. Company Ratings showed one company's numbers no matter which company you picked. Connections showed a network with no relationship to the role you came from. The profile page was read-only. And the top navigation had grown to nine items plus a row of unlabeled icons, so on a normal window it visibly overlapped itself.",
        solution: "I treated this as a systems problem, not a set of one-off fixes. Every screen that displayed data needed real data behind it, so I modelled 100 companies across 12 industries and 112 roles across 11 job functions and five seniority levels — enough variety that facet filters, company search and role matching all produce genuinely different results instead of the same six items reordered. Every flow that ended in a dead click got rebuilt end to end: Apply Direct now validates, accepts a resume, and lands a real record in the candidate's dashboard; Connections now reflects the specific job and company you arrived from, not a fixed default. And the navigation got restructured around what a candidate actually does most — search and apply — with everything else collapsed behind a single 'More' menu.",
        process: [
            { step: '01', title: 'Use it like a candidate would', desc: 'Clicked every button on every screen and logged what actually happened versus what the UI implied would happen — the fastest way to find out how much of a "finished" design is load-bearing.' },
            { step: '02', title: 'Prioritise by the core loop', desc: 'Search, apply, get endorsed. Anything that blocked that loop got fixed first; supporting screens (settings, mentorship, events) came after.' },
            { step: '03', title: 'Rebuild the data underneath', desc: 'A UI with three sample jobs can\'t honestly demonstrate a filtering system. I generated a large, varied dataset so the existing filter and search logic had something real to prove itself against.' },
            { step: '04', title: 'Make screens context-aware', desc: 'Company Ratings, Connections and Quick Links were static regardless of what you clicked. I rewired each to respond to the actual company, city or role in front of the user.' },
            { step: '05', title: 'Ship it, not just show it', desc: 'The prototype is deployed and clickable at the link above — not a set of static frames. If a flow is described here, it works on the live site right now.' }
        ],
        designDecisions: [
            {
                image: './workhive/search.jpg',
                title: 'A dataset large enough to make the design tell the truth',
                description: 'Thirteen refine-search facets on six jobs is a UI that can\'t be honestly evaluated — every filter either returns everything or nothing. I built out 112 roles across 11 functions, five seniority bands and 100 companies so the search and filter interactions the original design promised actually have something real to demonstrate against.'
            },
            {
                image: './workhive/apply.jpg',
                title: 'Apply Direct actually applies',
                description: 'This is the platform\'s core conversion moment, and it was completely non-functional — the button had no handler. I rebuilt it as a real form with validation, a working resume upload, and a submission that creates a genuine record in the candidate\'s dashboard, including an optional endorsement request tied to that specific role.'
            },
            {
                image: './workhive/ratings.jpg',
                title: 'Company Ratings that respond to the company you picked',
                description: 'Every company page showed identical numbers. I designed a rating model that produces a distinct, consistent score and review breakdown per company per category (compensation, benefits, culture, career progression), so switching companies changes what you see — the way a real ratings product has to.'
            },
            {
                image: './workhive/connections.jpg',
                title: 'A network that reflects the job you came from',
                description: 'Clicking "Refer someone" from a specific role used to drop you into a generic, unrelated network view. I rebuilt Connections to carry that context through — the people, company and match score shown are tied to the actual job you clicked from, with a visible "showing people connected to X" state so it\'s never ambiguous why you\'re seeing what you\'re seeing.'
            },
            {
                image: './workhive/cost.jpg',
                title: 'A cost-of-living tool that calculates something',
                description: 'The calculator had a single free-text field and a static result. I rebuilt it around real city and currency selectors — 15 cities spanning the Gulf, South Asia and other global hubs, 10 currencies — so changing either input live-recomputes every line item, not just a headline number.'
            },
            {
                image: './workhive/profile.jpg',
                title: 'A profile you can actually edit',
                description: 'The candidate profile — the thing a recruiter judges you on — had no edit state at all. I added one: name, headline, location, skills and each experience entry become real inputs, with add and remove controls, and changes persist after save.'
            }
        ],
        challenges: [
            {
                title: 'Making 100 companies feel distinct without writing 100 company profiles by hand',
                solution: 'Hand-authoring unique ratings, review counts and category breakdowns for 100 companies wasn\'t realistic. I designed a deterministic model that derives each company\'s numbers from its own identity, so the same company always shows the same figures across visits, every company is genuinely different from its neighbours, and nothing needed writing by hand — the difference between the page reading as flexible versus wallpapered was in whether that variation held up under repeated use.'
            },
            {
                title: 'A navigation bar that broke itself on first load',
                solution: 'After collapsing the top navigation, it intermittently rendered with two sections overlapping on the very first paint. I traced it to a flex-grow calculation racing the browser\'s first layout pass, and rebuilt the header to size itself with a self-pushing margin instead of grow, which removed the dependency on layout-timing entirely rather than papering over the symptom.'
            }
        ],
        outcomes: [
            "Every core screen — Home, Search, Job Detail, Apply, Company Ratings, Connections, Salaries, Cost of Living, Relocation, Profile, Messages, Onboarding, Settings — is live and clickable, not a static frame.",
            "The candidate's primary loop (search a role, apply, request an endorsement) now works end to end and is verifiable on the deployed link, not just described in a deck.",
            "Search, company lookup and the connections network all run against a 100-company, 112-role dataset, so the filtering UI the original design promised is genuinely exercised rather than looking broken on contact.",
            "Shipped as a public, working build rather than a private file — the fastest way I know to make a design case study verifiable instead of just asserted."
        ],
        reflections: "The gap between a design that looks finished and a product that behaves like one is almost always in the parts that don't show up in a click-through — what happens on the tenth click, not the first. This project sharpened how I audit: assume nothing is wired until I've clicked it myself, and treat a screen with three sample rows the same way I'd treat a screen with none, because both are demos, not products. If I kept going, the next layer would be persistence (the app resets on reload) and a real backend behind the endorsement flow, which is the natural next step once the front-end behaviour is trustworthy.",

        heroImage: './workhive/hero.jpg'
    },
    project3: {
        title: 'The Hunger Games',
        category: 'UX Research & Comparative Analysis',
        timeline: '1 Month',
        role: 'UX Researcher',
        overview: [
            "I use Swiggy and Zomato daily, and as a designer I couldn't ignore how differently they solve the exact same problem. Both platforms serve identical core functions, yet one prioritizes minimal, frictionless speed while the other leans into feature depth and discovery. I wanted empirical data on which approach actually wins.",
            "I independently designed and conducted a rigorous mixed-methods UX study: heuristic evaluation of both apps against Nielsen's principles, followed by a structured task-based survey across 48 active users. I synthesized 800+ raw data points into 5 actionable UX principles.",
            "This was not about picking a winner. I extracted actionable intelligence on the trade-offs between cognitive load, feature richness, and user trust in hyper-competitive markets, producing strategic recommendations for both platforms."
        ],
        impactMetrics: [
            { label: 'Survey Participants', value: '48' },
            { label: 'Data Points Analysed', value: '800+' },
            { label: 'Core Insights', value: '5' }
        ],
        tools: ['Google Forms', 'FigJam', 'Miro', 'SPSS', 'Notion'],
        problem: "Despite offering comparable services, Swiggy and Zomato take vastly different UX approaches to navigation, checkout, personalization, and support. No rigorous empirical data existed on how these differences actually impacted user satisfaction. I formulated the core research question: Which platform delivers a superior end-to-end experience, and what specific micro-interactions drive that perception?",
        methodology: "I designed and executed the complete research methodology independently. First, I conducted a heuristic evaluation of both applications against Nielsen's 10 usability principles. Then I deployed a structured, task-based survey to 48 active users, capturing quantitative satisfaction scores and qualitative pain points across 5 controlled stages: Onboarding, Discovery, Checkout, Delivery Tracking, and Support.",
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
            "Synthesized 800+ raw data points from 48 participants into 5 core UX principles for high-frequency transactional app design.",
            "Proved empirically that 'Speed to Checkout' outweighs 'Discovery Features' when user intent is delivery, a finding directly applicable to any transactional mobile app.",
            "Produced actionable strategic recommendations for both platforms, demonstrating my ability to deliver research outputs that drive real product decisions."
        ],
        reflections: "This study reinforced my core belief: beautiful UI is irrelevant if the architecture introduces friction during a high-intent task. The biggest takeaway was learning to design surveys that isolate journey stages rather than asking generic preference questions. If I expanded this, I would incorporate eye-tracking and task-timing for even stronger data.",

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
            "People make dozens of micro-decisions daily, from choosing a laptop to picking a framework, but turning to the internet for help means biased articles and toxic forums. I saw an opportunity to build something better: a fast, community-driven platform for real decision-making.",
            "'This or That' is a full-stack community platform I architected and built as the technical lead of a 4-person team at Trinity College Dublin. Users pose dilemmas, the community votes, and a personalized feed ensures you only see decisions relevant to your expertise. The app is live and deployed with 25+ beta users.",
            "I took complete ownership of the system architecture, database design, the entire React frontend, and all UI/UX design. I single-handedly built every screen, designed the NoSQL schemas powering the personalized feed algorithm, and led the team through code reviews, merge sessions, and API contract alignment."
        ],
        impactMetrics: [
            { label: 'System Architecture', value: '100%' },
            { label: 'Time to MVP', value: '3 Mos' },
            { label: 'Platform Users (n=25)', value: 'Beta' }
        ],
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
        problem: "Existing Q&A platforms like Quora or Reddit are text-heavy and demand significant cognitive effort. When someone just wants a quick consensus on 'Logitech MX Master vs Apple Magic Mouse', they shouldn't need to read 50 comments. Our technical challenge as a team: coordinating complex full-stack features, including a personalized feed algorithm and anonymous posting, across multiple developers within a strict 3-month academic deadline.",
        solution: "I engineered the platform architecture around binary/multi-choice polling with threaded discussions. I designed the database to dynamically connect user preferences to the feed generation algorithm. My UI delivers frictionless single-click voting with instant visual feedback via animated progress bars. For sensitive topics, I implemented secure anonymous posting that decouples user IDs from public API responses while maintaining full data integrity.",
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
            "Delivered a fully functional, deployed full-stack application within the aggressive 3-month Trinity College timeline. The app is live and serving 25+ beta users.",
            "Demonstrated full-stack versatility: I personally bridged database architecture, backend API design, and complete frontend implementation as the team's technical anchor.",
            "Established and enforced the Git branching strategy, API contracts, and code review standards that kept a 4-person team shipping without merge conflicts.",
            "The architecture I designed (NoSQL schemas, RESTful APIs, React state management) handled real concurrent users without performance degradation."
        ],
        reflections: "This project proved that investing in architecture and API contracts before writing code pays for itself many times over. Because I designed the database schemas and Figma prototypes upfront, the team worked in parallel with zero blocking dependencies. Next step: real-time WebSockets for live voting updates.",

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
