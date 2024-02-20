"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { DocumentArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
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
            className="hover:border-secondary border border-transparent transition-all rounded-full bg-opacity-50 h-[34px!important] w-[34px!important] sm:h-[40px!important] sm:w-[40px!important]"
          />
        ))}
      </motion.div>
      <motion.div
        initial={getInTouchMotionInitial}
        animate={getInTouchMotionAnimate}
        transition={getInTouchMotionTransition}
        className="flex items-center sm:gap-x-3 gap-x-0"
      >
        <Link
          href={"Kolya-s-CV.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="group flex items-center"
        >
          <div className="rounded-full h-8 w-8 flex items-center justify-center transition-all group-hover:border-secondary border border-transparent">
            <DocumentArrowDownIcon className="sm:w-5 sm:h-5 w-4 h-4" />
          </div>
          <p className="hidden sm:inline-flex tracking-widest text-sm group-hover:border-b-secondary border-b border-b-transparent transition-all">
            Get my CV
          </p>
        </Link>
        <Link href="#contact" className="group flex items-center">
          <div className="rounded-full h-8 w-8 flex items-center justify-center transition-all group-hover:border-secondary border border-transparent">
            <EnvelopeIcon className="sm:w-5 sm:h-5 w-4 h-4" />
          </div>
          <p className="hidden sm:inline-flex tracking-widest text-sm group-hover:border-b-secondary border-b border-b-transparent transition-all">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
