import CtaButton from "./ui/CtaButton";

const CHECKOUT_URL =
  "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale-[30%] contrast-110"
        style={{ backgroundImage: "url('/img/home.webp')" }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Guia de moda masculina &mdash; 85 p&aacute;ginas
          </p>

          <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl leading-[1.05] text-cream mb-6">
            Julgue o Livro
            <br />
            <span className="italic">Pela Capa</span>
          </h1>

          <p className="text-lg text-gray-light max-w-md mb-10 leading-relaxed">
            Em um mercado altamente competitivo, tanto em &acirc;mbito
            profissional, quanto pessoal, o cuidado com a imagem acaba sendo
            um fator fundamental para se diferenciar!
          </p>

          <CtaButton href={CHECKOUT_URL}>
            Eu quero desconto de lan&ccedil;amento &rarr;
          </CtaButton>
        </div>

        {/* Right side - vertical label */}
        <div className="hidden md:flex justify-end items-end relative h-full">
          <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.25em] text-gray-light/50 writing-mode-vertical rotate-180 [writing-mode:vertical-rl]">
            Especialista em moda masculina
          </span>
        </div>
      </div>
    </section>
  );
}
