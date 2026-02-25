"use client";

import { useState, useEffect } from "react";

const CHECKOUT_URL = "https://pay.hotmart.com/T102225946D?bid=1771530113543";

const NAV_LINKS = [
  { label: "O guia", href: "#guia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Oferta", href: "#oferta" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="relative group">
          <img
            src="/img/heitor-paradise-logo.png"
            alt="Heitor Paradise"
            className="h-8 w-auto signature-draw"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-light hover:text-cream px-4 py-2 rounded-full hover:bg-white/[0.03] transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-sm font-medium text-background bg-accent px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(10,186,181,0.3)] transition-all duration-300"
          >
            Comprar agora
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              open ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-cream transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu - full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#080808]/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl text-cream font-[family-name:var(--font-serif)] hover:text-accent transition-colors"
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 text-sm font-[family-name:var(--font-heading)] font-semibold text-background bg-accent px-8 py-3 rounded-full"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </nav>
  );
}
