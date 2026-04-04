const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
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
        {children}
      </div>

    </section>
  );
};

export default HeroWrapper;