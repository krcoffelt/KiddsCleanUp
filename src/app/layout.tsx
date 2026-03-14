import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LocalBusinessSchema } from "@/components/StructuredData";
import "./globals.css";

const heading = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiddscleanup.com"),
  title: {
    default: "Kansas City Demolition, Cleanouts & Junk Removal | Kidd's Clean Up and Demo",
    template: "%s | Kidd's Clean Up and Demo",
  },
  description:
    "Kidds Clean Up and Demo provides residential and commercial demolition, junk removal, cleanouts, lead-safe work, and water mitigation across the Kansas City metro. Call for a free quote.",
  keywords: [
    "Kansas City demolition",
    "KC cleanup",
    "residential demolition Kansas City",
    "commercial demolition KC",
    "lead-safe demolition",
    "junk removal Kansas City",
    "cleanup services KC metro",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kidd's Clean Up and Demo",
    images: [
      {
        url: "/images/Screenshot_Homepage_Kidds.png",
        width: 3338,
        height: 1410,
        alt: "Kidd's Clean Up and Demo homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Screenshot_Homepage_Kidds.png"],
  },
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <LocalBusinessSchema />
        <CookieConsent />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
