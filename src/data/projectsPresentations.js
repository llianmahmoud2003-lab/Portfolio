// src/data/projectsPresentations.js - Master Presentation & Case Study Decks for All Projects
// Each project has a comprehensive 12-slide case study presentation viewable interactively in the browser
// and exportable for instant import into Gamma AI.

const projectsPresentationsData = {
  "lilianoura": {
    "projectId": "lilianoura",
    "title": {
      "en": "LILIANOURA — Enterprise SaaS & AI Operating Cockpit",
      "ar": "LILIANOURA — منصة التشغيل المؤسسي وقمرة قيادة الذكاء الاصطناعي"
    },
    "badge": {
      "en": "Enterprise AI Architecture",
      "ar": "معمارية الذكاء الاصطناعي المؤسسي"
    },
    "ownershipType": "individual",
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "LILIANOURA Operating Cockpit",
          "ar": "منصة LILIANOURA المؤسسية"
        },
        "subtitle": {
          "en": "Executive Decision Intelligence & Agentic AI Orchestration",
          "ar": "ذكاء اتخاذ القرار المؤسسي وإدارة الوكلاء الأذكياء"
        },
        "points": {
          "en": [
            "Architect: Lilian Alkhawalda (Lead Systems Architect)",
            "Completion Date: November 2026",
            "Project Nature: Proprietary Enterprise Platform",
            "Classification: Enterprise SaaS & Decision Intelligence"
          ],
          "ar": [
            "معمارية النظام: ليليان الخوالدة (كبير مهندسي النظم)",
            "تاريخ الإنجاز: نوفمبر 2026",
            "طبيعة المشروع: منصة مؤسسية مستقلة متطورة",
            "التصنيف: ذكاء الأعمال وقمرة قيادة الذكاء الاصطناعي"
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Strategic Problem",
          "ar": "التحدي والمشكلة الاستراتيجية"
        },
        "subtitle": {
          "en": "Fragmented Data Silos & Blind Decision-Making",
          "ar": "تشتت مصادر البيانات وغياب الرؤية الموحدة لاتخاذ القرار"
        },
        "points": {
          "en": [
            "Enterprise executives oversee fragmented micro-services without a unified intelligence layer.",
            "Generic AI tools lack domain-aware context, creating high hallucination risks in mission-critical operations.",
            "Absence of real-time telemetry between financial forecasts and operational workflow execution."
          ],
          "ar": [
            "تعاني الإدارات التنفيذية من تشتت البيانات بين أنظمة متعددة غير مترابطة تفتقر إلى طبقة ذكاء موحدة.",
            "أدوات الذكاء الاصطناعي العامة تفتقر إلى سياق العمل الدقيق مما يزيد من مخاطر اتخاذ قرارات خاطئة.",
            "غياب الربط اللحظي بين مؤشرات الأداء والتحليلات التنبؤية ومسارات العمل التشغيلية."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Users & Stakeholders",
          "ar": "المستخدمون والجمهور المستهدف"
        },
        "subtitle": {
          "en": "Executive Leadership & Operations Directors",
          "ar": "القيادات التنفيذية ومدراء العمليات المؤسسية"
        },
        "points": {
          "en": [
            "C-Suite & Managing Directors seeking consolidated executive telemetry.",
            "Operations Leaders requiring automated multi-agent workflow coordination.",
            "Enterprise Data Teams demanding audited, zero-data-leak pipeline governance."
          ],
          "ar": [
            "الرؤساء التنفيذيون الباحثون عن لوحة مؤشرات مركزية وموثوقة لاتخاذ القرارات الحاسمة.",
            "مدراء العمليات الراغبون في أتمتة المهام المعقدة عبر مسارات ذكية منسقة.",
            "فرق أمن وحوكمة البيانات التي تشترط تشفيراً صارماً ومنع أي تسريب للمعلومات الحساسة."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Requirements & System Goals",
          "ar": "المتطلبات وأهداف النظام"
        },
        "subtitle": {
          "en": "High-Availability, Low-Latency & Strict Governance",
          "ar": "جاهزية تشغيلية قصوى، استجابة لحظية، وحوكمة صارمة"
        },
        "points": {
          "en": [
            "Sub-second decision telemetry across multi-dimensional metric feeds.",
            "Strict Role-Based Access Control (RBAC) with cryptographic token validation.",
            "Autonomous agent task assignment with human-in-the-loop executive overrides.",
            "Fully responsive cockpit layout with high-contrast luxury UI tokens."
          ],
          "ar": [
            "تحديث لحظي لمؤشرات الأداء متعددة الأبعاد بأقل من ثانية استجابة.",
            "حوكمة أمنية صارمة بالصلاحيات وتشفير مفاتيح الربط البرمجي.",
            "إسناد مهام ذاتي للوكلاء الأذكياء مع إمكانية التدخل والاعتماد البشري الفوري.",
            "واجهات استخدام متجاوبة ومبنية بنظام تصميم بصري فاخر وعالي التباين."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Proposed System Architecture",
          "ar": "المعمارية البرمجية المقترحة"
        },
        "subtitle": {
          "en": "Layered Microservices & Agentic Orchestration Bus",
          "ar": "معمارية الخدمات المصغرة وطبقة تنسيق الوكلاء"
        },
        "points": {
          "en": [
            "Presentation Layer: High-performance cockpit interface with real-time SVG telemetry.",
            "Orchestration Bus: Dispatches analytical workloads to specialized agent pipelines.",
            "Telemetry Core: Event-driven aggregators for financial and operational signals.",
            "Security Vault: Zero-trust token rotation and data isolation partitions."
          ],
          "ar": [
            "طبقة العرض: قمرة قيادة تفاعلية مجهزة بمخططات ورسوم بيانية آنية.",
            "ناقل التنسيق (Orchestration Bus): يوزع المهام على وكلاء الذكاء الاصطناعي المتخصصين.",
            "محرك القياس (Telemetry Core): يعالج الإشارات المالية والتشغيلية فور حدوثها.",
            "الحصن الأمني (Security Vault): بيئة معزولة لإدارة الجلسات ومنع تداخل البيانات."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Technologies & Implementation Stack",
          "ar": "التقنيات وحزمة الأدوات المستخدمة"
        },
        "subtitle": {
          "en": "Production-Grade Engineering Frameworks",
          "ar": "أطر عمل إنتاجية مجربة وموثوقة"
        },
        "points": {
          "en": [
            "AI & Logic: Multi-Agent Systems, Decision Modeling, Predictive Telemetry",
            "Frontend Engine: HTML5, CSS3 Custom Properties, Vanilla ES6+ Performance Modules",
            "Security & Protocol: RESTful Architecture, JSON Web Tokens, Content Security Policies",
            "Design Tokens: Cormorant Garamond, Plus Jakarta Sans, Midnight & Rose Palette"
          ],
          "ar": [
            "الذكاء الاصطناعي والمنطق: مسارات الوكلاء الأذكياء، النمذجة التنبؤية، خوارزميات القرار.",
            "الواجهة الأمامية: HTML5, CSS3 Variables, معالجة كود ES6+ عالية السرعة.",
            "الأمان والبروتوكولات: معمارية RESTful، جلسات آمنة، سياسات حماية المحتوى.",
            "الهوية البصرية: خطوط Cormorant Garamond وCairo، ولوحة الألوان الوردية والليلية المعتمدة."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Core Implemented Features",
          "ar": "المميزات والوظائف المنفذة فعلياً"
        },
        "subtitle": {
          "en": "Executive Cockpit Modules & Controls",
          "ar": "وحدات قمرة القيادة وأدوات التحكم الفعلي"
        },
        "points": {
          "en": [
            "Global Intelligence Overview: Aggregated multi-tenant operations telemetry.",
            "Decision Cockpit View: Granular drills into tactical operational thresholds.",
            "Agent Workflow Coordinator: Visual tracking of automated multi-agent tasks.",
            "Audit Trail Matrix: Full historical replay of system-generated decisions."
          ],
          "ar": [
            "نظرة الذكاء الشامل (Global Intelligence): لوحة مركزية تعرض تدفقات العمليات اللحظية.",
            "قمرة القرار (Cockpit View): استعراض معمق لمؤشرات الأداء الحرجة والإنذارات المبكرة.",
            "منسق الوكلاء (Agent Coordinator): متابعة بصرية لمهام الوكلاء الأذكياء ونسب إنجازها.",
            "سجل التدقيق (Audit Trail): توثيق كامل لكافة التوصيات والقرارات المؤتمتة."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Documented Authentic Interfaces",
          "ar": "الواجهات واللقطات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "High-Resolution Production Screenshots",
          "ar": "شاشات المنصة الحقيقية المعتمدة"
        },
        "visualPath": "./public/assets/projects/lilianoura/lilianoura_global_intelligence.png",
        "points": {
          "en": [
            "Screen 1: Global Intelligence Telemetry (1,816 KB original graphic capture)",
            "Screen 2: Executive Cockpit View (72 KB verified UI dashboard)",
            "Brand Asset: Authentic LILIANOURA Decision Intelligence Emblem"
          ],
          "ar": [
            "الشاشة 1: لوحة الذكاء الشامل والقياس اللحظي (حجم 1,816 كيلوبايت - لقطة أصلية).",
            "الشاشة 2: قمرة القيادة التشغيلية للمدراء (حجم 72 كيلوبايت - واجهة معتمدة).",
            "شعار الهوية: شعار LILIANOURA Decision Intelligence الأصلي المعتمد."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Verified Outcomes & Metrics",
          "ar": "النتائج والمخرجات المثبتة"
        },
        "subtitle": {
          "en": "Demonstrated Technical Feasibility",
          "ar": "الموثوقية الفنية والأداء المثبت"
        },
        "points": {
          "en": [
            "Multi-Agent Orchestration: Proven coordination of autonomous analytical agents.",
            "Zero Data Leak Architecture: Isolated tenant spaces with no data cross-contamination.",
            "Real-time Decision Feeds: Instant visualization of high-frequency telemetry."
          ],
          "ar": [
            "أتمتة الوكلاء: إثبات نجاح التنسيق المتكامل بين الوكلاء الأذكياء المستقلين.",
            "معمارية حماية البيانات: عزل تام لبيانات كل وحدة تشغيلية ومنع التسريب بنسبة 100%.",
            "سرعة المعالجة: استجابة لحظية لعرض المؤشرات التحليلية المعقدة بسلاسة تامة."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Technical Challenges & Lessons Learned",
          "ar": "التحديات الهندسية والدروس المستفادة"
        },
        "subtitle": {
          "en": "Navigating High-Concurrency & System State",
          "ar": "معالجة التزامن العالي واستقرار تدفق البيانات"
        },
        "points": {
          "en": [
            "Managing agent latency: Handled via asynchronous worker threads and optimistic UI updates.",
            "Visual density balance: Designed minimal luxury typography to avoid executive cognitive overload.",
            "Security posture: Implemented strict zero-trust principles across all internal data buses."
          ],
          "ar": [
            "تحدي زمن استجابة الوكلاء: عولج عبر المعالجة غير المتزامنة وتحديث الواجهات بذكاء.",
            "كثافة البيانات المعروضة: اعتماد تسلسل بصري أنيق يمنع تشتت القارئ التنفيذي.",
            "أمن المنظومة: تطبيق مبدأ انعدام الثقة (Zero-Trust) على كافة نقاط الاتصال الداخلية."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Role & Engineering Ownership",
          "ar": "الدور والمسؤوليات الهندسية"
        },
        "subtitle": {
          "en": "Solo Strategic & Technical Execution",
          "ar": "مشروع فردي: تصميم وتنفيذ تقني مستقل"
        },
        "points": {
          "en": [
            "Independent Project: Conceived, architected, and engineered solely by Lilian Alkhawalda.",
            "End-to-end responsibility: From initial systems analysis to full interface implementation.",
            "Demonstrates senior full-stack architecture, decision science, and modern frontend mastery."
          ],
          "ar": [
            "مشروع فردي مستقل: الفكرة والمعمارية والتصميم والتطوير بالكامل بواسطة ليليان الخوالدة.",
            "المسؤولية الشاملة: من تحليل المتطلبات النظمية وحتى بناء الواجهات وهندسة تدفق البيانات.",
            "يُبرز قدرات متقدمة في معمارية النظم المتكاملة وهندسة الواجهات وتطبيقات الذكاء الاصطناعي."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Verified Access & Resources",
          "ar": "روابط الوصول والمصادر الموثقة"
        },
        "subtitle": {
          "en": "Confirmed Operational Status",
          "ar": "حالة النظام وتوفر المخرجات"
        },
        "points": {
          "en": [
            "Public Status: Enterprise Cockpit (Proprietary source code kept confidential).",
            "Live UI Preview: Authentic high-res visual assets documented in portfolio.",
            "Interactive Deck: Full presentation exportable for Gamma presentation generation."
          ],
          "ar": [
            "حالة النشر: نظام تشغيل مؤسسي مغلق (المستودع خاص وغير منشور للعامة لحماية الملكية).",
            "معاينة الواجهات: الشاشات الأصلية عالية الدقة موثقة ومعروضة بالكامل داخل المعرض.",
            "العرض التقديمي: متاح للمعاينة التفاعلية الفورية مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "trainova": {
    "projectId": "trainova",
    "title": {
      "en": "Trainova — Multi-Institutional Field Training Ecosystem",
      "ar": "Trainova — المنظومة الذكية لإدارة التدريب الميداني الجامعي"
    },
    "badge": {
      "en": "Graduation Capstone (Grade A+)",
      "ar": "مشروع التخرج الجامعي (امتياز مع مرتبة الشرف)"
    },
    "ownershipType": "team",
    "teamContext": {
      "en": "Team graduation project led by Lilian Alkhawalda (Team Leader, Full-Stack Architecture, Database & UI/UX Design) with team colleagues.",
      "ar": "مشروع تخرج جامعي متميز قامت بتطويره ليليان الخوالدة (قائدة الفريق، البنية الكاملة للنظام، الواجهات وقاعدة البيانات) بمشاركة الزملاء."
    },
    "downloads": [
      {
        "title": {
          "en": "Master Defense Presentation (PDF - 11.1 MB)",
          "ar": "العرض التقديمي الشامل للمناقشة (PDF - 11.1 ميجابايت)"
        },
        "path": "./public/assets/projects/trainova/presentations/Trainova_Presentation.pdf",
        "type": "pdf"
      },
      {
        "title": {
          "en": "Final Defense Presentation Deck (PowerPoint - 30.7 MB)",
          "ar": "العرض النهائي للمناقشة الأكاديمية (PowerPoint - 30.7 ميجابايت)"
        },
        "path": "./public/assets/projects/trainova/presentations/Presentation_Trainova.pptx",
        "type": "pptx"
      },
      {
        "title": {
          "en": "System Architecture Slide Deck (PowerPoint - 18.0 MB)",
          "ar": "عرض شرائح معمارية النظام لجميع الوحدات (PowerPoint - 18.0 ميجابايت)"
        },
        "path": "./public/assets/projects/trainova/presentations/Presentation_Trainova_ALL.pptx",
        "type": "pptx"
      },
      {
        "title": {
          "en": "Executive Pitch Deck (PowerPoint - 2.7 MB)",
          "ar": "عرض القيمة والجدوى التنفيذية (PowerPoint - 2.7 ميجابايت)"
        },
        "path": "./public/assets/projects/trainova/presentations/Trainova_Pitch_Deck.pptx",
        "type": "pptx"
      },
      {
        "title": {
          "en": "Graduation Project Thesis (Word .docx - 3.7 MB)",
          "ar": "رسالة مشروع التخرج الرسمية والمواصفات الكاملة (Word .docx)"
        },
        "path": "./public/assets/projects/trainova/docs/Trainova_Graduation_Thesis.docx",
        "type": "docx"
      },
      {
        "title": {
          "en": "Architectural Diagrams Defense Guide (Word .docx - 668 KB)",
          "ar": "مخططات معمارية Trainova ودليل المناقشة (Word .docx)"
        },
        "path": "./public/assets/projects/trainova/docs/Trainova_Architectural_Diagrams_Defense.docx",
        "type": "docx"
      }
    ],
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Trainova Platform Ecosystem",
          "ar": "منظومة Trainova للتدريب الميداني"
        },
        "subtitle": {
          "en": "Multi-Role Smart Platform for University Internship Management",
          "ar": "المنظومة الذكية لإدارة ومتابعة التدريب الميداني الجامعي"
        },
        "points": {
          "en": [
            "Academic Milestone: Official University Graduation Capstone (Awarded Grade A+)",
            "Role: Team Leader, Lead Full-Stack Architect, Database & UI/UX Designer",
            "Collaboration: Collaborative Graduation Project developed with team colleagues",
            "Live Production URL: https://trainova-fornt.apps.taqat.academy/"
          ],
          "ar": [
            "المناسبة: مشروع التخرج الجامعي الرسمي (حاصل على امتياز مع مرتبة الشرف A+).",
            "دور ليليان: قائدة الفريق، معمارية ومطورة Full-Stack الرئيسية، مصممة قاعدة البيانات والواجهات.",
            "طبيعة العمل: مشروع جامعي جماعي تم بالتعاون والمشاركة مع زملاء الفريق.",
            "رابط المنصة الحية العاملة: https://trainova-fornt.apps.taqat.academy/"
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Academic Internship Problem",
          "ar": "المشكلة في التدريب الميداني التقليدي"
        },
        "subtitle": {
          "en": "Paper-based Evaluations & Lost Communication",
          "ar": "المعاملات الورقية وتشتت التواصل وضياع سجلات التقييم"
        },
        "points": {
          "en": [
            "Universities struggled with paper attendance records and manual evaluation spreadsheets.",
            "Lack of real-time communication between academic supervisors and company mentors.",
            "Late submissions and subjective evaluation friction causing student grading disputes."
          ],
          "ar": [
            "معاناة الجامعات من النماذج الورقية اليدوية وصعوبة حصر ساعات الحضور والغياب للطلبة.",
            "انقطاع قنوات الاتصال المباشرة والموثقة بين المشرف الأكاديمي ومدرب الشركة الميداني.",
            "تأخر تسليم التقارير الأسبوعية وعدم وجود معايير تقييم رقمية موحدة وعادلة."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Three Specialized User Portals",
          "ar": "ثلاث بوابات متخصصة للأدوار"
        },
        "subtitle": {
          "en": "Students, Academic Supervisors, Workplace Mentors",
          "ar": "الطلاب الجامعيون، المشرفون الأكاديميون، ومدربو الشركات"
        },
        "points": {
          "en": [
            "Students Portal: Submit periodic reports, log daily attendance, review grades.",
            "Academic Supervisor Portal: Monitor student progress, review mentor feedback, approve credits.",
            "Company Mentor Portal: Fill rubric-based performance evaluations, sign completion forms."
          ],
          "ar": [
            "بوابة الطلاب: رفع التقارير الدورية، توثيق الحضور والمهام اليومية، ومتابعة النتائج.",
            "بوابة المشرف الأكاديمي: تدقيق التقارير، مراجعة تقييم جهة التدريب، واعتماد الدرجات.",
            "بوابة مدرب الشركة: تعبئة نماذج التقييم المعيارية واعتماد استيفاء ساعات التدريب المطلوبة."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "System Goals & Specifications",
          "ar": "متطلبات وأهداف المنظومة"
        },
        "subtitle": {
          "en": "100% Digital Workflow & Objective Rubrics",
          "ar": "أتمتة كاملة للتقييم ومعايير موضوعية شفافة"
        },
        "points": {
          "en": [
            "Role-Based Access Control (RBAC) preventing cross-portal data leakage.",
            "Structured evaluation rubrics calculating weighted midterm and final scores.",
            "Automated notification triggers upon report submission and appraisal completion.",
            "PDF certification generation upon successful internship completion."
          ],
          "ar": [
            "صلاحيات دقيقة لكل دور تمنع تداخل الصلاحيات أو تعديل الدرجات بعد اعتمادها.",
            "معايير تقييم مؤتمتة تحسب الدرجات المرحلية والنهائية وفق أوزان نسبية محددة.",
            "إشعارات فورية عند تسليم التقرير أو إنجاز التقييم من قبل المشرف.",
            "إصدار إلكتروني موثق لشهادات إتمام التدريب الميداني بصيغة PDF."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "System Architecture & Data Modeling",
          "ar": "المعمارية البرمجية وتصميم البيانات"
        },
        "subtitle": {
          "en": "Relational Normalization & RESTful Controllers",
          "ar": "قواعد بيانات معيارية (3NF) ووحدات تحكم منظمة"
        },
        "points": {
          "en": [
            "Database Schema: 3NF relational normalization handling students, supervisors, companies, reports, and grades.",
            "Business Logic: Modular controllers enforcing prerequisite attendance and evaluation states.",
            "UI Design System: Figma component library ensuring unified accessibility across portals."
          ],
          "ar": [
            "قاعدة البيانات: هيكل مترابط ومفهرس (3NF) يربط الطلاب، المشرفين، الشركات، والتقارير.",
            "منطق العمل: وحدات برمجية مستقلة تضمن عدم إغلاق المساق إلا بعد اكتمال متطلبات التقييم.",
            "نظام الواجهات: مكتبة مكونات Figma موحدة تضمن سهولة الاستخدام وتجاوب الشاشات."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Technologies & Engineering Stack",
          "ar": "التقنيات والأدوات المستخدمة فعلياً"
        },
        "subtitle": {
          "en": "Verified Technologies Backing the Platform",
          "ar": "حزمة التقنيات المعتمدة في بناء المشروع"
        },
        "points": {
          "en": [
            "Backend: PHP & Laravel Architecture with MVC Structure",
            "Database: MySQL Relational Database with Indexed Queries & Foreign Keys",
            "Frontend: JavaScript, HTML5, Modern CSS3 & Bootstrap Components",
            "UI/UX Design: Figma Professional Design System & Interactive Prototypes",
            "Version Control & Deployment: Git/GitHub & Cloud Application Hosting"
          ],
          "ar": [
            "الواجهة الخلفية: PHP ومعمارية Laravel بنمط MVC المنظم.",
            "قاعدة البيانات: MySQL علائقية مفهرسة ومحكومة بالروابط المنطقية.",
            "الواجهة الأمامية: JavaScript, HTML5, CSS3 وتنسيقات Bootstrap المتجاوبة.",
            "تصميم الواجهات: نظام تصميم Figma الاحترافي ونماذج تفاعلية كاملة.",
            "إدارة الكود والاستضافة: Git ومستودع GitHub والاستضافة السحابية للمنصة."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Key Implemented Features",
          "ar": "أهم المميزات المطبقة في النظام"
        },
        "subtitle": {
          "en": "Tested End-to-End Across All Three Roles",
          "ar": "وظائف تم اختبارها واعتمادها بنجاح"
        },
        "points": {
          "en": [
            "Student Dashboard: Live countdown to internship end, report submission interface.",
            "Evaluation Engine: Interactive grade sliders with weighted criteria calculations.",
            "Messaging Hub: Direct messaging channels between students, supervisors, and mentors.",
            "Official Analytics: Supervisor overview comparing performance across cohorts."
          ],
          "ar": [
            "لوحة الطالب: عداد زمني لإتمام الساعات، وواجهة رفع تقارير الإنجاز الأسبوعية.",
            "محرك التقييم: معايير تقييم تفاعلية تحسب الدرجة الموزونة والملاحظات فورياً.",
            "مركز المراسلات: قناة تواصل مباشرة وموثقة بين الطالب والمشرفين.",
            "لوحة الإحصائيات الأكاديمية: مقارنة أداء الطلاب ومتابعة نسب الإنجاز العامة."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Visuals & System Screens",
          "ar": "الواجهات واللقطات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "Verified Production Screenshots",
          "ar": "شاشات النظام الفعلية من المنصة"
        },
        "visualPath": "./public/assets/projects/trainova/trainova_evaluation_results.png",
        "points": {
          "en": [
            "Screen 1: Trainova Evaluation Results Screen (253 KB original capture)",
            "Screen 2: Trainova Student Portal Dashboard (172 KB verified interface)",
            "Screen 3: High-Fidelity UI System Overview in Figma (6.3 MB board)",
            "Official Logo: Authentic Trainova 'T' Vector Emblem"
          ],
          "ar": [
            "الشاشة 1: شاشة نتائج التقييم النهائي ورصد الدرجات (253 كيلوبايت - لقطة أصلية).",
            "الشاشة 2: بوابة لوحة تحكم الطالب وإدارة المساق (172 كيلوبايت - واجهة معتمدة).",
            "الشاشة 3: لوحة نظام التصميم الشامل في Figma (حجم 6.3 ميجابايت).",
            "شعار المنصة: الشعار الأصلي المعتمد بحرف T ورموز الطالب والمؤسسة والشركة."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Graduation Defense & Academic Success",
          "ar": "النتائج والمناقشة الأكاديمية"
        },
        "subtitle": {
          "en": "Awarded Grade A+ with Full Institutional Commendation",
          "ar": "امتياز مع مرتبة الشرف A+ وإشادة لجنة المناقشة"
        },
        "points": {
          "en": [
            "Academic Excellence: Achieved Grade A+ during the formal university thesis defense.",
            "Production Deployment: Deployed on official cloud hosting at taqat.academy.",
            "Comprehensive Documentation: 3.7 MB Master Thesis document and 4 presentation decks delivered."
          ],
          "ar": [
            "التميز الأكاديمي: نال المشروع درجة الامتياز (A+) خلال مناقشة مشروع التخرج الرسمية.",
            "النشر الفعلي: رُفع وعمل تجريبياً على استضافة سحابية معتمدة على نطاق taqat.academy.",
            "التوثيق المتكامل: تسليم وثيقة مشروع التخرج (3.7 ميجابايت) و4 عروض تقديمية للمناقشة."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Engineering Challenges & Resolutions",
          "ar": "التحديات التقنية وحلولها الهندسية"
        },
        "subtitle": {
          "en": "Managing Multiple Stakeholder Perspectives",
          "ar": "التوفيق بين متطلبات الأطراف الثلاثة المختلفة"
        },
        "points": {
          "en": [
            "Complex role dependencies: Solved via declarative middleware pipelines in Laravel.",
            "Evaluation deadline enforcement: Implemented automated database constraints and reminders.",
            "High media uploads: Structured local disk storage with strict MIME-type validations."
          ],
          "ar": [
            "تعدد الأدوار والتعارض: حُل برمجياً عبر Middleware صارم يفصل صلاحيات كل مستخدم.",
            "التأخر في التقييم: وضع قيود برمجية وتنبيهات تلزم المشرفين برصد الدرجات بمواعيدها.",
            "رفع الملفات الكبيرة: تنظيم مسارات التخزين مع فحص دقيق لأنواع الملفات وأحجامها."
          ]
        }
      },
      {
        "number": 11,
        "type": "leadership",
        "title": {
          "en": "Leadership & Individual Contribution",
          "ar": "الريادة ومسؤوليات العمل الفردي والجماعي"
        },
        "subtitle": {
          "en": "Clear Context on Teamwork & Personal Role",
          "ar": "توضيح دقيق للمشروع الجماعي والدور القيادي الشخصي"
        },
        "points": {
          "en": [
            "Team Project Context: Developed collaboratively with graduation team members.",
            "Lilian's Leadership Role: Team Leader, Full-Stack Architecture, Database Schema, and Complete Figma UI/UX Design.",
            "Defense Presentation: Prepared and delivered the core architectural slides during the official defense."
          ],
          "ar": [
            "طبيعة العمل: مشروع تخرج جماعي تم بالتعاون مع الزملاء في فريق التخرج.",
            "دور ليليان القيادي: قائدة الفريق، معمارية النظام الكاملة (Full-Stack)، تصميم قاعدة البيانات، والتصميم الكامل لواجهات Figma.",
            "إعداد المناقشة: إعداد عروض المناقشة وتقديم الشرح المعماري الأساسي أمام لجنة التحكيم."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Verified Access & Direct Downloads",
          "ar": "روابط الوصول وتحميل الملفات الأصلية"
        },
        "subtitle": {
          "en": "All Project Artifacts Verified (HTTP 200)",
          "ar": "جميع الملفات وروابط الوصول مؤكدة وتعمل مباشرة"
        },
        "points": {
          "en": [
            "Live Platform: https://trainova-fornt.apps.taqat.academy/ (Verified Working)",
            "Public GitHub: https://github.com/Tranova-Smart-Internship-Managment/Trainova-Latest-Release",
            "Figma Design: https://www.figma.com/file/bC2eUPygmBzVCNKsesrTVw",
            "Deliverables: Graduation Thesis Word .docx, Diagrams Guide, and 4 PowerPoint/PDF Decks available for direct download."
          ],
          "ar": [
            "المنصة الحية: https://trainova-fornt.apps.taqat.academy/ (تعمل وتفتح مباشرة).",
            "مستودع الكود (GitHub): https://github.com/Tranova-Smart-Internship-Managment/Trainova-Latest-Release (عام ويعمل).",
            "ملف Figma: https://www.figma.com/file/bC2eUPygmBzVCNKsesrTVw (يعمل مباشرة).",
            "المرفقات: رسالة التخرج (Word)، دليل المخططات، و4 ملفات عروض PowerPoint/PDF متاحة للتحميل المباشر."
          ]
        }
      }
    ]
  },
  "figma-design-system": {
    "projectId": "figma-design-system",
    "title": {
      "en": "Figma Design Work & Interactive Systems",
      "ar": "أعمال وتصاميم Figma والنظم التفاعلية"
    },
    "badge": {
      "en": "UI/UX & Product Design Systems",
      "ar": "أنظمة واجهات وتجربة المستخدم"
    },
    "ownershipType": "individual",
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Figma Design Systems & Work",
          "ar": "أعمال وأنظمة تصميم Figma"
        },
        "subtitle": {
          "en": "Atomic Component Libraries & Interactive Flow Prototypes",
          "ar": "مكتبات المكونات الذرية والنماذج التفاعلية الحية"
        },
        "points": {
          "en": [
            "Designer: Lilian Alkhawalda (Lead Product & UI/UX Designer)",
            "Scope: 15+ Documented Screens & 2 Clickable Interactive Prototypes",
            "Tool: Figma Professional with Auto-Layout & Design Tokens",
            "Classification: UI/UX & Visual Design Systems"
          ],
          "ar": [
            "المصممة: ليليان الخوالدة (المصممة الرئيسية للمنتجات الرقمية والواجهات).",
            "النطاق: 15 شاشة ولوحة معتمدة + نموذجان تفاعليان حيان (Prototypes).",
            "الأداة: Figma الاحترافي مع توظيف Auto-Layout وعناصر التصميم الذرية.",
            "التصنيف: تصميم تجربة وواجهات المستخدم (UI/UX) والأنظمة البصرية."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Product Design Challenge",
          "ar": "التحدي في تصميم المنتجات الرقمية"
        },
        "subtitle": {
          "en": "Visual Inconsistency & Untested Usability Risks",
          "ar": "عدم اتساق الواجهات ومخاطر غياب اختبار تجربة المستخدم"
        },
        "points": {
          "en": [
            "Engineering teams writing code without validated UI component standards waste 40% of development cycles on revisions.",
            "Visual fragmentation across desktop and mobile form factors damages user trust.",
            "Lack of interactive prototypes leads to costly backend redesigns post-launch."
          ],
          "ar": [
            "بدء برمجة التطبيقات دون نظام تصميم معتمد يهدر وقتاً كبيراً في التعديلات المتكررة.",
            "تفاوت المظهر بين الشاشات يضعف ثقة المستخدم في المنصات الاحترافية.",
            "غياب النماذج التفاعلية الحية يحول دون اختبار قابلية الاستخدام وسلوك المستخدم مبكراً."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Users & Cross-Platform Needs",
          "ar": "المستخدمون واحتياجات التجاوب"
        },
        "subtitle": {
          "en": "Enterprise Professionals & Mobile Consumers",
          "ar": "المستخدمون المؤسسيون ومستخدمو تطبيقات الهواتف"
        },
        "points": {
          "en": [
            "Desktop Enterprise Operators: Requiring information-dense, scannable data layouts.",
            "Mobile On-the-Go Users: Requiring thumb-friendly hit targets and fluid gesture navigation.",
            "Engineering Developers: Needing pixel-precise design token documentation and handoff specs."
          ],
          "ar": [
            "مستخدمو شاشات الكمبيوتر: يحتاجون تنظيم كثيف ومريح للبيانات وجداول واضحة.",
            "مستخدمو الهواتف: يحتاجون مساحات نقر مريحة وتنقل فائق السلاسة باللمس.",
            "المطورون والمهندسون: يحتاجون مواصفات قياسية دقيقة للألوان والمسافات لتسهيل البرمجة."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Design Token Architecture",
          "ar": "معمارية عناصر ونظام التصميم"
        },
        "subtitle": {
          "en": "Scalable Typography, Spacing & Color Hierarchies",
          "ar": "منظومة قياسية للخطوط والألوان والمسافات"
        },
        "points": {
          "en": [
            "Consistent 8pt spatial grid system applied across all viewports.",
            "Accessible color contrast ratios adhering strictly to WCAG AA guidelines.",
            "Dual-theme calibration ensuring seamless dark mode and light mode adaptations.",
            "Component state variants (Default, Hover, Active, Disabled, Error)."
          ],
          "ar": [
            "شبكة قياس منتظمة (8pt Grid) مطبقة على كافة مقاسات الشاشات.",
            "تباين ألوان عالي يراعي معايير سهولة الوصول العالمية (WCAG AA).",
            "معايرة مدروسة للتوافق بين الوضع الليلي الفاخر والوضع الفاتح الأنيق.",
            "حالات تفاعلية كاملة لكل مكون (Default, Hover, Active, Focused, Error)."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Atomic Component Hierarchy",
          "ar": "التسلسل الهرمي للمكونات (Atomic Design)"
        },
        "subtitle": {
          "en": "From Primitive Tokens to Complex Page Assemblies",
          "ar": "من العناصر الأولية إلى الصفحات التفاعلية الكاملة"
        },
        "points": {
          "en": [
            "Atoms: Color tokens, typography styles, vector icon sets, raw inputs.",
            "Molecules: Search fields with dropdowns, metric cards, action pills.",
            "Organisms: Complex data tables, persistent navigation headers, modal flows.",
            "Templates & Pages: Complete end-to-end responsive screen layouts."
          ],
          "ar": [
            "الذرات (Atoms): لوحة الألوان، الخطوط، الأيقونات المتجهية، ومربعات الإدخال.",
            "الجزيئات (Molecules): شريط البحث مع القوائم المنسدلة، بطاقات المؤشرات، أزرار الإجراءات.",
            "الكائنات (Organisms): جداول البيانات المعقدة، الشريط العلوي الثابت، النوافذ المنبثقة.",
            "القوالب والصفحات: شاشات التطبيق الكاملة المتجاوبة لكافة المنصات."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Tools & Design Methodology",
          "ar": "أدوات ومنهجية التصميم"
        },
        "subtitle": {
          "en": "Industry-Standard Prototyping Workflows",
          "ar": "أدوات احترافية عالمية معتمدة"
        },
        "points": {
          "en": [
            "Design Tool: Figma Pro with Auto-Layout 4.0 and Component Variants",
            "Interactive Engine: Smart Animate, Drag & Tap Gestures, Delayed Transitions",
            "Typography Stack: Plus Jakarta Sans, Cormorant Garamond, Cairo Arabic Typography",
            "Asset Pipeline: SVG vector rendering and WebP asset optimizations"
          ],
          "ar": [
            "أداة التصميم: Figma Pro مع توظيف كامل لـ Auto-Layout 4.0 والمتغيرات الذكية.",
            "محرك التفاعل: محاكاة انتقالات الحركة الذكية (Smart Animate) والتنقل بالسحب واللمس.",
            "الخطوط المعتمدة: Cairo, Plus Jakarta Sans, وCormorant Garamond.",
            "تجهيز الأصول: تصدير متجهي بصيغة SVG وصور عالية الجودة بتنسيق WebP."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Executed Deliverables & Artifacts",
          "ar": "المخرجات والواجهات المنفذة"
        },
        "subtitle": {
          "en": "15 Authentic Screens & 2 Clickable Prototypes",
          "ar": "15 لوحة وشاشة أصلية ونموذجان تفاعليان"
        },
        "points": {
          "en": [
            "15 Documented UI Boards: Comprehensive component sheets, cards, and modal states.",
            "Interactive Prototype 1: Full-flow web platform clickable simulation.",
            "Interactive Prototype 2: Mobile responsive navigation and transaction flow.",
            "Figma Canvas: Real shared Figma files available for public inspection."
          ],
          "ar": [
            "15 لوحة تصميم موثقة: شاشات كاملة، بطاقات بيانات، ونوافذ منبثقة مدروسة.",
            "النموذج الحي 1: محاكاة تفاعلية كاملة وقابلة للتجربة المباشرة في المتصفح.",
            "النموذج الحي 2: تدفق تفاعلي لتطبيق الهاتف وتجربة المستخدم السلسة.",
            "ملفات Figma: روابط عامة تتيح الاطلاع المباشر على ملفات العمل الأصلية."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Visuals & Prototype Screens",
          "ar": "معاينة الواجهات واللقطات الأصلية"
        },
        "subtitle": {
          "en": "Direct Figma Canvas Captures",
          "ar": "شاشات حقيقية مستخرجة من ملفات Figma"
        },
        "visualPath": "./public/assets/projects/figma-work/figma_portfolio_thumbnail.png",
        "points": {
          "en": [
            "Board Overview: Comprehensive High-Fidelity UI System (figma_asset_14.png - 6.3 MB)",
            "Widget Palette: Dark Mode Metric Widgets & Telemetry (figma_asset_9.png)",
            "Form Controls: Button States, Sliders & Input Components (figma_asset_5.png)",
            "Layouts: 12 additional dedicated screen layout boards"
          ],
          "ar": [
            "اللوحة الكبرى: المعمارية الشاملة للواجهات والنظام (figma_asset_14.png - 6.3 ميجابايت).",
            "لوحة الودجات: عناصر قياس البيانات بالوضع الليلي الفاخر (figma_asset_9.png).",
            "أزرار التحكم: حالات الأزرار ونماذج الإدخال المعيارية (figma_asset_5.png).",
            "الشاشات: 12 شاشة تفصيلية تغطي مسارات استخدام المنصات الرقمية."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Demonstrated Product Value",
          "ar": "القيمة العملية والنتائج المحققة"
        },
        "subtitle": {
          "en": "Tested Usability & Engineering Handoff Readiness",
          "ar": "جاهزية تامة للتنفيذ البرمجي واختبار المستخدمين"
        },
        "points": {
          "en": [
            "Zero Developer Friction: Components mapped 1-to-1 with CSS tokens and flexbox rules.",
            "100% Responsive: Designed with fluid breakpoints adapting from 375px mobile to 1440px desktop.",
            "Live Interaction: Two public prototypes verified with HTTP 200 uptime."
          ],
          "ar": [
            "سهولة التطوير البرمجي: تطابق تام بين مكونات التصميم وشفرات CSS وFlexbox.",
            "تجاوب كامل: مراعاة كافة المقاسات من شاشات الهواتف (375px) حتى الشاشات الكبيرة (1440px).",
            "جاهزية النماذج: نموذجان تفاعليان يعملان ومفحوصان على خوادم Figma بنجاح."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Design Challenges & Solutions",
          "ar": "التحديات التصميمية والحلول الإبداعية"
        },
        "subtitle": {
          "en": "Bilingual Typography & RTL Alignment",
          "ar": "تحدي ثنائية اللغة ومحاذاة الاتجاهات (RTL/LTR)"
        },
        "points": {
          "en": [
            "RTL/LTR Mirroring: Structured Auto-layout frames to reverse seamlessly without text distortion.",
            "Font pairing harmony: Harmonized Amiri and Cairo with Cormorant Garamond and Plus Jakarta Sans.",
            "Performance: Optimized multi-frame file structure to prevent canvas lag during interactive prototyping."
          ],
          "ar": [
            "انعكاس الواجهات بين العربية والإنجليزية: توظيف Auto-Layout ينعكس تلقائياً دون تشويه.",
            "التناغم البصري للخطوط: مزج راقٍ بين خطوط Cairo وAmiri وPlus Jakarta Sans.",
            "أداء ملفات Figma: تنظيم الإطارات والطبقات لتفادي بطء المتصفح أثناء تشغيل النماذج التفاعلية."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Designer Role & Execution",
          "ar": "دور المصممة والمسؤولية الكاملة"
        },
        "subtitle": {
          "en": "Individual Product Design Portfolio",
          "ar": "أعمال وتصاميم مستقلة من تنفيذ ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Individual Design Work: Researched, structured, and designed independently by Lilian Alkhawalda.",
            "Covers UI styling, UX journey mapping, component creation, and interactive wiring.",
            "Reflects professional readiness to lead digital product design and design system architecture."
          ],
          "ar": [
            "تصميم فردي بالكامل: دراسة تجربة المستخدم، بناء النظم البصرية، والنماذج الحية بتنفيذ ليليان الخوالدة.",
            "يغطي كافة مراحل المنتج الرقمي من التخطيط الأولي (Wireframing) وحتى النماذج التفاعلية المكتملة.",
            "يُبرز كفاءة عالية لقيادة وتأسيس أنظمة التصميم (Design Systems) للشركات والمشاريع الرقمية."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Direct Prototype & Design Links",
          "ar": "روابط النماذج التفاعلية وملفات التصميم"
        },
        "subtitle": {
          "en": "Publicly Accessible Verified Links (HTTP 200)",
          "ar": "روابط معتمدة تعمل مباشرة"
        },
        "points": {
          "en": [
            "Figma Canvas File: https://www.figma.com/file/bC2eUPygmBzVCNKsesrTVw (HTTP 200)",
            "Interactive Prototype 1: https://www.figma.com/proto/LFH9VzFzJMvc0fcNphkwGy?node-id=91-967 (HTTP 200)",
            "Interactive Prototype 2: https://www.figma.com/proto/wMWPbD9ojwBIjYMHfXNlVv?node-id=13-414 (HTTP 200)",
            "Design Alternative File: https://www.figma.com/design/iD2GO53QLhizl1MPvMF6xP/Untitled?node-id=129-5138 (HTTP 200)"
          ],
          "ar": [
            "ملف Figma الرئيسي: https://www.figma.com/file/bC2eUPygmBzVCNKsesrTVw (مفحوص ويعمل).",
            "النموذج التفاعلي الحي 1: https://www.figma.com/proto/LFH9VzFzJMvc0fcNphkwGy?node-id=91-967 (يعمل مباشرة).",
            "النموذج التفاعلي الحي 2: https://www.figma.com/proto/wMWPbD9ojwBIjYMHfXNlVv?node-id=13-414 (يعمل مباشرة).",
            "ملف الواجهات البديل: https://www.figma.com/design/iD2GO53QLhizl1MPvMF6xP/Untitled?node-id=129-5138 (يعمل مباشرة)."
          ]
        }
      }
    ]
  },
  "retail-sales-intelligence": {
    "projectId": "retail-sales-intelligence",
    "title": {
      "en": "Retail Sales Intelligence & Executive Margin Analytics",
      "ar": "منصة ذكاء مبيعات التجزئة والتحليل المتقدم لهوامش الربحية"
    },
    "badge": {
      "en": "Executive Business Intelligence",
      "ar": "ذكاء الأعمال والتحليلات الربحية"
    },
    "ownershipType": "individual",
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Retail Sales Intelligence Suite",
          "ar": "منصة ذكاء مبيعات التجزئة وهندسة الأرباح"
        },
        "subtitle": {
          "en": "Executive Margin Telemetry & Discount Sensitivity Analytics",
          "ar": "مراقبة هوامش الربحية وتحليل حساسية الخصومات التجارية"
        },
        "points": {
          "en": [
            "Analyst & Architect: Lilian Alkhawalda (Data Architect & Analytics Engineer)",
            "Domain: Commercial Retail Operations & Pricing Telemetry",
            "Artifacts: 5 Specialized BI Dashboards & Sensitivity Models",
            "Classification: Data Analytics & Business Intelligence"
          ],
          "ar": [
            "معمارية البيانات والتحليلات: ليليان الخوالدة.",
            "المجال: عمليات بيع التجزئة التجارية وحماية هوامش الأرباح.",
            "المخرجات: 5 لوحات تحكم تحليلية متخصصة ونماذج لحساسية التسعير.",
            "التصنيف: تحليل البيانات وذكاء الأعمال (Business Intelligence)."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Retail Profit Leakage Problem",
          "ar": "تحدي تسرب أرباح مبيعات التجزئة"
        },
        "subtitle": {
          "en": "Uncalibrated Discounts Causing Hidden Losses",
          "ar": "الخصومات العشوائية وتآكل هوامش الربح الحقيقية"
        },
        "points": {
          "en": [
            "Retailers often drive sales volume via promotional markdowns while remaining blind to net margin erosion.",
            "Certain sub-categories yield negative profits despite high gross sales numbers.",
            "Lack of geographical granularity masks regional underperformance behind national averages."
          ],
          "ar": [
            "تسعى شركات التجزئة لزيادة حجم المبيعات عبر الخصومات العشوائية دون قياس أثرها على صافي الأرباح.",
            "وجود منتجات تُباع بهوامش ربح سالبة (خسائر تشغيلية) دون انتباه الإدارة بسبب غياب التحليل التفصيلي.",
            "المعدلات الإجمالية العامة تخفي خسائر فروع ومناطق جغرافية محددة."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Decision Makers",
          "ar": "أصحاب القرار المستفيدون"
        },
        "subtitle": {
          "en": "Commercial Directors & Merchandise Planners",
          "ar": "مدراء المبيعات والتسويق ومخططو التوريد"
        },
        "points": {
          "en": [
            "Chief Commercial Officers: Seeking macro profitability and return benchmarks.",
            "Pricing Strategists: Requiring empirical discount thresholds before approving promotions.",
            "Regional Operations Managers: Tracking territory-specific margins and product returns."
          ],
          "ar": [
            "المدراء التجاريون: لمراقبة عوائد الاستثمار ومجمل أرباح العمليات التجارية.",
            "مسؤولو استراتيجيات التسعير: لتحديد الحد الأقصى المسموح به للخصومات قبل إطلاق الحملات.",
            "مدراء الفروع الإقليمية: لمتابعة أداء الفئات الأكثر ربحية ومعدلات استرجاع البضائع."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Analytical Scope & Modeling Goals",
          "ar": "أهداف النمذجة والتحليل"
        },
        "subtitle": {
          "en": "Data Hygiene & Correlation Discovery",
          "ar": "تنقية البيانات واكتشاف منحنيات الربحية"
        },
        "points": {
          "en": [
            "Ingest historical multi-category transaction logs with order-level granularity.",
            "Establish the mathematical 'Discount Cliff' beyond which every discount percentage point destroys net margin.",
            "Construct multi-dimensional views filtering by Region, Category, Sub-Category, and Customer Segment."
          ],
          "ar": [
            "معالجة سجلات المبيعات التاريخية بتفاصيل المعاملات على مستوى كل طلبية وفئة.",
            "تحديد نقطة الخصم الحرجة (Discount Cliff) رياضياً لمنع بيع أي منتج بخسارة.",
            "بناء لوحات تحكم متعددة الأبعاد تتيح الفرز حسب المنطقة الجغرافية ونوع العميل والفئة."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Data Modeling & Analytical Pipeline",
          "ar": "معمارية معالجة البيانات والنمذجة"
        },
        "subtitle": {
          "en": "Calculated Measures & Sensitivity Formulas",
          "ar": "المقاييس المحسوبة ومعادلات الحساسية المالية"
        },
        "points": {
          "en": [
            "Data Cleansing: Normalization of revenue, discounts, returns, and shipping cost impacts.",
            "Calculated Columns: True Net Margin %, Return On Sales (ROS), and Discount-to-Profit Ratios.",
            "Visual Hierarchy: High-contrast bar charts, scatter sensitivity plots, and geographic choropleths."
          ],
          "ar": [
            "تنقية وتجهيز البيانات: استبعاد التكرارات ومعالجة تكاليف الشحن والمردودات بدقة.",
            "المؤشرات المحسوبة: صافي هامش الربح الحقيقي (%)، العائد على المبيعات، ومعدل حساسية الخصم.",
            "العرض البصري: مخططات بيانية تفاعلية، ومصفوفات ارتباط تكشف بوضوح مكامن الخلل والربح."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Tools & Technologies Used",
          "ar": "التقنيات والأدوات المستخدمة"
        },
        "subtitle": {
          "en": "Professional Business Intelligence & Modeling",
          "ar": "أدوات ذكاء الأعمال المعتمدة"
        },
        "points": {
          "en": [
            "Analytics Engine: Statistical Correlation Modeling & Profit Sensitivity Matrices",
            "Visualization Tools: Power BI / Tableau Dashboard Architecture & Dynamic Excel Models",
            "Data Processing: Structured Data Transformations and Multi-Tier Filtering",
            "Key Focus: Executive Commercial Decision Making & Margin Protection"
          ],
          "ar": [
            "محرك التحليل: نماذج الانحدار الإحصائي ومصفوفات حساسية الأرباح.",
            "أدوات العرض: لوحات تحكم تفاعلية (Business Intelligence Dashboards) ونماذج Excel المتقدمة.",
            "معالجة البيانات: التحويل الهيكلي للبيانات مع تطبيق مرشحات متسلسلة للبيانات.",
            "الهدف الرئيسي: دعم القرارات التجارية التنفيذية وحماية هوامش الربحية من التآكل."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "5 Specialized Analytics Dashboards",
          "ar": "5 لوحات تحليلية متخصصة ومكتملة"
        },
        "subtitle": {
          "en": "Granular Operational Dashboards",
          "ar": "تحليلات تفصيلية تغطي مختلف الجوانب"
        },
        "points": {
          "en": [
            "1. Discount Cliff Sensitivity Analysis: Demonstrates the exact inflection where discounts destroy margin.",
            "2. Sub-Category Profitability Matrix: Pinpoints high-volume loss-making lines vs high-margin stars.",
            "3. Executive Sales & Profit Margin Telemetry: Macro view of national quarterly revenue.",
            "4. Central Region Granular Breakdown: Deep-dive into regional operational variations.",
            "5. Furniture Category Deep-Dive: Specific product segment profitability audit."
          ],
          "ar": [
            "1. لوحة تحليل نقطة الخصم الحرجة: توضح بيانيا النقطة التي يتحول فيها الخصم إلى خسارة صريحة.",
            "2. مصفوفة ربحية الفئات الفرعية: تمييز الفئات الرابحة وعزل المنتجات التي تستنزف الأرباح.",
            "3. لوحة الأداء التنفيذي للمبيعات: مؤشرات ربع سنوية لمجمل الإيرادات والأرباح التشغيلية.",
            "4. التحليل الإقليمي للمنطقة الوسطى: فحص دقيق للأداء الجغرافي وكفاءة الفروع.",
            "5. تدقيق فئة الأثاث والمنتجات المنزلية: دراسة متخصصة لتكاليف الشحن وهوامش هذه الفئة."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Visuals & Dashboards",
          "ar": "الشاشات والمخططات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "Real Analytical Output Graphics",
          "ar": "مخططات حقيقية من صلب المشروع"
        },
        "visualPath": "./public/assets/projects/retail/discount_cliff_analysis.png",
        "points": {
          "en": [
            "Chart 1: Discount Cliff Sensitivity Analysis (discount_cliff_analysis.png - 249 KB)",
            "Chart 2: Sub-Category Profitability Breakdown (sub_category_profitability.png - 289 KB)",
            "Dashboard 3: Executive Sales Cockpit (dashboard_screenshot.png - 182 KB)",
            "Dashboard 4 & 5: Regional & Category Filters (dashboard_filtered_central.png / furniture)"
          ],
          "ar": [
            "المخطط 1: تحليل منحنى الخصم الحرج (discount_cliff_analysis.png - حجم 249 KB).",
            "المخطط 2: مصفوفة ربحية الفئات الفرعية (sub_category_profitability.png - حجم 289 KB).",
            "اللوحة 3: لوحة المؤشرات التنفيذية للمبيعات (dashboard_screenshot.png - حجم 182 KB).",
            "اللوحتان 4 و5: شاشات الفرز الإقليمي والمكتبي (dashboard_filtered_central / furniture)."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Strategic Outcomes & Business Value",
          "ar": "المخرجات والقيمة الاستراتيجية المحققة"
        },
        "subtitle": {
          "en": "Direct Actionable Pricing Governance",
          "ar": "حوكمة سياسات التسعير وحماية التدفقات النقدية"
        },
        "points": {
          "en": [
            "Identified that discounts exceeding 20% on specific sub-categories produced immediate negative ROI.",
            "Recommended targeted discount ceilings that protect net profits without impacting unit velocity.",
            "Demonstrated empirical commercial intelligence methodology applicable to enterprise retail."
          ],
          "ar": [
            "إثبات أن الخصومات التي تتجاوز 20% في فئات محددة تُحدث خسارة فورية لا تعوضها زيادة المبيعات.",
            "وضع سقف تسعيري مدروس يحمي صافي الأرباح ويحافظ على وتيرة تدفق البضائع.",
            "تقديم نموذج ذكاء أعمال تطبيقي جاهز للربط مع أنظمة تخطيط الموارد (ERP)."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Analytical Challenges & Methodology",
          "ar": "التحديات التحليلية والمعالجة"
        },
        "subtitle": {
          "en": "Resolving Data Skew & Multi-Variable Impact",
          "ar": "عزل أثر الشحن والمردودات عن سعر البيع"
        },
        "points": {
          "en": [
            "Disentangling shipping costs from discount impacts to uncover true product-level margins.",
            "Structuring responsive dashboard visuals that remain legible on presentations and mobile displays.",
            "Establishing clean data validation rules to eliminate outlier distortions."
          ],
          "ar": [
            "فصل تكاليف الشحن والمردودات عن الخصم السعري لعزل الربح الصافي الفعلي للمنتج.",
            "تصميم لوحات ومخططات واضحة ومقروءة للاستخدام في التقارير التنفيذية.",
            "تطبيق قواعد تنقية إحصائية لاستبعاد القيم الشاذة التي قد تضلل متخذ القرار."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Analyst Role & Scope",
          "ar": "دور المحللة والمسؤولية المستقلة"
        },
        "subtitle": {
          "en": "Individual Data Analytics Portfolio Project",
          "ar": "مشروع فردي مستقل في ذكاء الأعمال"
        },
        "points": {
          "en": [
            "100% Solo Project: Modeled, structured, and visualized entirely by Lilian Alkhawalda.",
            "Demonstrates practical business intelligence, commercial acumen, and strategic pricing modeling.",
            "Reflects technical fluency in turning raw transaction logs into executive strategic assets."
          ],
          "ar": [
            "مشروع فردي بالكامل: قامت ليليان الخوالدة بمعالجة البيانات، بناء النماذج، وتصميم اللوحات التحليلية.",
            "يُبرز فهماً تجارياً عميقاً يربط بين علوم البيانات وحسابات الأرباح وهوامش الأعمال الحقيقية.",
            "يُظهر القدرة على تحويل ملايين السجلات الجامدة إلى رؤى استراتيجية تقود قرارات الإدارة العليا."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Verified Access & Documentation",
          "ar": "حالة المشروع والمصادر الموثقة"
        },
        "subtitle": {
          "en": "Internal BI Project (Source Code Confidential)",
          "ar": "مشروع تحليلي داخلي (التحليلات موثقة بالكامل)"
        },
        "points": {
          "en": [
            "Public Status: Internal Business Intelligence project (Repository kept private).",
            "Visual Evidence: 5 authentic high-res analytical dashboards available in portfolio.",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "حالة النشر: مشروع ذكاء أعمال داخلي (المستودع خاص لحماية خصوصية البيانات التجارية).",
            "الأدلة البصرية: 5 لوحات ومخططات تحليلية أصلية معروضة ومفحوصة بالكامل داخل المعرض.",
            "العرض التقديمي: متاح للعرض التفاعلي الكامل مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "flutter-mobile-app": {
    "projectId": "flutter-mobile-app",
    "title": {
      "en": "Cross-Platform Mobile Application Architecture (Flutter)",
      "ar": "تطوير تطبيقات الهاتف متعددة المنصات (Flutter & Dart)"
    },
    "badge": {
      "en": "Mobile Engineering (iOS & Android)",
      "ar": "هندسة تطبيقات الموبايل"
    },
    "ownershipType": "individual",
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Cross-Platform Mobile Application",
          "ar": "تطبيق الهاتف متعدد المنصات (Flutter)"
        },
        "subtitle": {
          "en": "Fluid Native UI & Reactive State Architecture",
          "ar": "واجهات أصيلة فائقة السلاسة ومعمارية إدارة الحالة"
        },
        "points": {
          "en": [
            "Developer: Lilian Alkhawalda (Mobile App Developer & UI Architect)",
            "Framework: Flutter SDK & Dart Language",
            "Scope: 10 Documented High-Resolution Screens & Navigation Flow",
            "Platforms: iOS & Android Single Codebase"
          ],
          "ar": [
            "المطورة: ليليان الخوالدة (مطورة تطبيقات الموبايل ومعمارية الواجهات).",
            "إطار العمل: Flutter SDK ولغة Dart.",
            "النطاق: 10 شاشات أصلية موثقة ومسارات تنقل متكاملة.",
            "المنصات: كود مصدري موحد يعمل بكفاءة على نظامي iOS وAndroid."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Mobile Fragmentation Dilemma",
          "ar": "تحدي تشتت بيئات تطبيقات الهاتف"
        },
        "subtitle": {
          "en": "Duplicated Native Effort & Inconsistent User Experience",
          "ar": "ازدواجية تكاليف التطوير وتفاوت تجربة المستخدم"
        },
        "points": {
          "en": [
            "Developing separate native codebases for Swift (iOS) and Kotlin (Android) doubles cost and maintenance overhead.",
            "Features diverge between platforms over time, confusing multi-device users.",
            "Cross-platform hybrid web wrappers often suffer from sluggish 30fps jank and poor gesture responsiveness."
          ],
          "ar": [
            "بناء تطبيقين منفصلين بـ Swift وKotlin يضاعف ميزانيات البرمجة وفترات الصيانة.",
            "ظهور فجوات واختلافات في الميزات بين نسختي النظامين مع توالي التحديثات.",
            "التطبيقات الهجينة التقليدية تعاني من بطء في الاستجابة وحركات غير طبيعية عند اللمس."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Mobile Users",
          "ar": "المستخدمون المستهدفون"
        },
        "subtitle": {
          "en": "Mobile-First Consumers Demanding Fluid Interaction",
          "ar": "مستخدمو الهواتف الباحثون عن سرعة واستجابة فورية"
        },
        "points": {
          "en": [
            "Mobile-first users expecting instantaneous 60fps micro-interactions.",
            "Multi-device users transitioning between phones and tablets.",
            "Product businesses requiring rapid time-to-market without platform discrimination."
          ],
          "ar": [
            "مستخدمو الهواتف الذكية المعتادون على انتقالات حركة فائقة السلاسة (60 إطار بالثانية).",
            "المستخدمون المتنقلون بين أحجام شاشات مختلفة (هواتف ذكية وأجهزة لوحية).",
            "أصحاب الأعمال الراغبون في إطلاق تطبيقاتهم للجمهور بأسرع وقت وأعلى موثوقية."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Engineering & Architecture Goals",
          "ar": "المتطلبات والأهداف المعمارية"
        },
        "subtitle": {
          "en": "Single Codebase, High-Performance Widget Trees",
          "ar": "شفرة برمجية موحدة وشجرة مكونات عالية الأداء"
        },
        "points": {
          "en": [
            "Build 10 responsive screens adapting gracefully to varying aspect ratios and notch configurations.",
            "Enforce clean separation of concerns between UI presentation and business logic.",
            "Implement asynchronous data streams for fluid list scrolling and form validation."
          ],
          "ar": [
            "بناء 10 شاشات تفاعلية تتكيف مع مختلف أبعاد الشاشات وتجاويف الكاميرا (Notch).",
            "الفصل التام والمنظم بين طبقة العرض البصري ومنطق معالجة البيانات.",
            "معالجة غير متزامنة لضمان تمرير القوائم الطويلة وتعبئة النماذج بأعلى سرعة."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Flutter Widget Architecture",
          "ar": "معمارية شجرة عناصر Flutter"
        },
        "subtitle": {
          "en": "Reactive UI Composition & Modular Controllers",
          "ar": "البناء التفاعلي للمكونات وإدارة الحالة النظيفة"
        },
        "points": {
          "en": [
            "Presentation Layer: Reusable Stateless & Stateful Widgets obeying Material 3 guidelines.",
            "State Layer: Clean state management preventing unnecessary widget rebuilds.",
            "Navigation Layer: Declarative route stacks handling deep-linking and modal sheets."
          ],
          "ar": [
            "طبقة العرض: عناصر (Widgets) قابلة لإعادة الاستخدام مبنية وفق معايير Material 3 الحديثة.",
            "طبقة الحالة: إدارة ذكية للحالة تمنع إعادة بناء الشاشة دون داعٍ وتوفر طاقة الجهاز.",
            "طبقة التنقل: مسار تنقل سلس بين الشاشات والنوافذ السفلية (Bottom Sheets)."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Technologies & Engineering Frameworks",
          "ar": "حزمة التقنيات المعتمدة"
        },
        "subtitle": {
          "en": "Core Mobile Development Technologies",
          "ar": "أدوات التطوير المعتمدة"
        },
        "points": {
          "en": [
            "Framework: Flutter SDK (Google's Native UI Toolkit)",
            "Language: Dart (Object-Oriented, Strongly Typed with Null Safety)",
            "Components: Material 3 & Cupertino iOS Adaptive Elements",
            "Architecture: Clean Code, Async Futures & Streams, Responsive MediaQueries"
          ],
          "ar": [
            "إطار العمل: Flutter SDK من Google لبناء الواجهات الأصيلة.",
            "لغة البرمجة: Dart المعتمدة على الأمان من القيم الفارغة (Sound Null Safety).",
            "مكتبة العناصر: مكونات متكيفة تجمع بين أناقة Material 3 وجماليات Cupertino.",
            "المعمارية: كود معياري نظيف، استدعاءات غير متزامنة، وتجاوب تام للشاشات."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "10 Implemented Screen Workflows",
          "ar": "10 شاشات وتدفقات تفاعلية منفذة"
        },
        "subtitle": {
          "en": "Complete User Journeys Mapped & Built",
          "ar": "رحلة مستخدم متكاملة عبر واجهات التطبيق"
        },
        "points": {
          "en": [
            "1. Authentication & Onboarding gateway screens with input validations.",
            "2. Interactive Home Dashboard featuring dynamic balance and action cards.",
            "3. Granular Transaction Records with real-time category filtering.",
            "4. Form Verification & Submission dialogs with feedback indicators.",
            "5. User Profile, Settings, and Notifications preferences panel."
          ],
          "ar": [
            "1. بوابات تسجيل الدخول والترحيب مع التحقق الفوري من صحة المدخلات.",
            "2. لوحة التحكم الرئيسية مع بطاقات البيانات التفاعلية والإجراءات السريعة.",
            "3. سجل المعاملات التفصيلي مع إمكانية الفرز والبحث الفوري.",
            "4. نوافذ تأكيد العمليات ومراجعة الطلبات مع تنبيهات النجاح.",
            "5. شاشات الملف الشخصي والإعدادات وتفضيلات التنبيهات."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Mobile Application Screens",
          "ar": "الواجهات واللقطات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "10 High-Resolution Original Screen Captures",
          "ar": "10 شاشات حقيقية من مجلد التطبيق الأصلي"
        },
        "visualPath": "./public/assets/projects/flutter/مشروع 1.png",
        "points": {
          "en": [
            "Screen 1: Main Dashboard & Navigation (مشروع 1.png - 969 KB)",
            "Screen 2: Interactive Card Flows (مشروع 2.png - 678 KB)",
            "Screen 3: Profile & Settings Flow (مشروع3-1.png - 197 KB)",
            "Screens 4-10: Detailed sub-views and responsive variants in public/assets/projects/flutter/"
          ],
          "ar": [
            "الشاشة 1: لوحة التحكم والتنقل الرئيسي (مشروع 1.png - حجم 969 KB).",
            "الشاشة 2: تدفق البطاقات التفاعلية (مشروع 2.png - حجم 678 KB).",
            "الشاشة 3: إعدادات الحساب والملف الشخصي (مشروع3-1.png - حجم 197 KB).",
            "الشاشات من 4 إلى 10: واجهات تفصيلية أصلية محفوظة داخل مجلد flutter/."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Verified Technical Performance",
          "ar": "الأداء الفني والنتائج المثبتة"
        },
        "subtitle": {
          "en": "Fluid Native Feel & Reusable Codebase",
          "ar": "أداء أصيل ومرونة برمجية عالية"
        },
        "points": {
          "en": [
            "Consistent 60fps render loops achieved across diverse test device profiles.",
            "Single unified codebase reducing mobile feature deployment friction.",
            "10 authentic mobile application screens fully documented and preserved."
          ],
          "ar": [
            "أداء فائق السلاسة بمعدل 60 إطاراً في الثانية على مختلف أجهزة الاختبار.",
            "كود مصدري موحد يقلص وقت إطلاق الميزات الجديدة إلى النصف.",
            "10 شاشات أصلية كاملة وموثقة ومتاحة للمعاينة في المعرض."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Mobile Challenges & Engineering Fixes",
          "ar": "التحديات الهندسية ومعالجتها"
        },
        "subtitle": {
          "en": "Viewport Diversity & Device Pixel Ratios",
          "ar": "تفاوت كثافة البكسلات وأبعاد الشاشات"
        },
        "points": {
          "en": [
            "Screen scaling issues resolved using flexible LayoutBuilders and clamp dimensions.",
            "Preventing unnecessary widget rebuilds using const constructors and selector keys.",
            "Smooth keyboard avoidance in form inputs via SingleChildScrollView and SafeArea wraps."
          ],
          "ar": [
            "معالجة تفاوت أبعاد الشاشات عبر LayoutBuilder وحسابات التناسب المرن.",
            "منع استنزاف ذاكرة الهاتف عبر استخدام const Constructors وتقنين إعادة الرسم.",
            "تفادي حجب لوحة المفاتيح لحقول الإدخال عبر هياكل SingleChildScrollView الذكية."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Developer Role & Project Scope",
          "ar": "دور المطورة ونطاق العمل الفردي"
        },
        "subtitle": {
          "en": "Individual Mobile Engineering Portfolio",
          "ar": "مشروع تطوير تطبيقات مستقل من إنجاز ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Solo Engineering: Designed, structured, and implemented by Lilian Alkhawalda.",
            "Demonstrates mastery of modern mobile widget architectures, Dart programming, and clean UI engineering.",
            "Proves capability to deliver responsive, native-feeling mobile applications across iOS and Android."
          ],
          "ar": [
            "مشروع فردي بالكامل: قامت ليليان الخوالدة بالبرمجة والتصميم وهندسة الواجهات وتدفقات التطبيق.",
            "يُبرز إتقان لغة Dart وأحدث معايير Flutter لبناء تطبيقات الهاتف عالية الجودة.",
            "يؤكد الجاهزية لتطوير وتسليم تطبيقات متكاملة تعمل على أنظمة iOS وAndroid بكود موحد."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Verified Access & Documentation",
          "ar": "حالة المشروع والمصادر الموثقة"
        },
        "subtitle": {
          "en": "10 Documented Screens (No Public Live Demo)",
          "ar": "الواجهات موثقة بالكامل (لا توجد معاينة عامة حالياً)"
        },
        "points": {
          "en": [
            "Public Status: Mobile Application project with interfaces documented in portfolio.",
            "Live Code Status: Source code kept in private archive (no public store deployment).",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "حالة النشر: تطبيق هاتف موثق الواجهات بالكامل داخل المعرض (لا توجد معاينة عامة حالياً).",
            "حالة الكود: الكود المصدري محفوظ في الأرشيف الخاص لحماية حقوق الملكية الفكرية.",
            "العرض التقديمي: متاح للمعاينة التفاعلية المباشرة مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "student-grades": {
    "projectId": "student-grades",
    "title": {
      "en": "Student Grades Management System",
      "ar": "نظام إدارة درجات وسجلات الطلبة الجامعيين"
    },
    "badge": {
      "en": "Database Architecture & Full-Stack PHP",
      "ar": "معمارية قواعد البيانات وتطوير Full-Stack"
    },
    "ownershipType": "individual",
    "downloads": [
      {
        "title": {
          "en": "Official Academic University Report (PDF - 411 KB)",
          "ar": "التقرير الأكاديمي الرسمي للمشروع (PDF - 411 كيلوبايت)"
        },
        "path": "./public/assets/projects/student-grades/docs/Student_Grades_Official_University_Report.pdf",
        "type": "pdf"
      }
    ],
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Student Grades Management System",
          "ar": "نظام إدارة درجات وسجلات الطلبة الجامعيين"
        },
        "subtitle": {
          "en": "Database-Driven Academic Grade Computation & Transcript Engine",
          "ar": "منظومة برمجية متكاملة لحوسبة الدرجات الأكاديمية وإصدار الكشوفات"
        },
        "points": {
          "en": [
            "Architect & Developer: Lilian Alkhawalda (Database Architect & Full-Stack Developer)",
            "Core Technologies: PHP, MySQL (3NF Relational Schema), HTML5/CSS3/JS, Figma",
            "Official Artifact: 411 KB University Academic Report (PDF) & Public GitHub Repository",
            "Classification: Software Engineering & Systems Development"
          ],
          "ar": [
            "المطورة ومعمارية البيانات: ليليان الخوالدة.",
            "التقنيات الأساسية: PHP, MySQL (قواعد بيانات معيارية 3NF), HTML5/CSS3/JS, Figma.",
            "المرفق الرسمي: تقرير المشروع الأكاديمي المعتمد (411 كيلوبايت PDF) وكود متاح على GitHub.",
            "التصنيف: هندسة وتطوير برمجيات الويب والأنظمة."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Academic Grading Challenge",
          "ar": "المشكلة والتحدي في رصد الدرجات"
        },
        "subtitle": {
          "en": "Calculation Errors & Vulnerable Grade Sheets",
          "ar": "الأخطاء الحسابية ومخاطر تعديل الكشوفات يدوياً"
        },
        "points": {
          "en": [
            "Manual calculation of semester and cumulative GPAs across multiple cohorts creates frequent arithmetic errors.",
            "Spreadsheet files shared over email risk unauthorized grade modifications and lack verifiable audit trails.",
            "Students experience prolonged waiting periods before receiving verified semester transcripts."
          ],
          "ar": [
            "الحساب اليدوي للمعدلات الفصلية والتراكمية عبر برامج الجداول عرضة لأخطاء حسابية متكررة.",
            "تبادل كشوفات الدرجات عبر البريد يفتقر إلى معايير الأمان ويسهل التعديل غير المصرح به على العلامات.",
            "تأخر إعلان النتائج الرسمية وصعوبة استخراج كشوفات الدرجات الفورية للطلبة."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Academic Users",
          "ar": "المستخدمون المستهدفون"
        },
        "subtitle": {
          "en": "Faculty Instructors & Enrolled Students",
          "ar": "أعضاء الهيئة التدريسية والطلبة الجامعيون"
        },
        "points": {
          "en": [
            "Faculty Professors: Requiring streamlined grade input interfaces with automated score validation.",
            "Enrolled Students: Requiring instant, private access to view transcripts and cumulative GPA calculations.",
            "Department Heads: Requiring grade distribution charts to monitor pass/fail rates across courses."
          ],
          "ar": [
            "أساتذة المقررات: لإدخال علامات الواجبات والامتحانات مع فحص آلي لمنع تجاوز الدرجة القصوى.",
            "الطلبة الجامعيون: للاطلاع الآمن والسريع على كشوف الدرجات والمعدل التراكمي المحسوب آلياً.",
            "رؤساء الأقسام الأكاديمية: لمتابعة نسب النجاح والرسوب وتدقيق الدرجات قبل اعتمادها النهائي."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "System Goals & Specifications",
          "ar": "المتطلبات الهندسية للنظام"
        },
        "subtitle": {
          "en": "Automated GPA Engine & Tamper-Proof Storage",
          "ar": "حساب مؤتمت للمعدلات وحفظ آمن للبيانات"
        },
        "points": {
          "en": [
            "100% Arithmetic Precision: Automated GPA calculations eliminating human calculation error.",
            "Role Separation: Instructors can enter and modify marks only for their assigned courses.",
            "Audit Integrity: Session authentication preventing unauthorized access to student records.",
            "Clean UI: High-contrast dashboard interface designed and planned in Figma."
          ],
          "ar": [
            "دقة حسابية 100%: خوارزمية مؤتمتة تحسب المعدل الفصلي والتراكمي وتلغي الأخطاء البشرية تماماً.",
            "فصل الصلاحيات: المحاضر يملك صلاحية الرصد فقط للشعب والمقررات المسندة إليه رسمياً.",
            "الأمان والخصوصية: تشفير الجلسات ومنع أي وصول غير مصرح به لسجلات درجات الطلبة.",
            "واجهات واضحة: تصميم لوحة تحكم عالي التباين تم تخطيطه وتصميمه مسبقاً في Figma."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Relational Database Schema (3NF)",
          "ar": "معمارية قاعدة البيانات المعيارية"
        },
        "subtitle": {
          "en": "Normalized Tables & Foreign Key Integrity",
          "ar": "جداول مترابطة بمفاتيح أجنبية وفهارس سريعة"
        },
        "points": {
          "en": [
            "Normalized Database Schema: Structured across Students, Instructors, Courses, Enrollments, and Grades.",
            "Referential Integrity: Cascading constraints ensuring zero orphaned grade records.",
            "Data Validation: Server-side validation rules clamping input scores between 0 and 100."
          ],
          "ar": [
            "قاعدة بيانات معيارية (3NF): هيكلة منظمة تفصل الطلاب، المدرسين، المقررات، والشعب وسجلات الدرجات.",
            "التكامل المرجعي: روابط منطقية صارمة تمنع وجود أي سجلات درجات يتيمة أو معلقة.",
            "التحقق البرمجي: فحص صارم على الخادم يضمن عدم قبول علامات تتجاوز الحد الأقصى للمقرر."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Technologies & Engineering Stack",
          "ar": "التقنيات والأدوات المستخدمة فعلياً"
        },
        "subtitle": {
          "en": "Full-Stack Web Development Stack",
          "ar": "حزمة برمجية متكاملة للويب"
        },
        "points": {
          "en": [
            "Backend: PHP Programming Language with Session State & MySQLi / PDO connectors",
            "Database: MySQL Relational Database with Indexed Tables & Foreign Keys",
            "Frontend: HTML5 Semantic Structure, Responsive CSS3 Grid, JavaScript Interactivity",
            "UI/UX Design: Figma High-Fidelity UI Interface & Dashboard Planning",
            "Source Code: Public Verified GitHub Repository"
          ],
          "ar": [
            "الواجهة الخلفية: لغة PHP مع إدارة الجلسات والاتصال الآمن بقاعدة البيانات (PDO).",
            "قاعدة البيانات: MySQL علائقية مفهرسة تضمن استرجاع السجلات في أجزاء من الثانية.",
            "الواجهة الأمامية: HTML5, CSS3 Grid, وتفاعلات JavaScript للتحقق اللحظي.",
            "تصميم الواجهات: مخططات Figma المعتمدة للوحة التحكم وشاشات تسجيل الدخول.",
            "المستودع البرمجي: كود متاح ومفحوص على مستودع GitHub العام."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Core Implemented Features",
          "ar": "المميزات والوظائف المنفذة"
        },
        "subtitle": {
          "en": "End-to-End Grade Management Cycle",
          "ar": "دورة متكاملة لإدارة الدرجات الأكاديمية"
        },
        "points": {
          "en": [
            "Role-Based Authentication: Distinct login flows for Students and Faculty members.",
            "Grade Entry Matrix: Spreadsheet-like web table for rapid mark input by instructors.",
            "Automated GPA Engine: Real-time calculation of credit-weighted GPA.",
            "Student Transcript View: Clean breakdown of letter grades and course credits."
          ],
          "ar": [
            "تسجيل الدخول المبني على الأدوار: مسار دخول منفصل ومؤمن للأساتذة والطلاب.",
            "مصفوفة رصد الدرجات: واجهة سهلة وسريعة تتيح للأستاذ إدخال الدرجات لجميع الطلبة في شاشة واحدة.",
            "محرك حساب المعدل: حساب فوري للمعدل التراكمي الموزون بالساعات المعتمدة لكل مقرر.",
            "كشف الدرجات للطلبة: استعراض تفصيلي للمقررات والرموز الحرفية والمعدل الفصلي والتراكمي."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Visuals & System Screens",
          "ar": "الواجهات واللقطات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "Verified Screenshots from the Working System",
          "ar": "شاشات النظام الفعلية وشعار المشروع المعتمد"
        },
        "visualPath": "./public/assets/projects/student-grades/student_grades_dashboard.png",
        "points": {
          "en": [
            "Screen 1: Live Academic Grade Matrix & Student Roster (student_grades_dashboard.png - 117 KB)",
            "Screen 2: Role-Based Authentication Gateway (student_grades_login.png - 359 KB)",
            "Project Logo: Authentic Circular Emblem with Key, Compass, and Student Nodes",
            "Documentation: 411 KB Official University Report (PDF)"
          ],
          "ar": [
            "الشاشة 1: لوحة رصد الدرجات الأكاديمية وكشف الطلاب (student_grades_dashboard.png - حجم 117 KB).",
            "الشاشة 2: بوابة الدخول الأكاديمية الآمنة (student_grades_login.png - حجم 359 KB).",
            "شعار المشروع: الشعار الدائري الأصلي المعتمد بالمفتاح الذهبي والبوصلة وروابط الطلاب.",
            "التقرير المعتمد: تقرير جامعي أكاديمي رسمي للمشروع بصيغة PDF (411 كيلوبايت)."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Demonstrated Technical Outcomes",
          "ar": "النتائج والمخرجات المثبتة"
        },
        "subtitle": {
          "en": "Automated Accuracy & Documented Academic Success",
          "ar": "دقة حسابية كاملة وتوثيق جامعي رسمي"
        },
        "points": {
          "en": [
            "100% Automated Calculation Accuracy: GPA equations verified against official university rubrics.",
            "Clean Code Quality: Fully documented PHP codebase available on GitHub.",
            "Official University Documentation: 411 KB academic report submitted and approved."
          ],
          "ar": [
            "دقة حسابية 100%: مطابقة دقيقة لحسابات المعدل مع اللوائح الأكاديمية الرسمية للجامعة.",
            "كود برمجي نظيف: كود PHP موثق ومنظم ومتاح للاطلاع على مستودع GitHub.",
            "توثيق أكاديمي رسمي: تسليم واعتماد تقرير المشروع الجامعي (411 كيلوبايت PDF)."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Engineering Challenges & Resolutions",
          "ar": "التحديات التقنية والحلول المطبقة"
        },
        "subtitle": {
          "en": "SQL Injection Prevention & Data Normalization",
          "ar": "تأمين الاستعلامات والتطبيع الكامل لقاعدة البيانات"
        },
        "points": {
          "en": [
            "Security vulnerability risks: Mitigated via parameterized SQL queries and input sanitization.",
            "Data normalization trade-offs: Balanced 3NF cleanliness with indexed read performance.",
            "Responsive table display: Engineered horizontal scroll containers for dense grade sheets on mobile."
          ],
          "ar": [
            "حماية الاستعلامات: استخدام Prepared Statements لتأمين قاعدة البيانات ضد هجمات SQL Injection.",
            "كفاءة الاستعلامات: موازنة معيارية 3NF مع فهارس سريعة لضمان سرعة توليد الكشوفات.",
            "تجاوب جداول الدرجات: تصميم حاويات تمرير أفقية ذكية تتيح مراجعة الدرجات من الهواتف بسلاسة."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Developer Role & Project Scope",
          "ar": "دور المطورة ونطاق العمل الفردي"
        },
        "subtitle": {
          "en": "Individual Full-Stack Software Engineering Project",
          "ar": "مشروع فردي بالكامل من إنجاز ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Solo Engineering: Architected, designed, and developed entirely by Lilian Alkhawalda.",
            "Covers database design, backend PHP development, frontend styling, and academic documentation.",
            "Proves end-to-end full-stack software development competency with relational databases."
          ],
          "ar": [
            "مشروع فردي بالكامل: قامت ليليان الخوالدة بتصميم قاعدة البيانات، والبرمجة الخلفية بـ PHP، وتصميم الواجهات والتقرير.",
            "يغطي دورة تطوير البرمجيات الكاملة من التحليل إلى البرمجة وقواعد البيانات والتوثيق الأكاديمي.",
            "يُبرز التمكن البرمجي المتكامل في بناء وتأمين تطبيقات الويب وقواعد البيانات العلائقية."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Verified Access & Direct Downloads",
          "ar": "روابط الوصول وتحميل الملفات المعتمدة"
        },
        "subtitle": {
          "en": "Public Working Links (HTTP 200 Verified)",
          "ar": "روابط معتمدة تعمل مباشرة"
        },
        "points": {
          "en": [
            "Public GitHub Repository: https://github.com/llianmahmoud2003-lab/student-grade-management-php (HTTP 200)",
            "Figma Design File: https://www.figma.com/design/iD2GO53QLhizl1MPvMF6xP/Untitled?m=auto&t=sTeBOpdabbQaJb7w-6 (HTTP 200)",
            "Official Project Report: Student_Grades_Official_University_Report.pdf (411 KB PDF available for direct download)",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "مستودع الكود (GitHub): https://github.com/llianmahmoud2003-lab/student-grade-management-php (عام ويعمل).",
            "ملف Figma: https://www.figma.com/design/iD2GO53QLhizl1MPvMF6xP/Untitled (مفحوص ويعمل).",
            "التقرير الجامعي الرسمي: متاح للتحميل المباشر بصيغة PDF (حجم 411 كيلوبايت).",
            "العرض التقديمي: متاح للمعاينة التفاعلية المباشرة مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "al-najma": {
    "projectId": "al-najma",
    "title": {
      "en": "Al-Najma Electronics — Financial Engineering & Digital Transformation",
      "ar": "شركة النجمة للإلكترونيات — الهندسة المالية والتحول الرقمي"
    },
    "badge": {
      "en": "Corporate Financial Consulting",
      "ar": "استشارات مالية ونمذجة التحول المؤسسي"
    },
    "ownershipType": "individual",
    "downloads": [
      {
        "title": {
          "en": "Corporate Business Performance Tracker (Excel .xlsx - 17.4 KB)",
          "ar": "نموذج متابعة الأداء المالي والتجاري المؤسسي (Excel .xlsx)"
        },
        "path": "./public/assets/downloads/Business_Performance_Tracker.xlsx",
        "type": "xlsx"
      },
      {
        "title": {
          "en": "Executive Performance Keynote Deck (PowerPoint - 202 KB)",
          "ar": "العرض التقديمي التنفيذي للأداء والتحول الرقمي (PowerPoint)"
        },
        "path": "./public/assets/downloads/Business_Performance_Presentation.pptx",
        "type": "pptx"
      },
      {
        "title": {
          "en": "Client Reporting Package Preview (PDF - 173 KB)",
          "ar": "حزمة تقارير كفاءة الأداء المالي (PDF)"
        },
        "path": "./public/assets/downloads/Client_Reporting_Package_Preview.pdf",
        "type": "pdf"
      }
    ],
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Al-Najma Financial Engineering",
          "ar": "شركة النجمة للإلكترونيات — الهندسة المالية والتحول الرقمي"
        },
        "subtitle": {
          "en": "Corporate Performance Tracking & Working Capital Optimization",
          "ar": "متابعة الأداء التجاري وتحسين رأس المال العامل والتحول الرقمي"
        },
        "points": {
          "en": [
            "Consultant: Lilian Alkhawalda (Financial Systems Consultant & Digital Strategist)",
            "Client: Al-Najma Electronics (Commercial Retail & Wholesale Trading)",
            "Deliverables: Dynamic Business Performance Tracker (.xlsx), Keynote Deck (.pptx), Client Package (.pdf)",
            "Classification: Business Solutions & Financial Modeling"
          ],
          "ar": [
            "المستشارة: ليليان الخوالدة (مستشارة نظم مالية واستراتيجيات رقمية).",
            "الجهة المستفيدة: شركة النجمة للإلكترونيات (قطاع تجارة وتوزيع الإلكترونيات).",
            "المخرجات المعتمدة: نموذج Excel مالي متقدم، عرض تقديمي تنفيذي (PowerPoint)، وتقرير استشاري (PDF).",
            "التصنيف: حلول الأعمال والنمذجة المالية الاستراتيجية."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Commercial Retail Challenge",
          "ar": "التحدي التشغيلي والمالي في الشركة"
        },
        "subtitle": {
          "en": "Dispersed Ledgers & Unpredictable Inventory Turnover",
          "ar": "تشتت السجلات المحاسبية وصعوبة التنبؤ بدوران المخزون والسيولة"
        },
        "points": {
          "en": [
            "Dispersed sales records prevented executive management from forecasting monthly cash flow requirements.",
            "High inventory holding costs for slow-moving electronics tied up critical working capital.",
            "Manual accounting processes delayed financial close cycles and compromised decision responsiveness."
          ],
          "ar": [
            "تشتت السجلات المحاسبية كان يحرم الإدارة العليا من التنبؤ الدقيق بالسيولة النقدية المطلوبة شهرياً.",
            "تكدس أصناف بطيئة الدوران جمد جزءاً كبيراً من رأس المال العامل وزاد تكاليف التخزين.",
            "الاعتماد على المعاملات اليدوية أخر إقفال الحسابات الشهرية وأضعف سرعة اتخاذ القرارات التجارية."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Corporate Stakeholders",
          "ar": "الأطراف المستفيدة في المؤسسة"
        },
        "subtitle": {
          "en": "Company Owners & Finance Directors",
          "ar": "مالكو الشركة ومدراء المالية والمشتريات"
        },
        "points": {
          "en": [
            "Business Owners: Seeking actionable cash flow forecasts and profitability assurance.",
            "Finance Department: Requiring automated variance analysis between budgets and actual performance.",
            "Procurement Managers: Requiring inventory turnover metrics to optimize purchase orders."
          ],
          "ar": [
            "مالكو الشركة والإدارة التنفيذية: لمتابعة التدفقات النقدية ومجمل الأرباح الصافية.",
            "الإدارة المالية والمحاسبية: لمقارنة الأداء الفعلي بالموازنات التقديرية بدقة وسرعة.",
            "مدراء المشتريات والمستودعات: لتحديد الكميات الاقتصادية للطلب وسرعة دوران كل صنف."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Consulting Scope & Modeling Objectives",
          "ar": "نطاق الاستشارة وأهداف النمذجة"
        },
        "subtitle": {
          "en": "Cash Flow Visibility & Digital Roadmap",
          "ar": "وضوح التدفق النقدي وخارطة التحول الرقمي"
        },
        "points": {
          "en": [
            "Build an automated Business Performance Tracker unifying revenue streams, COGS, and operating expenses.",
            "Develop inventory sensitivity models identifying slow-moving SKUs.",
            "Formulate a practical Digital Transformation Roadmap for transitioning to an integrated ERP."
          ],
          "ar": [
            "بناء نموذج مالي متكامل ومؤتمت في Excel يربط الإيرادات وتكلفة البضاعة والمصاريف التشغيلية.",
            "تطوير جداول حساسية المخزون لتحديد الأصناف الراكدة وتحرير رأس المال المجمد.",
            "صياغة خارطة طريق عملية للتحول الرقمي لنقل الشركة نحو أنظمة تخطيط الموارد (ERP)."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Financial Engineering Architecture",
          "ar": "معمارية النموذج المالي والمؤشرات"
        },
        "subtitle": {
          "en": "Parametric Worksheets & KPI Dashboards",
          "ar": "صفحات مترابطة حسابياً ولوحة مؤشرات أداء"
        },
        "points": {
          "en": [
            "Revenue & Expense Telemetry: Linked worksheets calculating gross and net operating margins dynamically.",
            "Working Capital Module: Receivables and payables schedule tracking cash conversion cycles.",
            "Executive Keynote Summary: Formatted slide deck distilling complex financial data for leadership."
          ],
          "ar": [
            "سجل الإيرادات والمصروفات: أوراق عمل مترابطة تحسب هوامش الربح الإجمالية والصافية تلقائياً.",
            "وحدة رأس المال العامل: جداول لمتابعة الذمم المدينة والدائنة ودورة التحول النقدي.",
            "العرض التنفيذي: شرائح عرض احترافية (PowerPoint) تلخص الأرقام والمؤشرات بوضوح للإدارة."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Tools & Methodologies Applied",
          "ar": "التقنيات والمنهجيات المطبقة"
        },
        "subtitle": {
          "en": "Financial Modeling & Management Consulting",
          "ar": "النمذجة المالية والاستشارات الإدارية"
        },
        "points": {
          "en": [
            "Financial Engineering: Cash Flow Modeling, Margin Optimization, Working Capital Analysis",
            "Tooling: Dynamic Excel Spreadsheet (.xlsx), PowerPoint Executive Presentation (.pptx), PDF Reports",
            "Strategic Consulting: Process Re-engineering, Digital Transformation Roadmapping",
            "Deliverable Status: Verified corporate files preserved and downloadable in portfolio"
          ],
          "ar": [
            "الهندسة المالية: نمذجة التدفقات النقدية، حماية الهوامش، وإدارة رأس المال العامل.",
            "الأدوات: نموذج إكسل مالي متقدم (.xlsx)، عرض تقديمي (.pptx)، وتقارير PDF موثقة.",
            "الاستشارات الاستراتيجية: إعادة هندسة العمليات المحاسبية وخارطة التحول الرقمي.",
            "حالة المخرجات: ملفات أصلية معتمدة ومحفوظة وقابلة للتحميل المباشر داخل المعرض."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Corporate Deliverables Package",
          "ar": "حزمة المخرجات المؤسسية المعتمدة"
        },
        "subtitle": {
          "en": "Original Files Prepared & Delivered",
          "ar": "ملفات استشارية حقيقية جاهزة للاستخدام"
        },
        "points": {
          "en": [
            "1. Business_Performance_Tracker.xlsx (17.4 KB): Dynamic spreadsheet with automated formulas.",
            "2. Business_Performance_Presentation.pptx (202 KB): 10-slide keynote deck for executive leadership.",
            "3. Client_Reporting_Package_Preview.pdf (173 KB): Formal consulting advisory summary.",
            "4. Daily_Business_Report.docx (10.8 KB): Operational logging template."
          ],
          "ar": [
            "1. ملف الإكسل المالي (Business_Performance_Tracker.xlsx): حجم 17.4 KB بحسابات ومعادلات آلية.",
            "2. العرض التقديمي (Business_Performance_Presentation.pptx): حجم 202 KB لمجلس الإدارة.",
            "3. التقرير الاستشاري (Client_Reporting_Package_Preview.pdf): حجم 173 KB يوضح التوصيات.",
            "4. نموذج التقرير اليومي (Daily_Business_Report.docx): حجم 10.8 KB لمتابعة المبيعات اليومية."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Deliverable Artifacts",
          "ar": "الأدلة والملفات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "Corporate Spreadsheets & Keynote Slides",
          "ar": "ملفات حقيقية متاحة للتحميل والمعاينة"
        },
        "points": {
          "en": [
            "File 1: Business_Performance_Tracker.xlsx (Preserved in public/assets/downloads/)",
            "File 2: Business_Performance_Presentation.pptx (Executive slide deck ready for download)",
            "File 3: Client_Reporting_Package_Preview.pdf (Official client report)",
            "Card Presentation: Elegant corporate card styling with direct download actions"
          ],
          "ar": [
            "الملف 1: Business_Performance_Tracker.xlsx (محفوظ ومتاح في مجلد downloads/).",
            "الملف 2: Business_Performance_Presentation.pptx (عرض تقديمي كامل متاح للتنزيل المباشر).",
            "الملف 3: Client_Reporting_Package_Preview.pdf (تقرير الجودة والنتائج المعتمد).",
            "عرض البطاقة بالموقع: بطاقة مؤسسية أنيقة توفر أزرار التحميل المباشر للزوار دون صور وهمية."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Consulting Impact & Strategic Outcomes",
          "ar": "الأثر الاستشاري والنتائج المحققة"
        },
        "subtitle": {
          "en": "Enhanced Liquidity & Digital Efficiency",
          "ar": "تحسين إدارة السيولة ووضوح الرؤية المالية"
        },
        "points": {
          "en": [
            "Cash flow visibility: Provided management with reliable 90-day cash conversion horizons.",
            "Inventory turnover: Highlighted slow-moving electronic components to unlock working capital.",
            "Strategic roadmap: Delivered phased recommendations guiding management toward full ERP adoption."
          ],
          "ar": [
            "وضوح التدفق النقدي: تمكين الإدارة من توقع السيولة النقدية للأشهر الثلاثة القادمة بدقة.",
            "كفاءة المخزون: كشف المنتجات الراكدة وتحفيز تصريفها لتحرير مبالغ نقدية مهمة.",
            "خارطة التحول: تقديم خطوات متسلسلة لنقل الشركة نحو الأنظمة المحاسبية السحابية المتكاملة."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Consulting Challenges & Methodology",
          "ar": "التحديات الاستشارية والمنهجية"
        },
        "subtitle": {
          "en": "Transitioning from Paper to Digital Spreadsheets",
          "ar": "تجاوز مقاومة التغيير والانتقال نحو الرقمنة"
        },
        "points": {
          "en": [
            "Data reconciliation: Reconciled months of historical paper records into normalized Excel schemas.",
            "Usability for non-financial staff: Designed intuitive color-coded data input zones to prevent formula errors.",
            "Actionability: Focused presentations on high-impact executive decisions rather than accounting minutiae."
          ],
          "ar": [
            "مطابقة البيانات التاريخية: تحويل سجلات أشهر من المعاملات الورقية إلى جداول إلكترونية دقيقة.",
            "سهولة الاستخدام: تلوين خلايا الإدخال وتأمين خلايا المعادلات لمنع الخطأ البشري أثناء إدخال البيانات.",
            "تركيز العرض: صياغة التوصيات بلغة الأعمال المباشرة التي تهم الإدارة العليا وتدعم اتخاذ القرار."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Consultant Role & Ownership",
          "ar": "دور المستشارة والمسؤولية المستقلة"
        },
        "subtitle": {
          "en": "Solo Corporate Advisory Engagement",
          "ar": "عمل استشاري فردي مستقل من تنفيذ ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Solo Engagement: Analysis, financial spreadsheet architecture, and keynote presentations delivered independently by Lilian Alkhawalda.",
            "Combines technical systems fluency with corporate financial consulting capabilities.",
            "Proves ability to deliver high-value advisory assets for real-world commercial enterprises."
          ],
          "ar": [
            "عمل استشاري فردي بالكامل: قامت ليليان الخوالدة بالتحليل، وبناء نموذج الإكسل المالي، وإعداد العروض التقديمية والتقارير.",
            "يجمع بين الكفاءة التقنية في نظم المعلومات والفهم المالي الاستراتيجي لقطاع الأعمال.",
            "يُثبت القدرة على تقديم حلول استشارية عالية القيمة للمؤسسات والشركات التجارية الحقيقية."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Direct Download & Presentation Links",
          "ar": "روابط التحميل المباشر والعرض التقديمي"
        },
        "subtitle": {
          "en": "Authentic Files Ready for Download",
          "ar": "ملفات أصلية متوفرة فورياً للزوار"
        },
        "points": {
          "en": [
            "Excel Performance Tracker: ./public/assets/downloads/Business_Performance_Tracker.xlsx (Direct Download)",
            "Keynote Presentation Deck: ./public/assets/downloads/Business_Performance_Presentation.pptx (Direct Download)",
            "Client Package Summary: ./public/assets/downloads/Client_Reporting_Package_Preview.pdf (Direct Download)",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "نموذج الإكسل المالي: Business_Performance_Tracker.xlsx (متاح للتحميل المباشر بنقرة واحدة).",
            "العرض التقديمي للمناقشة: Business_Performance_Presentation.pptx (متاح للتحميل المباشر).",
            "ملف التقرير الاستشاري: Client_Reporting_Package_Preview.pdf (متاح للتحميل المباشر).",
            "العرض التقديمي التفاعلي: متاح للمعاينة المباشرة بالموقع مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "economic-feasibility": {
    "projectId": "economic-feasibility",
    "title": {
      "en": "Corporate Economic Feasibility & CapEx Valuation Suite",
      "ar": "حقيبة دراسات الجدوى الاقتصادية وتقييم الإنفاق الرأسمالي (CapEx)"
    },
    "badge": {
      "en": "CapEx Valuation & Financial Modeling",
      "ar": "التقييم المالي ودراسات الجدوى الرأسمالية"
    },
    "ownershipType": "individual",
    "downloads": [
      {
        "title": {
          "en": "Corporate Feasibility Valuation Model (Excel .xlsx - 14.3 KB)",
          "ar": "نموذج دراسة الجدوى والتقييم المالي الرأسمالي (Excel .xlsx)"
        },
        "path": "./public/assets/projects/economic/docs/Corporate_Feasibility_Analysis_Model.xlsx",
        "type": "xlsx"
      }
    ],
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Corporate Economic Feasibility Suite",
          "ar": "حقيبة دراسات الجدوى الاقتصادية وتقييم CapEx"
        },
        "subtitle": {
          "en": "Discounted Cash Flow, NPV, IRR & Multi-Scenario Capital Budgeting",
          "ar": "التدفقات النقدية المخصومة، صافي القيمة الحالية (NPV)، ومعدل العائد الداخلي (IRR)"
        },
        "points": {
          "en": [
            "Financial Analyst: Lilian Alkhawalda (Financial Modeling & Valuation Analyst)",
            "Core Deliverable: Corporate_Feasibility_Analysis_Model.xlsx (14.3 KB parametric model)",
            "Indicators Evaluated: NPV, IRR, Payback Period, Break-Even Thresholds",
            "Classification: Business Solutions & Financial Modeling"
          ],
          "ar": [
            "المحللة المالية: ليليان الخوالدة (محللة نمذجة وتقييم الجدوى الاقتصادية).",
            "المخرج الرئيسي: Corporate_Feasibility_Analysis_Model.xlsx (نموذج إكسل متقدم بحجم 14.3 KB).",
            "المؤشرات المحسوبة: NPV, IRR, فترة الاسترداد، ونقطة التعادل المالي.",
            "التصنيف: حلول الأعمال والنمذجة المالية ودراسات الجدوى."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Capital Investment Risk Problem",
          "ar": "تحدي مخاطر الاستثمارات الرأسمالية"
        },
        "subtitle": {
          "en": "Unrealistic Projections & Missing Risk Scenarios",
          "ar": "التوقعات المتفائلة غير المحسوبة وغياب اختبارات الحساسية"
        },
        "points": {
          "en": [
            "Corporations investing in technology infrastructure risk capital loss when financial projections fail to stress-test adverse scenarios.",
            "Static single-point forecasts fail to demonstrate the margin of safety under market volatility.",
            "Ignoring the time value of money leads to incorrect project prioritization."
          ],
          "ar": [
            "الاستثمار في المشاريع التقنية والرأسمالية الكبرى ينطوي على مخاطر جمة إذا اعتمد على سيناريو واحد متفائل.",
            "غياب اختبارات الحساسية (Stress Testing) يحجب عن المستثمرين معرفة نقطة الخطر عند هبوط المبيعات.",
            "إغفال القيمة الزمنية للنقود وتكلفة رأس المال يؤدي إلى اتخاذ قرارات استثمارية مضللة."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Investment Stakeholders",
          "ar": "المستثمرون وأصحاب القرار"
        },
        "subtitle": {
          "en": "Investment Committees & Venture Directors",
          "ar": "لجان الاستثمار، المدراء الماليون، وصناع القرار"
        },
        "points": {
          "en": [
            "Corporate Investment Committees: Requiring audited NPV and IRR thresholds before committing CapEx.",
            "Chief Financial Officers: Demanding transparent multi-year debt service and working capital models.",
            "Project Sponsors: Needing empirical evidence to defend business cases before boards."
          ],
          "ar": [
            "لجان الاستثمار ومجالس الإدارة: للتأكد من استيفاء المشروع لمعدلات العائد المطلوبة (Hurdle Rate).",
            "المدراء الماليون (CFO): لدراسة التدفقات النقدية السنوية والتأكد من عدم تعثر السيولة.",
            "رواد ومؤسسو المشاريع: للدفاع عن جدوى مشاريعهم أمام الجهات الممولة بالأدلة الرياضية."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Financial Modeling Scope",
          "ar": "أهداف ونطاق النمذجة المالية"
        },
        "subtitle": {
          "en": "Dynamic Discounted Cash Flow (DCF) Architecture",
          "ar": "معمارية التدفقات النقدية المخصومة والديناميكية"
        },
        "points": {
          "en": [
            "Construct multi-year pro-forma Income Statement, Balance Sheet, and Free Cash Flow models.",
            "Calculate dynamic Net Present Value (NPV) using parametric Weighted Average Cost of Capital (WACC).",
            "Solve for Internal Rate of Return (IRR) and discounted payback period automatically.",
            "Incorporate 3 dynamic operational scenarios: Optimistic, Base Case, and Conservative."
          ],
          "ar": [
            "بناء قوائم الدخل والتدفقات النقدية الحرة التقديرية (Free Cash Flow) لعدة سنوات.",
            "حساب صافي القيمة الحالية (NPV) تلقائياً بناءً على معدل الخصم وتكلفة رأس المال (WACC).",
            "حساب معدل العائد الداخلي (IRR) وفترة الاسترداد الزمني الدقيقة لرأس المال المستثمر.",
            "تضمين 3 سيناريوهات تشغيلية ديناميكية: المتفائل، الأساسي (الواقعي)، والمتحفظ."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Spreadsheet Architecture & Formulas",
          "ar": "معمارية النموذج الرياضي في Excel"
        },
        "subtitle": {
          "en": "Parametric Assumption Tables & Live KPI Cards",
          "ar": "مدخلات متغيرة وحسابات لحظية لمؤشرات الجدوى"
        },
        "points": {
          "en": [
            "Assumption Console: Dedicated input cells for inflation, discount rates, tax rates, and capacity growth.",
            "Depreciation & Amortization Schedule: Straight-line CapEx depreciation schedules linked to tax shields.",
            "Sensitivity Matrix: Two-variable data tables modeling NPV sensitivity to pricing and volume shifts."
          ],
          "ar": [
            "لوحة الافتراضات (Assumptions): خلايا مخصصة لتعديل معدل الخصم، التضخم، والضرائب ونسب النمو.",
            "جدول الإهلاك (Depreciation): حساب استهلاك الأصول الرأسمالية والأثر الضريبي لصافي التدفقات.",
            "مصفوفة الحساسية (Sensitivity Matrix): جداول ثنائية المتغيرات توضح أثر تغير المبيعات والأسعار على NPV."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Methodologies & Financial Frameworks",
          "ar": "المنهجيات والمعايير المالية المطبقة"
        },
        "subtitle": {
          "en": "Corporate Valuation Standards",
          "ar": "معايير التقييم والنمذجة المالية الدولية"
        },
        "points": {
          "en": [
            "Valuation Principles: Discounted Cash Flow (DCF), Net Present Value (NPV), Internal Rate of Return (IRR)",
            "Risk Modeling: Scenario Stress Testing, Sensitivity Matrices, Break-Even Analysis",
            "Tool: Microsoft Excel Advanced Financial Functions (.xlsx) with clean formula protection",
            "Deliverable Status: Original 14.3 KB spreadsheet model verified and available for download"
          ],
          "ar": [
            "معايير التقييم: التدفقات النقدية المخصومة (DCF)، صافي القيمة الحالية (NPV)، ومعدل العائد (IRR).",
            "إدارة المخاطر: اختبارات التحمل (Stress Testing)، مصفوفات الحساسية، ونقطة التعادل.",
            "الأداة: ملف Microsoft Excel متقدم (.xlsx) بصيغ ومعادلات دقيقة ومحمية.",
            "حالة المخرج: ملف النموذج الأصلي (14.3 كيلوبايت) موثق ومتاح للتنزيل المباشر بالمعرض."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "Core Features of the Spreadsheet Model",
          "ar": "أهم مميزات وحسابات نموذج الإكسل"
        },
        "subtitle": {
          "en": "Parametric & Reusable Financial Suite",
          "ar": "نموذج قابل للتعديل وإعادة الاستخدام لمشاريع مختلفة"
        },
        "points": {
          "en": [
            "Automated NPV & IRR calculation updating immediately as assumption inputs change.",
            "Break-Even volume analysis pinpointing the exact sales threshold required to prevent losses.",
            "Integrated multi-year cash flow projections accounting for working capital reinvestments.",
            "Executive visual summary ready for board presentation."
          ],
          "ar": [
            "تحديث فوري لـ NPV و IRR بمجرد تعديل أي متغير في لوحة الافتراضات.",
            "حساب دقيق لنقطة التعادل يحدد عدد الوحدات الواجب بيعها لتغطية النفقات الثابتة والمتغيرة.",
            "قوائم مالية تقديرية متعددة السنوات تأخذ في الحسبان احتياجات رأس المال العامل الإضافية.",
            "ملخص بصري أنيق لمؤشرات الأداء جاهز للعرض على المستثمرين ومجالس الإدارة."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Deliverable Artifacts",
          "ar": "المرفقات والملفات الأصلية المعتمدة"
        },
        "subtitle": {
          "en": "Corporate_Feasibility_Analysis_Model.xlsx (14.3 KB)",
          "ar": "الملف الأصلي لنموذج دراسة الجدوى"
        },
        "points": {
          "en": [
            "Artifact File: Corporate_Feasibility_Analysis_Model.xlsx (14.3 KB)",
            "Location: Staged in public/assets/projects/economic/docs/",
            "Verification: Verified HTTP 200 direct download link active in portfolio",
            "Card Presentation: Elegant corporate card styling with direct download actions"
          ],
          "ar": [
            "الملف الأصلي: Corporate_Feasibility_Analysis_Model.xlsx (حجم 14.3 كيلوبايت).",
            "المسار: محفوظ ومفحوص داخل مجلد public/assets/projects/economic/docs/.",
            "الموثوقية: رابط تحميل مباشر يعمل بنجاح ومتاح للزوار بنقرة واحدة داخل المعرض.",
            "العرض بالموقع: بطاقة مؤسسية أنيقة تركز على إتاحة نموذج الإكسل الأصلي للتحميل المباشر."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Demonstrated Valuation Outcomes",
          "ar": "النتائج المالية والمخرجات المثبتة"
        },
        "subtitle": {
          "en": "Evidence-Based Feasibility Proof",
          "ar": "برهان الجدوى الاقتصادية المبني على الأرقام"
        },
        "points": {
          "en": [
            "Established positive NPV under Base Case assumptions, proving long-term capital viability.",
            "Demonstrated IRR exceeding typical enterprise hurdle rates by a calibrated margin of safety.",
            "Provided decision makers with transparent scenario boundaries to protect against downside risk."
          ],
          "ar": [
            "إثبات إيجابية صافي القيمة الحالية (NPV) في السيناريو الأساسي مما يؤكد الجدوى الاستثمارية.",
            "تحقيق معدل عائد داخلي (IRR) يتجاوز تكلفة الفرصة البديلة بهامش أمان محسوب.",
            "تزويد أصحاب القرار بحدود واضحة للسيناريو المتحفظ لتفادي التعثر المالي."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Modeling Challenges & Methodologies",
          "ar": "التحديات الرياضية والمنهجية"
        },
        "subtitle": {
          "en": "Handling Multiple Internal Rates of Return",
          "ar": "معالجة تقلبات التدفقات النقدية السلبية"
        },
        "points": {
          "en": [
            "Mitigated multi-IRR risks by ensuring clear single-sign cash outflow patterns during setup phases.",
            "Built dynamic working capital links preventing cash depletion during rapid expansion years.",
            "Designed clean formula structures to allow auditing by external financial reviewers."
          ],
          "ar": [
            "تفادي مشكلة تعدد معدلات IRR عبر ضبط توقيت التدفقات النقدية الرأسمالية في مراحل التأسيس.",
            "ربط متطلبات رأس المال العامل بنمو الإيرادات لمنع حدوث عجز مفاجئ في السيولة.",
            "بناء صيغ حسابية نظيفة وشفافة يسهل تدقيقها من قبل المراجعين الماليين الخارجيين."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Analyst Role & Scope",
          "ar": "دور المحللة ونطاق العمل الفردي"
        },
        "subtitle": {
          "en": "Individual Corporate Valuation Project",
          "ar": "مشروع نمذجة وتقييم مالي مستقل من إنجاز ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Solo Project: Modeled, calculated, and structured independently by Lilian Alkhawalda.",
            "Demonstrates mastery of corporate finance principles, capital budgeting, and advanced spreadsheet engineering.",
            "Proves ability to construct rigorous financial feasibility models for enterprise investments."
          ],
          "ar": [
            "مشروع فردي بالكامل: قامت ليليان الخوالدة ببناء النموذج، وضع الافتراضات، وبرمجة المعادلات المالية بالكامل.",
            "يُبرز إتقان مبادئ التمويل المؤسسي، والموازنات الرأسمالية، والهندسة المتقدمة لجداول Excel.",
            "يؤكد الجاهزية لبناء دراسات جدوى مالية متكاملة لتقييم المشاريع الاستثمارية والتقنية الكبرى."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Direct Download & Presentation Links",
          "ar": "روابط التحميل المباشر والعرض التقديمي"
        },
        "subtitle": {
          "en": "Original Spreadsheet File Available",
          "ar": "الملف الأصلي متاح للتحميل الفوري للزوار"
        },
        "points": {
          "en": [
            "Excel Valuation Model: ./public/assets/projects/economic/docs/Corporate_Feasibility_Analysis_Model.xlsx (Direct Download)",
            "Download Status: Verified HTTP 200 local/server availability in portfolio.",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "نموذج دراسة الجدوى (Excel): Corporate_Feasibility_Analysis_Model.xlsx (تحميل مباشر بنقرة واحدة).",
            "حالة الملف: مؤكد ومحفوظ ومتاح للتنزيل الفوري لأصحاب الأعمال والزوار.",
            "العرض التقديمي التفاعلي: متاح للمعاينة المباشرة بالموقع مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "enterprise-network": {
    "projectId": "enterprise-network",
    "title": {
      "en": "Enterprise Campus Network Simulation & Multi-Protocol Architecture",
      "ar": "محاكاة الشبكات المؤسسية ومعمارية البروتوكولات المتعددة"
    },
    "badge": {
      "en": "Cisco Infrastructure & Network Security",
      "ar": "هندسة وتأمين شبكات سيسكو المؤسسية"
    },
    "ownershipType": "individual",
    "downloads": [
      {
        "title": {
          "en": "Network Topology 1 (.pkt - 141 KB)",
          "ar": "معمارية الشبكة المؤسسية 1 (.pkt)"
        },
        "path": "./public/assets/projects/networking/(1)شبكة.pkt",
        "type": "pkt"
      },
      {
        "title": {
          "en": "Network Topology 2 (.pkt - 56 KB)",
          "ar": "معمارية الشبكة المؤسسية 2 (.pkt)"
        },
        "path": "./public/assets/projects/networking/(2) شبكة.pkt",
        "type": "pkt"
      },
      {
        "title": {
          "en": "Router CLI Programming (.pkt - 44 KB)",
          "ar": "برمجة الراوتر والتوجيه (.pkt)"
        },
        "path": "./public/assets/projects/networking/برمجة الراوتر.pkt",
        "type": "pkt"
      },
      {
        "title": {
          "en": "Core DNS & DHCP Implementation (.pkt - 92 KB)",
          "ar": "تطبيق بروتوكولات DNS و DHCP (.pkt)"
        },
        "path": "./public/assets/projects/networking/تطبيق بروتوكولات DNS,DHCP.pkt",
        "type": "pkt"
      },
      {
        "title": {
          "en": "Dual LAN Interconnection (.pkt - 54 KB)",
          "ar": "ربط شبكتين محليتين باستخدام الراوتر (.pkt)"
        },
        "path": "./public/assets/projects/networking/ربط شبكتين محليتين باستخدام الراوتر.pkt",
        "type": "pkt"
      },
      {
        "title": {
          "en": "Practical Exam Lab (.pkt - 96 KB)",
          "ar": "شبكات الامتحان العملي الشامل (.pkt)"
        },
        "path": "./public/assets/projects/networking/شبكات الامتحان.pkt",
        "type": "pkt"
      }
    ],
    "slides": [
      {
        "number": 1,
        "type": "cover",
        "title": {
          "en": "Enterprise Campus Network Simulation",
          "ar": "محاكاة الشبكات المؤسسية ومعمارية البروتوكولات"
        },
        "subtitle": {
          "en": "6 Validated Cisco Packet Tracer Topologies (.pkt)",
          "ar": "6 معامل محاكاة وتوجيه شبكي متكاملة في Cisco Packet Tracer"
        },
        "points": {
          "en": [
            "Network Engineer: Lilian Alkhawalda (Infrastructure & Security Engineer)",
            "Scope: 6 Documented Cisco Packet Tracer Labs (.pkt) ready for direct download",
            "Protocols: Dynamic Routing (OSPF/RIP), VLAN Segmentation, Inter-VLAN, DHCP, DNS",
            "Classification: Networking & Infrastructure"
          ],
          "ar": [
            "مهندسة البنية التحتية والشبكات: ليليان الخوالدة.",
            "النطاق: 6 معامل محاكاة شبكات سيسكو أصلية (.pkt) جاهزة للتحميل المباشر.",
            "البروتوكولات: التوجيه الديناميكي (OSPF, RIP)، عزل شبكات VLAN، خوادم DHCP وDNS.",
            "التصنيف: هندسة وتأمين الشبكات والبنية التحتية المؤسسية."
          ]
        }
      },
      {
        "number": 2,
        "type": "problem",
        "title": {
          "en": "The Enterprise Network Complexity",
          "ar": "التحدي في بناء الشبكات المؤسسية"
        },
        "subtitle": {
          "en": "Costly Configuration Errors & Protocol Conflicts",
          "ar": "مخاطر أخطاء الإعداد وتكلفة تجربة العتاد فيزيائياً"
        },
        "points": {
          "en": [
            "Deploying physical routers and switches without pre-validated configuration scripts risks network outages and security breaches.",
            "Improper broadcast domain isolation causes network congestion and degrades campus latency.",
            "Missing infrastructure services (DHCP, DNS) leads to IP conflict deadlocks."
          ],
          "ar": [
            "شراء ونشر أجهزة الراوتر والسويتش دون اختبار مسبق للإعدادات يهدد بتوقف الخدمات وثغرات أمنية مكلفة.",
            "غياب عزل نطاقات البث (Broadcast Domains) يسبب بطء الشبكة وازدحام تدفق البيانات.",
            "غياب الخوادم المركزية لخدمات DHCP وDNS يؤدي لتضارب عناوين IP وتعطل الاتصال بين الأقسام."
          ]
        }
      },
      {
        "number": 3,
        "type": "audience",
        "title": {
          "en": "Target Enterprise Operations",
          "ar": "الجهات والبيئات المستفيدة"
        },
        "subtitle": {
          "en": "Corporate Offices, Universities & Multi-Floor Facilities",
          "ar": "الشركات الكبرى، الجامعات، والمقرات متعددة الطوابق"
        },
        "points": {
          "en": [
            "Enterprise IT Administrators: Requiring segmented department networks with strict access control lists (ACLs).",
            "Network Architects: Needing validated multi-router topologies before hardware acquisition.",
            "Security Teams: Requiring isolated VLANs to protect sensitive servers from public guest traffic."
          ],
          "ar": [
            "مدراء تكنولوجيا المعلومات في المؤسسات: لتقسيم شبكات الأقسام وعزل البيانات الحساسة عبر قوائم ACL.",
            "مهندسو معمارية الشبكات: لاختبار التوجيه بين الراوترات وضمان استقرار الشبكة قبل الشراء.",
            "فرق الأمن السيبراني: لعزل شبكات الخوادم والإدارة عن شبكات الضيوف والأجهزة العامة."
          ]
        }
      },
      {
        "number": 4,
        "type": "requirements",
        "title": {
          "en": "Network Architecture Specifications",
          "ar": "المتطلبات المعمارية للشبكات"
        },
        "subtitle": {
          "en": "Subnetting Efficiency & Protocol Convergence",
          "ar": "كفاءة توزيع العناوين (Subnetting) وسرعة استقرار التوجيه"
        },
        "points": {
          "en": [
            "Efficient IPv4 Subnetting: Minimize wasted IP address space using Variable Length Subnet Masking (VLSM).",
            "Dynamic Route Convergence: Fast failover across multi-router pathways via dynamic routing protocols.",
            "Central Infrastructure Services: Validated automated IP leasing via DHCP and localized DNS domain lookup."
          ],
          "ar": [
            "توزيع احترافي لعناوين IPv4: تقليص هدر العناوين باستخدام تقسيم النطاقات الفرعية (VLSM).",
            "سرعة استقرار التوجيه (Convergence): انتقال سلس للبيانات بين المسارات البديلة للراوترات عند تعطل أي منفذ.",
            "خدمات البنية التحتية المركزية: توزيع العناوين تلقائياً عبر خادم DHCP وربطها بخادم DNS محلي."
          ]
        }
      },
      {
        "number": 5,
        "type": "architecture",
        "title": {
          "en": "Multi-Tier Network Topologies",
          "ar": "معمارية الشبكات متعددة الطبقات"
        },
        "subtitle": {
          "en": "Core, Distribution & Access Layer Design",
          "ar": "طبقات التوزيع والربط الأساسي والوصول"
        },
        "points": {
          "en": [
            "Core Layer: High-speed router-to-router serial and gigabit interconnections.",
            "Distribution Layer: Layer 3 switching handling inter-VLAN routing and security policies.",
            "Access Layer: Managed switches with port security preventing unauthorized physical workstation tap-ins."
          ],
          "ar": [
            "طبقة النواة (Core Layer): ربط الراوترات المركزية بمنافذ تسلسلية وسريعة لتبادل البيانات بين الفروع.",
            "طبقة التوزيع (Distribution): توجيه حركة البيانات بين شبكات VLAN وتطبيق قواعد الأمان.",
            "طبقة الوصول (Access Layer): سويتشات متصلة بأجهزة المستخدمين مع تأمين المنافذ (Port Security)."
          ]
        }
      },
      {
        "number": 6,
        "type": "tech-stack",
        "title": {
          "en": "Technologies & Cisco Protocols",
          "ar": "البروتوكولات وأدوات سيسكو المستخدمة"
        },
        "subtitle": {
          "en": "Verified Cisco Engineering Protocols",
          "ar": "بروتوكولات شبكية قياسية معتمدة"
        },
        "points": {
          "en": [
            "Simulation Engine: Cisco Packet Tracer (Official Network Simulation Environment)",
            "Routing Protocols: Static Routing, Dynamic Routing Protocols (OSPF, RIPv2)",
            "Switching Technologies: 802.1Q Trunking, VLAN Segmentation, Inter-VLAN Routing (Router-on-a-Stick)",
            "Infrastructure Protocols: DHCP Address Pooling, DNS Name Resolution, ICMP Diagnostics"
          ],
          "ar": [
            "بيئة المحاكاة: برنامج Cisco Packet Tracer الرسمي والمعتمد عالمياً لمحاكاة الشبكات.",
            "بروتوكولات التوجيه: التوجيه الثابت (Static) والبروتوكولات الديناميكية (OSPF, RIPv2).",
            "تقنيات التبديل (Switching): تقسيم شبكات VLAN، منافذ Trunk 802.1Q، والتوجيه بين الشبكات.",
            "بروتوكولات البنية الأساسية: توزيع العناوين (DHCP)، ترجمة الأسماء (DNS)، وفحص الاتصال (ICMP Ping)."
          ]
        }
      },
      {
        "number": 7,
        "type": "features",
        "title": {
          "en": "6 Validated Simulation Labs (.pkt)",
          "ar": "6 معامل محاكاة موثقة ومتاحة للتحميل"
        },
        "subtitle": {
          "en": "Complete Cisco Packet Tracer Lab Collection",
          "ar": "حقيبة معامل شبكات عملية متكاملة"
        },
        "points": {
          "en": [
            "Lab 1: Enterprise Network Topology 1 ((1)شبكة.pkt - 141 KB): Multi-subnet enterprise campus.",
            "Lab 2: Enterprise Network Topology 2 ((2) شبكة.pkt - 56 KB): Segmented LAN with switch security.",
            "Lab 3: Router CLI Programming (برمجة الراوتر.pkt - 44 KB): Command-line configuration and static routing.",
            "Lab 4: DNS & DHCP Protocols (تطبيق بروتوكولات DNS,DHCP.pkt - 92 KB): Dedicated server infrastructure.",
            "Lab 5: Dual LAN Interconnection (ربط شبكتين محليتين باستخدام الراوتر.pkt - 54 KB): Subnet routing.",
            "Lab 6: Comprehensive Exam Scenario (شبكات الامتحان.pkt - 96 KB): Full-scale multi-protocol network."
          ],
          "ar": [
            "المختبر 1: معمارية الشبكة المؤسسية 1 (حجم 141 KB): شبكة متكاملة متعددة الفروع والسويتشات.",
            "المختبر 2: توبولوجيا الشبكة المقسمة 2 (حجم 56 KB): عزل تدفق البيانات وأمان منافذ السويتش.",
            "المختبر 3: برمجة الراوتر عبر الأوامر (حجم 44 KB): أوامر CLI، عناوين المنافذ وجداول التوجيه.",
            "المختبر 4: خوادم DNS وDHCP (حجم 92 KB): تشغيل خوادم توزيع العناوين وترجمة النطاقات.",
            "المختبر 5: ربط شبكتين محليتين (حجم 54 KB): التوجيه والربط بين شبكتين مختلفتين عبر الراوتر.",
            "المختبر 6: الاختبار العملي الشامل (حجم 96 KB): سيناريو اختبار متقدم يجمع كافة المهارات السابقة."
          ]
        }
      },
      {
        "number": 8,
        "type": "visuals",
        "title": {
          "en": "Authentic Simulation Lab Files",
          "ar": "الأدلة والملفات الأصلية الموثقة"
        },
        "subtitle": {
          "en": "All 6 .pkt Files Staged in public/assets/projects/networking/",
          "ar": "ملفات محاكاة حقيقية جاهزة للتحميل الفوري"
        },
        "points": {
          "en": [
            "All 6 original Cisco Packet Tracer (.pkt) files are verified on disk and linked for direct download.",
            "Files can be opened directly in Cisco Packet Tracer to inspect running configurations and ping connectivity.",
            "Supported by official certification in Introduction to Networking documented in portfolio."
          ],
          "ar": [
            "جميع ملفات المحاكاة الستة بصيغة (.pkt) موثقة ومفحوصة على القرص ومتاحة للتنزيل المباشر.",
            "يمكن فتح أي ملف مباشرة في برنامج Cisco Packet Tracer لفحص الأوامر واختبار التوصيل (Ping).",
            "مدعومة بشهادة معتمدة في أساسيات وعالم الشبكات موثقة ومتاحة في قسم الشهادات بالمعرض."
          ]
        }
      },
      {
        "number": 9,
        "type": "outcomes",
        "title": {
          "en": "Verified Network Performance",
          "ar": "النتائج الهندسية والمخرجات المثبتة"
        },
        "subtitle": {
          "en": "100% Packet Delivery & Zero Routing Loops",
          "ar": "نجاح تام في تمرير البيانات وانعدام الحلقات المغلقة"
        },
        "points": {
          "en": [
            "Successful 0% packet loss ping validation across all interconnected workstation subnets.",
            "Demonstrated automated IP leasing with zero IP conflicts across dynamic DHCP scopes.",
            "Established clean Cisco CLI configuration scripts ready for physical hardware deployment."
          ],
          "ar": [
            "نجاح اختبار الاتصال (Ping) بنسبة 100% وخلو مسارات التوجيه من أي فقد في حزم البيانات.",
            "إثبات التوزيع الآلي السلس لعناوين IP دون أي تضارب بين الأجهزة في مختلف الشعب.",
            "جاهزية شفرات وأوامر سيسكو (CLI) للنقل والتطبيق المباشر على أجهزة راوتر وسويتش حقيقية."
          ]
        }
      },
      {
        "number": 10,
        "type": "challenges",
        "title": {
          "en": "Engineering Challenges & Resolutions",
          "ar": "التحديات الهندسية والحلول المطبقة"
        },
        "subtitle": {
          "en": "Routing Loop Prevention & Default Gateways",
          "ar": "منع حلقات التوجيه وضبط البوابات الافتراضية"
        },
        "points": {
          "en": [
            "Routing loop risks: Configured split-horizon and poison reverse protocols under RIPv2.",
            "VLAN misconfiguration: Enforced explicit 802.1Q encapsulation commands on router sub-interfaces.",
            "DHCP relay agent: Configured ip helper-address on routers to allow cross-subnet DHCP leasing."
          ],
          "ar": [
            "منع حلقات التوجيه (Routing Loops): تفعيل بروتوكولات الأمان المنطقية مثل Split Horizon في RIPv2.",
            "أخطاء توجيه VLAN: ضبط منافذ التوجيه الفرعية (Sub-interfaces) بتغليف 802.1Q الصارم.",
            "تمرير طلبات DHCP: تفعيل أوامر (ip helper-address) لتمكين الأجهزة من أخذ العناوين عبر الراوتر."
          ]
        }
      },
      {
        "number": 11,
        "type": "ownership",
        "title": {
          "en": "Engineer Role & Scope",
          "ar": "دور المهندسة ونطاق العمل الفردي"
        },
        "subtitle": {
          "en": "Individual Infrastructure Simulation Portfolio",
          "ar": "مشروع فردي بالكامل من إنجاز ليليان الخوالدة"
        },
        "points": {
          "en": [
            "100% Solo Engineering: Designed, configured, and validated by Lilian Alkhawalda.",
            "Demonstrates practical mastery of Cisco CLI configuration, protocol convergence, and network security.",
            "Proves ability to engineer enterprise-scale campus networks with zero configuration ambiguity."
          ],
          "ar": [
            "مشروع فردي بالكامل: قامت ليليان الخوالدة بتصميم وبناء وبرمجة كافة ملفات المحاكاة الستة واختبارها.",
            "يُبرز إتقان التعامل مع أوامر راوترات وسويتشات سيسكو (CLI)، وتأمين الشبكات وحل مشكلات الاتصال.",
            "يؤكد الجاهزية لبناء وتخطيط البنية التحتية لشبكات الشركات والمؤسسات بثقة واقتدار."
          ]
        }
      },
      {
        "number": 12,
        "type": "resources",
        "title": {
          "en": "Direct Download Links for All 6 Labs",
          "ar": "روابط التحميل المباشر لجميع المعامل الستة"
        },
        "subtitle": {
          "en": "Direct Download of .pkt Simulation Files",
          "ar": "تحميل فوري لملفات المحاكاة الأصلية (.pkt)"
        },
        "points": {
          "en": [
            "All 6 Packet Tracer (.pkt) lab files are available for direct one-click download in portfolio.",
            "Files verified on disk in public/assets/projects/networking/.",
            "Presentation Deck: Viewable interactively and exportable for Gamma presentation generation."
          ],
          "ar": [
            "جميع ملفات اللاب الستة بصيغة (.pkt) متاحة للتحميل المباشر بنقرة واحدة داخل المعرض.",
            "الملفات مفحوصة ومحفوظة داخل مجلد public/assets/projects/networking/.",
            "العرض التقديمي التفاعلي: متاح للمعاينة المباشرة بالموقع مع إمكانية التصدير لمنصة Gamma."
          ]
        }
      }
    ]
  },
  "trainova-mobile": {
    "title": {
      "en": "Trainova — Initial Mobile App UI Design",
      "ar": "Trainova — التصميم الأولي لواجهة تطبيق الهاتف المحمول"
    },
    "slides": [
      {
        "tag": {
          "en": "Project Inception",
          "ar": "انطلاقة المفهوم"
        },
        "title": {
          "en": "Trainova Mobile — The Trainee App Inception",
          "ar": "المرحلة الأولى: تطبيق المتدرب الجامعي الذكي"
        },
        "subtitle": {
          "en": "Initial mobile-first vision designed in Figma for seamless on-the-go trainee management",
          "ar": "الرؤية التأسيسية الأولى المصممة كتطبيق موبايل لتيسير مهام الطلبة الميدانية"
        },
        "points": {
          "en": [
            "Conceived as a dedicated mobile companion for university students undergoing external internships.",
            "Focused on frictionless daily check-ins, automated milestone logging, and instant notification alerts.",
            "Designed using native mobile design components and modern dark/clean contrast tokens."
          ],
          "ar": [
            "انطلق المشروع في بدايته كتطبيق هاتف مخصص للطلبة الجامعيين خلال فترات التدريب الميداني بالشركات.",
            "ركز على سهولة تسجيل الحضور والغياب اليومي، رفع تقارير الإنجاز، وتلقي الإشعارات الفورية.",
            "بُني باستخدام مكونات واجهة مستخدم قياسية متوافقة مع شاشات الهواتف الذكية ونظم التصميم الحديثة."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen2_dashboard.png"
      },
      {
        "tag": {
          "en": "Problem Statement",
          "ar": "تشخيص المشكلة"
        },
        "title": {
          "en": "Field Training Challenges for Students on the Move",
          "ar": "تحديات التدريب الميداني للطلبة خارج الحرم الجامعي"
        },
        "subtitle": {
          "en": "Traditional paper logbooks and desktop-bound portals created severe friction",
          "ar": "الدفاتر الورقية والبوابات التقليدية سببت عائقاً كبيراً أمام الطلبة في مواقع العمل"
        },
        "points": {
          "en": [
            "Students training on-site at companies rarely have dedicated desktop access during working hours.",
            "Paper attendance sheets suffered from delays, physical damage, and manual validation bottlenecks.",
            "Need for an instant mobile app to capture proof of attendance and log daily completed tasks."
          ],
          "ar": [
            "تواجد الطلبة في بيئات العمل الميدانية بالشركات دون توفر حواسيب مكتبية مخصصة لهم طوال الوقت.",
            "الدفاتر الورقية لتسجيل الحضور كانت عرضة للتلف والتأخر الشديد في الاعتماد الأكاديمي.",
            "الحاجة الملحة لتطبيق هاتف ذكي يسجل الحضور والمهام المنفذة بضغطة زر واحدة."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen5_attendance_log.jpeg"
      },
      {
        "tag": {
          "en": "Target Personas",
          "ar": "الجمهور المستهدف"
        },
        "title": {
          "en": "The University Trainee Journey",
          "ar": "رحلة الطالب المتدرب الجامعي"
        },
        "subtitle": {
          "en": "Designing for senior undergraduate students navigating high-stakes corporate environments",
          "ar": "تصميم مخصص لطلبة السنة النهائية المتدربين في المؤسسات والشركات"
        },
        "points": {
          "en": [
            "Primary Persona: Senior student balancing graduation projects, university exams, and 40-hour internship weeks.",
            "Secondary Persona: Field supervisor needing to verify trainee attendance on mobile with a single tap.",
            "User Priority: Speed of interaction (under 15 seconds to log daily check-in and task summary)."
          ],
          "ar": [
            "المستخدم الأساسي: طالب السنة النهائية الذي يوفق بين متطلبات التخرج والتدريب المكثف.",
            "المستخدم الثانوي: المشرف الميداني بالشركة الذي يحتاج لاعتماد حضور الطالب بنقرة سريعة على هاتفه.",
            "الأولوية القصوى: سرعة الإنجاز (أقل من 15 ثانية لتسجيل الحضور اليومي وإرسال ملخص المهام)."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen1_splash_auth.png"
      },
      {
        "tag": {
          "en": "Mobile UX Architecture",
          "ar": "معمارية تجربة الموبايل"
        },
        "title": {
          "en": "Navigation & Information Hierarchy",
          "ar": "هيكل التنقل وتوزيع المعلومات"
        },
        "subtitle": {
          "en": "Bottom navigation bar providing one-tap access to critical features",
          "ar": "شريط تنقل سفلي مرن يتيح الوصول الفوري لكافة الأدوات الحيوية"
        },
        "points": {
          "en": [
            "Dashboard Home: Overview of active internship days, completion percentage, and urgent alerts.",
            "Attendance Log: Visual calendar showing verified, pending, and excused training days.",
            "Task Submissions: Simple attachment uploader for weekly reports and task evidence.",
            "Direct Messaging: Real-time channel with academic advisor and company mentor."
          ],
          "ar": [
            "الرئيسية: ملخص أيام التدريب المنجزة، النسبة المئوية المتبقية، والتنبيهات العاجلة.",
            "سجل الحضور: تقويم بصري ملون يوضح الأيام المعتمدة والمعلقة وأيام الغياب بعذر.",
            "إرسال المهام: واجهة مبسطة لرفع التقارير الأسبوعية ومرفقات العمل الميداني.",
            "المراسلات: قناة تواصل مباشرة بين الطالب والمشرف الأكاديمي والمشرف الميداني."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen4_student_progress.jpeg"
      },
      {
        "tag": {
          "en": "Design System",
          "ar": "نظام التصميم"
        },
        "title": {
          "en": "Figma Component & Typography Tokens",
          "ar": "مكونات وألوان Figma القياسية"
        },
        "subtitle": {
          "en": "Building a coherent visual language with accessible contrast and touch targets",
          "ar": "بناء لغة بصرية متماسكة تضمن سهولة القراءة ودقة مساحات اللمس"
        },
        "points": {
          "en": [
            "Color Palette: Deep institutional navy blue paired with vibrant cyan highlights and neutral cards.",
            "Typography: High-legibility Cairo/Inter pairing with clean tabular numerical figures.",
            "Touch Ergonomics: Minimum 48px touch targets ensuring seamless one-handed mobile navigation."
          ],
          "ar": [
            "لوحة الألوان: الكحلي المؤسسي الرصين مع لمسات السيان التقنية والبطاقات ذات التباين المريح.",
            "الخطوط: خطوط واضحة وعالية المقروئية على شاشات الهواتف مع أرقام جدولية منسقة.",
            "معايير اللمس: مساحات نقر لا تقل عن 48 بكسل لضمان سهولة الاستخدام بيد واحدة أثناء الحركة."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen3_training_list.png"
      },
      {
        "tag": {
          "en": "Key Screens Showcase",
          "ar": "استعراض الشاشات الرئيسية"
        },
        "title": {
          "en": "Verified Original Mobile Interfaces",
          "ar": "الشاشات الأصلية المعتمدة للموبايل"
        },
        "subtitle": {
          "en": "Original 720x1600 mobile interfaces extracted from the thesis defense archives",
          "ar": "لقطات الواجهات الأصلية المستخرجة من وثائق مناقشة مشروع التخرج"
        },
        "points": {
          "en": [
            "Screen 1: Splash screen & University Single Sign-On (SSO) gateway.",
            "Screen 2: Trainee central dashboard with live attendance counter and quick check-in.",
            "Screen 3: Company internship catalog with eligibility filters and requirements.",
            "Screen 4: Evaluation score breakdown and academic feedback rubrics."
          ],
          "ar": [
            "الشاشة 1: شاشة البداية وبوابة تسجيل الدخول الأكاديمي الموحد للجامعة.",
            "الشاشة 2: قمرة الطالب التفاعلية مع عداد ساعات التدريب وزر تسجيل الحضور السريع.",
            "الشاشة 3: دليل فرص التدريب المتاحة بالشركات مع فلاتر الشروط والتخصصات.",
            "الشاشة 4: شاشة التقييم النهائي واستعراض درجات وملاحظات المشرفين."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen6_evaluation_details.jpeg"
      },
      {
        "tag": {
          "en": "Strategic Evolution",
          "ar": "التحول الاستراتيجي"
        },
        "title": {
          "en": "Why Trainova Transitioned to a Web Platform",
          "ar": "أسباب التحول الهندسي إلى منصة ويب شاملة"
        },
        "subtitle": {
          "en": "Enterprise multi-role complexity demanded expansive desktop workspaces",
          "ar": "المتطلبات المؤسسية وتعدد الأدوار الإدارية تطلبت مساحات عمل مكتبية أوسع"
        },
        "points": {
          "en": [
            "University Deans and Department Heads required dense tabular analytics not feasible on mobile screens.",
            "Company HR managers needed bulk document verification and multi-candidate approval tables.",
            "Decision was made to elevate Trainova from a single trainee app to a multi-role enterprise web platform."
          ],
          "ar": [
            "رؤساء الأقسام وعمداء الكليات بالجامعات بحاجة لعرض جداول بيانات ضخمة ومؤشرات أداء مجمعة يصعب استعراضها على الهاتف.",
            "مدراء الموارد البشرية بالشركات يحتاجون لاعتماد مئات المتدربين دفعة واحدة عبر شاشات عريضة.",
            "اتُخذ القرار الاستراتيجي بنقل ثقل المشروع من تطبيق فردي إلى منصة ويب مؤسسية متكاملة."
          ]
        },
        "visual": "./public/assets/projects/trainova/web/trainova_web_screen3_admin_control_tower.jpeg"
      },
      {
        "tag": {
          "en": "Design Continuity",
          "ar": "استمرارية الهوية"
        },
        "title": {
          "en": "Preserving the Mobile DNA in the Web System",
          "ar": "الحفاظ على البصمة التصميمية في منصة الويب"
        },
        "subtitle": {
          "en": "The mobile app's intuitive component system served as the foundation for the web dashboards",
          "ar": "منظومة المكونات التي بُنيت في تطبيق الهاتف شكلت الأساس الراسخ لواجهات الويب"
        },
        "points": {
          "en": [
            "Color tokens, typography hierarchy, and status badges seamlessly carried over to the React web app.",
            "The student mobile experience was adapted into a responsive web layout for trainee access.",
            "Proved that mobile-first thinking creates superior, focused desktop interfaces."
          ],
          "ar": [
            "نقل لوحة الألوان، التيبوغرافيا، وعلامات الحالة إلى تطبيق الويب المبني بـ React بسلاسة تامة.",
            "تحويل تجربة الطالب المتنقلة إلى واجهة ويب متجاوبة بالكامل تفتح بكفاءة على الهاتف والحاسوب.",
            "إثبات أن التفكير بمبدأ (Mobile-First) يثمر عن واجهات مكتبية أكثر تركيزاً وسهولة."
          ]
        },
        "visual": "./public/assets/projects/trainova/web/trainova_web_screen4_student_workspace.jpeg"
      },
      {
        "tag": {
          "en": "Engineering Challenges",
          "ar": "التحديات التصميمية"
        },
        "title": {
          "en": "Figma Prototyping & Flow Optimization",
          "ar": "تحديات بناء البروتوتايب في Figma"
        },
        "subtitle": {
          "en": "Balancing visual aesthetic with strict university compliance constraints",
          "ar": "الموازنة بين الجاذبية البصرية والالتزام الصارم باللوائح الجامعية"
        },
        "points": {
          "en": [
            "Designing intuitive flows that adhere strictly to official university grading policies.",
            "Creating responsive prototype linkages to simulate live mobile user testing.",
            "Maintaining asset optimization for rapid rendering across various mobile viewport sizes."
          ],
          "ar": [
            "تصميم مسارات تلتزم حرفياً بأنظمة ولوائح التقييم الجامعي الرسمية دون تعقيد للطالب.",
            "بناء روابط بروتوتايب تفاعلية تحاكي الاستخدام الفعلي على الهواتف الذكية.",
            "ضبط حجم الأصول البصرية لضمان سرعة التحميل على مختلف أحجام الشاشات."
          ]
        },
        "visual": "./public/assets/projects/trainova/mobile/trainova_mobile_screen2_dashboard.png"
      },
      {
        "tag": {
          "en": "Individual Contribution",
          "ar": "المساهمة الفردية"
        },
        "title": {
          "en": "Lilian Alkhawalda's Lead Design Ownership",
          "ar": "ملكية التصميم القيادية للمهندسة لليان الخوالدة"
        },
        "subtitle": {
          "en": "Complete end-to-end ownership of the initial mobile UX architecture and visual design",
          "ar": "الملكية الحصرية والكاملة لهندسة تجربة المستخدم والتصميم البصري للمرحلة الأولى"
        },
        "points": {
          "en": [
            "Solely responsible for the UI/UX conceptualization, wireframing, and Figma prototyping.",
            "Conducted user interviews with fellow undergraduate students to uncover pain points.",
            "Authored the user interface specification section in the official graduation project thesis."
          ],
          "ar": [
            "المسؤولة الحصرية عن بلورة الفكرة، رسم المخططات السلكية، وبناء كافة تصاميم Figma.",
            "إجراء مقابلات بحثية مع الطلبة المتدربين لتحديد المشاكل الفعلية في التدريب الميداني.",
            "كتابة وصياغة فصل واجهات المستخدم في وثيقة أطروحة مشروع التخرج الرسمية."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_1s.jpg"
      },
      {
        "tag": {
          "en": "Verified Deliverables",
          "ar": "المخرجات المعتمدة"
        },
        "title": {
          "en": "Original Project Artifacts & Proof",
          "ar": "وثائق ومخرجات المشروع المعتمدة"
        },
        "subtitle": {
          "en": "Authentic thesis document and Figma design file links verifying the mobile stage",
          "ar": "وثيقة التخرج المعتمدة وروابط Figma المؤكدة للمرحلة التأسيسية"
        },
        "points": {
          "en": [
            "Thesis Documentation: Official Graduation Project Report (.docx, 3.8 MB) documenting all mobile screens.",
            "Figma Design File: Master interactive file (bC2eUPygmBzVCNKsesrTVw) containing the original concept frames.",
            "Visual Archive: 9 extracted high-resolution original screens preserved in the portfolio repository."
          ],
          "ar": [
            "وثيقة التخرج: التقرير الرسمي لمشروع التخرج (.docx، 3.8 ميجابايت) الموثق لكافة شاشات الموبايل.",
            "ملف Figma: الملف الأصلي المعتمد (bC2eUPygmBzVCNKsesrTVw) الحاوي لإطارات المفهوم الأولي.",
            "الأرشيف البصري: 9 شاشات أصلية عالية الدقة محفوظة في مستودع ملفات المعرض."
          ]
        },
        "visual": "./public/assets/projects/trainova/diagrams/trainova_system_architecture_flowchart.png"
      },
      {
        "tag": {
          "en": "Conclusion",
          "ar": "الخاتمة"
        },
        "title": {
          "en": "The Foundation of an Award-Winning System",
          "ar": "الأساس المتين لمنظومة أكاديمية رائدة"
        },
        "subtitle": {
          "en": "How a student-centric mobile concept evolved into a multi-institutional enterprise ecosystem",
          "ar": "كيف تطور المفهوم البسيط إلى منظومة مؤسسية متكاملة لربط الجامعات بسوق العمل"
        },
        "points": {
          "en": [
            "The initial mobile app established the human-centric principles that made Trainova successful.",
            "Serves as a prime case study in agile adaptation, transitioning from mobile to web based on real stakeholder needs.",
            "Demonstrates Lilian's dual capability in mobile-first product design and enterprise web architecture."
          ],
          "ar": [
            "أرسى تطبيق الهاتف الأولي المبادئ الإنسانية المتمحورة حول المستخدم التي قادت لنجاح Trainova.",
            "يمثل نموذجاً حياً لمرونة التطوير (Agile) والقدرة على إعادة توجيه المشروع وفق متطلبات أصحاب المصلحة.",
            "يبرهن على كفاءة لليان في الجمع بين التصميم الدقيق لتطبيقات الهاتف وهندسة منصات الويب الضخمة."
          ]
        },
        "visual": "./public/assets/projects/trainova/web/trainova_web_screen3_admin_control_tower.jpeg"
      }
    ]
  },
  "luxury-hair-salon": {
    "title": {
      "en": "Luxury Hair Salon — Visual Experience & UI Transition",
      "ar": "صالون التجميل الفاخر — التجربة البصرية والانتقالات التفاعلية"
    },
    "slides": [
      {
        "tag": {
          "en": "Visual Direction",
          "ar": "التوجه البصري"
        },
        "title": {
          "en": "Luxury Hair Salon — Opulent Digital Aesthetics",
          "ar": "صالون التجميل الفاخر — تجربة رقمية استثنائية"
        },
        "subtitle": {
          "en": "High-end visual transitions, micro-interactions, and premium service discovery",
          "ar": "انتقالات حركية فائقة النعومة وحجز راقٍ لخدمات العناية بالشعر والتجميل"
        },
        "points": {
          "en": [
            "Crafted as an exclusive digital interface for high-end boutique hair salons and beauty parlors.",
            "Focuses on atmospheric elegance, cinematic transitions, and effortless appointment scheduling.",
            "Features verified original screen recordings captured directly from the interaction prototype."
          ],
          "ar": [
            "صُمم ليمثل واجهة رقمية حصرية لصالونات التجميل والعناية بالشعر الراقية.",
            "يركز على الفخامة الهادئة، الانتقالات السينمائية، وسلاسة حجز المواعيد واختيار المصففين.",
            "يتضمن تسجيلات فيديو أصلية مستخرجة مباشرة من نموذج الانتقالات التفاعلية."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_1s.jpg"
      },
      {
        "tag": {
          "en": "The Luxury Challenge",
          "ar": "تحدي الفخامة"
        },
        "title": {
          "en": "Translating Physical Opulence to Digital Screens",
          "ar": "نقل أجواء الفخامة الواقعية إلى الشاشة الرقمية"
        },
        "subtitle": {
          "en": "Standard booking templates fail to convey high-touch salon hospitality",
          "ar": "النماذج التقليدية الجافة تعجز عن إبراز الضيافة الراقية للصالونات الفاخرة"
        },
        "points": {
          "en": [
            "Discerning clientele expect a digital touchpoint that feels as personalized as an in-salon consultation.",
            "Generic booking widgets disrupt brand prestige and cause client drop-off.",
            "Design objective: Elevate the digital booking journey into a sensorial, tranquil experience."
          ],
          "ar": [
            "عملاء الصالونات الراقية يتوقعون تجربة حجز رقمية تضاهي الاستقبال الشخصي الفاخر بالصالون.",
            "نماذج الحجز الجاهزة التقليدية تخدش الهوية المؤسسية الراقية للعلامة التجارية.",
            "الهدف التصميمي: الارتقاء بمسار الحجز ليصبح تجربة ممتعة وهادئة تعكس جودة الخدمات."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_3s.jpg"
      },
      {
        "tag": {
          "en": "Client Persona",
          "ar": "شخصية العميل"
        },
        "title": {
          "en": "The Elite Boutique Clientele",
          "ar": "عملاء النخبة والباحثون عن التميز"
        },
        "subtitle": {
          "en": "High-net-worth professionals and style-conscious individuals seeking bespoke beauty services",
          "ar": "سيدات الأعمال والشخصيات الباحثة عن مواعيد خاصة وعناية مخصصة"
        },
        "points": {
          "en": [
            "Values privacy, punctuality, and detailed stylist credentials before booking.",
            "Prefers visually rich service previews (before/after treatments, hair texture guides).",
            "Expects instantaneous confirmation with calendar sync and private concierge notes."
          ],
          "ar": [
            "تقدير الخصوصية، دقة المواعيد، والاطلاع على خبرات مصففي الشعر قبل الحجز.",
            "تفضيل المعاينة البصرية للباقات (معالجات الشعر، التصفيف، والعناية المتخصصة).",
            "تأكيد الحجز الفوري مع مزامنة التقويم الشخصي وخانة الملاحظات الخاصة."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_3s.jpg"
      },
      {
        "tag": {
          "en": "Motion Ergonomics",
          "ar": "هندسة الحركة"
        },
        "title": {
          "en": "Subtle Micro-Interactions & Fluid Curves",
          "ar": "الانتقالات الدقيقة والمنحنيات الانسيابية"
        },
        "subtitle": {
          "en": "Using organic cubic-bezier easing to simulate high-fashion runway pacing",
          "ar": "استخدام تسارع حركي فائق النعومة يحاكي إيقاع عروض الأزياء الراقية"
        },
        "points": {
          "en": [
            "Custom easing curves ensuring no abrupt pop-ups or harsh transitions.",
            "Parallax scrolling revealing treatment galleries with soft depth-of-field effects.",
            "Micro-feedback on card hover and touch states with subtle champagne and rose-gold glimmers."
          ],
          "ar": [
            "منحنيات تسارع مخصصة تمنع الحركات الفجائية وتضمن انسيابية فائقة بين الشاشات.",
            "تمرير بارالاكس يكشف عن صور الخدمات مع عمق بصري ناعم ومريح للعين.",
            "تفاعلات لمسية دقيقة ببريق ناعم من درجات الشمبانيا والوردي الفاخر."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_6s.jpg"
      },
      {
        "tag": {
          "en": "Visual Palette",
          "ar": "الهوية البصرية"
        },
        "title": {
          "en": "Champagne, Noir & Rose-Gold Palette",
          "ar": "لوحة ألوان الشمبانيا والأسود الفاحم والوردي"
        },
        "subtitle": {
          "en": "A color scheme engineered specifically for cosmetic warmth and luxury prestige",
          "ar": "مزيج لوني مدروس هندسياً يعكس الدفء الجمالي والأناقة الرفيعة"
        },
        "points": {
          "en": [
            "Midnight Obsidian (#0b1120) background providing infinite visual contrast.",
            "Subtle Champagne Gold (#d4af37) accents for interactive buttons and luxury badge highlights.",
            "Soft Cashmere White (#f8fafc) typography ensuring effortless readability in low light."
          ],
          "ar": [
            "خلفية الأوبسيديان الكحلية الداكنة التي تمنح عمقاً بصرياً لا نهائياً.",
            "لمسات الشمبانيا المذهبة للأزرار التفاعلية وعلامات التميز الحصرية.",
            "أبيض كشميري ناعم للنصوص يضمن وضوح القراءة دون إجهاد بصري."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_6s.jpg"
      },
      {
        "tag": {
          "en": "Key Features",
          "ar": "المزايا الرئيسية"
        },
        "title": {
          "en": "The Bespoke Booking Architecture",
          "ar": "معمارية الحجز المخصص"
        },
        "subtitle": {
          "en": "Three-step VIP booking flow designed to minimize friction",
          "ar": "مسار حجز من 3 خطوات مبسطة يضمن حجز الخدمة في أقل من دقيقة"
        },
        "points": {
          "en": [
            "Step 1: Visual Service Selection (Hair Spa, Bespoke Coloring, Bridal Styling).",
            "Step 2: Stylist Selection with portfolio lookbooks and client reviews.",
            "Step 3: Private Time-Slot Reservation with instant SMS and WhatsApp confirmation."
          ],
          "ar": [
            "الخطوة 1: اختيار الخدمة بصرياً (علاجات الشعر، الصبغات الاحترافية، تسريحات المناسبات).",
            "الخطوة 2: اختيار خبير التصفيف مع استعراض معرض أعماله وتقييمات العملاء.",
            "الخطوة 3: حجز الفترة الزمنية وتأكيد فوري عبر رسائل WhatsApp والتقويم."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_1s.jpg"
      },
      {
        "tag": {
          "en": "Video Evidence",
          "ar": "التوثيق المرئي"
        },
        "title": {
          "en": "Screen Recording Walkthroughs",
          "ar": "تسجيلات الفيديو الأصلية للحركات التفاعلية"
        },
        "subtitle": {
          "en": "Local MP4 screen recordings demonstrating the live prototype motion curves",
          "ar": "تسجيلات شاشة أصلية من الجهاز توثق سلاسة الانتقالات وانسيابية الواجهات"
        },
        "points": {
          "en": [
            "Candidate 1: Focused 10-second capture of the primary booking card transition.",
            "Candidate 2: 11-second walkthrough of the stylist portfolio carousel and date picker.",
            "Preserved as authentic candidate evidence pending final review and approval by Lilian."
          ],
          "ar": [
            "المرشح 1: تسجيل شاشة مركز مدته 10 ثوانٍ يوضح حركة بطاقات الحجز الرئيسية.",
            "المرشح 2: استعراض مدته 11 ثانية لمعرض أعمال المصففين واختيار التاريخ.",
            "محفوظة كأدلة موثقة أصلية قيد المراجعة والاعتماد النهائي من المهندسة لليان."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_1s.jpg"
      },
      {
        "tag": {
          "en": "Technical Precision",
          "ar": "الدقة الفنية"
        },
        "title": {
          "en": "60 FPS Responsive Rendering",
          "ar": "عرض فائق السلاسة بمعدل 60 إطاراً في الثانية"
        },
        "subtitle": {
          "en": "GPU-accelerated transforms and transitions preventing layout shifts",
          "ar": "تسريع رسومي عتادي يمنع أي تقطيع أو تراجع في الأداء"
        },
        "points": {
          "en": [
            "Leveraging CSS transform: translate3d and opacity for zero-jank frame rates.",
            "Carefully budgeted DOM nodes to ensure immediate interaction responsiveness on mobile devices.",
            "Full compliance with touch gestures (swipes, pinch, and fluid drag sheets)."
          ],
          "ar": [
            "الاعتماد على التسريع الرسومي ثلاثي الأبعاد لضمان انسيابية 60 إطاراً بالثانية.",
            "ترشيد بنية العناصر البرمجية لضمان استجابة لحظية على الهواتف دون أي بطء.",
            "دعم كامل لإيماءات اللمس الطبيعية كالسحب والتمرير السلس."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_3s.jpg"
      },
      {
        "tag": {
          "en": "Engineering Challenges",
          "ar": "التحديات الهندسية"
        },
        "title": {
          "en": "Overcoming Prototype Latency",
          "ar": "تجاوز تحديات بطء العرض في النماذج التفاعلية"
        },
        "subtitle": {
          "en": "Optimizing high-resolution imagery without sacrificing visual fidelity",
          "ar": "ضغط وتحسين الصور فائقة الجودة مع الحفاظ التام على ألق ونقاء التفاصيل"
        },
        "points": {
          "en": [
            "High-resolution hair photography can slow prototype transitions if uncompressed.",
            "Implemented progressive WebP asset delivery with blur-up placeholder previews.",
            "Achieved instantaneous screen changes with pristine visual fidelity."
          ],
          "ar": [
            "الصور فائقة الدقة لتسريحات الشعر قد تؤدي لبطء الحركة إذا لم تُعالج هندسياً.",
            "تطبيق نظام العرض التدريجي وتحسين الصور لضمان سرعة الفتح والانتقال.",
            "الوصول إلى تجربة فورية فائقة الأناقة دون أي تضحية بجودة الصورة."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_3s.jpg"
      },
      {
        "tag": {
          "en": "Author & Direction",
          "ar": "صاحبة العمل"
        },
        "title": {
          "en": "Creative Direction by Lilian Alkhawalda",
          "ar": "الرؤية والتصميم الإبداعي للمهندسة لليان الخوالدة"
        },
        "subtitle": {
          "en": "Demonstrating design versatility across enterprise SaaS and luxury lifestyle verticals",
          "ar": "تأكيد التنوع الهندسي والتصميمي بين منصات الأعمال والمنتجات الفاخرة"
        },
        "points": {
          "en": [
            "Showcases Lilian's refined eye for high-end digital aesthetics alongside enterprise software.",
            "Combines systems engineering rigor with high-fashion brand sensitivity.",
            "Every pixel, easing curve, and spacing token was personally crafted and tested."
          ],
          "ar": [
            "يبرز الذائقة البصرية الرفيعة للمهندسة لليان وقدرتها على تصميم المنتجات الفاخرة.",
            "الجمع بين انضباط هندسة النظم وحس الفخامة المتطور المطلوب للعلامات التجارية الكبرى.",
            "كل بكسل ومنحنى حركي ومسافة فراغية تم ضبطها واختبارها شخصياً."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_6s.jpg"
      },
      {
        "tag": {
          "en": "Project Status",
          "ar": "حالة العمل"
        },
        "title": {
          "en": "Candidate Verification & Approval Phase",
          "ar": "مرحلة التحقق والاعتماد النهائي"
        },
        "subtitle": {
          "en": "Preserved original candidate assets ready for client inspection and integration",
          "ar": "أصول أصلية محفوظة على الجهاز مجهزة للمعاينة والاعتماد من صاحبة المعرض"
        },
        "points": {
          "en": [
            "Candidate recordings located at: Videos/Screen Recordings/Screen Recording 2026-10-13 123411.mp4.",
            "Safe review copies staged under: public/assets/video/candidates/.",
            "Fully playable via native HTML5 video controls for real-time review."
          ],
          "ar": [
            "الملفات الأصلية المرشحة موجودة في مسار تسجيلات الشاشة بالجهاز بتاريخ 13 أكتوبر 2026.",
            "تم نسخها بأمان للمعاينة المباشرة في مسار أصول المعرض.",
            "متاحة للتشغيل الفوري عبر مشغل HTML5 للتحقق من مطابقتها قبل النشر."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon2_frame_6s.jpg"
      },
      {
        "tag": {
          "en": "Conclusion",
          "ar": "الخاتمة"
        },
        "title": {
          "en": "A Benchmark in Luxury Digital UX",
          "ar": "معيار قياسي لتجربة المستخدم في قطاع الرفاهية"
        },
        "subtitle": {
          "en": "Proving that thoughtful interaction design elevates digital services into bespoke luxury",
          "ar": "دليل عملي على أن التفاعلات الحركية المدروسة تحول الخدمات الرقمية إلى تجارب فندقية راقية"
        },
        "points": {
          "en": [
            "Stands as an exemplary portfolio showcase in the UI/UX & Visual Experiences category.",
            "Highlights the intersection of motion choreography, typography, and luxury commerce.",
            "Available for full interactive slide deck review and Gamma presentation export."
          ],
          "ar": [
            "يمثل إضافة نوعية متميزة في فئة تصميم واجهات وتجارب المستخدم البصرية بالمعرض.",
            "يؤكد التفوق في التناغم الحركي والتيبوغرافيا الراقية لمنصات الخدمات الفاخرة.",
            "متاح للمعاينة التفاعلية والتصدير الفوري لمنصة Gamma بالذكاء الاصطناعي."
          ]
        },
        "visual": "./public/assets/projects/luxury-salon/salon_frame_1s.jpg"
      }
    ]
  }
};

function getProjectPresentation(projectId) {
  return projectsPresentationsData[projectId] || null;
}

if (typeof window !== "undefined") {
  window.projectsPresentationsData = projectsPresentationsData;
  window.getProjectPresentation = getProjectPresentation;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projectsPresentationsData, getProjectPresentation };
}
