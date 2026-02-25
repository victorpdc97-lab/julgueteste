"use client";

import { useRef } from "react";
import RevealSection from "./ui/RevealSection";

const TESTIMONIALS = [
  {
    name: "Rafael S.",
    role: "Empresário, 34",
    text: "Mano, eu achava que estilo era frescura. Comprei meio desacreditado. Em 14 dias minha mulher perguntou se eu tava com outra porque eu tava diferente. Não tava. Só troquei 5 peças por R$380.",
  },
  {
    name: "Marcos L.",
    role: "Dev, 28",
    text: "Finalmente alguém que fala sem rodeio. O capítulo 4 de guarda-roupa cápsula me fez jogar fora 30 peças e comprar 8 por R$620. Resultado? Mais elogios em 3 semanas do que em 28 anos de vida.",
  },
  {
    name: "Daniel F.",
    role: "Advogado, 31",
    text: "Eu sou advogado e sempre me vesti bem. Depois da página 47 percebi que me vestia certo pra 2015. Apliquei 3 trocas inteligentes em 1 semana e fui promovido 2 meses depois. Gastei R$0 a mais.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
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
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-accent-dim transition-colors duration-300 cursor-default"
      style={{ transition: "background-color 0.3s, transform 0.15s ease-out" }}
    >
      <span className="absolute top-4 left-6 font-[family-name:var(--font-serif)] text-5xl text-white/[0.08] leading-none">
        &ldquo;
      </span>
      <p className="text-foreground leading-relaxed mb-6 relative z-10">
        {testimonial.text}
      </p>
      <div>
        <p className="text-cream font-medium text-sm">{testimonial.name}</p>
        <p className="text-gray-light text-xs">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Depoimentos
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-cream">
              O que est&atilde;o falando
            </h2>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <RevealSection key={t.name} delay={i * 150}>
              <TestimonialCard testimonial={t} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
