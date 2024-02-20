import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function Footer({ pageInfo }: Props) {
  return (
    <footer className="sticky bottom-3 w-full">
      <Link
        href="#hero"
        className="group flex justify-center items-center rounded-full w-[60px] h-[60px] hover:border-secondary border border-transparent mx-auto transition-all cursor-default"
      >
        <Image
          className="absolute left-1/2 -translate-x-1/2 object-cover object-center w-12 h-12 rounded-full filter grayscale group-hover:grayscale-0"
          src={urlFor(pageInfo?.footerPic).url()}
          alt="footer-hero"
          width={48}
          height={48}
        />
      </Link>
    </footer>
  );
}
