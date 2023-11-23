import ButtonVariant2 from "./ui/ButtonVariant2";
import Image from "next/image";
import LandingPageImage from "@/public/images/landing-page-photo.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-fit xl:h-screen min-h-[54em] bg-background flex xl:flex-nowrap flex-wrap justify-stretch items-stretch">
        <div className="w-full min-h-[60vh] pt-12 xl:w-[50%] h-full flex justify-center items-start md:items-center ">
          <div className="w-full px-6 h-[80%] flex flex-col justify-center items-center xl:pt-16 xl:justify-start gap-y-12">
            <h1 className=" text-4xl sm:text-5xl md:text-7xl  text-center break-words">
              Let&apos;s Improve Your Sales{" "}
              <span className="font-heading underline decoration-[10px] decoration-dashed decoration-accent rounded-md ">
                Strategy
              </span>
            </h1>
            <p className="px-2 md:indent-11 text-lg text-center xl:text-start">
              Sales Elite Swiss is a Team of sales experts ready to put on
              decades of knowledge in the field to help you business shine.
            </p>
            <ButtonVariant2>
              <span className="text-md lg:text-xl text-inherit">
                Book a Free Strategy Call!
              </span>
            </ButtonVariant2>
          </div>
        </div>

        <div className="min-h-[440px] sm:p-12 xl:p-0 w-full lg:h-full xl:w-[50%] flex justify-center items-center">
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
    </>
  );
};

export default HeroSection;
