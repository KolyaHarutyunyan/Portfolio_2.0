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
    <article className="flex flex-col rounded-lg justify-between items-center space-y-7 flex-shrink-0 h-[600px] w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#fef8f0] bg-opacity-50 cursor-pointer overflow-hidden p-10">
      <div className="flex justify-between">
        <div className="w-full">
          <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
          <p className="font-bold text-lg mt-1">{experience.company}</p>
          <p className="uppercase text-sm opacity-60 mt-1">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
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
        </div>
        <motion.img
          initial={experienceCardMotionInitial}
          transition={experienceCardMotionTransition}
          whileInView={experienceCardMotionWhileInView}
          viewport={experienceCardMotionViewport}
          className="w-20 h-20 flex-shrink-0 rounded-full xl:w-44 xl:h-44 object-fill object-center bg-[#fef8f0] p-2"
          src={urlFor(experience.companyImage).url()}
          alt="experience"
        />
      </div>
      <ul className="list-decimal h-56 space-y-2 text-sm max-h-96 overflow-y-scroll pr-6 text-justify scrollbar scrollbar-track-[#ccc2b3] scrollbar-thumb-[#f6cc89]">
        {experience.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
