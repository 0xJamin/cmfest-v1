import Image, { StaticImageData } from "next/image";

export function ImageSlide({ image }: { image: string | StaticImageData }) {
  return (
    <div className="image-slider relative p-4 ">
      <Image src={image} alt="Slider photo" className="shadow-xl" />
    </div>
  );
}
