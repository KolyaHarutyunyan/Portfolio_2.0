import { motion } from "framer-motion";
import {
  experienceCardMotionInitial,
  experienceCardMotionTransition,
  experienceCardMotionViewport,
  experienceCardMotionWhileInView,
} from "@/constants";
import { urlFor } from "@/sanity";
import { TExperience } from "@/typings";

type Props = { experience: TExperience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#fef8f0] bg-opacity-50 transition-opacity cursor-pointer opacity-40 hover:opacity-100 duration-200 overflow-hidden">
      <motion.img
        initial={experienceCardMotionInitial}
        transition={experienceCardMotionTransition}
        whileInView={experienceCardMotionWhileInView}
        viewport={experienceCardMotionViewport}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
        src={urlFor(experience.companyImage).url()}
        alt="experience"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 opacity-60">{`Started work: ${
          experience.dateStarted
        } - Ended work: ${
          experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded
        }`}</p>
        <ul>
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
