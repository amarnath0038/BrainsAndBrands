"use client";

import { motion } from "framer-motion";

type ImageScrollerProps = {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

const ImageScroller = ({
  images,
  direction = "left",
  speed = 20,
  className = "",
}: ImageScrollerProps) => {
  const infiniteImages = [...images, ...images];

  const isLeft = direction === "left";

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex relative w-full overflow-hidden whitespace-nowrap">
        
        <motion.div
          animate={{
            x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: speed,
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
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default ImageScroller;