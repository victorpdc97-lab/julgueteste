"use client";

import RevealSection from "./ui/RevealSection";

export default function Problem() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <RevealSection>
          <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-8">
            A verdade
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Quando trazemos essa frase para os dias atuais, com tanta
            informa&ccedil;&atilde;o, distra&ccedil;&atilde;o e correria, eu te pergunto:{" "}
            <span className="font-semibold text-cream">
              Voc&ecirc; tem tempo para ouvir uma pessoa aleat&oacute;ria que nunca viu?
            </span>
          </p>
        </RevealSection>

        <RevealSection delay={200}>
          <p className="text-3xl md:text-4xl font-bold text-cream mb-10">
            Provavelmente a sua resposta ser&aacute;:{" "}
            <span className="text-accent">N&Atilde;O</span>
          </p>
        </RevealSection>

        <RevealSection delay={300}>
          <p className="text-lg text-gray-light leading-relaxed mb-8">
            Por que mesmo sabendo disso, voc&ecirc; prefere continuar chegando
            em lugares sem ser notado, sentando em mesas sem ser ouvido e o
            pior, olhando no espelho e n&atilde;o sentindo que encontrou a sua
            melhor vers&atilde;o?
          </p>
        </RevealSection>

        <RevealSection delay={400}>
          <p className="text-lg text-foreground leading-relaxed">
            N&atilde;o se culpe, provavelmente voc&ecirc; &eacute; uma pessoa muito
            acostumada a servir os outros e conforme o tempo foi passando,
            acabou esquecendo do principal:{" "}
            <span className="font-bold text-accent text-xl">VOC&Ecirc;!</span>
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
