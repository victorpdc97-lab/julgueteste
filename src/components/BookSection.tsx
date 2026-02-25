"use client";

import RevealSection from "./ui/RevealSection";

const MODULES = [
  { num: "01", title: "Gordinhos — tudo sobre" },
  { num: "02", title: "Magros — tudo sobre" },
  { num: "03", title: "Altos — tudo sobre" },
  { num: "04", title: "Baixos — tudo sobre" },
  { num: "05", title: "Blazer, sociais, calças e bermudas" },
  { num: "06", title: "Camisetas, regatas e gravatas" },
  { num: "07", title: "Calçados, chinelos e acessórios" },
  { num: "08", title: "7 estilos universais" },
  { num: "09", title: "Trocas inteligentes" },
  { num: "10", title: "Como montar um armário cápsula" },
];

export default function BookSection() {
  return (
    <section id="guia" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Book Image */}
          <RevealSection>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] w-[300px] h-[300px] m-auto" />
              <img
                src="/img/capa.webp"
                alt="Capa do guia Julgue o Livro Pela Capa"
                className="relative z-10 max-w-[320px] w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </RevealSection>

          {/* Modules */}
          <RevealSection delay={200}>
            <div>
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-4">
                O que voc&ecirc; vai encontrar
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-cream mb-8">
                10 m&oacute;dulos completos
              </h2>

              <div className="space-y-0">
                {MODULES.map((mod) => (
                  <div
                    key={mod.num}
                    className="flex items-center gap-4 py-3 border-b border-white/5 group"
                  >
                    <span className="font-[family-name:var(--font-heading)] text-xs text-accent/60 font-medium w-6">
                      {mod.num}
                    </span>
                    <span className="text-foreground group-hover:text-cream transition-colors">
                      {mod.title}
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
