import {
  CorePackage,
  ServiceItem,
  ReframeTransformation,
  IdeaTravelNode,
  ClientProfile,
  TeamMember,
  WorkProofItem,
  PrincipleItem,
  TestimonialItem,
} from '../types';

export const HERO_CONTENT = {
  kicker: "CONTENT & STORYTELLING FOR PRIVATE MARKETS",
  headline: "Be the investor founders already know before the first meeting.",
  subheadline:
    "Reframe turns investment thinking, partner expertise and portfolio stories into content that builds visibility, credibility and stronger relationships.",
  primaryCTA: "Explore our work",
  secondaryCTA: "Talk to Reframe",
  image: "/4.jpeg",
  investorImage: "/5.jpeg",
  trustMarkers: [
    "Private Equity",
    "Growth Equity",
    "Venture Capital",
    "Family Offices",
  ],
};

export const CORE_PACKAGES: CorePackage[] = [
  {
    id: "youtube-content-ip",
    title: "YouTube Content IP",
    tagline: "Boardroom insight in a format founders remember.",
    summary:
      "Build a series around the thinking your firm wants to be known for.",
    deliverables: [
      "Series concept",
      "Partner interviews",
      "YouTube episodes + short-form cuts",
    ],
    differentiators: {
      investmentThinking: "Turn investment logic into clear points of view.",
      partnerExpertise: "Build content around what partners already know.",
      portfolioStorytelling: "Show the people and decisions behind the growth.",
    },
    bestFor: "Firms that want a repeatable content format around their thinking.",
    sampleAsset: "Inside Our Vertical SaaS Thesis",
    cadence: "Monthly Release",
  },
  {
    id: "event-content-engine",
    title: "Event Content Engine",
    tagline: "One event. Multiple usable content moments.",
    summary:
      "Make the event last longer than the event.",
    deliverables: [
      "Pre-event content direction",
      "On-ground capture",
      "Post-event clips + follow-up assets",
    ],
    differentiators: {
      investmentThinking: "Cut out the strongest point of view from the noise.",
      partnerExpertise: "Capture the conversation as it happens.",
      portfolioStorytelling: "Turn founder moments into reusable assets after the room clears.",
    },
    bestFor: "Firms that hold events or speaking moments that should keep working afterwards.",
    sampleAsset: "The 30 Seconds Worth Hearing",
    cadence: "Per Event",
  },
  {
    id: "omnichannel-brand-presence",
    title: "Omnichannel Brand Presence",
    tagline: "Consistent visibility without turning partners into creators.",
    summary:
      "One point of view. Built to travel.",
    deliverables: [
      "Partner POV",
      "LinkedIn + short-form",
      "Portfolio and market storytelling",
    ],
    differentiators: {
      investmentThinking: "Turn a thesis into a clearly owned external point of view.",
      partnerExpertise: "Build a repeatable presence without adding partner burden.",
      portfolioStorytelling: "Keep founder stories and milestones active in circulation.",
    },
    bestFor: "Firms that want a stable, credible market presence without operational drag.",
    sampleAsset: "Why We Invested",
    cadence: "Ongoing",
  },
];

export const FEATURED_TRANSFORMATIONS = [
  {
    id: "why-we-invested",
    title: "Why We Invested",
    subtitle: "Turning dry portfolio announcements into sharp investment reasoning",
    beforeLabel: "Standard PR Wire",
    beforeSnippet: "Fund IV announces $25M growth round in logistics provider Acme Ltd.",
    beforeCritique: "Legalistic announcement forgotten in 24 hours. Teaches prospective founders nothing about how your firm evaluates risk or creates value.",
    afterLabel: "The Reframed Thesis",
    afterSnippet: "Why We Invested: The Regulatory Inflection & Supply Chain Bottleneck That Won Our Conviction.",
    afterExpanded:
      "A 3-minute thesis deconstruction revealing the exact friction, market vacancy, and unit economics that made this deal our highest-conviction check.",
    outcome:
      "Prospective founders read the thesis and think: 'They actually understand my market before we even talk.'",
    differentiatorBadge: "Investment Thinking",
    signalTag: "Contrarian Risk Thesis",
  },
  {
    id: "thirty-seconds",
    title: "The 30 Seconds Worth Hearing",
    subtitle: "Extracting the single breakthrough insight from an hour of investor dialogue",
    beforeLabel: "60-Minute Sprawling Panel",
    beforeSnippet: "A 1-hour conference panel or podcast sitting with minimal views in an unindexed archive.",
    beforeCritique: "55 minutes of polite conversation obscures the single sentence on unit economics that every founder needs to hear.",
    afterLabel: "The 30-Second Thesis",
    afterSnippet: "The 30 Seconds Worth Hearing: Why Vertical AI Outlasts Generic Wrappers in Enterprise Buyouts.",
    afterExpanded:
      "The exact 32-second breakthrough on customer acquisition cost and retention dynamics extracted, visually framed with commercial context, and delivered directly into founder feeds.",
    outcome:
      "Surfaces the single battle-tested insight that founders bookmark and share with their executive teams.",
    differentiatorBadge: "Partner Expertise",
    signalTag: "Pattern Recognition",
  },
];

export const PROBLEM_CONTENT = {
  kicker: "The Status Quo",
  title: "You probably don’t have a content shortage.",
  intro: "Most private-market firms possess a treasure trove of proprietary insight that rarely reaches the market:",
  existingAssets: [
    "Partner conversations",
    "Investment theses",
    "Portfolio stories",
    "Conference appearances",
    "Podcasts",
    "Market observations",
    "Years of pattern recognition",
  ],
  coreProblem:
    "Most of the strongest thinking gets used once, buried inside long-form content, or never distributed properly.",
  conclusion: "We find what is worth saying. Then make it travel.",
};

export const SERVICES_CONTENT: { headline: string; subtitle: string; services: ServiceItem[] } = {
  headline: "Built for private markets.",
  subtitle:
    "Content operations engineered specifically for high-conviction investors, private equity partners, and portfolio leaders.",
  services: [
    {
      id: "partner-led",
      title: "Partner-led content",
      tagline: "Partner thinking, market views, and investment experience into clear points of view.",
      summary:
        "Transforming internal partner memos, investment committees, and informal macro observations into authoritative, distinct market commentary.",
      deliverables: [
        "Executive essays & thesis breakdowns",
        "Point-of-view commentary on macro shifts",
        "Curated investment committee takeaways",
        "Short-form conversational snippets",
      ],
      privateMarketValue:
        "Founders want to know how you think before they sign a term sheet. We capture that intuition without demanding partner desk time.",
      sampleHeadline: "Why B2B Vertical SaaS Still Beats Horizontal AI In Tough Cycles",
    },
    {
      id: "portfolio-storytelling",
      title: "Portfolio storytelling",
      tagline: "People, decisions, and operating stories behind portfolio growth.",
      summary:
        "Documenting the operational grit, strategic pivots, and founder partnerships that create enterprise value.",
      deliverables: [
        "Founder case studies & operational films",
        "Post-investment turnaround playbooks",
        "Executive interview features",
        "Milestone & scaling retrospectives",
      ],
      privateMarketValue:
        "Demonstrates genuine operating support to future prospective founders rather than self-congratulatory press releases.",
      sampleHeadline: "Rebuilding The Supply Chain: 18 Months Inside Company X's Expansion",
    },
    {
      id: "content-repurposing",
      title: "Content repurposing",
      tagline: "Finding the strongest ideas inside interviews, podcasts, panels, and existing footage and rebuilding them for the right platform.",
      summary:
        "Auditing your firm's existing audio, video, and whitepapers to extract high-signal moments and reconstruct them for modern consumption.",
      deliverables: [
        "Podcast & panel extraction architecture",
        "High-density executive carousels",
        "Quote-led editorial graphics",
        "Cross-platform distribution cuts",
      ],
      privateMarketValue:
        "Stops your highest-conviction hours of panel speaking from disappearing into the 47th minute of an unindexed podcast archive.",
      sampleHeadline: "3 Unseen Risks In Industrial Buyouts (Extracted from 45-min Keynote)",
    },
    {
      id: "video-youtube",
      title: "Video & YouTube",
      tagline: "Long-form conversations, short-form edits, and distribution around how people actually consume content.",
      summary:
        "Cinematic production standards designed for private-market credibility, avoiding casual vlog gimmicks while commanding deep engagement.",
      deliverables: [
        "Bespoke partner interview studio shoots",
        "Short-form vertical clips with high-editorial pacing",
        "YouTube episodic series & video essays",
        "LP & founder distribution packaging",
      ],
      privateMarketValue:
        "Video creates personal familiarity faster than text alone. Founders feel like they've already had a preliminary coffee with your partner.",
      sampleHeadline: "Behind The Boardroom: Inside Our $40M Healthcare Platform Thesis",
    },
    {
      id: "executive-positioning",
      title: "Executive positioning",
      tagline: "Helping investment professionals build a recognisable voice without turning them into full-time creators.",
      summary:
        "Bespoke voice modeling that turns partner voice notes, brief calls, or draft bullet points into polished, defensible market commentary.",
      deliverables: [
        "Zero-friction partner interview workflows",
        "LinkedIn voice architecture & profile strategy",
        "Keynote speaking topic development",
        "High-trust media placement alignment",
      ],
      privateMarketValue:
        "Partners remain full-time dealmakers and operators while their digital presence consistently works the market for deal flow.",
      sampleHeadline: "30-Minute Monthly Voice Sprint → 12 Distinct Market Perspectives",
    },
  ],
};

