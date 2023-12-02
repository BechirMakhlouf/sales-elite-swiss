import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import AboutUsSection from "@/components/AboutUsSection";
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
      <HeroSection heroSectionContent={heroSectionContent} />
      <ServicesSection servicesSectionContent={servicesSectionContent} />
      <OffersSection offers={offers} />
      <AboutUsSection aboutUsSectionContent={aboutUsSectionContent} />
      <ContactUsSection contactUsSectionContent={contactUsSectionContent} />
    </>
  );
}
