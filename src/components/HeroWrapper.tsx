import HeroContent from "./HeroContent";

const HeroWrapper = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/BrainsAndBrandsBackgroundImage.webp"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <HeroContent />
      </div>

    </section>
  );
};

export default HeroWrapper;