export const REFRAME_WAY_CONTENT: {
  headline: string;
  subheadline: string;
  pairs: ReframeTransformation[];
} = {
  headline: "A fund announcement tells people what happened. Good content tells them why it mattered.",
  subheadline: "The difference between transactional noise and commercial resonance across private markets.",
  pairs: [
    {
      id: "portfolio-announcement",
      before: "Portfolio announcement",
      beforeDescription: "Dry PR wire: 'Fund IV announces $25M growth round in logistics provider Acme Ltd.'",
      after: "Why we invested",
      afterDescription: "The investment thesis: the unaddressed friction, the regulatory inflection point, and why Acme’s operating model won our conviction.",
      example: "Translating capital allocation into intellectual gravity that attracts adjacent pipeline deals.",
    },
    {
      id: "podcast-episode",
      before: "60-minute podcast",
      beforeDescription: "A sprawling 1-hour audio recording sitting with 84 views on an unoptimized feed.",
      after: "The 30 seconds worth hearing",
      afterDescription: "The exact 30-second breakthrough insight extracted, visually subtitled, framed with context, and delivered into founder feeds.",
      example: "Surfacing the single sentence on churn dynamics that every seed founder copies down.",
    },
    {
      id: "investment-thesis",
      before: "Investment thesis",
      beforeDescription: "A 40-page internal confidential deck locked in Google Drive and discussed only in Monday IC.",
      after: "A point of view founders remember",
      afterDescription: "A sharp, 3-minute read laying out your firm's contrarian view on the market before anyone else articulates it.",
      example: "Positioning your firm as the obvious lead investor when category winners start raising.",
    },
    {
      id: "portfolio-growth",
      before: "Portfolio growth",
      beforeDescription: "'We achieved 3.2x YoY revenue acceleration and opened European operations.'",
      after: "The story behind the numbers",
      afterDescription: "How the CEO solved enterprise churn, overhauled sales incentives, and conquered Munich in 6 months.",
      example: "Giving prospective founders visceral proof of how you navigate crisis alongside them.",
    },
    {
      id: "partner-interview",
      before: "Partner interview",
      beforeDescription: "One-off transcript published on the firm's neglected blog and forgotten in 24 hours.",
      after: "A repeatable content property",
      afterDescription: "A recurring episodic franchise where your partners debate hard valuation questions with sector leaders.",
      example: "Transforming ad-hoc commentary into an institutional media asset with compounding recall.",
    },
  ],
};

