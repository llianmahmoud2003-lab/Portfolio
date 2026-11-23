# دليل إدارة وإضافة المشاريع الجديدة لمعرض أعمال LILIAN ALKHAWALDA
# Permanent Project Management Guide

أهلاً بكِ مهندسة ليليان. صُمم هذا الموقع بمعمارية برمجية مفصولة ومنظمة بالكامل (Decoupled Data Architecture)، بحيث تكون **بيانات المشاريع مفصولة تماماً عن كود التصميم وواجهات الصفحات**.

هذا يعني أنه عند إنجازكِ لأي مشروع مستقبلي جديد، **لن تحتاجي نهائياً لإعادة بناء الموقع أو تعديل أكواد HTML أو CSS المعقدة**؛ بل يكفي إضافة بيانات المشروع في ملف واحد، وسيظهر تلقائياً في:
1. الصفحة الرئيسية (`index.html`).
2. صفحة المشاريع الكاملة (`projects.html`).
3. شريط فلاتر التصنيفات حسب مجاله.
4. نافذة تفاصيل المشروع المتكيفة (Modal Case Study) بكامل ميزاته وصوره وفيديوهاته ومخرجاته.

---

## الخطوات الثلاث البسيطة لإضافة أي مشروع جديد:

### الخطوة 1: تجهيز مجلد ملفات المشروع (Media & Assets)
داخل مجلد المشروع في الموقع:  
`public/assets/projects/`  
قومي بإنشاء مجلد جديد باسم المشروع (مثال: `ai-supply-chain`):
```text
public/assets/projects/ai-supply-chain/
├── cover.png                <-- صورة غلاف البطاقة (نسبة 16:9 بدقة 1024×571)
├── screen1.png              <-- لقطات شاشة الواجهة أو المعمارية
├── screen2.png
└── docs/                    <-- (اختياري) نماذج إكسل أو ملفات PDF للتحميل
    └── Project_Report.pdf
```

---

### الخطوة 2: إضافة كائن المشروع إلى `src/data/projectsData.js`
افتحي الملف:  
`src/data/projectsData.js`  
وقومي بإضافة كائن المشروع الجديد داخل مصفوفة `projectsData = [ ... ]` مستخدمةً القالب القياسي التالي:

