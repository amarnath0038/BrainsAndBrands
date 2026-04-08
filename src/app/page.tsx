import Navbar from "@/components/Navbar";
import HeroWrapper from "@/components/HeroWrapper";
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
      <Navbar />
      <HeroWrapper />
      <IntroSection />
      <AutoSwiperPage />
      <StudioPage />
      <Features />
      <ServicesGrid />
      <FacesFrames />
      <StoriesSwiperPage />
      <ContactPage text="CREATE WITHOUT LIMITS" />
      <Footer />
    </div>
  );
}



















