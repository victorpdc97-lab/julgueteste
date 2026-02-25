export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-light">
          &copy; 2026 Julgue o Livro Pela Capa
        </p>
        <div className="flex items-center gap-6 text-xs text-gray-light">
          <a href="#" className="hover:text-cream transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-cream transition-colors">
            Privacidade
          </a>
          <a
            href="https://wa.me/5531986595481"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
