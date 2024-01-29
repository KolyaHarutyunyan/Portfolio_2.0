import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { TSkill } from "@/typings";

const query = groq`
    *[_type == "skill"]
`;

export default async function handler() {
  try {
    const skills: TSkill[] = await sanityClient.fetch(query);
    return skills;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
}
