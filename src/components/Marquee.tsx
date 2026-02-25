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
    <section className="border-y border-white/5 py-4 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-gray-light">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
