import React from "react";
import Image from "next/image";

import LandingPageImage from "@/public/images/landing-page-photo.png"
const ServicesSection = () => {
  return (
    <>
      <div className="pt-4 w-full h-screen bg-alternate-background">
        <h1 className="my-4 text-5xl underline decoration-dashed decoration-secondary">
          The Value We Offer
        </h1>
        <div className="my-6 mx-4 flex min-h-[42rem] justify-stretch items-stretch">
          <div className="w-full border flex flex-col justify-center gap-y-4">
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
          <div className="w-full border flex items-center justify-center">
          <div className="w-[90%] flex justify-center">
            <div className="w-full relative flex">
              <Image
                alt="landing page image"
                src={LandingPageImage}
                width={700}
                className="relative z-10 w-[80%] rounded-lg p-4 border-2 border-dashed border-secondary "
              />
              <div className="w-[80%]  aspect-square bg-accent absolute right-8 bottom-[18%] rounded-lg -z-0 border border-accent">
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
