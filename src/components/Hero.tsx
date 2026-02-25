"use client";

import { useEffect, useState } from "react";
import CtaButton from "./ui/CtaButton";
import FloatingShapes from "./ui/FloatingShapes";

const CHECKOUT_URL = "https://pay.hotmart.com/T102225946D?bid=1771530113543";

const WORDS = ["diferenciar", "impactar", "conquistar", "transformar"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/img/home.webp')",
            filter: "grayscale(40%) contrast(1.1) brightness(0.4)",
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        {/* Accent radial glow */}
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px]" />
      </div>

      <FloatingShapes />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.3em] text-accent">
              Guia de moda masculina &mdash; 85 p&aacute;ginas
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-cream mb-4">
            Julgue o Livro
            <br />
            <span className="italic gradient-text">Pela Capa</span>
          </h1>

          {/* Rotating word */}
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-gray-light mb-8 h-8">
            A sua imagem tem o poder de{" "}
            <span
              className={`inline-block text-accent font-semibold transition-all duration-400 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {WORDS[wordIndex]}
            </span>
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-light/80 max-w-lg mb-10 leading-relaxed">
            Em um mercado altamente competitivo, tanto em &acirc;mbito profissional,
            quanto pessoal, o cuidado com a imagem acaba sendo um fator fundamental
            para se diferenciar!
          </p>

          {/* CTA + social proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <CtaButton href={CHECKOUT_URL}>
              Eu quero desconto de lan&ccedil;amento &rarr;
            </CtaButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#080808] bg-gray-dark overflow-hidden"
                  >
                    <img
                      src={`/img/cliente${i}.jpg`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-light">
                <span className="text-cream font-semibold">500+</span> homens
                <br />
                transformados
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-light/40 font-[family-name:var(--font-heading)]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
