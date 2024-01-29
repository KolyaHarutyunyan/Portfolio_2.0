import Image from "next/image";
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
        <div className="flex flex-wrap gap-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="experience-technology"
              className="h-10 w-10 rounded-full object-contain object-center"
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-5 opacity-60">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 pb-5 overflow-y-scroll">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
