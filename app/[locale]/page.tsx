import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import AboutUsSesction from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function Index() {
  const Sections: ReactNode[] = [
    <HeroSection />,
    <ServicesSection />,
    <OffersSection />,
    <AboutUsSesction />,
    <ContactUsSection />,
    <Footer />,
  ];

  return (
    <>
      <Header />
      {Sections.map((ele, i) => (
        <div
          className={`w-screen flex justify-center ${
            i % 2 ? "bg-alternate-background" : ""
          }`}
        >
          <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
            {ele}
          </div>
        </div>
      ))}
    </>
  );
}
