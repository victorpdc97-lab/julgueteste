import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julgue o Livro Pela Capa | Guia de Moda Masculina",
  description:
    "Guia de moda masculina com 85 páginas. Transforme sua imagem pessoal e profissional. Por Heitor Paradise — 10+ anos de experiência.",
  openGraph: {
    title: "Julgue o Livro Pela Capa | Guia de Moda Masculina",
    description:
      "Guia de moda masculina com 85 páginas. Transforme sua imagem pessoal e profissional.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
