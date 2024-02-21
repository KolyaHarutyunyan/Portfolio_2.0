import { TSiteConfig } from "@/typings";

export const siteConfig: TSiteConfig = {
  name: "Kolya's Portfolio",
  description:
    "I have got just what you need. Let's build the future together!",
  url: "https://kolya-s-portfolio.com/",
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
  twitter: {
    card: "summary_large_image",
    images: "/images/social/og.png",
  },
};

export const enum PublicLinks {
  ROOT = "https://kolya-s-portfolio.com/",
}
