import React from "react";

export interface Offer {
  offerTitle: string;
  offerDescription: string;
}

const OffersSection = ({ offers }: { offers: Offer[] }) => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          <div className="py-8 min-h-[32rem] bg-background flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-8">
              {offers.map((offer, i) => (
                <div
                  key={i}
                  className="flex max-w-lg items-center lg:items-left flex-col gap-y-4"
                >
                  <div className="w-12 h-12 rounded-[50%] border-2 border-secondary border-dashed">
                  </div>
                  <h2 className="text-3xl">{offer.offerTitle}</h2>
                  <p className="indent-6 break-all">{offer.offerDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersSection;
