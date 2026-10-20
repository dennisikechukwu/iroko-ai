export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "5 AI Agents", href: "#agents" },
  { label: "Audit Trail", href: "#audit-trail" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export const HERO_AGENT_PILLS = [
  { code: "01", name: "Researcher", role: "Cite-First RAG" },
  { code: "02", name: "Watchdog", role: "Regulatory Drift" },
  { code: "03", name: "Analyst", role: "Compound Trends" },
  { code: "04", name: "Sentinel", role: "AML / CFT Risk" },
  { code: "05", name: "Strategist", role: "Verdict & Briefs" },
];

export const HERO_LIVE_TRACE = {
  query:
    "Does our Tier-2 MFB onboarding flow meet the updated CBN KYC & NDPA Article 24 retention mandate?",
  verdict: "COMPLIANT · MONITOR",
  citations: [
    {
      code: "CBN-BSD/DIR/2026/04",
      title: "Revised KYC Tiered Account Thresholds (§4.2)",
      match: "99.4% Match",
    },
    {
      code: "NDPA-2023-ART-24",
      title: "Record of Processing & Biometric Consent (§2.1)",
      match: "98.8% Match",
    },
  ],
  hash: "8f2a · c091 · 7be4",
};
