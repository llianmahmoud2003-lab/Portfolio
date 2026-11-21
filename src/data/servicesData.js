// src/data/servicesData.js - Professional Services & Real Deliverable Files Package (Bilingual)
const servicesData = [
  {
    id: "service-software",
    title: {
      en: "Full-Stack Software & Web Systems Engineering",
      ar: "هندسة الأنظمة البرمجية وتطبيقات الويب المتكاملة"
    },
    description: {
      en: "End-to-end architecture and implementation of responsive, secure web platforms using modern React 19, Next.js 15, Node.js, and relational database systems.",
      ar: "تصميم وتنفيذ متكامل لمنصات الويب الآمنة وعالية الاستجابة باستخدام أحدث تقنيات React 19 و Next.js 15 و Node.js وقواعد البيانات العلائقية."
    },
    deliverables: {
      en: ["Custom Web Applications", "RESTful API Architecture", "Database Modeling & Migration", "Automated Vitest Test Suites"],
      ar: ["تطبيقات ويب مخصصة للمؤسسات", "بناء وتأمين واجهات برمجة التطبيقات REST", "نمذجة وترقية قواعد البيانات", "حزم اختبارات مؤتمتة بنظام Vitest"]
    },
    icon: "code"
  },
  {
    id: "service-ai",
    title: {
      en: "AI Integration, Autonomous Agents & MCP Tooling",
      ar: "دمج الذكاء الاصطناعي وبناء الوكلاء المستقلين وأدوات MCP"
    },
    description: {
      en: "Connecting enterprise workflows to frontier AI models using Model Context Protocol (MCP), structured reasoning loops, function calling, and Google Gemini / Anthropic APIs.",
      ar: "ربط مسارات عمل المؤسسات بنماذج الذكاء الاصطناعي الرائدة عبر بروتوكول MCP، وحلقات الاستدلال المنطقي، واستدعاء الدوال، وواجهات برمجة Anthropic و Google Gemini."
    },
    deliverables: {
      en: ["Custom MCP Server Development", "AI-Powered Decision Pipelines", "RAG & Document Intelligence", "Agentic Coding Workflows"],
      ar: ["تطوير خوادم MCP المخصصة", "مسارات اتخاذ القرارات الذكية المؤتمتة", "أنظمة استرجاع المعلومات RAG من الوثائق", "أتمتة مسارات البرمجة الذكية"]
    },
    icon: "ai"
  },
  {
    id: "service-bi",
    title: {
      en: "Quantitative Business Intelligence & Margin Analytics",
      ar: "ذكاء الأعمال الكمي وتحليل هوامش الربحية"
    },
    description: {
      en: "Transforming dense transactional data into actionable executive insights, diagnosing discount cliff degradation, and structuring real-time management dashboards.",
      ar: "تحويل سجلات المبيعات الضخمة إلى رؤى تنفيذية حاسمة، وتشخيص تآكل هوامش الأرباح بفعل الخصومات، وبناء لوحات بيانات فورية للإدارة العليا."
    },
    deliverables: {
      en: ["Interactive Executive Dashboards", "Discount Cliff Diagnostic Models", "Product Profitability Scoring", "Commercial Trend Telemetry"],
      ar: ["لوحات تحكم تنفيذية تفاعلية", "نماذج تشخيص حافة الخصم وحماية الأرباح", "تقييم ربحية الفئات والمنتجات", "مؤشرات التنبؤ بحركة المبيعات"]
    },
    icon: "data"
  },
  {
    id: "service-advisory",
    title: {
      en: "Corporate Feasibility Studies & Financial Modeling",
      ar: "دراسات الجدوى الاقتصادية والنمذجة المالية للمشاريع"
    },
    description: {
      en: "Structuring formulated investment appraisals, evaluating capital expenditure (CapEx), Net Present Value (NPV), and Internal Rate of Return (IRR) for capital-intensive ventures.",
      ar: "إعداد دراسات الجدوى الاستثمارية بالمعادلات المالية الدقيقة، وتقييم الإنفاق الرأسمالي (CapEx)، وصافي القيمة الحالية (NPV)، ومعدل العائد الداخلي (IRR)."
    },
    deliverables: {
      en: ["Formulated Financial Models (.xlsx)", "CapEx & Working Capital Schedules", "Discounted Cash Flow Appraisals", "Strategic Board Decks (.pptx)"],
      ar: ["نماذج مالية مؤتمتة بالمعادلات (.xlsx)", "جداول الإنفاق الرأسمالي ورأس المال العامل", "تقييم التدفقات النقدية المخصومة", "عروض تقديمية استراتيجية لمجلس الإدارة"]
    },
    icon: "business"
  }
];

