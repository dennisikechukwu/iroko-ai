"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WavingDotsBackground } from "@/components/ui/WavingDotsBackground";
import {
  PilotSuccessCard,
  type PilotSubmissionData,
} from "@/components/marketing/PilotSuccessCard";

const PILOT_HIGHLIGHTS = [
  "Dedicated, tenant-isolated workspace for your institution",
  "Full access to all 5 AI compliance agents for 30 days",
  "Guided setup on your own policies and CBN/SEC circulars",
];

export function DemoBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] =
    useState<PilotSubmissionData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: PilotSubmissionData = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      workEmail: String(formData.get("workEmail") || ""),
      companyName: String(formData.get("companyName") || ""),
      licenceType: String(formData.get("licenceType") || ""),
      role: String(formData.get("role") || ""),
    };

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(payload);
    }, 650);
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-20 lg:py-28 overflow-hidden font-light">
      <WavingDotsBackground maskMode="center" />

      <div className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 Cols): Minimal, Airy Attio Copy */}
          <div className="lg:col-span-5">
            <Badge variant="pill">30-day guided pilot</Badge>

            <h1 className="mt-4 sm:mt-5 text-[24px] xs:text-[28px] sm:text-3xl lg:text-[42px] font-bold tracking-[-0.035em] text-zinc-950 leading-[1.12] sm:leading-[1.08]">
              Start your 30-day guided pilot.
            </h1>

            <p className="mt-3 sm:mt-4 text-[13.5px] sm:text-[15.5px] text-zinc-500 leading-relaxed max-w-md">
              Validate Iroko-AI on your own policies and regulatory circulars
              inside a private workspace configured for your licence.
            </p>

            {/* 3 Clean Bullets Only */}
            <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3.5">
              {PILOT_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[12.5px] sm:text-[13px] text-zinc-700"
                >
                  <HugeiconsIcon
                    icon={CheckmarkBadge01Icon}
                    size={15}
                    strokeWidth={1.7}
                    className="text-blue-600 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-zinc-200/70 text-[11.5px] sm:text-[12px] text-zinc-400">
              Direct inquiries:{" "}
              <a
                href="mailto:ekeh@irokoai.site"
                className="text-zinc-700 hover:text-zinc-950 underline underline-offset-4 transition-colors"
              >
                ekeh@irokoai.site
              </a>
            </p>
          </div>

          {/* Right Column (7 Cols): Clean Enterprise Intake Form OR Meticulous PilotSuccessCard */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200/90 bg-white p-4 sm:p-8 lg:p-10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_4px_12px_rgba(0,0,0,.04),0_20px_40px_rgba(0,0,0,.04)]">
            {submittedData ? (
              <PilotSuccessCard
                data={submittedData}
                onReset={() => setSubmittedData(null)}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="pb-3 sm:pb-4 border-b border-zinc-100">
                  <h2 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-950">
                    Institution details
                  </h2>
                  <p className="mt-0.5 text-[11.5px] sm:text-[12px] text-zinc-500">
                    Tell us about your team so we can pre-load the right
                    regulatory circulars.
                  </p>
                </div>

                {/* Row 1: First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Chidi"
                      className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Okafor"
                      className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 2: Work Email & Institution Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      Work email
                    </label>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      placeholder="chidi@yourbank.com.ng"
                      className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      Institution name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="Apex Microfinance Bank"
                      className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 3: Regulatory Licence & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="licenceType"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      Regulatory licence
                    </label>
                    <div className="relative">
                      <select
                        id="licenceType"
                        name="licenceType"
                        className="w-full h-9.5 sm:h-10 appearance-none rounded-xl border border-zinc-200/90 bg-white pl-3 sm:pl-3.5 pr-8 sm:pr-9 text-[12px] sm:text-[12.5px] text-zinc-950 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                      >
                        <option>Microfinance Bank (MFB)</option>
                        <option>Fintech / PSB / Payment Gateway</option>
                        <option>SEC Capital Market Operator</option>
                        <option>Commercial Bank / HoldCo</option>
                      </select>
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        size={14}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                    >
                      Your role
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        className="w-full h-9.5 sm:h-10 appearance-none rounded-xl border border-zinc-200/90 bg-white pl-3 sm:pl-3.5 pr-8 sm:pr-9 text-[12px] sm:text-[12.5px] text-zinc-950 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                      >
                        <option>Chief Compliance Officer (CCO)</option>
                        <option>Head of Risk / Internal Audit</option>
                        <option>MD / CEO / Executive Director</option>
                        <option>CTO / VP Engineering</option>
                        <option>Legal &amp; Data Protection Officer</option>
                      </select>
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        size={14}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 4: Compliance Priorities */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                  >
                    How can our team help?{" "}
                    <span className="text-zinc-400">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Tell us which regulatory circulars, prudential returns, or AML workflows you want to evaluate first..."
                    className="w-full rounded-xl border border-zinc-200/90 bg-white p-3 sm:p-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Full-Width Primary Submit Button */}
                <div className="pt-1 sm:pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    loadingText="Provisioning pilot workspace..."
                    className="w-full h-9.5 sm:h-10 text-[12px] sm:text-[12.5px]"
                  >
                    Request 30-day pilot
                  </Button>
                  <p className="mt-2.5 sm:mt-3 text-center text-[10.5px] sm:text-[11px] text-zinc-400">
                    No credit card required · Provisioned within 24 hours
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
