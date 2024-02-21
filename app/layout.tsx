import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PublicLinks, siteConfig } from "@/configs/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const host = PublicLinks.ROOT;

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
  description: siteConfig.description,
  keywords: siteConfig.keywords,
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
    images: siteConfig.twitter?.images,
    card: "summary_large_image",
    creator: "@KolyaHarutyunyan",
    site: "@kolyasportfoliocom",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.name,
  image: siteConfig.ogImage,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
