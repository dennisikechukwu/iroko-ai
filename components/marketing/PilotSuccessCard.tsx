"use client";

import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

export interface PilotSubmissionData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  licenceType: string;
  role: string;
}

interface PilotSuccessCardProps {
  data: PilotSubmissionData;
  onReset: () => void;
}

export function PilotSuccessCard({ data, onReset }: PilotSuccessCardProps) {
  const [visible, setVisible] = useState(false);
  const onResetRef = useRef(onReset);
  onResetRef.current = onReset;

  useEffect(() => {
    const enterTimer = window.setTimeout(() => {
      setVisible(true);
    }, 20);

    const exitTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2650);

    const resetTimer = window.setTimeout(() => {
      onResetRef.current();
    }, 3000);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(resetTimer);
    };
  }, []);

  return (
    <div
      className={`min-h-[320px] sm:min-h-[400px] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12 font-light transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-2 scale-[0.98]"
      }`}
    >
      {/* Simple, Professional Black Success Mark */}
      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
        <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-xs">
          <HugeiconsIcon icon={Tick02Icon} size={18} strokeWidth={2} />
        </div>
      </div>

      {/* Short, Brief Message Underneath */}
      <h2 className="mt-4 sm:mt-5 text-[17px] sm:text-lg font-semibold tracking-tight text-zinc-950">
        Pilot request received
      </h2>
      <p className="mt-1.5 text-[12px] sm:text-[13px] text-zinc-500 max-w-xs leading-relaxed">
        We&apos;ve sent your confirmation and onboarding details to{" "}
        <span className="text-zinc-900 font-normal break-all">
          {data.workEmail || "your email"}
        </span>
        .
      </p>
    </div>
  );
}
