import Header from "@/components/Header";
import { NextPage, NextPageContext } from "next";
import { getLandingPageContent } from "@/sanity/utils";
import { getLocale } from "next-intl/server";
import ContactUsSection from "@/components/ContactUsSection";

const ContactUsPage: NextPage = async (context: NextPageContext) => {
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
      <ContactUsSection contactUsSectionContent={contactUsSectionContent} />
    </>
  );
};

export default ContactUsPage;
