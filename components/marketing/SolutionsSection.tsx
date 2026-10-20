import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01Icon,
  SparklesIcon,
  LegalDocument01Icon,
  ArrowRight01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOLUTIONS = [
  {
    code: "MFBs",
    licenceTag: "Unit · State · National MFBs",
    title: "Microfinance Banks",
    description:
      "Stay ahead of CBN Banking Supervision (BSD) circulars, automate quarterly prudential ratio checks, and keep board risk packs ready before examiners arrive.",
    icon: Shield01Icon,
    cardHeader: "CBN Prudential & KYC Posture",
    cardBadge: "BSD VERIFIED",
    rows: [
      { label: "Capital Adequacy (CAR)", value: "11.4% · PASS" },
      { label: "Liquidity Ratio", value: "26.8% · PASS" },
      { label: "Tier-1/2/3 BVN + NIN Mandate", value: "99.4% Match" },
    ],
    bullets: [
      "Automated CAR, Liquidity & PAR > 30d threshold alerts",
      "Instant gap analysis on new CBN BSD circulars",
      "One-click examination packets for CBN onsite reviews",
    ],
    ctaLabel: "Start MFB 30-day pilot",
  },
  {
    code: "FINTECH",
    licenceTag: "PSBs · PSSPs · Digital Lenders",
    title: "Fintechs & Payment Platforms",
    description:
      "Ship new wallet tiers and credit products without compliance bottlenecks. Triage NFIU structuring alerts and verify NDPA Article 24 data mandates in seconds.",
    icon: SparklesIcon,
    cardHeader: "AML Velocity & Data Privacy",
    cardBadge: "NFIU · NDPA",
    rows: [
      { label: "Sentinel False-Positive Reduction", value: "-68% Noise" },
      { label: "NDPA Art. 24 Consent Ledger", value: "Immutable ✓" },
      { label: "NFIU ₦5M Structuring Triage", value: "Auto-STR Ready" },
    ],
    bullets: [
      "Adversarial Threat-vs-Noise filtering on transaction alerts",
      "NDPA 2023 Article 24 automated processing records",
      "Pre-launch GO / NO-GO briefs for new product features",
    ],
    ctaLabel: "Start Fintech 30-day pilot",
  },
  {
    code: "ENTERPRISE",
    licenceTag: "SEC Capital Markets · HoldCos",
    title: "SEC & Multi-Licence Enterprises",
    description:
      "Unify compliance across multiple licences and subsidiaries. Cross-examine group policies against SEC Nigeria, CBN, and FRC governance frameworks from one vault.",
    icon: LegalDocument01Icon,
    cardHeader: "Multi-Entity Governance Vault",
    cardBadge: "SEC · CBN · FRC",
    rows: [
      { label: "SEC Rule 11.3 Client Custody", value: "Ring-Fenced ✓" },
      { label: "Subsidiary Policy Vaults", value: "4 Entities Synced" },
      { label: "Board Risk Committee Brief", value: "GO Verdict" },
    ],
    bullets: [
      "Isolated workspaces per subsidiary or regulatory licence",
      "SEC digital sub-broker & custody rule cross-examination",
      "Dedicated VPC deployment & custom RBAC governance",
    ],
    ctaLabel: "Talk to enterprise sales",
  },
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="w-full bg-zinc-50/50 border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Built around your licence"
          title="Tailored to how your institution is regulated."
          description="Whether you operate under a CBN Microfinance Bank licence, a Payment Service Bank charter, or SEC capital market rules, Iroko-AI maps directly to your statutory obligations."
        />

        {/* 3 Magic UI Bento Cards */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {SOLUTIONS.map((item) => (
            <div
              key={item.code}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 sm:p-6 [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)] hover:[box-shadow:0_0_0_1px_rgba(37,99,235,.22),0_4px_8px_rgba(0,0,0,.06),0_16px_32px_rgba(0,0,0,.06)] transition-all duration-300"
            >
              <div>
                {/* Top Licence Pill & Icon */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/70 text-blue-600">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-light text-zinc-500">
                      {item.licenceTag}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-lg border border-zinc-200/80 bg-zinc-50 flex items-center justify-center text-zinc-600 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                    <HugeiconsIcon
                      icon={item.icon}
                      size={14}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12.5px] font-light text-zinc-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Interactive Micro-UI Telemetry Viewport */}
                <div className="mt-5 relative rounded-xl border border-zinc-200/75 bg-zinc-50/70 p-3.5 overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] opacity-60"
                  />

                  <div className="relative z-10 rounded-xl border border-zinc-200/90 bg-white p-3.5 shadow-2xs transform-gpu transition-all duration-300 group-hover:-translate-y-0.5 font-light">
                    <div className="flex items-center justify-between pb-2.5 border-b border-zinc-100">
                      <span className="text-[11px] font-normal text-zinc-900">
                        {item.cardHeader}
                      </span>
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60">
                        {item.cardBadge}
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2">
                      {item.rows.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between text-[10.5px]"
                        >
                          <span className="text-zinc-500">{row.label}</span>
                          <span className="font-mono text-[10px] text-zinc-900 font-normal">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Capabilities Checklist */}
                <ul className="mt-5 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[11.5px] font-light text-zinc-600"
                    >
                      <HugeiconsIcon
                        icon={CheckmarkBadge01Icon}
                        size={13}
                        strokeWidth={1.7}
                        className="text-blue-600 shrink-0 mt-0.5"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Slide-Up Link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[12px] font-light">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-1.5 text-zinc-800 group-hover:text-blue-600 transition-colors"
                >
                  <span>{item.ctaLabel}</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={13}
                    strokeWidth={1.7}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <span className="font-mono text-[9.5px] text-zinc-400">
                  30-DAY PILOT
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
