import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { TProject } from "@/typings";

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`;

export default async function handler() {
  try {
    const projects: TProject[] = await sanityClient.fetch(query);
    return projects;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
}
