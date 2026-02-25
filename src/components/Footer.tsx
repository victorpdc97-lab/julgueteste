export default function Footer() {
  return (
    <footer className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-[family-name:var(--font-heading)] text-xs font-semibold tracking-wider uppercase text-cream/60">
              Julgue o Livro Pela Capa
            </span>
            <p className="text-[11px] text-gray-light/40">
              &copy; 2026 &bull; Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs text-gray-light/50">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Termos
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Privacidade
            </a>
            <a
              href="https://wa.me/5531986595481"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
