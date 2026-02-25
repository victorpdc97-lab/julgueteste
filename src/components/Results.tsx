"use client";

import RevealSection from "./ui/RevealSection";

const CLIENTS = [
  { id: 1, src: "/img/cliente1.jpg", label: "Resultado real" },
  { id: 2, src: "/img/cliente2.jpg", label: "Resultado real" },
  { id: 3, src: "/img/cliente3.jpg", label: "Resultado real" },
  { id: 4, src: "/img/cliente4.jpg", label: "Resultado real" },
  { id: 5, src: "/img/cliente5.webp", label: "Resultado real" },
  { id: 6, src: "/img/cliente6.webp", label: "Resultado real" },
  { id: 7, src: "/img/cliente7.webp", label: "Resultado real" },
  { id: 8, src: "/img/cliente8.webp", label: "Resultado real" },
  { id: 9, src: "/img/cliente9.jpg", label: "Resultado real" },
];

export default function Results() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="resultados" className="py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <RevealSection>
          <div className="text-center">
            <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Resultados
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-cream mb-2">
              +500 homens transformados
            </h2>
            <p className="text-gray-light">
              Veja algumas transforma&ccedil;&otilde;es reais dos nossos clientes
            </p>
          </div>
        </RevealSection>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10" />

        <div className="carousel-track flex gap-4">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] h-[360px] rounded-lg overflow-hidden relative group"
            >
              <img
                src={client.src}
                alt={`Resultado cliente ${client.id}`}
                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.2em] text-gray-light">
                  {client.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
