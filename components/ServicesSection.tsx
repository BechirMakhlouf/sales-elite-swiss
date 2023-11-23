import React from "react";
import Image from "next/image";

import LandingPageImage from "@/public/images/landing-page-photo.png";
const ServicesSection = () => {
  return (
    <>
      <div className="w-screen flex justify-center bg-alternate-background">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
      <div className="py-8 w-full ">
        <h1 className="my-4 text-5xl underline decoration-dashed decoration-secondary">
          The Value We Offer
        </h1>
        <div className="my-8 mx-4 flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row min-h-[42rem] justify-stretch items-stretch">
          <div className="w-full  flex flex-col justify-center gap-y-4">
            <h2 className="text-4xl">We Deliver Results</h2>
            <p className="indent-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              porttitor quis nisl turpis eget vulputate turpis at. Et ut cras
              rutrum viverra. Non vel amet, pharetra, faucibus viverra mi
              sollicitudin id mattis. Aliquet sed viverra dictum nunc ultrices
              dui dictum ut sagittis. Lacus nunc sed in et vitae ornare
              elementum.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[80%] pt-[6%] flex justify-center">
              <div className="w-full relative flex">
                <Image
                  alt="landing page image"
                  src={LandingPageImage}
                  width={700}
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
