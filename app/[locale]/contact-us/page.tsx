import Header from "@/components/Header";
import { NextPage, NextPageContext } from "next";
import { getLandingPageContent } from "@/sanity/utils";
import { getLocale } from "next-intl/server";
import ContactUsSection from "@/components/ContactUsSection";

const ContactUsPage: NextPage = async () => {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const contactUsSectionContent = landingPageContent.contactUsSection;

  return (
    <>
      <ContactUsSection contactUsSectionContent={contactUsSectionContent} />
    </>
  );
};

export default ContactUsPage;
