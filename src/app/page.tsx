import Navbar from "@/components/Navbar";
import HeroWrapper from "@/components/HeroWrapper";
import HeroContent from "@/components/HeroContent";
import IntroSection from "@/components/IntroSection";
import AutoSwiperPage from "@/components/AutoSwiperPage";
import StudioPage from "@/components/StudioPage";



export default function Home() {
  return (
    <div>
      <HeroWrapper>
        <Navbar className="relative z-50" />
        <HeroContent />
      </HeroWrapper>

      <IntroSection />
      <AutoSwiperPage />
      <StudioPage />
    </div>
  );
}