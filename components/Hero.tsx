"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  backgroundCirclesMotionAnimate,
  backgroundCirclesMotionInitial,
  backgroundCirclesMotionTransition,
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import { urlFor } from "@/sanity";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      "<ThankYouForVisitingMyPortfolio />",
      `<MyNameIs${pageInfo.name} />`,
      "<LetsBuildTheFutureTogether />",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center"
    >
      <motion.div
        initial={backgroundCirclesMotionInitial}
        animate={backgroundCirclesMotionAnimate}
        transition={backgroundCirclesMotionTransition}
        className="relative top-24 flex items-center justify-center"
      >
        <div className="absolute border border-primary opacity-20 rounded-full w-[200px] h-[200px] mt-52" />
        <div className="absolute border border-secondary opacity-20 rounded-full w-[300px] h-[300px] mt-52 animate-pulse" />
        <div className="absolute border border-primary opacity-20 rounded-full w-[500px] h-[500px] mt-52" />
        <div className="absolute border border-secondary rounded-full opacity-20 w-[650px] h-[650px] mt-52 animate-pulse" />
        <div className="absolute border border-primary opacity-20 rounded-full w-[800px] h-[800px] mt-52" />
      </motion.div>
      <div className="w-[145px] h-[145px] top-24 rounded-full overflow-hidden relative mx-auto">
        <Image
          className="absolute left-1/2 -translate-x-1/2 object-cover object-center w-[145px] h-[145px]"
          src={urlFor(pageInfo.heroImage).url()}
          alt="hero"
          width={145}
          height={145}
          priority
        />
      </div>
      <div className="z-10 top-24 relative">
        <h2 className="text-sm uppercase tracking-[15px] opacity-60">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="var(--secondary)" />
        </h1>
        <div className="pt-5">
          <Link
            href="#about"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-secondary hover:border-secondary"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-secondary hover:border-secondary"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-secondary hover:border-secondary"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-secondary hover:border-secondary"
          >
            Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
