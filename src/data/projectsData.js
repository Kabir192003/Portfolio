// Case-study content. Every page renders through CaseStudyTemplate.
// Copy rules: no em dashes; every claim should be checkable against the live
// product, the repo or a cited source; planned metrics are labelled as such.
export const projectsData = {
    project1: {
        title: `Trek Mate`,
        problemStatement: `People trying to carry less plan in one place and shop in another. Pack apps add up weights but sell nothing; gear stores sell one product at a time and quote the maker's weight. So the real question, "is this lighter tent worth the money for my pack?", gets worked out by hand in a spreadsheet.`,
        tagline: `An outdoor gear store for independent makers, designed around the whole pack instead of the single product`,
        category: `E-commerce · Product Design`,
        timeline: `Solo · concept to live build`,
        role: `Product designer and front-end developer, solo: positioning, UX, UI and build`,
        liveLink: `https://kabir192003.github.io/Trek-Mate/`,
        overview: [
            `Trek Mate is an outdoor gear store for people who plan trips around weight. It sells gear from independent makers, and every listing leads with what decides a purchase on trail: what it weighs, how small it packs and how it held up in field testing, rather than marketing copy.`,
            `I designed and built it on my own, from positioning to the deployed React storefront: search and browse with real filters across 25 products, product pages, saved gear, cart, checkout and an account area that keeps its state between visits.`,
            `What makes it different is the Pack Planner. You plan your whole pack inside the store, see your base weight live, and get lighter swaps from the catalogue ranked by what each gram saved costs you. It turns the store from a place that sells boxes into one that helps you decide what to carry.`
        ],
        impactMetrics: [
            { label: `Gear categories, real filters`, value: `8` },
            { label: `Independent makers`, value: `7` },
            { label: `Products, each with a reason to compare`, value: `25` }
        ],
        tools: [`Positioning & copy`, `React · TypeScript · Vite`, `Shipped as a live, working build`],
        users: [
            { who: `Weight-conscious backpackers`, need: `Know what their whole kit weighs, where the weight sits, and where money saves the most grams.` },
            { who: `Hikers moving up a level`, need: `Go from day hikes to overnights without buying the wrong thing twice, with a clear list of what is missing for the trip.` },
            { who: `Independent makers`, need: `A storefront that sells on measured quality and field evidence, where a small workshop can beat a big brand on the numbers.` }
        ],
        problem: `Shopping for a lighter pack is split across two kinds of tool that don't talk to each other. Gear stores, from big-box retailers to cottage-gear marketplaces, list each product on its own with the maker's quoted weight, and a cart totals your price, never your weight. Pack-weight apps like LighterPack and Packstack understand a whole pack, but they sell nothing and suggest nothing: you type every weight in by hand, and Packstack, for one, doesn't connect to any store or recommend lighter swaps. Hikers bridge the gap with spreadsheets that work out dollars per ounce saved, a metric the ultralight community uses to decide whether an upgrade is worth it, while forum threads regularly report gear arriving heavier than its listed weight. The decision people actually make, "what should I change in my pack, and what will it cost me?", has no home.`,
        differentiator: {
            status: `In build`,
            title: `The Pack Planner`,
            body: `Plan your whole pack inside the store. Add gear from the catalogue or anything you already own, set the trip, and Trek Mate shows your base weight live, flags what is missing for those conditions, and ranks lighter swaps by cost per gram saved.`,
            points: [
                `Base weight, worn weight and a breakdown by system, updated as you plan.`,
                `Like-for-like swaps only: a lighter tent must still sleep your party, and a lighter bag must still be warm enough for the trip's low.`,
                `A swap's real cost depends on what you own: the full price if you already have one, the price difference if you haven't bought either yet.`,
                `One action buys only what is missing; gear you already own stays in the plan.`
            ],
            note: `Designed and specified. Shipping in the next release of the live store.`
        },
        solution: `I designed Trek Mate around the job, not the transaction. Nobody wants a tent; they want a pack light enough for the trip without wasting money. That reframing changes what the store is for: it should help people decide what to carry, then sell them only the pieces that change the answer. Three commitments follow. Weight is the primary attribute everywhere, presented like a measurement rather than a spec, because it is the number people compare. The catalogue has to be varied enough for decisions to be real, so price, weight and rating filters change what you see. And the promise of independent makers and field testing has to survive the quiet screens (empty states, cart, account), not just the hero.`,
        principles: [
            { title: `Decide at the level of the pack`, desc: `A product only looks light or heavy next to what it replaces, so the interface keeps showing that comparison.` },
            { title: `Every number must be checkable`, desc: `Weights say where they came from, and every saving shows its maths.` },
            { title: `Lead with what matters on trail`, desc: `Weight, packed size and field evidence first; colourways and marketing language last.` },
            { title: `The quiet screens carry the brand`, desc: `Empty states, the cart and the account area get the same voice and care as the homepage.` }
        ],
        process: [
            { step: `01`, title: `Frame the job, not the store`, desc: `Wrote the core job before any screen: when I'm planning a trip, I want to see what my whole kit weighs and where the weight is, so I can spend money where it saves the most.` },
            { step: `02`, title: `Map the gap competitors leave`, desc: `Compared gear stores, cottage-gear marketplaces and pack-weight apps on one question: who helps you decide what to change? Stores sell single products, pack apps know your pack but sell nothing, and hikers bridge the two with dollars-per-ounce spreadsheets.` },
            { step: `03`, title: `Set the promise, then test it everywhere`, desc: `Independent makers, field-tested, scored on what matters. Every line of copy, every badge and every empty state was checked against it: "Your pack is empty", not "Cart (0)".` },
            { step: `04`, title: `Build a catalogue worth deciding with`, desc: `Modelled 25 products across 8 categories and 7 makers with varied prices, ratings and weights, so filters return genuinely different results and swaps have real alternatives to rank.` },
            { step: `05`, title: `Design the Pack Planner`, desc: `Specified the flows (add from the store or your own kit, set the trip, read the base weight, apply a swap, buy what's missing) and the rules that keep suggestions honest: like-for-like only, priced by what you own.` },
            { step: `06`, title: `Ship it, then verify it`, desc: `Every flow described here, apart from the Pack Planner marked as in build, works on the live site at the link above.` },
            { step: `07`, title: `Use AI to draft, not to decide`, desc: `Generated first-pass copy and component scaffolding with an AI assistant to move through the mechanical parts faster, then rewrote everything against the positioning by hand. A model can produce ten headlines; it can't tell you which one is true to the brand.` }
        ],
        designDecisions: [
            {
                image: `./trekmate-v2/tm-landing.jpg`,
                title: `A homepage that argues a point`,
                description: `The three-card strip under the hero (scored on what matters, field-tested, independent makers only) compresses the whole positioning into one scannable moment, so a visitor knows why this store is different before they open a single product.`
            },
            {
                image: `./trekmate-v2/tm-browse.jpg`,
                title: `Filters with something real to filter`,
                description: `Category counts down the rail, a price range and a rating threshold: ordinary facets that are only honest if the catalogue behind them is real. With 25 products across 8 categories and 7 makers, choosing "Under $100" or "4.5 & up" actually changes what is on screen.`
            },
            {
                image: `./trekmate-v2/tm-wishlist.jpg`,
                title: `Saved gear that remembers why`,
                description: `Saving a product lands it here with its badge intact (Editor's Pick, Bestseller), so a returning shopper sees not just what they saved but why it stood out. The count in the header and this page always agree because they read from the same state.`
            },
            {
                image: `./trekmate-v2/tm-cart.jpg`,
                title: `An empty cart that still sounds like the brand`,
                description: `"Your pack is empty" instead of "Your cart is empty" is one line, but it is the kind of detail that either holds a positioning together or quietly breaks it. Every state got the same pass, including the ones nobody deliberately designs.`
            },
            {
                image: `./trekmate-v2/tm-profile.jpg`,
                title: `An account built for a returning shopper`,
                description: `Orders, addresses, payment methods and notification preferences, each editable rather than static, because a store only feels real once it remembers you.`
            }
        ],
        challenges: [
            {
                title: `Making "field-tested" show up beyond the headline`,
                solution: `A trust claim is easy to put in a hero and never touch again. I pushed it into the product data instead: badges are assigned per product rather than sprinkled for decoration, ratings vary across a realistic range instead of clustering near 4.8, and the copy keeps returning to weight, durability and pack volume instead of drifting into generic retail language.`
            },
            {
                title: `Twenty-five products: a catalogue or a demo?`,
                solution: `Round numbers and repeated prices read as placeholder data at a glance. I varied price precision ($389 against a crossed-out $449, $78, $525), spread ratings across a realistic range and split inventory unevenly across categories: the kind of irregularity that makes a dataset read as real.`
            }
        ],
        metrics: {
            intro: `These are the measures I'd put on the dashboard at launch. None of them have been collected yet.`,
            items: [
                { name: `Planner to cart`, why: `Share of planning sessions that end with at least one swap in the cart. The core bet is that deciding at the pack level drives purchases.` },
                { name: `Grams saved per order`, why: `Average weight removed from a customer's pack by what they bought. The number the brand should be proudest of.` },
                { name: `Returns on weight-led buys`, why: `If measured weights and like-for-like swaps work, fewer purchases should come back for being heavier or wrong.` },
                { name: `Return visits to a saved pack`, why: `Whether the planner becomes the place people keep their kit, which is what makes the store worth coming back to.` }
            ]
        },
        outcomes: [
            `Every core surface (home, search with working filters, product pages, saved gear, cart, checkout and account) is live and clickable at the link above.`,
            `A catalogue of 25 products across 8 categories and 7 makers, varied enough that filters change results instead of reordering the same handful.`,
            `Saved gear, cart and account state persist between visits, so the store remembers a returning shopper.`,
            `The Pack Planner is designed and specified, and ships in the next release.`
        ],
        reflections: `The lesson here wasn't visual. A point of view has to survive contact with the boring screens: it's easy to nail a hero and let the cart, the empty states and the account drift back into generic defaults. The bigger shift was moving from "what should this store look like?" to "what decision is the customer actually making?". The answer, what to carry and what to change, is what turned a good-looking store into a product with a reason to exist.`,

        heroImage: `./trekmate-v2/tm-hero-bg.jpg`
    },
    project2: {
        title: `Work Hive`,
        problemStatement: `Hiring runs on self-reported resumes that recruiters skim quickly and find hard to trust. The strongest signal, a colleague who will vouch for your work, usually appears only at the reference check near the end, after most decisions are made. Work Hive moves that proof to the front of the application.`,
        tagline: `A hiring platform where named, job-specific endorsements from real colleagues travel with your application`,
        category: `Full-Stack Platform · Product Design`,
        timeline: `Solo · prototype first, then a production build`,
        role: `Product designer and full-stack developer, solo`,
        liveLink: `https://kabir192003.github.io/WorkHive/`,
        overview: [
            `Work Hive is a hiring platform built on one idea: a short, named endorsement from someone who actually worked with you, written for the specific job you're applying to, tells a recruiter more than another line on a resume. Candidates search and apply as usual, but every application can carry proof: who is vouching, how they know you, and what they saw you do.`,
            `I designed and built it end to end. The product spans eighteen screens: search with thirteen refine facets, Apply Direct with resume upload, endorsement requests and messaging, a network you can grow, company ratings, and salary, cost-of-living and relocation tools for candidates weighing a move.`,
            `I worked in two stages on purpose. First a high-fidelity prototype, to walk every flow and find where the experience broke before writing a backend. Then the production build: a real Postgres database on Supabase, email and password accounts, Row Level Security enforced in the database rather than assumed in the interface, and storage for resumes, so everything a candidate does is still there when they come back.`
        ],
        impactMetrics: [
            { label: `Screens on a real, persisted backend`, value: `18` },
            { label: `Companies & jobs in a real database`, value: `100 / 111` },
            { label: `Database tables, every one RLS-protected`, value: `20` }
        ],
        tools: [`React · Vite · React Router`, `Supabase: Postgres, Auth, Storage`, `Row Level Security policies`, `GitHub Actions → GitHub Pages`],
        users: [
            { who: `Candidates`, need: `Stand out with proof rather than adjectives, and know what a move is really worth before they say yes.` },
            { who: `Endorsers`, need: `Vouch for a former colleague in a couple of minutes, for a role they can see, without writing a full reference letter.` },
            { who: `Hiring teams`, need: `A signal they can weigh at a glance: who vouched, how they know the candidate and for which role. The live build is the candidate side; this is who the proof is written for.` }
        ],
        problem: `Every hiring channel asks candidates to describe themselves. Job boards collect resumes and cover letters, which are claims. LinkedIn adds social proof, but both of its forms are weak at the moment of applying: skill endorsements are one-click ticks from anyone in your network, and recommendations are written once, for no particular role, and sit on a profile rather than on an application. The proof hiring teams actually trust, a reference from someone who managed or worked with you, is usually collected by reference-check tools at the end, for finalists only, after most decisions have been made. So the strongest signal arrives last, and most candidates never get to use it.`,
        differentiator: {
            status: `Live`,
            title: `Endorsements scoped to the job, attached to the application`,
            body: `On Work Hive an endorsement is requested for a specific role at a specific company, and it travels with that application. The endorser sees exactly what they're vouching for, writes a short quote and states how they know the candidate, so a hiring team reads proof in context instead of a generic compliment.`,
            points: [
                `Requested from the job itself or during Apply, so the request carries the role and the company.`,
                `Every endorsement names the endorser and their role, and states the basis: how they worked together.`,
                `Accepted endorsements move a visible endorsement score, so candidates can watch their proof build.`,
                `Requests and replies live in one message thread per endorser, so nothing gets lost between apps.`
            ]
        },
        solution: `I framed Work Hive as a trust problem, not a listings problem. Job search is a solved interaction; what's broken is the evidence. So the product is organised around one loop: find a role, apply with real proof, watch that proof build. Everything else (ratings, salaries, relocation costs, mentorship) earns its place by helping a candidate decide whether a role is worth that effort. I also treated the honesty of the interface as a requirement. A filter that returns the same six jobs teaches people that filters don't work, so the catalogue had to be large and varied enough (100 companies, 111 jobs) for every facet to change what you see. And a product that asks people for their applications, resumes and private messages has to earn that trust in its architecture: per-account data is isolated by Row Level Security in the database itself, and I verified the boundary with a second, unrelated account instead of trusting the code that defined it.`,
        principles: [
            { title: `Proof over claims`, desc: `Wherever the interface asks candidates to describe themselves, it also offers a way to show it: a named endorsement, a real resume, a stated basis.` },
            { title: `Every control changes something real`, desc: `A facet, toggle or calculator that does nothing is worse than no control at all. If it ships, it reads and writes real data.` },
            { title: `Money questions come first`, desc: `Salary, cost of living and relocation lead with the candidate's currency, because a move is a financial decision before it is a career one.` },
            { title: `Trust is a property of the system`, desc: `Privacy is enforced where the data lives, not where a button is hidden, and claims about it are tested rather than assumed.` }
        ],
        process: [
            { step: `01`, title: `Frame the trust problem`, desc: `Mapped what each side needs to believe: candidates need to be seen, endorsers need it to be quick, hiring teams need a signal they can weigh. The gap sat between those three, not inside the job list.` },
            { step: `02`, title: `Map the alternatives`, desc: `Compared job boards, LinkedIn endorsements and recommendations, and employer-side reference checks by when the proof appears and who controls it. All three put real proof late, or nowhere.` },
            { step: `03`, title: `Prototype the loops, then walk them`, desc: `Built a high-fidelity prototype first, then clicked every path as a candidate and logged what happened against what the UI promised. It surfaced the gaps cheaply: dead-end applies, ratings that ignored the selected company, a network a new user couldn't grow.` },
            { step: `04`, title: `Make the data honest before the screens`, desc: `Modelled 100 companies and 111 jobs with enough variety that search and all thirteen facets return genuinely different results, so the design could be judged against something real.` },
            { step: `05`, title: `Schema and security boundary first`, desc: `Mapped every screen to the tables it needs, split public reference data from private per-account data, and wrote Row Level Security for all twenty tables before touching the frontend.` },
            { step: `06`, title: `Wire every screen, not just the demo path`, desc: `Settings toggles, onboarding steps and the add-connection flow got the same real persistence as search and apply, so the product doesn't only feel finished in the parts a demo covers.` },
            { step: `07`, title: `Verify the claim independently`, desc: `Signed up a second account and queried the API directly to confirm it could not read the first account's applications, messages or profile.` },
            { step: `08`, title: `Pair with AI on the schema, verify without it`, desc: `Used an AI coding assistant for the mechanical parts: drafting the schema, generating seed data, scaffolding policies. The security claim only counted once it was checked independently of the tool that helped write it.` }
        ],
        designDecisions: [
            {
                image: `./workhive/search.jpg`,
                title: `Search that respects the decision being made`,
                description: `Each card leads with what a candidate weighs first (role, company, location, freshness) and ends with the two signals only Work Hive has: match strength and how many people in your network can endorse you for this role. There is one primary action, Get Endorsed, because that is the step that changes outcomes.`
            },
            {
                image: `./workhive/apply.jpg`,
                title: `Apply Direct, with proof attached`,
                description: `The conversion moment had to be real and calm: two steps, a real resume upload to storage, and an optional endorsement request scoped to this exact job. The application and the file persist to the account, so they are still there tomorrow, on any device.`
            },
            {
                image: `./workhive/ratings.jpg`,
                title: `Ratings that say who gave them`,
                description: `Every score is labelled with how it was produced (verified employee reviews versus aggregated public sources) and shown with its distribution, so a 4.71 can be weighed rather than taken on faith. Switching company or tab changes the numbers because they are derived from the company you picked.`
            },
            {
                image: `./workhive/connections.jpg`,
                title: `A network you can actually grow`,
                description: `Endorsements depend on connections, so a brand-new account with none would be stuck. An Add connection flow (suggested people already on the platform, or someone added by hand) makes the core loop work for every account, not only a seeded demo user.`
            },
            {
                image: `./workhive/cost.jpg`,
                title: `Currency first, then the answer`,
                description: `Salary, cost of living and relocation are money decisions, so currency is the first control rather than a setting buried in a form. The summary tiles answer the question a candidate actually has: what salary would match my current life in the new city?`
            },
            {
                image: `./workhive/profile.jpg`,
                title: `A profile built around proof`,
                description: `The profile leads with the numbers that matter on Work Hive (endorsement score, endorsements received and given, years in the network) above the usual fields. Skills are labelled as endorsed, and every edit is a real write to a real account.`
            }
        ],
        challenges: [
            {
                title: `Proving the security boundary, not just building it`,
                solution: `Row Level Security policies are easy to write and easy to get subtly wrong: a missing with check clause can let a policy read correctly but write anywhere. I signed up a separate account and queried the API directly rather than through the interface, and only treated the schema as done once applications, messages and profile data belonging to someone else came back empty.`
            },
            {
                title: `A seed file too large to load in one go`,
                solution: `The first generated seed file (278 KB) failed midway in the Supabase SQL editor with an unhelpful parser error. Splitting it by table and removing duplicated arrays that bloated every job row fixed the reliability problem and shrank the file at the same time.`
            }
        ],
        metrics: {
            intro: `Work Hive isn't running with real hiring teams yet, so these are the measures I defined for launch, not results.`,
            items: [
                { name: `Endorsed application rate`, why: `Share of applications that carry at least one accepted endorsement: the core behaviour the product exists to create.` },
                { name: `Request to endorsement time`, why: `Median hours from request to accepted endorsement. If it takes days, candidates will apply without it.` },
                { name: `Replies, endorsed vs not`, why: `The real test of the hypothesis: do hiring teams respond more often when proof is attached?` },
                { name: `Guardrail: endorsement quality`, why: `Share of endorsements under ten words or with no stated basis. Growth that turns proof back into one-click ticks would be a failure.` }
            ]
        },
        outcomes: [
            `All eighteen screens are backed by real, persisted Postgres tables. Nothing resets on reload.`,
            `Verified, not assumed: a second real account could not read the first account's applications, messages or profile through direct API calls.`,
            `The candidate's core loop works end to end against a live database: search, apply with a real resume upload, request an endorsement, get accepted and watch the score move.`,
            `Public and clickable at the link above, with its own Supabase backend and a seeded demo account for anyone who doesn't want to sign up.`
        ],
        reflections: `The distance between a design that looks finished and a product that behaves like one sits in the parts a click-through never shows: the tenth click, and what is still there when you come back tomorrow. Prototyping first found the first kind of gap cheaply; the production build closed the second. The bigger lesson was about trust as a design material. On a platform that asks people for their applications and their colleagues' words, the most important decisions are invisible: where data is isolated, and whether that claim has been tested by something other than the code that wrote it. Next I'd build the hiring-team view, because an endorsement only proves its value on the screen where someone reads it.`,

        heroImage: `./workhive/hero.jpg`
    },
    project3: {
        title: `The Hunger Games`,
        problemStatement: `Swiggy and Zomato do the same job but make opposite bets: one on speed, one on discovery. App-store ratings blend the whole journey into a single star, so they can't show where each app wins or loses trust. This study breaks the journey into stages to find out.`,
        tagline: `Swiggy vs Zomato: a mixed-methods study of two apps solving the same problem in opposite ways`,
        category: `UX Research · Comparative Analysis`,
        timeline: `1 month`,
        role: `UX researcher, solo: study design, fieldwork, analysis and recommendations`,
        overview: [
            `I use Swiggy and Zomato daily, and as a designer I couldn't ignore how differently they solve the same problem. One optimises for minimal, frictionless speed; the other leans into feature depth and discovery. I wanted evidence on which bet serves users better, and where in the journey the difference is actually felt.`,
            `I designed and ran a mixed-methods study on my own: an expert heuristic evaluation of both apps against Nielsen's ten principles, followed by a stage-by-stage, task-based survey of 48 active users. I synthesised more than 800 data points into five principles for high-frequency transactional apps, plus prioritised recommendations for each platform.`,
            `The goal wasn't to crown a winner. It was to understand the trade-offs between cognitive load, feature richness and trust in a market where switching costs nothing and users decide in seconds.`
        ],
        impactMetrics: [
            { label: `Survey participants`, value: `48` },
            { label: `Data points analysed`, value: `800+` },
            { label: `Core principles`, value: `5` }
        ],
        tools: [`Google Forms`, `FigJam`, `Miro`, `SPSS`, `Notion`],
        problem: `Both platforms sell the same thing in the same cities, so the difference users feel is almost entirely UX. Yet the public signals are blunt: an app-store rating averages onboarding, discovery, checkout, tracking and support into one number, and brand loyalty colours every answer to "which app do you prefer?". The useful question was narrower: at which stage of the journey does each approach win or lose people, and which specific interactions drive that?`,
        differentiator: {
            status: `Method`,
            title: `Ask about stages, not brands`,
            body: `Asking which app people prefer measures loyalty, so the survey never asked it. Every question was scoped to one stage of one task, and every score was paired with an open-text reason, so a satisfaction gap could be traced to a specific interaction.`,
            points: [
                `Five journey stages: onboarding, discovery, checkout, delivery tracking and support.`,
                `Every rating paired with an open "why" field, where the actionable detail lived.`,
                `Expert review first to form a hypothesis, user survey second to test it.`,
                `A finding counted only when both lenses pointed the same way.`
            ]
        },
        solution: `I triangulated two lenses. The heuristic evaluation was the expert lens: where each interface breaks established usability principles, stage by stage. The survey was the user lens: how 48 active users actually rated each stage, and why. Splitting the journey into five discrete stages, instead of asking for an overall preference, stopped brand loyalty from masking problems in individual features. The scores told me what users preferred; the open-text answers told me why. Findings became recommendations only when both lenses agreed, and each recommendation was written for the team that would ship it: the problem, the evidence and the smallest change likely to fix it.`,
        principlesTitle: `Research principles`,
        principles: [
            { title: `Ask about stages, not brands`, desc: `Overall preference measures loyalty. Stage-level questions measure the interface.` },
            { title: `Every score needs a reason`, desc: `A 6.8 is a symptom. The open-text answer next to it is the diagnosis.` },
            { title: `Two lenses before a finding`, desc: `An issue counted when the expert review and the user evidence agreed, not when either said so alone.` },
            { title: `Say what the data can't`, desc: `Forty-eight self-reported responses are a strong signal, not proof. The limits are part of the result.` }
        ],
        process: [
            { step: `01`, title: `Form a hypothesis from expert review`, desc: `Ran a heuristic evaluation of both apps against Nielsen's ten principles across five journey stages, and came away with one working hypothesis: for delivery, speed beats depth.` },
            { step: `02`, title: `Design an instrument that cuts through loyalty`, desc: `Wrote a 20-question survey that isolates each stage of the journey, pairing rating scales with open-text reasons so every score could be explained.` },
            { step: `03`, title: `Collect from real, active users`, desc: `Gathered responses from 48 active urban users of both apps, capturing satisfaction and pain points stage by stage.` },
            { step: `04`, title: `Synthesise in the open`, desc: `Clustered open-text answers into themes with affinity mapping in FigJam, then read every theme against the stage scores before it became a finding.` },
            { step: `05`, title: `Turn findings into recommendations`, desc: `Framed each recommendation as the problem, the evidence and the smallest change likely to fix it, for both platforms.` },
            { step: `06`, title: `AI-assisted clustering, human-owned judgement`, desc: `Used an AI tool for a first pass at clustering 800+ open-text data points, mechanical work it does faster than a person. Every theme was checked against the raw responses and weighed against the scores before it counted; the clustering was assisted, the judgement wasn't.` }
        ],
        designDecisions: [
            {
                image: `./hgx1.jpg`,
                title: `Simplicity vs feature depth`,
                description: `Users rated Swiggy noticeably faster to use, largely because of its minimal interface. Zomato carried higher cognitive load but rewarded it with richer discovery for dine-in. Neither is objectively better: each is optimised for a different intent, and the cost appears when an app serves the wrong one.`
            },
            {
                image: `./hgx.jpg`,
                title: `When intent is delivery, speed to checkout wins`,
                description: `For delivery, users put frictionless completion ahead of exploration. Swiggy's auto-applied coupons and short checkout won clearly in the "hungry and in a rush" case, the strongest signal in the study.`
            },
            {
                image: `./hgx2.jpg`,
                title: `Trust comes from transparency, not features`,
                description: `Delivery-tracking accuracy was the biggest driver of trust in the whole survey. Users found Swiggy's tracking more reliable and more honest about delays; one truthful status update did more for trust than any discovery feature.`
            }
        ],
        challenges: [
            {
                title: `Promotional overload made Zomato's home screen exhausting`,
                solution: `Users described a home screen cluttered with ads and flashing banners, which made first navigation overwhelming. Recommendation: keep the promotions but group them into dedicated zones instead of scattering them through the feed, and adopt the auto-applied coupon pattern that already removes friction from Swiggy's checkout.`
            },
            {
                title: `Charges that appear only at the last step`,
                solution: `Delivery fees and surge charges that surface only at checkout, after a user has committed, were a recurring frustration on both platforms. Recommendation: show the full cost, even as an estimate, earlier in the flow. No amount of checkout polish recovers trust once a surprise fee has broken it.`
            },
            {
                title: `Support loops that make a bad delivery worse`,
                solution: `Users criticised automated chatbot loops when orders ran late, and Swiggy rated slightly higher for handing over to a human. Recommendation for both: escalate to a person faster during time-sensitive failures, because a chatbot loop is the wrong tool at the exact moment trust is most fragile.`
            }
        ],
        metrics: {
            title: `What I'd test next`,
            intro: `A survey shows what people report. The next round would measure what they do.`,
            items: [
                { name: `Task timing`, why: `Timed, moderated sessions on the same delivery task in both apps, to confirm the speed gap users reported.` },
                { name: `Fee transparency A/B`, why: `An early cost estimate versus fees revealed at checkout, measured by checkout abandonment.` },
                { name: `Tracking honesty`, why: `Whether proactive delay messages change satisfaction for late orders compared with silent tracking.` },
                { name: `Support handover time`, why: `Time to reach a human during a failed delivery, against satisfaction after the incident.` }
            ]
        },
        outcomes: [
            `Synthesised 800+ data points from 48 participants into five principles for high-frequency transactional apps.`,
            `Found a clear signal that speed to checkout outweighs discovery features when intent is delivery, with tracking transparency as the strongest driver of trust.`,
            `Delivered prioritised, evidence-backed recommendations for both platforms, each framed as problem, evidence and smallest likely fix.`
        ],
        reflections: `This study sharpened a belief I now design by: beautiful UI is irrelevant if the architecture adds friction during a high-intent task. The craft I learned was in the instrument, writing questions that isolate journey stages instead of asking for preference. The limits matter too: 48 self-reported responses from active urban users are a strong signal, not proof, and what people report isn't always what they do. Next I'd add moderated, timed task sessions to measure behaviour directly, and run the fee-transparency change as a real experiment.`,

        heroImage: `./food.jpg`,
        quantData: [
            {
                label: `Task efficiency (speed to checkout)`,
                bars: [
                    { brand: `Swiggy`, value: 9.2 },
                    { brand: `Zomato`, value: 6.8 }
                ]
            },
            {
                label: `Reported cognitive load (lower is better)`,
                bars: [
                    { brand: `Swiggy`, value: 3.4 },
                    { brand: `Zomato`, value: 7.9 }
                ]
            },
            {
                label: `Navigation clarity (discovery phase)`,
                bars: [
                    { brand: `Swiggy`, value: 8.5 },
                    { brand: `Zomato`, value: 7.1 }
                ]
            }
        ]
    },
    project5: {
        title: `This or That`,
        problemStatement: `Small decisions, like which laptop or which framework, get asked on forums built for long debate, where they get buried or derailed. The ones that feel personal often never get asked at all. People need a fast read on what others would pick, from people who know the topic, without exposing themselves.`,
        tagline: `A community decision platform: ask an either-or question, get a fast, relevant answer. Designed and built as the team's technical lead.`,
        category: `Full-Stack Platform · Group Project`,
        timeline: `Feb to May 2026 · 3-month academic build`,
        role: `Technical lead and product designer: architecture, backend, frontend and UX across a four-person team`,
        liveLink: `https://cs7025-this-or-that.onrender.com/home.html`,
        overview: [
            `This or That is a platform for the small decisions people make every day. You pose a dilemma as a poll, the community votes in one tap, and an optional discussion holds the reasoning. A feed matched to your declared interests surfaces the questions you're actually equipped to answer, instead of a chronological firehose.`,
            `I was the technical lead on a four-person team at Trinity College Dublin and owned the system end to end: the data model, the API, the entire React frontend and the UX for every screen. It shipped live and was used by more than 25 beta testers during the course.`,
            `The rest of the team contributed testing, content and coordination. With a fixed three-month deadline, the project lived or died on decisions made in the first two weeks, before a single screen existed.`
        ],
        impactMetrics: [
            { label: `System & database architecture`, value: `Solo` },
            { label: `Time to a deployed MVP`, value: `3 Mos` },
            { label: `Beta testers on the live app`, value: `25+` }
        ],
        tools: [`React`, `Node.js`, `Express`, `MongoDB`, `Figma`],
        users: [
            { who: `Askers`, need: `A quick, honest answer to an either-or question, including ones they wouldn't post under their own name.` },
            { who: `Voters`, need: `Questions they can actually help with, and a way to contribute that takes one tap, not a paragraph.` }
        ],
        problem: `The tools people reach for when deciding are mismatched to the job. Forums like Reddit and Quora are built for depth: settling "Logitech MX Master or Apple Magic Mouse" means reading fifty comments of opinion and tangents. Social media polls are fast, but they reach whoever happens to follow you rather than people who know the topic, and they carry your name, which rules out anything personal. Nothing combined speed, a relevant audience and real anonymity.`,
        differentiator: {
            status: `Live`,
            title: `Fast, relevant, and safe to ask`,
            body: `This or That pairs a one-tap vote with an audience matched by declared interest, and lets sensitive questions be asked anonymously, with anonymity enforced by the server rather than hidden in the interface.`,
            points: [
                `One tap casts a vote and reveals the live split, so contributing costs nothing.`,
                `The feed follows topics each user chose, logic a person can reason about, instead of an engagement model nobody can inspect.`,
                `For career or relationship dilemmas, the API strips the author's identity from public responses while keeping the record intact internally.`,
                `Discussion sits under the result for anyone who wants the why, never in front of it.`
            ]
        },
        solution: `I designed around the decision moment. Someone asking "this or that?" wants an answer in minutes, not a debate, so every choice was judged by how much effort it removes. Voting is a single tap that resolves into the live result, because the platform collapses if voting feels like filling in a form. Posting is a two-field form by default and only expands into image fields when a poll needs them. A machine-learning ranking model was on the table early and I turned it down: three months and four developers was the wrong setting for a recommender nobody could inspect, and a platform for anonymous personal dilemmas needs a feed whose logic people can trust. So personalisation lives in the data model, through the interests users declare, where anyone on the team could read it and reason about it.`,
        principles: [
            { title: `Contribution should cost one tap`, desc: `If voting takes effort, questions die unanswered. The primary action resolves instantly and shows its effect.` },
            { title: `Relevance you can explain`, desc: `People should be able to say why a question is in their feed. Declared interests beat an engagement model for trust.` },
            { title: `Anonymity is a backend promise`, desc: `Hiding a name in the UI is cosmetic. Real anonymity means removing it from what the API returns.` },
            { title: `Depth on demand`, desc: `The answer first, the reasoning underneath. Discussion is there for people who want it, and never in the way.` }
        ],
        process: [
            { step: `01`, title: `Frame the decision moment`, desc: `Defined the core job before any screen: ask in seconds, answer in one tap, see the result immediately. Every later choice was tested against it.` },
            { step: `02`, title: `Data model before interface`, desc: `Designed the schemas for users, polls, votes and interests first, because the personalised feed depends entirely on that model being right.` },
            { step: `03`, title: `One source of truth for four people`, desc: `Built high-fidelity Figma screens so the team shared one picture of layout and interaction, instead of four interpretations of a spec.` },
            { step: `04`, title: `An API the team could build on`, desc: `Built REST endpoints for authentication, interest matching and voting: the layer everything else plugged into.` },
            { step: `05`, title: `Frontend against the real backend`, desc: `Turned the designs into responsive React components wired straight to the real API rather than a mock, so integration problems surfaced early.` },
            { step: `06`, title: `Own the seams`, desc: `Ran code reviews and merges as technical lead, keeping schemas and API contracts in sync while four people shipped against one codebase.` },
            { step: `07`, title: `Let AI handle boilerplate, not architecture`, desc: `Used an AI assistant for repetitive endpoints and component scaffolding, and spent the time saved on what mattered under the deadline: the data model and the personalisation logic.` }
        ],
        designDecisions: [
            {
                image: `./tot-feed.png`,
                title: `A feed you can explain`,
                description: `The feed filters on topics a user chose during onboarding. That logic lives in the schema, not in a ranking pass bolted on afterwards, so the answer to "why am I seeing this?" is always one a person would recognise.`
            },
            {
                image: `./tot-hero.png`,
                title: `A vote that resolves in one tap`,
                description: `Casting a vote is the platform's core action, so it had to feel weightless: one tap moves straight into the live percentage split, with the discussion anchored below for anyone who wants the reasoning, not just the number.`
            },
            {
                image: `./tot-ask.png`,
                title: `Asking is as fast as sending a message`,
                description: `Creating a poll starts as a two-field form and only expands into image uploads when the poll type needs them. Sensitive topics can be posted anonymously, with identity removed on the server.`
            }
        ],
        challenges: [
            {
                title: `Four developers, one full-stack codebase`,
                solution: `With several people touching the schema, the API and the frontend in the same sprint, merge conflicts were a constant risk. I set a strict branching strategy and handled most integration merges myself, since I had the clearest picture of how the schema and API contracts fitted together. Someone has to own the seams.`
            },
            {
                title: `State that stays correct across feed, profile and live votes`,
                solution: `A user's feed, their interests and in-progress votes all had to update consistently, without constant re-renders or stale numbers. I centralised frontend state to avoid both failure modes: boring to describe, and easy to get subtly wrong.`
            }
        ],
        metrics: {
            intro: `The beta was too small for statistics, so these are the measures I'd track at scale.`,
            items: [
                { name: `Time to first vote`, why: `Seconds from opening the app to a first vote: the truest measure of whether contributing is effortless.` },
                { name: `Answered within an hour`, why: `Share of new polls with at least ten votes in their first hour. Askers only come back if answers arrive fast.` },
                { name: `Votes per session`, why: `Whether interest matching surfaces questions people actually want to answer.` },
                { name: `Anonymous share of posts`, why: `How much demand there is for safe asking, and an early warning if anonymity starts attracting abuse.` }
            ]
        },
        outcomes: [
            `Shipped a working, deployed full-stack app inside a fixed three-month timeline, used by 25+ beta testers, not a local demo.`,
            `Owned the full stack: schema, API and every React screen, while the branching strategy and API contracts kept a four-person team integrating without blocking each other.`,
            `Interest-driven personalisation held up under real concurrent voting without needing a rewrite.`,
            `Every screen in this case study is a screenshot of the deployed app at the link above.`
        ],
        reflections: `The lesson that travelled furthest: on a team build, investing in the data model and API contracts before any interface pays for itself many times over, because it's what lets four people work in parallel for three months without blocking each other. The same instinct runs through Work Hive and StyleBook AI: get the model right and the screens built on it stay honest. Next I'd add live updates over WebSockets, since a result currently refreshes on the next fetch rather than the instant someone else votes, and test whether showing the split only after voting changes how people vote.`,

        heroImage: `./tot-hero-bg.jpg`
    },
    project6: {
        title: `StyleBook AI`,
        problemStatement: `Designers juggle a different app for every part of a design system: one for colour, another for fonts, another for accessibility. Nothing connected those steps, so checking happened by hand across separate tools. StyleBook AI turns one written brand description into a single verified, exportable system.`,
        tagline: `A written brand description in, a verified, exportable design system out. Built and shipped with a team of four.`,
        category: `AI Product · Design Systems · Team Lead`,
        timeline: `9 weeks build, 3 weeks research · Summer 2026`,
        role: `Project lead: idea, product design, architecture and nearly all implementation`,
        liveLink: `https://stylebook.site`,
        repoLink: `https://github.com/Kabir192003/StyleBookAI`,
        overview: [
            `StyleBook AI takes a plain-language brand description, such as "a calm, premium skincare brand aimed at Gen Z", and returns a complete design system: a colour palette with each colour assigned a role, a heading and body font pairing, a type scale, spacing and radius values, and styling for ten interface components. Every part is editable by hand, and the finished system exports as production code in nine formats or imports straight into Figma as editable components, through a plugin I built and published to the Figma Community.`,
            `It was my idea. I pitched it to a team of four at Trinity College Dublin and led it as project manager and lead engineer: I chose the stack, wrote the architecture and carried out the implementation across the AI pipeline, the token system, the live editor, the export formats, authentication, the database and the Figma plugin. Of 212 commits, 207 are mine. That says a lot about where the building happened and little about where the thinking happened, because two teammates' research and testing shaped several of the decisions I'm proudest of.`,
            `The bet underneath StyleBook is that design decisions are only correct in relation to each other: a colour is right or wrong next to a typeface, at a size, on a surface. So the system, not the individual swatch, had to be the unit of work.`
        ],
        impactMetrics: [
            { label: `Colours, fonts & themes in the library`, value: `1,922 / 1,933 / 90` },
            { label: `Export formats, plus Figma & PDF`, value: `9` },
            { label: `Commits, mine of 212`, value: `207` }
        ],
        tools: [`Next.js 14 · TypeScript · Tailwind`, `Google Gemini for generation`, `Supabase · Zustand · Zod`, `Figma Plugin API`],
        users: [
            { who: `Founders and solo builders`, need: `A credible, accessible design system from a description, without hiring a designer or learning token tooling.` },
            { who: `Product designers`, need: `A strong first pass they can take control of, edit in context and send to Figma or code without rebuilding it.` },
            { who: `Developers`, need: `Tokens in a format their stack already reads, so the design arrives as code rather than as a picture.` }
        ],
        problem: `Every comparable tool covers one piece of the problem and stops. Palette tools like Coolors or Realtime Colors give you five colours with no way to check them against real type. Typography tools like Google Fonts or Fontjoy show a typeface on a blank page, disconnected from any colour decision. Design-token infrastructure like Tokens Studio assumes a design system, and a design team, already exist. AI interface generators like v0 or Uizard produce a screen, not a system, and hand back a picture or a slab of code rather than a token layer a product can grow on. Nothing spans the full path from a written description to something exportable, and the team's market research confirmed it: the honest positioning was the connection between those stages, not any single stage.`,
        differentiator: {
            status: `Live`,
            title: `Measured, not claimed`,
            body: `StyleBook's edge isn't that it uses AI. It's that nothing the AI proposes reaches the user unchecked. Every colour pair is measured in code with the same contrast maths the interface renders, repaired if it fails, and the written rationale is regenerated from the real numbers, so the explanation can never contradict the result.`,
            points: [
                `Contrast measured with real WCAG maths, never asserted by the model.`,
                `Failing colours repaired by adjusting lightness while keeping hue, so the brand intent survives.`,
                `Anything that can't be saved is reported as a deviation, never silently swapped.`,
                `One path from brief to tokens to Figma and code, instead of four tools and a spreadsheet.`
            ]
        },
        solution: `A brief like "calm, premium, Gen Z" isn't something a rules engine can act on: the tone words imply dozens of decisions about hue, contrast, type weight and spacing that only make sense together. That's the honest case for a generative model here: it can hold the whole brief in view and propose something coherent across every dimension at once. But proposing coherent options isn't the same as being correct about them, so the product draws a hard line between two roles. The AI interprets and drafts: it reads the brief, proposes a first system and writes the reasoning. The person owns intent and judgement: they state the brief, read the verification panel, and decide whether the result really reads as the brand before accepting it, editing it or asking for another pass. The model never certifies its own homework. To keep it choosing from real options, a shortlisting step samples a capped, rotating set from a library of nearly 2,000 colours and over 1,900 fonts, so it can't invent a typeface with no file to load. The result opens in Studio, an editor built around a realistic rendered page rather than a sheet of swatches, and leaves through nine code formats or a Figma plugin that reads real rendered geometry instead of reconstructing layout from token values.`,
        principles: [
            { title: `The system is the unit of work`, desc: `A colour is only right next to a typeface, at a size, on a surface. Every screen edits decisions in context, never in isolation.` },
            { title: `Measure, don't assert`, desc: `Any number the product shows, including the contrast ratio in its own hero, is computed live. The model drafts; code verifies.` },
            { title: `Two speeds, one tool`, desc: `Accept the first pass and export in a minute, or open any token and take full control. Neither path makes the other slower.` },
            { title: `Useful without the AI`, desc: `The browsable library works with zero generation, so the product had value even in weeks the pipeline was broken.` }
        ],
        process: [
            { step: `01`, title: `Analyse what already exists`, desc: `Before designing anything, I studied the competitors: the tools designers already use for colour, type and accessibility. Each does one slice of the job well. Nothing on the market did the whole job in one place.` },
            { step: `02`, title: `Name the problem I live with as a designer`, desc: `To set up one design system you jump between many different apps: one for fonts, one for colours, another for accessibility, and more. Nothing existing solved that scattered workflow end to end, so that gap became the brief.` },
            { step: `03`, title: `Pitch the idea, then build it with the team`, desc: `StyleBook AI was my own idea. I pitched it to the team, they received it well, and we committed to building it together, with me leading the work.` },
            { step: `04`, title: `Split scope by what could ship first`, desc: `Debated a narrower "nice colour tool" against the fuller pipeline. Chose to build the browsable library first, since it works with zero AI, and treat generation as a layer on top, so there was always something real to show, even mid-build.` },
            { step: `05`, title: `Get the token architecture right first`, desc: `A full quiet week (week 5) went into the layering model alone: raw palette values feeding derived semantic roles, feeding an alias layer that components actually read, with per-component overrides on top. Getting that order wrong would have been expensive to unwind later.` },
            { step: `06`, title: `Make the AI's claims checkable, not trustable`, desc: `After the generator produced body text at 1.02:1 contrast, and separately claimed a button passed 4.5:1 when it measurably didn't, every colour pair the model proposes is measured and repaired in code, and the written explanation is regenerated from the real numbers afterwards.` },
            { step: `07`, title: `Rebuild the landing page around the product`, desc: `The first version was a scroll-driven narrative that buried the generator below a story. The shipped version puts a live, working prompt box directly in the hero, with the story kept underneath as optional depth.` },
            { step: `08`, title: `Match reality instead of modelling it`, desc: `The first Figma export reconstructed layout from token values on the server and was subtly wrong throughout. The version that shipped reads real rendered geometry from the browser: a specific, transferable lesson about measuring over modelling.` },
            { step: `09`, title: `Audit, then ship the plugin`, desc: `A formal accessibility pass found and fixed real failures (muted text at 1.8:1 in about 200 places, a mobile nav unreachable below 640px) before the Figma plugin went through Figma's own review, which included a security disclosure and a reviewer-requested screen recording.` }
        ],
        designDecisions: [
            {
                image: `./stylebook/sb-hero.png`,
                title: `A hero built like a printer's proof, with a number that has to be true`,
                description: `The landing page reads like a press sheet: registration marks, a stepped headline, a live prompt box wired to the real generator. The 13.0:1 contrast figure in the hero isn't decoration; it is computed live from whatever palette is on screen. Hardcoding it would have been easier and nobody would have noticed, but a tool whose whole argument is that it measures rather than asserts can't have a fake measurement in its own shop window.`
            },
            {
                image: `./stylebook/sb-verified.png`,
                title: `Verified, not claimed: the mechanic the product is built on`,
                description: `Every generated system ships with a panel that shows its work: which tokens were adjusted, by how much, and why. "colors.primary asked for #d0c9c3, shipped #af815a... saturation was 12%, too washed out to read as an action colour." The panel exists because the alternative, a model writing confidently about numbers it never calculated, is exactly what makes AI design tools untrustworthy. It was a real bug I hit in testing, not a hypothetical.`
            },
            {
                image: `./stylebook/sb-studio.png`,
                title: `Studio: a live product page, not a sheet of swatches`,
                description: `Editing happens against a realistic rendered interface, here a member dashboard for the generated "Aether Skincare" brand, because a colour or a component only shows whether it works once it sits next to the others in a real layout. The interface supports two mental models at once: someone who just wants a usable system accepts the first pass and exports without opening a token panel; someone who wants control edits any value and watches the rationale update to explain what changed, instead of going stale next to a number it no longer describes. Making all ten components, in four interaction states, in light and dark, genuinely follow an edited token took longer than getting the first version on screen.`
            },
            {
                image: `./stylebook/sb-colors.png`,
                title: `The colour wall: a library built to be browsed`,
                description: `Nearly 2,000 shades, hung salon-style with names, hex values and mood tags, searchable and filterable by family. It exists because generation was always meant to be a layer on top of something that works without it: building the library first meant there was real, usable product even in weeks when the pipeline was broken.`
            }
        ],
        challenges: [
            {
                title: `Making AI output trustworthy`,
                solution: `The hardest problem in the project. During testing the generator produced body text at 1.02:1 contrast, very nearly invisible, and separately wrote reasoning claiming a button met 4.5:1 when it measurably didn't. The fix was to stop trusting the model on anything measurable: every colour pair is measured in code, repaired by adjusting lightness while preserving hue, and the explanation is regenerated from the real numbers. If a colour can't be saved that way, the system reports it as a deviation instead of silently substituting something the user never chose.`
            },
            {
                title: `Matching Tokens Studio's exact export format`,
                solution: `Tokens Studio's documentation describes its JSON shape loosely enough that a plausible reading still produces a file that imports without error and simply shows nothing: no stack trace, no error to chase. It took about six attempts over three days, comparing our output property by property against a reference export known to import correctly, until the exact mismatch surfaced.`
            },
            {
                title: `Fixing the reported bug instead of the convenient one`,
                solution: `A teammate reported outline buttons disappearing in dark mode. The first fix, raising every border in the app to 3:1, technically worked but made every card, table and modal border about two and a half times darker in both themes: an unrequested redesign that also broke a deliberate rule separating control borders from decorative hairlines. The right fix was narrower: a separate role used only where a border is a control's entire boundary. The outline button went from 1.32:1 to 3.04:1 in dark mode, and card borders didn't move. The fix that makes a symptom disappear isn't always the right one, and the difference is usually only visible if you measure something nobody asked about.`
            }
        ],
        metrics: {
            intro: `StyleBook is live but too new for meaningful usage data, so these are the measures I'd hold it to.`,
            items: [
                { name: `Brief to first export`, why: `Minutes from typing a brief to exporting tokens. The whole promise is collapsing four tools into one path.` },
                { name: `Repairs per generation`, why: `How often the verifier has to fix the model. A rising number means prompting or shortlisting has drifted.` },
                { name: `Edits after generation`, why: `How much people change the first pass, read in both directions: zero edits can mean trust or indifference, so it pairs with export rate.` },
                { name: `Figma import success`, why: `Share of plugin imports that complete with no manual fixes. Portability is only real if it works the first time.` }
            ]
        },
        outcomes: [
            `Shipped a working, publicly deployed application: 1,922 colours, 1,933 fonts and 90 themes across 12 categories, 9 code export formats plus PDF and Figma, 10 editable components with 4 interaction states each, and 28 passing tests across a 32-route TypeScript codebase.`,
            `Published the StyleBook Import plugin to the Figma Community after a review that included a security disclosure and a reviewer-requested screen recording, and rebuilt the export pipeline to measure real rendered DOM geometry rather than reconstruct layout, which fixed most fidelity problems at once.`,
            `Ran a formal accessibility audit that found and fixed real failures (muted text at 1.8:1 in roughly 200 places, a mobile nav unreachable below 640px), on top of accessibility built into the token layer from the start.`,
            `Presented at a three-day public showcase, giving the same full technical walkthrough to every visitor regardless of background. The recurring response was that people hadn't seen a tool go from a description to a checked, editable, exportable system, and several suggested it had genuine commercial potential.`
        ],
        reflections: `The habit I'll carry furthest is verifying instead of asserting. It started as a narrow decision not to trust a language model's arithmetic and became a general one: it's why the accessibility audit measured real rendered values instead of trusting a colour's name, why the privacy policy was written only after reading the validation code it describes, and why every factual claim in the report behind this project was checked against the codebase first. The honest gaps are worth naming too: there's no rate limiting on the AI endpoint yet, no automated accessibility testing in the build pipeline, and no testing with real assistive-technology users, which is the standard that matters and the one I can't claim. Next time I'd pair on the first two or three features rather than splitting the build into clean vertical slices from day one; my split shipped the product in nine weeks but left me as the only person who understood how the pieces connected.`,

        heroImage: `./stylebook/sb-hero-bg.jpg`
    },
};