```javascript
  {
    "id": "ai-supply-chain",
    "logo": "./public/assets/projects/ai-supply-chain/logo.png",
    "slug": "ai-supply-chain-optimization",
    "title": {
      "en": "Autonomous Supply Chain Optimization & Telemetry Engine",
      "ar": "منظومة تحسين سلاسل الإمداد المؤسسية وقمرة القياس الذكية"
    },
    "category": {
      "en": "Artificial Intelligence",
      "ar": "الذكاء الاصطناعي"
    },
    "categories": [
      "ai", "bi"
    ],
    "heroFeatured": false, // اجعليه true إذا أردتِ ظهوره كمعلم رئيسي في أعلى الصفحة
    "thumbnail": "./public/assets/projects/ai-supply-chain/cover.png",
    "gallery": [
      "./public/assets/projects/ai-supply-chain/screen1.png",
      "./public/assets/projects/ai-supply-chain/screen2.png"
    ],
    "status": {
      "en": "Production Ready",
      "ar": "جاهز للإنتاج"
    },
    "projectType": {
      "en": "Enterprise Platform",
      "ar": "نظام مؤسسي متقدم"
    },
    "completionDate": {
      "en": "December 2026",
      "ar": "ديسمبر 2026"
    },
    "role": {
      "en": "Chief Systems Architect & Lead Engineer",
      "ar": "كبير مهندسي النظم والمطور الرئيسي"
    },
    "shortDescription": {
      "en": "High-throughput predictive logistics telemetry engine reducing inventory holding costs by 22% using autonomous reinforcement agents.",
      "ar": "محرك تحليلي تنبؤي متقدم لإدارة الخدمات اللوجستية يخفض تكاليف التخزين بنسبة 22% عبر وكلاء الذكاء الاصطناعي المستقلين."
    },
    "fullDescription": {
      "en": "Detailed engineering breakdown of the microservices topology, database sharding, and real-time Kafka event streams.",
      "ar": "شرح معماري تفصيلي يوضح تكامل خدمات النظم وقواعد البيانات الموزعة وتدفق الأحداث الفوري لدعم اتخاذ القرار المؤسسي."
    },
    "problem": {
      "en": "Logistics managers lacked unified visibility over warehouse nodes, causing shipment bottlenecks and inventory obsolescence.",
      "ar": "افتقار الإدارات اللوجستية للرؤية اللحظية لحركة المستودعات، مما تسبب في اختناقات سلاسل التوريد وهدر التخزين."
    },
    "solution": {
      "en": "Engineered an event-driven telemetry dashboard with autonomous stock replenishment algorithms and automated alerting.",
      "ar": "تطوير لوحة قياس تشغيلية معتمدة على تدفق الأحداث مع خوارزميات التغذية الآلية والتنبيهات الاستباقية."
    },
    "technologies": [
      "Python", "FastAPI", "React", "PostgreSQL", "Docker", "Autonomous Agents"
    ],
    "metrics": [
      {
        "value": "-22%",
        "label": {
          "en": "Inventory Cost Reduction",
          "ar": "خفض تكاليف التخزين"
        }
      },
      {
        "value": "99.9%",
        "label": {
          "en": "Pipeline Availability",
          "ar": "جاهزية واستقرار النظام"
        }
      }
    ],
    "deliverables": {
      "en": [
        "Distributed Microservices Architecture",
        "Predictive Demand Forecasting Pipeline",
        "Interactive Executive Operations Cockpit"
      ],
      "ar": [
        "معمارية الخدمات المصغرة الموزعة",
        "نموذج التنبؤ التلقائي بمعدلات الطلب",
        "قمرة قيادة العمليات اللوجستية التفاعلية"
      ]
    },
    "documents": [
      {
        "title": {
          "en": "Technical Architecture Whitepaper (PDF)",
          "ar": "التقرير المعماري والهندسي للمشروع (PDF)"
        },
        "fileName": "Supply_Chain_Architecture_Report.pdf",
        "fileType": "pdf",
        "size": "1.2 MB",
        "path": "./public/assets/projects/ai-supply-chain/docs/Supply_Chain_Architecture_Report.pdf"
      }
    ],
    "links": {
      "demo": "https://example.com/demo",  // أو null إذا لم يكن هناك رابط عام
      "github": "https://github.com/llianmahmoud2003-lab/supply-chain-engine", // أو null
      "figma": null,
      "caseStudy": true
    }
  }
```

---

### الخطوة 3: الحفظ والنشر
بمجرد حفظكِ لملف `src/data/projectsData.js`:
- الموقع سيقرأ المشروع الجديد فوراً.
- سيظهر كرت المشروع تلقائياً في الصفحة الرئيسية وصفحة المشاريع.
- النقر على "عرض تفاصيل المشروع" سيفتح نافذة العرض المتكاملة الخاصة به دون كتابة سطر HTML واحد!
- عند تنفيذ `git commit` و `git push`، سيقوم Vercel ببنائه وتحديثه على الإنترنت خلال 30 ثانية.

---

## تصنيفات المشاريع المعتمدة (`categories`):
يمكنكِ ربط المشروع بواحد أو أكثر من التصنيفات التالية ليظهر عند نقر الزائر على الفلاتر:
- `"ai"`: مشاريع الذكاء الاصطناعي وهندسة النظم الذكية (Artificial Intelligence & AI Cockpits).
- `"bi"`: حلول ذكاء الأعمال والتحليلات الكمية والمالية (Business Intelligence & Analytics).
- `"web"`: تطبيقات ومنصات الويب المؤسسية (Web Applications).
- `"mobile"`: تطبيقات الهاتف الذكي (Mobile Applications - Flutter).
- `"academic"`: الأنظمة الأكاديمية والإدارية (Academic & Administrative Systems).
- `"network"`: البنية التحتية والشبكات (Cisco Network Infrastructure).

---

## معايير الصور والأغلفة الموصى بها:
1. **نسبة أبعاد الغلاف:** `16 : 9` (مثال: `1024 × 571` بكسل أو `1280 × 720` بكسل).
2. **نوع الملف:** `.png` أو `.jpg` بدقة عالية دون ضغط مشوه.
3. **منطقة الأمان (Safe Margin):** احرصي على أن تكون النصوص في الثلثين الداخليين من الصورة لتظهر ممتازة على شاشات الهواتف دون اقتطاع.

بهذا النظام، يظل موقعكِ قابلاً للنمو والتطوير لعشرات المشاريع القادمة بكل سلاسة واحترافية.
