import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Les métadonnée pour la recherche sur le web
export const metadata: Metadata = {
  title: "SANITAS-PLUS",
  description: "SANITAS PLUS est une structure professionnelle et organisation sanitaire de proximités. Notre mission est d’être plus proche de la population et surtout notre objectif est de permettre à tout le monde de bénéficier de soin de qualité tout en restant à son domicile ou sur son lieu de travail.",
  icons: {
    icon: "/logo_sanitas_plus.jpg", // public/images_logo --- Chemin vers votre favicon
    shortcut: "/logo_sanitas_plus.jpg", // Optionnel : pour les raccourcis
    apple: "/logo_sanitas_plus.jpg", // Optionnel : pour les appareils Apple
  },
  keywords: [
    "SANITAS PLUS", 
    "santé", 
    "santé à domicile",
    "organisation sanitaire à domicile", 
    "consultations à domicile",
    "prélévement à domicile et réalisations des examens",
    "hospitalisation à domicile",
    "hospitalisation à sur son lieu de travil",
    "garderie d'enfant malade",
    "ménage à domicile",
    "gérer les courses"
  ],
  authors: [{name:"SANITAS-PLUS", }],
  // viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "SANITAS-PLUS",
    description: "SANITAS PLUS est une structure professionnelle et organisation sanitaire de proximités. Notre mission est d’être plus proche de la population et surtout notre objectif est de permettre à tout le monde de bénéficier de soin de qualité tout en restant à son domicile ou sur son lieu de travail.",
    url: "",
    siteName: "sanitas-plus",
    locale: "fr_FR",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Loading /> */}

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