export const POSITIONING_CONTENT = {
  kicker: "Editorial Positioning",
  badge: "Not another social-media calendar",
  headline: "No posting because the calendar says Tuesday.",
  antiBeliefs: [
    "No generic thought leadership.",
    "No turning every partner into a creator.",
    "No superficial engagement bait or vanity follower chases.",
    "No posting just to tick a marketing compliance box.",
  ],
  betterQuestionsTitle: "We start with better questions:",
  questions: [
    {
      q: "What does your firm actually believe?",
      detail: "Where does your pattern recognition diverge from consensus? That’s where authority begins.",
    },
    {
      q: "What should founders understand about how you think?",
      detail: "What do the best founders realize only after working with you for two years? Bring that forward.",
    },
    {
      q: "What stories are already sitting inside the business?",
      detail: "Which board meetings, turnaround decisions, and customer wins deserve to be immortalized?",
    },
    {
      q: "What deserves to travel further?",
      detail: "Which internal partner notes and panel debates hold enough raw truth to anchor a relationship?",
    },
  ],
  closing: "Then we build from there.",
};

export const ONE_IDEA_CONTENT: {
  headline: string;
  tagline: string;
  bottomGoal: string;
  nodes: IdeaTravelNode[];
} = {
  headline: "One strong idea can travel further than you think.",
  tagline: "One partner conversation unlocks a compounding multichannel ecosystem without eating up partner hours.",
  bottomGoal: "The goal is not more content. The goal is stronger recall.",
  nodes: [
    {
      id: "short-form-video",
      title: "Short-form video",
      format: "60-90s vertical video",
      channel: "LinkedIn & YouTube Shorts",
      purpose: "High-retention mobile takeaway",
      deliverableExample: "Partner explaining why AI horizontal wrappers fail unit economics.",
    },
    {
      id: "linkedin-pov",
      title: "LinkedIn point of view",
      format: "First-person executive post",
      channel: "Partner Personal Profile",
      purpose: "Direct peer-to-peer engagement",
      deliverableExample: "Contrarian perspective on European growth debt vs equity dilution.",
    },
    {
      id: "founder-carousel",
      title: "Founder-focused carousel",
      format: "Visual PDF multi-slide breakdown",
      channel: "Firm Page & LinkedIn Feed",
      purpose: "Scannable framework retention",
      deliverableExample: "The 5-step framework we use to test product-market fit before Series A.",
    },
    {
      id: "quote-visual",
      title: "Quote-led visual",
      format: "High-craft typographic asset",
      channel: "Twitter/X & Newsletter header",
      purpose: "Instant philosophical alignment",
      deliverableExample: "'The biggest risk in growth equity isn’t valuation; it’s execution friction.'",
    },
    {
      id: "long-form-insight",
      title: "Long-form insight",
      format: "1,200-word editorial thesis",
      channel: "Firm Journal & LP Letter",
      purpose: "Deep intellectual gravity & SEO",
      deliverableExample: "Comprehensive market map on legacy industrial automation.",
    },
    {
      id: "youtube-distribution",
      title: "YouTube distribution",
      format: "Episodic boardroom conversation",
      channel: "Reframe-produced Channel",
      purpose: "Permanent evergreen search & archive",
      deliverableExample: "In-depth 20-minute video case study on navigating secondary buyouts.",
    },
  ],
};

