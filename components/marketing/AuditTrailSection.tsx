import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  SparklesIcon,
  CheckmarkBadge01Icon,
  ArrowRight01Icon,
  LockIcon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AuditTrailSection() {
  return (
    <section
      id="audit-trail"
      className="w-full bg-white border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="A record you can follow"
          title="Every decision has a backstory. Keep yours intact."
          description="Iroko's hash-chained audit trail links each record to the one before it. That makes changes detectable and gives your team a clear way to follow the evidence behind every decision."
        />

        {/* Magic UI BentoGrid Architecture (3 Bento Cards with Micro-UI Backgrounds & Hover Lift) */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 01: The Evidence */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 sm:p-6 [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)] hover:[box-shadow:0_0_0_1px_rgba(37,99,235,.2),0_4px_8px_rgba(0,0,0,.06),0_16px_32px_rgba(0,0,0,.06)] transition-all duration-300">
            {/* Subtle Dot Background + Interactive Floating Record Card */}
            <div className="relative h-48 w-full rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 flex flex-col justify-center overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] opacity-60"
              />

              <div className="relative z-10 rounded-xl border border-zinc-200/90 bg-white p-3.5 shadow-xs transform-gpu transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between text-[10px] font-light text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-zinc-700 font-normal">
                    <HugeiconsIcon
                      icon={File01Icon}
                      size={12}
                      strokeWidth={1.7}
                      className="text-blue-600"
                    />
                    <span>CBN_KYC_Circular_2026.pdf</span>
                  </span>
                  <span className="font-mono">09:14:02</span>
                </div>
                <p className="mt-2 text-[11px] font-light text-zinc-500">
                  Document ingested &amp; 42 pages anchored into workspace vault.
                </p>
                <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between font-mono text-[9.5px]">
                  <span className="text-zinc-400">RECORD HASH</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60">
                    8f2a · c091
                  </span>
                </div>
              </div>
            </div>

            {/* Magic UI Bento Bottom Content with Slide-Up CTA */}
            <div className="mt-6">
              <div className="transform-gpu transition-all duration-300 lg:group-hover:-translate-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-zinc-950 text-white font-medium">
                    01
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    8f2a · c091
                  </span>
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-zinc-950 tracking-tight">
                  The evidence
                </h3>
                <p className="mt-1.5 text-[12.5px] font-light text-zinc-500 leading-relaxed">
                  A document enters the record. Every policy manual and regulatory circular is fingerprinted the moment it is uploaded.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11.5px] font-light">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-1.5 text-zinc-700 group-hover:text-blue-600 transition-colors"
                >
                  <span>Inspect ingestion record</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={1.7}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <HugeiconsIcon
                  icon={LockIcon}
                  size={12}
                  strokeWidth={1.6}
                  className="text-zinc-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Card 02: The Reasoning */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)] hover:[box-shadow:0_0_0_1px_rgba(37,99,235,.2),0_4px_8px_rgba(0,0,0,.06),0_16px_32px_rgba(0,0,0,.06)] transition-all duration-300">
            <div className="relative h-48 w-full rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 flex flex-col justify-center overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] opacity-60"
              />

              <div className="relative z-10 rounded-xl border border-zinc-200/90 bg-white p-3.5 shadow-xs transform-gpu transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between text-[10px] font-light text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-zinc-700 font-normal">
                    <HugeiconsIcon
                      icon={SparklesIcon}
                      size={12}
                      strokeWidth={1.7}
                      className="text-blue-600"
                    />
                    <span>Cite-First Clause Match</span>
                  </span>
                  <span className="font-mono text-blue-600">§4.2 · p.14</span>
                </div>
                <p className="mt-2 text-[11px] font-light text-zinc-500">
                  &ldquo;Mandatory BVN + NIN cross-check verified before Tier-2 limit activation.&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between font-mono text-[9.5px]">
                  <span className="text-zinc-400">8f2a · c091 →</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60">
                    c091 · 7be4
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="transform-gpu transition-all duration-300 lg:group-hover:-translate-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-zinc-950 text-white font-medium">
                    02
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    c091 · 7be4
                  </span>
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-zinc-950 tracking-tight">
                  The reasoning
                </h3>
                <p className="mt-1.5 text-[12.5px] font-light text-zinc-500 leading-relaxed">
                  A finding connects to its source. Every AI answer is cryptographically chained to the exact statutory paragraph it cited.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11.5px] font-light">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-1.5 text-zinc-700 group-hover:text-blue-600 transition-colors"
                >
                  <span>Trace source citation</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={1.7}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <HugeiconsIcon
                  icon={LockIcon}
                  size={12}
                  strokeWidth={1.6}
                  className="text-zinc-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Card 03: The Decision */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)] hover:[box-shadow:0_0_0_1px_rgba(37,99,235,.2),0_4px_8px_rgba(0,0,0,.06),0_16px_32px_rgba(0,0,0,.06)] transition-all duration-300">
            <div className="relative h-48 w-full rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 flex flex-col justify-center overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] opacity-60"
              />

              <div className="relative z-10 rounded-xl border border-zinc-200/90 bg-white p-3.5 shadow-xs transform-gpu transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between text-[10px] font-light text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-zinc-700 font-normal">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      size={12}
                      strokeWidth={1.7}
                      className="text-blue-600"
                    />
                    <span>Executive Sign-Off</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-mono text-[9px]">
                    GO VERDICT
                  </span>
                </div>
                <p className="mt-2 text-[11px] font-light text-zinc-500">
                  Approved by Chief Compliance Officer &amp; sealed for CBN / NDPC inspection.
                </p>
                <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between font-mono text-[9.5px]">
                  <span className="text-zinc-400">c091 · 7be4 →</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60">
                    7be4 · a630
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="transform-gpu transition-all duration-300 lg:group-hover:-translate-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded-md bg-zinc-950 text-white font-medium">
                    03
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    7be4 · a630
                  </span>
                </div>
                <h3 className="mt-3 text-[17px] font-semibold text-zinc-950 tracking-tight">
                  The decision
                </h3>
                <p className="mt-1.5 text-[12.5px] font-light text-zinc-500 leading-relaxed">
                  An action links back to the evidence. Export a tamper-evident audit packet whenever examiners or your board ask questions.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11.5px] font-light">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-1.5 text-zinc-700 group-hover:text-blue-600 transition-colors"
                >
                  <span>Built for review. Ready for questions</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={1.7}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <HugeiconsIcon
                  icon={LockIcon}
                  size={12}
                  strokeWidth={1.6}
                  className="text-zinc-300 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
