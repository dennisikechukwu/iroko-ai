import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`flex flex-col max-w-3xl ${alignment}`}>
      <Badge variant="pill">{badge}</Badge>

      <h2 className="mt-4 sm:mt-5 text-[22px] xs:text-[24px] sm:text-3xl lg:text-[40px] font-bold tracking-tight text-zinc-950 leading-[1.15] sm:leading-[1.08]">
        {title}
      </h2>

      {description && (
        <p className="mt-2.5 sm:mt-3.5 text-[13px] sm:text-[15.5px] lg:text-[16px] text-zinc-500 font-light leading-relaxed max-w-2xl px-1 sm:px-0">
          {description}
        </p>
      )}
    </div>
  );
}
