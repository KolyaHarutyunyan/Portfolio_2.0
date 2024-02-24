import { siteConfig } from "../configs/site";

import type { Metadata } from "next";

export const metaSocialGenerator = (
  { title, desc }: { title: string; desc?: string } = {
    title: siteConfig.name,
    desc: siteConfig.description,
  }
): Metadata => {
  const tmpTitle =
    siteConfig.name === title ? title : `${title} | ${siteConfig.name}`;
  const description = desc ?? siteConfig.description;

  return {
    title,
    openGraph: {
      type: "website",
      locale: "en_US",
      images: siteConfig.ogImage,
      url: siteConfig.url,
      title: tmpTitle,
      description,
      siteName: tmpTitle,
    },
    twitter: {
      images: siteConfig.twitter.images,
      card: "summary_large_image",
      creator: siteConfig.twitter.creator,
      site: siteConfig.twitter.site,
      title: tmpTitle,
      description,
    },
  };
};
