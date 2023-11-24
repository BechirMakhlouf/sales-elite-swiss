import React from "react";
import Image from "next/image";

import LandingPageImage from "@/public/images/landing-page-photo.png";
const AboutUsSesction = () => {
  return (
    <>
      <div className="w-screen flex justify-center bg-alternate-background">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          {/* section 1 start*/}
          <div className="py-6 w-full h-full flex flex-col  justify-stretch ">
            <h1 className="my-4 text-5xl underline decoration-dashed decoration-secondary">
              Who Are We?
            </h1>
            {/*here*/}
            <div className=" h-full w-full flex flex-col md:flex-row justify-stretch">
              <div className="w-full flex flex-col justify-center gap-y-6">
                <div className="m-2">
                  <h6 className="font-heading text-secondary text-xl">
                    Founder
                  </h6>
                  <h1 className="text-4xl">Maximiliane Mihajlovic</h1>
                </div>
                <p className="m-2 indent-10">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt ex occaecat reprehenderit commodo officia
                  dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                  proident adipisicing id nulla nisi laboris ex in Lorem sunt
                  duis officia eiusmod. Aliqua reprehenderit commodo ex non
                  excepteur duis sunt velit enim. Voluptate laboris sint
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis.
                </p>
              </div>
              <div className="w-full flex justify-center items-center ">
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
            
            {/*here*/}
          </div>
          {/* section 1 ends*/}
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          {/* section 2 starts*/}
            <div className="py-6 h-full w-full flex flex-col md:flex-row justify-stretch">
              <div className="w-full flex justify-center items-center ">
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
              <div className="w-full flex flex-col justify-center gap-y-6">
                <div className="m-2">
                  <h6 className="font-heading text-secondary text-xl">
                    Co-Founder
                  </h6>
                  <h1 className="text-4xl">Egon Becker</h1>
                </div>
                <p className="m-2 indent-10">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. Sit irure elit
                  esse ea nulla sunt ex occaecat reprehenderit commodo officia
                  dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                  proident adipisicing id nulla nisi laboris ex in Lorem sunt
                  duis officia eiusmod. Aliqua reprehenderit commodo ex non
                  excepteur duis sunt velit enim. Voluptate laboris sint
                  cupidatat ullamco ut ea consectetur et est culpa et culpa
                  duis.
                </p>
              </div>
            </div>
          
          {/* section 2 ends*/}
        </div>
      </div>
    </>
  );
};

export default AboutUsSesction;
