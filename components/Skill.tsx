import { motion } from "framer-motion";
import {
  skillImageMotionInitial,
  skillImageMotionTransition,
  skillImageMotionWhileInView,
} from "@/constants";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-default">
      <motion.img
        initial={skillImageMotionInitial(directionLeft)}
        transition={skillImageMotionTransition}
        whileInView={skillImageMotionWhileInView}
        className="rounded-full border border-primary/60 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out flex-shrink-0"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        alt="skill"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#fef8f0] w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
