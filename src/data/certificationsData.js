// src/data/certificationsData.js - Audited & Verified Bilingual Certifications with Live Links & Staged Assets

const academicDegree = {
  id: "degree-al-aqsa",
  isAcademic: true,
  category: { en: "Academic Foundation & Higher Education", ar: "الأساس الأكاديمي والتعليم العالي" },
  title: {
    en: "Bachelor's Degree in Contemporary Management Information Systems & Business",
    ar: "خريجة نظم المعلومات الإدارية والتجارية المعاصرة – بكالوريوس – جامعة الأقصى"
  },
  issuer: {
    en: "Al-Aqsa University — Faculty of Administrative & Financial Sciences",
    ar: "جامعة الأقصى — كلية الإدارة والتمويل"
  },
  date: { en: "2021 – 2025", ar: "2021 – 2025" },
  credentialId: { 
    en: "Bachelor's Degree — Al-Aqsa University", 
    ar: "درجة البكالوريوس — جامعة الأقصى" 
  },
  hours: { en: "136+ Credit Hours", ar: "136+ ساعة معتمدة" },
  description: {
    en: "Bachelor's Graduate in Contemporary Management Information Systems & Business, Al-Aqsa University. Rigorous undergraduate foundation integrating software development, relational database systems (MySQL/PostgreSQL), enterprise systems architecture, corporate financial modeling, and quantitative business intelligence.",
    ar: "خريجة نظم المعلومات الإدارية والتجارية المعاصرة – بكالوريوس – جامعة الأقصى. تعليم جامعي رصين يدمج بين تطوير البرمجيات، وتصميم قواعد البيانات العلائقية، ومعمارية نظم المؤسسات، والنمذجة المالية، والتحليلات الكمية لذكاء الأعمال."
  },
  verificationUrl: null,
  previewFile: null,
  previewType: null,
  icon: "academic"
};

