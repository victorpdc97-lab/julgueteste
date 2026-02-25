"use client";

import { ReactNode, useRef } from "react";

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
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (btn) btn.style.transform = "translate(0, 0) scale(1)";
  };

  if (variant === "secondary") {
    return (
      <a
        ref={btnRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`magnetic-btn relative inline-flex items-center justify-center font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide rounded-full px-8 py-4 border border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-btn relative inline-flex items-center justify-center font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide rounded-full overflow-hidden group ${className}`}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent p-[2px]">
        <span className="absolute inset-[2px] rounded-full bg-[#080808] group-hover:bg-[#0a0a0a] transition-colors duration-300" />
      </span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/20 blur-xl" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 px-8 py-4 text-accent group-hover:text-accent-light transition-colors duration-300">
        {children}
      </span>

      {/* Shimmer */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_ease] z-20 pointer-events-none" />
    </a>
  );
}
