import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function ImageSlide({ image }: { image: string | StaticImageData }) {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          animate={{ y: [0, -1000] }}
          transition={{
            delay: 2,
            type: "damping",
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        >
          <div className="image-slider relative p-4 m-7">
            <Image src={image} alt="Slider photo" fill />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
