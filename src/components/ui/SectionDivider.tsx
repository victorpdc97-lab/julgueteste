interface SectionDividerProps {
  variant?: "wave" | "angle" | "glow";
  flip?: boolean;
}

export default function SectionDivider({
  variant = "glow",
  flip = false,
}: SectionDividerProps) {
  if (variant === "glow") {
    return (
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
            className="text-[#080808]"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 40" className="w-full h-[40px]" preserveAspectRatio="none">
        <polygon points="0,40 1440,0 1440,40" fill="currentColor" className="text-[#080808]" />
      </svg>
    </div>
  );
}
