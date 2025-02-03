import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Leonardo Lima - Desenvolvedor Web",
  description: "Portfólio profissional de Leonardo Lima, desenvolvedor web fullstack especializado em criar experiências digitais únicas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#1a1c2e] min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}