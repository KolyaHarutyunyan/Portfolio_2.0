"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import {
  contactInputClassName,
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
      <div className="flex flex-col items-center space-y-10 pt-24">
        <h4 className="text-4xl font-medium text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-secondary">Lets talk.</span>
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 justify-left">
            <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-xl opacity-60 font-extralight">
              {pageInfo?.email}
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-left">
            <MapPinIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-xl opacity-60 font-extralight">
              {pageInfo?.address}
            </p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              className={contactInputClassName}
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className={contactInputClassName}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className={contactInputClassName}
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className={contactInputClassName}
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-secondary py-5 px-10 rounded-md text-[#fef8f0] font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
