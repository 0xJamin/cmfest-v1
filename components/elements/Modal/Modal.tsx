import { ModalType } from "./types";
import Close from "@/public/CloseDark.svg";
import Shapes from "@/public/Shapes.svg";
import WeShare from "@/public/WeShare.svg";
import bgImage from "@/public/images/bg-white.png";
import Image from "next/image";
export function Modal({ children, heading, onModalClose }: ModalType) {
  return (
    <div>
      <div
        className="h-full bg-primary opacity-80 overflow-hidden  fixed z-30 h- w-full top-0 left-0"
        id="backdrop"
        onClick={onModalClose}
      />
      <div className="bg-white min-h-fit overflow-hidden absolute z-50 md:top-1/4 bottom-1/4 md:left-1/4 left-3 right-3 md:right-1/4 md:p-20 py-20 px-5 rounded-3xl min-w-fit">
        <button className="absolute top-10 right-10" onClick={onModalClose}>
          <Image src={Close} alt="close Icon" />
        </button>
        <Image
          src={WeShare}
          alt="Icon"
          height={100}
          className="absolute bottom-0 right-10 rotate-12 md:h-20 h-12"
        />
        <Image
          src={Shapes}
          alt="Icon"
          height={50}
          className="absolute top-5 left-5 rotate-12"
        />
        <Image
          src={bgImage}
          alt="background Image"
          className="absolute top-0 w-full h-full left-0 -z-10"
        />
        {/* Modal header */}
        <h2 className="font-heading text-4xl text-primary mb-8">{heading}</h2>
        {/* Modal Body */}
        <div className="hr" />
        <div>{children}</div>
      </div>
    </div>
  );
}
