import ImageScroller from "./ImageScroller";


const ServicesSwiper = () => {
  const baseImages = [
    "/SwiperImage1.webp",
    "/SwiperImage2.webp",
    "/SwiperImage3.webp",
  ];
  return (
    <section className="relative bg-[#fff3e9] py-24 md:py-[140px] lg:py-[200px]">

      <div className="relative px-6 sm:px-8 md:px-16 lg:px-[123px]">
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex-grow flex flex-col mb-10 md:mb-15 uppercase">
                <li className="text-blacktext-base md:text-lg font-medium mb-3 sm:mb-5 md:leading-6 ml-4 md:ml-5">
                    OUR AMBIENCE
                </li>
                <h1 className="text-black text-4xl lg:text-5xl font-medium -tracking-wide max-w-5xl">
                    DESIGNED FOR EVERY CREATOR
                </h1>
            </div>
        </div>
      </div>

      {/*Swiper */}
      <ImageScroller images={baseImages} direction="left" speed={20} />
    </section>
  );
};

export default ServicesSwiper;