import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luiz Henrique | Redes Sociais",
  description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
  keywords: ["Luiz Henrique", "redes sociais", "Instagram", "LinkedIn", "GitHub"],
  authors: [{ name: "Luiz Henrique" }],
  openGraph: {
    title: "Luiz Henrique | Redes Sociais",
    description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
    url: "https://pagina-links-pearl.vercel.app/",
    siteName: "Luiz Henrique Links",
    images: [
      {
        url: "https://files.fm/u/a2rtmdg2am",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiz Henrique | Redes Sociais",
    description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
    images: ["https://seu-site.com/perfil.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
