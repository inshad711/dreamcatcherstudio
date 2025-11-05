import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MainFooter from "./components/Footer";
import { Toaster } from "react-hot-toast";

const MainFont = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata() {
  const siteUrl = "https://dreamcatcherstudio.vercel.app";
  const siteName = "DreamCatcher Studio";
  const logoUrl = `${siteUrl}/logo/logo3.png`;

  return {
    title: `${siteName} | Creative Studio in Mumbai`,
    description:
      "DreamCatcher Studio — A professional creative space in Mumbai offering cinematic shoots, photography, videography, podcasts & chroma production services.",
    openGraph: {
      title: `${siteName} | Creative Studio in Mumbai`,
      description:
        "Transform your ideas into visuals with DreamCatcher Studio — High-end film studio for shoots, ads, events & creative productions.",
      url: siteUrl,
      type: "website",
      siteName,
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} Branding`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} | Creative Studio`,
      description:
        "Premium studio space for photography, videography, chroma shoots & podcast production in Mumbai.",
      images: logoUrl,
    },
    keywords: [
      "DreamCatcher Studio",
      "Studio in Mumbai",
      "Photography Studio Mumbai",
      "Videography Studio",
      "Chroma Studio Mumbai",
      "Podcast Studio",
      "Film Production Studio",
      "Creative Space Mumbai",
    ],
    alternates: {
      canonical: siteUrl,
    },
    metadataBase: new URL(siteUrl),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MainFont.className} antialiased`}>
        <Toaster />
        <Header />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
