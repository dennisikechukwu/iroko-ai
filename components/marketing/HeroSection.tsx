import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, LockIcon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WavingDotsBackground } from "@/components/ui/WavingDotsBackground";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 sm:pt-20 pb-16 sm:pb-24">
      {/* Google Stitch + Attio 60fps Waving Dot Matrix Background */}
      <WavingDotsBackground />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Centered Attio Hero Copy */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <Badge variant="pill">
            <span>CBN, SEC &amp; NDPA compliance for MFBs and Fintechs</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={11}
              strokeWidth={1.8}
              className="text-zinc-400 shrink-0"
            />
          </Badge>

          <h1 className="mt-5 sm:mt-6 text-[26px] xs:text-[30px] sm:text-4xl md:text-[52px] lg:text-[60px] font-bold tracking-[-0.035em] sm:tracking-[-0.04em] text-zinc-950 leading-[1.12] sm:leading-[1.06] md:whitespace-nowrap">
            Welcome to agentic compliance.
          </h1>

          <p className="mt-3.5 sm:mt-5 text-[13.5px] sm:text-[16px] lg:text-[17px] text-zinc-500 max-w-xl mx-auto leading-[1.6] font-light px-1 sm:px-0">
            Iroko AI is the platform that ingests policies, monitors regulatory
            circulars, and audits compliance decisions around the clock.
          </p>

          {/* Dual Centered CTA Buttons */}
          <div className="mt-6 sm:mt-7 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2 sm:gap-2.5 w-full xs:w-auto max-w-xs xs:max-w-none">
            <Button href="/request-demo" variant="secondary" size="md">
              Talk to sales
            </Button>
            <Button href="/request-demo" variant="primary" size="md">
              Start 30-day pilot
            </Button>
          </div>
        </div>

        {/* Attio-Style Framed Window with Placeholder for V2 SaaS Dashboard Screenshot */}
        <div className="mt-10 sm:mt-16 rounded-xl sm:rounded-2xl border border-zinc-200/80 bg-zinc-100/55 p-1.5 sm:p-2.5 shadow-[0_16px_60px_-15px_rgba(0,0,0,0.06)] sm:shadow-[0_24px_80px_-15px_rgba(0,0,0,0.08)]">
          <div className="rounded-lg sm:rounded-xl border border-zinc-200/90 bg-white overflow-hidden">
            {/* macOS Window Top Chrome */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-zinc-200/70 bg-zinc-50/40 font-light">
              <div className="flex items-center gap-1.5">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-zinc-200/80 bg-white text-[10px] text-zinc-500">
                <HugeiconsIcon
                  icon={LockIcon}
                  size={10}
                  strokeWidth={1.6}
                  className="text-blue-600"
                />
                <span>app.irokoai.site/workspace</span>
              </span>

              <span className="text-[9.5px] sm:text-[10px] text-zinc-400">
                V2 SaaS Dashboard
              </span>
            </div>

            {/* Clean Image Placeholder Slot */}
            <div className="p-3 sm:p-6">
              <ImagePlaceholder
                label="V2 SaaS Dashboard Screenshot"
                dimensions="1440 × 900 PX"
                aspectRatio="aspect-[16/9]"
                description="Once we build the V2 Iroko AI SaaS Dashboard, screenshot it and drop the image right here."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
