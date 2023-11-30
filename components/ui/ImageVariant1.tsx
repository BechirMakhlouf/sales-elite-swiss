"use client";

import Image from "next/image";
import { getSanityImageUrl } from "@/sanity/utils";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
interface Img {
  alt: string;
  asset: string;
}

const ImageVariant1 = ({ img }: { img: Img }) => {
  const [scope, animate] = useAnimate();
  // const backgroundVariants: Variants = {
  //   "intialBg": {},
  //   "finalBg": {},
  // };
  // useEffect(() => {
  //   animate("#image", {
  //     right: 0,
  //     top: 0,
  //   });
  // }, [isInView]);
  return (
    <>
      <div ref={scope} className="pb-[1.5rem]  w-full h-full relative flex justify-center items-center ">
        <div className="relative w-fit h-fit ">
          <Image
            id="image"
            alt={img.alt}
            src={getSanityImageUrl(img.asset)}
            width={1E9}
            height={1E9}
            onMouseEnter={() => {
              animate("#image", {
                top: 0,
                left: "20%",
              });
              animate("#imageBg", {
                height: "100%",
              });
            }}
            onMouseLeave={() => {
              animate("#image", {
                top: "1.5rem",
                left: "auto",
              });
              animate("#imageBg", {
                height: "auto",
              });
            }}
            className="w-[80%]  h-fit relative top-6 z-10 rounded-lg p-[2%] border-2 border-dashed border-secondary"
          />
          <div
            id="imageBg"
            className="bg-accent absolute w-[80%] aspect-square right-0 top-0 justify-self-start self-start rounded-lg"
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageVariant1;
