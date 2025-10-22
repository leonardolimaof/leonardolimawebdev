import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Leonardo Lima - Desenvolvedor Web Full-Stack",
  description: "Desenvolvedor web especializado em React, Next.js, TypeScript e Node.js. Criando experiências digitais modernas e performáticas para transformar suas ideias em realidade.",
  keywords: ["Leonardo Lima", "Desenvolvedor Web", "React", "Next.js", "TypeScript", "Frontend", "Backend", "Full-Stack"],
  authors: [{ name: "Leonardo Lima" }],
  openGraph: {
    title: "Leonardo Lima - Desenvolvedor Web Full-Stack",
    description: "Transformando ideias em experiências digitais incríveis com tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-[#0f0f23] via-[#1a1c2e] to-[#2a2d4a] min-h-screen text-white selection:bg-[#6366f1]/30`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-20" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}