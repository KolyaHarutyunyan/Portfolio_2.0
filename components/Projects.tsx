"use client";

import Link from "next/link";
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
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Props = { projects: TProject[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative w-screen"
    >
      <div className="flex flex-col items-center justify-evenly h-screen mx-auto text-left md:flex-row z-0 max-w-7xl px-2 cursor-default">
        <h3 className="absolute sm:top-24 top-16 uppercase tracking-[10px] md:tracking-[20px] md:text-2xl text-xl">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 pt-40 custom-scrollbar">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="relative flex-shrink-0 snap-center flex flex-col md:space-y-5 space-y-3 items-center justify-start w-full"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-end gap-x-2"
              >
                <motion.img
                  initial={projectImageMotionInitial}
                  transition={projectImageMotionTransition}
                  whileInView={projectImageMotionWhileInView}
                  viewport={projectImageMotionViewport}
                  className="absolute md:-left-5 -left-3 z-20 -bottom-3 rounded-lg border-2 border-primary md:h-32 h-16"
                  src={urlFor(project.mobileImage).url()}
                  alt="project"
                />
                <motion.img
                  initial={projectImageMotionInitial}
                  transition={projectImageMotionTransition}
                  whileInView={projectImageMotionWhileInView}
                  viewport={projectImageMotionViewport}
                  className="rounded-lg border-2 border-primary md:w-72 w-36 md:h-48 h-24"
                  src={urlFor(project.desktopImage).url()}
                  alt="project"
                />
                <motion.img
                  initial={projectImageMotionInitial}
                  transition={projectImageMotionTransition}
                  whileInView={projectImageMotionWhileInView}
                  viewport={projectImageMotionViewport}
                  className="absolute z-20 md:-right-8 -right-6 -bottom-3 rounded-lg border-2 border-primary md:h-36 h-20"
                  src={urlFor(project.tabletImage).url()}
                  alt="project"
                />
                <ArrowTopRightOnSquareIcon className="absolute md:-top-2 -top-1 -right-7 opacity-0 group-hover:opacity-100 md:-right-10 translate-x-full md:w-7 md:h-7 w-4 h-4 text-primary transition-all animate-pulse group-hover:animate-none" />
              </Link>
              <div className="md:space-y-5 space-y-3 px-0 md:px-10 max-w-6xl">
                <div className="flex w-max items-center md:gap-x-2.5 gap-x-1 mx-auto md:text-4xl text-lg font-medium text-center">
                  <h4 className="">
                    Case study {i + 1} of {projects.length}:
                  </h4>{" "}
                  {/* <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative underline decoration-secondary"
                  >
                    {project.title}
                    <ArrowTopRightOnSquareIcon className="absolute top-1 opacity-0 group-hover:opacity-100 -right-1 translate-x-full md:w-5 md:h-5 w-3 h-3 text-primary transition-all animate-pulse group-hover:animate-none" />
                  </Link> */}
                  <h3 className="underline decoration-secondary">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center w-2/3 mx-auto">
                  {project.technologies.map((technology) => (
                    <Image
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt="project-technology"
                      className="md:h-10 md:w-10 w-6 h-6 rounded-full object-contain object-center bg-[#fef8f0]"
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
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full bg-secondary opacity-20 left-0 h-[500px] -skew-y-12" />
      <div className="absolute top-1/2 -translate-y-1/2 w-full bg-secondary opacity-20 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
}
