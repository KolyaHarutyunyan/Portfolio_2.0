"use client";

import Image from "next/image";
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
import { urlFor } from "@/sanity";
import { TProject } from "@/typings";

type Props = { projects: TProject[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative flex flex-col items-center justify-evenly h-screen mx-auto text-left md:flex-row z-0 max-w-[1240px]"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] md:text-2xl text-xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 pt-40 custom-scrollbar">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="flex-shrink-0 snap-center flex flex-col md:space-y-5 space-y-3 items-center justify-start w-full"
          >
            <div className="flex items-end gap-x-2">
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="md:max-w-none max-w-11 md:h-48 h-24"
                src={urlFor(project.tabletImage).url()}
                alt="project"
              />
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="md:w-80 w-40 md:h-52 h-28"
                src={urlFor(project.desktopImage).url()}
                alt="project"
              />
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="md:max-w-none max-w-8 md:h-44 h-20"
                src={urlFor(project.mobileImage).url()}
                alt="project"
              />
            </div>
            <div className="md:space-y-5 space-y-3 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl text-lg font-medium text-center">
                <span className="underline decoration-secondary">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap justify-center w-2/3 mx-auto">
                {project.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="project-technology"
                    className="md:h-10 md:w-10 w-6 h-6 rounded-full object-contain object-center"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <p className="md:text-sm text-xs text-center max-w-md px-4 md:max-w-2xl mx-auto">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full bg-secondary opacity-20 left-0 h-[500px] -skew-y-12" />
      <div className="absolute top-1/2 -translate-y-1/2 w-full bg-secondary opacity-20 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
}
