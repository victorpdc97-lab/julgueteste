"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationType = "up" | "left" | "right" | "scale";

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  animation?: AnimationType;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function RevealSection({
  children,
  delay = 0,
  animation = "up",
  className = "",
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  );
}
