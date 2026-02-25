import { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide rounded-full transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-accent text-background px-8 py-4 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(10,186,181,0.3)]",
    secondary:
      "border border-accent/30 text-accent px-8 py-4 hover:bg-accent/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_0.8s_ease]" />
      )}
    </a>
  );
}
