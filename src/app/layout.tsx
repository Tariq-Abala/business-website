import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A1118",
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
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#0A1118] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
