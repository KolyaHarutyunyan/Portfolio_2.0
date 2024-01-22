"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  backgroundCirclesMotionAnimate,
  backgroundCirclesMotionInitial,
  backgroundCirclesMotionTransition,
} from "@/constants";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "<ThankYouForVisitingMyPortfolio />",
      "<MyNameIsKolya />",
      "<LetsBuildTheFutureTogether />",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={backgroundCirclesMotionInitial}
        animate={backgroundCirclesMotionAnimate}
        transition={backgroundCirclesMotionTransition}
        className="relative flex items-center justify-center"
      >
        <div className="absolute border border-[#332e2d] opacity-20 rounded-full w-[200px] h-[200px] mt-52" />
        <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full w-[300px] h-[300px] mt-52 animate-pulse" />
        <div className="absolute border border-[#332e2d] opacity-20 rounded-full w-[500px] h-[500px] mt-52" />
        <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 w-[650px] h-[650px] mt-52 animate-pulse" />
        <div className="absolute border border-[#332e2d] opacity-20 rounded-full w-[800px] h-[800px] mt-52" />
      </motion.div>
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={
          "https://media.licdn.com/dms/image/D4E03AQGYm3xMzuv0wA/profile-displayphoto-shrink_800_800/0/1698595162893?e=1711584000&v=beta&t=0Set58ozrZDWEiQSnX8Vhb7XalEoTTJ_GHYTQ08Gdy4"
        }
        alt="hero"
        width={145}
        height={145}
      />
      <div className="z-10">
        <h2 className="text-sm uppercase tracking-[15px] opacity-60">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link
            href="#about"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-[#F7AB0A] hover:border-[#F7AB0A]"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-[#F7AB0A] hover:border-[#F7AB0A]"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-[#F7AB0A] hover:border-[#F7AB0A]"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="px-6 py-2 border rounded-full uppercase text-xs tracking-widest transition-all opacity-60 hover:text-[#F7AB0A] hover:border-[#F7AB0A]"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
