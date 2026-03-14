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
    default: "Kidds Clean Up And Demolition | Kansas City Cleanup & Demo",
    template: "%s | Kidds Clean Up And Demolition",
  },
  description:
    "Family-owned cleanup and demolition company serving the Kansas City metro since 2017. Residential & commercial cleanup, demolition, and lead-safe services. Owner-operated with our own dumpsters. Call 816-457-4363.",
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
    siteName: "Kidds Clean Up And Demolition",
    images: [
      {
        url: "/images/Screenshot_Homepage_Kidds.png",
        width: 3338,
        height: 1410,
        alt: "Kidds Clean Up And Demolition homepage",
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
