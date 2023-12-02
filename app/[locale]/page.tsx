import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import AboutUsSesction from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

import { getLocale } from "next-intl/server";
import { getLandingPageContent } from "@/sanity/utils";

export default async function Index() {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const heroSectionContent = landingPageContent.heroSection;
  const servicesSectionContent = landingPageContent.ServicesSection;
  const offers = landingPageContent.ServicesSection.offers;
  const aboutUsSectionContent = landingPageContent.AboutUsSection;
  const contactUsSectionContent = landingPageContent.contactUsSection;
  return (
    <>
      <Header />
      <HeroSection heroSectionContent={heroSectionContent} />
      <ServicesSection servicesSectionContent={servicesSectionContent} />
      <OffersSection offers={offers} />
      <AboutUsSesction aboutUsSectionContent={aboutUsSectionContent} />
      <ContactUsSection contactUsSectionContent={contactUsSectionContent} />
      <Footer />
    </>
  );
}
