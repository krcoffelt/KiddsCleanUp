import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        url: "/images/Visby.jpg",
        width: 1200,
        height: 630,
        alt: "Kidds Clean Up And Demolition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Visby.jpg"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2MEYMKHX08"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2MEYMKHX08');
          `}
        </Script>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
