import React, { useState } from "react";
import Button from "@/components/elements/Button";
import photo from "@/public/images/cm1.png";
import photo2 from "@/public/images/cm2.png";
import photo3 from "@/public/images/cm4.png";
import photo4 from "@/public/images/cm5.png";
import Slider from "@/components/modules/Slider";
import ImageSlide from "@/components/elements/ImageSlide";
import WaitList from "@/components/modules/WaitList";

const HeroSection = ({ blok }: { blok: HeroType }) => {
  const { label, heading, description, cta_buttons } = blok;
  const sliderPhotos = [photo, photo2, photo3, photo4];
  const [isWaitlistOpen, setWaitlist] = useState(false);
  const triggerWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    setWaitlist(!isWaitlistOpen);
  };
  return (
    <section>
      <div className="container-fluid max-w-screen-2xl mx-auto px-5 lg:px-10 mt-10">
        <div className=" bg-inherit lg:bg-secondary-light rounded-4xl h-full p-4 lg:p-0">
          <div className="container max-w-screen-xl mx-auto ">
            <div className="grid grid-cols-7 grid-flow-col gap-4 items-center">
              <div className="col-span-12 lg:col-span-4 text-center lg:text-left ">
                <span className="mb-5 lg:mb-0">{label}</span>
                <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-10">
                  {heading}
                </h1>
                <p className="mb-5">{description}</p>
                <div className="mt-10 flex gap-6 flex-col md:flex-row items-center justify-center md:justify-normal">
                  {cta_buttons.map((button) => (
                    <Button
                      key={button._uid}
                      {...button}
                      onClick={triggerWaitlist}
                    />
                  ))}
                </div>
                {isWaitlistOpen && (
                  <WaitList handleModalClose={triggerWaitlist} />
                )}
              </div>
              <div className="hidden lg:block col-span-3">
                <Slider>
                  {sliderPhotos.map((photo, id) => (
                    <ImageSlide image={photo} key={id} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
