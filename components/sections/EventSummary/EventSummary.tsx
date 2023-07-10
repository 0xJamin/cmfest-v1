import Image from "next/image";
import React from "react";
import cm8 from "../../../public/images/cm8.png";
import cm6 from "../../../public/images/cm6.png";
import cm1 from "../../../public/images/cm1.png";

const EventSummary = ({ blok }: { blok: EventSummaryType }) => {
  const { topics, sponsors, summary } = blok;
  return (
    <section className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-6 md:grid-rows-3 mt-16 h-[800px]">
      <div className="bg-slate-500 col-start-1 row-start-2 col-span-3 md:col-span-4 md:row-start-1 md:row-span-2 md:overflow-hidden">
        <Image
          src={cm8}
          className="object-cover w-full h-full"
          alt="Previous event summary image"
        />
      </div>
      <div className="bg-[#181B36] text-white flex flex-col text-center justify-center md:static">
        <p className="text-3xl">20+</p>
        <p className="ml-6 text-lg">Sponsors</p>
      </div>
      <div className="bg-[#853DE2] col-start-2 row-start-1  md:col-start-6 md:row-start-3 md:row-end-4 text-white flex flex-col text-center justify-center">
        <p className="text-3xl">10+</p>
        <p className="ml-2 text-xl">Topics</p>
      </div>
      <div className="md:bg-green-500 md:row-start-2 md:row-span-2 hidden md:grid">
        <Image
          src={cm6}
          className="object-cover w-full h-full"
          alt="Previous event summary image"
        />
      </div>
      <div className="md:bg-[#853DE2] md:row-end-3 md:row-span-2 md:overflow-hidden hidden md:grid">
        <Image
          src={cm1}
          className="object-cover w-full h-full"
          alt="Previous event summary image"
        />
      </div>
      <div className="container-fluid bg-[#181B36] col-start-1 col-span-4 flex items-center justify-start">
        <p className="container text-white md:text-2xl max-w-[340px] ml-5 md:ml-auto text-xl md:max-w-[480px] lg:max-w-[690px] mx-auto">
          20+ Speakers We create interactions within their communities that help
          people connect and exchange skills and ideas to enrich each other.
        </p>
      </div>
    </section>
  );
};

export default EventSummary;
// md:grid-cols-[minmax(400px,_1fr)_250px_250px]
