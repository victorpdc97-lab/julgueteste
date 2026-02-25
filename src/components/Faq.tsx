"use client";

import { useState } from "react";
import RevealSection from "./ui/RevealSection";

const FAQS = [
  {
    question: "Qual o valor do guia \"Julgue o Livro Pela Capa\"?",
    answer:
      "O investimento é de R$49,90 (pagamento único) via Pix ou parcelado em até 3x de R$16,63 no cartão de crédito.",
  },
  {
    question: "Achei barato, o material é de qualidade?",
    answer:
      "Diferente de gurus e falsos coachs que estão inundando o mercado com informações \"copia e cola\", sem embasamento, sem estudos, sem testes na prática, eu decidi disponibilizar esse livro compactado, com tudo que estudei ao longo de 10 anos relacionados a moda masculina e não, não virei um infoprodutor, simplesmente decidi aumentar o nível de consciência dos clientes Paradise e dos milhares de homens modernos que acompanham nossas páginas. Os custos e horas investidas para desenvolver esse material foram altíssimos e por isso não existiria um valor exato se a intenção fosse visar o lucro. Inclusive, em primeiro momento, seria totalmente gratuito, mas um amigo/cliente me deu o toque de que as pessoas não valorizam o que é de graça, com isso acabariam não lendo, o contrário acontece quando pagamos por algo!",
  },
  {
    question: "Posso comprar o guia para o meu filho, marido ou namorado?",
    answer:
      "Deve! Apesar de ser um guia masculino, alguns homens se recusam por achar que cuidados e vaidades masculinas são algo negativo. Você irá fazer uma excelente atitude em presentear quem você ama. Lembre-se de preencher o e-mail dele no ato da compra para que ele receba todas as instruções de acesso após a confirmação do pagamento.",
  },
  {
    question: "Posso devolver?",
    answer:
      "A sua devolução é garantida por lei dentro de 7 dias após a compra, para qualquer produto adquirido em território nacional. No caso deste livro, preferi não criar nenhum mecanismo de avanço da jornada, pois confio tanto na qualidade do material que se, por qualquer motivo, você não gostar, pode solicitar a devolução do seu $$$, sem perder o acesso ao guia. Sei também que pessoas mal intencionadas irão aproveitar deste recurso, mas não tem problema, sigo no caminho de ser abundante na vida de todos, inclusive das pessoas ruins!",
  },
  {
    question: "Como terei acesso ao guia?",
    answer:
      "Você receberá o seu livro via correios com frete grátis.",
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
          open ? "max-h-96" : "max-h-0"
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
