import { motion } from "framer-motion";
import {
  skillImageMotionInitial,
  skillImageMotionTransition,
  skillImageMotionWhileInView,
} from "@/constants";
import { urlFor } from "@/sanity";
import { TSkill } from "@/typings";

type Props = {
  skill: TSkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-default">
      <motion.img
        initial={skillImageMotionInitial(directionLeft)}
        transition={skillImageMotionTransition}
        whileInView={skillImageMotionWhileInView}
        className="rounded-full border border-primary/60 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out flex-shrink-0"
        src={urlFor(skill.image).url()}
        alt="skill"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#fef8f0] w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-xs text-center font-bold opacity-100 mb-2 md:w-20 xl:w-24 w-16">
            {skill.title}
          </p>
          <p className="text-3xl font-bold opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
