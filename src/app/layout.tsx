import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLP GlowUp | Premium GLP-1 Transformation & Coaching",
  description: "Transform your body the smart way. GLP GlowUp offers premium coaching, strength training, and nutritional guidance for individuals on GLP-1 medications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans text-brand-dark bg-brand-light">
        {children}
      </body>
    </html>
  );
}
