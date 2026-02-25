export default function AuthorStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Photo */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0 grayscale-[40%]">
          <img
            src="/img/heitor.webp"
            alt="Heitor Paradise"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-foreground leading-relaxed">
            Sei que os seus pais te ensinaram a n&atilde;o julgar um livro pela capa!
            Minha inten&ccedil;&atilde;o n&atilde;o &eacute; provocar uma briga familiar...
            Compliquei mais ainda n&eacute;!? rsrs&apos; Vamos l&aacute;, que vou explicar melhor...
          </p>
          <p className="text-foreground leading-relaxed mt-3">
            Estamos de acordo que ao julgarmos algu&eacute;m pela sua
            &ldquo;capa&rdquo;, perdemos a oportunidade de conhecer suas
            experi&ecirc;ncias, hist&oacute;rias, paix&otilde;es e car&aacute;ter...{" "}
            <span className="text-accent font-semibold">CORRETO?</span>
          </p>
        </div>

        {/* Years */}
        <div className="text-center shrink-0">
          <span className="font-[family-name:var(--font-heading)] text-6xl font-bold text-accent/50">
            10+
          </span>
          <p className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.2em] text-gray-light mt-1">
            Anos de experi&ecirc;ncia
          </p>
        </div>
      </div>

      <p className="text-center mt-6 text-sm text-gray-light">
        <span className="font-semibold text-cream">Heitor Paradise</span>{" "}
        &bull; Especialista em moda masculina
      </p>
    </section>
  );
}
