import ServicesPageMain from "@/components/ServicesPageMain";
import ServicesSwiper from "@/components/ServicesSwiper";
import Navbar from "@/components/Navbar";
import WhoItIsFor from "@/components/WhoItIsFor";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";


const Services = () => {
  return (
    <div>
        <Navbar />
        <ServicesPageMain />
        <ServicesSwiper />
        <WhoItIsFor />
        <ServicesSection />
        <PackagesSection />
        <WorkSection />
        <Footer />
    </div>
  );
};

export default Services;