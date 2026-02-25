"use client";

import RevealSection from "./ui/RevealSection";
import CtaButton from "./ui/CtaButton";
import FloatingShapes from "./ui/FloatingShapes";

const CHECKOUT_URL = "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function Offer() {
  return (
    <section id="oferta" className="relative py-28 bg-mesh-accent overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Headline */}
        <RevealSection>
          <p className="text-center font-[family-name:var(--font-serif)] text-2xl md:text-4xl text-cream mb-20 italic leading-snug max-w-2xl mx-auto">
            Voc&ecirc; toparia economizar R$1,66 durante 30 dias para mudar o
            resto da sua vida?
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-5 gap-0 md:gap-6 items-stretch">
          {/* Left - Features (3 cols) */}
          <RevealSection animation="left" className="md:col-span-3">
            <div className="glass rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 md:p-12 h-full flex flex-col justify-between">
              {/* Author */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg" />
                    <img
                      src="/img/heitor3.webp"
                      alt="Heitor Paradise"
                      className="relative w-14 h-14 rounded-full object-cover border border-accent/20"
                    />
                  </div>
                  <div>
                    <p className="text-cream font-medium">Heitor Paradise</p>
                    <p className="text-gray-light text-sm">
                      Especialista em moda masculina
                    </p>
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-cream mb-2">
                  Guia completo &mdash; 85 p&aacute;ginas
                </h3>
                <p className="text-gray-light text-sm mb-8">
                  Material condensado de 10 anos de consultoria em moda masculina
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "01-10", label: "10 módulos de conteúdo prático" },
                    { icon: "star", label: "Material usado na formação dos consultores Paradise" },
                    { icon: "zap", label: "Livro físico com entrega grátis" },
                    { icon: "shield", label: "Garantia incondicional de 7 dias" },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="glass-accent rounded-xl p-4 flex items-start gap-3 group hover:bg-accent/[0.08] transition-colors duration-300"
                    >
                      <span className="text-accent mt-0.5 text-lg">&#10003;</span>
                      <span className="text-foreground text-sm leading-snug group-hover:text-cream transition-colors">
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <CtaButton href={CHECKOUT_URL} className="w-full text-center justify-center">
                Eu quero desconto de lan&ccedil;amento &rarr;
              </CtaButton>
            </div>
          </RevealSection>

          {/* Right - Price (2 cols) */}
          <RevealSection animation="right" delay={200} className="md:col-span-2">
            <div className="relative rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none h-full flex flex-col justify-center items-center text-center overflow-hidden p-8 md:p-10">
              {/* Gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-accent/[0.04] to-transparent" />
              <div className="absolute inset-0 border border-accent/15 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none" />

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <p className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.25em] text-gray-light mb-4">
                  Pre&ccedil;o de lan&ccedil;amento
                </p>

                <p className="text-gray-light/60 text-lg mb-1 line-through decoration-accent/40">
                  R$ 97,00
                </p>

                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-lg text-accent font-[family-name:var(--font-heading)]">
                    R$
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-6xl md:text-7xl font-bold text-cream leading-none">
                    49
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-cream">
                    ,90
                  </span>
                </div>

                <p className="text-gray-light text-sm mb-10">
                  ou 3x de R$ 16,63
                </p>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-xs text-gray-light">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Compra<br />segura</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-2 text-xs text-gray-light">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7 dias de<br />garantia</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-light/60 leading-relaxed max-w-xs mx-auto mb-6">
                  Devolu&ccedil;&atilde;o garantida por lei dentro de 7 dias ap&oacute;s a compra
                </p>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-light/50">
                  <span>Pix</span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>Cart&atilde;o</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
