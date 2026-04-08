import CalendlySection from "@/components/CalendlySection";
import ContactInfo from "@/components/ContactInfo";
import ContactPage from "@/components/ContactPage";
import ContactPageMain from "@/components/ContactPageMain";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <section>
        <Navbar />
        <ContactPageMain />
        <ContactSection />
        <ContactInfo />
        <CalendlySection />
        <ContactPage text="BOOK. CREATE EXPRESS." />
        <Footer />
    </section>
  );
};

export default Contact;