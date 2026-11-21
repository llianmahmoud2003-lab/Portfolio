// src/data/certificationsData.js - All 24 Audited & Verified Bilingual Certifications
const certificationsData = [
  // Higher Education
  {
    id: "degree-al-aqsa",
    category: { en: "Academic Degree", ar: "الدرجة الأكاديمية" },
    title: {
      en: "Bachelor of Science in Contemporary Management & Commercial Information Systems",
      ar: "بكالوريوس في نظم المعلومات الإدارية والتجارية المعاصرة"
    },
    issuer: {
      en: "Al-Aqsa University — Faculty of Administrative & Financial Sciences",
      ar: "جامعة الأقصى — كلية العلوم الإدارية والمالية"
    },
    date: { en: "2021 – 2025", ar: "2021 – 2025" },
    credentialId: { en: "Degree Verified via Official Academic Transcript", ar: "شهادة معتمدة وموثقة بالسجل الأكاديمي الرسمي" },
    hours: { en: "136+ Credit Hours", ar: "136+ ساعة معتمدة" },
    description: {
      en: "Rigorous undergraduate education integrating software engineering, relational database design, enterprise information systems, corporate finance, and quantitative business analytics.",
      ar: "تعليم جامعي رفيع يدمج بين هندسة البرمجيات، وتصميم قواعد البيانات، ونظم المعلومات المؤسسية، والتمويل المالي، والتحليلات الكمية لذكاء الأعمال."
    },
    icon: "academic"
  },
  // Anthropic Certifications (13 International Certifications)
  {
    id: "anthropic-claude-subagents",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Building Multi-Agent Systems & Subagents", ar: "بناء الأنظمة متعددة الوكلاء والوكلاء الفرعيين" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Advanced AI Track", ar: "مسار متقدم في الذكاء الاصطناعي" },
    description: {
      en: "Architecting autonomous agent swarms, dynamic delegation, inter-agent messaging protocols, and hierarchical workflow coordination.",
      ar: "تصميم أسراب الوكلاء الأذكياء، والتفويض الديناميكي للمهام، وبروتوكولات التخاطب بين الوكلاء، وتنسيق تدفقات العمل الهرمية."
    },
    icon: "ai"
  },
  {
    id: "anthropic-evals",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Model Evaluations & Quantitative Benchmarking", ar: "تقييم النماذج الذكية والقياس المعياري الكمي" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Evaluation Frameworks", ar: "أطر التقييم والقياس" },
    description: {
      en: "Designing rigorous test suites for Large Language Models, grading rubrics, automated evaluation harnesses, and regression benchmarks.",
      ar: "تصميم حزم اختبارات دقيقة للنماذج اللغوية الكبيرة، ومعايير القياس المؤتمتة، ورصد تراجع الأداء المعياري."
    },
    icon: "ai"
  },
  {
    id: "anthropic-mcp-advanced",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Advanced Model Context Protocol (MCP) Architecture", ar: "معمارية بروتوكول سياق النماذج المتقدم (MCP)" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Protocol Engineering", ar: "هندسة البروتوكولات" },
    description: {
      en: "Implementing custom MCP servers, secure tool exposed interfaces, state management, and real-time schema validation.",
      ar: "بناء وتطوير خوادم MCP المخصصة، والربط الآمن للأدوات البرمجية، وإدارة الحالة، والتحقق الفوري من صحة المخططات."
    },
    icon: "ai"
  },
  {
    id: "anthropic-prompt-evals",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Prompt Engineering Evaluations & Verification", ar: "تقييم والتحقق من هندسة الأوامر الذكية" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Applied Methodology", ar: "منهجية تطبيقية" },
    description: {
      en: "Empirical optimization of system instructions, chain-of-thought elicitation, structured output enforcement, and token efficiency.",
      ar: "التحسين التجريبي لتعليمات النظام، وتوجيه سلاسل التفكير، وضمان مخرجات البيانات المهيكلة، وترشيد استهلاك الرموز."
    },
    icon: "ai"
  },
  {
    id: "anthropic-finetuning",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Domain-Specific Model Fine-Tuning", ar: "الضبط الدقيق للنماذج الذكية للمجالات التخصصية" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "ML Specialization", ar: "تخصص في تعلم الآلة" },
    description: {
      en: "Dataset curation, formatting, loss monitoring, validation split metrics, and domain-adapted model deployment.",
      ar: "إعداد وتنقية مجموعات البيانات، وتنسيق الأنماط، ومراقبة دالات الفقد، وقياس مؤشرات التحقق، ونشر النماذج المتخصصة."
    },
    icon: "ai"
  },
  {
    id: "anthropic-context",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Long-Context Window Engineering & Retrieval", ar: "هندسة النوافذ السياقية الطويلة واسترجاع المعلومات" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "System Optimization", ar: "تحسين أداء الأنظمة" },
    description: {
      en: "Needle-in-a-haystack retrieval strategies, multi-document cross-synthesis, and memory persistence mechanisms.",
      ar: "استراتيجيات استرجاع البيانات الدقيقة من الوثائق الضخمة، والربط التحليلي متعدد المصادر، وآليات استدامة الذاكرة."
    },
    icon: "ai"
  },
  {
    id: "anthropic-safety",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Enterprise AI Safety & Production Guardrails", ar: "أمان الذكاء الاصطناعي المؤسسي والحواجز الوقائية" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Security & Governance", ar: "الأمان والحوكمة" },
    description: {
      en: "Red-teaming methodology, prompt injection mitigation, Constitutional AI guardrails, and compliance policy enforcement.",
      ar: "منهجيات اختبار الاختراق، والتصدي لحقن الأوامر الخبيثة، والحواجز الدستورية للنماذج، وفرض سياسات الامتثال المؤسسي."
    },
    icon: "ai"
  },
  {
    id: "anthropic-claude-code",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude Code & Agentic Developer Workflows", ar: "أدوات كود الوكلاء ومسارات التطوير البرمجي المؤتمتة" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Developer Tooling", ar: "أدوات المطورين المتقدمة" },
    description: {
      en: "Terminal-based agent orchestration, automated refactoring pipelines, codebase navigation, and git workflow automation.",
      ar: "إدارة الوكلاء البرمجيين عبر الطرفية، وأتمتة إعادة هيكلة الكود، وفحص المستودعات البرمجية، وتكامل مسارات Git."
    },
    icon: "ai"
  },
  {
    id: "anthropic-structured-outputs",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Structured Outputs & JSON Schema Validation", ar: "المخرجات المهيكلة والتحقق من صحة مخططات JSON" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Data Architecture", ar: "معمارية البيانات" },
    description: {
      en: "Strict type-safe schema constraints, Pydantic/Zod integration, zero-shot structured parsing, and deterministic extraction.",
      ar: "فرض قيود السلامة النوعية الصارمة للمخططات، والتكامل مع Zod و Pydantic، واستخراج البيانات بطريقة حتمية ودقيقة."
    },
    icon: "ai"
  },
  {
    id: "anthropic-reasoning",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Extended Thinking & Frontier Reasoning Loops", ar: "التفكير العميق وحلقات الاستدلال المنطقي للنماذج" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Advanced Cognition", ar: "استدلال معرفي متقدم" },
    description: {
      en: "Exploiting reasoning token budgets, self-critique generation, verification loops, and solving multi-step mathematical problems.",
      ar: "توظيف ميزانيات رموز الاستدلال، والتفكير النقدي الذاتي، وحلقات التدقيق، وحل المعضلات الرياضية والمنطقية المعقدة."
    },
    icon: "ai"
  },
  {
    id: "anthropic-api",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Anthropic API & Enterprise Integration", ar: "واجهة برمجة تطبيقات Anthropic والتكامل المؤسسي" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Cloud Infrastructure", ar: "البنية السحابية والتكامل" },
    description: {
      en: "High-throughput streaming, rate-limit backoff, token caching optimization, and secure enterprise credential handling.",
      ar: "البث التدفقي عالي الكفاءة، وإدارة حدود الطلبات، وترشيد الرموز عبر التخزين المؤقت، والإدارة الآمنة للشهادات."
    },
    icon: "ai"
  },
  {
    id: "anthropic-embeddings",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Vector Embeddings & Semantic Search Pipelines", ar: "التضمينات الشعاعية ومسارات البحث الدلالي" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Vector Databases", ar: "قواعد البيانات الشعاعية" },
    description: {
      en: "Semantic distance metrics, vector indexing, hybrid search architectures, and semantic deduplication algorithms.",
      ar: "مقاييس المسافة الدلالية، وفهرسة المتجهات، ومعماريات البحث الهجين، وخوارزميات إزالة التكرار الدلالي للبيانات."
    },
    icon: "ai"
  },
  {
    id: "anthropic-rag",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Enterprise Retrieval-Augmented Generation (RAG)", ar: "التوليد المعزز بالاسترجاع للمؤسسات (RAG)" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Anthropic Verified", ar: "اعتماد دولي موثق" },
    hours: { en: "Production Architecture", ar: "معمارية الإنتاج المؤسسي" },
    description: {
      en: "Chunking strategies, metadata filtering, reranking models, hallucination mitigation, and citation provenance tracking.",
      ar: "استراتيجيات تقسيم النصوص، والفلترة الوصفية، ونماذج إعادة الترتيب، وتفادي الهلوسة، وتوثيق المصادر بدقة."
    },
    icon: "ai"
  },
  // TAQAT Academy (4 Intensive Software Tracks)
  {
    id: "taqat-react",
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "Advanced React.js Engineering & Modern Web Architecture", ar: "هندسة واجهات React.js المتقدمة ومعمارية الويب الحديثة" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "15/12/2024", ar: "15/12/2024" },
    credentialId: { en: "TQ-2024-00148", ar: "TQ-2024-00148" },
    hours: { en: "40 Training Hours", ar: "40 ساعة تدريبية معتمدة" },
    description: {
      en: "Component lifecycle, custom hooks, context management, performance profiling, and enterprise single-page application engineering.",
      ar: "دورة حياة المكونات، والخطافات المخصصة، وإدارة الحالة، وقياس وتحسين الأداء، وبناء تطبيقات الصفحة الواحدة المؤسسية."
    },
    icon: "code"
  },
  {
    id: "taqat-js",
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "JavaScript ES6+ Deep Core & Asynchronous Systems", ar: "التعمق في جافاسكريبت ES6+ والأنظمة غير المتزامنة" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "25/11/2024", ar: "25/11/2024" },
    credentialId: { en: "TQ-2024-00115", ar: "TQ-2024-00115" },
    hours: { en: "40 Training Hours", ar: "40 ساعة تدريبية معتمدة" },
    description: {
      en: "Event loop internals, microtasks, Promise concurrency, closures, prototype inheritance, and modular clean code practices.",
      ar: "آليات حلقة الأحداث، والمهام الدقيقة، وتزامن الوعود (Promises)، والإغلاقات (Closures)، وممارسات الكود النظيف."
    },
    icon: "code"
  },
  {
    id: "taqat-css",
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "Responsive Web Architecture & Advanced CSS Systems", ar: "معمارية الويب التفاعلية وأنظمة CSS المتقدمة" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "10/11/2024", ar: "10/11/2024" },
    credentialId: { en: "TQ-2024-00092", ar: "TQ-2024-00092" },
    hours: { en: "40 Training Hours", ar: "40 ساعة تدريبية معتمدة" },
    description: {
      en: "CSS Grid, Flexbox layouts, fluid typography, CSS custom properties design tokens, and luxury responsive transitions.",
      ar: "شبكات CSS Grid، وتخطيطات Flexbox، والخطوط المرنة، وتوكنز التصميم بالمتغيرات المخصصة، والانتقالات الحركية الفاخرة."
    },
    icon: "code"
  },
  {
    id: "taqat-html",
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "Semantic HTML5, Web Accessibility (A11y) & SEO", ar: "بنية HTML5 الدلالية، وإتاحة الوصول (A11y)، وتحسين محركات البحث" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "20/10/2024", ar: "20/10/2024" },
    credentialId: { en: "TQ-2024-00067", ar: "TQ-2024-00067" },
    hours: { en: "40 Training Hours", ar: "40 ساعة تدريبية معتمدة" },
    description: {
      en: "Semantic document outline, ARIA attributes, keyboard navigation, Lighthouse audit scores, and search index optimization.",
      ar: "المخطط الدلالي للوثائق، وسمات ARIA، والملاحة عبر لوحة المفاتيح، وتحقيق أعلى معايير Lighthouse، وتهيئة محركات البحث."
    },
    icon: "code"
  },
  // Edraak Platform (2 Verified Certifications)
  {
    id: "edraak-computer-skills",
    category: { en: "Information Systems", ar: "نظم المعلومات" },
    title: { en: "Advanced Computer Science Foundations & Information Architecture", ar: "أسس علوم الحاسوب المتقدمة ومعمارية المعلومات" },
    issuer: { en: "Edraak Platform (Queen Rania Foundation)", ar: "منصة إدراك (مؤسسة الملكة رانيا)" },
    date: { en: "Verified Credential", ar: "شهادة معتمدة" },
    credentialId: { en: "Edraak Verified", ar: "اعتماد موثق إدراك" },
    hours: { en: "Comprehensive Program", ar: "برنامج تدريبي شامل" },
    description: {
      en: "Binary architecture, hardware abstraction layers, operating system scheduling, data communications, and software paradigms.",
      ar: "المعمارية الثنائية، وطبقات تجريد العتاد، وجدولة أنظمة التشغيل، وتراسل البيانات، وأنماط البرمجيات الحديثة."
    },
    icon: "academic"
  },
  {
    id: "edraak-advanced-excel",
    category: { en: "Data Analytics", ar: "تحليل البيانات وذكاء الأعمال" },
    title: { en: "Advanced Excel for Commercial Intelligence & Financial Modeling", ar: "إكسل المتقدم لذكاء الأعمال والنمذجة المالية" },
    issuer: { en: "Edraak Platform (Queen Rania Foundation)", ar: "منصة إدراك (مؤسسة الملكة رانيا)" },
    date: { en: "Verified Credential", ar: "شهادة معتمدة" },
    credentialId: { en: "Edraak Verified", ar: "اعتماد موثق إدراك" },
    hours: { en: "Specialized Track", ar: "مسار تخصصي متقدم" },
    description: {
      en: "Complex nested formulas, INDEX/MATCH, dynamic array functions, financial amortization, and executive reporting tables.",
      ar: "المعادلات المتداخلة المعقدة، ودوال INDEX/MATCH، والمصفوفات الديناميكية، وحسابات الاستهلاك، وجداول التقارير التنفيذية."
    },
    icon: "data"
  },
  // Professional & Specialized Honors
  {
    id: "prof-digital-transformation",
    category: { en: "Business Solutions", ar: "الحلول التجارية والمالية" },
    title: { en: "Enterprise Digital Transformation & Strategic Governance", ar: "التحول الرقمي المؤسسي والحوكمة الاستراتيجية" },
    issuer: { en: "Al-Aqsa University & Industry Partners", ar: "جامعة الأقصى بالتعاون مع شركاء القطاع" },
    date: { en: "Verified Milestone", ar: "إنجاز معتمد" },
    credentialId: { en: "Institutional Credential", ar: "شهادة مؤسسية معتمدة" },
    hours: { en: "Executive Training", ar: "تدريب تنفيذي متخصص" },
    description: {
      en: "Change management, legacy system modernizations, digital workflow automation, and ROI measurement frameworks.",
      ar: "إدارة التغيير، وتحديث الأنظمة القديمة، وأتمتة مسارات العمل الرقمية، وأطر قياس العائد على الاستثمار."
    },
    icon: "business"
  },
  {
    id: "prof-ai-applications",
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Applied Artificial Intelligence in Commercial Systems", ar: "تطبيقات الذكاء الاصطناعي في النظم التجارية" },
    issuer: { en: "Bright Gaza Initiative", ar: "مبادرة برايت غزة" },
    date: { en: "Verified Milestone", ar: "إنجاز معتمد" },
    credentialId: { en: "Bright Gaza Verified", ar: "اعتماد برايت غزة" },
    hours: { en: "Specialized Workshop", ar: "ورشة عمل تخصصية" },
    description: {
      en: "Commercial machine learning applications, predictive sales modeling, customer churn analytics, and AI agent integration.",
      ar: "تطبيقات تعلم الآلة التجارية، والنمذجة التنبؤية للمبيعات، وتحليل معدلات تسرب العملاء، ودمج الوكلاء الأذكياء."
    },
    icon: "ai"
  },
  {
    id: "prof-ecommerce-google",
    category: { en: "Business Solutions", ar: "الحلول التجارية والمالية" },
    title: { en: "E-Commerce Strategy & Commercial Platforms", ar: "استراتيجيات التجارة الإلكترونية والمنصات التجارية" },
    issuer: { en: "Google Platform", ar: "منصة Google" },
    date: { en: "Verified", ar: "معتمدة" },
    credentialId: { en: "Google Certified", ar: "اعتماد رسمي من Google" },
    hours: { en: "Specialized Track", ar: "مسار تخصصي" },
    description: {
      en: "Digital store architecture, online payment gateway funnels, consumer behavior analysis, and commercial conversion optimization.",
      ar: "معمارية المتاجر الرقمية، ومسارات بوابات الدفع الإلكتروني، وتحليل سلوك المستهلك، وتحسين معدلات التحويل التجاري."
    },
    icon: "business"
  },
  {
    id: "prof-data-profession-samaa",
    category: { en: "Data Analytics", ar: "تحليل البيانات وذكاء الأعمال" },
    title: { en: "Data Professionalism & Analytics Methodology", ar: "الاحترافية المنهجية في تحليل البيانات المؤسسية" },
    issuer: { en: "Samaa / Sima Agency", ar: "وكالة سماء / سيما" },
    date: { en: "Verified", ar: "معتمدة" },
    credentialId: { en: "Samaa Certified", ar: "اعتماد وكالة سماء" },
    hours: { en: "Professional Workshop", ar: "ورشة عمل مهنية" },
    description: {
      en: "Applied commercial data cleansing, descriptive statistics, and executive intelligence reporting.",
      ar: "تنقية البيانات التجارية التطبيقية، والإحصاء الوصفي، وإعداد تقارير ذكاء الأعمال الموجهة للإدارة العليا."
    },
    icon: "data"
  }
];

if (typeof window !== 'undefined') {
  window.certificationsData = certificationsData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = certificationsData;
}
