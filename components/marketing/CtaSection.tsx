import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="w-full bg-white border-t border-zinc-200/80 py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/85 bg-zinc-50/50 px-4 py-12 sm:px-12 sm:py-20 text-center shadow-2xs">
          {/* Subtle radial dot pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,#000_100%)] opacity-75"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Badge variant="pill">
              <span>Guided onboarding in under 24 hours</span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={11}
                strokeWidth={1.8}
                className="text-zinc-400 shrink-0"
              />
            </Badge>

            <h2 className="mt-5 sm:mt-6 text-2xl xs:text-[26px] sm:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.15] sm:leading-[1.08]">
              Ready to put your compliance on autopilot?
            </h2>

            <p className="mt-3 sm:mt-4 text-[13px] sm:text-[16px] text-zinc-500 font-light leading-relaxed max-w-xl px-1 sm:px-0">
              Start a free 30-day guided pilot with your own internal policies
              and CBN/SEC circulars—and see all five AI specialists in action.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2 sm:gap-2.5 w-full xs:w-auto max-w-xs xs:max-w-none">
              <Button href="/request-demo" variant="secondary" size="md">
                Talk to sales
              </Button>
              <Button href="/request-demo" variant="primary" size="md">
                Start 30-day pilot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
