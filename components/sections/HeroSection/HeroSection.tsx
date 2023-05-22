import { Button } from "@/components/elements/Button/Button";
import { storyblokEditable } from "@storyblok/react";

const HeroSection = ({ blok }: { blok: HeroType }) => {
  console.log(blok);
  const { label, heading, description, cta_buttons } = blok;
  return (
    <section>
      <div className="container-fluid max-w-screen-2xl mx-auto px-10 mt-32">
        <div className="bg-secondary rounded-4xl">
          <div className="container max-w-screen-xl mx-auto p-8">
            <div className="grid grid-cols-7 grid-flow-col gap-4">
              <div className="col-span-4">
                <span>{label}</span>
                <h1 className="font-heading text-7xl font-bold leading-tight mb-5">
                  {heading}
                </h1>
                <p className="mb-5">{description}</p>
                <div className="mt-10">
                  {cta_buttons.map((button) => (
                    <Button key={button._uid} {...button} />
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
