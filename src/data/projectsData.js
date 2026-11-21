// projectsData.js - Centralized Data Source for LILIAN ALKHAWALDA Portfolio
export const projectsData = [
  {
    id: "lilianoura",
    slug: "lilianoura-enterprise-cockpit",
    title: "LILIANOURA — Enterprise SaaS & AI Operating Cockpit",
    shortDescription: "A multi-tenant enterprise cloud operating platform and AI copilot system designed for real-time executive governance, cross-departmental telemetry, and autonomous intelligence workflows.",
    fullDescription: "LILIANOURA represents the flagship enterprise engineering milestone. Architected with high-rigor multi-tenant boundary isolation, automated schema migrations, and an AI-driven decision engine, the system delivers unified command over finance, operations, CRM, HR, and strategic portfolio governance.",
    category: "Software Development",
    categories: ["Artificial Intelligence", "Software Development", "Web Applications"],
    technologies: ["Next.js 15.1", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "Vitest", "Tailwind CSS"],
    projectType: "Individual / Personal Flagship",
    isTeam: false,
    featured: true,
    completionDate: "November 2026",
    status: "Production-Ready / Fully Defended",
    thumbnail: "/assets/projects/dashboard_screenshot.png",
    gallery: [
      "/assets/projects/dashboard_screenshot.png",
      "/assets/projects/discount_cliff_analysis.png"
    ],
    role: "Lead Software Architect & Full-Stack Systems Engineer",
    problem: "Modern enterprise executive suites suffer from fragmented departmental silos, asynchronous reporting lags, and an absence of verifiable, real-time telemetry across operations, capital allocation, and governance.",
    solution: "Engineered an integrated cloud cockpit with hardened multi-tenant boundary guarantees, automated schema migration pipelines (Drizzle SQL), type-safe runtime validations (Zod), and 194 automated test assertions across 20 Vitest test suites.",
    keyFeatures: [
      "Modular App Router architecture with strict tenant isolation barriers",
      "Real-time executive cockpit telemetry and cross-departmental signal synthesis",
      "AI Gateway with verifiable reasoning loops and strict output enforcement",
      "Automated database migrations and transactional schema rollback protection",
      "20 automated Vitest test suites with 194 passing assertions"
    ],
    outcomes: "Defended successfully before an engineering committee in the AI Coding Master program with 100% verified test passes.",
    links: {
      demo: "https://lilianoura-prototype.apps.taqat.academy",
      github: "https://github.com/llianmahmoud2003-lab/LILIANOURA-"
    },
    teamCredits: null
  },
  {
    id: "trainova",
    slug: "trainova-smart-field-training",
    title: "Trainova — Smart University Field Training Management Platform",
    shortDescription: "A collaborative graduation platform connecting university students, academic supervisors, and corporate training partners across Gaza Strip universities with automated workflows and AI placement assistance.",
    fullDescription: "Trainova was engineered as a comprehensive collaborative graduation project to modernize and automate the university field training lifecycle. The system manages student applications, institutional partnerships, periodic training reports, supervisor evaluation rubrics, and automated certificate generation.",
    category: "Web Applications",
    categories: ["Web Applications", "Software Development", "Artificial Intelligence"],
    technologies: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Motion", "Lucide React", "Google Gemini API", "Node.js", "Express", "MySQL", "JWT", "Bcrypt", "PDFKit"],
    projectType: "Collaborative Team Project (Graduation Work)",
    isTeam: true,
    featured: true,
    completionDate: "August 2026",
    status: "Completed & Field-Tested",
    thumbnail: "/assets/projects/dashboard_filtered_central.png",
    gallery: [
      "/assets/projects/dashboard_filtered_central.png",
      "/assets/projects/dashboard_filtered_furniture.png"
    ],
    role: "Full-Stack Software Engineer & System Integrator (Team Collaboration)",
    problem: "Universities in the Gaza Strip faced severe administrative friction, lost paperwork, and lack of transparency in placing thousands of undergraduates into accredited corporate field training programs.",
    solution: "Co-developed an end-to-end responsive web ecosystem featuring a high-speed React 19 / Vite client with Google Gemini API smart matching, backed by a robust Node.js/Express REST API, relational MySQL schema, and automated PDFKit report generation.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) across Students, Academic Supervisors, and Company Mentors",
      "Smart student-to-company placement assistant powered by Google Gemini API (@google/genai)",
      "Weekly training log submissions with automated PDF evaluation report generation via PDFKit",
      "Real-time institutional supervisor review dashboards and grade approval pipelines",
      "Postman API suite with automated endpoint verification and token management"
    ],
    outcomes: "Adopted as a model graduation platform for Gaza universities, successfully handling end-to-end training placement workflows.",
    links: {
      demo: "https://trainova-fornt.apps.taqat.academy"
    },
    teamCredits: "Developed collaboratively with university graduation team members. Contributed to frontend component architecture, Gemini API integration, and RESTful endpoint design."
  },
  {
    id: "student-grades",
    slug: "student-grades-management-system",
    title: "Student Grades Management System",
    shortDescription: "A robust academic database management portal engineered for academic institutions to administer student records, course catalogs, semester grade registries, and automated GPA calculations.",
    fullDescription: "Developed as a standalone academic software engineering solution, this portal provides university registrars and department chairs with secure authentication, relational grade entry, automated cumulative GPA weighting, and dynamic transcript queries.",
    category: "Software Development",
    categories: ["Software Development", "Web Applications"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    projectType: "Individual Software Project",
    isTeam: false,
    featured: false,
    completionDate: "2024",
    status: "Production-Archived",
    thumbnail: "/assets/projects/sub_category_profitability.png",
    gallery: [
      "/assets/projects/sub_category_profitability.png"
    ],
    role: "Sole Software Developer & Database Architect",
    problem: "Manual record-keeping in academic departments leads to human calculation errors in weighted credit-hour GPAs and delays in issuing official student transcripts.",
    solution: "Designed a lightweight, secure PHP/MySQL web portal implementing relational integrity constraints, parameterized SQL queries, and instant formulaic GPA computation.",
    keyFeatures: [
      "Secure administrative login with session lifecycle protection",
      "Relational course catalog management and student enrollment rosters",
      "Automated weighted GPA calculation adhering to university grading scales",
      "Responsive data table views with instant student search and filtering"
    ],
    outcomes: "Repository preserved on GitHub (llianmahmoud2003-lab/portfolio) with verified schema and operational PHP modules.",
    links: {
      github: "https://github.com/llianmahmoud2003-lab/portfolio"
    },
    teamCredits: null
  },
  {
    id: "retail-sales-intelligence",
    slug: "retail-sales-intelligence-bi-dashboard",
    title: "Retail Sales Intelligence & Executive Profitability Dashboard",
    shortDescription: "An advanced exploratory data analysis and executive business intelligence dashboard revealing discount-driven margin leaks and category profitability across retail operations.",
    fullDescription: "An end-to-end analytical study and interactive executive BI dashboard built to diagnose retail revenue streams. By analyzing multi-branch sales data, the system pinpointed the 'Discount Cliff'—the exact discount threshold where gross margins collapse into net losses.",
    category: "Data Analytics",
    categories: ["Data Analytics", "Business Intelligence"],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "HTML5", "CSS3", "JavaScript"],
    projectType: "Individual Analytics Project",
    isTeam: false,
    featured: true,
    completionDate: "November 2026",
    status: "Complete / Packaged Deliverable",
    thumbnail: "/assets/projects/dashboard_screenshot.png",
    gallery: [
      "/assets/projects/dashboard_screenshot.png",
      "/assets/projects/discount_cliff_analysis.png",
      "/assets/projects/sub_category_profitability.png"
    ],
    role: "Lead Business Intelligence & Data Analyst",
    problem: "The retail business observed climbing gross sales figures while net profitability consistently declined, with executive leadership unable to isolate the operational leak.",
    solution: "Executed deep Python exploratory data analysis on transaction records, uncovering that discounts exceeding 20% triggered severe negative margins. Synthesized the findings into a standalone, interactive 1.5MB executive dashboard.",
    keyFeatures: [
      "Interactive multi-dimensional filtering by Region, Category, and Time Horizon",
      "Empirical identification and visualization of the critical 'Discount Cliff'",
      "Sub-category net profit margin contribution rankings",
      "Bilingual executive summaries and strategic pricing intervention recommendations"
    ],
    outcomes: "Provided retail decision-makers with actionable pricing rules that eliminated unprofitable discounting practices.",
    links: {
      demo: "#"
    },
    teamCredits: null
  },
  {
    id: "al-najma-electronics",
    slug: "al-najma-electronics-digital-transformation",
    title: "Al-Najma Electronics — Digital Maturity & Transformation Analysis",
    shortDescription: "An empirical digital maturity assessment, POS operational friction audit, and digital payment readiness model for an active retail electronics business in the Gaza Strip.",
    fullDescription: "Conducted an applied digital transformation diagnostic on an active electronics retail enterprise in Gaza. The analysis evaluated digital POS integration, e-payment adoption, customer transaction velocity, and delivery friction through multi-variable statistical modeling in Microsoft Excel.",
    category: "Business Solutions",
    categories: ["Business Solutions", "Data Analytics", "Business Intelligence"],
    technologies: ["Microsoft Excel", "Advanced Statistical Formulas", "Scenario Modeling", "Digital Maturity Rubrics"],
    projectType: "Applied Client Business Case",
    isTeam: false,
    featured: false,
    completionDate: "2026",
    status: "Delivered & Client-Protected",
    thumbnail: "/assets/projects/discount_cliff_analysis.png",
    gallery: [
      "/assets/projects/discount_cliff_analysis.png"
    ],
    role: "Business Systems & Digital Transformation Consultant",
    problem: "The retail electronics enterprise faced cash-handling overhead, inventory sync delays, and operational friction between physical sales and digital order fulfillment in a volatile local market.",
    solution: "Developed a 4-sheet analytical framework (Data, Statistical Functions, Trend Charts, Strategic Transformation Synthesis) utilizing AVERAGE, COUNTIF, and sensitivity testing to map operational bottlenecks and design a phased digital transition roadmap.",
    keyFeatures: [
      "Comprehensive digital maturity rubric across POS, Payments, and Inventory Velocity",
      "Empirical statistical breakdown of checkout friction points",
      "Phased technology adoption roadmap tailored to local infrastructure constraints",
      "Strict data privacy adherence safeguarding proprietary client metrics"
    ],
    outcomes: "Delivered actionable technology adoption milestones that streamlined checkout workflows and reduced manual accounting reconciliation.",
    links: {},
    teamCredits: null
  },
  {
    id: "feasibility-study-suite",
    slug: "economic-feasibility-study-financial-suite",
    title: "Corporate Feasibility Study & CapEx Valuation Suite",
    shortDescription: "A 3-stage formulated corporate financial model evaluating multi-scenario Capital Expenditure (CapEx) investment appraisal, Net Present Value (NPV), and Internal Rate of Return (IRR).",
    fullDescription: "A rigorous three-part economic feasibility study and corporate valuation model developed to evaluate capital asset investments under uncertainty. Built in Microsoft Excel with comprehensive formulaic architecture, the model tests projects across Boom, Normal, and Recession economic scenarios.",
    category: "Business Intelligence",
    categories: ["Business Intelligence", "Business Solutions"],
    technologies: ["Microsoft Excel", "Financial Valuation Formulas", "NPV & IRR Analysis", "Sensitivity Modeling", "CapEx Appraisal"],
    projectType: "Individual Financial Engineering Study",
    isTeam: false,
    featured: false,
    completionDate: "2025",
    status: "Complete / Formulated Model",
    thumbnail: "/assets/projects/sub_category_profitability.png",
    gallery: [
      "/assets/projects/sub_category_profitability.png"
    ],
    role: "Financial Analyst & Economic Systems Modeler",
    problem: "Investment decisions in volatile emerging markets carry severe downside risks if capital commitments are made without formal sensitivity analysis across fluctuating discount rates and demand shocks.",
    solution: "Engineered three integrated Excel workbooks calculating Net Present Value (NPV), Internal Rate of Return (IRR), Profitability Index (PI), and Break-Even thresholds across dynamic three-tier scenario matrices.",
    keyFeatures: [
      "Dynamic cash flow forecasting incorporating depreciation, working capital, and salvage value",
      "Sensitivity tables testing discount rate variations from 8% to 18%",
      "Multi-scenario comparative decision rubrics (Boom vs. Base vs. Downside)",
      "Formulated executive summary ready for corporate capital allocation boards"
    ],
    outcomes: "Preserved in three master university Excel workbooks on disk demonstrating corporate finance fluency.",
    links: {},
    teamCredits: null
  },
  {
    id: "campus-network-simulation",
    slug: "enterprise-campus-network-simulation",
    title: "Enterprise Campus Network Infrastructure & Security Simulation",
    shortDescription: "A large-scale enterprise network architecture simulation implementing multi-switch hierarchical topologies, VLAN segmentation, 802.1Q trunking, inter-VLAN routing, and DHCP relay infrastructure.",
    fullDescription: "A comprehensive enterprise network simulation modeled in Cisco Packet Tracer. The project implements a complete corporate campus infrastructure featuring redundant core/distribution/access switching, VLAN segmentation for departmental isolation, dynamic IP leasing pools, and secure Cisco IOS CLI router hardening.",
    category: "Software Development",
    categories: ["Software Development", "Business Solutions"],
    technologies: ["Cisco Packet Tracer", "Cisco IOS CLI", "VLANs (802.1Q)", "Inter-VLAN Routing", "DHCP Relay", "DNS Server Deployment", "VLSM Subnetting"],
    projectType: "Individual Infrastructure Project",
    isTeam: false,
    featured: false,
    completionDate: "2024",
    status: "Complete Simulation Topology",
    thumbnail: "/assets/projects/dashboard_filtered_furniture.png",
    gallery: [
      "/assets/projects/dashboard_filtered_furniture.png"
    ],
    role: "Network Systems Engineer",
    problem: "Corporate enterprises require segregated, high-availability local networks to prevent broadcast storm paralysis and enforce departmental data boundaries between admin, staff, and public domains.",
    solution: "Designed and configured a complete 143.8 KB master simulation topology with multi-switch distribution, router-on-a-stick inter-VLAN routing, automated DHCP scopes, and hardened router CLI security.",
    keyFeatures: [
      "Hierarchical campus switching topology with redundant trunk links",
      "Departmental VLAN segregation enforcing zero broadcast leakage",
      "Dynamic DNS and DHCP server deployment with relay agents",
      "Cisco IOS command-line interface configuration and password encryption"
    ],
    outcomes: "Fully operational network topology verified in master `.pkt` files demonstrating network engineering fluency.",
    links: {},
    teamCredits: null
  }
];

export const projectCategories = [
  "All",
  "Artificial Intelligence",
  "Software Development",
  "Web Applications",
  "Data Analytics",
  "Business Intelligence",
  "Business Solutions"
];
