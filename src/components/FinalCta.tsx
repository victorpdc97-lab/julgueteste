"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL =
  "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function FinalCta() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <RevealSection>
          <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-8">
            &Uacute;ltima chance
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="flex justify-center mb-8">
            <img
              src="/img/heitor2.webp"
              alt="Heitor Paradise"
              className="w-24 h-24 rounded-full object-cover grayscale-[20%] border-2 border-accent/20"
            />
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <p className="text-lg text-gray-light leading-relaxed mb-4">
            Se a sua resposta for: <span className="text-cream font-semibold">N&Atilde;O</span> — Significa
            que n&atilde;o est&aacute; pronto para uma evolu&ccedil;&atilde;o pessoal, prefere
            continuar gastando com coisas sup&eacute;rfluas e alguns prazeres
            momentâneos...
          </p>
          <p className="text-sm text-gray-light mb-10">
            Se esse for o seu caso, te convido, educadamente, a sair agora mesmo
            desta p&aacute;gina!
          </p>
        </RevealSection>

        <RevealSection delay={300}>
          <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-cream mb-10 italic">
            Voc&ecirc; n&atilde;o veio a este mundo para querer pouco.
            <br />
            Voc&ecirc; merece o melhor.
          </p>
        </RevealSection>

        <RevealSection delay={400}>
          <CtaButton href={CHECKOUT_URL}>
            Eu quero desconto de lan&ccedil;amento &rarr;
          </CtaButton>
        </RevealSection>
      </div>
    </section>
  );
}
