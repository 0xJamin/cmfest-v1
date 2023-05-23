import { ImageSlide } from "@/components/elements/ImageSlide/ImageSlide";
import { SliderType } from "./types";

export function Slider({ photos }: SliderType) {
  return (
    <div>
      {photos.map((photo, i) => (
        <ImageSlide image={photo} key={i} />
      ))}
    </div>
  );
}
