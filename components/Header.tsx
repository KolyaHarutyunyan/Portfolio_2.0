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
    <header className="sticky top-0 z-20 flex items-start justify-between max-w-7xl mx-auto p-0 sm:p-2">
      <motion.div
        initial={socialIconsMotionInitial}
        animate={socialIconsMotionAnimate}
        transition={socialIconsMotionTransition}
        className="flex items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.title}
            url={social.url}
            network={social.title.toLowerCase()}
            target="_blank"
            bgColor={socialIconsBgColor}
            fgColor={socialIconsFgColor}
            className="hover:bg-[#fef8f0] rounded-full bg-opacity-50 mr-1 h-[34px!important] w-[34px!important] sm:h-[40px!important] sm:w-[40px!important]"
          />
        ))}
      </motion.div>
      <motion.div
        initial={getInTouchMotionInitial}
        animate={getInTouchMotionAnimate}
        transition={getInTouchMotionTransition}
      >
        <Link href="#contact" className="flex items-center mt-[2px]">
          <div className="rounded-full sm:w-10 sm:h-10 h-8 w-8 flex items-center justify-center">
            <EnvelopeIcon className="w-5 h-5" />
          </div>
          <p className="hidden md:inline-flex text-sm">Get in touch</p>
        </Link>
      </motion.div>
    </header>
  );
}
