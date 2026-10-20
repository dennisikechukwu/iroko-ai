import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01Icon,
  LegalDocument01Icon,
  Database01Icon,
  CheckmarkBadge01Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons";

const REGULATORY_PILLARS = [
  {
    code: "CBN",
    title: "Central Bank of Nigeria",
    subtitle: "MFB Prudential, KYC Tiers & BSD Circulars",
    icon: Shield01Icon,
  },
  {
    code: "NDPA",
    title: "NDPA 2023 · Article 24",
    subtitle: "Data Processing & Consent Audit Records",
    icon: Database01Icon,
  },
  {
    code: "NFIU",
    title: "NFIU AML / CFT",
    subtitle: "Velocity Rules, Structuring & STR Triage",
    icon: CheckmarkBadge01Icon,
  },
  {
    code: "SEC",
    title: "SEC Nigeria Rules",
    subtitle: "Digital Sub-Broker & Client Custody Filings",
    icon: LegalDocument01Icon,
  },
  {
    code: "5 LANGS",
    title: "Multilingual RAG",
    subtitle: "English, Pidgin, Yoruba, Hausa & Igbo",
    icon: Globe02Icon,
  },
];

export function RegulatoryProofStrip() {
  return (
    <section className="w-full border-y border-zinc-200/80 bg-zinc-50/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-light uppercase tracking-[0.14em] text-zinc-400">
          Purpose-built for Nigerian regulatory frameworks &amp; statutory inspections
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {REGULATORY_PILLARS.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-2xs hover:border-zinc-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/70 font-mono text-[9.5px] font-normal text-blue-600">
                  {item.code}
                </span>
                <HugeiconsIcon
                  icon={item.icon}
                  size={15}
                  strokeWidth={1.6}
                  className="text-zinc-400"
                />
              </div>

              <h3 className="mt-3 text-[13px] font-medium text-zinc-950 tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-[11px] font-light text-zinc-500 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
