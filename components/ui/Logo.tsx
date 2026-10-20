import Link from "next/link";

interface LogoProps {
  href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 group focus:outline-none"
    >
      {/* Standalone Sculptural Geometric Mark (Attio-style interlocking architectural planes, no box) */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-zinc-950 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
      >
        {/* Left ascending pillar */}
        <path
          d="M4 18.5L9.5 4.5H13L7.5 18.5H4Z"
          fill="currentColor"
        />
        {/* Right interlocking geometric wedge */}
        <path
          d="M12.5 10.5L16 4.5H19.5L14.2 13.5L12.5 10.5Z"
          fill="currentColor"
        />
        {/* Bottom anchored node */}
        <path
          d="M11 18.5L14.8 12H18.3L14.5 18.5H11Z"
          fill="currentColor"
        />
        {/* Precision accent dot */}
        <circle cx="19" cy="16.75" r="1.75" fill="#2563EB" />
      </svg>

      {/* Bold Tightly-Tracked Lowercase Wordmark: iroko-ai */}
      <span className="text-[20px] font-bold tracking-[-0.045em] text-zinc-950 leading-none">
        iroko-ai
      </span>
    </Link>
  );
}
