import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "How Iroko-AI works", href: "/#platform" },
      { label: "Cite-First RAG", href: "/#agents" },
      { label: "SHA-256 Audit Trail", href: "/#audit-trail" },
      { label: "Security & Privacy", href: "/#security" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "5 AI Specialists",
    links: [
      { label: "01 · Researcher", href: "/#agents" },
      { label: "02 · Watchdog", href: "/#agents" },
      { label: "03 · Analyst", href: "/#agents" },
      { label: "04 · Sentinel", href: "/#agents" },
      { label: "05 · Strategist", href: "/#agents" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Microfinance Banks (MFBs)", href: "/#solutions" },
      { label: "Fintechs & Payment Gateways", href: "/#solutions" },
      { label: "SEC Capital Market Teams", href: "/#solutions" },
      { label: "NDPA Article 24 Compliance", href: "/#security" },
      { label: "Common Questions", href: "/#faqs" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Start 30-day pilot", href: "/request-demo" },
      { label: "Talk to sales", href: "/request-demo" },
      { label: "Sign in to workspace", href: "/login" },
      { label: "ekeh@irokoai.site", href: "mailto:ekeh@irokoai.site" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200/80 pt-12 sm:pt-16 pb-10 sm:pb-12 font-light">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-zinc-200/70">
          {/* Left Brand Column (2 Cols) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <Logo />
              <p className="mt-3 sm:mt-3.5 text-[12px] sm:text-[12.5px] text-zinc-500 leading-relaxed max-w-xs">
                Agentic regulatory compliance and document intelligence for
                Nigerian Microfinance Banks, Fintechs, and regulated enterprises.
              </p>
            </div>

            <div className="text-[10.5px] sm:text-[11px] text-zinc-400 space-y-0.5">
              <p className="text-zinc-600 font-normal">Lagos, Nigeria</p>
              <p>7, Adeosun St, Ojo, Lagos</p>
            </div>
          </div>

          {/* 4 Navigation Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11.5px] font-medium text-zinc-950 tracking-tight">
                {col.title}
              </h3>
              <ul className="mt-3.5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-zinc-500 hover:text-zinc-950 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Status Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[10.5px] sm:text-[11px] text-zinc-400">
          <p>© 2026 Iroko-AI. All rights reserved. Built in Nigeria for regulated finance.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 text-zinc-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>All 5 AI agents operational</span>
            </span>
            <span className="font-mono text-[9.5px] sm:text-[10px]">CBN · SEC · NDPA · NFIU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
