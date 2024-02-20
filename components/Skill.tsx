import Image from "next/image";
import { urlFor } from "@/sanity";
import { TSkill } from "@/typings";

type Props = {
  skill: TSkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-default">
      <Image
        className="rounded-full bg-[#fef8f0] object-contain object-center w-16 h-16 filter group-hover:scale-150 group-hover:grayscale transition duration-300 ease-in-out flex-shrink-0"
        src={urlFor(skill.image).url()}
        width={64}
        height={64}
        alt="skill"
      />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[#fef8f0] w-24 h-24 p-1 origin-center rounded-full z-0">
        <div className="flex flex-col justify-evenly items-center h-full gap-1">
          <p className="text-xs text-center font-bold opacity-100 w-[80%]">
            {skill.title}
          </p>
          <p className="text-2xl font-bold opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
