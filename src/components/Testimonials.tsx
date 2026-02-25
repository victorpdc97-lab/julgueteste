"use client";

import { useRef } from "react";
import RevealSection from "./ui/RevealSection";

const TESTIMONIALS = [
  {
    name: "Rafael S.",
    role: "Empresário, 34",
    text: "Mano, eu achava que estilo era frescura. Comprei meio desacreditado. Em 14 dias minha mulher perguntou se eu tava com outra porque eu tava diferente. Não tava. Só troquei 5 peças por R$380.",
    highlight: "14 dias",
    investment: "R$380",
  },
  {
    name: "Marcos L.",
    role: "Dev, 28",
    text: "Finalmente alguém que fala sem rodeio. O capítulo 4 de guarda-roupa cápsula me fez jogar fora 30 peças e comprar 8 por R$620. Resultado? Mais elogios em 3 semanas do que em 28 anos de vida.",
    highlight: "3 semanas",
    investment: "R$620",
  },
  {
    name: "Daniel F.",
    role: "Advogado, 31",
    text: "Eu sou advogado e sempre me vesti bem. Depois da página 47 percebi que me vestia certo pra 2015. Apliquei 3 trocas inteligentes em 1 semana e fui promovido 2 meses depois. Gastei R$0 a mais.",
    highlight: "Promovido",
    investment: "R$0",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    // Move the glow to follow cursor
    const glowEl = card.querySelector<HTMLDivElement>(".card-glow");
    if (glowEl) {
      glowEl.style.left = `${x}px`;
      glowEl.style.top = `${y}px`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card)
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <RevealSection delay={index * 200}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative glass rounded-2xl p-8 cursor-default overflow-hidden h-full group"
        style={{ transition: "transform 0.15s ease-out" }}
      >
        {/* Follow cursor glow */}
        <div className="card-glow absolute w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Quote mark */}
        <span className="absolute top-4 right-6 font-[family-name:var(--font-serif)] text-7xl text-accent/[0.08] leading-none select-none">
          &rdquo;
        </span>

        {/* Top badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-heading)] uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-accent" />
            {testimonial.highlight}
          </span>
        </div>

        {/* Text */}
        <p className="text-foreground leading-relaxed mb-8 relative z-10 text-[15px]">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author + stat */}
        <div className="flex items-end justify-between relative z-10">
          <div>
            <p className="text-cream font-medium text-sm">{testimonial.name}</p>
            <p className="text-gray-light text-xs">{testimonial.role}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-light font-[family-name:var(--font-heading)] uppercase tracking-wider">
              Investiu
            </p>
            <p className="text-accent font-semibold font-[family-name:var(--font-heading)]">
              {testimonial.investment}
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </RevealSection>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-mesh-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-accent/30" />
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
                Depoimentos
              </p>
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-accent/30" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-cream">
              O que est&atilde;o <span className="italic gradient-text">falando</span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
