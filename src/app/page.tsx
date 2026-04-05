import Navbar from "@/components/Navbar";
import HeroWrapper from "@/components/HeroWrapper";
import HeroContent from "@/components/HeroContent";
import IntroSection from "@/components/IntroSection";
import AutoSwiperPage from "@/components/AutoSwiperPage";
import StudioPage from "@/components/StudioPage";
import Features from "@/components/Features";
import ServicesGrid from "@/components/ServicesGrid";
import FacesFrames from "@/components/FacesFrames";
import StoriesSwiperPage from "@/components/StoriesSwiperPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";



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
      <Features />
      <ServicesGrid />
      <FacesFrames />
      <StoriesSwiperPage />
      <ContactPage />
      <Footer />
    </div>
  );
}



















