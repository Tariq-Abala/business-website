import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Atlas Strategic Advisory | Conseil en Stratégie & Finance d'Entreprise",
  description:
    "Atlas Strategic Advisory — Cabinet de conseil en stratégie, ingénierie financière, M&A et transformation digitale à Casablanca Finance City.",
  keywords: ["conseil entreprise", "stratégie", "finance", "M&A", "transformation digitale", "Casablanca Finance City", "Atlas Advisory"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