export const WHO_WE_WORK_WITH_CONTENT: {
  headline: string;
  description: string;
  categories: ClientProfile[];
} = {
  headline: "For firms building relationships before they need them.",
  description:
    "From partner visibility to portfolio storytelling, the work is designed around the people and relationships that move private markets.",
  categories: [
    {
      id: "private-equity",
      name: "Private Equity",
      context: "Mid-market & upper-mid buyout funds managing platform acquisitions.",
      typicalNeed: "Differentiating beyond capital during bilateral owner-founder negotiations.",
      outcomes: [
        "Operating partner authority building",
        "Decade-long value creation documentary films",
        "Management team recruitment assets",
      ],
    },
    {
      id: "growth-equity",
      name: "Growth Equity",
      context: "Scale-stage investors competing for category-defining technology businesses.",
      typicalNeed: "Positioning partners as hands-on scaling advisors rather than passive balance sheets.",
      outcomes: [
        "Metrics-to-narrative transition playbooks",
        "Executive roundtable series distribution",
        "Founder-to-founder referral magnets",
      ],
    },
    {
      id: "venture-capital",
      name: "Venture Capital",
      context: "Early & multi-stage VC partnerships seeking proprietary deal flow from elite builders.",
      typicalNeed: "Cutting through generic social noise with unforgettable sector theses.",
      outcomes: [
        "Bespoke partner podcast properties",
        "Thesis-led founder acquisition funnels",
        "Breakout portfolio founder spotlights",
      ],
    },
    {
      id: "family-offices",
      name: "Family Offices",
      context: "Single & multi-family offices investing direct or partnering on co-investments.",
      typicalNeed: "Quiet, dignified visibility that signals patient capital and generational trust.",
      outcomes: [
        "Private LP & co-investor briefings",
        "Generational philosophy storytelling",
        "Direct deal sponsor credibility",
      ],
    },
    {
      id: "private-market-investors",
      name: "Private-Market Investors",
      context: "Independent sponsors, specialized debt providers, and search fund accelerators.",
      typicalNeed: "Competing against legacy institutions with agile, clear, modern communication.",
      outcomes: [
        "Defensible niche sector dominance",
        "Rapid market awareness in target verticals",
        "Inbound founder term sheet inquiries",
      ],
    },
  ],
};

export const WHY_REFRAME_CONTENT = {
  headline: "Content with commercial context.",
  intro:
    "We are not interested in producing more noise. Reframe sits between strategy, storytelling, and distribution, helping private-market firms communicate what they know, how they think, and why it matters.",
  subheadline: "The result should strengthen five commercial fundamentals:",
  pillars: [
    {
      title: "Authority",
      description: "Establishing your partners as the undeniable intellectual reference point in your focus sectors.",
      metric: "Recognized Thesis",
    },
    {
      title: "Visibility",
      description: "Keeping your firm top-of-mind across founders, co-investors, and intermediaries year-round.",
      metric: "Compound Presence",
    },
    {
      title: "Founder relationships",
      description: "Fostering unforced familiarity before founders initiate their next financing round.",
      metric: "Pre-Warmed Deals",
    },
    {
      title: "Market recall",
      description: "Ensuring that when founders talk to their advisors, your firm’s perspective is cited by name.",
      metric: "Top-Of-Mind Salience",
    },
    {
      title: "Inbound conversations",
      description: "Turning high-conviction thinking into inbound founder pitches and proprietary co-investment looks.",
      metric: "Proprietary Flow",
    },
  ],
};

