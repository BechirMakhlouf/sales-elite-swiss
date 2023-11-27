import { client } from "./lib/client";
import imageUrlBuilder from "@sanity/image-url";

const getLandingPageContent = async (localeCode: "en" | "de") => {
  return await client.fetch(
    `*[landingPageLocale == "${localeCode.toLowerCase()}"][0]`,
  );
};

const builder = imageUrlBuilder(client);

const getSanityImageUrl = function (source: any, width?: number) {
  width;
  return builder.image(source).crop("center").url();
};

export { getLandingPageContent, getSanityImageUrl };
