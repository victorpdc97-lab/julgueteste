"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL =
  "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function Argument() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl italic text-gray-light leading-relaxed">
                &ldquo;A verdade &eacute; que voc&ecirc; n&atilde;o tem tempo
                para ouvir uma pessoa aleat&oacute;ria que nunca viu.&rdquo;
              </p>
            </div>

            <div>
              <p className="text-xl md:text-2xl text-cream leading-relaxed font-medium">
                Ent&atilde;o crie uma primeira impress&atilde;o t&atilde;o
                impactante que ningu&eacute;m mais poder&aacute;{" "}
                <span className="text-accent">ignor&aacute;-lo.</span>
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
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
