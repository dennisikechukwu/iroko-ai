import { HugeiconsIcon } from "@hugeicons/react";
import { Image01Icon } from "@hugeicons/core-free-icons";

interface ImagePlaceholderProps {
  label: string;
  dimensions?: string;
  description?: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  dimensions = "1200 × 760 PX",
  description = "Drop your custom product visual, screenshot, or team photo here",
  aspectRatio = "aspect-[16/10]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl border border-zinc-200/90 bg-zinc-50/60 p-4 flex flex-col justify-between overflow-hidden font-light ${className}`}
    >
      {/* Top Info Pills */}
      <div className="flex items-center justify-between gap-2 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-[10px] text-zinc-600 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          {label}
        </span>
        <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[9.5px] text-zinc-400">
          {dimensions}
        </span>
      </div>

      {/* Soft Dashed Inner Frame */}
      <div className="my-3 flex-1 rounded-xl border border-dashed border-zinc-300/90 bg-white/80 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-blue-600 mb-2.5 shadow-2xs">
          <HugeiconsIcon icon={Image01Icon} size={18} strokeWidth={1.5} />
        </div>
        <p className="text-[12.5px] font-normal text-zinc-900">{label}</p>
        <p className="mt-1 text-[10.5px] text-zinc-500 max-w-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Subtle Caption */}
      <div className="flex items-center justify-between text-[10px] text-zinc-400 px-1">
        <span>Image placeholder frame</span>
        <span className="text-blue-600">Ready to swap</span>
      </div>
    </div>
  );
}
