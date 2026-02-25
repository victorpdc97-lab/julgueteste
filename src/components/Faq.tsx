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

function FaqItem({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-cream group-hover:text-accent transition-colors pr-4">
          {faq.question}
        </span>
        <span
          className={`text-accent text-xl shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-light text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-12">
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-4">
              D&uacute;vidas frequentes
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-cream">
              FAQ
            </h2>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} faq={faq} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
