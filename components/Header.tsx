"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  getInTouchMotionAnimate,
  getInTouchMotionInitial,
  getInTouchMotionTransition,
  socialIconsBgColor,
  socialIconsFgColor,
  socialIconsMotionAnimate,
  socialIconsMotionInitial,
  socialIconsMotionTransition,
} from "@/constants";
import { TSocial } from "@/typings";

type Props = { socials: TSocial[] };

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start md:items-center justify-between max-w-7xl mx-auto p-5">
      <motion.div
        initial={socialIconsMotionInitial}
        animate={socialIconsMotionAnimate}
        transition={socialIconsMotionTransition}
        className="flex items-center flex-wrap"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.title}
            url={social.url}
            network={social.title.toLowerCase()}
            target="_blank"
            bgColor={socialIconsBgColor}
            fgColor={socialIconsFgColor}
            className="hover:bg-[#fef8f0] rounded-full bg-opacity-50 mr-1"
          />
        ))}
      </motion.div>
      <motion.div
        initial={getInTouchMotionInitial}
        animate={getInTouchMotionAnimate}
        transition={getInTouchMotionTransition}
      >
        <Link href="#contact" className="flex items-center animate-pulse">
          <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <EnvelopeIcon className="h-6 w-6" />
          </div>
          <p className="hidden md:inline-flex text-sm uppercase">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
