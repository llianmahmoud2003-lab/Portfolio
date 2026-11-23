# دليل إدارة وتطوير معرض أعمال لليان الخوالدة
# LILIAN ALKHAWALDA — Comprehensive Project Management & Systems Guide

أهلاً بكِ. تم تصميم وتطوير هذا الموقع بمعمارية برمجية مفصولة ومنظمة بالكامل (**Decoupled Data Architecture**)، بحيث تكون **بيانات المشاريع مفصولة تماماً عن كود التصميم وواجهات الصفحات**.

هذا يعني أنه عند إنجازكِ لأي مشروع مستقبلي جديد، **لن تحتاجي نهائياً لإعادة بناء الموقع أو تعديل أكواد HTML أو CSS المعقدة**؛ بل يكفي إضافة بيانات المشروع في ملف مركزي واحد، وسيظهر تلقائياً في:
1. الصفحة الرئيسية (`index.html`).
2. صفحة المشاريع الشاملة (`projects.html`).
3. شريط فلاتر التصنيفات التفاعلية.
4. نافذة تفاصيل المشروع المتكيفة (**Modal Case Study**) بكامل ميزاته وصوره وفيديوهاته ومخرجاته القابلة للتنزيل.

---

## المشاريع الـ 11 المعتمدة الحالية (The 11 Audited Projects Inventory):

