import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://venkatchowdari.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Venkat Chowdary Maridi — CS Engineer",
  description:
    "Portfolio of Venkat Chowdary Maridi — CS engineer building RAG pipelines, backend systems, and open-source tools.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Venkat Chowdary Maridi — CS Engineer",
    description:
      "Portfolio of Venkat Chowdary Maridi — CS engineer building RAG pipelines, backend systems, and open-source tools.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkat Chowdary Maridi — CS Engineer",
    description:
      "Portfolio of Venkat Chowdary Maridi — CS engineer building RAG pipelines, backend systems, and open-source tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
