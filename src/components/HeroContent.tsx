import AnimatedHero from "./AnimatedHero";
import SideLogo from "./SideLogo";
import VideoSection from "./VideoSection";
import { outfit } from "@/lib/fonts";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex-grow flex flex-col justify-start pt-6 md:pt-8 lg:pt-10 items-center px-6 sm:px-8 md:px-16 lg:px-[123px] text-white text-center">

      <p className={`${outfit.className} tracking-tight text-base sm:text-lg lg:text-xl font-light mb-4`}>
        Where vision meets velocity, an AI-enabled multi-use studio redefining creativity
      </p>

      <AnimatedHero
        lines={[
          "A SPACE TO EXPRESS &",
          "EXPERIENCE",
        ]}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium max-w-4xl uppercase mb-6"
      />

      <Link href="/contact">
        <SideLogo
          text="Create Without Limits"
          className="gap-3 mt-4 border border-white/40 hover:border-white/50 bg-white/10 hover:bg-black/30 rounded-full px-6 py-3 backdrop-blur-sm transition duration-300"
        />
      </Link>
      <VideoSection />

    </div>
  );
};

export default HeroContent;