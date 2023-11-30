"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const ButtonVariant1 = (props: PropsWithChildren) => {
  return (
    <motion.button
      whileHover={{
        borderRadius: "0.75rem",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.03,
      }}
      className="inline-block w-fit py-2 px-4 bg-primary text-background rounded-md transition-all"
    >
      {props.children}
    </motion.button>
  );
};

export default ButtonVariant1;
