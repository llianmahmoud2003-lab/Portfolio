// src/data/translations.js - Master Bilingual Dictionary (EN / AR)
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_services: "Services & Deliverables",
    nav_certifications: "Certifications",
    nav_contact: "Get in Touch",
    brand_tagline_micro: "IDEAS INTO IMPACT.",

    // Hero Section
    hero_tag: "Contemporary Information Systems & AI Architecture",
    hero_title_first: "LILIAN",
    hero_title_last: "ALKHAWALDA",
    hero_tagline: "IDEAS INTO IMPACT.",
    hero_desc: "Contemporary Management and Commercial Information Systems Engineer bridging software engineering, generative AI systems, and quantitative business intelligence to architect scalable, resilient enterprise solutions.",
    hero_cta_projects: "Explore Case Studies",
    hero_cta_deliverables: "Sample Deliverable Pack",
    hero_portrait_quote: "\"Precision is the foundation of luxury engineering.\"",
    hero_portrait_name: "Lilian Alkhawalda",
    hero_portrait_role: "Management Information Systems • Al-Aqsa University",
    hero_portrait_badge: "Official Portrait Space • Reserved",

    // Executive Video Introduction Section
    video_subtitle: "Executive Video Introduction",
    video_title: "Turning Technical Vision Into <span class=\"text-gradient\">Measurable Reality</span>",
    video_lead: "An executive walkthrough articulating engineering leadership, system architecture philosophy, and high-impact digital transformation.",
    video_status_badge: "In Final Studio Production",
    video_meta_badge: "4K HDR • Studio Audio • Bilingual",
    video_placeholder_title: "LILIAN ALKHAWALDA — Professional Introduction",
    video_placeholder_desc: "This dedicated player is pre-configured to host the official high-resolution video introduction. Adding the original video file instantly activates seamless streaming.",

    // About Section
    about_subtitle: "The Journey & Philosophy",
    about_title: "Architecting at the Intersection of Technology & Business Value",
    about_p1: "Graduating with a degree in <strong>Management Information Systems (MIS)</strong> from <strong>Al-Aqsa University</strong>, my engineering ethos is rooted in treating technology not merely as code, but as a strategic business asset capable of driving operational excellence, competitive differentiation, and verifiable financial returns.",
    about_p2: "My journey bridges two worlds that rarely speak the same language: rigorous technical execution (React 19, Next.js, Node.js, Python, PostgreSQL, Cisco Network Architectures) and quantitative commercial acumen (Corporate Feasibility Studies, CapEx / NPV / IRR modeling, Gross Margin Optimization).",
    pillar1_title: "Scientific Rigor & Empirical Verification:",
    pillar1_desc: "Every architecture is verified against empirical unit tests, database constraints, and real-world system loads before release.",
    pillar2_title: "Autonomous AI & MCP Systems:",
    pillar2_desc: "Certified in 13 Anthropic specialized disciplines, designing enterprise-grade agent loops, model context protocol tools, and production prompt safety.",
    pillar3_title: "Commercial Acumen & Data Governance:",
    pillar3_desc: "Transforming raw transactional records into executive-grade automated dashboards and feasibility models that guide multi-million-dollar decisions.",

    // Projects Section
    projects_subtitle: "Engineered Solutions & Empirical Proof",
    projects_title: "Architectural Masterpieces & <span class=\"text-gradient\">Case Studies</span>",
    projects_lead: "Every system cataloged below has been verified through original source code, live automated test suites, quantitative telemetry, or validated client artifacts.",
    filter_all: "All Disciplines",
    filter_ai: "AI & Machine Learning",
    filter_software: "Full-Stack Engineering",
    filter_data: "Data & Business Intelligence",
    filter_network: "Enterprise Infrastructure",
    filter_figma: "UI/UX & Design Systems",
    filter_mobile: "Mobile Applications",
    filter_systems: "Systems Analysis & Engineering",
    filter_cloud: "Cloud & Infrastructure",
    filter_security: "Cybersecurity & Networks",
    
    // Action Buttons
    btn_view_demo: "Live Demo",
    btn_github_repo: "Source Code",
    btn_figma_design: "Figma Canvas",
    btn_figma_proto: "Interactive Prototype",
    btn_case_study: "Case Study & Architecture",
    btn_download_deliverable: "Download Deliverable",
    btn_verify_credential: "Verify Online",
    btn_preview_cert: "Preview Certificate",
    
    project_cta_review: "Review Full Architecture",
    project_type_solo: "Individual / Solo Flagship",
    project_type_team: "Collaborative Team Project (Graduation)",
    modal_problem: "Problem & Strategic Challenge",
    modal_solution: "Engineered Solution & Architecture",
    modal_tech: "Technologies & Frameworks",
    modal_metrics: "Verified Metrics & Outcomes",
    modal_deliverables: "Engineered Deliverables",
    modal_team_context: "Project Ownership & Team Context",

    // Certificate Viewer Modal
    modal_preview_title: "Verified Credential Preview",
    modal_preview_close: "Close Preview",
    modal_open_external: "Verify on Issuer Site",
    modal_download_asset: "Download Document",

    // Academic Degree
    academic_degree_badge: "Academic Foundation & Higher Education",
    academic_degree_title: "Academic Foundation",
    academic_degree_desc: "The foundational university degree conferring rigorous analytical, technical, and commercial systems competencies.",
    professional_certifications_title: "Audited Professional Accreditations & International Credentials",

    // Deliverables Section
    deliv_subtitle: "Tangible Proof of Work",
    deliv_title: "Institutional Client Deliverable Package",
    deliv_lead: "Download sample executive assets generated from real-world corporate transformations. Zero placeholders.",
    deliv_excel_type: "Spreadsheet Model • 17.8 KB",
    deliv_excel_title: "Corporate Performance Tracker (.xlsx)",
    deliv_excel_desc: "Comprehensive automated financial tracker featuring automated Gross Margin calculations, discount cliff flags, and multi-sheet dynamic summaries.",
    deliv_excel_btn: "Download Verified Excel",
    deliv_word_type: "Executive Report • 11.1 KB",
    deliv_word_title: "Daily Business Intelligence Brief (.docx)",
    deliv_word_desc: "Formal executive memorandum outlining daily KPI variance, operational anomalies, discount exposure thresholds, and tactical mitigation directives.",
    deliv_word_btn: "Download Verified Word",
    deliv_ppt_type: "Board Deck • 206.9 KB",
    deliv_ppt_title: "Board-Level Strategic Deck (.pptx)",
    deliv_ppt_desc: "High-contrast, institutional slide presentation articulating technological transformation, unit economics, CapEx appraisal, and system architecture.",
    deliv_ppt_btn: "Download Verified PowerPoint",
    deliv_pdf_type: "Consolidated Dossier • 177.1 KB",
    deliv_pdf_title: "Integrated Transformation Dossier (.pdf)",
    deliv_pdf_desc: "Formal print-ready PDF consolidating architectural blueprints, financial telemetry, margin analysis charts, and governance audit reports.",
    deliv_pdf_btn: "Download Verified PDF",

    // Services Section
    services_subtitle: "Specialized Engagement Models & Technical Offerings",
    services_title: "Services Engineered for <span class=\"text-gradient\">Measurable Impact</span>",
    services_lead: "Providing enterprises and high-growth founders with institutional-grade technical leadership, AI agent workflows, and quantitative financial intelligence.",
    service_deliverables_label: "Key Deliverables",

    // Certifications Section
    certs_subtitle: "Verified Accreditations & Continuous Mastery",
    certs_title: "24 Audited Professional Accreditations",
    certs_lead: "A verified inventory of 13 international Anthropic certifications with direct Skilljar verification links, 4 TAQAT Academy engineering tracks, Bright Gaza and cloud specializations, cybersecurity defenses, and quantitative analytics.",

    // Contact Section
    contact_subtitle: "Initiate Dialogue",
    contact_title: "Ready to Turn Ideas Into Impact?",
    contact_lead: "Available for high-stakes software engineering contracts, AI agent workflow deployments, and executive technology advisory.",
    contact_btn_linkedin: "Connect via LinkedIn",
    contact_btn_email: "Send Direct Inquiry",
    contact_channels_title: "Direct Channels",
    contact_channels_desc: "Whether you represent an enterprise engineering department, an investment syndicate, or a high-growth startup, direct dialogue is welcomed.",
    contact_email_label: "Direct Professional Email",
    contact_linkedin_label: "Professional LinkedIn Network",
    contact_github_label: "GitHub Engineering Lab",
    form_title: "Submit Project Brief or Advisory Inquiry",
    form_desc: "Direct response guaranteed within 24 business hours.",
    form_name_label: "Full Name / Organization",
    form_name_ph: "e.g. Alex Morgan / Meridian Holdings",
    form_email_label: "Corporate Email Address",
    form_email_ph: "name@company.com",
    form_nature_label: "Nature of Engagement",
    form_opt1: "Full-Stack Enterprise Engineering Contract",
    form_opt2: "AI Agent & MCP System Architecture",
    form_opt3: "Data Intelligence & Financial Feasibility Modeling",
    form_opt4: "Fractional Technical Leadership & Advisory",
    form_opt5: "Executive Dialogue / Other Venture",
    form_scope_label: "Project Scope & Context",
    form_scope_ph: "Provide high-level technical scope, business objectives, timeline expectations, and delivery milestones...",
    form_submit_btn: "Dispatch Formal Inquiry",
    form_alert_success: "Thank you for reaching out. Your transmission has been logged.",

    // Footer
    footer_desc: "Contemporary Management & Commercial Information Systems Engineer bridging software systems, autonomous AI agents, and corporate intelligence to turn complex challenges into verified business value.",
    footer_nav_title: "Navigation",
    footer_competencies_title: "Core Competencies",
    footer_comp1: "Autonomous AI Agents & MCP Systems",
    footer_comp2: "Enterprise Full-Stack (Next.js & React 19)",
    footer_comp3: "Gross Margin & Financial Engineering",
    footer_comp4: "Corporate Feasibility & CapEx Valuation",
    footer_copyright: "© 2026 Lilian Alkhawalda. All rights reserved. IDEAS INTO IMPACT.",
    footer_badge: "Editorial Luxury Design • Executive Standard"
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_projects: "المشاريع",
    nav_services: "الخدمات والمخرجات",
    nav_certifications: "الشهادات",
    nav_contact: "تواصل معي",
    brand_tagline_micro: "تحويل الأفكار إلى أثر ملموس.",

    // Hero Section
    hero_tag: "هندسة نظم المعلومات المعاصرة والذكاء الاصطناعي",
    hero_title_first: "ليليان",
    hero_title_last: "الخوالدة",
    hero_tagline: "تحويل الأفكار إلى أثر ملموس.",
    hero_desc: "مهندسة نظم معلومات إدارية وتجارية معاصرة؛ أجمع بين هندسة البرمجيات، وأنظمة الذكاء الاصطناعي التوليدي، وذكاء الأعمال الكمي لبناء حلول مؤسسية متقدمة وقابلة للتوسع ومحققة لأعلى عوائد القيمة.",
    hero_cta_projects: "استعراض المشاريع والحلول",
    hero_cta_deliverables: "حزمة المخرجات ونماذج العمل",
    hero_portrait_quote: "«الدقة المتناهية هي جوهر الهندسة الرفيعة.»",
    hero_portrait_name: "ليليان الخوالدة",
    hero_portrait_role: "نظم المعلومات الإدارية • جامعة الأقصى",
    hero_portrait_badge: "مساحة الصورة الشخصية الرسمية • محجوزة",

    // Executive Video Introduction Section
    video_subtitle: "الفيديو التعريفي الرسمي",
    video_title: "تحويل الرؤية الهندسية إلى <span class=\"text-gradient\">واقع ملموس ونتائج مقاسة</span>",
    video_lead: "إطلالة مهنية موجهة للمؤسسات وأصحاب الأعمال، تستعرض فلسفة بناء الأنظمة، والريادة الهندسية، وقيادة مشاريع التحول الرقمي عالي القيمة.",
    video_status_badge: "قيد التجهيز النهائي في الاستوديو",
    video_meta_badge: "جودة 4K • تسجيل استوديو احترافي • ثنائي اللغة",
    video_placeholder_title: "ليليان الخوالدة — الفيديو التعريفي المهني",
    video_placeholder_desc: "هذا القسم مخصص لاستضافة الفيديو التعريفي الرسمي فور اعتماده، حيث سيعمل مشغل الفيديو تلقائياً وبأعلى دقة وموثوقية فور وضع ملف الفيديو الأصلي.",

    // About Section
    about_subtitle: "المسار المهني والفلسفة الهندسية",
    about_title: "هندسة الحلول في نقطة التقاء التقنية بالقيمة التجارية",
    about_p1: "انطلاقاً من تخصصي الأكاديمي في <strong>نظم المعلومات الإدارية (MIS)</strong> من <strong>جامعة الأقصى</strong>، تقوم فلسفتي الهندسية على التعامل مع التكنولوجيا كأصل استراتيجي يبني التميز التشغيلي، ويصنع الفارق التنافسي، ويحقق عوائد استثمارية واضحة وقابلة للقياس.",
    about_p2: "تجمع مسيرتي بين مسارين متكاملين: التنفيذ البرمجي والهندسي الصارم (React 19, Next.js, Node.js, Python, PostgreSQL، وهندسة شبكات سيسكو)، والفهم التجاري والمالي المتعمق (دراسات الجدوى الاقتصادية، ونمذجة CapEx و NPV و IRR، وتحسين هوامش الربحية الإجمالية).",
    pillar1_title: "الدقة العلمية والتحقق التجريبي:",
    pillar1_desc: "كل بنية برمجية تخضع لاختبارات مؤتمتة دقيقة، وقيود تكامل البيانات، ومحاكاة أحمال التشغيل الحقيقية قبل الاعتماد والنشر.",
    pillar2_title: "أنظمة الذكاء الاصطناعي المستقل وMCP:",
    pillar2_desc: "حاصلة على 13 اعتماداً دولياً متخصصاً من Anthropic في تصميم وكلاء الذكاء الاصطناعي، وبروتوكول سياق النماذج (MCP)، وهندسة الأوامر الآمنة للمؤسسات.",
    pillar3_title: "الحنكة التجارية وحوكمة البيانات:",
    pillar3_desc: "تحويل البيانات والمعاملات الخام إلى لوحات تحكم تنفيذية مؤتمتة ونماذج جدوى تدعم كبرى القرارات الاستراتيجية والاستثمارية.",

    // Projects Section
    projects_subtitle: "حلول هندسية وبراهين موثقة",
    projects_title: "المشاريع الهندسية و<span class=\"text-gradient\">دراسات الحالة الموثقة</span>",
    projects_lead: "جميع الأنظمة والمشاريع المعروضة أدناه تم تدقيقها والتحقق منها عبر الكود المصدري الأصلي، أو الاختبارات البرمجية المؤتمتة، أو مخرجات الأعمال الفعلية الموثقة.",
    filter_all: "جميع التخصصات",
    filter_ai: "الذكاء الاصطناعي",
    filter_software: "تطوير الأنظمة والويب",
    filter_data: "تحليل البيانات وذكاء الأعمال",
    filter_network: "البنية التحتية والشبكات",
    filter_figma: "تصميم الواجهات والأنظمة البصرية (UI/UX)",
    filter_mobile: "تطبيقات الهواتف الذكية",
    filter_systems: "تحليل وهندسة النظم",
    filter_cloud: "الحوسبة السحابية والبنية التحتية",
    filter_security: "الأمن السيبراني والشبكات",
    
    // Action Buttons
    btn_view_demo: "العرض الحي التجريبي",
    btn_github_repo: "الكود البرمجي (GitHub)",
    btn_figma_design: "ملف التصميم (Figma)",
    btn_figma_proto: "النموذج التفاعلي المباشر",
    btn_case_study: "دراسة الحالة والمعمارية",
    btn_download_deliverable: "تحميل المخرج المعتمد",
    btn_verify_credential: "التحقق المباشر من الاعتماد",
    btn_preview_cert: "معاينة الوثيقة الرسمية",

    project_cta_review: "استعراض تفاصيل المشروع الهندسية",
    project_type_solo: "مشروع فردي / رائد",
    project_type_team: "مشروع تخرج جماعي تعاوني",
    modal_problem: "المشكلة والتحدي الاستراتيجي",
    modal_solution: "الحل الهندسي وبنية النظام",
    modal_tech: "التقنيات والأدوات المستخدمة",
    modal_metrics: "المؤشرات والنتائج المحققة",
    modal_deliverables: "المخرجات والملفات المنجزة",
    modal_team_context: "ملكية المشروع وسياق الفريق",

    // Certificate Viewer Modal
    modal_preview_title: "معاينة الوثيقة والاعتماد الرسمي",
    modal_preview_close: "إغلاق المعاينة",
    modal_open_external: "فتح صفحة التحقق الرسمية",
    modal_download_asset: "تحميل الوثيقة المعتمدة",

    // Academic Degree
    academic_degree_badge: "الدرجة الجامعية والأساس الأكاديمي",
    academic_degree_title: "الأساس الأكاديمي والتعليم العالي",
    academic_degree_desc: "المؤهل الجامعي التأسيسي الذي يجمع بين هندسة نظم المعلومات والتحليل المالي الكمي وحوكمة البيانات المؤسسية.",
    professional_certifications_title: "الشهادات المهنية الموثقة والاعتمادات الدولية",

    // Deliverables Section
    deliv_subtitle: "براهين ملموسة وقابلة للتحميل",
    deliv_title: "حزمة المخرجات التنفيذية المتكاملة للعملاء",
    deliv_lead: "نماذج حقيقية لمخرجات استشارية وتقنية تم إعدادها ضمن مشاريع تحول رقمي ومالي، بملفات أصلية متكاملة وجاهزة للتحميل.",
    deliv_excel_type: "نموذج بيانات وجداول • 17.8 KB",
    deliv_excel_title: "نموذج متابعة الأداء وهوامش الربحية (.xlsx)",
    deliv_excel_desc: "جدول مالي متكامل ومؤتمت بالمعادلات لمتابعة الإيرادات، وتحليل هوامش الربح الإجمالية، وتنبيهات خصومات المبيعات الخطرة عبر أوراق عمل ديناميكية.",
    deliv_excel_btn: "تحميل ملف Excel المعتمد",
    deliv_word_type: "تقرير تنفيذي رسمي • 11.1 KB",
    deliv_word_title: "التقرير التنفيذي اليومي لذكاء الأعمال (.docx)",
    deliv_word_desc: "مذكرة إدارية رسمية تلخص انحرافات مؤشرات الأداء، والمخاطر التشغيلية، ومستويات الخصم، والتوجيهات التكتيكية الموصى بها.",
    deliv_word_btn: "تحميل تقرير Word المعتمد",
    deliv_ppt_type: "عرض مجلس الإدارة • 206.9 KB",
    deliv_ppt_title: "العرض التقديمي الاستراتيجي للإدارة (.pptx)",
    deliv_ppt_desc: "عرض شرائح احترافي عالي الجودة يشرح مسار التحول الرقمي، وجدوى الإنفاق الرأسمالي (CapEx)، ومعمارية النظام البرمجي.",
    deliv_ppt_btn: "تحميل العرض التقديمي (.pptx)",
    deliv_pdf_type: "الملف التنفيذي الشامل • 177.1 KB",
    deliv_pdf_title: "وثيقة التحول الرقمي الشاملة (.pdf)",
    deliv_pdf_desc: "ملف موحد جاهز للطباعة يجمع المخططات الهندسية، والمؤشرات المالية، ورسوم بيانية لهوامش الربحية، وتقارير الحوكمة والتدقيق.",
    deliv_pdf_btn: "تحميل الملف الموحد (.pdf)",

    // Services Section
    services_subtitle: "نماذج العمل والخدمات المتخصصة",
    services_title: "خدمات مصممة لصناعة <span class=\"text-gradient\">أثر حقيقي ونتائج مقاسة</span>",
    services_lead: "تقديم استشارات وقيادة تقنية متقدمة للشركات ورواد الأعمال، تشمل بناء وكلاء الذكاء الاصطناعي، والتحليل المالي الكمي، وهندسة البرمجيات المعقدة.",
    service_deliverables_label: "أبرز المخرجات المضمونة",

    // Certifications Section
    certs_subtitle: "الاعتمادات الموثقة والتطوير المستمر",
    certs_title: "24 شهادة واعتماداً مهنياً موثقاً",
    certs_lead: "سجل حقيقي موثق يضم 13 شهادة دولية متقدمة من Anthropic بروابط تحقق مباشرة من Skilljar، و4 مسارات مكثفة من أكاديمية طاقات، واعتمادات برايت غزة والحوسبة السحابية، ودفاعات الأمن السيبراني، ونمذجة ذكاء الأعمال.",

    // Contact Section
    contact_subtitle: "بدء التواصل والتعاون المهني",
    contact_title: "هل أنت مستعد لتحويل الأفكار إلى أثر ملموس؟",
    contact_lead: "متاحة لتنفيذ مشاريع تطوير الأنظمة البرمجية، ودمج وكلاء الذكاء الاصطناعي، واستشارات ذكاء الأعمال والقيادة التقنية.",
    contact_btn_linkedin: "التواصل عبر LinkedIn",
    contact_btn_email: "إرسال استفسار مباشر",
    contact_channels_title: "قنوات التواصل المباشرة",
    contact_channels_desc: "سواء كنت تمثل إدارة تقنية في مؤسسة كبرى، أو صندوق استثمار، أو رائد أعمال يبني برمجيات المستقبل، يسعدني التواصل المباشر معك.",
    contact_email_label: "البريد الإلكتروني المباشر",
    contact_linkedin_label: "شبكة LinkedIn المهنية",
    contact_github_label: "مختبر مشاريع GitHub",
    form_title: "إرسال مقترح عمل أو استفسار",
    form_desc: "الرد المباشر على جميع الاستفسارات مضمون خلال 24 ساعة عمل.",
    form_name_label: "الاسم الكريم / اسم المؤسسة",
    form_name_ph: "مثال: م. أحمد خليل / شركة الحلول المتقدمة",
    form_email_label: "البريد الإلكتروني المهني",
    form_email_ph: "name@company.com",
    form_nature_label: "طبيعة المشروع أو الاستشارة المطلوبة",
    form_opt1: "عقد تطوير وبرمجة أنظمة ويب متكاملة",
    form_opt2: "بناء وكلاء الذكاء الاصطناعي وأنظمة MCP",
    form_opt3: "ذكاء الأعمال والتحليل المالي الكمي",
    form_opt4: "استشارة تقنية واستراتيجية للأنظمة",
    form_opt5: "استفسارات تنفيذية أو شراكات أخرى",
    form_scope_label: "نطاق المشروع والتفاصيل الأساسية",
    form_scope_ph: "يرجى توضيح الأهداف الفنية للمشروع، الإطار الزمني المتوقع، والمتطلبات الرئيسية...",
    form_submit_btn: "إرسال الاستفسار رسمياً",
    form_alert_success: "شكراً لتواصلك. تم استلام استفسارك وسيتم الرد عليك قريباً.",

    // Footer
    footer_desc: "مهندسة نظم معلومات إدارية وتجارية معاصرة؛ أكرّس الهندسة والذكاء الاصطناعي لتحويل التحديات المعقدة إلى نتائج ملموسة وعوائد موثقة.",
    footer_nav_title: "روابط سريعة",
    footer_competencies_title: "مجالات التخصص الأساسية",
    footer_comp1: "وكلاء الذكاء الاصطناعي وأنظمة MCP",
    footer_comp2: "تطوير الويب المتكامل (React & Next.js)",
    footer_comp3: "ذكاء الأعمال وتحسين هوامش الأرباح",
    footer_comp4: "دراسات الجدوى وتقييم الإنفاق الرأسمالي (CapEx)",
    footer_copyright: "© 2026 ليليان الخوالدة. جميع الحقوق محفوظة. تحويل الأفكار إلى أثر ملموس.",
    footer_badge: "هوية أنثوية حديثة فخمة • قيادة تقنية رائدة"
  }
};

if (typeof window !== 'undefined') {
  window.translations = translations;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
