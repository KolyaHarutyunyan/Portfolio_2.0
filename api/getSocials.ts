import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { TSocial } from "@/typings";

const query = groq`
    *[_type == "social"]
`;

export default async function handler() {
  try {
    const socials: TSocial[] = await sanityClient.fetch(query);
    return socials;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
}
