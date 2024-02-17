"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import {
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import { TSkill } from "@/typings";

type Props = { skills: TSkill[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 justify-center xl:space-y-0 mx-auto items-center pt-40"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-sm opacity-60">
        Hover over a skill to see current proficiency
      </h4>
      <div className="flex flex-wrap items-center justify-evenly px-10 gap-5">
        {skills.map((skill, i) => (
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft={i <= skills.length / 2}
          />
        ))}
      </div>
    </motion.div>
  );
}
