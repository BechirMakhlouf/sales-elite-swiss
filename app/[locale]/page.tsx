import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSesction from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full xl:w-[80%] lg:w-[90%]">
          <Header />
          <HeroSection />
          <ServicesSection />
          <AboutUsSesction />
          <ContactUsSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
