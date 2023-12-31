import React from "react";
import Image from "next/image";
import FullLogoWithSlogan from "@/public/Full Logo with slogan.svg";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:w-[90%] xl:w-[80%] px-4 md:px-6">
          <div className=" pt-4 w-full min-h-[30vh] flex justify-center items-center flex-col-reverse md:flex-row md:justify-between md:items-center gap-y-4">
            <div className="h-full flex flex-col md:w-1/2 justify-center md:gap-11">
              <Image
                src={FullLogoWithSlogan}
                alt="sales elite swiss full logo with slogan"
                className="cursor-pointer w-[80%] max-w-[440px]"
              />
              <p>{t("copyright")}</p>
            </div>
            <div className=" w-1/2 h-full flex flex-col justify-center items-center ">
              <ul>
                <h1 className="text-primary text-xl">
                  {t("navigation")}
                </h1>
                <li className="cursor-pointer hover:underline">
                  <Link href={`/${locale}/`}>{t("home")}</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={`/${locale}/about-us`}>{t("aboutUs")}</Link>
                </li>
                <li className="cursor-pointer hover:underline">
                  <Link href={`/${locale}/our-services`}>
                    {t("ourServices")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
