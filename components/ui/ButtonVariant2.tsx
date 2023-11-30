"use client";

import { PropsWithChildren } from "react";
import { motion, useAnimate } from "framer-motion";

const ButtonVariant2 = (props: PropsWithChildren) => {
  const [scope, animate] = useAnimate();

  return (
    <div
      ref={scope}
      className="select-none flex justify-center items-center relative w-fit"
    >
      {
        /*       <div
        id="btn-variant-2-background"
        className="absolute inline-block text-transparent py-2 px-4 border bg-accent h-[140%] top-[-20%] right-[10%] w-[80%] rounded-md "
      >
        {props.children}
      </div> */
      }
      <div
        id="btn-variant-2-background"
        className="absolute bg-accent rounded-md w-[80%] h-[150%]"
      >
      </div>
      <motion.button
        id="btn-variant-2-btn"
        whileTap={{
          scale: 0.96,
        }}
        onMouseEnter={() => {
          animate("#btn-variant-2-background", {
            width: "100%",
            height: "100%",
          });
        }}
        onMouseLeave={() => {
          animate("#btn-variant-2-background", {
            width: "80%",
            height: "150%",
          });
        }}
        className="inline-block relative z-10 bg-transparent button-variant-2 w-fit py-2 px-4 text-primary rounded-md 
      border-secondary border-dashed border-2"
      >
        {props.children}
      </motion.button>
    </div>
  );
};

export default ButtonVariant2;
