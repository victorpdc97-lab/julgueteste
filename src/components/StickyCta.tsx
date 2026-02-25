"use client";

import { useEffect, useState } from "react";

const CHECKOUT_URL =
  "https://pay.hotmart.com/T102225946D?bid=1771530113543";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#080808]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-accent text-background font-[family-name:var(--font-heading)] text-sm font-semibold py-3 rounded-full"
        >
          Eu quero por R$ 49,90 &rarr;
        </a>
      </div>
    </div>
  );
}
