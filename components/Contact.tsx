"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import {
  wrapperMotionInitial,
  wrapperMotionTransition,
  wrapperMotionWhileInView,
} from "@/constants";
import { TPageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: TPageInfo };

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    email,
    subject,
    message,
  }) => {
    window.location.href = `mailto:haryan.geko@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message} (${email})`;
  };

  return (
    <motion.div
      initial={wrapperMotionInitial}
      whileInView={wrapperMotionWhileInView}
      transition={wrapperMotionTransition}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-2 sm:px-4 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute sm:top-24 top-16 uppercase tracking-[10px] md:tracking-[20px] md:text-2xl text-xl">
        Contact
      </h3>
      <div className="flex flex-col items-center md:space-y-10 space-y-5 pt-24">
        <h4 className="md:text-4xl text-2xl font-medium text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-secondary">Lets talk.</span>
        </h4>
        <div className="md:space-y-3 space-y-1">
          <div className="flex items-center space-x-3 justify-left">
            <EnvelopeIcon className="text-secondary md:h-7 md:w-7 h-5 w-5 animate-pulse" />
            <p className="md:text-xl text-sm opacity-60 font-extralight">
              {pageInfo?.email}
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-left">
            <MapPinIcon className="text-secondary md:h-7 md:w-7 h-5 w-5 animate-pulse" />
            <p className="md:text-xl text-sm opacity-60 font-extralight">
              {pageInfo?.address}
            </p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 md:w-fit w-full mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row gap-2">
            <input
              className="outline-none bg-[#fef8f0] focus:opacity-100 transition-opacity opacity-70 rounded-sm border-b md:px-6 md:py-4 px-4 py-2 md:text-sm text-xs border-secondary text-primary"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="outline-none bg-[#fef8f0] focus:opacity-100 transition-opacity opacity-70 rounded-sm border-b md:px-6 md:py-4 px-4 py-2 md:text-sm text-xs border-secondary text-primary"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="outline-none bg-[#fef8f0] focus:opacity-100 transition-opacity opacity-70 rounded-sm border-b md:px-6 md:py-4 px-4 py-2 md:text-sm text-xs border-secondary text-primary"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="outline-none bg-[#fef8f0] focus:opacity-100 transition-opacity opacity-70 rounded-sm border-b md:px-6 md:py-4 px-4 py-2 md:text-sm text-xs border-secondary text-primary"
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-secondary md:px-6 md:py-4 px-4 py-2 md:text-sm text-xs rounded-md text-[#fef8f0] font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
