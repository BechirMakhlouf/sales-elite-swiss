import ButtonVariant1 from "./ButtonVariant1";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import DropDownMenuVariant1 from "./DropDownMenuVariant1";
import Head from 'next/head';

const NavBar = async () => {

  const t = await getTranslations("header");
  const locale = await getLocale();
  return (
    <>
      <ul className="lg:flex hidden select-none text-xl justify-around items-center gap-x-8">
        <li className="relative cursor-pointer hover-underline-animation after:bg-accent">
          <Link href="/">
            <span className="">{t("home")}</span>
          </Link>
        </li>
        <li className="relative cursor-pointer hover-underline-animation after:bg-accent">
          <Link href={`/${locale}/about-us`}>
            <span className="">{t("aboutUs")}</span>
          </Link>
        </li>
        <li className="relative cursor-pointer hover-underline-animation after:bg-accent">
          <Link href={`/${locale}/our-services`}>
            <span>{t("ourServices")}</span>
          </Link>
        </li>
        <li className="select-none">
          <Link href={`/${locale}/contact-us`}>
            <ButtonVariant1>
              {t("contactUs")}
            </ButtonVariant1>
          </Link>
        </li>
        <li className="relative cursor-pointer after:bg-accent text-lg">
          <DropDownMenuVariant1 />

          <div id="dropDownMenu" className="relative">
            <div
              id="dropDownTrigger"
              className="hover-underline-animation after:bg-accent"
            >
              {locale.toUpperCase()} v
            </div>

            <ul
              id="dropDownContent"
              className="absolute bg-transparent hidden z-20 border border-dashed border-secondary rounded-md w-14 pt-2 pl-1"
            >
              <li>
                <Link href="/en" locale="en" className="hover:underline">EN</Link>
              </li>
              <li>
                <Link href="/de" locale="de" className="hover:underline">DE</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