const clientDeliverablePack = {
  title: {
    en: "Professional Deliverable Sample Package",
    ar: "حزمة النماذج والمخرجات التنفيذية للعملاء"
  },
  subtitle: {
    en: "Real, verified client report files prepared across Excel, Word, PowerPoint, and PDF demonstrating multidisciplinary business delivery capabilities.",
    ar: "ملفات مخرجات حقيقية ومعتمدة تشمل إكسل، وورد، باوربوينت، وPDF تُبرز القدرة المتكاملة على تسليم أعمال احترافية متقنة."
  },
  items: [
    {
      format: "Excel",
      badge: ".xlsx",
      title: {
        en: "Business Performance & Dynamic KPI Tracker",
        ar: "نموذج متابعة الأداء المؤسسي وهوامش الربحية"
      },
      description: {
        en: "Formulaic, multi-sheet workbook tracking branch revenues, cost allocations, gross margins, and automated KPIs.",
        ar: "مصنف مالي متعدد أوراق العمل يربط الإيرادات والتكاليف وهوامش الأرباح الإجمالية بالمعادلات المؤتمتة."
      },
      filename: "Business_Performance_Tracker.xlsx",
      downloadUrl: "./public/assets/downloads/Business_Performance_Tracker.xlsx",
      size: "17.8 KB"
    },
    {
      format: "Word",
      badge: ".docx",
      title: {
        en: "Executive Daily Business Intelligence Memorandum",
        ar: "المذكرة الإدارية اليومية لذكاء الأعمال"
      },
      description: {
        en: "Structured executive brief detailing operational anomalies, discount exposure thresholds, and tactical mitigation directives.",
        ar: "تقرير تنفيذي يحلل انحرافات الأداء التشغيلي، ومخاطر الخصومات، والسياسات التوجيهية للإدارة العليا."
      },
      filename: "Daily_Business_Report.docx",
      downloadUrl: "./public/assets/downloads/Daily_Business_Report.docx",
      size: "11.1 KB"
    },
    {
      format: "PowerPoint",
      badge: ".pptx",
      title: {
        en: "Executive Strategic Presentation Deck",
        ar: "العرض التقديمي الاستراتيجي لمجلس الإدارة"
      },
      description: {
        en: "High-impact slide presentation synthesizing performance dashboards, quarterly projections, and board-level initiatives.",
        ar: "عرض شرائح استراتيجي رفيع المستوى يوضح مسار التحول الرقمي، والمؤشرات الفصلية، ومبادرات النمو."
      },
      filename: "Business_Performance_Presentation.pptx",
      downloadUrl: "./public/assets/downloads/Business_Performance_Presentation.pptx",
      size: "206.9 KB"
    },
    {
      format: "PDF",
      badge: ".pdf",
      title: {
        en: "Comprehensive Client Deliverable Package Preview",
        ar: "وثيقة التحول الرقمي والمخرجات الموحدة"
      },
      description: {
        en: "Polished executive PDF case study report presenting analytical methodology, visualizations, and strategic conclusions.",
        ar: "تقرير موحد مجهز للطباعة يجمع المخططات الهندسية، والتحليلات البيانية، والخلاصات الاستراتيجية المعتمدة."
      },
      filename: "Client_Reporting_Package_Preview.pdf",
      downloadUrl: "./public/assets/downloads/Client_Reporting_Package_Preview.pdf",
      size: "177.1 KB"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.servicesData = servicesData;
  window.clientDeliverablePack = clientDeliverablePack;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { servicesData, clientDeliverablePack };
}
