import { NextPage } from "next";
import { getLandingPageContent } from "@/sanity/utils";
import { getLocale } from "next-intl/server";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import { Offer, OffersSectionContent } from "@/components/OffersSection";
const OurServices: NextPage = async () => {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const servicesSectionContent = landingPageContent.ServicesSection;
  const offersSectionContent: OffersSectionContent = {
    title: landingPageContent.ServicesSection.offersSection.title as string,
    offers: landingPageContent.ServicesSection.offers as Offer[],
  };
  return (
    <>
      <ServicesSection servicesSectionContent={servicesSectionContent} />
      <OffersSection  offersSectionContent={offersSectionContent}/>
    </>
  );
};

export default OurServices;
