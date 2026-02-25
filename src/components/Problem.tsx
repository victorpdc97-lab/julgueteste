"use client";

import RevealSection from "./ui/RevealSection";
import FloatingShapes from "./ui/FloatingShapes";

export default function Problem() {
  return (
    <section className="relative py-28 bg-mesh-accent overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section label */}
        <RevealSection>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-accent/30" />
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
              A verdade
            </p>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-accent/30" />
          </div>
        </RevealSection>

        {/* Main question */}
        <RevealSection delay={100}>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center mb-6">
            Quando trazemos essa frase para os dias atuais, com tanta
            informa&ccedil;&atilde;o, distra&ccedil;&atilde;o e correria, eu te pergunto:
          </p>
        </RevealSection>

        {/* Highlighted question */}
        <RevealSection animation="scale" delay={200}>
          <div className="glass-accent rounded-2xl p-8 md:p-12 text-center mb-10">
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl text-cream leading-snug italic">
              Voc&ecirc; tem tempo para ouvir uma pessoa aleat&oacute;ria que nunca viu?
            </p>
            <div className="mt-6 inline-block">
              <span className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold gradient-text">
                N&Atilde;O
              </span>
            </div>
          </div>
        </RevealSection>

        {/* Pain points */}
        <RevealSection delay={300}>
          <p className="text-lg text-gray-light leading-relaxed text-center mb-8">
            Por que mesmo sabendo disso, voc&ecirc; prefere continuar chegando
            em lugares <span className="text-cream font-medium">sem ser notado</span>,
            sentando em mesas <span className="text-cream font-medium">sem ser ouvido</span> e
            o pior, olhando no espelho e <span className="text-cream font-medium">n&atilde;o
            sentindo que encontrou a sua melhor vers&atilde;o</span>?
          </p>
        </RevealSection>

        {/* Empathy */}
        <RevealSection delay={400}>
          <div className="relative text-center">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-12 bg-accent/5 rounded-full blur-xl" />
            <p className="text-lg text-foreground leading-relaxed relative">
              N&atilde;o se culpe, provavelmente voc&ecirc; &eacute; uma pessoa muito
              acostumada a servir os outros e conforme o tempo foi passando,
              acabou esquecendo do principal:{" "}
            </p>
            <span className="inline-block mt-4 font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold gradient-text">
              VOC&Ecirc;!
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
