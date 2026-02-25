"use client";

import { useState } from "react";
import RevealSection from "./ui/RevealSection";

const MODULES = [
  { num: "01", title: "7 estilos universais", category: "Estilo" },
  { num: "02", title: "Combinação de cores", category: "Estilo" },
  { num: "03", title: "Homens gordinhos", category: "Biotipo" },
  { num: "04", title: "Homens magros", category: "Biotipo" },
  { num: "05", title: "Homens altos", category: "Biotipo" },
  { num: "06", title: "Homens baixos", category: "Biotipo" },
  { num: "07", title: "Armário cápsula versátil", category: "Versatilidade" },
  { num: "08", title: "Peça por peça", category: "Peças" },
  { num: "09", title: "Acessórios", category: "Peças" },
  { num: "10", title: "Trocas inteligentes", category: "Estilo" },
];

export default function BookSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="guia" className="relative py-28 bg-mesh-rich overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Book Image with effects */}
          <RevealSection animation="left">
            <div className="relative flex justify-center">
              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] animate-pulse" />
              </div>
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] rounded-full border border-accent/10 float-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[340px] h-[340px] rounded-full border border-accent/5 float-medium" />
              </div>
              {/* Book */}
              <img
                src="/img/capa.webp"
                alt="Capa do guia Julgue o Livro Pela Capa"
                className="relative z-10 max-w-[300px] w-full drop-shadow-[0_20px_60px_rgba(10,186,181,0.2)] hover:scale-105 hover:-rotate-1 transition-all duration-700 cursor-pointer"
              />
            </div>
          </RevealSection>

          {/* Modules */}
          <RevealSection animation="right" delay={200}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 max-w-[40px] bg-accent/30" />
                <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
                  O que voc&ecirc; vai encontrar
                </p>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-cream mb-10">
                10 m&oacute;dulos <span className="italic gradient-text">completos</span>
              </h2>

              <div className="space-y-0">
                {MODULES.map((mod, i) => (
                  <div
                    key={mod.num}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex items-center gap-4 py-4 border-b border-white/5 transition-all duration-300 cursor-default group ${
                      hoveredIndex === i ? "pl-3 bg-accent/[0.03]" : "pl-0"
                    }`}
                  >
                    <span
                      className={`font-[family-name:var(--font-heading)] text-xs font-medium w-8 transition-colors duration-300 ${
                        hoveredIndex === i ? "text-accent" : "text-accent/40"
                      }`}
                    >
                      {mod.num}
                    </span>
                    <span className="flex-1 text-foreground group-hover:text-cream transition-colors duration-300">
                      {mod.title}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-wider transition-all duration-300 ${
                        hoveredIndex === i
                          ? "opacity-100 text-accent/60"
                          : "opacity-0"
                      }`}
                    >
                      {mod.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
