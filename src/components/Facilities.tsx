const Facilities = () => {
  return (
    <section>

        {/*Desktop */}
        <div className="w-full bg-[#fff3e9] py-24 md:py-[200px] lg:py-[300px] hidden md:block relative">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[30px]">
                {/*First column*/}
                <div className="relative overflow-hidden h-[335px] xl:h-[23.26vw] md:w-[65%] md:left-[35%] md:top-[-30%]">
                    <img 
                    src="/FacilitiesImage1.webp"
                    alt="vision"
                    className="w-full h-full object-cover"
                    loading="lazy">
                    </img>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                            Studio Rental
                        </p>
                    </div>
                </div>

                {/*Second column*/}
                <div className="relative overflow-hidden h-[335px] xl:h-[23.26vw] md:w-[85%] md:right-[-15%]">
                    <img 
                    src="/FacilitiesImage2.webp"
                    alt="vision"
                    className="w-full h-full object-cover"
                    loading="lazy">
                    </img>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                            Professional Equipment
                        </p>
                    </div>
                </div>

                {/*Third column*/}
                <div className="relative overflow-hidden h-[335px] xl:h-[23.26vw] md:w-[85%]">
                    <img 
                    src="/FacilitiesImage3.webp"
                    alt="vision"
                    className="w-full h-full object-cover"
                    loading="lazy">
                    </img>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal text-center w-2/5">
                            On-ground Technical Support
                        </p>
                    </div>
                </div>

                {/*Fourth column*/}
                <div className="relative overflow-hidden h-[335px] xl:h-[23.26vw] md:w-[65%] md:bottom-[30%]">
                    <img 
                    src="/FacilitiesImage4.webp"
                    alt="vision"
                    className="w-full h-full object-cover"
                    loading="lazy">
                    </img>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-normal">
                            Production Package
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/*Mobile */}
        <div></div>
    </section>
  );
};

export default Facilities;