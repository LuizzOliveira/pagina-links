import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luiz Henrique | Redes Sociais",
  description: "Acesse minhas redes sociais: Instagram, LinkedIn e GitHub.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico"
  },
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
  }
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
