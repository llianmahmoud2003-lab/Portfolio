// src/data/projectsData.js - 10 Audited Projects with Real Clickable Links & Verified Visuals
const projectsData = [
  {
    id: "lilianoura",
    slug: "lilianoura-enterprise-cockpit",
    title: {
      en: "LILIANOURA — Enterprise SaaS & AI Operating Cockpit",
      ar: "LILIANOURA — منصة التشغيل المؤسسي وقمرة قيادة الذكاء الاصطناعي"
    },
    shortDescription: {
      en: "A multi-tenant enterprise cloud operating platform and AI copilot system designed for real-time executive governance, cross-departmental telemetry, and autonomous intelligence workflows.",
      ar: "منصة سحابية متعددة المستأجرين وقمرة قيادة مدعومة بالذكاء الاصطناعي، صُممت للحوكمة التنفيذية الفورية وربط الأقسام وأتمتة مسارات العمل الذكية."
    },
    fullDescription: {
      en: "LILIANOURA represents the flagship enterprise engineering milestone. Architected with high-rigor multi-tenant boundary isolation, automated schema migrations, and an AI-driven decision engine, the system delivers unified command over finance, operations, CRM, HR, and strategic portfolio governance.",
      ar: "يمثل مشروع LILIANOURA المحطة الهندسية الرائدة؛ حيث تم بناؤه بعزل صارم لبيانات المستأجرين، وترقيات مؤتمتة لقواعد البيانات، ومحرك قرارات مدعوم بالذكاء الاصطناعي لقيادة موحدة للعمليات المالية وإدارة الموارد وعلاقات العملاء."
    },
    category: {
      en: "Artificial Intelligence",
      ar: "الذكاء الاصطناعي"
    },
    categories: ["Artificial Intelligence", "Software Development", "Web Applications"],
    technologies: ["Next.js 15.1", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "Vitest", "Tailwind CSS"],
    projectType: {
      en: "Individual / Personal Flagship",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: true,
    heroFeatured: true,
    completionDate: {
      en: "November 2026",
      ar: "نوفمبر 2026"
    },
    status: {
      en: "Production-Ready / Fully Defended",
      ar: "جاهز للإنتاج / معتمد وموثق"
    },
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png",
      "./public/assets/projects/discount_cliff_analysis.png"
    ],
    role: {
      en: "Lead Software Architect & Full-Stack Systems Engineer",
      ar: "كبير مهندسي البرمجيات ومطور النظم المتكاملة"
    },
    problem: {
      en: "Modern enterprise executive suites suffer from fragmented departmental silos, asynchronous reporting lags, and an absence of verifiable, real-time telemetry across operations, capital allocation, and governance.",
      ar: "تعاني القيادات التنفيذية من انعزال الأقسام، وبطء إعداد التقارير، وغياب المؤشرات اللحظية الموثوقة لمتابعة الأداء التشغيلي ورأس المال والحوكمة."
    },
    solution: {
      en: "Engineered an integrated cloud cockpit with hardened multi-tenant boundary guarantees, automated schema migration pipelines (Drizzle SQL), type-safe runtime validations (Zod), and 194 automated test assertions across 20 Vitest test suites.",
      ar: "بناء قمرة قيادة سحابية موحدة بحواجز عزل صارمة بين المؤسسات، وترقيات مؤتمتة لقواعد البيانات عبر Drizzle ORM، وتحقق فوري من سلامة البيانات عبر Zod، مع 194 اختباراً مؤتمتاً ناجحاً عبر 20 حزمة اختبار Vitest."
    },
    metrics: [
      { value: "194", label: { en: "Automated Vitest Assertions", ar: "اختبار فحص مؤتمت ناجح" } },
      { value: "20", label: { en: "Full-Stack Test Suites", ar: "حزمة اختبارات شاملة" } },
      { value: "100%", label: { en: "Multi-Tenant Isolation", ar: "عزل تام لبيانات المستأجرين" } }
    ],
    links: {
      github: "https://github.com/llianmahmoud2003-lab/LILIANOURA-",
      demo: null,
      figma: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Production-grade Next.js App Router source code repository",
        "Automated Drizzle ORM migrations with rollback safety triggers",
        "Interactive analytics dashboards with real-time reactive updates",
        "Comprehensive Vitest test suite with 100% critical route coverage"
      ],
      ar: [
        "مستودع الكود المصدري الكامل للمنصة بنظام Next.js App Router",
        "نظام ترقية وتراجع مؤتمت لقواعد البيانات عبر Drizzle ORM",
        "لوحات بيانات تفاعلية مع تحديثات استجابة لحظية",
        "حزمة اختبارات Vitest تغطي 100% من المسارات الحيوية للنظام"
      ]
    },
    teamCredits: null
  },
  {
    id: "trainova",
    slug: "trainova-field-training-platform",
    title: {
      en: "Trainova — Multi-Institutional Field Training Ecosystem",
      ar: "Trainova — المنظومة الذكية لإدارة التدريب الميداني الجامعي"
    },
    shortDescription: {
      en: "A collaborative multi-university digital ecosystem streamlining student field training placements, enterprise supervisor evaluations, institutional oversight, and AI-assisted performance reporting across universities in the Gaza Strip.",
      ar: "منظومة رقمية تعاونية متعددة الجامعات لأتمتة التدريب الميداني للطلبة، وتقييمات المشرفين، والرقابة الأكاديمية، والتقارير المدعومة بالذكاء الاصطناعي لجامعات قطاع غزة."
    },
    fullDescription: {
      en: "Trainova was engineered as a collaborative graduation team project to solve complex logistical friction in academic field training. Qualified among the Top 10 Projects in the regional Hackathon, the system orchestrates internship matching, weekly progress tracking, multi-criteria evaluations, and automated AI summary generation.",
      ar: "تم تطوير Trainova كمشروع تخرج جماعي تعاوني لحل الإشكاليات اللوجستية في التدريب الميداني الجامعي، وتأهل الفريق ضمن أفضل 10 مشاريع في الهاكاثون الإقليمي. تخدم المنظومة الطلبة والمشرفين الأكاديميين ومسؤولي التدريب وتدير التقييم والتحليل الذكي."
    },
    category: {
      en: "Web Applications",
      ar: "تطبيقات الويب والأنظمة"
    },
    categories: ["Web Applications", "Software Development", "Artificial Intelligence", "UI/UX & Product Design"],
    technologies: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Motion", "Lucide React", "Google Gemini API", "Node.js", "Express", "MySQL", "JWT", "Bcrypt", "PDFKit", "Figma"],
    projectType: {
      en: "Collaborative Graduation Team Project",
      ar: "مشروع تخرج جماعي تعاوني"
    },
    isTeam: true,
    featured: true,
    heroFeatured: true,
    completionDate: {
      en: "June 2026",
      ar: "يونيو 2026"
    },
    status: {
      en: "Top 10 Hackathon Finalist / Fully Defended",
      ar: "متأهل لأفضل 10 مشاريع في الهاكاثون / معتمد وموثق"
    },
    thumbnail: "./public/assets/projects/figma-work/figma_asset_14.png",
    gallery: [
      "./public/assets/projects/figma-work/figma_asset_14.png",
      "./public/assets/projects/dashboard_screenshot.png"
    ],
    role: {
      en: "Collaborative Graduation Team Member — Frontend Architecture & API Integration Specialist",
      ar: "عضو فريق مشروع التخرج التعاوني — متخصصة واجهات المستخدم وهندسة الربط البرمجي"
    },
    problem: {
      en: "Academic field training coordination across universities suffers from fragmented paper workflows, unverified attendance records, subjective manual evaluation rubrics, and high administrative friction for students and institutions.",
      ar: "يعاني التدريب الميداني في الجامعات من الإجراءات الورقية المتفرقة، وصعوبة التحقق من الحضور، وغياب معايير التقييم المؤتمتة، والعبء الإداري الكبير على الطلبة والمشرفين."
    },
    solution: {
      en: "Designed and implemented a responsive, role-based single-page application (React 19 + TypeScript) supported by an Express/MySQL REST API with automated JWT session security, PDF evaluation generation, and Gemini AI assessment assistance.",
      ar: "تصميم وتنفيذ تطبيق ويب تفاعلي قائم على الصلاحيات (React 19 + TypeScript) مدعوم بخادم Express وقاعدة بيانات MySQL، مع مصادقة JWT، وتوليد شهادات PDF، ومساعد Gemini الذكي للتقييم الأكاديمي."
    },
    metrics: [
      { value: "Top 10", label: { en: "Hackathon Finalist Qualification", ar: "تأهل لأفضل 10 مشاريع في الهاكاثون" } },
      { value: "4 Roles", label: { en: "Role-Based Multi-Portal Architecture", ar: "بوابات متخصصة للأدوار الأربعة" } },
      { value: "REST API", label: { en: "Postman-Verified Endpoints", ar: "واجهات برمجية معتمدة ومختبرة" } }
    ],
    links: {
      github: "https://github.com/Tranova-Smart-Internship-Managment/Trainova-Latest-Release",
      figma: "https://www.figma.com/file/bC2eUPygmBzVCNKsesrTVw",
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Complete React 19 + TypeScript frontend application codebase",
        "Secure Node.js / Express backend with MySQL database schema",
        "Official Figma Master UI/UX Design System",
        "Trainova Postman API collection with comprehensive request suites",
        "Automated PDF reporting engine using PDFKit"
      ],
      ar: [
        "كود الواجهة الأمامية الكامل بتقنيات React 19 و TypeScript",
        "خادم Node.js / Express مؤمن بالكامل مع هيكل قاعدة بيانات MySQL",
        "نظام التصميم الشامل وواجهات الاستخدام على Figma",
        "مجموعة اختبارات Postman الشاملة لجميع مسارات النظام",
        "محرك توليد تقارير PDF التنفيذية باستخدام مكتبة PDFKit"
      ]
    },
    teamCredits: {
      en: "Collaborative graduation team project developed in collaboration between Computer Science & Information Systems graduates representing universities in the Gaza Strip. Qualified among the Top 10 Projects in the regional Hackathon.",
      ar: "مشروع تخرج جماعي تعاوني تم تنفيذه بالتعاون بين خريجي كليات الحاسوب ونظم المعلومات في جامعات قطاع غزة، وتأهل الفريق ضمن أفضل 10 مشاريع في الهاكاثون الإقليمي."
    }
  },
  {
    id: "figma-design-system",
    slug: "figma-master-ui-ux-design-system",
    title: {
      en: "Enterprise UI/UX Design System & Interactive Prototypes",
      ar: "نظام التصميم الشامل للواجهات والنماذج التفاعلية (Figma)"
    },
    shortDescription: {
      en: "A comprehensive 9.86 MB master Figma UI/UX architecture containing multi-scale component libraries, design tokens, responsive breakpoints, high-fidelity user journeys, and interactive clickable prototypes.",
      ar: "معمارية تصميم واجهات كاملة بحجم 9.86 ميجابايت على Figma، تتضمن مكتبات عناصر متقدمة، وتوكنز التصميم، وشاشات متجاوبة، ونماذج تفاعلية حية قابلة للتجربة."
    },
    fullDescription: {
      en: "Engineered to institutional design standards, this master Figma design system defines typography hierarchies, atomic design tokens, accessible color contrasts, auto-layout responsive components, and full end-to-end interactive user flows tested across mobile and desktop viewport profiles.",
      ar: "تم بناء هذا المشروع بأعلى معايير التصميم المؤسسي؛ حيث يحدد التسلسل الطباعي، وتوكنز التصميم الذري (Tokens)، وتباين الألوان الملائم للإتاحة، ومكونات Auto-Layout فائقة المرونة، ومسارات تدفق المستخدم التفاعلية بالكامل."
    },
    category: {
      en: "UI/UX & Product Design",
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)"
    },
    categories: ["UI/UX & Product Design", "Web Applications"],
    technologies: ["Figma Desktop", "Interactive Prototyping", "Design Tokens", "Auto Layout 5.0", "Atomic Design", "Responsive Components", "User Flow Mapping"],
    projectType: {
      en: "Individual / Solo Design System",
      ar: "مشروع فردي / نظام تصميم رائد"
    },
    isTeam: false,
    featured: true,
    completionDate: {
      en: "2026",
      ar: "2026"
    },
    status: {
      en: "Master .fig Verified (9.86 MB) / Live Prototypes",
      ar: "ملف .fig أصلي مدقق (9.86 ميجابايت) / نماذج تفاعلية حية"
    },
    thumbnail: "./public/assets/projects/figma-work/figma_portfolio_thumbnail.png",
    gallery: [
      "./public/assets/projects/figma-work/figma_portfolio_thumbnail.png",
      "./public/assets/projects/figma-work/figma_asset_14.png",
      "./public/assets/projects/figma-work/figma_asset_9.png",
      "./public/assets/projects/figma-work/figma_asset_5.png"
    ],
    role: {
      en: "Lead Product Designer & UI/UX Systems Architect",
      ar: "رئيسة تصميم المنتجات الرقمية ومعمارية نظم UI/UX"
    },
    problem: {
      en: "Digital products built without centralized design systems suffer from visual fragmentation, inconsistent component states, uncoordinated developer handoffs, and inaccessible contrast ratios.",
      ar: "تتعرض المنتجات الرقمية للتشتت البصري وضعف التناسق وغياب المعايير الموحدة عند غياب نظام تصميم مركزي يدير المكونات وحالات التفاعل ويسهّل تسليم الكود للمطورين."
    },
    solution: {
      en: "Constructed an atomic Figma design system featuring responsive Auto-Layout components, color and typography variables, interactive states (hover, active, disabled), and clickable prototypes.",
      ar: "بناء نظام تصميم متكامل على Figma بمكونات Auto-Layout تفاعلية، ومتغيرات الألوان والخطوط، ومحاكاة دقيقة لحالات التفاعل مع نماذج تفاعلية مباشرة قابلة للنقر."
    },
    metrics: [
      { value: "9.86 MB", label: { en: "Master Figma Architecture File", ar: "حجم ملف التصميم الأصلي المعتمد" } },
      { value: "Interactive", label: { en: "Live Clickable Prototypes", ar: "نماذج تفاعلية حية قابلة للتجربة" } },
      { value: "100%", label: { en: "Auto-Layout Component Fidelity", ar: "توافق كامل مع Auto-Layout" } }
    ],
    links: {
      figma: "https://www.figma.com/file/LFH9VzFzJMvc0fcNphkwGy",
      figmaAlt: "https://www.figma.com/design/iD2GO53QLhizl1MPvMF6xP/Untitled?node-id=129-5138",
      prototype: "https://www.figma.com/proto/LFH9VzFzJMvc0fcNphkwGy?node-id=91-967",
      prototypeAlt: "https://www.figma.com/proto/wMWPbD9ojwBIjYMHfXNlVv?node-id=13-414",
      github: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Master Figma file (.fig, 9.86 MB) with structured component pages",
        "Live interactive prototype links for stakeholder testing",
        "High-density visual design asset exports ready for development handoff",
        "Design token specifications covering colors, typography, and elevations"
      ],
      ar: [
        "ملف Figma الأصلي الكامل (.fig بحجم 9.86 ميجابايت) بصفحات ومكونات منظمة",
        "روابط نماذج أولية تفاعلية حية لاختبار تجربة المستخدم",
        "مخرجات تصميم عالية الدقة مجهزة للتسليم الهندسي والتطوير",
        "توثيق مواصفات توكنز التصميم للألوان والخطوط والظلال والمسافات"
      ]
    },
    teamCredits: null
  },
  {
    id: "retail-sales-intelligence",
    slug: "retail-sales-margin-intelligence",
    title: {
      en: "Retail Sales Intelligence & Executive Margin Analytics",
      ar: "منصة ذكاء مبيعات التجزئة والتحليل المتقدم لهوامش الربحية"
    },
    shortDescription: {
      en: "An institutional business intelligence platform analyzing multi-year commercial transactions to detect margin erosion, customer discount cliffs, and sub-category profitability across enterprise retail channels.",
      ar: "منصة ذكاء أعمال مؤسسية لتحليل المعاملات التجارية لعدة سنوات، واكتشاف تآكل هوامش الأرباح، ومخاطر الخصومات، وتحليل ربحية الفئات في تجارة التجزئة."
    },
    fullDescription: {
      en: "Built to transform dense operational transaction records into definitive board-level decisions, this analytics suite diagnoses discount destruction, models profitability thresholds, and delivers interactive visual filtering across regional enterprise territories.",
      ar: "صُممت هذه المنصة لتحويل ملايين سجلات المبيعات إلى قرارات استراتيجية حاسمة لمجلس الإدارة، وتشخيص فخاخ الخصم، ونمذجة عتبات الربحية، مع لوحات تحكم تفاعلية متقدمة."
    },
    category: {
      en: "Data Analytics",
      ar: "تحليل البيانات وذكاء الأعمال"
    },
    categories: ["Data Analytics", "Business Intelligence", "Business Solutions"],
    technologies: ["Python (Pandas)", "JavaScript ES6+", "HTML5 Canvas", "SVG Visualization", "CSS Grid", "Excel Modeling", "Statistical Analytics"],
    projectType: {
      en: "Individual / Solo Project",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: true,
    completionDate: {
      en: "November 2026",
      ar: "نوفمبر 2026"
    },
    status: {
      en: "Verified Repository / Production-Ready",
      ar: "مستودع موثق / جاهز للإنتاج"
    },
    thumbnail: "./public/assets/projects/discount_cliff_analysis.png",
    gallery: [
      "./public/assets/projects/discount_cliff_analysis.png",
      "./public/assets/projects/sub_category_profitability.png",
      "./public/assets/projects/dashboard_screenshot.png",
      "./public/assets/projects/dashboard_filtered_central.png"
    ],
    role: {
      en: "Lead Commercial Systems & Quantitative Analytics Engineer",
      ar: "مهندسة النظم التجارية والتحليل الكمي للبيانات"
    },
    problem: {
      en: "Retail enterprises frequently achieve record top-line gross revenues while experiencing alarming net profit erosion caused by unmonitored discount cliffs and negative-margin product categories.",
      ar: "تحقق شركات التجزئة في كثير من الأحيان إيرادات إجمالية قياسية، بينما تعاني أرباحها الصافية من تآكل خطير بسبب خصومات غير منضبطة وفئات منتجات خاسرة."
    },
    solution: {
      en: "Engineered an interactive executive dashboard that surfaces margin leakage, plots empirical discount destruction curves, and isolates high-loss sub-categories (e.g. Tables and Binders) with granular drill-down filters.",
      ar: "بناء لوحة تحكم تنفيذية تكشف مواطن نزيف الأرباح، وترسم منحنيات تدمير الهامش بفعل الخصومات، وتعزل المنتجات ذات العوائد السلبية مع فلاتر تفاعلية دقيقة."
    },
    metrics: [
      { value: "$2.30M", label: { en: "Audited Revenue Volume", ar: "حجم المبيعات المدقق" } },
      { value: "12.47%", label: { en: "Baseline Profit Margin", ar: "متوسط هامش الربحية الأساسي" } },
      { value: ">20%", label: { en: "Discount Cliff Risk Threshold", ar: "عتبة الخطر لتدمير الأرباح" } }
    ],
    links: {
      github: "https://github.com/llianmahmoud2003-lab/retail-sales-intelligence",
      demo: null,
      figma: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Interactive standalone analytics dashboard application",
        "High-resolution data visualization chart assets for board reporting",
        "Discount sensitivity analysis with executive recommendations",
        "Comprehensive client reporting package (Excel, Word, PowerPoint, PDF)"
      ],
      ar: [
        "تطبيق لوحة تحكم تفاعلية شامل ومستقل للتحليل الفوري",
        "أصول رسوم بيانية عالية الدقة مخصصة لعروض الإدارة العليا",
        "دراسة حساسية الخصومات مع توصيات تنفيذية لحماية الأرباح",
        "حزمة المخرجات التنفيذية المتكاملة (Excel, Word, PowerPoint, PDF)"
      ]
    },
    teamCredits: null
  },
  {
    id: "flutter-mobile-app",
    slug: "cross-platform-mobile-application-flutter",
    title: {
      en: "Cross-Platform Mobile Application Architecture (Flutter)",
      ar: "تطوير تطبيقات الهاتف متعددة المنصات (Flutter & Dart)"
    },
    shortDescription: {
      en: "A native-performance cross-platform mobile application engineered with Flutter and Dart, featuring modular widget trees, Material Design UI components, clean navigation routing, and responsive mobile screen flows.",
      ar: "تطبيق هاتف متعدد المنصات عالي الأداء مبني بتقنيات Flutter و Dart، يتميز بهيكل برمجي نمطي، وعناصر Material Design، وإدارة تنقل سلسة، وشاشات تفاعلية متجاوبة."
    },
    fullDescription: {
      en: "Engineered to deliver seamless mobile user experiences, this Flutter application implements stateful and stateless widget hierarchies, custom theme styling, user authentication views, data input forms, and dynamic list renderings validated across multiple mobile screen sizes.",
      ar: "صُمم هذا التطبيق ليقدم تجربة استخدام رائدة على الهواتف الذكية؛ حيث يطبق هيكل عناصر نمطي (Stateful & Stateless)، وتنسيقات سمات مخصصة، وشاشات مصادقة المستخدمين، ونماذج إدخال البيانات، والقوائم الديناميكية."
    },
    category: {
      en: "Mobile Applications",
      ar: "تطبيقات الهاتف المحمول"
    },
    categories: ["Mobile Applications", "Software Development", "UI/UX & Product Design"],
    technologies: ["Flutter SDK", "Dart", "Material Design 3", "Responsive UI", "State Management", "Mobile Architecture"],
    projectType: {
      en: "Individual / Solo Mobile Milestone",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2025",
      ar: "2025"
    },
    status: {
      en: "10 Verified Application Screen Assets Preserved",
      ar: "10 شاشات أصلية عالية الدقة موثقة للتطبيق"
    },
    thumbnail: "./public/assets/projects/flutter/مشروع 1.png",
    gallery: [
      "./public/assets/projects/flutter/مشروع 1.png",
      "./public/assets/projects/flutter/مشروع 2.png",
      "./public/assets/projects/flutter/2.png",
      "./public/assets/projects/flutter/3.png",
      "./public/assets/projects/flutter/مشروع 4.png"
    ],
    role: {
      en: "Mobile Application Developer & Flutter Engineer",
      ar: "مطورة تطبيقات الهاتف وهندسة Flutter"
    },
    problem: {
      en: "Developing separate codebases for iOS and Android inflates maintenance costs and introduces UI inconsistencies across mobile operating systems.",
      ar: "تطوير تطبيقات منفصلة لكل نظام تشغيل يزيد من تكاليف الصيانة ويتسبب في تباين تجربة الاستخدام بين أنظمة الهواتف المختلفة."
    },
    solution: {
      en: "Implemented a unified single-codebase Flutter mobile application with responsive widgets, clean architecture separation, and custom visual assets.",
      ar: "بناء تطبيق موحد بقاعدة كود واحدة عبر Flutter، مع عناصر واجهة متجاوبة، وفصل نظيف لطبقات الكود، ومخرجات بصرية أنيقة."
    },
    metrics: [
      { value: "10 Screens", label: { en: "High-Resolution Application Views", ar: "شاشات تفاعلية مكتملة للتطبيق" } },
      { value: "Single Codebase", label: { en: "Multi-Platform Compatibility", ar: "كود موحد يعمل على المنصات" } },
      { value: "60 FPS", label: { en: "Smooth Native Performance", ar: "أداء سلس وسرعة استجابة فائقة" } }
    ],
    links: {
      github: null,
      figma: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "10 high-resolution application screenshots preserved in local assets",
        "Clean Flutter widget architecture implementing Material Design 3",
        "Complete user flow navigation spanning authentication and feature workflows"
      ],
      ar: [
        "10 شاشات عالية الدقة موثقة ومحفوظة ضمن أصول المشروع",
        "بنية عناصر برمجية منظمة وفق معايير Material Design 3",
        "مسار تنقل كامل للمستخدم يغطي المصادقة والوظائف الرئيسية"
      ]
    },
    teamCredits: null
  },
  {
    id: "codemap-portal",
    slug: "university-course-registration-platform",
    title: {
      en: "University Course Registration & Systems Analysis Platform (Code MAP)",
      ar: "بوابة التسجيل الأكاديمي الجامعي وتحليل النظم (Code MAP)"
    },
    shortDescription: {
      en: "An institutional systems analysis, Software Requirements Specification (SRS), user story backlog, and role-based interface architecture for a university course registration platform.",
      ar: "توثيق وتحليل نظم مؤسسي شامل يشمل وثيقة متطلبات البرمجيات (SRS)، وسجل قصص المستخدمين، وهندسة الواجهات القائمة على الأدوار لبوابة التسجيل الجامعي."
    },
    fullDescription: {
      en: "Anchored in rigorous Management Information Systems engineering, this project delivers comprehensive Software Requirements Specifications (SRS), functional decomposition, actor-role workflows, and high-resolution interface designs for student and registrar administrative journeys.",
      ar: "انطلاقاً من تخصص نظم المعلومات الإدارية، يقدم هذا المشروع وثيقة متطلبات برمجية متكاملة (SRS)، وتفكيكاً دقيقاً للوظائف، ومسارات عمل أدوار المستخدمين، وتصاميم واجهات عالية الدقة لرحلة الطالب والتسجيل الأكاديمي."
    },
    category: {
      en: "Systems Analysis & Engineering",
      ar: "تحليل وتصميم النظم المؤسسية"
    },
    categories: ["Systems Analysis & Engineering", "Software Development", "UI/UX & Product Design"],
    technologies: ["Systems Analysis & Design", "SRS Documentation", "User Story Mapping", "UI Wireframing", "Role-Based Architecture"],
    projectType: {
      en: "Individual / Systems Engineering Milestone",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2025",
      ar: "2025"
    },
    status: {
      en: "Formal SRS Documents & Verified UI Screens Preserved",
      ar: "وثائق SRS رسمية وتصاميم واجهات موثقة"
    },
    thumbnail: "./public/assets/projects/codemap/02 - Welcome Screen.png",
    gallery: [
      "./public/assets/projects/codemap/02 - Welcome Screen.png",
      "./public/assets/projects/codemap/03 - Choose Role Screen.png",
      "./public/assets/projects/codemap/Student Registration Screen.png",
      "./public/assets/projects/codemap/wel4@3x.png"
    ],
    role: {
      en: "Information Systems Analyst & Requirements Engineer",
      ar: "محللة نظم معلومات ومهندسة متطلبات البرمجيات"
    },
    problem: {
      en: "Course registration software frequently fails due to ambiguous requirement specifications, unhandled prerequisite rules, and poor UX mapping during peak semester registration windows.",
      ar: "غالباً ما تواجه بوابات التسجيل الجامعي أخطاء تشغيلية بسبب غموض متطلبات النظام، وعدم معالجة قواعد المتطلبات السابقة للمساقات، وضعف تجربة الاستخدام في فترات الضغط."
    },
    solution: {
      en: "Authored formal Software Requirements Specifications (SRS), detailed User Stories with acceptance criteria, and designed role-specific onboarding screens.",
      ar: "إعداد وثيقة مواصفات المتطلبات البرمجية (SRS)، وتفصيل قصص المستخدمين بمعايير القبول، وتصميم شاشات اختيار الأدوار والتسجيل."
    },
    metrics: [
      { value: "Formal SRS", label: { en: "Complete Engineering Specification", ar: "وثيقة مواصفات هندسية متكاملة" } },
      { value: "8 Screens", label: { en: "High-Fidelity Interface Assets", ar: "شاشات وتصاميم واجهات عالية الدقة" } },
      { value: "User Stories", label: { en: "Role-Based Acceptance Criteria", ar: "قصص مستخدمين محددة المعايير" } }
    ],
    links: {
      github: null,
      figma: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Formal SRS documentation (`Secure and Scalable University Course Registration Platform.docx`)",
        "User Story mapping and functional requirements backlog",
        "High-density interface mockup assets (`Welcome Screen.png`, `Choose Role Screen.png`)"
      ],
      ar: [
        "وثيقة مواصفات المتطلبات البرمجية الرسمية (SRS)",
        "خارطة قصص المستخدمين وسجل المتطلبات الوظيفية للنظام",
        "أصول تصاميم الواجهات عالية الدقة لشاشات الترحيب واختيار الأدوار"
      ]
    },
    teamCredits: null
  },
  {
    id: "student-grades",
    slug: "student-grades-management-system",
    title: {
      en: "Student Grades Management System",
      ar: "نظام إدارة درجات وسجلات الطلبة الجامعيين"
    },
    shortDescription: {
      en: "A secure, relational database-driven academic portal for authenticated student record management, course enrollments, grade calculations, and transcript verification.",
      ar: "بوابة أكاديمية آمنة قائمة على قواعد البيانات العلائقية لإدارة سجلات الطلبة والمساقات وحساب المعدلات وتوثيق كشوف الدرجات."
    },
    fullDescription: {
      en: "Engineered with foundational software rigor, this academic platform provides role-authenticated access for instructors and students, enforcing ACID transactional integrity across enrollment records, cumulative GPA calculations, and student evaluations.",
      ar: "تم بناء هذا النظام بانضباط برمجي وهندسي، ويوفر مصادقة دقيقة للطلبة والمدرسين مع حماية سلامة البيانات (ACID)، وحساب المعدلات التراكمية، وإدارة السجلات الأكاديمية."
    },
    category: {
      en: "Software Development",
      ar: "تطوير الأنظمة والبرمجيات"
    },
    categories: ["Software Development", "Web Applications"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Apache", "Session Authentication"],
    projectType: {
      en: "Individual / Solo Project",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2024",
      ar: "2024"
    },
    status: {
      en: "Verified Codebase in GitHub Repository",
      ar: "كود مصدري مدقق وموثق على GitHub"
    },
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png"
    ],
    role: {
      en: "Full-Stack Backend & Database Engineer",
      ar: "مهندسة تطوير الأنظمة الخلفية وقواعد البيانات"
    },
    problem: {
      en: "Manual academic grading workflows suffer from transcription errors, unauthenticated modification risks, and slow student inquiry cycles during examination grading windows.",
      ar: "تتسبب عمليات رصد الدرجات اليدوية في أخطاء التسجيل ومخاطر التعديل غير المصرح به وبطء استخراج كشوف الدرجات للطلبة."
    },
    solution: {
      en: "Implemented a normalized relational database schema (students_db.sql) with PHP session authentication, input sanitization against SQL injection, and real-time GPA recalculation upon grade entry.",
      ar: "تصميم قاعدة بيانات معيارية (students_db.sql) مع مصادقة الجلسات عبر PHP، وحماية المدخلات من ثغرات الحقن، وإعادة حساب المعدلات التراكمية فورياً."
    },
    metrics: [
      { value: "100%", label: { en: "ACID Database Integrity", ar: "سلامة وموثوقية المعاملات" } },
      { value: "Instant", label: { en: "Transcript Generation", ar: "استخراج فوري لكشف الدرجات" } },
      { value: "Secure", label: { en: "Session Protection", ar: "حماية الجلسات والمصادقة" } }
    ],
    links: {
      github: "https://github.com/llianmahmoud2003-lab/php-student-grade-system",
      demo: null,
      figma: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Complete PHP backend source code repository",
        "Normalized MySQL schema script (students_db.sql)",
        "Authentication and configuration module (config.php, login.php)"
      ],
      ar: [
        "مستودع الكود المصدري الكامل للنظام بلغة PHP",
        "مخطط قاعدة بيانات MySQL المعياري (students_db.sql)",
        "وحدات المصادقة وإعدادات الاتصال الآمن (config.php, login.php)"
      ]
    },
    teamCredits: null
  },
  {
    id: "al-najma",
    slug: "al-najma-electronics-transformation",
    title: {
      en: "Al-Najma Electronics — Financial Engineering & Digital Transformation",
      ar: "شركة النجمة للإلكترونيات — الهندسة المالية والتحول الرقمي"
    },
    shortDescription: {
      en: "Dynamic enterprise operational modeling, branch profitability governance, automated KPI tracking, and multi-sheet financial modeling for a multi-branch commercial electronics enterprise.",
      ar: "نمذجة تشغيلية مؤسسية متقدمة، وحوكمة ربحية الفروع، ومتابعة مؤتمتة لمؤشرات الأداء، ونمذجة مالية شاملة لشركة تجارية متعددة الفروع."
    },
    fullDescription: {
      en: "Developed as a flagship commercial transformation engagement, this project modernized manual retail ledgers into an automated four-sheet analytical model covering daily operations, statistical variance, management dashboards, and board-level risk audits.",
      ar: "نُفذ هذا المشروع كنموذج رائد للتحول الرقمي التجاري؛ حيث جرى تحويل السجلات اليدوية إلى نموذج تحليلي مؤتمت عبر 4 أوراق عمل ديناميكية تشمل العمليات اليومية، والتباين الإحصائي، ولوحات التحكم، وتدقيق المخاطر."
    },
    category: {
      en: "Business Solutions",
      ar: "الحلول التجارية والمالية"
    },
    categories: ["Business Solutions", "Data Analytics", "Business Intelligence"],
    technologies: ["Advanced Excel Modeling", "Nested Financial Logic", "Conditional Formatting", "Statistical Variance Analysis", "Dynamic Charts"],
    projectType: {
      en: "Individual / Solo Client Transformation",
      ar: "مشروع فردي / تحول رقمي لمؤسسة تجارية"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2026",
      ar: "2026"
    },
    status: {
      en: "Client Delivery Complete / Confidential Metrics Preserved",
      ar: "تم التسليم للعميل / مع الحفاظ التام على خصوصية البيانات"
    },
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png"
    ],
    role: {
      en: "Commercial Information Systems Consultant & Lead Financial Modeler",
      ar: "مستشارة نظم المعلومات التجارية ومطورة النماذج المالية"
    },
    problem: {
      en: "Branch managers operated without unified real-time gross margin visibility, leading to uncoordinated discount approvals, inventory carrying inefficiencies, and delayed end-of-month reconciliation.",
      ar: "كانت فروع الشركة تعمل دون رؤية موحدة وفورية لهوامش الأرباح الإجمالية؛ مما أدى إلى خصومات عشوائية غير منسقة، وتأخر مطابقة الحسابات الشهرية."
    },
    solution: {
      en: "Built a fully formulated, multi-sheet workbook integrating transactional data, automated summary statistics (SUM, AVERAGE, MIN, MAX, COUNTIF), dynamic pivot charts, and executive narrative reporting.",
      ar: "بناء مصنف عمل مالي مؤتمت بالكامل يدمج العمليات اليومية، والإحصاءات الحسابية المتقدمة، والمخططات البيانية التفاعلية، والتقارير التنفيذية التوجيهية."
    },
    metrics: [
      { value: "4 Sheets", label: { en: "Dynamic Analytical Model", ar: "أوراق عمل ديناميكية مترابطة" } },
      { value: "100%", label: { en: "Formulaic Automation", ar: "أتمتة حسابية كاملة بالمعادلات" } },
      { value: "Zero Loss", label: { en: "Confidentiality Protection", ar: "حماية تامة لسرية العميل" } }
    ],
    links: {
      download: "./public/assets/downloads/Business_Performance_Tracker.xlsx",
      github: null,
      figma: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Fully automated multi-sheet Excel commercial model",
        "Executive operational memorandum with policy change directives",
        "Client deliverable documentation package ready for institutional audits"
      ],
      ar: [
        "نموذج Excel تجاري متكامل ومؤتمت بالمعادلات المالية المتقدمة",
        "مذكرة إدارية تنفيذية تتضمن السياسات وضوابط منح الخصومات",
        "حزمة توثيق المخرجات الكاملة المجهزة للتدقيق الإداري والمؤسسي"
      ]
    },
    teamCredits: null
  },
  {
    id: "economic-feasibility",
    slug: "corporate-economic-feasibility-suite",
    title: {
      en: "Corporate Economic Feasibility & CapEx Valuation Suite",
      ar: "حقيبة دراسات الجدوى الاقتصادية وتقييم الإنفاق الرأسمالي (CapEx)"
    },
    shortDescription: {
      en: "Quantitative investment appraisal models evaluating capital expenditure (CapEx), working capital requirements, Net Present Value (NPV), and Internal Rate of Return (IRR) across industrial projects.",
      ar: "نماذج تقييم استثماري كمي لحساب الإنفاق الرأسمالي (CapEx)، ورأس المال العامل، وصافي القيمة الحالية (NPV)، ومعدل العائد الداخلي (IRR) للمشاريع الصناعية."
    },
    fullDescription: {
      en: "Grounded in corporate finance and managerial information systems, this quantitative suite formulates multi-phase economic feasibility appraisals for capital-intensive ventures, modeling depreciation schedules, cash flow projections, payback horizons, and sensitivity scenarios.",
      ar: "انطلاقاً من تخصص نظم المعلومات الإدارية والمالية، تقدم هذه النماذج دراسات جدوى كمية شاملة للمشاريع الاستثمارية، ونمذجة جداول الإهلاك، والتدفقات النقدية، وفترة الاسترداد، وحساسية العوائد."
    },
    category: {
      en: "Business Solutions",
      ar: "الحلول التجارية والمالية"
    },
    categories: ["Business Solutions", "Data Analytics"],
    technologies: ["Capital Budgeting", "NPV / IRR Modeling", "CapEx Appraisal", "Depreciation Schedules", "Sensitivity Analysis", "Financial Formulas"],
    projectType: {
      en: "Individual / Academic & Commercial Milestone",
      ar: "مشروع فردي / إنجاز أكاديمي وتجاري"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2025",
      ar: "2025"
    },
    status: {
      en: "Verified Original Workbooks (14.6 KB, 13.7 KB, 13.7 KB)",
      ar: "مصنفات أصلية مدققة بالمعادلات المالية"
    },
    thumbnail: "./public/assets/projects/sub_category_profitability.png",
    gallery: [
      "./public/assets/projects/sub_category_profitability.png"
    ],
    role: {
      en: "Financial Systems Modeler & Feasibility Analyst",
      ar: "محللة النظم المالية ونماذج الجدوى الاقتصادية"
    },
    problem: {
      en: "Capital-intensive ventures frequently fail due to unrealistic initial capital assumptions, poorly structured depreciation horizons, and failure to model the time value of money under varying discount rates.",
      ar: "تفشل المشاريع الرأسمالية غالباً بسبب تقديرات غير دقيقة لرأس المال الأولي، وجداول إهلاك غير واقعية، وإغفال القيمة الزمنية للنقود وتقلبات معدلات الخصم."
    },
    solution: {
      en: "Engineered formulated financial models computing Initial Investment Outlays, Working Capital reserves, 5-year operating cash flows, discounted payback periods, and hurdle-rate comparisons.",
      ar: "بناء نماذج مالية مؤتمتة بالمعادلات تحسب تكاليف الاستثمار المبدئي، واحتياطيات رأس المال العامل، والتدفقات النقدية لخمس سنوات، وفترة الاسترداد المخصومة."
    },
    metrics: [
      { value: "NPV / IRR", label: { en: "Dynamic Discounted Cash Flow", ar: "نمذجة التدفقات النقدية المخصومة" } },
      { value: "5-Year", label: { en: "Horizon Projections", ar: "إسقاطات مالية لخمس سنوات" } },
      { value: "100%", label: { en: "Audited Financial Formulas", ar: "معادلات مالية مدققة وموثقة" } }
    ],
    links: {
      download: "./public/assets/downloads/Business_Performance_Tracker.xlsx",
      github: null,
      figma: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Original economic feasibility appraisal workbooks with embedded formulas",
        "CapEx and working capital investment breakdown schedules",
        "Executive capital allocation recommendations for project promoters"
      ],
      ar: [
        "مصنفات دراسات الجدوى الاقتصادية الأصلية بالمعادلات المالية الكاملة",
        "جداول توزيع النفقات الرأسمالية واحتياطيات رأس المال العامل",
        "توصيات تنفيذية لقرارات تخصيص رأس المال لأصحاب المشاريع والمستثمرين"
      ]
    },
    teamCredits: null
  },
  {
    id: "enterprise-network",
    slug: "enterprise-campus-network-simulation",
    title: {
      en: "Enterprise Campus Network Simulation & Multi-Protocol Architecture",
      ar: "محاكاة الشبكات المؤسسية ومعمارية البروتوكولات المتعددة"
    },
    shortDescription: {
      en: "A Cisco Packet Tracer enterprise network topology implementing multi-subnet routing, dynamic DHCP pools, redundant DNS, OSPF routing, and Access Control List (ACL) security boundaries.",
      ar: "معمارية شبكة مؤسسية عبر Cisco Packet Tracer تطبق التوجيه متعدد الشبكات، وتوزيع عناوين DHCP الديناميكي، وخوادم DNS المكررة، وبروتوكول OSPF، وقوائم التحكم بالوصول (ACL)."
    },
    fullDescription: {
      en: "Designed as an enterprise infrastructure milestone, this project architects a multi-department campus network featuring redundant gateway routing, automated IP address lease pools, inter-VLAN routing, and hardened perimeter access control policies.",
      ar: "نُفذ هذا المشروع كنموذج رائد للبنية التحتية للمؤسسات؛ حيث يوفر شبكة جامعية ومؤسسية متعددة الأقسام مع بوابات توجيه احتياطية، وتوزيع مؤتمت للعناوين، وعزل شبكات VLAN، وسياسات أمنية محكمة."
    },
    category: {
      en: "Network Engineering",
      ar: "البنية التحتية والشبكات"
    },
    categories: ["Network Engineering", "Enterprise Infrastructure"],
    technologies: ["Cisco Packet Tracer", "OSPF Routing", "DHCP Server Configuration", "DNS Protocol", "VLAN Segmentation", "Router CLI Programming", "ACL Security"],
    projectType: {
      en: "Individual / Solo Engineering Milestone",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: false,
    completionDate: {
      en: "2025",
      ar: "2025"
    },
    status: {
      en: "Verified Master Topology Files (.pkt)",
      ar: "ملفات المحاكاة الأصلية المعتمدة (.pkt)"
    },
    thumbnail: "./public/assets/projects/dashboard_filtered_central.png",
    gallery: [
      "./public/assets/projects/dashboard_filtered_central.png"
    ],
    role: {
      en: "Network Systems Architect & Protocol Engineer",
      ar: "مهندسة معمارية الشبكات وبروتوكولات التوجيه"
    },
    problem: {
      en: "Enterprise campus networks experience severe degradation, broadcast storms, and security exposures when flat network topologies are deployed without VLAN segmentation or dynamic service redundancy.",
      ar: "تتعرض الشبكات المؤسسية للانهيار وعواصف البث واختراقات الأمان عند الاعتماد على شبكات مسطحة تفتقر إلى عزل VLAN وتكرار الخدمات الحيوية."
    },
    solution: {
      en: "Architected a hierarchical campus network featuring modular VLAN segmentation, dedicated DHCP and DNS servers, dynamic OSPF routing, and CLI router configuration scripts.",
      ar: "بناء معمارية هرمية لشبكة المؤسسة مع عزل شبكات VLAN، وتخصيص خوادم مستقلة للـ DHCP و DNS، وتوجيه OSPF ديناميكي، وبرمجة موجهات سيسكو عبر الـ CLI."
    },
    metrics: [
      { value: "Multi-Subnet", label: { en: "VLAN Segmentation Architecture", ar: "عزل شبكات VLAN المؤسسية" } },
      { value: "100%", label: { en: "Packet Delivery Verification", ar: "نسبة وصول الحزم واختبار الاتصال" } },
      { value: "Cisco CLI", label: { en: "Hardware Router Scripts", ar: "نصوص برمجة موجهات سيسكو" } }
    ],
    links: {
      github: null,
      figma: null,
      demo: null,
      caseStudy: true
    },
    deliverables: {
      en: [
        "Master Cisco Packet Tracer simulation topology files (.pkt)",
        "Router CLI configuration scripts and protocol implementation logs",
        "Addressing scheme matrix and subnet allocation documentation"
      ],
      ar: [
        "ملفات محاكاة طوبولوجيا الشبكة الأصلية بصيغة (.pkt)",
        "نصوص برمجة موجهات سيسكو (Router CLI) وسجلات ضبط البروتوكولات",
        "مصفوفة توزيع العناوين وخطة تقسيم الشبكات الفرعية (Subnets)"
      ]
    },
    teamCredits: null
  }
];

const projectCategories = [
  "All",
  "Artificial Intelligence",
  "Software Development",
  "Web Applications",
  "UI/UX & Product Design",
  "Data Analytics",
  "Mobile Applications",
  "Systems Analysis & Engineering",
  "Business Solutions",
  "Network Engineering"
];

if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
  window.projectCategories = projectCategories;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData, projectCategories };
}
