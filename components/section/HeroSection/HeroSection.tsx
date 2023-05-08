import { storyblokEditable } from "@storyblok/react";

const HeroSection = ({ blok }: { blok: HeroType }) => {
  const { heading, description } = blok;
  return (
    <div>
      <h1 className="font-heading text-4xl">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HeroSection;
