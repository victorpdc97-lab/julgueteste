"use client";

import RevealSection from "./ui/RevealSection";
import AnimatedCounter from "./ui/AnimatedCounter";

const CLIENTS = [
  { id: 1, src: "/img/cliente1.jpg" },
  { id: 2, src: "/img/cliente2.jpg" },
  { id: 3, src: "/img/cliente3.jpg" },
  { id: 4, src: "/img/cliente4.jpg" },
  { id: 5, src: "/img/cliente5.webp" },
  { id: 6, src: "/img/cliente6.webp" },
  { id: 7, src: "/img/cliente7.webp" },
  { id: 8, src: "/img/cliente8.webp" },
  { id: 9, src: "/img/cliente9.jpg" },
];

export default function Results() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="resultados" className="relative py-28 bg-gradient-section overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/[0.05] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <RevealSection>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-accent/30" />
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent">
                Resultados reais
              </p>
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-accent/30" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl text-cream mb-3">
              +<AnimatedCounter end={500} className="gradient-text" /> homens
            </h2>
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl italic text-gray-light">
              transformados
            </p>
          </div>
        </RevealSection>
      </div>

      {/* Carousel with enhanced cards */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

        <div className="carousel-track flex gap-5">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] h-[360px] rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={client.src}
                alt={`Resultado cliente ${client.id}`}
                className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              {/* Accent border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/30 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(10,186,181,0.6)]" />
                  <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.2em] text-gray-light group-hover:text-cream transition-colors duration-300">
                    Resultado real
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
