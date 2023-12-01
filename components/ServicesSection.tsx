import ImageVariant1 from "./ui/ImageVariant1";

import { Offer } from "./OffersSection";

interface ServicesSectionContent {
  servicesSectionTitle: string;
  paragraphTitle: string;
  servicesDescription: string;
  offers: Offer[];
  image: {
    asset: any;
    alt: string;
  };
}

const ServicesSection = (
  { servicesSectionContent }: {
    servicesSectionContent: ServicesSectionContent;
  },
) => {
  return (
    <>
      <div
        id="services-section"
        className="w-screen flex justify-center bg-alternate-background"
      >
        <div className="w-full lg:w-[90%] xl:w-[80%] md:px-6">
          <div className="py-4 w-full">
            <h1 className="mx-2 my-4 text-4xl lg:text-5xl underline decoration-dashed decoration-secondary">
              {servicesSectionContent.servicesSectionTitle}
            </h1>
            <div className="my-8 mx-4 flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row min-h-[42rem] lg:justify-stretch lg:items-stretch">
              <div className="w-full flex flex-col justify-center gap-y-4">
                <h2 className="text-3xl">
                  {servicesSectionContent.paragraphTitle}
                </h2>
                <p className="md:indent-10">
                  {servicesSectionContent.servicesDescription}
                </p>
              </div>

              <div className="px-4 w-full flex items-center justify-center">
                <ImageVariant1 img={servicesSectionContent.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
