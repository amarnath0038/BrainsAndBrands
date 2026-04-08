import LogoBroken from "./LogoBroken";

const WhoItIsFor = () => {
  return (
    <section className="relative px-6 sm:px-8 md:px-16 lg:px-[123px] py-24 md:py-[60px] lg:py-[120px] bg-[#221e20]">
      
      <LogoBroken className="text-[#E9DACE]/20 absolute z-0 right-[7%] bottom-0 w-[90%] h-[60%] md:w-[22%] md:h-[100%] w-[272px] h-[212px]" />

      <div className="relative flex flex-col gap-10">
        <div className="relative z-10 flex flex-col text-left">
          <li className="text-white text-base md:text-lg font-medium mb-5 ml-4 md:ml-5">
            WHO IT IS FOR
          </li>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-[54px] font-medium tracking-tight max-w-5xl">
            FROM FIRST-TIMERS TO FULL-TIMERS
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src="/ServicesImage1.webp"
              alt="Studio"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 flex items-end relative">
            <div className="relative z-10 w-full">
              <p className="text-lg md:text-xl text-[#fff3e9] font-normal lg:w-4/5">
                Our flexible and adaptable studio space is designed to meet every idea an individual carries. Whether you’re a solo creator, a growing team, a first-timer, or an industry pro, our space adapts to you and every stage of your creative journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;