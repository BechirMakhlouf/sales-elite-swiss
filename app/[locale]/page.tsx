import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection, { Offer, OffersSectionContent } from "@/components/OffersSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";

import { getLocale } from "next-intl/server";
import { getLandingPageContent } from "@/sanity/utils";

export default async function Index() {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const heroSectionContent = landingPageContent.heroSection;
  const servicesSectionContent = landingPageContent.ServicesSection;
  const offersSectionContent: OffersSectionContent = {
    title: landingPageContent.ServicesSection.offersSection.title as string,
    offers: landingPageContent.ServicesSection.offers as Offer[],
  };
  const aboutUsSectionContent = landingPageContent.AboutUsSection;
  const contactUsSectionContent = landingPageContent.contactUsSection;
  return (
    <>
      <HeroSection heroSectionContent={heroSectionContent} />
      <ServicesSection servicesSectionContent={servicesSectionContent} />
      <OffersSection offersSectionContent={offersSectionContent}/>
      <AboutUsSection aboutUsSectionContent={aboutUsSectionContent} />
      <ContactUsSection contactUsSectionContent={contactUsSectionContent} />
    </>
  );
}
