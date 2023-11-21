import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSesction from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <HeroSection />
      </div>
      <ServicesSection />
      <AboutUsSesction />
      <ContactUsSection />
      <Footer />
    </>
  );
}
