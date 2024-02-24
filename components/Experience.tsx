"use client";

import { motion } from "framer-motion";
import {
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import ExperienceCard from "./ExperienceCard";
import { TExperience } from "@/typings";

type Props = { experiences: TExperience[] };

export default function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative h-screen flex flex-col md:flex-row max-w-7xl justify-evenly mx-auto text-left overflow-hidden items-center pt-40"
    >
      <h3 className="absolute sm:top-24 top-16 uppercase tracking-[10px] md:tracking-[20px] md:text-2xl text-xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory custom-scrollbar mb-2">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
