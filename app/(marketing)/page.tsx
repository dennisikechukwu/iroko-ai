import { HeroSection } from "@/components/marketing/HeroSection";
import { RegulatoryProofStrip } from "@/components/marketing/RegulatoryProofStrip";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { AgentsShowcaseSection } from "@/components/marketing/AgentsShowcaseSection";
import { AuditTrailSection } from "@/components/marketing/AuditTrailSection";
import { SolutionsSection } from "@/components/marketing/SolutionsSection";
import { PricingSection } from "@/components/marketing/PricingSection";
import { SecuritySection } from "@/components/marketing/SecuritySection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { CtaSection } from "@/components/marketing/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RegulatoryProofStrip />
      <HowItWorksSection />
      <AgentsShowcaseSection />
      <AuditTrailSection />
      <SolutionsSection />
      <PricingSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
