"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    question:
      "How does Iroko-AI prevent hallucinations on CBN, SEC, and NDPA circulars?",
    answer:
      "Iroko-AI enforces a strict cite-first retrieval architecture. Agent 01 (Researcher) only synthesizes answers from verified paragraphs inside your indexed policies and official regulatory circulars—attaching the exact document title, page number, and section clause to every claim. If a source clause does not exist in the vault, Iroko refuses to guess.",
  },
  {
    question: "What happens during the free 30-day guided pilot?",
    answer:
      "During your 30-day pilot, our compliance engineers help you upload up to 50 internal policy manuals, AML frameworks, and prudential templates into your isolated workspace. Your team gets full access to all 5 AI agents, multilingual queries, and one-click examiner exports so you can measure time saved before committing to a plan.",
  },
  {
    question:
      "Are our internal bank policies or customer records ever used to train AI models?",
    answer:
      "Never. Every institution operates in a strict tenant-isolated vector vault encrypted with AES-256. We maintain zero-data-retention agreements with upstream model providers, and your documents, financial ratios, and queries are never used to train external AI models.",
  },
  {
    question:
      "Which languages can our compliance and branch officers use to query Iroko-AI?",
    answer:
      "Officers can ask questions in English, Nigerian Pidgin, Yoruba, Hausa, and Igbo. Regardless of the query language, Iroko-AI cross-examines the official English statutory circulars and returns clear explanations anchored to the exact regulatory clause.",
  },
  {
    question:
      "How does the SHA-256 audit trail help during CBN or NDPC inspections?",
    answer:
      "Every document upload, compliance query, AI citation, and Chief Compliance Officer sign-off is hashed and linked to the preceding record (`prev_hash → curr_hash`). When examiners visit, you can export a tamper-evident PDF or CSV packet proving when and how each compliance review was conducted.",
  },
  {
    question:
      "Can we deploy Iroko-AI inside our own private cloud (VPC) or on-premise server?",
    answer:
      "Yes. Our Enterprise plan supports single-tenant VPC deployment (AWS, Azure, or GCP) as well as on-premise installation for commercial banks, holding companies, and institutions with strict internal data-sovereignty mandates.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="w-full bg-white border-t border-zinc-200/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Common questions"
          title="Clear answers for compliance and engineering teams."
          description="Everything you need to know about cite-first accuracy, tenant data isolation, and how our 30-day guided pilot works."
        />

        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto divide-y divide-zinc-200/80 rounded-xl sm:rounded-2xl border border-zinc-200/85 bg-white px-4 sm:px-8 shadow-2xs">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-4 sm:py-5 font-light">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer group"
                >
                  <span className="text-[13.5px] sm:text-[15.5px] font-medium text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 sm:w-7 h-6 sm:h-7 rounded-lg border border-zinc-200/80 bg-zinc-50 flex items-center justify-center text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 border-blue-200 text-blue-600 bg-blue-50/50" : ""
                    }`}
                  >
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={13}
                      strokeWidth={1.7}
                    />
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2.5 sm:mt-3 pr-2 sm:pr-8 text-[12px] sm:text-[13.5px] text-zinc-500 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
