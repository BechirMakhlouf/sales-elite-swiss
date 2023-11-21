import React from "react";
import ButtonVariant2 from "./ui/ButtonVariant2";
import ImageVariant1 from "./ui/ImageVariant1";
// border-b-[14px] border-accent ronded-md border-dashed
const HeroSection = () => {
  return (
    <div className="bg-background h-[100%]  flex justify-stretch items-center">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className="w-[80%] flex flex-col gap-y-8">
          <h1 className="text-7xl text-center ">
            Let&apos;s Improve Your Sales{" "}
            <span className="font-heading underline decoration-[10px] decoration-dashed decoration-accent rounded-md ">Strategy</span>
          </h1>
          <p className="indent-11 text-lg">
            Sales Elite Swiss is a Team of 2 sales experts ready to put on the
            decades of knowledge in the field to help you business shine.
          </p>
          <ButtonVariant2>
            <span className="text-xl text-inherit">
              Book a Free Strategy Call!
            </span>
          </ButtonVariant2>
        </div>
      </div>
      <div className="w-full h-full flex pb-12 pl-[12rem] items-end ">
          <ImageVariant1 alt="hello" width={500} height={780}/>
      </div>
    </div>
  );
};

export default HeroSection;
