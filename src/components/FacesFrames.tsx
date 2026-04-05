import { outfit } from "@/lib/fonts";
import ImageScroller from "./ImageScroller";

const FacesFrames = () => {
  const r2Limages = [
    "/R2LSwiperImage1.webp",
    "/R2LSwiperImage2.webp",
    "/R2LSwiperImage3.webp",
  ];

  const l2Rimages = [
    "/L2RSwiperImage1.webp",
    "/L2RSwiperImage2.webp",
    "/L2RSwiperImage3.webp",
  ];

  return (
    <section className="bg-[#fff3e9]">
      
      {/* Header */}
      <div className="px-6 sm:px-8 md:px-16 pt-10 sm:pt-20">
        <div className="flex flex-col items-center text-center mb-10">
          
          <li className="text-black text-base md:text-lg font-medium mb-3 sm:mb-5">
            FACES & FRAMES
          </li>

          <h1 className={`${outfit.className} text-black text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight max-w-5xl`}>
            Brains & Brands provides a space that empowers creativity and supports expression.
          </h1>

        </div>
      </div>
      
      <div className="flex flex-col gap-11">
        {/*R2L Slider */}
        <ImageScroller images={r2Limages} direction="right" speed={20} />

        {/* L2R Slider */}
        <ImageScroller images={l2Rimages} direction="left" speed={20} />
      </div>

    </section>
  );
};

export default FacesFrames;