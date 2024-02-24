// import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://kolya-s-portfolio.com/"),
//   title: {
//     default: "Kolya's Portfolio",
//     template: `%s | "Kolya's Portfolio"`,
//   },
//   description:
//     "I have got just what you need. Let's build the future together!",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     images: "/images/social/og.png",
//     url: "https://kolya-s-portfolio.com/",
//     title: "Kolya's Portfolio",
//     description:
//       "I have got just what you need. Let's build the future together!",
//     siteName: "Kolya's Portfolio",
//   },
//   twitter: {
//     images: "/images/social/og.png",
//     card: "summary_large_image",
//     creator: "@KolyaHarutyunyan",
//     site: "@kolyasportfoliocom",
//     title: "Kolya's Portfolio",
//     description:
//       "I have got just what you need. Let's build the future together!",
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: `https://kolya-s-portfolio.com/site.webmanifest`,
// };

// export const metadata: Metadata = {
//   title: "Kolya's Portfolio",
//   description:
//     "I have got just what you need. Let's build the future together!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{"Kolya's Portfolio"}</title>
        <meta
          name="description"
          content={
            "I have got just what you need. Let's build the future together!"
          }
        />
        <meta property="og:title" content={"Kolya's Portfolio"} />
        <meta
          property="og:description"
          content={
            "I have got just what you need. Let's build the future together!"
          }
        />
        <meta property="og:image" content="/images/social/og.png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content="https://kolya-s-portfolio.com/" />
        <meta property="og:siteName" content="Kolya's Portfolio" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
