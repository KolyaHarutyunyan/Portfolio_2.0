"use client";

import Image from "next/image";
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

type Props = {};

export default function About({}: Props) {
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
        src="https://staff.am/staffmedia/wp-content/uploads/sites/9/2021/09/IT-Hire-1068x713-1.png"
        alt="about"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold mb-10">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <div className="space-y-5">
          <p className="text-base">
            Seasoned Software Engineer with{" "}
            <span className="underline decoration-[#F7AB0A]">
              over 5 years of hands-on experience
            </span>{" "}
            in the dynamic realm of software development. I am passionate about
            crafting robust, scalable, and innovative solutions that not only
            meet but exceed the ever-evolving demands of the digital landscape
          </p>
          <p className="text-base">
            My expertise extends across the entire software development
            lifecycle, from conceptualization and design to implementation,
            testing, and deployment. I thrive in collaborative environments,
            fostering open communication and teamwork to achieve project
            milestones efficiently. My ability to translate complex technical
            concepts into clear, actionable insights enables me to effectively
            communicate with cross-functional teams, stakeholders, and clients.
          </p>
          <p className="text-base">
            As a Senior Software Engineer, I am committed to pushing the
            boundaries of what is possible in the world of technology. I am
            excited about the prospect of tackling new challenges, embracing
            emerging technologies, and contributing to the success of
            forward-thinking projects.
          </p>
          <p className="text-base">
            Thank you for visiting my portfolio. I look forward to the
            opportunity to collaborate on cutting-edge projects and contribute
            my skills to drive technological advancements.{" "}
            <span className="underline decoration-[#F7AB0A]">
              Let`s build the future together!
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