export const ABOUT_CONTENT = {
  title: "ABOUT REFRAME",
  description:
    "Thoughtful content starts with people. Reframe Studios is a content and storytelling studio built around private markets.",
  mission: "Thoughtful content starts with people.",
  keyFocus: "Vrushali · Derrick · Manthan",
  principles: [
    "Private-market specificity",
    "Executive-respecting workflows",
    "Editorial rigor",
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "vrushali-hirpara",
    name: "Vrushali Hirpara",
    role: "Secondary Partner | Growth & Partnerships, Reframe Studios",
    bioParagraphs: [
      "Vrushali works across growth strategy, marketing, sales, and client relationships, combining market understanding, digital marketing, and commercial thinking to identify opportunities and build stronger business relationships.",
      "Her experience spans marketing strategy, business development, client acquisition, partnerships, and market development, giving her a practical understanding of how businesses position themselves, reach the right audience, and turn interest into long-term relationships.",
      "At Reframe Studios, she focuses on growth and partnerships within private markets, working across market development, client acquisition, relationship building, and content-led growth.",
    ],
    focusAreas: [
      "Growth Strategy",
      "Private-Market Partnerships",
      "Client Acquisition",
      "Content-Led Growth",
    ],
    quote: "Building relationships before you need them is the ultimate commercial moat in private capital.",
  },
  {
    id: "derrick",
    name: "Derrick",
    role: "Partner | Creative Direction & Narrative Architecture",
    bioParagraphs: [
      "Derrick works across creative direction, narrative development, and executive content production at Reframe Studios. He combines deep editorial rigor with film and digital storytelling to translate complex private-market theses into compelling, high-retention media.",
      "His background spans documentary filmmaking, long-form podcast architecture, brand-led video, and executive narrative strategy, giving him an acute sense of how senior investors can command attention without relying on gimmicks or vanity metrics.",
      "At Reframe Studios, he leads content architecture and creative execution, helping venture and private equity partners articulate their highest-value thinking across video, audio, and visual distribution channels.",
    ],
    focusAreas: [
      "Narrative Architecture",
      "Documentary Storytelling",
      "Executive Video Direction",
      "Format Development",
    ],
    quote: "If an investor’s thesis requires 40 pages of jargon to sound smart, it isn’t clear enough yet.",
  },
  {
    id: "manthan",
    name: "Manthan",
    role: "Partner | Distribution Systems & Audience Resonance",
    bioParagraphs: [
      "Manthan leads content distribution, digital systems, and market resonance at Reframe Studios. He pairs algorithmic media insight with private-equity audience psychology to ensure partner ideas reach founders, LPs, and peer decision-makers where they actually spend time.",
      "His experience covers multichannel media distribution, editorial repurposing architectures, founder-focused social strategy, and audience intelligence across high-trust financial communities.",
      "At Reframe Studios, he oversees post-production systems, platform-specific re-engineering, and audience recall measurement, ensuring every recorded conversation generates measurable commercial relationship value.",
    ],
    focusAreas: [
      "Multichannel Distribution",
      "Platform Re-engineering",
      "Audience Recall Systems",
      "Private Capital Media",
    ],
    quote: "Distribution is not spamming five platforms; it’s re-engineering the idea for how humans consume it.",
  },
];

export const WORK_PROOF_CONTENT: {
  headline: string;
  tagline: string;
  principleIntro: string;
  principles: string[];
  note: string;
  cases: WorkProofItem[];
} = {
  headline: "Selected Work",
  tagline: "Selected stories and work from our team.",
  principleIntro: "Different sectors. Same principle.",
  principles: ["Find the strongest story.", "Tell it well.", "Make it travel."],
  note: "Selected team highlights and historical work from Reframe partners and core team members.",
  cases: [
    {
      id: "tata-motors",
      client: "Tata Motors",
      category: "Founder & Business Storytelling",
      tagline: "Turning industrial scale and business growth into a more human story.",
      description:
        "Founder & Business Storytelling — turning industrial scale and business growth into a more human story.",
      image: "/7.jpeg",
      narrativeAngle: "Human storytelling for complex industrial growth stories.",
      distributionStrategy: "Executive documentary series and strategic narrative assets.",
      attributionNote: "Team historical narrative direction & executive storytelling showcase.",
    },
    {
      id: "makemytrip-foundation",
      client: "MakeMyTrip Foundation",
      category: "Impact & Transformation Storytelling",
      tagline: "Bringing community and impact stories to life through documentary-led storytelling.",
      description:
        "Impact & Transformation Storytelling — bringing community and impact stories to life through documentary-led storytelling.",
      image: "/8.jpeg",
      narrativeAngle: "Community impact told through human-scale, documentary-led storytelling.",
      distributionStrategy: "High-impact cinematic short films and stakeholder narrative assets.",
      attributionNote: "Team creative direction and documentary film leadership.",
    },
    {
      id: "bmw",
      client: "BMW",
      category: "Premium Long-Form Storytelling",
      tagline: "Architectural precision and performance cinema.",
      description:
        "Premium long-form storytelling with cinematic realism and high-end product narrative craft.",
      image: "/5.jpeg",
      narrativeAngle: "Framing technical superiority through cinematic craft and premium storytelling.",
      distributionStrategy: "Long-form editorial films and premium digital showcases.",
      attributionNote: "Team film production and luxury brand narrative direction.",
    },
    {
      id: "ford",
      client: "Ford",
      category: "Brand-Led Film & Narrative",
      tagline: "Heritage and electric reinvention told with cinematic weight.",
      description:
        "Heritage and electric reinvention told with cinematic weight across brand and founder narratives.",
      image: "/10.jpeg",
      narrativeAngle: "Celebrating builders, operational resilience, and reinvention at the speed of modern market change.",
      distributionStrategy: "Multichannel cinematic launch film and executive interview features.",
      attributionNote: "Team brand film and creative narrative contribution.",
    },
  ],
};

