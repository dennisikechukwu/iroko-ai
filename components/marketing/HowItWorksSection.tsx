import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  SparklesIcon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const WORKFLOW_STEPS = [
  {
    step: "01",
    tag: "Ingestion & Indexing",
    title: "Upload your policies and regulatory circulars",
    description:
      "Drop in internal MFB credit manuals, AML policies, and CBN/SEC/NDPA PDFs. Iroko parses every table, clause, and section anchor automatically.",
    imageSrc: "/istockphoto-1472926108-612x612.jpg",
    imageAlt: "Stack of regulatory documents and policy files being indexed",
    overlayLabel: "CBN-BSD-2026.pdf",
    overlayMeta: "1,428 clauses indexed",
    highlights: [
      "PDF, DOCX & XLSX prudential returns",
      "Automatic section & page-level anchoring",
      "Strict tenant-isolated vector vault",
    ],
    icon: File01Icon,
  },
  {
    step: "02",
    tag: "Multi-Agent Triage",
    title: "5 specialist AI agents cross-examine in parallel",
    description:
      "Ask compliance questions in English, Pidgin, Yoruba, Hausa, or Igbo—or let Watchdog and Sentinel scan your ratios and velocity rules continuously.",
    imageSrc: "/connected-digital-nodes-stockcake.jpg",
    imageAlt: "Connected 3D blue neural network nodes representing 5 AI agents",
    overlayLabel: "5 Specialist Agents",
    overlayMeta: "Parallel RAG · 99.4% match",
    highlights: [
      "Zero hallucination cite-first retrieval",
      "CAR, Liquidity & PAR > 30d threshold checks",
      "Adversarial Threat-vs-Noise AML triage",
    ],
    icon: SparklesIcon,
  },
  {
    step: "03",
    tag: "Cryptographic Proof",
    title: "Export board-ready briefs with a SHA-256 seal",
    description:
      "Every query, source citation, and GO / MONITOR / NO-GO decision is hash-chained into a tamper-evident ledger ready for CBN and NDPC examiners.",
    imageSrc:
      "/pngtree-isolated-3d-render-of-a-stretched-metal-chain-on-white-background-image_13560215.png",
    imageAlt: "3D steel cryptographic chain representing SHA-256 audit trail",
    overlayLabel: "SHA-256 Audit Chain",
    overlayMeta: "8f2a9c → c0917b · Verified",
    highlights: [
      "One-click PDF compliance brief export",
      "Immutable prev_hash → curr_hash chain",
      "NDPA Article 24 inspection ready",
    ],
    icon: CheckmarkBadge01Icon,
  },
];

export function HowItWorksSection() {
  return (
    <section id="platform" className="w-full bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How Iroko-AI works"
          title="From scattered circulars to audit-ready certainty."
          description="Replace manual PDF searching and last-minute examination panic with a continuous, cite-first compliance operating system."
        />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-zinc-200/85 bg-white p-4 sm:p-6 flex flex-col justify-between shadow-2xs hover:border-zinc-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Top Step Header */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-zinc-950 text-white font-medium">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-light text-blue-600">
                      {item.tag}
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
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-zinc-950 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12.5px] font-light text-zinc-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Framed Visual Showcase with Unified Attio Glass Status Pill */}
                <div className="mt-5 relative aspect-[16/10] w-full rounded-xl border border-zinc-200/85 bg-zinc-50 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* Subtle top-to-bottom vignette so the bottom status pill reads cleanly on all 3 images */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                  />

                  {/* Floating Glassmorphic Telemetry Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 rounded-lg border border-white/60 bg-white/92 backdrop-blur-md px-2.5 py-1.5 shadow-xs font-light">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-normal text-zinc-900 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span className="truncate">{item.overlayLabel}</span>
                    </span>
                    <span className="font-mono text-[9.5px] text-zinc-500 shrink-0">
                      {item.overlayMeta}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Checklist */}
              <ul className="mt-5 pt-4 border-t border-zinc-100 space-y-2">
                {item.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[11.5px] font-light text-zinc-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
