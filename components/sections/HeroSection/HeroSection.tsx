import Button from "@/components/elements/Button";
import photo from "../../../public/images/cm1.png";
import photo2 from "../../../public/images/cm2.png";
import photo3 from "../../../public/images/cm3.png";
import Slider from "@/components/modules/Slider";
import ImageSlide from "@/components/elements/ImageSlide";

const HeroSection = ({ blok }: { blok: HeroType }) => {
  console.log(blok);
  const { label, heading, description, cta_buttons } = blok;
  const sliderPhotos = [photo, photo2, photo3];
  return (
    <section>
      <div className="container-fluid max-w-screen-2xl mx-auto px-10">
        <div className="bg-secondary rounded-4xl h-full py-8">
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
              <div className="clo-span-3">
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