1. **LILIANOURA (المشروع الرائد الأول - Premier Flagship #1):**
   - منصة ذكاء القرار المتكاملة، المعمارية الهندسية، ولوحة تحكم الذكاء الاصطناعي.
   - غلاف 16:9 بنسبة عرض دقيقة وخلفية `#0A0D14` مع تقنية `object-fit: contain`.

2. **Trainova Capstone (المنظومة الموحدة للمشروع الجامعي):**
   - النظام التعليمي الموحد لإدارة التدريب الميداني والتقييم الثلاثي.
   - يدمج منصة الويب (PHP/MySQL) مع واجهات تطبيق الموبايل ودراسة التخرج الكاملة (411 KB PDF).

3. **Figma Works & Design Systems (معرض واجهات فيجما):**
   - 51 شاشة تصميم موثقة وأصلية (12 شاشة موبايل Portrait، 30 لوحة ويب Landscape، ولوحة Salon Master 4K Canvas، و 8 لوحات BI).
   - عارض Lightbox تفاعلي يتيح التنقل والتكبير والتحكم بلوحة المفاتيح (Esc / الأسهم).

4. **Retail Sales Intelligence & Corporate BI:**
   - لوحات معلومات أداء المبيعات وسلاسل التوريد وتحليلات الربحية.
   - لوحات Power BI ومخططات اتخاذ القرار.

5. **Salon Management System (دراسة حالة متكاملة لنظام إدارة صالون التجميل):**
   - دراسة حالة مستقلة تتضمن فيديو النموذج التفاعلي الحقيقي (`salon_prototype_demo.mp4`).
   - تقرير دراسة شخصيات المستخدمين الحقيقي المعتمد (`salon_persona_report.pdf` - 542 KB).
   - واجهات التصميم الكاملة ولوحة الكانفاس الشاملة بدقة فائقة.

6. **Flutter Mobile Application Architecture:**
   - تطبيق الهاتف المحمول التجاري متعدد المنصات (Cross-Platform Mobile Engineering).

7. **Essential Services Map (خريطة الخدمات الإنسانية الأساسية):**
   - نموذج أولي تفاعلي جغرافي لإدارة وتحديد نقاط الخدمات الإنسانية في غزة (2024–2025).
   - يوثق استجابة نظم المعلومات في أوقات الأزمات وخرائط التوزيع الحيوي.

8. **Student Grades & Academic Performance Tracker:**
   - منظومة الحوسبة الأكاديمية وحساب المعدلات التراكمية ومنحنيات الأداء.

9. **Al-Najma Feasibility & Market Analytics:**
   - دراسة الجدوى الاستثمارية والتحليل المالي لمحطة النجمة للوقود.

10. **Economic Feasibility & CapEx Valuation Engine:**
    - محرك التقييم المالي، التدفقات النقدية المخصومة (DCF)، وفترة الاسترداد ونقطة التعادل.

11. **Enterprise Campus Network Infrastructure:**
    - معمارية الشبكات المؤسسية، التوجيه والتبديل وحزم الأمان عبر Cisco Packet Tracer (6 ملفات `.pkt` متاحة للتنزيل).

---

## قسم الأعمال المرئية والفوتوشوب (Multimedia & Photoshop Artworks):
يحتوي الموقع على قسم خاص للأعمال الفنية والرقمية المنجزة ببرنامج Adobe Photoshop، مع روابط استعراض الشاشات وتحميل ملفات العمل الأصلية المفتوحة المصدر:
1. **لوحة المسجد الأقصى الفنية الرقمية (`al_aqsa_digital_artwork.psd` - 68 MB):**
   - دمج طبقات فوتوشوب متقدمة وإضاءة سينمائية.
2. **التكوين البصري للهوية الشخصية (`lilian_personal_branding_composition.psd` - 11 MB):**
   - بناء التوازن الهندسي والألوان الفاخرة للهوية الاحترافية.

---

## خطوات إضافة مشروع جديد مستقبلياً:

### الخطوة 1: تجهيز مجلد ملفات المشروع (Assets & Media)
داخل مجلد الموقع:  
`public/assets/projects/`  
أنشئي مجلداً جديداً بالاسم البرمجي للمشروع (مثال: `ai-decision-engine`):
```text
public/assets/projects/ai-decision-engine/
├── cover.jpg                 <-- صورة غلاف المشروع (16:9 بدقة 1280×720 على الأقل)
├── screen1.png               <-- واجهات النظام أو لقطات المعمارية
├── screen2.png
├── demo_video.mp4            <-- (اختياري) فيديو استعراض تفاعلي
└── docs/                     <-- (اختياري) ملفات توثيقية أو تقارير PDF
    └── architecture_doc.pdf
```

### الخطوة 2: إضافة كائن المشروع إلى `src/data/projectsData.js`
افتحي الملف:  
`src/data/projectsData.js`  
وأضيفي كائن المشروع الجديد داخل المصفوفة `projectsData`:

```javascript
  {
    id: "ai-decision-engine",
    badge: "AI & DECISION ARCHITECTURE",
    categories: ["ai", "web"],
    title: {
      en: "Enterprise AI Decision Engine",
      ar: "محرك قرارات الذكاء الاصطناعي المؤسسي"
    },
    subtitle: {
      en: "Autonomous telemetry & predictive workflow synthesis",
      ar: "تحليلات البيانات التشغيلية والتوليد التنبؤي لمسارات العمل"
    },
    description: {
      en: "Architected a scalable decision engine leveraging generative AI models and real-time streaming telemetry.",
      ar: "بناء وتصميم محرك قرارات مؤسسي قابل للتوسع يعتمد على نماذج الذكاء الاصطناعي ومعالجة البيانات المتدفقة لحظياً."
    },
    coverImage: "./public/assets/projects/ai-decision-engine/cover.jpg",
    tags: ["Decision Intelligence", "AI Architecture", "FastAPI", "React", "PostgreSQL"],
    metrics: [
      {
        value: "99.4%",
        label: { en: "Telemetry Accuracy", ar: "دقة التحليلات" }
      },
      {
        value: "<120ms",
        label: { en: "Inference Latency", ar: "زمن الاستجابة" }
      }
    ],
    screens: [
      {
        src: "./public/assets/projects/ai-decision-engine/screen1.png",
        orientation: "landscape",
        title: { en: "Operational Control Cockpit", ar: "لوحة التحكم التشغيلية" }
      }
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com/llianmahmoud2003-lab/ai-decision-engine",
      figma: null,
      caseStudy: true
    }
  }
```

---

## دليل تعظيم الاستفادة من Gemini Pro (Phase 13 Guide):

للاستفادة القصوى من قدرات **Gemini Pro** في كتابة وصياغة وتجهيز دراسات الحالة والمشاريع القادمة:

### 1. إعداد برومبت قياسي لتوليد دراسة حالة (Case Study Prompt Template):
```text
بصفتك خبيراً أول في نظم المعلومات وتطوير الحلول الرقمية، أريد منك إعداد دراسة حالة متكاملة لمشروع جديد سأضيفه إلى معرض أعمالي (LILIAN ALKHAWALDA Portfolio).
المشروع هو: [اسم المشروع ومجاله]
التقنيات المستخدمة: [قائمة التقنيات]
أريد المخرجات بصيغة كائن JSON مطابق تماماً لهيكل projectsData.js، متضمناً:
1. badge و title و subtitle باللغتين العربية والإنجليزية بأسلوب احترافي رفيع.
2. description يوضح القيمة التشغيلية والاستثمارية وليس الوصف السطحي.
3. metrics كمية دقيقة قابلة للقياس (مثل زمن الاستجابة، نسبة الدقة، العائد على الاستثمار).
4. challenges: 3 تحديات هندسية مع الحلول المبتكرة المطبقة.
5. deliverables: قائمة واضحة بالمخرجات الهندسية المسلمة للعميل.
```

### 2. معايير الجودة والتدقيق الذاتي (Engineering Rigor):
- **الابتعاد عن العبارات العامة:** استخدام مصطلحات دقيقة مثل `Relational Schema Normalization (3NF)` بدلاً من `Database Design`.
- **التركيز على القيمة الاستثمارية (ROI):** ربط الميزات التقنية بعوائد الأعمال، وتخفيض تكلفة العمليات (OpEx).
- **الاتساق البصري:** التأكد من تطابق نسب الصور (16:9 للأغلفة، و 9:16 للشاشات المحمولة) لضمان عرض خالي من أي تشويه أو اقتصاص.
