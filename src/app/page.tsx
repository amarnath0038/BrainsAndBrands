import Navbar from "@/components/Navbar";
import HeroWrapper from "@/components/HeroWrapper";
import HeroContent from "@/components/HeroContent";


export default function Home() {
  return (
    <div>
      <HeroWrapper>
        <Navbar className="relative z-50" />
        <HeroContent />
      </HeroWrapper>
    </div>
  );
}