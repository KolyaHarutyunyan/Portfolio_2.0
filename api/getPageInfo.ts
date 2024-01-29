import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { TPageInfo } from "@/typings";

const query = groq`
    *[_type == "pageInfo"][0]
`;

export default async function handler() {
  const pageInfo: TPageInfo = await sanityClient.fetch(query);
  return pageInfo;
}
