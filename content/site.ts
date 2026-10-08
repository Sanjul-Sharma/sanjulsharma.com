// ============================================================================
//  EDIT YOUR SITE HERE
//  This is the only file you need to change to update your website.
//  Replace the placeholder text with your real details.
// ============================================================================

export type NavLink = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string; // e.g. "2023 — Present"
  location?: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  url?: string; // live demo / site
  repo?: string; // source code
  featured?: boolean;
};

export type Achievement = {
  title: string;
  detail: string;
  year?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};


// ---------------------------------------------------------------------------
//  PERSONAL / HERO
// ---------------------------------------------------------------------------
export const person = {
  name: "Sanjul Sharma",
  // Short label shown above your name in the hero
  role: "Senior Data Product Manager",
  // One or two punchy sentences about what you do
  tagline:
    "I build platform products for internal developer, data science, and analytics teams — turning shared ML and data infrastructure into leverage across a $2B+ portfolio.",
  // A slightly longer intro used in the About section
  about: [
    "I'm a Senior Data Product Manager at PepsiCo, where I own the strategy and roadmap for the ML and data infrastructure that internal developer, data science, and analytics teams rely on. My customers aren't external users — they're the people inside the company turning data into consumer insights across a $2B+ portfolio in every global market — and my job is to make that shared infrastructure feel less like plumbing and more like leverage.",
    "I didn't start in product. I began as a cloud engineer, standing up Kubernetes clusters and running enterprise cloud migrations end to end. That background shapes how I work: I'm comfortable in SQL and Python, I can go deep with engineers on architecture and trade-offs, and I translate between technical reality and business priorities without losing either. It's also why I gravitate toward platform work — the leverage of building something once that a hundred teams get to build on top of.",
    "Over the last few years I've taken an ML forecasting platform from MVP to production adoption across 18+ business segments, defined the end-to-end lifecycle for how data products get built, governed, and retired, and secured multi-million-dollar funding by defending roadmap and ROI directly to senior leadership. Before PepsiCo, I built T-Mobile's first SMB sales platform from zero to $5M+ in month-one transaction volume. The through-line across all of it: taking ambiguous, ad-hoc problems and turning them into repeatable systems people actually trust.",
    "I care a lot about the unglamorous parts of product — clear intake processes, sane governance, documentation people actually read — because that's usually what separates a platform that scales from one that quietly collapses under its own success. I try to lead with clarity: a good roadmap should be legible to an engineer, a data scientist, and an executive at the same time.",
    "Outside of work, I build for the fun of it. I've written a Discord bot that runs an entire dynasty fantasy basketball league — contracts, free agency, salary caps, the works — and I'll happily automate anything I catch myself doing twice. I follow basketball a little too closely, and most of my side projects start as some version of \"this should really just run itself.\"",
  ],
  location: "California",
  email: "sanjul1094@gmail.com",
  // Path (in /public) to your resume PDF. Drop the file in public/ and update this.
  resumeUrl: "/resume.pdf",
  // Path (in /public) to your avatar, or leave "" to hide it
  avatarUrl: "",
};

// ---------------------------------------------------------------------------
//  NAV
// ---------------------------------------------------------------------------
// Small rotating status shown in the hero ("Currently — …"). Edit freely.
export const currently: string[] = [
  "shipping platforms",
  "shooting film",
  "automating chaos",
  "watching the NBA",
  "writing roadmaps",
];

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Builds", href: "/builds" },
  { label: "Games", href: "/games" },
  { label: "Freetime", href: "/#freetime" },
  { label: "Contact", href: "/#contact" },
];

// ---------------------------------------------------------------------------
//  SOCIAL / CONTACT LINKS
// ---------------------------------------------------------------------------
export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/Sanjul-Sharma",
    handle: "in/Sanjul-Sharma",
  },
  {
    label: "Email",
    href: "mailto:sanjul1094@gmail.com",
    handle: "sanjul1094@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sanjul-Sharma",
    handle: "Sanjul-Sharma",
  },
];

