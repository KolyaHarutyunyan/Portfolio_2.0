import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { TExperience } from "@/typings";

const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
`;

export default async function handler() {
  try {
    const experiences: TExperience[] = await sanityClient.fetch(query);
    return experiences;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
}
