import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luiz Henrique | Redes Sociais",
  description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
  keywords: ["Luiz Henrique", "redes sociais", "Instagram", "LinkedIn", "GitHub"],
  authors: [{ name: "Luiz Henrique" }],
  metadataBase: new URL("https://pagina-links-pearl.vercel.app"),
  openGraph: {
    title: "Luiz Henrique | Redes Sociais",
    description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
    siteName: "Luiz Henrique Links",
    images: [
      {
        url: "/perfil.png",
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
    images: ["/perfil.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
