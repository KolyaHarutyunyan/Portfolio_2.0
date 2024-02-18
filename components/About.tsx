"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity";
import {
  aboutImageMotionInitial,
  aboutImageMotionTransition,
  aboutImageMotionViewport,
  aboutImageMotionWhileInView,
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative min-h-screen flex flex-col text-center lg:text-left lg:flex-row mx-auto items-center justify-evenly max-w-7xl px-10 pt-40 overflow-scroll"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] md:text-2xl text-xl">
        About
      </h3>
      <motion.img
        initial={aboutImageMotionInitial}
        transition={aboutImageMotionTransition}
        whileInView={aboutImageMotionWhileInView}
        viewport={aboutImageMotionViewport}
        className="object-cover rounded-full w-56 h-56 lg:rounded-lg lg:w-72 lg:h-[400px] xl:w-[500px] xl:h-[600px] flex-shrink-0"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="about"
      />
      <div className="px-0 md:px-10">
        <h4 className="md:text-4xl text-2xl font-medium md:my-10 my-5 lg:mt-0">
          Here is a{" "}
          <span className="underline decoration-secondary">little</span>{" "}
          background
        </h4>
        <div className="space-y-5">
          <p className="md:text-base text-sm">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
