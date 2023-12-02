import { NextPage } from "next";
import { getLandingPageContent } from "@/sanity/utils";
import { getLocale } from "next-intl/server";
import AboutUsSection from "@/components/AboutUsSection";

const AboutUsPage: NextPage = async () => {
  const landingPageContent = await getLandingPageContent(
    await getLocale() as "en" | "de",
  );
  const aboutUsSectionContent = landingPageContent.AboutUsSection;

  return (
    <>
      <AboutUsSection aboutUsSectionContent={aboutUsSectionContent} />
    </>
  );
};

export default AboutUsPage;
