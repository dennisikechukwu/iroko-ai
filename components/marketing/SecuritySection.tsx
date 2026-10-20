import { HugeiconsIcon } from "@hugeicons/react";
import {
  Database01Icon,
  LockIcon,
  Shield01Icon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SECURITY_PILLARS = [
  {
    code: "ISOLATION",
    title: "Strict tenant-isolated vaults",
    description:
      "Every MFB and fintech operates inside a dedicated, cryptographically isolated workspace. Your documents and embeddings never mix with another institution's data.",
    meta: "Dedicated Namespace",
    icon: Database01Icon,
  },
  {
    code: "PRIVACY",
    title: "Zero model training on your data",
    description:
      "Your internal credit manuals, board papers, and prudential returns are strictly yours. We never use customer documents or queries to train foundation models.",
    meta: "0% External Training",
    icon: LockIcon,
  },
  {
    code: "ENCRYPTION",
    title: "AES-256 & TLS 1.3 encryption",
    description:
      "All policy documents and audit trails are encrypted at rest with AES-256 and in transit via TLS 1.3, with single-tenant VPC options for Enterprise teams.",
    meta: "AES-256 · TLS 1.3",
    icon: Shield01Icon,
  },
  {
    code: "COMPLIANCE",
    title: "NDPA Article 24 & CBN IT ready",
    description:
      "Built-in role-based access control (RBAC), immutable SHA-256 activity logs, and statutory data residency controls aligned with NDPA 2023.",
    meta: "NDPA 2023 Native",
    icon: CheckmarkBadge01Icon,
  },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="w-full bg-zinc-50/50 border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Bank-grade security & privacy"
          title="Your policies and records never leave your vault."
          description="Engineered for Chief Information Security Officers and Data Protection Officers operating under CBN IT Standards and the Nigeria Data Protection Act."
        />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SECURITY_PILLARS.map((item) => (
            <div
              key={item.code}
              className="group rounded-2xl bg-white p-4 sm:p-6 flex flex-col justify-between [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)] hover:[box-shadow:0_0_0_1px_rgba(37,99,235,.22),0_4px_8px_rgba(0,0,0,.06),0_16px_32px_rgba(0,0,0,.06)] transition-all duration-300 font-light"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200/70 text-blue-600">
                    {item.code}
                  </span>
                  <div className="w-8 h-8 rounded-xl border border-zinc-200/80 bg-zinc-50 flex items-center justify-center text-zinc-600 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                    <HugeiconsIcon
                      icon={item.icon}
                      size={15}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-[16px] font-semibold tracking-tight text-zinc-950 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[10px]">
                <span className="text-zinc-400">Security standard</span>
                <span className="font-mono text-blue-600">{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
