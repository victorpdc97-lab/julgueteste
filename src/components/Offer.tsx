"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL =
  "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function Offer() {
  return (
    <section id="oferta" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="text-center font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-cream mb-16 italic">
            Voc&ecirc; toparia economizar R$1,66 durante 30 dias para mudar o
            resto da sua vida?
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Left - Dark */}
          <RevealSection>
            <div className="bg-white/[0.02] border border-white/5 p-10 md:p-12 flex flex-col justify-center h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/img/heitor3.webp"
                  alt="Heitor Paradise"
                  className="w-16 h-16 rounded-full object-cover grayscale-[30%] border border-white/10"
                />
                <div>
                  <p className="text-cream font-medium">Heitor Paradise</p>
                  <p className="text-gray-light text-sm">
                    Especialista em moda masculina
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-4">
                Guia completo &mdash; 85 p&aacute;ginas
              </h3>

              <ul className="space-y-3 text-foreground text-sm mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  10 m&oacute;dulos de conte&uacute;do pr&aacute;tico
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  Material dos consultores Paradise
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  Acesso digital imediato
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  Garantia incondicional de 7 dias
                </li>
              </ul>

              <CtaButton href={CHECKOUT_URL} className="w-full text-center">
                Eu quero desconto de lan&ccedil;amento &rarr;
              </CtaButton>
            </div>
          </RevealSection>

          {/* Right - Accent */}
          <RevealSection delay={200}>
            <div className="bg-accent-dim border border-accent/10 p-10 md:p-12 flex flex-col justify-center items-center text-center h-full rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-gray-light mb-2">
                Pre&ccedil;o de lan&ccedil;amento
              </p>

              <p className="text-gray-light text-lg mb-1 line-through decoration-accent/60">
                R$ 97,00
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-bold text-cream">
                  R$ 49
                </span>
                <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-cream">
                  ,90
                </span>
              </div>

              <p className="text-gray-light text-sm mb-8">
                ou 3x de R$ 16,63
              </p>

              <div className="flex items-center gap-6 text-xs text-gray-light mb-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Compra segura
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  7 dias de garantia
                </div>
              </div>

              <p className="text-xs text-gray-light leading-relaxed max-w-xs">
                Devolu&ccedil;&atilde;o garantida por lei dentro de 7 dias ap&oacute;s
                a compra, para qualquer produto digital
              </p>

              <div className="flex items-center gap-4 mt-8 text-xs text-gray-light">
                <span>Pix</span>
                <span className="w-px h-3 bg-white/10" />
                <span>Cart&atilde;o</span>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
