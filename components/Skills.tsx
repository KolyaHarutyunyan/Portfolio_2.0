"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center pt-40">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-sm opacity-60">
        Hover over a skill to see currency proficiency
      </h4>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
