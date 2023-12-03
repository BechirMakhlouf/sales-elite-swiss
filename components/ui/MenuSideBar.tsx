"use client";

import Image from "next/image";
import MenuIcon from "@/public/icons/menu-icon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
const MenuSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  return (
    <>
      <button className="p-3 rounded-full pointer-click select-none">
        <Image
          alt="menu icon"
          width={40}
          src={MenuIcon}
          onClick={() => setIsOpen(() => true)}
          className=""
        />
      </button>
      <AnimatePresence>
        {isOpen &&
          (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "just" }}
              className="w-screen h-screen fixed bg-alternate-background top-0 left-0 z-30"
            >
              <div className="w-full flex justify-end border pr-4 py-4">
                <button
                  onClick={() => setIsOpen(() => false)}
                  className="text-3xl w-12 h-12 text-center rounded-[50%] border-2 border-secondary border-dashed flex jusity-center items-center"
                >
                  <div className="w-full text-secondary">
                    X
                  </div>
                </button>
              </div>
              <ul>
                <li
                  onClick={() => setIsOpen(() => false)}
                  className="border-b-2 border-dashed border-secondary text-4xl my-4 pl-4 pb-4 text-heading"
                >
                  <Link href={`/`}>Home</Link>
                </li>
                <li
                  onClick={() => setIsOpen(() => false)}
                  className="border-b-2 border-dashed border-secondary text-4xl my-4 pl-4 pb-4 text-heading"
                >
                  <Link
                    onClick={() => setIsOpen(() => false)}
                    href={`/${locale}/our-services`}
                  >
                    Our Services
                  </Link>
                </li>
                <li className="border-b-2 border-dashed border-secondary text-4xl my-4 pl-4 pb-4 text-heading">
                  <Link
                    onClick={() => setIsOpen(() => false)}
                    href={`/${locale}/contact-us`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                </li>
              </ul>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default MenuSideBar;
