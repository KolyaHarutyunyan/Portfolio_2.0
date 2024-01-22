import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
            <p className="text-2xl">haryan.geko@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-2xl">Yerevan, Armenia</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
              type="text"
              placeholder="Name"
            />
            <input
              className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="outline-none bg-[#fef8f0] rounded-sm border-b px-6 py-4 border-secondary text-primary"
            placeholder="Message"
          />
          <button
            className="bg-secondary py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
