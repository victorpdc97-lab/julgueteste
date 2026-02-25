const ITEMS = [
  "Material dos consultores Paradise",
  "10 anos de experiência",
  "85 páginas",
  "7 estilos universais",
  "Armário cápsula",
  "Trocas inteligentes",
  "500+ homens transformados",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="relative py-5 overflow-hidden bg-gradient-to-r from-[#080808] via-[#0a0f10] to-[#080808]">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-accent/[0.03]" />
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 mx-8">
            <span className="font-[family-name:var(--font-heading)] text-[11px] uppercase tracking-[0.25em] text-gray-light/70">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 shadow-[0_0_8px_rgba(10,186,181,0.4)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
