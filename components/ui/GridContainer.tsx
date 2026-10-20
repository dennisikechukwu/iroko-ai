import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  showCrosshairs?: boolean;
}

export function GridContainer({
  children,
  className = "",
  dark = false,
  showCrosshairs = true,
}: GridContainerProps) {
  const borderClass = dark ? "border-grid-dark" : "border-grid";
  const crosshairColor = dark ? "text-mint/40" : "text-ink/30";

  return (
    <div
      className={`relative max-w-7xl mx-auto border-x ${borderClass} ${className}`}
    >
      {showCrosshairs && (
        <>
          <span
            aria-hidden="true"
            className={`pointer-events-none select-none absolute -top-2 -left-[4.5px] font-mono text-xs leading-none ${crosshairColor}`}
          >
            +
          </span>
          <span
            aria-hidden="true"
            className={`pointer-events-none select-none absolute -top-2 -right-[4.5px] font-mono text-xs leading-none ${crosshairColor}`}
          >
            +
          </span>
        </>
      )}
      {children}
    </div>
  );
}
