import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function Footer({ pageInfo }: Props) {
  return (
    <footer className="sticky bottom-7 w-full">
      <Link href="#hero">
        <div className="flex justify-center items-center">
          <Image
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center w-10 h-10 rounded-full filter grayscale hover:grayscale-0"
            src={urlFor(pageInfo.footerPic).url()}
            alt="footer-hero"
            width={40}
            height={40}
          />
        </div>
      </Link>
    </footer>
  );
}