// ---------------------------------------------------------------------------
//  EXPERIENCE (your resume)
// ---------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    role: "Senior Data Product Manager",
    company: "PepsiCo",
    companyUrl: "https://www.pepsico.com",
    period: "2023 — Present",
    location: "Remote, USA",
    summary:
      "Own ML and data platform strategy for internal developer, data science, and analytics teams. Joined as Data Product Manager in January 2023; promoted to Senior in March 2025.",
    highlights: [
      "Built PepsiCo's ML forecasting platform from MVP to production — adopted across 18+ business segments, hitting 93% forecast accuracy and growing adoption 50% from MVP.",
      "Own product strategy and roadmap for the global data lake powering consumer insights across a $2B+ portfolio in all global markets.",
      "Secured $3M+ in annual platform funding by running quarterly ROI reviews and defending budget against competing org priorities with senior leadership.",
      "Designed a standardized ingestion workflow that cut onboarding time for new data sources 40%, replacing ad-hoc requests with a repeatable intake process.",
      "Defined the platform's end-to-end data product lifecycle — ingestion to retirement — including governance standards and quality controls adopted across consumer data teams.",
    ],
    tech: ["Product Strategy", "Data Lakes", "ML Lifecycle", "Data Governance", "SQL", "Python"],
  },
  {
    role: "Technical Product Manager",
    company: "T-Mobile",
    companyUrl: "https://www.t-mobile.com",
    period: "2022 — 2023",
    location: "Remote, USA",
    summary:
      "Built T-Mobile's first SMB sales platform from 0 to 1.",
    highlights: [
      "Launched the platform to $5M+ in transaction volume in month one at 90% CSAT.",
      "Set product roadmap and feature priorities from 30+ customer interviews, holding scope against competing stakeholder asks to ship core transaction functionality ahead of schedule.",
    ],
    tech: ["0-to-1 Product", "Roadmapping", "Customer Discovery"],
  },
  {
    role: "Software Engineer, Cloud",
    company: "TCS",
    companyUrl: "https://www.tcs.com",
    period: "2021 — 2022",
    location: "Remote, USA",
    summary:
      "Delivered enterprise cloud migrations end to end across the full PDLC.",
    highlights: [
      "Set up Kubernetes clusters for containerized workloads, standardizing deployments across environments.",
      "Owned delivery from requirements and design through testing, deployment, and post-launch monitoring.",
      "Used SQL to find performance bottlenecks across migrated applications, cutting average response times by 50%.",
    ],
    tech: ["Kubernetes", "Cloud Migration", "SQL", "PDLC"],
  },
];

// ---------------------------------------------------------------------------
//  WORK — professional projects & things you've shipped on the job
// ---------------------------------------------------------------------------
export const work: Project[] = [
  {
    name: "Executive Demand & Ingestion Report",
    tagline:
      "Gave senior leadership its first real view of data-platform demand vs. delivery",
    description:
      "Senior leadership had no line of sight into data-platform demand versus what had actually been delivered — so I built it. The report reconciles hundreds of planned annual data requirements against real intake submissions across every business vertical and domain, on a locked, defensible methodology that holds up under executive scrutiny. A scripted build chain regenerates the full leadership deck on every data refresh — turning a manual, ad-hoc scramble into a repeatable, self-serve deliverable.",
    tech: [
      "Executive Reporting",
      "Data Reconciliation",
      "AI Integration",
      "Automation",
      "Python",
      "SQL",
      "Excel",
    ],
    featured: true,
  },
  {
    name: "ML Forecasting Platform",
    tagline: "MVP-to-production forecasting platform adopted across 18+ segments",
    description:
      "Built PepsiCo's ML forecasting platform from MVP to production — 93% forecast accuracy and 50% adoption growth — serving data science and analytics teams across the business.",
    tech: ["ML Lifecycle", "Data Lakes", "Product Strategy"],
    featured: false,
  },
  // Add more work highlights here ↑
];

// ---------------------------------------------------------------------------
//  FREETIME — photography albums (horizontal scroller)
//  Cover images: drop files in /public/photography and set `cover` to the path.
//  Leave `cover` empty to show a tasteful gradient placeholder.
//  Point `url` at the full album (e.g. your VSCO album) so cards link out.
// ---------------------------------------------------------------------------
export const photographyIntro =
  "When I'm not building products, I'm usually behind a camera. A running feed of whatever I've been shooting lately — click any frame to view it full-screen.";

// Photos are auto-discovered from /public/photography/ (see lib/photos.ts).
// Just drop image files in that folder — no code changes needed. Until you
// add any, the Freetime section shows gradient placeholders.

// ---------------------------------------------------------------------------
//  ACHIEVEMENTS
// ---------------------------------------------------------------------------
export const achievements: Achievement[] = [
  {
    title: "$3M+ in annual platform funding secured",
    detail:
      "Defended platform budget across competing org priorities through quarterly ROI reviews with senior leadership at PepsiCo.",
    year: "2024",
  },
  {
    title: "SAFe Product Manager / Product Owner (POPM)",
    detail: "Scaled Agile Framework certification for product management and ownership.",
    year: "2025",
  },
  {
    title: "Product Manager Certification (PMC)",
    detail: "Formal product management certification.",
    year: "2023",
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    detail: "Google Cloud certification in deploying and operating workloads on GCP.",
    year: "2021",
  },
  {
    title: "B.S. Computer Science",
    detail: "University of North Texas, Denton TX.",
    year: "2021",
  },
];

// ---------------------------------------------------------------------------
//  SKILLS
// ---------------------------------------------------------------------------
export const skills: SkillGroup[] = [
  {
    category: "Product",
    items: [
      "Platform Product Management",
      "Product Strategy",
      "Roadmapping",
      "PDLC",
      "Agile / SAFe",
      "Stakeholder Management",
    ],
  },
  {
    category: "Data & ML",
    items: ["Data Lakes", "ML Lifecycle", "Big Data", "Data Governance"],
  },
  {
    category: "Technical",
    items: ["SQL", "Python", "Kubernetes", "Cloud Infrastructure"],
  },
  {
    category: "Platforms",
    items: ["Azure", "Synapse"],
  },
];
