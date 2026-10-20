"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WavingDotsBackground } from "@/components/ui/WavingDotsBackground";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col justify-between overflow-hidden font-light">
      {/* Waving Dots strictly around the outer edges (transparent_48% in the center) */}
      <WavingDotsBackground maskMode="center" />

      {/* Clean Top Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-3 text-[11.5px] sm:text-[12px]">
          <span className="text-zinc-400 hidden sm:inline">
            Don&apos;t have an account?
          </span>
          <Button href="/request-demo" variant="secondary" size="sm">
            Request access
          </Button>
        </div>
      </header>

      {/* Centered Enterprise Sign-In Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-3.5 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-[390px] bg-white rounded-2xl border border-zinc-200/85 p-5 sm:p-7 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_4px_16px_rgba(0,0,0,.04),0_16px_36px_rgba(0,0,0,.04)]">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Sign in to your workspace
            </h1>
            <p className="mt-1.5 text-[12px] sm:text-[13px] text-zinc-500">
              Enter your institutional work email to continue.
            </p>
          </div>

          {submitted ? (
            <div className="mt-6 sm:mt-7 rounded-2xl border border-zinc-200/90 bg-zinc-50/60 p-5 sm:p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto shadow-xs">
                <HugeiconsIcon
                  icon={Tick02Icon}
                  size={18}
                  strokeWidth={2}
                />
              </div>
              <p className="text-[13px] sm:text-[13.5px] font-medium text-zinc-950">
                Check your work email
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-zinc-500 leading-relaxed">
                We sent a temporary sign-in link to{" "}
                <span className="text-zinc-900 font-normal break-all">{email}</span>.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Use a different email
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 sm:mt-7 space-y-4 sm:space-y-5">
              {/* SSO Button First */}
              <Button
                onClick={() => router.push("/request-demo")}
                variant="secondary"
                size="md"
                className="w-full h-9.5 sm:h-10 text-[12px] sm:text-[12.5px]"
              >
                Continue with Enterprise SSO
              </Button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-zinc-200/80 w-full" />
                <span className="bg-white px-3 text-[10px] sm:text-[10.5px] uppercase tracking-wider text-zinc-400">
                  or
                </span>
                <div className="border-t border-zinc-200/80 w-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700 mb-1"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-[11px] sm:text-[11.5px] font-normal text-zinc-700"
                    >
                      Password
                    </label>
                    <Link
                      href="/request-demo"
                      className="text-[10.5px] sm:text-[11px] text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full h-9.5 sm:h-10 rounded-xl border border-zinc-200/90 bg-white px-3 sm:px-3.5 text-[12px] sm:text-[12.5px] text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  loadingText="Signing in..."
                  className="w-full h-9.5 sm:h-10 text-[12px] sm:text-[12.5px] mt-1"
                >
                  Sign in
                </Button>
              </form>
            </div>
          )}

          <p className="mt-6 sm:mt-8 text-center text-[10.5px] sm:text-[11px] text-zinc-400 leading-relaxed">
            By signing in, you agree to our institutional terms of service and
            NDPA data processing addendum.
          </p>
        </div>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:h-14 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-[10.5px] sm:text-[11px] text-zinc-400 border-t border-zinc-100 bg-white/80">
        <span>© 2026 Iroko-AI</span>
        <span>CBN · SEC · NDPA Compliant</span>
      </footer>
    </div>
  );
}
