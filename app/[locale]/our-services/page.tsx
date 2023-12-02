import { NextPage } from "next";
import { getLandingPageContent } from "@/sanity/utils";
import { getLocale } from "next-intl/server";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";

const OurServices: NextPage = async () => {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const servicesSectionContent = landingPageContent.ServicesSection;
  const offers = landingPageContent.ServicesSection.offers;
  return (
    <>
      <ServicesSection servicesSectionContent={servicesSectionContent} />
      <OffersSection offers={offers} />
    </>
  );
};

export default OurServices;
