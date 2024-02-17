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
      className="relative flex flex-col items-center justify-evenly h-screen mx-auto text-left md:flex-row z-0 max-w-full"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 pt-40 scrollbar scrollbar-track-[#ccc2b3] scrollbar-thumb-[#f6cc89]">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="flex items-end gap-x-2">
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="h-48"
                src={urlFor(project.tabletImage).url()}
                alt="project"
              />
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="w-80 h-52"
                src={urlFor(project.desktopImage).url()}
                alt="project"
              />
              <motion.img
                initial={projectImageMotionInitial}
                transition={projectImageMotionTransition}
                whileInView={projectImageMotionWhileInView}
                viewport={projectImageMotionViewport}
                className="h-44"
                src={urlFor(project.mobileImage).url()}
                alt="project"
              />
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-secondary">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center gap-3 flex-wrap justify-center w-1/2 mx-auto">
                {project.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="project-technology"
                    className="h-10 w-10 rounded-full object-contain object-center"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-2/3 -translate-y-2/3 w-full bg-secondary opacity-20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
