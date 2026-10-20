import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "pill" | "blue" | "subtle";
  className?: string;
}

export function Badge({
  children,
  variant = "pill",
  className = "",
}: BadgeProps) {
  if (variant === "pill") {
    return (
      <div
        className={`relative inline-flex max-w-full overflow-hidden rounded-full p-px bg-zinc-200/90 shadow-2xs ${className}`}
      >
        {/* Continuous 360° circling Attio-blue border beam */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_72%,#3b82f6_86%,#38bdf8_96%,transparent_100%)]"
        />
        <span className="relative z-10 inline-flex max-w-full items-center gap-1.5 rounded-full bg-white px-3 sm:px-3.5 py-1 text-[9.5px] sm:text-[10.5px] font-light text-zinc-600 truncate sm:whitespace-normal">
          {children}
        </span>
      </div>
    );
  }

  const styles = {
    blue: "rounded-full border border-blue-200 bg-blue-50 text-blue-600 px-2 sm:px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-light",
    subtle:
      "rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 px-2 py-0.5 text-[9.5px] sm:text-[10.5px] font-light",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