const certificationsData = [
  // 7. Khamsat & Professional Freelancing Certification
  {
    id: "khamsat-freelancing-fundamentals",
    isAcademic: false,
    category: { en: "Business Solutions", ar: "حلول الأعمال والعمل الحر" },
    title: { 
      en: "Freelancing Fundamentals — Khamsat", 
      ar: "أساسيات العمل الحر — خمسات" 
    },
    issuer: { 
      en: "Khamsat Platform (Hsoub)", 
      ar: "منصة خمسات (حاسوب)" 
    },
    date: { en: "Verified Exam", ar: "اختبار معتمد" },
    credentialId: { 
      en: "Khbra Verified: fedaafef-41a1-4171-93c8-d9569b357428", 
      ar: "معتمد عبر منصة خبرة: fedaafef-41a1-4171-93c8-d9569b357428" 
    },
    hours: { en: "Professional Exam", ar: "اختبار مهني معتمد" },
    description: {
      en: "Official credential verifying the mastery of freelancing fundamentals, digital service delivery, client communications, and professional project execution on the Khamsat platform.",
      ar: "شهادة رسمية تثبت اجتياز اختبار أساسيات العمل الحر، وتقديم الخدمات الرقمية باحترافية، وإدارة التواصل مع العملاء، وتنفيذ المشاريع وفق معايير الجودة على منصة خمسات."
    },
    verificationUrl: "https://khbra.com/attempts/fedaafef-41a1-4171-93c8-d9569b357428",
    previewFile: null,
    previewType: null,
    icon: "business"
  },

  // 1. Anthropic AI International Certifications (13 Verified Certifications with Skilljar Verification)
  {
    id: "anthropic-mcp-advanced",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Model Context Protocol (MCP): Advanced Architecture", ar: "بروتوكول سياق النماذج (MCP): المعمارية المتقدمة" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: te5ewj52n6r2", ar: "كود التحقق: te5ewj52n6r2" },
    hours: { en: "Specialized AI Track", ar: "مسار ذكاء اصطناعي تخصصي" },
    description: {
      en: "Advanced engineering of custom Model Context Protocol servers, secure tool invocation pipelines, bidirectional agent messaging, and enterprise schema isolation.",
      ar: "الهندسة المتقدمة لخوادم بروتوكول سياق النماذج المخصصة، وتدفقات استدعاء الأدوات الآمنة، والتخاطب ثنائي الاتجاه بين الوكلاء، وعزل مخططات المؤسسات."
    },
    verificationUrl: "https://verify.skilljar.com/c/te5ewj52n6r2",
    previewFile: "./public/assets/certificates/certificate-te5ewj52n6r2-1785322611.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-mcp-intro",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Introduction to Model Context Protocol (MCP)", ar: "مقدمة في بروتوكول سياق النماذج (MCP)" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: 6r26yi5pmhvv", ar: "كود التحقق: 6r26yi5pmhvv" },
    hours: { en: "Core Protocol Track", ar: "المسار الأساسي للبروتوكول" },
    description: {
      en: "Foundations of MCP architecture, establishing client-server interfaces between LLMs and external enterprise data repositories, tools, and execution contexts.",
      ar: "أسس معمارية MCP، وتأسيس واجهات العميل والخادم بين النماذج اللغوية ومستودعات بيانات المؤسسة والأدوات وسياقات التنفيذ الخارجية."
    },
    verificationUrl: "https://verify.skilljar.com/c/6r26yi5pmhvv",
    previewFile: "./public/assets/certificates/certificate-6r26yi5pmhvv-1785322029.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-vertex-ai",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude with Google Cloud Vertex AI", ar: "نماذج Claude على منصة Google Cloud Vertex AI" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: 2j6mckffinbo", ar: "كود التحقق: 2j6mckffinbo" },
    hours: { en: "Cloud ML Track", ar: "مسار تعلم الآلة السحابي" },
    description: {
      en: "Deploying, scaling, and managing Claude models on Google Cloud Vertex AI infrastructure with enterprise security guardrails, VPC Service Controls, and IAM governance.",
      ar: "نشر وتوسيع وإدارة نماذج Claude على البنية التحتية لـ Google Cloud Vertex AI مع حواجز الأمان المؤسسية وضوابط الشبكة الافتراضية وحوكمة الصلاحيات."
    },
    verificationUrl: "https://verify.skilljar.com/c/2j6mckffinbo",
    previewFile: "./public/assets/certificates/certificate-2j6mckffinbo-1785321728.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-amazon-bedrock",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude with Amazon Bedrock", ar: "نماذج Claude عبر Amazon Bedrock" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: 6uvw2eudrbw2", ar: "كود التحقق: 6uvw2eudrbw2" },
    hours: { en: "AWS AI Architecture", ar: "معمارية الذكاء الاصطناعي على AWS" },
    description: {
      en: "Serverless integration of Claude models via AWS Bedrock, provisioning model invocation APIs, latency optimization, and automated throughput monitoring.",
      ar: "التكامل غير الخادمي لنماذج Claude عبر AWS Bedrock، وبرمجة واجهات استدعاء النماذج، وتحسين زمن الاستجابة، ورصد معدلات الإنتاجية."
    },
    verificationUrl: "https://verify.skilljar.com/c/6uvw2eudrbw2",
    previewFile: "./public/assets/certificates/certificate-6uvw2eudrbw2-1785321358.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-api",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude with the Anthropic API", ar: "تطوير التطبيقات عبر واجهة Anthropic API" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: 4322goghiaga", ar: "كود التحقق: 4322goghiaga" },
    hours: { en: "API Engineering", ar: "هندسة واجهات برمجة التطبيقات" },
    description: {
      en: "Direct programmatic integration with the Anthropic REST API: streaming tokens, structured JSON extraction, prompt caching efficiency, and fault-tolerant retry loops.",
      ar: "التكامل البرمجي المباشر مع واجهة Anthropic API: البث التدفقي للرموز، واستخراج JSON المهيكل، وترشيد التكلفة عبر التخزين المؤقت للأوامر."
    },
    verificationUrl: "https://verify.skilljar.com/c/4322goghiaga",
    previewFile: "./public/assets/certificates/certificate-4322goghiaga-1785324561.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-claude-code-action",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude Code in Action & Agentic Engineering", ar: "أدوات كود الوكلاء والإنتاج البرمجي الفعلي" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: fawvvsmen3xz", ar: "كود التحقق: fawvvsmen3xz" },
    hours: { en: "Applied Engineering", ar: "هندسة تطبيقية متقدمة" },
    description: {
      en: "Terminal-first autonomous developer workflows, multi-file codebase navigation, test-driven refactoring pipelines, and continuous integration agent loops.",
      ar: "مسارات التطوير المؤتمتة عبر الطرفية، والتنقل الذكي في المستودعات البرمجية متعددة الملفات، وإعادة هيكلة الأكواد الموجهة بالاختبارات (TDD)."
    },
    verificationUrl: "https://verify.skilljar.com/c/fawvvsmen3xz",
    previewFile: "./public/assets/certificates/certificate-fawvvsmen3xz-1790673577.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-claude-code-101",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude Code 101: CLI & Autonomous Coding", ar: "أسس كود كلود 101: الواجهة السطرية والبرمجة المستقلة" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: w93n4vhgbf6e", ar: "كود التحقق: w93n4vhgbf6e" },
    hours: { en: "Developer CLI Track", ar: "مسار واجهة سطر الأوامر للمطورين" },
    description: {
      en: "Harnessing the official Anthropic CLI agent, terminal permission sandboxing, git branching automation, and interactive pair-programming commands.",
      ar: "توظيف وكيل Anthropic عبر الطرفية، وحواجز أمان الصلاحيات، وأتمتة تفريعات Git، وبرمجة الأقران التفاعلية الذكية."
    },
    verificationUrl: "https://verify.skilljar.com/c/w93n4vhgbf6e",
    previewFile: "./public/assets/certificates/certificate-w93n4vhgbf6e-1784138130.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-claude-101",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude 101: Model Capabilities & Prompting", ar: "كلود 101: قدرات النماذج وهندسة الأوامر" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: d9368zj6z2rw", ar: "كود التحقق: d9368zj6z2rw" },
    hours: { en: "Core Architecture", ar: "المعمارية الأساسية للنماذج" },
    description: {
      en: "Foundational mastery of the Claude model family, context window utilization, system prompts formulation, and zero-shot reasoning dynamics.",
      ar: "الإتقان التأسيسي لعائلة نماذج Claude، واستثمار النوافذ السياقية الضخمة، وصياغة تعليمات النظام المحكمة، وديناميكيات الاستدلال المنطقي."
    },
    verificationUrl: "https://verify.skilljar.com/c/d9368zj6z2rw",
    previewFile: "./public/assets/certificates/certificate-d9368zj6z2rw-1782980771.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-platform-101",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Claude Platform 101 & Console Management", ar: "منصة كلود 101 وإدارة الكونسول المؤسسي" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: gahp53ioxfj4", ar: "كود التحقق: gahp53ioxfj4" },
    hours: { en: "Platform Governance", ar: "حوكمة المنصة وإدارة النطاقات" },
    description: {
      en: "Administering the Anthropic Console, API key generation, team workspace provisioning, cost attribution, and usage telemetry.",
      ar: "إدارة كونسول Anthropic، وإصدار مفاتيح API، وتهيئة بيئات العمل الجماعية، ومتابعة تكاليف الاستهلاك، وتحليل القياسات التشغيلية."
    },
    verificationUrl: "https://verify.skilljar.com/c/gahp53ioxfj4",
    previewFile: "./public/assets/certificates/certificate-gahp53ioxfj4-1783333757.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-ai-fluency-educators",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "AI Fluency: for Educators", ar: "الطلاقة في الذكاء الاصطناعي: للأكاديميين والمدربين" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: 6s7km39uvi4b", ar: "كود التحقق: 6s7km39uvi4b" },
    hours: { en: "AI Pedagogy & Ethics", ar: "بيداغوجيا وأخلاقيات الذكاء الاصطناعي" },
    description: {
      en: "Designing educational curricula, interactive AI-assisted evaluations, academic integrity guardrails, and syllabus integration with Claude.",
      ar: "تصميم المناهج التعليمية المدعومة بالذكاء الاصطناعي، وأطر التقييم التفاعلي، والحفاظ على النزاهة الأكاديمية، ودمج أدوات Claude في التدريس."
    },
    verificationUrl: "https://verify.skilljar.com/c/6s7km39uvi4b",
    previewFile: "./public/assets/certificates/certificate-6s7km39uvi4b-1783334298.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-ai-fluency-students",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "AI Fluency: for Students", ar: "الطلاقة في الذكاء الاصطناعي: للطلاب والباحثين" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: q78qbjbr77mw", ar: "كود التحقق: q78qbjbr77mw" },
    hours: { en: "Applied AI Literacy", ar: "محو الأمية التقنية للذكاء الاصطناعي" },
    description: {
      en: "Deep analytical research with LLMs, literature synthesis, critical thinking validation, and collaborative ideation techniques.",
      ar: "إجراء البحوث التحليلية العميقة باستخدام النماذج اللغوية، وتلخيص الأدبيات، والتحقق النقدي من النتائج، وتقنيات العصف الذهني التشاركي."
    },
    verificationUrl: "https://verify.skilljar.com/c/q78qbjbr77mw",
    previewFile: "./public/assets/certificates/certificate-q78qbjbr77mw-1783335128.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-ai-fluency-foundations",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "AI Fluency: Foundations & Cognitive Principles", ar: "الطلاقة في الذكاء الاصطناعي: الأسس والمبادئ المعرفية" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: u3j82qfuqu9v", ar: "كود التحقق: u3j82qfuqu9v" },
    hours: { en: "Foundations Track", ar: "مسار المبادئ المعرفية التأسيسية" },
    description: {
      en: "Core cognitive principles of artificial intelligence, Transformer neural network concepts, probabilistic language modeling, and AI alignment ethics.",
      ar: "المبادئ المعرفية الأساسية للذكاء الاصطناعي، ومفاهيم شبكات Transformer، ونمذجة اللغة الاحتمالية، وأخلاقيات محاذاة النماذج."
    },
    verificationUrl: "https://verify.skilljar.com/c/u3j82qfuqu9v",
    previewFile: "./public/assets/certificates/certificate-u3j82qfuqu9v-1783335705.pdf",
    previewType: "pdf",
    icon: "ai"
  },
  {
    id: "anthropic-subagents-systems",
    isAcademic: false,
    category: { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
    title: { en: "Building Multi-Agent Systems & Subagents", ar: "بناء الأنظمة متعددة الوكلاء والوكلاء الفرعيين" },
    issuer: { en: "Anthropic", ar: "شركة Anthropic" },
    date: { en: "Verified 2026", ar: "معتمدة 2026" },
    credentialId: { en: "Skilljar: epyobt55bgrk", ar: "كود التحقق: epyobt55bgrk" },
    hours: { en: "Autonomous Agents Track", ar: "مسار الوكلاء المستقلين المتقدم" },
    description: {
      en: "Architecting autonomous agent swarms, dynamic task delegation, inter-agent messaging protocols, context isolation, and hierarchical workflow coordination.",
      ar: "تصميم أسراب الوكلاء الأذكياء، والتفويض الديناميكي للمهام، وبروتوكولات التخاطب بين الوكلاء، وعزل السياقات، وتنسيق تدفقات العمل الهرمية."
    },
    verificationUrl: "https://verify.skilljar.com/c/epyobt55bgrk",
    previewFile: "./public/assets/certificates/certificate-epyobt55bgrk-1783336057.pdf",
    previewType: "pdf",
    icon: "ai"
  },

  // 2. TAQAT Academy Software Engineering Tracks (Live Academy Verification Codes)
  {
    id: "taqat-codemap-2026",
    isAcademic: false,
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "CodeMap 2026 Professional Software Engineering Program", ar: "برنامج CodeMap 2026 الاحترافي لهندسة البرمجيات" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "2026", ar: "2026" },
    credentialId: { en: "Credential ID: TQ-2026-00092", ar: "رقم الاعتماد: TQ-2026-00092" },
    hours: { en: "144 Intensive Training Hours", ar: "144 ساعة تدريبية مكثفة" },
    description: {
      en: "Comprehensive professional program covering full-stack architecture, clean code standards, modern JavaScript/TypeScript, relational database modeling, and scalable web engineering.",
      ar: "برنامج مهني شامل يغطي معمارية الويب المتكاملة (Full-Stack)، ومعايير الكود النظيف، ونمذجة قواعد البيانات العلائقية، وهندسة البرمجيات القابلة للتوسع."
    },
    verificationUrl: "https://taqat.academy/verify/TQ-2026-00092",
    previewFile: "./public/assets/certificates/TAQAT-certificate-Llian-Mahmoud-Abd-elaziz-Alkhawalda-TQ-2026-00186.png",
    previewType: "image",
    icon: "code"
  },
  {
    id: "taqat-ai-coding-advanced",
    isAcademic: false,
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "AI Coding — Advanced Systems & Agentic Workflows", ar: "البرمجة بالذكاء الاصطناعي — الأنظمة المتقدمة ومسارات الوكلاء" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "8 November 2026", ar: "8 نوفمبر 2026" },
    credentialId: { en: "Credential ID: TQ-2026-00887", ar: "رقم الاعتماد: TQ-2026-00887" },
    hours: { en: "36 Specialized Hours (Trainers: Mehran Bayed & Ahmad Qaddoura)", ar: "36 ساعة تخصصية (إشراف: مهران بايد وأحمد قدورة)" },
    description: {
      en: "Advanced software engineering utilizing AI coding copilots, prompt-to-code pipelines, complex automated testing generation, and full-stack component synthesis.",
      ar: "هندسة البرمجيات المتقدمة عبر مساعدي الأكواد الذكية، وتوليد الاختبارات المؤتمتة المعقدة، وبناء مكونات الويب المتكاملة بدقة عالية."
    },
    verificationUrl: "https://taqat.academy/verify/TQ-2026-00887",
    previewFile: "./public/assets/certificates/TAQAT-certificate-Llian-Mahmoud-Abd-elaziz-Alkhawalda-TQ-2026-00887.png",
    previewType: "image",
    icon: "code"
  },
  {
    id: "taqat-ai-coding-beginner",
    isAcademic: false,
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "AI Coding — Foundations & Modern Tooling", ar: "البرمجة بالذكاء الاصطناعي — الأساسيات والأدوات الحديثة" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "9 November 2026", ar: "9 نوفمبر 2026" },
    credentialId: { en: "Credential ID: TQ-2026-00186", ar: "رقم الاعتماد: TQ-2026-00186" },
    hours: { en: "12 Training Hours (Trainers: Mehran Bayed & Ahmad Qaddoura)", ar: "12 ساعة تدريبية (إشراف: مهران بايد وأحمد قدورة)" },
    description: {
      en: "Foundational techniques for developer tooling integration, syntax generation, automated code reviews, and developer productivity enhancement.",
      ar: "التقنيات التأسيسية لدمج أدوات الذكاء الاصطناعي في بيئات التطوير، ومراجعة الأكواد المؤتمتة، ورفع الإنتاجية الهندسية للمطورين."
    },
    verificationUrl: "https://taqat.academy/verify/TQ-2026-00186",
    previewFile: "./public/assets/certificates/TAQAT-certificate-Llian-Mahmoud-Abd-elaziz-Alkhawalda-TQ-2026-00186.png",
    previewType: "image",
    icon: "code"
  },
  {
    id: "taqat-ai-creative",
    isAcademic: false,
    category: { en: "UI/UX & Product Design", ar: "تصميم تجربة المستخدم والمنتجات" },
    title: { en: "AI Creative & Generative Visual Design", ar: "التصميم الإبداعي والتوليدي بالذكاء الاصطناعي" },
    issuer: { en: "TAQAT Academy", ar: "أكاديمية طاقات" },
    date: { en: "November 2026", ar: "نوفمبر 2026" },
    credentialId: { en: "Credential ID: TQ-2026-00259", ar: "رقم الاعتماد: TQ-2026-00259" },
    hours: { en: "9 Specialized Training Hours", ar: "9 ساعات تدريبية تخصصية" },
    description: {
      en: "Generative UI asset creation, prompt engineering for visual design prototypes, brand consistency preservation, and digital media pipelines.",
      ar: "توليد عناصر الواجهات الرقمية، وهندسة أوامر التصميم البصري، والحفاظ على الهوية البصرية، وتكامل وسائط الميديا الرقمية."
    },
    verificationUrl: "https://taqat.academy/verify/TQ-2026-00259",
    previewFile: "./public/assets/certificates/TAQAT-certificate-Llian-Mahmoud-Abd-elaziz-Alkhawalda-TQ-2026-00259.png",
    previewType: "image",
    icon: "design"
  },

  // 3. Bright Gaza & Cloud Engineering Accreditations
  {
    id: "brightgaza-cloud-computing",
    isAcademic: false,
    category: { en: "Cloud & Infrastructure", ar: "الحوسبة السحابية والبنية التحتية" },
    title: { en: "Cloud Computing Architecture & Virtual Infrastructure", ar: "معمارية الحوسبة السحابية والبنية التحتية الافتراضية" },
    issuer: { en: "Bright Gaza Initiative & Global Tech Partners", ar: "مبادرة برايت غزة بالتعاون مع الشركاء التقنيين" },
    date: { en: "Verified Milestone", ar: "شهادة معتمدة" },
    credentialId: { en: "Bright Gaza Talent #2081", ar: "اعتماد موثق برايت غزة #2081" },
    hours: { en: "Advanced Cloud Specialization", ar: "تخصص سحابي متقدم" },
    description: {
      en: "Cloud infrastructure models (IaaS, PaaS, SaaS), cloud storage scalability, container virtualization, and secure deployment architectures.",
      ar: "نماذج البنية السحابية، وقابلية توسع التخزين السحابي، والافتراضية بالحاويات، ومعماريات النشر والتشغيل الآمن."
    },
    verificationUrl: "https://brightgaza.com/ar/talents/2081?tab=certificates",
    previewFile: "./public/assets/certificates/شهادة كلاود.pdf",
    previewType: "pdf",
    icon: "cloud"
  },
  {
    id: "brightgaza-code-mqp",
    isAcademic: false,
    category: { en: "Software Development", ar: "تطوير الأنظمة والبرمجيات" },
    title: { en: "Code MQP Software Quality & Engineering Standards", ar: "معايير جودة البرمجيات وهندسة المشاريع (Code MQP)" },
    issuer: { en: "Bright Gaza Initiative & Tech Incubator", ar: "مبادرة برايت غزة وحاضنة الأعمال التقنية" },
    date: { en: "Verified Milestone", ar: "شهادة معتمدة" },
    credentialId: { en: "Bright Gaza Verified", ar: "اعتماد موثق برايت غزة" },
    hours: { en: "Software Quality Track", ar: "مسار جودة البرمجيات" },
    description: {
      en: "Rigorous software testing principles, modular code organization, regression avoidance, and cross-functional project execution.",
      ar: "مبادئ اختبار البرمجيات الدقيقة، وتنظيم الكود البرمجي النمطي، وتفادي أخطاء التراجع، وإدارة المشاريع متعددة الوظائف."
    },
    verificationUrl: "https://brightgaza.com/ar/talents/2081?tab=certificates",
    previewFile: "./public/assets/certificates/شهادة code mqp.pdf",
    previewType: "pdf",
    icon: "code"
  },

  // 4. Cybersecurity & Network Infrastructure Specialization
  {
    id: "security-cybersecurity-specialization",
    isAcademic: false,
    category: { en: "Cybersecurity & Networks", ar: "الأمن السيبراني والشبكات" },
    title: { en: "Cybersecurity Defense, Governance & Threat Analysis", ar: "الدفاع السيبراني والحوكمة وتحليل التهديدات الأمنية" },
    issuer: { en: "Academic & Professional Cyber Defense Board", ar: "المجلس المهني والأكاديمي للأمن السيبراني" },
    date: { en: "Verified Credential", ar: "شهادة تخصصية معتمدة" },
    credentialId: { en: "Specialized Cyber Track", ar: "مسار أمن سيبراني معتمد" },
    hours: { en: "Comprehensive Specialization", ar: "تخصص شامل ومعتمد" },
    description: {
      en: "Defense-in-depth principles, vulnerability assessments, encryption standards, threat modeling, and formal organizational cybersecurity governance.",
      ar: "مبادئ الدفاع المتعمق، وتقييم الثغرات الأمنية، ومعايير التشفير، ونمذجة التهديدات، والحوكمة المؤسسية لأمن المعلومات."
    },
    verificationUrl: null,
    previewFile: "./public/assets/certificates/شهادات الامن السيبراني.pdf",
    previewType: "pdf",
    icon: "security"
  },
  {
    id: "network-edraak-foundations",
    isAcademic: false,
    category: { en: "Cybersecurity & Networks", ar: "الأمن السيبراني والشبكات" },
    title: { en: "Introduction to Networking & Data Communications", ar: "مقدمة في عالم شبكات الحاسوب وتراسل البيانات" },
    issuer: { en: "Edraak Platform (Queen Rania Foundation)", ar: "منصة إدراك (مؤسسة الملكة رانيا)" },
    date: { en: "Verified Credential", ar: "شهادة معتمدة" },
    credentialId: { en: "Edraak Verified", ar: "اعتماد موثق إدراك" },
    hours: { en: "Foundations Track", ar: "مسار أساسيات الشبكات" },
    description: {
      en: "OSI 7-layer model, TCP/IP stack, IP addressing & CIDR subnetting, routing protocols, and enterprise switching infrastructure.",
      ar: "نموذج طبقات OSI السبع، وحزمة بروتوكولات TCP/IP، وعنونة وتقسيم الشبكات (Subnetting)، ومبادئ التوجيه والتبديل الشبكي."
    },
    verificationUrl: null,
    previewFile: "./public/assets/certificates/شهادة دورة مقدمة في عالم الشبكات.pdf",
    previewType: "pdf",
    icon: "network"
  },

  // 5. Professional Project Management & Commercial Strategy
  {
    id: "management-utopia-pm",
    isAcademic: false,
    category: { en: "Business Solutions", ar: "الحلول التجارية والمالية" },
    title: { en: "Professional Project Management (PMP Principles)", ar: "إدارة المشاريع الاحترافية (مبادئ PMP)" },
    issuer: { en: "Utopia Center for Training & Development", ar: "مركز يوتوبيا للتدريب والتطوير" },
    date: { en: "Verified Milestone", ar: "شهادة معتمدة" },
    credentialId: { en: "Utopia Professional Credential", ar: "اعتماد مهني معتمد" },
    hours: { en: "Professional Project Track", ar: "مسار إدارة المشاريع" },
    description: {
      en: "Project lifecycle management, Work Breakdown Structures (WBS), Critical Path Method (CPM), risk mitigation matrices, and stakeholder communication.",
      ar: "إدارة دورة حياة المشروع، وهياكل تقسيم العمل (WBS)، وطريقة المسار الحرج (CPM)، ومصفوفات إدارة المخاطر، والتواصل مع أصحاب المصلحة."
    },
    verificationUrl: null,
    previewFile: "./public/assets/certificates/شهادة_ادارة_مشاريع.pdf",
    previewType: "pdf",
    icon: "business"
  },
  {
    id: "business-google-ecommerce",
    isAcademic: false,
    category: { en: "Business Solutions", ar: "الحلول التجارية والمالية" },
    title: { en: "Digital Commerce Strategy & Commercial Funnels", ar: "استراتيجيات التجارة الرقمية ومسارات التحويل التجاري" },
    issuer: { en: "Google Platform", ar: "منصة Google" },
    date: { en: "Verified", ar: "معتمدة" },
    credentialId: { en: "Google Certified", ar: "اعتماد رسمي Google" },
    hours: { en: "Specialized Track", ar: "مسار تخصصي" },
    description: {
      en: "Digital store architecture, online payment gateway funnels, consumer behavior analysis, and commercial conversion optimization.",
      ar: "معمارية المتاجر الرقمية، ومسارات بوابات الدفع الإلكتروني، وتحليل سلوك المستهلك، وتحسين معدلات التحويل التجاري."
    },
    verificationUrl: null,
    previewFile: null,
    previewType: null,
    icon: "business"
  },
  {
    id: "business-excel-financial-modeling",
    isAcademic: false,
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
    verificationUrl: null,
    previewFile: null,
    previewType: null,
    icon: "data"
  }
];

const certificationCategories = [
  "All",
  "Artificial Intelligence",
  "Software Development",
  "Cloud & Infrastructure",
  "Cybersecurity & Networks",
  "Data Analytics",
  "Business Solutions",
  "UI/UX & Product Design"
];

if (typeof window !== 'undefined') {
  window.academicDegree = academicDegree;
  window.certificationsData = certificationsData;
  window.certificationCategories = certificationCategories;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { academicDegree, certificationsData, certificationCategories };
}
