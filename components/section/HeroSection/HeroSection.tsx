import { storyblokEditable } from "@storyblok/react";

const HeroSection = ({ blok }: { blok: HeroType }) => {
  const { heading, description } = blok;
  return <h1>{heading}</h1>;
};

export default HeroSection;
