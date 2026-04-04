"use client";

import { motion } from "framer-motion";

const baseImages = [
  "/SwiperImage1.webp",
  "/SwiperImage2.webp",
  "/SwiperImage3.webp",
];

// duplicate for seamless loop
const infiniteImages = [...baseImages, ...baseImages];

const ImageScroller = () => {
  return (
    <section className="w-full bg-[#FFF2E8] py-20 overflow-hidden">
      
      <div className="flex relative w-full overflow-hidden whitespace-nowrap">
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20, // faster since it's just images
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max"
        >
          {infiniteImages.map((src, i) => (
            <div
              key={i}
              className="w-[320px] lg:w-[400px] xl:w-[480px] 2xl:w-[597px] h-[182px] lg:h-[228px] xl:h-[274px] 2xl:h-[340px] overflow-hidden shrink-0"
            >
              <img
                src={src}
                alt={`img-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ImageScroller;