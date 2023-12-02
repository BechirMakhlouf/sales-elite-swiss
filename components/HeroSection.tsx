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
        <div className="w-full lg:w-[90%] xl:w-[80%] md:px-6 pb-6">
          <div className="w-full gap-y-12 gap-x-4 xl:min-h-screen bg-background flex flex-col lg:flex-row lg:justify-stretch lg:items-stretch">
            
            <div className="w-full min-h-[80vh] md:min-h-[80vh] pt-12 xl:w-[50%] h-full flex justify-center items-center md:items-center ">

              <div className="w-full px-6 flex flex-col justify-center items-center xl:pt-16 xl:justify-start gap-y-12">

                <h1 className="text-3xl md:text-4xl xl:text-5xl text-center break-words">
                  {heroSectionContent.message}
                </h1>
                <p className="px-2 md:indent-11 text-md text-center xl:text-start">
                  {heroSectionContent.description}
                </p>
                <ButtonVariant2>
                  <span className="text-md lg:text-xl text-inherit">
                    {heroSectionContent.cta}
                  </span>
                </ButtonVariant2>
              </div>
            </div>

            <div className="self-center px-4 xl:p-0 w-1/2 h-full flex justify-center items-center">
              <ImageVariant1 img={heroSectionContent.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
