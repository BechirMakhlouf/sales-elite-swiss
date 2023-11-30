import Image from "next/image";
import FullLogo from "../public/Full Logo.svg";
import ButtonVariant1 from "./ui/ButtonVariant1";
import MenuIcon from "@/public/icons/menu-icon.svg";
import { getLocale, getTranslations } from "next-intl/server";
import NavBar from "./ui/Navbar";

const Header = async () => {
  return (
    <>
      <div className="lg:z-20 left-0  w-full flex justify-center">
        <div className=" py-4 px-8  w-full xl:w-[80%] lg:w-[90%] flex justify-between items-center">
          <Image
            alt="sales elite swiss logo with slogan"
            src={FullLogo}
            width={240}
            className="cursor-pointer w-52"
          />
          <NavBar />

          {/* or: */}

          <button className="lg:hidden p-3 rounded-full pointer-click select-none">
            <Image
              alt="menu icon"
              width={40}
              src={MenuIcon}
              className=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
