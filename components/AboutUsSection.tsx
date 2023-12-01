import ImageVariant1 from "./ui/ImageVariant1";
import { getTranslations } from "next-intl/server";

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
const AboutUsSesction = async (
  { aboutUsSectionContent }: { aboutUsSectionContent: AboutUsSectionContent },
) => {
  const t = await getTranslations("aboutUs");
  return (
    <>
      <div id="aboutus-section">
        {aboutUsSectionContent.People.map((people, i) => (
          <div
            key={i}
            className={`min-h-screen h-full w-screen flex justify-center items-center ${
              i % 2 === 0 ? "bg-alternate-background" : ""
            }`}
          >
            <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
              {i === 0
                ? (
                  <h1 className="my-8 text-5xl underline decoration-dashed decoration-secondary">
                    {t("title")}
                  </h1>
                )
                : null}
              <div className="w-full flex flex-col justify-stretch">
                {/*here*/}

                {/* text */}
                <div
                  className={` py-8 h-full w-full flex gap-x-6  flex-col ${
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
                  <div className="px-4 md:px-0 w-full h-full">
                    <ImageVariant1 img={people.picture} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUsSesction;
