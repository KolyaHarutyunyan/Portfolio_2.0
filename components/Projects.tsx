"use client";

import { motion } from "framer-motion";
import {
  projectImageMotionInitial,
  projectImageMotionTransition,
  projectImageMotionViewport,
  projectImageMotionWhileInView,
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";

type Props = {};

const projects = [1, 2, 3, 4, 5, 6];

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative flex flex-col items-center justify-evenly min-h-screen mx-auto text-left md:flex-row z-0 max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 pt-40 scrollbar scrollbar-track-[#ccc2b3] scrollbar-thumb-[#f6cc89]">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={projectImageMotionInitial}
              transition={projectImageMotionTransition}
              whileInView={projectImageMotionWhileInView}
              viewport={projectImageMotionViewport}
              className="w-80 h-52"
              src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/data-science-projects.png"
              alt="project"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-secondary">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                ipsam doloremque illo veniam quod, quibusdam ducimus est magnam
                reiciendis iste perspiciatis cum recusandae reprehenderit
                temporibus error autem eum ullam placeat voluptatibus vero?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[30%] w-full bg-secondary opacity-20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
