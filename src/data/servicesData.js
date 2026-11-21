// servicesData.js - Professional Services & Real Deliverable Files Package
const servicesData = [
  {
    id: "service-software",
    title: "Full-Stack Software & Web Systems Engineering",
    description: "End-to-end architecture and implementation of responsive, secure web platforms using modern React 19, Next.js 15, Node.js, and relational database systems.",
    deliverables: ["Custom Web Applications", "RESTful API Architecture", "Database Modeling & Migration", "Automated Vitest Test Suites"],
    icon: "code"
  },
  {
    id: "service-ai",
    title: "AI Integration, Autonomous Agents & MCP Tooling",
    description: "Connecting enterprise workflows to frontier AI models using Model Context Protocol (MCP), structured reasoning loops, function calling, and Google Gemini / Anthropic APIs.",
    deliverables: ["Custom MCP Server Development", "AI-Powered Decision Pipelines", "RAG & Document Intelligence", "Agentic Coding Workflows"],
    icon: "ai"
  },
  {
    id: "service-analytics",
    title: "Business Intelligence & Data Analytics Dashboards",
    description: "Transforming raw transactional records into actionable executive insights. Diagnosing margin leaks, discount thresholds, and regional sales velocity.",
    deliverables: ["Interactive BI Dashboards (HTML5/JS)", "Exploratory Python/Pandas Analytics", "Executive Summary Reports", "Margin & Profitability Modeling"],
    icon: "data"
  },
  {
    id: "service-financial",
    title: "Corporate Feasibility Studies & Financial Modeling",
    description: "Constructing multi-scenario financial valuation models in Microsoft Excel, calculating Net Present Value (NPV), Internal Rate of Return (IRR), and CapEx sensitivity.",
    deliverables: ["3-Tier Dynamic Excel Models", "CapEx & Cash Flow Forecasting", "Investment Sensitivity Analysis", "Formal PDF Feasibility Reports"],
    icon: "business"
  }
];

const clientDeliverablePack = {
  title: "Professional Deliverable Sample Package",
  subtitle: "Real, verified client report files prepared across Excel, Word, PowerPoint, and PDF demonstrating multidisciplinary business delivery capabilities.",
  items: [
    {
      format: "Excel",
      badge: ".xlsx",
      title: "Business Performance & Dynamic KPI Tracker",
      description: "Formulaic, multi-sheet workbook tracking branch revenues, cost allocations, gross margins, and automated KPIs.",
      filename: "Business_Performance_Tracker.xlsx",
      downloadUrl: "/assets/downloads/Business_Performance_Tracker.xlsx",
      size: "17.8 KB"
    },
    {
      format: "Word",
      badge: ".docx",
      title: "Executive Daily Business Diagnostic Report",
      description: "Structured corporate executive briefing document detailing operational metrics, departmental alerts, and strategic action plans.",
      filename: "Daily_Business_Report.docx",
      downloadUrl: "/assets/downloads/Daily_Business_Report.docx",
      size: "11.1 KB"
    },
    {
      format: "PowerPoint",
      badge: ".pptx",
      title: "Executive Strategic Presentation Deck",
      description: "High-impact slide presentation synthesizing performance dashboards, quarterly projections, and board-level initiatives.",
      filename: "Business_Performance_Presentation.pptx",
      downloadUrl: "/assets/downloads/Business_Performance_Presentation.pptx",
      size: "206.9 KB"
    },
    {
      format: "PDF",
      badge: ".pdf",
      title: "Comprehensive Client Deliverable Package Preview",
      description: "Polished executive PDF case study report presenting analytical methodology, visualizations, and strategic conclusions.",
      filename: "Client_Reporting_Package_Preview.pdf",
      downloadUrl: "/assets/downloads/Client_Reporting_Package_Preview.pdf",
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
