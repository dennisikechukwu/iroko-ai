"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Alert01Icon,
  Chart01Icon,
  Shield01Icon,
  CheckmarkBadge01Icon,
  File01Icon,
  Globe02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface AgentSpec {
  id: string;
  code: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: typeof Search01Icon;
  capabilities: string[];
  sampleQuery: string;
  sampleOutput: string;
  citationRef: string;
  confidence: string;
  metrics: { label: string; value: string; status: string }[];
}

const AGENTS: AgentSpec[] = [
  {
    id: "researcher",
    code: "01",
    name: "Researcher",
    role: "Cite-First Regulatory & Policy RAG",
    tagline:
      "Answers complex compliance questions with exact page & clause citations.",
    description:
      "Searches across your internal MFB/Fintech policies and CBN, SEC, and NDPA circulars simultaneously. Every sentence is anchored to a verifiable statutory paragraph—with full support for English, Pidgin, Yoruba, Hausa, and Igbo.",
    imageSrc: "/Screenshot 2026-10-19 at 18.30.33.png",
    imageAlt:
      "3D translucent glass document layers scanned by a cobalt blue laser beam",
    icon: Search01Icon,
    capabilities: [
      "Cross-references internal credit & KYC manuals against CBN circulars",
      "Multilingual queries in English, Pidgin, Yoruba, Hausa & Igbo",
      "Zero-hallucination strict citation enforcement",
    ],
    sampleQuery:
      "Does our Tier-2 MFB onboarding flow satisfy the 2026 CBN BVN/NIN linkage circular?",
    sampleOutput:
      "Compliant. Policy v3.4 (§2.1) enforces mandatory biometric cross-matching of both BVN and NIN prior to activating Tier-2 transaction limits above ₦200,000.",
    citationRef: "CBN-BSD/DIR/2026/04 · Page 14, §4.2",
    confidence: "99.4% citation match",
    metrics: [
      { label: "Retrieval Latency", value: "380ms", status: "Sub-second" },
      { label: "Languages Supported", value: "5 Local", status: "EN·PCM·YO·HA·IG" },
      { label: "Uncited Claims", value: "0.0%", status: "Blocked by guardrail" },
    ],
  },
  {
    id: "watchdog",
    code: "02",
    name: "Watchdog",
    role: "Proactive Circular & Threshold Monitor",
    tagline:
      "Detects regulatory drift and prudential threshold breaches before examiners do.",
    description:
      "Continuously monitors new CBN, SEC, and NDPC directives against your live policies and prudential ratios. Flags policy gaps and expiring compliance obligations automatically.",
    imageSrc: "/Screenshot 2026-10-19 at 18.33.19.png",
    imageAlt:
      "3D concentric silver and cobalt-blue radar pulse rings radiating from a central chrome beacon",
    icon: Alert01Icon,
    capabilities: [
      "Real-time diffing when CBN or SEC issues a new circular",
      "Automated alerts when CAR or Liquidity nears statutory minimums",
      "Tracks mandatory quarterly & annual filing deadlines",
    ],
    sampleQuery:
      "Scan Q2 policy library against the newly released CBN Cybersecurity Framework.",
    sampleOutput:
      "1 policy update required: Section 6.3 of your IT Risk Charter specifies a 72-hour incident notification window, whereas the revised CBN directive mandates reporting within 24 hours.",
    citationRef: "CBN-CYBER-2026 · Page 22, §6.3",
    confidence: "1 drift detected",
    metrics: [
      { label: "Circulars Monitored", value: "24 / 7", status: "CBN · SEC · NDPC" },
      { label: "Policy Clause Diffs", value: "1,428", status: "Auto-mapped" },
      { label: "Lead Time Saved", value: "14 Days", status: "Pre-audit warning" },
    ],
  },
  {
    id: "analyst",
    code: "03",
    name: "Analyst",
    role: "Financial & Prudential Ratio Intelligence",
    tagline:
      "Stress-tests Capital Adequacy, Liquidity, and PAR > 30 days in real time.",
    description:
      "Ingests XLSX and PDF prudential returns to compute Capital Adequacy Ratio (CAR), Liquidity Ratio, and Portfolio-at-Risk (PAR) against Unit, State, and National MFB statutory thresholds.",
    imageSrc: "/Screenshot 2026-10-19 at 18.30.49.png",
    imageAlt:
      "3D frosted glass and brushed aluminum bar chart columns with a glowing electric-blue threshold bar",
    icon: Chart01Icon,
    capabilities: [
      "Automated CAR (10% min) and Liquidity Ratio (20% min) verification",
      "Portfolio-at-Risk (PAR > 30 days) covenant stress-testing",
      "Instant variance breakdown across quarterly CBN returns",
    ],
    sampleQuery:
      "Evaluate our Q2 National MFB prudential return against CBN minimum capital rules.",
    sampleOutput:
      "CAR stands at 11.4% (140 bps above the 10.0% statutory floor). Liquidity Ratio is healthy at 26.8%. Watchdog recommends monitoring Tier-2 loan provisioning as PAR > 30d reached 3.8%.",
    citationRef: "CBN MFB Prudential Guidelines · §7.1 & §8.4",
    confidence: "Prudential pass",
    metrics: [
      { label: "Capital Adequacy (CAR)", value: "11.4%", status: "Min 10.0% · PASS" },
      { label: "Liquidity Ratio", value: "26.8%", status: "Min 20.0% · PASS" },
      { label: "PAR > 30 Days", value: "3.8%", status: "Max 5.0% · MONITOR" },
    ],
  },
  {
    id: "sentinel",
    code: "04",
    name: "Sentinel",
    role: "Adversarial AML / CFT & Threat-vs-Noise Triage",
    tagline:
      "Separates genuine NFIU structuring threats from false-positive alert fatigue.",
    description:
      "Runs an adversarial dual-pass review on flagged transactions and velocity rules—testing each alert for structuring, smurfing, and PEP exposure before generating an NFIU STR draft.",
    imageSrc: "/Screenshot 2026-10-19 at 18.29.49.png",
    imageAlt:
      "3D glass security shield filtering chaotic gray particles into a clean cobalt-blue stream",
    icon: Shield01Icon,
    capabilities: [
      "Adversarial Threat-vs-Noise triage cuts false positives by 68%",
      "Detects split transfers & structuring near the ₦5,000,000 NFIU threshold",
      "Auto-drafts NFIU Suspicious Transaction Report (STR) narratives",
    ],
    sampleQuery:
      "Triage 48 flagged split-transfer alerts from the weekend settlement batch.",
    sampleOutput:
      "45 alerts cleared as verified merchant payroll batching (Noise). 3 accounts escalated as coordinated smurfing across 4 linked BVNs totaling ₦14.2M within 18 hours (True Threat).",
    citationRef: "NFIU AML/CFT Regulations · §3.8 (Structuring)",
    confidence: "3 STRs queued",
    metrics: [
      { label: "False Positives Cut", value: "-68%", status: "Adversarial filter" },
      { label: "Escalated Threats", value: "3 STRs", status: "NFIU-ready packet" },
      { label: "Triage Speed", value: "1.2s", status: "Per batch" },
    ],
  },
  {
    id: "strategist",
    code: "05",
    name: "Strategist",
    role: "Executive GO / MONITOR / NO-GO Briefs",
    tagline:
      "Synthesizes findings from all 4 agents into a board-ready compliance verdict.",
    description:
      "Before you launch a new credit product, wallet tier, or agency banking corridor, Strategist compiles legal citations, ratio impacts, and AML risks into a single signed executive brief.",
    imageSrc: "/Screenshot 2026-10-19 at 18.30.11.png",
    imageAlt:
      "3D metallic and sapphire-blue executive compliance seal resting on a white stack of boardroom briefs",
    icon: CheckmarkBadge01Icon,
    capabilities: [
      "Clear GO, MONITOR, or NO-GO executive decision synthesis",
      "Maps remediation tasks directly to legal, risk, and engineering owners",
      "One-click export for Board Risk Committees and CBN examiners",
    ],
    sampleQuery:
      "Can we launch our instant SME working-capital credit line next Monday?",
    sampleOutput:
      "Verdict: GO WITH 1 CONDITION. KYC, CAR (11.4%), and NFIU velocity rules pass. Condition: Add explicit NDPA Article 24 automated credit-scoring consent checkbox before production rollout.",
    citationRef: "NDPA 2023 · Article 24(2) & CBN Consumer Protection §3.1",
    confidence: "GO · Board Brief Ready",
    metrics: [
      { label: "Executive Verdict", value: "GO", status: "1 pre-launch task" },
      { label: "Agents Consulted", value: "5 / 5", status: "Full consensus" },
      { label: "Audit Hash Seal", value: "SHA-256", status: "8f2a → c091" },
    ],
  },
];

