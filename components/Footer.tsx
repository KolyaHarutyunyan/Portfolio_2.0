import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function Footer({ pageInfo }: Props) {
  return (
    <footer className="sticky bottom-3 w-full z-50">
      <Link
        href="#hero"
        className="group flex justify-center items-center rounded-full sm:w-[60px] sm:h-[60px] w-[52px] h-[52px] hover:border-secondary border border-transparent mx-auto transition-all"
      >
        <Image
          className="absolute left-1/2 -translate-x-1/2 object-cover object-center sm:w-12 sm:h-12 w-10 h-10 rounded-full filter grayscale group-hover:grayscale-0"
          src={urlFor(pageInfo?.footerPic).url()}
          alt="footer-hero"
          width={48}
          height={48}
          priority
        />
      </Link>
    </footer>
  );
}
