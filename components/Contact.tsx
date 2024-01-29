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
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-secondary">Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-secondary py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
