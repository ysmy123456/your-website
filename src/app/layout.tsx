import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.productName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.productName}`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    title: `${siteConfig.productName} | ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
