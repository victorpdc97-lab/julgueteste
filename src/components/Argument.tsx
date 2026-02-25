"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL = "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function Argument() {
  return (
    <section className="relative py-28 bg-gradient-deep overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* Left card - the question */}
          <RevealSection animation="left">
            <div className="glass rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/50 via-accent/10 to-transparent" />
              <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.3em] text-gray-light mb-4 block">
                O problema
              </span>
              <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl italic text-gray-light leading-relaxed">
                &ldquo;A verdade &eacute; que voc&ecirc; n&atilde;o tem tempo
                para ouvir uma pessoa aleat&oacute;ria que nunca viu.&rdquo;
              </p>
            </div>
          </RevealSection>

          {/* Right card - the answer */}
          <RevealSection animation="right" delay={200}>
            <div className="glass-accent rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-accent via-accent/30 to-transparent" />
              <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">
                A solu&ccedil;&atilde;o
              </span>
              <p className="text-xl md:text-2xl text-cream leading-relaxed font-medium">
                Ent&atilde;o crie uma primeira impress&atilde;o t&atilde;o
                impactante que ningu&eacute;m mais poder&aacute;{" "}
                <span className="gradient-text font-bold">ignor&aacute;-lo.</span>
              </p>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={400}>
          <div className="mt-16 text-center">
            <CtaButton href={CHECKOUT_URL}>
              Eu quero desconto de lan&ccedil;amento &rarr;
            </CtaButton>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
