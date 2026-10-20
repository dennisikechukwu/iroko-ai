"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Platform", href: "/#platform", hasDropdown: true },
  { label: "5 AI Agents", href: "/#agents", hasDropdown: true },
  { label: "Audit Trail", href: "/#audit-trail", hasDropdown: false },
  { label: "Solutions", href: "/#solutions", hasDropdown: false },
  { label: "Pricing", href: "/#pricing", hasDropdown: false },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on Escape key and prevent background scroll while open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full relative bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-3.5 sm:px-6 lg:px-8">
          {/* Left: Logo + Nav Links (Attio Layout) */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Logo />

            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-0.5"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-lg text-[12.5px] font-light text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={12}
                      strokeWidth={1.6}
                      className="text-zinc-400"
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Sign in + Start for free / Pilot CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button href="/login" variant="secondary" size="sm">
              Sign in
            </Button>
            <Button href="/request-demo" variant="primary" size="sm">
              Start 30-day pilot
            </Button>
          </div>

          {/* Mobile Menu Button with comfortable tap target & touch feedback */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-xl border border-zinc-200/90 bg-white flex items-center justify-center text-zinc-800 shadow-2xs active:bg-zinc-100 transition-colors cursor-pointer"
          >
            <HugeiconsIcon
              icon={mobileOpen ? Cancel01Icon : Menu01Icon}
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Mobile Dropdown — Absolute Overlay (Does NOT push Hero down) */}
        {mobileOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-zinc-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.1)] px-4 py-4 space-y-3 transition-all duration-200 ease-out"
          >
            <div className="flex flex-col space-y-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-[13px] font-light text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 active:bg-zinc-100 flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={13}
                      strokeWidth={1.6}
                      className="text-zinc-400"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
              <Button
                href="/login"
                variant="secondary"
                size="md"
                className="w-full h-10 text-[12.5px]"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Button>
              <Button
                href="/request-demo"
                variant="primary"
                size="md"
                className="w-full h-10 text-[12.5px]"
                onClick={() => setMobileOpen(false)}
              >
                Start 30-day pilot
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop overlay when mobile dropdown is open — clicking/tapping anywhere outside closes it */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-14 z-40 bg-zinc-950/25 backdrop-blur-2xs md:hidden transition-opacity duration-200"
          onClick={() => setMobileOpen(false)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setMobileOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
