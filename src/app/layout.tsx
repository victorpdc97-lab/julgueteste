import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julgue o Livro Pela Capa | Guia de Moda Masculina",
  description:
    "Guia de moda masculina com 85 páginas. Transforme sua imagem pessoal e profissional. Por Heitor Paradise — 10+ anos de experiência.",
  metadataBase: new URL("https://www.julgueolivropelacapa.com.br"),
  openGraph: {
    title: "Julgue o Livro Pela Capa | Guia de Moda Masculina",
    description:
      "Guia de moda masculina com 85 páginas. Transforme sua imagem pessoal e profissional.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.julgueolivropelacapa.com.br",
    siteName: "Julgue o Livro Pela Capa",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julgue o Livro Pela Capa — Guia de Moda Masculina por Heitor Paradise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julgue o Livro Pela Capa | Guia de Moda Masculina",
    description:
      "Guia de moda masculina com 85 páginas. Transforme sua imagem pessoal e profissional.",
    images: ["/img/og-image.jpg"],
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
