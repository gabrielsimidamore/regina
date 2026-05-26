import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Regina Moura — Demonstradora & Impulsionadora",
  description:
    "Demonstradora e Impulsionadora de Vendas com 4+ anos de experiência nas principais redes do Brasil. Degustação, atendimento e ativação de marca com calor humano e foco em resultado.",
  openGraph: {
    title: "Regina Moura — Demonstradora & Impulsionadora",
    description:
      "Portfólio profissional de Regina Moura, Demonstradora & Impulsionadora de Vendas em Osasco, SP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
