export const projectsData = {
    project1: {
        title: 'Trek Mate',
        tagline: 'An outdoor gear storefront rebuilt around one idea: independent makers, scored on what actually matters',
        category: 'E-commerce · Product Design',
        timeline: 'Solo redesign',
        role: 'Product Designer — repositioned, redesigned and shipped',
        liveLink: 'https://kabir192003.github.io/Trek-Mate/',
        repoLink: 'https://github.com/Kabir192003/Trek-Mate',
        overview: [
            "Trek Mate started as a fairly generic outdoor-gear storefront — a product grid, a cart, the usual e-commerce scaffolding. It worked, but it didn't say anything. Big-box gear sites already do 'browse tents, filter by price' perfectly well, and a student project that just re-skins that pattern isn't a reason for anyone to choose it over Amazon.",
            "I redesigned it around a specific point of view instead: gear from independent makers, scored on the things that actually decide a purchase outdoors — weight, durability, pack volume — not marketing copy, and field-tested before it ships rather than dropped straight from a warehouse. That positioning had to show up in the writing, the photography direction, and the actual mechanics of browsing and buying, not just the hero copy.",
            "The result is a live, working storefront — real category and price filters across 25 items in eight gear categories, a wishlist and cart that hold state across the session, and an account section with order history, saved addresses and payment on file. Every screen in this case study is a screenshot of the deployed build, not a Figma frame."
        ],
        impactMetrics: [
            { label: 'Gear categories, real filters', value: '8' },
            { label: 'Independent maker brands', value: '7' },
            { label: 'Account sections built', value: '5' }
        ],
        tools: ['Positioning & copy', 'Component-driven UI', 'Shipped as a live, working build'],
        problem: "The original version had the shape of an e-commerce site without a reason to exist. Nothing about the browsing experience, the copy, or the product photography suggested why this storefront was different from any other — a shopper had no reason to trust it over a marketplace they already use. Underneath that, the usual e-commerce mechanics were themselves shallow: a handful of placeholder products, filters with nothing real to filter, and account pages that were static mockups rather than something a returning shopper could actually use.",
        solution: "I rebuilt the product around a specific promise — independent makers, field-tested gear, scored on weight and durability rather than marketing claims — and let that promise shape every layer, not just the homepage headline. That meant real editorial photography direction instead of stock-catalogue shots, copy that argues a point ('Scored on what matters', 'Field-tested, not just sold') instead of describing a feature, and a catalogue built out to 25 products across eight categories and seven maker brands so the price, rating and category filters have something genuine to work against. Wishlist, cart and the account section (orders, addresses, payment, notifications) all hold real state, so the site behaves like something a shopper could actually return to rather than a single click-through path.",
        process: [
            { step: '01', title: 'Find the actual point of view', desc: 'A generic gear store has no reason to win against Amazon. I settled on independent makers and field-testing as the thing this storefront is actually for, before touching a single screen.' },
            { step: '02', title: 'Let positioning drive the writing', desc: 'Every line of copy — hero, empty states, footer — got rewritten to argue that point of view rather than describe a feature. "Your pack is empty" instead of "Cart (0)".' },
            { step: '03', title: 'Build a catalogue worth filtering', desc: 'Modelled 25 products across 8 categories and 7 maker brands with real prices, ratings and badges (Bestseller, New, Editor\'s Pick), so category, price-band and rating filters return genuinely different results.' },
            { step: '04', title: 'Make the account section real', desc: 'Wishlist, cart and profile needed to hold state, not reset on navigation — orders, saved addresses and payment on file, editable rather than static labels.' },
            { step: '05', title: 'Ship it, not just show it', desc: 'The result is deployed and clickable at the link above. If a flow is described in this case study, it works on the live site right now.' }
        ],
        designDecisions: [
            {
                image: './trekmate-v2/tm-landing.jpg',
                title: 'A homepage that argues a point instead of describing a feature',
                description: 'The three-card strip under the hero — "Scored on what matters," "Field-tested, not just sold," "Independent makers only" — is the entire positioning of the redesign compressed into a scannable moment. A visitor who reads three lines understands why this storefront is different before they ever open a product page.'
            },
            {
                image: './trekmate-v2/tm-browse.jpg',
                title: 'Filters with something real to filter',
                description: 'Category counts down the left rail (Tents · 3, Hiking Boots · 3, Winter Apparel · 4...), a price range and a rating threshold — ordinary e-commerce facets, but only honest if the catalogue behind them is real. 25 products across 8 categories and 7 maker brands means picking "Under $100" or "4.5 & up" actually changes what\'s on screen instead of quietly returning the same three items.'
            },
            {
                image: './trekmate-v2/tm-wishlist.jpg',
                title: 'Saved gear that persists, with a reason for each item',
                description: 'Wishlisting a product anywhere in the catalogue lands it here with its badge intact — Editor\'s Pick, Bestseller — so a returning shopper sees not just what they saved but why it stood out the first time. The heart icon in the header badge count and this page always agree, because they read from the same state.'
            },
            {
                image: './trekmate-v2/tm-cart.jpg',
                title: 'An empty cart that still sounds like the brand',
                description: '"Your pack is empty" instead of the generic "Your cart is empty" is a small line, but it\'s the kind of detail that either holds the positioning together or quietly breaks it. Every state in the app, including the ones nobody deliberately designs, got the same pass.'
            },
            {
                image: './trekmate-v2/tm-profile.jpg',
                title: 'An account section built for a returning shopper',
                description: 'Orders, addresses, payment methods and notification preferences, each in its own tab, with account details that are genuinely editable rather than static labels. Most student e-commerce projects stop at the product page; treating the account section as a real surface is what makes the site feel like a store rather than a landing page with a cart icon.'
            }
        ],
        challenges: [
            {
                title: 'Making "field-tested" show up in more than the headline',
                solution: 'It\'s easy to put a trust claim in a hero and never touch it again. I pushed it into the product data itself — badges like Bestseller, New and Editor\'s Pick are assigned per product rather than decorative, ratings vary genuinely across the catalogue instead of clustering near 4.8, and the copy throughout (category descriptions, empty states, footer) keeps returning to weight, durability and pack volume instead of drifting into generic retail language.'
            },
            {
                title: 'Twenty-five products is either a catalogue or a demo, depending on the details',
                solution: 'A product grid with round numbers and repeated prices reads as placeholder data even at a glance. I varied pricing precision ($389 vs $449 crossed out, $78, $525), spread ratings across a real range instead of a narrow high band, and split inventory unevenly across categories (three tents, four winter apparel pieces) rather than a suspiciously even count — the kind of irregularity that makes a dataset read as real rather than generated.'
            }
        ],
        outcomes: [
            "Every core surface — home, browse with working filters, wishlist, cart, profile with account sub-sections — is live and clickable at the link above, not a static frame.",
            "The catalogue (25 products, 8 categories, 7 maker brands) is large and varied enough that category, price and rating filters produce genuinely different results rather than reordering the same handful of items.",
            "Wishlist, cart and account state persist across navigation, so the site behaves like something a shopper could return to rather than a single scripted path.",
            "The positioning — independent makers, field-tested, scored on what matters — shows up consistently from the hero copy down to empty-state microcopy, not just on the homepage."
        ],
        reflections: "The lesson from this one wasn't visual — it was that a point of view has to survive contact with the boring screens. It's easy to nail a hero and let the cart, the empty states and the account section drift back into generic e-commerce defaults. Holding the same positioning together through the parts nobody screenshots for a portfolio is most of what separates a redesign that reads as considered from one that reads as a skin. If I kept going, the next layer would be a real product detail page with the same field-tested framing — spec sheets, trail-condition notes — since right now that promise is strongest on the browse grid and thins out past it.",

        heroImage: './trekmate-v2/tm-hero-bg.jpg'
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
    },
    project6: {
        title: 'StyleBook AI',
        tagline: 'A written brand description in, a verified, exportable design system out — built and shipped with a team of four',
        category: 'AI Product · Design Systems · Team Lead',
        timeline: '9 weeks build, 3 weeks research — Summer 2026',
        role: 'Project lead — idea, architecture, and nearly all implementation',
        liveLink: 'https://stylebook.site',
        repoLink: 'https://github.com/Kabir192003/StyleBookAI',
        overview: [
            "StyleBook AI takes a plain-language brand description — \"a calm, premium skincare brand aimed at Gen Z\" — and returns a complete design system for it: a colour palette with each colour assigned a role, a heading and body font pairing, a type scale, spacing and radius values, and styling for ten interface components. Every part is editable by hand afterwards, and the finished system exports as production code in nine formats or imports straight into Figma as editable components through a plugin I built and published to the Figma Community.",
            "It was my idea, proposed to a team of four at Trinity College Dublin, and I acted as project manager and lead engineer across it: I chose the stack, wrote the architecture, and carried out the implementation across the AI pipeline, the token system, the live editor, the export formats, authentication, the database layer and the Figma plugin. Of 212 commits in the repository, 207 are mine — a number that says a lot about where the building happened and very little on its own about where the thinking happened, since two teammates' research and testing shaped several of the decisions I'm proudest of.",
            "The idea came from a genuine gap: good tools exist for picking colours, good tools exist for browsing fonts, and almost nothing connects the two and carries the result through to something a developer can actually build with. Coolors gives you five colours. Google Fonts shows you a typeface on a white page. Neither can tell you whether that colour and that font actually work together, and neither produces anything portable. The bet underneath StyleBook is that design decisions are only correct in relation to each other — so the system, not the individual swatch, had to be the unit of work."
        ],
        impactMetrics: [
            { label: 'Colours, fonts & themes in the library', value: '1,922 / 1,933 / 90' },
            { label: 'Export formats, plus Figma & PDF', value: '9' },
            { label: 'Commits, mine of 212', value: '207' }
        ],
        tools: ['Next.js 14 · TypeScript · Tailwind', 'Google Gemini for generation', 'Supabase · Zustand · Zod', 'Figma Plugin API'],
        problem: "Every comparable tool covers one piece of the problem and stops. Palette tools like Coolors or Realtime Colors give you five colours with no way to check them against real type. Typography tools like Google Fonts or Fontjoy show a face on a blank page, disconnected from any colour decision. Design-token infrastructure like Tokens Studio assumes a design system — and a design team — already exists. AI interface generators like v0 or Uizard produce a screen, not a system, and hand back a picture or a slab of code rather than a token layer a product can grow on. Nothing spans the full path from a written description to something exportable, and the market research the team ran confirmed it: the honest positioning was the connection between those stages, not any single stage on its own.",
        solution: "I built the product around a hard rule: anything the AI produces has to be checked for real accessibility before the user ever sees it, not handed over on trust. Every colour pair the system generates is measured in code with the same WCAG contrast implementation the interface renders — not asserted by the model — repaired by adjusting lightness while preserving hue if it fails, and reported as a deviation rather than silently swapped if it genuinely can't be saved. The library itself holds nearly 2,000 colours and over 1,900 fonts; a shortlisting step tokenises the brief and samples a capped, rotating candidate list so the model always has real options to choose from rather than inventing a font that has no file to load. The generated result opens live in Studio, a real editing surface built against a realistic rendered page rather than a sheet of isolated components, and leaves through nine code export formats or a Figma plugin that reads actual rendered DOM geometry rather than reconstructing layout from token values — the difference between a system that's portable in theory and one that's portable in practice.",
        process: [
            { step: '01', title: 'Split scope by what could ship first', desc: 'Debated a narrower "nice colour tool" against the fuller pipeline. Chose to build the browsable library first, since it works with zero AI, and treat generation as a layer on top — so there was always something real to show even mid-build.' },
            { step: '02', title: 'Get the token architecture right before building on it', desc: 'A full quiet week (week 5) went into the layering model alone: raw palette values feeding derived semantic roles, feeding an alias layer components actually read from, with per-component overrides on top. Getting that ordering wrong would have been expensive to unwind later.' },
            { step: '03', title: 'Make the AI\'s claims checkable, not trustable', desc: 'After the generator produced body text at 1.02:1 contrast — and separately claimed a button passed 4.5:1 when it measurably didn\'t — every colour pair the model proposes gets measured and repaired in code, and the written explanation is regenerated from the real numbers afterward.' },
            { step: '04', title: 'Rebuild the landing page around the working product', desc: 'The first version was a scroll-driven narrative that buried the actual generator below a story. The shipped version puts a live, working prompt box directly in the hero, with the scroll story kept underneath as optional depth.' },
            { step: '05', title: 'Match reality instead of modelling it', desc: 'The first Figma export reconstructed layout from token values on the server and was subtly wrong throughout. The version that shipped reads real rendered geometry from the browser — a specific, transferable lesson about measuring over modelling.' },
            { step: '06', title: 'Audit, then ship the plugin', desc: 'A formal accessibility pass found and fixed real failures (muted text at 1.8:1 in ~200 places, an unreachable mobile nav below 640px) before the Figma plugin went through Figma\'s own review — a security disclosure and a reviewer-requested screen recording, not a rubber stamp.' }
        ],
        designDecisions: [
            {
                image: './stylebook/sb-hero.png',
                title: 'A hero built like a printer\'s proof, with a number that has to be true',
                description: 'The landing page reads like a press sheet — registration marks, a stepped headline, a live prompt box wired to the real generator. The 13.0:1 contrast figure sitting in the hero isn\'t a design detail, it\'s computed live from whatever palette is currently on screen. It would have been easier to hardcode it and nobody would have noticed, but a tool whose entire argument is that it measures things rather than asserts them can\'t have a fake measurement in its own shop window.'
            },
            {
                image: './stylebook/sb-verified.png',
                title: 'Verified, not claimed — the mechanic the whole product is built on',
                description: 'Every generated system ships with a panel that shows its own work: which tokens were adjusted, by how much, and why — "colors.primary asked for #d0c9c3, shipped #af815a... saturation was 12%, too washed out to read as an action colour." That panel exists because the alternative — a model that writes confidently about numbers it never calculated — is precisely the failure mode that makes AI design tools untrustworthy, and it was a real bug I hit in testing, not a hypothetical.'
            },
            {
                image: './stylebook/sb-studio.png',
                title: 'Studio: a live product page, not a sheet of isolated swatches',
                description: 'Editing happens against a realistic rendered interface — here, a member dashboard for the generated "Aether Skincare" brand — because a colour or a component only reveals whether it actually works once it sits next to the others in a real layout. Getting every one of ten components, across four interaction states, in light and dark, to genuinely reflect an edited token rather than quietly fall back to a stale one took longer than getting the first working version on screen — it\'s the part of the project with the most surface area for something to be subtly wrong.'
            },
            {
                image: './stylebook/sb-colors.png',
                title: 'The colour wall: a library built to be browsed, not just generated from',
                description: 'Nearly 2,000 shades, hung salon-style with names, hex values and mood tags, searchable and filterable by family. This exists because the AI generator was always meant to be a layer on top of something that works without it — building the browsable library first meant there was real, usable product even in weeks when the generation pipeline was still broken.'
            }
        ],
        challenges: [
            {
                title: 'Making AI output trustworthy',
                solution: 'The hardest problem in the project, and the one I\'m most glad was solved properly. During testing the generator produced body text at a contrast ratio of 1.02:1 — very nearly invisible — and separately wrote reasoning claiming a button met 4.5:1 when it measurably didn\'t. The fix was to stop trusting the model on anything measurable: every colour pair is now measured in code, repaired by adjusting lightness while preserving hue, and the written explanation is regenerated from the real numbers afterward. If a colour genuinely can\'t be saved that way, the system reports it as a deviation instead of silently substituting something the user never chose.'
            },
            {
                title: 'Matching Tokens Studio\'s exact export format',
                solution: 'Tokens Studio\'s own documentation describes its JSON shape loosely enough that a plausible reading still produces a file that imports without error and simply shows nothing — no stack trace, no error to chase, just a blank result. It took roughly six attempts across three days, working through a reference export already known to import correctly and comparing our output against it property by property until the exact mismatch surfaced.'
            },
            {
                title: 'Fixing the reported bug instead of the convenient one',
                solution: 'A teammate reported outline buttons disappearing in dark mode. The first fix — raising every border in the app to a 3:1 ratio — technically worked but made every card, table and modal border roughly two and a half times darker in both light and dark mode, an unrequested redesign that also broke a deliberate rule distinguishing control borders from decorative hairlines. The correct fix was narrower: a separate role used only where a border is a control\'s entire boundary. The outline button went from 1.32:1 to 3.04:1 in dark mode; card borders didn\'t move at all. The lesson generalised — the fix that makes the symptom disappear isn\'t always the right one, and the difference is usually only visible if you measure something nobody asked about.'
            }
        ],
        outcomes: [
            "Shipped a working, publicly deployed application: 1,922 colours, 1,933 fonts and 90 themes across 12 categories, 9 code export formats plus PDF and Figma, 10 editable components with 4 interaction states each, and 28 passing tests across a 32-route TypeScript codebase.",
            "Published the StyleBook Import plugin to the Figma Community — a review process that included a security disclosure and a reviewer-requested screen recording, not a file upload — and rebuilt the export pipeline to measure real rendered DOM geometry rather than reconstruct layout, fixing most fidelity problems at once.",
            "Ran a formal accessibility audit that found and fixed real failures (muted text at 1.8:1 in roughly 200 places, a mobile nav completely unreachable below 640px), on top of accessibility that was built into the token layer from the start rather than bolted on.",
            "Presented at a three-day public showcase, giving the same full technical walkthrough to every visitor regardless of background — the recurring response was that people hadn't seen a tool that went from description to a checked, editable, exportable system before, and several suggested it had genuine commercial potential."
        ],
        reflections: "The habit I'll carry forward furthest is verifying instead of asserting — it started as a narrow decision not to trust a language model's arithmetic and became a general one: it's why the accessibility audit measured real rendered values instead of trusting a colour's name, why the privacy policy was written only after reading the validation code it describes, and why every factual claim in the individual report behind this project was checked against the codebase before being presented. The honest gaps are worth naming too: there's no rate limiting on the AI endpoint yet, no automated accessibility testing in the build pipeline, and no testing with real assistive-technology users — the standard that actually matters and the one I can't claim. Structurally, I'd pair on the first two or three features next time rather than dividing the build into clean vertical slices from day one; the split I chose meant I was the only person who understood how the pieces connected, which shipped the product in nine weeks but wouldn't scale to a longer one.",

        heroImage: './stylebook/sb-hero-bg.jpg'
    },
};
