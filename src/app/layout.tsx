import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Atlas Advisory Group | Cabinet de Conseil en Stratégie & Corporate Finance",
  description:
    "Atlas Advisory accompagne les comités de direction, conseils d'administration et actionnaires d'entreprises dans leurs décisions à fort enjeu stratégique, financier et technologique à Casablanca Finance City et Paris.",
  keywords: [
    "Conseil en stratégie",
    "Corporate Finance",
    "M&A Maroc",
    "Transformation digitale",
    "Performance opérationnelle",
    "Casablanca Finance City",
    "Atlas Advisory",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAFAF9] text-[#1C1917] antialiased flex flex-col selection:bg-[#1C3D2B]/15 selection:text-[#12281C]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
