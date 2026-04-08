import CalendlySection from "@/components/CalendlySection";
import ContactInfo from "@/components/ContactInfo";
import ContactPage from "@/components/ContactPage";
import ContactPageMain from "@/components/ContactPageMain";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section>
        <Navbar />
        <ContactPageMain />
        <ContactForm />
        <ContactInfo />
        <CalendlySection />
        <ContactPage text="BOOK. CREATE EXPRESS." />
        <Footer />
    </section>
  );
};

export default Contact;