"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "blue" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: () => void | Promise<void>;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  isLoading = false,
  loadingText,
  disabled = false,
  onClick,
}: ButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false);

  const activeLoading = isLoading || internalLoading;

  const variants = {
    primary:
      "bg-zinc-900 text-white border border-zinc-900 hover:bg-zinc-800 shadow-xs",
    secondary:
      "bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 shadow-2xs",
    blue: "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 shadow-xs",
    ghost:
      "bg-transparent text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[11.5px] rounded-xl",
    md: "px-3.5 py-2 text-[12.5px] rounded-xl",
    lg: "px-4 py-2 text-[12.5px] rounded-xl",
  };

  const spinnerSize = size === "sm" ? 13 : 14;

  const classes = `inline-flex items-center justify-center gap-2 font-light tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-wait ${variants[variant]} ${sizes[size]} ${className}`;

  const content = activeLoading ? (
    <>
      <HugeiconsIcon
        icon={Loading03Icon}
        size={spinnerSize}
        strokeWidth={1.8}
        className="animate-spin shrink-0"
      />
      <span>{loadingText || children}</span>
    </>
  ) : (
    children
  );

  // Navigation Link buttons (Navbar, Hero, etc.) navigate immediately with no spinner
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const handleButtonClick = async () => {
    if (activeLoading || disabled) return;
    if (type === "submit") {
      if (onClick) {
        await onClick();
      }
      return;
    }
    if (onClick) {
      setInternalLoading(true);
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      await onClick();
      setInternalLoading(false);
    }
  };

  return (
    <button
      type={type}
      disabled={activeLoading || disabled}
      aria-busy={activeLoading}
      onClick={handleButtonClick}
      className={classes}
    >
      {content}
    </button>
  );
}
