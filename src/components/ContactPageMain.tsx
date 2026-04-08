const ContactPageMain = () => {
  return (
    <section className="relative w-full pt-16 pb-24 md:pt-20 lg:pt-28 xl:pt-32 h-[min(561px,85vh)]">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ContactPageMain.webp')", }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-[123px] pb-15 lg:pb-30 h-full flex flex-col justify-end">
          <div>
            <h1 className="md:max-w-3xl text-[40px] md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 lg:mb-8">
              START YOUR CREATIVE JOURNEY TODAY
            </h1>

            <p className="md:max-w-lg lg:max-w-xl text-base md:text-base lg:text-lg font-normal text-white/90">
              Whether you’re booking your slot, exploring our space, or just asking a question,
               we’re here to help. Drop us a message and let’s get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageMain;