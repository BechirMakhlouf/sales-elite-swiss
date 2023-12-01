"use client";

import Image from "next/image";
import { getSanityImageUrl } from "@/sanity/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
interface Img {
  alt: string;
  asset: string;
}

const ImageVariant1 = ({ img }: { img: Img }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // const backgroundVariants: Variants = {
  //   "intialBg": {},
  //   "finalBg": {},
  // };
  // useEffect(() => {
  //   if (isInView) {
  //     animate("#image", {
  //       top: ["0rem", "6rem"],
  //       left: ["20%", "0%"],
  //       opacity: [0, 1],
  //     }, {
  //       delay: 0.5,
  //     });
  //     animate("#imageBg", {
  //       opacity: [0, 1],
  //     }, {
  //       delay: 0.5,
  //     });
  //   }
  // }, [isInView]);
  return (
    <>
      <div
        ref={scope}
        // onMouseLeave={() => {
        //   animate("#image", {
        //     top: "1.5rem",
        //     left: "auto",
        //   });
        //   animate("#imageBg", {
        //     height: "auto",
        //   });
        // }}
        className="pb-[1.5rem] w-full h-full relative flex justify-center items-center "
      >
        <div id="image-container" className="relative w-fit h-fit ">
          <motion.div
            initial={{
              top: 0,
              left: "20%",
            }}
            whileInView={{
              top: "1.5rem",
              left: 0,
              transition: {
                delay: 0.5,
              },
            }}
            viewport={{
              once: true,
            }}
            className="w-fit h-fit relative z-10"
          >
            <Image
              id="image"
              alt={img.alt}
              src={getSanityImageUrl(img.asset)}
              width={1E9}
              height={1E9}
              className="w-[80%] h-fit top-6 z-10 rounded-lg p-[2%] border-2 border-dashed border-secondary"
            />
          </motion.div>
          <motion.div
            initial={{
              height: "100%",
            }}
            whileInView={{
              height: "auto",
              transition: {
                delay: 0.5
              }
            }}
            viewport={{
              once: true
            }}
            id="imageBg"
            className="bg-accent absolute w-[80%] aspect-square right-0 top-0 justify-self-start self-start rounded-lg"
          >
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ImageVariant1;
