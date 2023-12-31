"use client";

import { motion } from "framer-motion";
import HeadingVariant1 from "./ui/HeadingVariant1";
export interface Offer {
  sectionTitle: string;
  offerTitle: string;
  offerDescription: string;
}
export interface OffersSectionContent {
  title: string;
  offers: Offer[];
}

const OffersSection = (
  { offersSectionContent }: { offersSectionContent: OffersSectionContent },
) => {
  const { title, offers } = offersSectionContent;
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          <HeadingVariant1 headingText={title}/>
          <div className="py-8 min-h-[32rem] bg-background flex justify-center items-start">
            <div className="flex flex-col items-start gap-y-8 lg:flex-row lg:gap-x-8">
              {offers.map((offer, i) => (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                  viewport={{ once: true }}
                  key={i}
                  className="offer flex max-w-lg lg:w-1/3 items-center justify-start lg:items-left flex-col gap-y-4"
                >
                  <div className="w-12 h-12 p-2 rounded-[50%] border-2 border-secondary ">
                    <div className="rounded-[50%] w-full h-full bg-accent">
                    </div>
                  </div>
                  <h2 className="text-3xl">{offer.offerTitle}</h2>
                  <p className="indent-6">{offer.offerDescription}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersSection;