export const HOW_WE_THINK_CONTENT: { headline: string; subtitle: string; principles: PrincipleItem[] } = {
  headline: "How we think",
  subtitle: "Four operational rules that govern every piece of private-market content we produce.",
  principles: [
    {
      id: "thirty-seconds",
      title: "The 30 seconds worth hearing",
      description: "Finding the strongest idea inside long-form investor content.",
      inPractice:
        "An hour-long panel discussion usually contains 55 minutes of polite conversation and 5 minutes of piercing, battle-tested truth. We comb the transcript to isolate the raw thesis, discard the filler, and craft it for immediate resonance.",
      signalExtracted: "Isolate the counter-intuitive observation that only 15 years in private equity could teach.",
    },
    {
      id: "why-we-invested",
      title: "Why we invested",
      description: "Turning a portfolio announcement into investment reasoning.",
      inPractice:
        "Standard press releases are forgotten in 24 hours because they read like legal notices. We reconstruct every investment announcement around the specific risk thesis, the market vacancy, and why the founder's approach won your capital.",
      signalExtracted: "Future portfolio founders read your rationale and think: 'They truly understand my industry.'",
    },
    {
      id: "story-behind-growth",
      title: "The story behind the growth",
      description: "Turning portfolio numbers into founder and operating stories.",
      inPractice:
        "Metrics alone fail to build emotional conviction. We document the messy operational inflection points: how the team overcame initial churn, redesigned enterprise pricing, or restructured executive leadership.",
      signalExtracted: "Proof of true partnership during adversity, not just fair-weather balance sheet addition.",
    },
    {
      id: "one-thesis-multiple",
      title: "One thesis. Multiple conversations.",
      description: "Building content systems around a firm’s strongest investment thinking.",
      inPractice:
        "Great investment themes shouldn't be trapped in a single PDF. We convert one overarching sector thesis into a synchronized system: video commentary, LinkedIn discourse, LP newsletter chapters, and founder dinner discussion starters.",
      signalExtracted: "Continuous intellectual omnipresence in your chosen market sector.",
    },
  ],
};

export const FINAL_CTA_CONTENT = {
  headline: "There is probably a better story already sitting inside your firm.",
  subheadline: "Let’s find it.",
  cta: "Talk to Reframe",
  supportText: "",
};

