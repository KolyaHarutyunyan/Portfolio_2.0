import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
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
    <Link
      href={experience.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg justify-between items-center space-y-7 flex-shrink-0 h-[550px] w-full sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#fef8f0] bg-opacity-50 cursor-pointer overflow-hidden lg:p-10 p-5"
    >
      <div className="border-b border-b-transparent transition-all group-hover:border-b-secondary absolute sm:top-3 sm:right-5 top-2 right-3 flex items-center sm:gap-x-2 gap-x-1">
        <span className="text-sm">Visit</span>
        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-primary" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start gap-3 justify-between">
        <div className="w-full flex flex-col items-center lg:items-start">
          <h4 className="md:text-2xl lg:text-3xl text-xl font-light">
            {experience.jobTitle}
          </h4>
          <p className="font-bold text-lg mt-1">{experience.company}</p>
          <p className="uppercase text-sm opacity-60 mt-1">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <div className="flex flex-wrap gap-2 my-2 justify-center lg:justify-start">
            {experience.technologies.map((technology) => (
              <Image
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt="experience-technology"
                className="sm:h-10 sm:w-10 w-7 h-7 rounded-full object-contain object-center bg-[#fef8f0]"
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
          className="sm:w-28 sm:h-28 w-20 h-20 flex-shrink-0 rounded-full xl:w-44 xl:h-44 object-fill object-center bg-[#fef8f0] p-2"
          src={urlFor(experience.companyImage).url()}
          alt="experience"
        />
      </div>
      <ul className="list-decimal h-56 space-y-2 text-sm max-h-96 overflow-y-scroll pr-2 text-justify custom-scrollbar">
        {experience.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Link>
  );
}
