import site from "../collections/site.json" assert { type: "json" };
import { TSiteConfig } from "@/typings";

export const siteConfig: TSiteConfig = {
  name: site.name,
  description: site.description,
  language: site.language,
  keywords: [
    "Portfolio",
    "CV",
    "Resume",
    "Middle",
    "Senior",
    "ReactJS Developer",
    "NextJS Developer",
    "Software engineer",
    "Software Developer",
    "Software Development",
    "Web development",
    "Blockchain development",
    "Mobile app development",
    "UI/UX design",
    "SEO services",
    "E-commerce solutions",
    "Customer experience",
  ],
  ogImage: "/images/social/og.png",
  email: site.email,
  url: process.env.HOST ?? site.urlOrigin,
  twitter: {
    card: "summary_large_image",
    images: "/images/social/og.png",
    creator: "@_kolya-s-portfolio",
    site: "@_kolya-s-portfolio",
    description: site.description,
  },
};
