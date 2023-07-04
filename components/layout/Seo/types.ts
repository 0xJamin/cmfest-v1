import { StaticImageData } from "next/image";
export type SEOTypes = {
  title: string;
  description: string;
  url: string;
  image: StaticImageData | string;
  ogType: string;
};
