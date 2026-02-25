"use client";

import { useState } from "react";
import RevealSection from "./ui/RevealSection";

const FAQS = [
  {
    question: "O guia serve para qualquer biotipo?",
    answer:
      "Sim! Os primeiros 4 módulos são dedicados exclusivamente a tipos corporais diferentes: gordinhos, magros, altos e baixos. Cada um com dicas específicas.",
  },
  {
    question: "Preciso gastar muito com roupas novas?",
    answer:
      "Não. O módulo de Trocas Inteligentes ensina como substituir peças estrategicamente. Muitos clientes gastaram menos de R$400 e transformaram o visual.",
  },
  {
    question: "O acesso é imediato?",
    answer:
      "Sim. Após a confirmação do pagamento, você recebe o acesso digital imediato por email. No Pix, é instantâneo.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor. Sem perguntas.",
  },
  {
    question: "É só um PDF?",
    answer:
      "É um guia digital de 85 páginas com conteúdo prático e visual. Material condensado de 10 anos de consultoria, não um ebook genérico.",
  },
  {
    question: "Serve para quem já se veste bem?",
    answer:
      'Como disse o Daniel (advogado, 31 anos): "Percebi que me vestia certo pra 2015." O guia atualiza seu repertório com trocas inteligentes.',
  },
];

function FaqItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-transparent rounded-xl transition-all duration-300 ${
        open ? "glass-accent" : "hover:bg-white/[0.02]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <div className="flex items-center gap-4 pr-4">
          <span
            className={`font-[family-name:var(--font-heading)] text-xs font-medium transition-colors duration-300 ${
              open ? "text-accent" : "text-accent/40"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`transition-colors duration-300 ${
              open ? "text-cream" : "text-foreground group-hover:text-cream"
            }`}
          >
            {faq.question}
          </span>
        </div>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm ${
            open
              ? "bg-accent/20 text-accent rotate-45"
              : "bg-white/5 text-gray-light group-hover:bg-accent/10 group-hover:text-accent"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-light text-sm leading-relaxed px-5 pb-5 pl-14">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative py-28 bg-gradient-deep overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-2xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-accent/30" />
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
                D&uacute;vidas frequentes
              </p>
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-accent/30" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-cream">
              FAQ
            </h2>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