export function AgentsShowcaseSection() {
  const [activeAgentId, setActiveAgentId] = useState<string>(AGENTS[0].id);

  const activeAgent =
    AGENTS.find((agent) => agent.id === activeAgentId) || AGENTS[0];

  return (
    <section
      id="agents"
      className="w-full bg-zinc-50/50 border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="5 specialist AI agents"
          title="An entire compliance department, working in parallel."
          description="Instead of a generic chatbot, Iroko-AI coordinates five purpose-built regulatory specialists that research, monitor, stress-test, and seal every compliance decision."
        />

        {/* Interactive Attio-Style Agent Selector Tabs */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {AGENTS.map((agent) => {
            const isSelected = agent.id === activeAgent.id;
            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => setActiveAgentId(agent.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border text-[11px] sm:text-[12px] font-light transition-all cursor-pointer ${
                  isSelected
                    ? "border-zinc-900 bg-zinc-900 text-white shadow-xs"
                    : "border-zinc-200/90 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-950"
                }`}
              >
                <span
                  className={`font-mono text-[9.5px] sm:text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected
                      ? "bg-white/15 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {agent.code}
                </span>
                <span className="font-normal">{agent.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main 12-Column Split Architectural Showcase */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (5 Cols): Agent Specification, Capabilities & Live Finding */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200/85 bg-white p-4 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[9.5px] sm:text-[10.5px] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/70 text-blue-600">
                    AGENT {activeAgent.code}
                  </span>
                  <span className="text-[10.5px] sm:text-[11.5px] font-light text-zinc-500 truncate max-w-[170px] sm:max-w-none">
                    {activeAgent.role}
                  </span>
                </div>
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-xl border border-zinc-200/80 bg-zinc-50 flex items-center justify-center text-blue-600 shrink-0">
                  <HugeiconsIcon
                    icon={activeAgent.icon}
                    size={15}
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              <h3 className="mt-3.5 sm:mt-4 text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                {activeAgent.name}
              </h3>
              <p className="mt-1 sm:mt-1.5 text-[12.5px] sm:text-[13.5px] font-normal text-zinc-800 leading-snug">
                {activeAgent.tagline}
              </p>
              <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[12.5px] font-light text-zinc-500 leading-relaxed">
                {activeAgent.description}
              </p>

              {/* Capabilities Checklist */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-zinc-100">
                <p className="text-[9.5px] sm:text-[10px] font-light uppercase tracking-[0.12em] text-zinc-400">
                  Specialist Capabilities
                </p>
                <ul className="mt-2 sm:mt-2.5 space-y-1.5 sm:space-y-2">
                  {activeAgent.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-[11.5px] sm:text-[12px] font-light text-zinc-700"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compact Sample Finding Card */}
              <div className="mt-4 sm:mt-5 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 sm:p-3.5 font-light">
                <div className="flex items-center justify-between text-[9.5px] sm:text-[10px] text-blue-600">
                  <span className="inline-flex items-center gap-1 font-normal">
                    <HugeiconsIcon
                      icon={SparklesIcon}
                      size={11}
                      strokeWidth={1.8}
                    />
                    <span>Sample Finding</span>
                  </span>
                  <span className="font-mono text-zinc-400">
                    {activeAgent.citationRef}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] sm:text-[11.5px] text-zinc-600 leading-relaxed">
                  {activeAgent.sampleOutput}
                </p>
              </div>
            </div>

            {/* Multilingual Pill Bar */}
            <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-light text-zinc-500">
                <HugeiconsIcon
                  icon={Globe02Icon}
                  size={13}
                  strokeWidth={1.6}
                  className="text-blue-600 shrink-0"
                />
                <span>Query in 5 languages:</span>
              </span>
              <div className="flex flex-wrap gap-1 font-mono text-[9px] sm:text-[9.5px]">
                {["EN", "PIDGIN", "YORUBA", "HAUSA", "IGBO"].map((lang) => (
                  <span
                    key={lang}
                    className="px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Framed 3D Agent Visual Showcase + Telemetry Strip */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200/80 bg-zinc-100/60 p-1.5 sm:p-2.5 shadow-xs flex flex-col">
            <div className="rounded-xl border border-zinc-200/90 bg-white overflow-hidden flex-1 flex flex-col justify-between">
              {/* Top Window Chrome Bar */}
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-zinc-200/70 bg-zinc-50/50 flex items-center justify-between font-light">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600" />
                  <span className="text-[10.5px] sm:text-[11px] font-normal text-zinc-950">
                    Agent {activeAgent.code} · {activeAgent.name}
                  </span>
                </div>

                <span className="font-mono text-[9px] sm:text-[9.5px] px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60">
                  {activeAgent.confidence}
                </span>
              </div>

              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between gap-3 sm:gap-4 font-light">
                {/* High-Resolution 3D Agent Render */}
                <div className="relative aspect-[16/10] w-full rounded-xl border border-zinc-200/80 bg-white overflow-hidden group">
                  <Image
                    key={activeAgent.imageSrc}
                    src={activeAgent.imageSrc}
                    alt={activeAgent.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover scale-[1.02] transition-transform duration-500 group-hover:scale-[1.05]"
                    priority
                  />

                  {/* Floating Glassmorphic Statutory Anchor Pill */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between gap-2 rounded-lg sm:rounded-xl border border-zinc-200/80 bg-white/92 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xs">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-normal text-zinc-900 truncate">
                      <HugeiconsIcon
                        icon={File01Icon}
                        size={12}
                        strokeWidth={1.7}
                        className="text-blue-600 shrink-0"
                      />
                      <span className="truncate">{activeAgent.sampleQuery}</span>
                    </span>
                    <span className="hidden sm:inline-block font-mono text-[9.5px] text-blue-600 shrink-0">
                      {activeAgent.citationRef}
                    </span>
                  </div>
                </div>

                {/* 3-Column Non-Overlapping Telemetry Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {activeAgent.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-2.5 sm:p-3 flex flex-col justify-between"
                    >
                      <span className="text-[9.5px] sm:text-[10px] text-zinc-400">
                        {metric.label}
                      </span>
                      <div className="mt-1 sm:mt-1.5 flex items-baseline justify-between gap-2">
                        <span className="text-[14px] sm:text-base font-semibold tracking-tight text-zinc-950">
                          {metric.value}
                        </span>
                        <span className="font-mono text-[9px] sm:text-[9.5px] text-blue-600 truncate">
                          {metric.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
