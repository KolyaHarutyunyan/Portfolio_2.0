import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { siteConfig } from "@/configs/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const host = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(host),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    images: siteConfig.ogImage,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    images: siteConfig.twitter.images,
    card: "summary_large_image",
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
