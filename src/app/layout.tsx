import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { siteUrl } from "@/lib/site-content";
import { defaultOgImagePath, siteName } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | GLP GlowUp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName,
    type: "website",
    locale: "en_US",
    images: [defaultOgImagePath],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} antialiased h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-dark bg-brand-light">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
