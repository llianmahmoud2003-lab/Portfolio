// src/data/projectsData.js - Centralized Bilingual Data Source for LILIAN ALKHAWALDA Portfolio
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
      en: "Software Development",
      ar: "تطوير الأنظمة والبرمجيات"
    },
    categories: ["Artificial Intelligence", "Software Development", "Web Applications"],
    technologies: ["Next.js 15.1", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "Vitest", "Tailwind CSS"],
    projectType: {
      en: "Individual / Personal Flagship",
      ar: "مشروع فردي / رائد"
    },
    isTeam: false,
    featured: true,
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
    keyFeatures: {
      en: [
        "Modular App Router architecture with strict tenant isolation barriers",
        "Real-time executive cockpit telemetry and cross-departmental signal synthesis",
        "AI Gateway with verifiable reasoning loops and strict output enforcement",
        "Automated database migrations and transactional schema rollback protection",
        "20 automated Vitest test suites with 194 passing assertions"
      ],
      ar: [
        "معمارية سحابية موحدة ومبوبة بنظام Next.js App Router وحواجز أمنية صارمة",
        "لوحات تحكم تنفيذية لحظية لدمج وتحليل مؤشرات الأقسام التشغيلية",
        "بوابة ذكاء اصطناعي بحلقات استدلال وتحقق صارم من موثوقية المخرجات",
        "إدارة مؤتمتة لترقيات وتراجعات قواعد البيانات (Drizzle ORM & PostgreSQL)",
        "20 حزمة اختبارات مؤتمتة بنظام Vitest تضم 194 اختبار فحص ناجح"
      ]
    },
    metrics: [
      { value: "194", label: { en: "Automated Vitest Assertions", ar: "اختبار فحص مؤتمت ناجح" } },
      { value: "20", label: { en: "Full-Stack Test Suites", ar: "حزمة اختبارات شاملة" } },
      { value: "100%", label: { en: "Multi-Tenant Isolation", ar: "عزل تام لبيانات المستأجرين" } }
    ],
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
      en: "Trainova was engineered as a collaborative graduation team project to solve complex logistical friction in academic field training. Serving students, academic supervisors, and corporate training mentors, the system orchestrates internship matching, weekly progress tracking, multi-criteria evaluations, and automated AI summary generation.",
      ar: "تم تطوير Trainova كمشروع تخرج جماعي تعاوني لحل الإشكاليات اللوجستية في التدريب الميداني الجامعي. تخدم المنظومة الطلبة والمشرفين الأكاديميين ومسؤولي التدريب في الشركات، وتدير التوزيع والتقارير الأسبوعية والتقييم والتحليل الذكي."
    },
    category: {
      en: "Web Applications",
      ar: "تطبيقات الويب والأنظمة"
    },
    categories: ["Web Applications", "Software Development", "Artificial Intelligence"],
    technologies: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Motion", "Lucide React", "Google Gemini API", "Node.js", "Express", "MySQL", "JWT", "Bcrypt", "PDFKit", "OpenAI SDK"],
    projectType: {
      en: "Collaborative Graduation Team Project",
      ar: "مشروع تخرج جماعي تعاوني"
    },
    isTeam: true,
    featured: true,
    completionDate: {
      en: "June 2026",
      ar: "يونيو 2026"
    },
    status: {
      en: "Successfully Defended & Completed",
      ar: "تمت مناقشته بنجاح واعتماده"
    },
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png"
    ],
    role: {
      en: "Collaborative Graduation Project Team Member — Frontend & API Integration Specialist",
      ar: "عضو فريق مشروع التخرج التعاوني — متخصصة واجهات المستخدم ودمج الواجهات البرمجية"
    },
    problem: {
      en: "Academic field training coordination across universities suffers from fragmented paper workflows, unverified attendance records, subjective manual evaluation rubrics, and high administrative friction for students and institutions.",
      ar: "يعاني التدريب الميداني في الجامعات من الإجراءات الورقية المتفرقة، وصعوبة التحقق من الحضور، وغياب معايير التقييم المؤتمتة، والعبء الإداري الكبير على الطلبة والمشرفين."
    },
    solution: {
      en: "Designed and implemented a responsive, role-based single-page application (React 19 + TypeScript) supported by an Express/MySQL REST API with automated JWT session security, PDF evaluation generation, and Gemini AI assessment assistance.",
      ar: "تصميم وتنفيذ تطبيق ويب تفاعلي قائم على الصلاحيات (React 19 + TypeScript) مدعوم بخادم Express وقاعدة بيانات MySQL، مع مصادقة JWT، وتوليد شهادات PDF، ومساعد Gemini الذكي للتقييم الأكاديمي."
    },
    keyFeatures: {
      en: [
        "Role-Based Access Control (Admin, University Supervisor, Company Mentor, Student)",
        "AI-Powered Weekly Training Summary Generator via Google Gemini API",
        "Automated institutional PDF evaluation and attendance certificate generation",
        "Interactive training opportunity matching and direct application pipeline",
        "End-to-end REST API architecture tested and validated via Postman collections"
      ],
      ar: [
        "إدارة وصول قائمة على الأدوار (مسؤول النظام، المشرف الجامعي، مدرب الشركة، الطالب)",
        "توليد تلخيصات وتقييمات تدريب أسبوعية مؤتمتة عبر Google Gemini API",
        "توليد فوري ومؤتمت لتقارير وشهادات التقييم بصيغة PDF",
        "نظام ذكي للتقديم ومطابقة الفرص التدريبية بين الشركات والطلبة",
        "واجهة برمجية RESTful متكاملة مدققة ومختبرة بمجموعات Postman كاملة"
      ]
    },
    metrics: [
      { value: "4 Roles", label: { en: "Role-Based Multi-Portal Architecture", ar: "بوابات متخصصة للأدوار الأربعة" } },
      { value: "100%", label: { en: "Paperless Training Tracking", ar: "أتمتة كاملة خالية من المعاملات الورقية" } },
      { value: "REST API", label: { en: "Postman-Verified Endpoints", ar: "واجهات برمجية معتمدة ومختبرة" } }
    ],
    deliverables: {
      en: [
        "Complete React 19 + TypeScript frontend application codebase",
        "Secure Node.js / Express backend with MySQL database schema",
        "Trainova Postman API collection with comprehensive request suites",
        "Automated PDF reporting engine using PDFKit"
      ],
      ar: [
        "كود الواجهة الأمامية الكامل بتقنيات React 19 و TypeScript",
        "خادم Node.js / Express مؤمن بالكامل مع هيكل قاعدة بيانات MySQL",
        "مجموعة اختبارات Postman الشاملة لجميع مسارات النظام",
        "محرك توليد تقارير PDF التنفيذية باستخدام مكتبة PDFKit"
      ]
    },
    teamCredits: {
      en: "Collaborative graduation team project developed in collaboration between Computer Science & Information Systems graduates representing universities in the Gaza Strip.",
      ar: "مشروع تخرج جماعي تعاوني تم تنفيذه بالتعاون بين خريجي كليات الحاسوب ونظم المعلومات في جامعات قطاع غزة."
    }
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
    technologies: ["JavaScript ES6+", "HTML5 Canvas", "SVG Visualization", "CSS Grid", "Excel Data Modeling", "Statistical Analysis"],
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
      en: "Verified & Fully Defended",
      ar: "موثق ومعتمد بالكامل"
    },
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png",
      "./public/assets/projects/discount_cliff_analysis.png",
      "./public/assets/projects/sub_category_profitability.png",
      "./public/assets/projects/dashboard_filtered_central.png",
      "./public/assets/projects/dashboard_filtered_furniture.png"
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
    keyFeatures: {
      en: [
        "Interactive KPI tiles: Total Revenue ($2.30M), Net Profit ($286.40K), Margin (12.47%), Total Volume (37.87K)",
        "Discount Cliff Analysis isolating the severe profit degradation cliff at discounts > 20%",
        "Sub-category margin breakdown contrasting high-yield Copiers/Phones against loss-making Tables",
        "Dynamic multi-dimensional client-side filtering by region, segment, and category",
        "High-density executive report cards ready for corporate board presentations"
      ],
      ar: [
        "مؤشرات أداء تنفيذية لحظية: إجمالي الإيرادات (2.30 مليون دولار)، صافي الربح (286.4 ألف دولار)، متوسط الهامش (12.47%)",
        "تحليل حافة الخصم (Discount Cliff Analysis) لتحديد الانهيار الحاد في الأرباح عند تجاوز الخصم 20%",
        "تفكيك هوامش الفئات الفرعية ومقارنة الفئات عالية الربحية (آلات التصوير) بالفئات الخاسرة (الطاولات)",
        "فلاتر تفاعلية متعددة الأبعاد حسب المنطقة الجغرافية، شريحة العملاء، وفئة المنتج",
        "بطاقات تقارير تنفيذية عالية الدقة مجهزة لعروض مجالس الإدارة"
      ]
    },
    metrics: [
      { value: "$2.30M", label: { en: "Audited Revenue Volume", ar: "حجم المبيعات المدقق" } },
      { value: "12.47%", label: { en: "Baseline Profit Margin", ar: "متوسط هامش الربحية الأساسي" } },
      { value: ">20%", label: { en: "Discount Cliff Risk Threshold", ar: "عتبة الخطر لتدمير الأرباح" } }
    ],
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
    featured: true,
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
    keyFeatures: {
      en: [
        "Sheet 1: Core Transactional Database with automated tax, discount, and net profit calculations",
        "Sheet 2: Statistical Variance Table analyzing branch distribution and SKU-level variance",
        "Sheet 3: Executive Visual Dashboard with cross-category margin comparisons",
        "Sheet 4: Final Strategic Synthesis with risk mitigation directives and operational controls",
        "Zero exposure of sensitive client figures through privacy-preserving normalized reporting"
      ],
      ar: [
        "الورقة 1: قاعدة المعاملات الأساسية مع حسابات مؤتمتة للضرائب والخصومات وصافي الأرباح",
        "الورقة 2: جدول التباين الإحصائي لتحليل توزيع المبيعات وأداء المنتجات عبر الفروع",
        "الورقة 3: لوحة تحكم بصرية تنفيذية لمقارنة هوامش الربح بين مختلف الفئات",
        "الورقة 4: التحليل الاستراتيجي النهائي مع توجيهات إدارة المخاطر وضوابط التشغيل",
        "حماية تامة لخصوصية بيانات العميل عبر نمذجة معيارية آمنة دون تسريب أي أرقام سرية"
      ]
    },
    metrics: [
      { value: "4 Sheets", label: { en: "Dynamic Analytical Model", ar: "أوراق عمل ديناميكية مترابطة" } },
      { value: "100%", label: { en: "Formulaic Automation", ar: "أتمتة حسابية كاملة بالمعادلات" } },
      { value: "Zero Loss", label: { en: "Confidentiality Protection", ar: "حماية تامة لسرية العميل" } }
    ],
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
      en: "Verified Source Code in portfolio.git",
      ar: "كود مصدري مدقق وموثق في مستودع مستقل"
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
    keyFeatures: {
      en: [
        "Relational database schema with foreign key integrity and indexing",
        "Role-based authentication dividing student view from instructor editing",
        "Dynamic GPA calculator with automatic letter grade mapping",
        "Sanitized database access layer (config.php) preventing unauthorized access"
      ],
      ar: [
        "هيكل قاعدة بيانات علائقية متكامل مع المفاتيح الأجنبية والفهارس الفعالة",
        "مصادقة مستخدمين تفصل بين واجهة استعراض الطالب وواجهة رصد درجات المدرس",
        "حاسبة معدل تراكمي ديناميكية مع التحويل التلقائي للتقديرات الحرفية",
        "طبقة اتصال آمنة ومحمية بقاعدة البيانات (config.php) لمنع الوصول غير المصرح"
      ]
    },
    metrics: [
      { value: "100%", label: { en: "ACID Database Integrity", ar: "سلامة وموثوقية المعاملات" } },
      { value: "Instant", label: { en: "Transcript Generation", ar: "استخراج فوري لكشف الدرجات" } },
      { value: "Secure", label: { en: "Session Protection", ar: "حماية الجلسات والمصادقة" } }
    ],
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
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png"
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
    keyFeatures: {
      en: [
        "Comprehensive CapEx schedule detailing land, machinery, facility, and pre-operating expenses",
        "Working capital estimation models covering initial operational inventory cycles",
        "Discounted Cash Flow (DCF) framework computing exact Net Present Value (NPV)",
        "Internal Rate of Return (IRR) optimization comparing against project cost of capital"
      ],
      ar: [
        "جدول نفقات رأسمالية (CapEx) مفصل للأراضي، الآلات، التجهيزات، ومصاريف ما قبل التشغيل",
        "نماذج تقدير رأس المال العامل لتغطية دورات التشغيل والمخزون الأولى",
        "إطار عمل التدفقات النقدية المخصومة (DCF) لحساب صافي القيمة الحالية (NPV) بدقة",
        "حساب معدل العائد الداخلي (IRR) ومقارنته بتكلفة رأس المال لضمان الجدوى الاستثمارية"
      ]
    },
    metrics: [
      { value: "NPV / IRR", label: { en: "Dynamic Discounted Cash Flow", ar: "نمذجة التدفقات النقدية المخصومة" } },
      { value: "5-Year", label: { en: "Horizon Projections", ar: "إسقاطات مالية لخمس سنوات" } },
      { value: "100%", label: { en: "Audited Financial Formulas", ar: "معادلات مالية مدققة وموثقة" } }
    ],
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
    thumbnail: "./public/assets/projects/dashboard_screenshot.png",
    gallery: [
      "./public/assets/projects/dashboard_screenshot.png"
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
    keyFeatures: {
      en: [
        "Hierarchical Core/Distribution/Access network topology model",
        "Automated DHCP server scopes serving hundreds of campus endpoints",
        "Enterprise DNS domain name resolution across internal subnets",
        "Cisco Router CLI programming verified in master `.pkt` topologies"
      ],
      ar: [
        "معمارية شبكة هرمية (Core / Distribution / Access) عالية الاعتمادية",
        "توزيع عناوين IP مؤتمت عبر خوادم DHCP لمئات الأجهزة الطرفية",
        "خوادم DNS مؤسسية لترجمة أسماء النطاقات والخدمات عبر الشبكات الداخلية",
        "برمجة كاملة لموجهات سيسكو عبر واجهة الأوامر CLI محفوظة في ملفات `.pkt`"
      ]
    },
    metrics: [
      { value: "Multi-Subnet", label: { en: "VLAN Segmentation Architecture", ar: "عزل شبكات VLAN المؤسسية" } },
      { value: "100%", label: { en: "Packet Delivery Verification", ar: "نسبة وصول الحزم واختبار الاتصال" } },
      { value: "Cisco CLI", label: { en: "Hardware Router Scripts", ar: "نصوص برمجة موجهات سيسكو" } }
    ],
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
  "Data Analytics",
  "Business Intelligence",
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
