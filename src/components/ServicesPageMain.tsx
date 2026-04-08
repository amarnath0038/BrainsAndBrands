const ServicesPageMain = () => {
  return (
    <section className="relative w-full pt-16 pb-24 md:pt-20 lg:pt-28 xl:pt-32 h-[min(561px,85vh)]">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ExploreStudio.webp')", }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-[123px] pb-15 lg:pb-30 h-full flex flex-col justify-end">
          <div>
            <h1 className="md:max-w-3xl text-[40px] md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 lg:mb-8">
              A SPACE FOR EVERY EXPERIENCE
            </h1>

            <p className="md:max-w-lg lg:max-w-xl text-base md:text-base lg:text-lg font-normal text-white/90">
              At Brains & Brands, we’ve built a space for creators to express
              freely and immerse themselves in the full journey of content
              creation. Designed for multi-purpose use, we offer end-to-end
              solutions, all under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageMain;