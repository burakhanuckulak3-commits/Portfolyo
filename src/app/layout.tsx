import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Burakhan Üçkulak | Portfolyo",
  description: "Burakhan Üçkulak - Bilgisayar Programcılığı öğrencisi. C, Python ve web geliştirme alanlarında projeler.",
  keywords: ["Burakhan Üçkulak", "Portfolio", "Bilgisayar Programcılığı", "C", "Python", "Web Geliştirme"],
  authors: [{ name: "Burakhan Üçkulak" }],
  openGraph: {
    title: "Burakhan Üçkulak | Portfolyo",
    description: "Bilgisayar Programcılığı öğrencisi - C, Python ve web geliştirme projeleri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <AnimatedBackground />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
