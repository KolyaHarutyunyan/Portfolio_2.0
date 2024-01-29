"use client";

import { motion } from "framer-motion";
import {
  aboutImageMotionInitial,
  aboutImageMotionTransition,
  aboutImageMotionViewport,
  aboutImageMotionWhileInView,
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import { urlFor } from "@/sanity";
import { TPageInfo } from "@/typings";

type Props = { pageInfo: TPageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row mx-auto items-center justify-evenly max-w-7xl px-10 pt-40 overflow-scroll"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={aboutImageMotionInitial}
        transition={aboutImageMotionTransition}
        whileInView={aboutImageMotionWhileInView}
        viewport={aboutImageMotionViewport}
        className="object-cover rounded-full w-56 h-56 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] flex-shrink-0"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="about"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold mb-10">
          Here is a{" "}
          <span className="underline decoration-secondary">little</span>{" "}
          background
        </h4>
        <div className="space-y-5">
          <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
}
