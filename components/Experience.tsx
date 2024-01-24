"use client";

import { motion } from "framer-motion";
import {
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative h-screen flex flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto text-left overflow-hidden items-center pt-40"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#ccc2b3] scrollbar-thumb-[#f6cc89]">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
