import AnimatedHero from "./AnimatedHero";
import AnimatedTextGSAP from "./AnimatedHero";
import AnimatedText from "./AnimatedText";
import SideLogo from "./SideLogo";
import VideoSection from "./VideoSection";
import { outfit } from "@/lib/fonts";

const HeroContent = () => {
  return (
    <div className="flex-grow flex flex-col justify-start pt-16 items-center px-6 sm:px-8 md:px-16 lg:px-[123px] text-white text-center">

      <p className={`${outfit.className} tracking-tight text-base sm:text-lg lg:text-xl font-light mb-4`}>
        Where vision meets velocity, an AI-enabled multi-use studio redefining creativity
      </p>

      {/* <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-4xl uppercase mb-6">
        A SPACE TO EXPRESS & EXPERIENCE
      </h1> */}
      <AnimatedHero
        lines={[
          "A SPACE TO EXPRESS &",
          "EXPERIENCE",
        ]}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-4xl uppercase mb-6"
      />

      <SideLogo
        text="Create Without Limits"
        className="gap-6 mt-4 border border-white/40 hover:border-white/50 bg-white/10 hover:bg-black/30 rounded-full px-6 py-3 backdrop-blur-sm transition duration-300"
      />

      <VideoSection />

    </div>
  );
};

export default HeroContent;