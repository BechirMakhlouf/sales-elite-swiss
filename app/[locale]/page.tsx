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
  return (
    <>
      <Header />
      <HeroSection heroSectionContent={landingPageContent.heroSection} />
      <ServicesSection servicesSectionContent={landingPageContent.ServicesSection}/>,
      <OffersSection offers={landingPageContent.ServicesSection.offers}/>
      <AboutUsSesction aboutUsSectionContent={landingPageContent.AboutUsSection}/>,
      <ContactUsSection contactUsSectionContent={landingPageContent.contactUsSection}/>,
      <Footer />,
    </>
  );
}