export const FOOTER_CONTENT = {
  brand: "Reframe Studios",
  tagline: "Private Markets. Strategy. Storytelling. Distribution.",
  missionLine: "Built for firms that want to be known for more than the size of their fund.",
  links: [
    { name: "Packages", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  contacts: {
    email: "vrushali@reframestudios.co",
    linkedin: "https://www.linkedin.com/company/reframe-studios",
    location: "Global Private Markets Studio",
  },
};

export const TESTIMONIALS_CONTENT: {
  headline: string;
  subtitle: string;
  tagline: string;
  testimonials: TestimonialItem[];
} = {
  headline: "Proof in the market.",
  tagline: "PARTNER REPUTATIONAL LEVERAGE",
  subtitle:
    "How investment firm partners, general partners, and family office principals transform proprietary conviction into reputational leverage.",
  testimonials: [
    {
      id: "aura-capital",
      quote:
        "Founders used to ask us generic questions about our thesis in introductory calls. After Reframe transformed our internal investment memos into narrative breakdowns, founders now cite our own articles back to us before we even begin pitch discussions.",
      author: "Julian Vance",
      role: "Managing Partner",
      firm: "Aura Capital Partners",
      firmType: "Growth Equity",
      location: "London & New York",
      metric: "3.4x",
      metricLabel: "Inbound founder meeting conversions",
      context: "Bi-weekly 45-min partner debrief into 6 modular publishing assets",
      avatarInitials: "JV",
      fundSize: "$650M AUM",
    },
    {
      id: "vanguard-north",
      quote:
        "Most agencies give you fluff that makes serious investors cringe. Reframe understood our complex enterprise infrastructure thesis without hand-holding. They extracted the nuance in 40 minutes and turned it into market-leading essays that LP allocators praised.",
      author: "Elena Rostova",
      role: "General Partner",
      firm: "Vanguard North Ventures",
      firmType: "Venture Capital",
      location: "San Francisco",
      metric: "$180M",
      metricLabel: "Fund III co-investment pipeline influenced",
      context: "Partner-led deep dives on sovereign AI and semiconductor infrastructure",
      avatarInitials: "ER",
      fundSize: "$420M Fund III",
    },
    {
      id: "beacon-point",
      quote:
        "In buyout deals, proprietary deal flow is everything. Our portfolio founders were reluctant to do standard press releases. Reframe shaped authentic founder-to-founder case studies that made business owners specifically seek out Beacon Point as their preferred recapitalization sponsor.",
      author: "Marcus Sterling",
      role: "Senior Partner & Head of Origination",
      firm: "Beacon Point Capital",
      firmType: "Private Equity",
      location: "Chicago",
      metric: "+42%",
      metricLabel: "Proprietary deal origination velocity",
      context: "Mid-market industrial & precision manufacturing recapitalizations",
      avatarInitials: "MS",
      fundSize: "$1.2B Buyout Fund",
    },
    {
      id: "maison-cie",
      quote:
        "We guard our privacy, yet we needed target founders in European climate tech to understand our permanent capital horizon. Reframe designed a quiet, authoritative editorial presence that signals deep patience and strategic value without noise.",
      author: "Camilla Dubois",
      role: "Chief Investment Officer",
      firm: "Maison & Cie Family Office",
      firmType: "Family Office",
      location: "Geneva & Zurich",
      metric: "100%",
      metricLabel: "Zero operational burden on deal leads",
      context: "Permanent capital thematic whitepapers and founder roundtables",
      avatarInitials: "CD",
      fundSize: "Multi-Family Capital",
    },
    {
      id: "apex-ridge",
      quote:
        "Reframe's content multiplier architecture is the single most efficient allocation of executive time we have ever utilized. One recorded investment committee debrief translates directly into executive LinkedIn pieces, a newsletter read by 12,000 operators, and visual thesis cards.",
      author: "David Chen",
      role: "Founding Partner",
      firm: "Apex Ridge Horizon",
      firmType: "Venture Capital",
      location: "Singapore & Silicon Valley",
      metric: "45 min",
      metricLabel: "Partner time investment per month",
      context: "Autonomous robotics and supply chain automation thesis distribution",
      avatarInitials: "DC",
      fundSize: "$350M Fund II",
    },
  ],
};
