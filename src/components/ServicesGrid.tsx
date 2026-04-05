const ServicesGrid = () => {
  return (
    <section>
      {/* Desktop View */}
      <div className="w-full bg-[#fff3e9] py-24 md:py-[200px] lg:py-[300px] hidden md:block relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-[30px]">

          {/* First */}
          <div className="relative group h-[335px] xl:h-[23.26vw] md:w-[65%] md:left-[35%] md:top-[-30%]">
            <img
              src="FacilitiesImage1.webp"
              alt="Studio Rental"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                Studio Rental
              </p>
            </div>
          </div>

          {/* Second */}
          <div className="relative group h-[335px] xl:h-[23.26vw] md:w-[85%] md:right-[-15%]">
            <img
              src="FacilitiesImage2.webp"
              alt="Professional Equipment"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                Professional Equipment
              </p>
            </div>
          </div>

          {/* Third */}
          <div className="relative group h-[335px] xl:h-[23.26vw] md:w-[85%]">
            <img
              src="FacilitiesImage3.webp"
              alt="On-ground Technical Support"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal text-center w-2/5">
                On-ground Technical Support
              </p>
            </div>
          </div>

          {/* Fourth */}
          <div className="relative group h-[335px] xl:h-[23.26vw] md:w-[65%] md:bottom-[-30%]">
            <img
              src="FacilitiesImage4.webp"
              alt="Production Package"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                Production Package
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full bg-[#fff3e9] px-6 pt-24 pb-[60px] md:py-[200px] lg:py-[300px] 2xl:py-[350px] block md:hidden relative">
        <div className="flex flex-col gap-10">

          {/* 1 */}
          <div className="relative h-64">
            <img
              src="FacilitiesImage1.webp"
              alt="Studio Rental"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl lg:text-3xl font-normal">
                Studio Rental
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="relative h-64">
            <img
              src="FacilitiesImage2.webp"
              alt="Professional Equipment"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl lg:text-3xl font-normal">
                Professional Equipment
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="relative h-64">
            <img
              src="FacilitiesImage3.webp"
              alt="On-ground Technical Support"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl lg:text-3xl font-normal text-center w-3/5">
                On-ground Technical Support
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="relative h-64">
            <img
              src="FacilitiesImage4.webp"
              alt="Production Package"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl lg:text-3xl font-normal">
                Production Package
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;