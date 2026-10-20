import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-obsidian text-white border-b border-grid-dark">
      <div className="max-w-7xl mx-auto border-x border-grid-dark px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-mint/40 bg-mint/10 text-mint">
            FREE 30-DAY PILOT
          </span>
          <p className="text-white/85 font-normal">
            Purpose-built CBN, SEC &amp; NDPA compliance intelligence for Nigerian MFBs and Fintechs.
          </p>
        </div>

        <Link
          href="/request-demo"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-mint hover:text-white transition-colors"
        >
          <span>Reserve onboarding call</span>
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
