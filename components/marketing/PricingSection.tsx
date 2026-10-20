"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge01Icon,
  SparklesIcon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

interface PlanSpec {
  id: string;
  name: string;
  audience: string;
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  description: string;
  popular?: boolean;
  ctaLabel: string;
  ctaVariant: "primary" | "secondary" | "blue";
  features: string[];
}

const PLANS: PlanSpec[] = [
  {
    id: "pilot",
    name: "Guided Pilot",
    audience: "30-Day Live Evaluation",
    monthlyPrice: "Free",
    annualPrice: "Free",
    period: "for 30 days",
    description:
      "Validate Iroko-AI on your own internal policies and CBN/SEC circulars with hands-on onboarding from our team.",
    ctaLabel: "Start 30-day pilot",
    ctaVariant: "secondary",
    features: [
      "Up to 50 internal policy & circular PDFs",
      "Full access to all 5 AI compliance agents",
      "Multilingual queries (EN, Pidgin, YO, HA, IG)",
      "SHA-256 hash-chained audit trail",
      "Guided setup with our compliance engineers",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Unit & State MFBs · Seed Fintechs",
    monthlyPrice: "₦350,000",
    annualPrice: "₦297,500",
    period: "per month",
    description:
      "Continuous cite-first compliance intelligence and quarterly prudential checks for growing regulated teams.",
    ctaLabel: "Start with Growth",
    ctaVariant: "secondary",
    features: [
      "Up to 500 indexed documents & circulars",
      "All 5 AI agents + Watchdog circular alerts",
      "5 compliance & risk officer seats included",
      "Automated CAR, Liquidity & PAR > 30d checks",
      "One-click PDF & CSV examiner audit exports",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    audience: "National MFBs · Scale Fintechs",
    monthlyPrice: "₦750,000",
    annualPrice: "₦637,500",
    period: "per month",
    description:
      "Full-scale regulatory surveillance, adversarial AML triage, and board-ready reporting for high-volume institutions.",
    popular: true,
    ctaLabel: "Start 30-day pilot",
    ctaVariant: "primary",
    features: [
      "Unlimited policy documents & regulatory circulars",
      "Sentinel AML Threat-vs-Noise velocity triage",
      "15 compliance, legal, audit & executive seats",
      "Custom CBN, SEC, NFIU & NDPA Art. 24 rules",
      "Priority Slack & WhatsApp compliance support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "Banks · HoldCos · Multi-Licence",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "annual licence",
    description:
      "Dedicated infrastructure, multi-subsidiary workspaces, and custom core-banking integrations for large institutions.",
    ctaLabel: "Talk to sales",
    ctaVariant: "secondary",
    features: [
      "Single-tenant VPC or On-Premise deployment",
      "Unlimited seats across multiple subsidiaries",
      "Custom core-banking & ERP API connectors",
      "SAML SSO, SCIM & custom retention policies",
      "Dedicated Solutions Architect & SLA guarantee",
    ],
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="w-full bg-white border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent pricing"
          title="Start with a free 30-day pilot. Scale with certainty."
          description="Every plan includes all 5 specialist AI agents, 5-language query support, and the SHA-256 tamper-evident audit trail—with zero per-query surprise fees."
        />

        {/* Attio-Style Billing Toggle */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-1 rounded-xl border border-zinc-200/90 bg-zinc-100/70 p-1 text-[10.5px] sm:text-[11.5px] font-light">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg transition-all cursor-pointer ${
                billing === "monthly"
                  ? "bg-white text-zinc-950 font-normal shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                billing === "annual"
                  ? "bg-white text-zinc-950 font-normal shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <span>Annual billing</span>
              <span className="font-mono text-[9px] sm:text-[9.5px] px-1.5 py-0.2 rounded bg-blue-50 text-blue-600 border border-blue-200/70">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Architectural Pricing Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {PLANS.map((plan) => {
            const displayPrice =
              billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 font-light ${
                  plan.popular
                    ? "bg-white [box-shadow:0_0_0_1.5px_#2563eb,0_8px_24px_rgba(37,99,235,0.08)]"
                    : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)] hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.12),0_8px_20px_rgba(0,0,0,.05)]"
                }`}
              >
                <div>
                  {/* Plan Header & Popular Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[17px] font-semibold text-zinc-950 tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-normal text-blue-600">
                        <HugeiconsIcon
                          icon={SparklesIcon}
                          size={10}
                          strokeWidth={1.8}
                        />
                        <span>Most popular</span>
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-[11px] text-blue-600 font-normal">
                    {plan.audience}
                  </p>

                  {/* Price Display */}
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold tracking-[-0.03em] text-zinc-950">
                      {displayPrice}
                    </span>
                    <span className="text-[11.5px] text-zinc-400">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-3 text-[12px] text-zinc-500 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button
                      href="/request-demo"
                      variant={plan.ctaVariant}
                      size="md"
                      className="w-full"
                    >
                      {plan.ctaLabel}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 pt-5 border-t border-zinc-100">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                      Included in {plan.name}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[11.5px] text-zinc-600"
                        >
                          <HugeiconsIcon
                            icon={CheckmarkBadge01Icon}
                            size={13}
                            strokeWidth={1.7}
                            className="text-blue-600 shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Subtle Security Note */}
                <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="inline-flex items-center gap-1">
                    <HugeiconsIcon
                      icon={Shield01Icon}
                      size={11}
                      strokeWidth={1.6}
                      className="text-zinc-400"
                    />
                    <span>Tenant-isolated vault</span>
                  </span>
                  <span className="font-mono">NDPA Art. 24</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
