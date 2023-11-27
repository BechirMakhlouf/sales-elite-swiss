import React from "react";
import Image from "next/image";

import { getSanityImageUrl } from "@/sanity/utils";
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
      <div className="w-screen flex justify-center bg-alternate-background">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          <div className="py-8 w-full ">
            <h1 className="my-4 text-5xl underline decoration-dashed decoration-secondary">
              {servicesSectionContent.servicesSectionTitle}
            </h1>
            <div className="my-8 mx-4 flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row min-h-[42rem] justify-stretch items-stretch">
              <div className="w-full  flex flex-col justify-center gap-y-4">
                <h2 className="text-4xl">
                  {servicesSectionContent.paragraphTitle}
                </h2>
                <p className="indent-10">
                  {servicesSectionContent.servicesDescription}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="w-[80%] pt-[6%] flex justify-center">
                  <div className="w-full relative flex">
                    <Image
                      alt={servicesSectionContent.image.alt}
                      src={getSanityImageUrl(
                        servicesSectionContent.image.asset,
                      )}
                      width={700}
                      height={400}
                      className="relative z-10 w-[80%] rounded-lg p-4 border-2 border-dashed border-secondary "
                    />
                    <div className="w-[80%] aspect-square bg-accent absolute right-8 bottom-[18%] rounded-lg -z-0 border border-accent">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
