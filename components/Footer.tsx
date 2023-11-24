import React from "react";
import Image from "next/image";
import FullLogoWithSlogan from "@/public/Full Logo with slogan.svg";

const Footer = () => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-6">
          <div className="w-full h-[30vh] flex items-stretch flex-wrap flex-col-reverse md:flex-col">
            <div className="w-1/2 min-w-[200px] h-full flex flex-col justify-center gap-11">
              <Image
                src={FullLogoWithSlogan}
                alt="sales elite swiss full logo with slogan"
                className="cursor-pointer"
              />
              <p>Copyright © Sales Elite Swiss</p>
            </div>
            <div className="min-w-[200px] w-1/2 h-full flex flex-col justify-center items-center ">
              <h1 className="text-primary text-xl">Navigation</h1>
              <ul className="">
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">About Us</li>
                <li className="cursor-pointer hover:underline">Our Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
