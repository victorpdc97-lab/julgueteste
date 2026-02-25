"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL = "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function FinalCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#060a0a] to-[#080808]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <RevealSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-accent/30" />
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
              &Uacute;ltima chance
            </p>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-accent/30" />
          </div>
        </RevealSection>

        <RevealSection animation="scale" delay={100}>
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl scale-150" />
            <img
              src="/img/heitor2.webp"
              alt="Heitor Paradise"
              className="relative w-28 h-28 rounded-full object-cover border-2 border-accent/20 ring-4 ring-accent/5"
            />
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <p className="text-lg text-gray-light leading-relaxed mb-3">
            Se a sua resposta for:{" "}
            <span className="text-cream font-semibold">N&Atilde;O</span> &mdash;
            Significa que n&atilde;o est&aacute; pronto para uma evolu&ccedil;&atilde;o pessoal,
            prefere continuar gastando com coisas sup&eacute;rfluas e alguns prazeres
            moment&acirc;neos...
          </p>
          <p className="text-sm text-gray-light/60 mb-14">
            Se esse for o seu caso, te convido, educadamente, a sair agora mesmo
            desta p&aacute;gina!
          </p>
        </RevealSection>

        <RevealSection animation="scale" delay={350}>
          <div className="glass-accent rounded-2xl p-10 md:p-14 mb-12">
            <p className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-cream leading-snug italic">
              Voc&ecirc; n&atilde;o veio a este mundo
              <br />
              para querer <span className="gradient-text not-italic">pouco.</span>
            </p>
            <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-gray-light mt-4 italic">
              Voc&ecirc; merece o melhor.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={500}>
          <CtaButton href={CHECKOUT_URL}>
            Eu quero desconto de lan&ccedil;amento &rarr;
          </CtaButton>
        </RevealSection>
      </div>
    </section>
  );
}
