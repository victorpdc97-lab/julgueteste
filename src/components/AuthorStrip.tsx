"use client";

import RevealSection from "./ui/RevealSection";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function AuthorStrip() {
  return (
    <section className="relative bg-mesh-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo with glow */}
            <RevealSection animation="left">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 ring-4 ring-accent/5">
                  <img
                    src="/img/heitor.webp"
                    alt="Heitor Paradise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealSection>

            {/* Bio */}
            <RevealSection delay={150} className="flex-1">
              <p className="text-foreground leading-relaxed text-center md:text-left">
                Sei que os seus pais te ensinaram a n&atilde;o julgar um livro pela capa!
                Minha inten&ccedil;&atilde;o n&atilde;o &eacute; provocar uma briga familiar...
                Vamos l&aacute;, que vou explicar melhor...
              </p>
              <p className="text-foreground leading-relaxed mt-3 text-center md:text-left">
                Estamos de acordo que ao julgarmos algu&eacute;m pela sua
                &ldquo;capa&rdquo;, perdemos a oportunidade de conhecer suas
                experi&ecirc;ncias, hist&oacute;rias, paix&otilde;es e car&aacute;ter...{" "}
                <span className="text-accent font-semibold">CORRETO?</span>
              </p>
              <p className="mt-4 text-sm text-gray-light text-center md:text-left">
                <span className="font-semibold text-cream">Heitor Paradise</span>{" "}
                &bull; Especialista em moda masculina
              </p>
            </RevealSection>

            {/* Stats */}
            <RevealSection animation="right" delay={300}>
              <div className="flex flex-row md:flex-col gap-8 md:gap-6 shrink-0">
                <div className="text-center">
                  <span className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold gradient-text">
                    <AnimatedCounter end={10} suffix="+" />
                  </span>
                  <p className="font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.2em] text-gray-light mt-1">
                    Anos
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold gradient-text">
                    <AnimatedCounter end={500} suffix="+" />
                  </span>
                  <p className="font-[family-name:var(--font-heading)] text-[9px] uppercase tracking-[0.2em] text-gray-light mt-1">
                    Clientes
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
