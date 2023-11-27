import React from "react";
import Image from "next/image";

import { getSanityImageUrl } from "@/sanity/utils";

interface People {
  firstName: string;
  lastName: string;
  jobTitle: string;
  description: string;
  picture: {
    asset: any;
    alt: string;
  };
}

interface AboutUsSectionContent {
  aboutUsSectionTitle: string;
  People: People[];
}
const AboutUsSesction = (
  { aboutUsSectionContent }: { aboutUsSectionContent: AboutUsSectionContent },
) => {
  return (
    <>
      {aboutUsSectionContent.People.map((people, i) => (
        <div
          key={i}
          className={` h-full w-screen flex justify-center ${
            i % 2 === 0 ? "bg-alternate-background" : ""
          }`}
        >
          <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
            {i === 0
              ? (
                <h1 className="my-8 text-5xl underline decoration-dashed decoration-secondary">
                  Who Are We?
                </h1>
              )
              : null}
            <div className="w-full flex flex-col  justify-stretch ">
              {/*here*/}

              {/* text */}
              <div
                className={` py-8 h-full w-full flex  flex-col ${
                  i % 2 ? "md:flex-row" : "md:flex-row-reverse"
                } justify-stretch `}
              >
                <div className="h-fit w-full flex flex-col justify-center self-center gap-y-6">
                  <div className="m-2">
                    <h6 className="font-heading text-secondary text-xl">
                      {people.jobTitle}
                    </h6>
                    <h1 className="text-4xl">
                      {people.firstName + " " + people.lastName}
                    </h1>
                  </div>
                  <p className="m-2 indent-10">{people.description}</p>
                </div>

                {/* image */}
                <div className=" w-full flex justify-center items-start">
                  <div className="w-full sm:w-[90%] pt-[2%] flex justify-center items-start">
                    <div className="w-full relative flex">
                      <Image
                        alt={people.picture.alt}
                        src={getSanityImageUrl(people.picture.asset)}
                        width={400}
                        height={400}
                        className="relative z-10 w-[80%] rounded-lg p-4 border-2 border-dashed border-secondary "
                      />
                      <div className="w-[80%] h-[80%] bg-accent absolute right-8 bottom-[18%] rounded-lg -z-0 border border-accent">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutUsSesction;
