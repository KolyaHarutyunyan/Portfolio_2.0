"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
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

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between max-w-7xl mx-auto  xl:items-center p-5">
      <motion.div
        initial={socialIconsMotionInitial}
        animate={socialIconsMotionAnimate}
        transition={socialIconsMotionTransition}
        className="flex items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100008459111046"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
        <SocialIcon
          url="https://github.com/KolyaHarutyunyan"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/kolya-harutyunyan-3a11a320b/"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
        <SocialIcon
          url="https://twitter.com/Kolya80264360"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
        <SocialIcon
          url="https://www.youtube.com/@fortemix3983"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
      </motion.div>
      <motion.div
        initial={getInTouchMotionInitial}
        animate={getInTouchMotionAnimate}
        transition={getInTouchMotionTransition}
        className="flex items-center cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          target="_blank"
          bgColor={socialIconsBgColor}
          fgColor={socialIconsFgColor}
        />
        <p className="hidden md:inline-flex text-sm uppercase">Get in touch</p>
      </motion.div>
    </header>
  );
}
