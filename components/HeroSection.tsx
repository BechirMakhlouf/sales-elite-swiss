import ButtonVariant2 from "./ui/ButtonVariant2";
import ImageVariant1 from "@/components/ui/ImageVariant1";

interface HeroSectionContent {
  message: string;
  description: string;
  cta: string;
  image: {
    asset: any;
    alt: string;
  };
}

const HeroSection = (
  { heroSectionContent }: { heroSectionContent: HeroSectionContent },
) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] md:px-6">
          <div className=" w-full h-fit gap-y-12 gap-x-4 xl:h-screen min-h-[54em] bg-background flex xl:flex-nowrap flex-wrap justify-stretch items-stretch">
            <div className="w-full min-h-[80vh] md:min-h-[60vh] pt-12 xl:w-[50%] h-full flex justify-center items-center md:items-center ">
              <div className="w-full px-6 h-[80%] flex flex-col justify-center items-center xl:pt-16 xl:justify-start gap-y-12">
                <h1 className="text-[5xl] md:text-7xl  text-center break-words">
                  {heroSectionContent.message}
                </h1>
                <p className="px-2 md:indent-11 text-lg text-center xl:text-start">
                  {heroSectionContent.description}
                </p>
                <ButtonVariant2>
                  <span className="text-md lg:text-xl text-inherit">
                    {heroSectionContent.cta}
                  </span>
                </ButtonVariant2>
              </div>
            </div>

            <div className="px-4 xl:p-0 w-full lg:h-full xl:w-[50%] flex justify-center items-center">
              <ImageVariant1 img={heroSectionContent.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
