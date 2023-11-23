import Image from "next/image";
import FullLogo from "../public/Full Logo.svg";
import ButtonVariant1 from "./ui/ButtonVariant1";
import MenuIcon from "@/public/icons/menu-icon.svg";

const Header = () => {
  return (
    <>
      <div className=" lg:z-20 left-0  w-full flex justify-center">
        <div className=" py-4 px-8  w-full xl:w-[80%] lg:w-[90%] flex justify-between items-center">
          <Image
            alt="sales elite swiss logo with slogan"
            src={FullLogo}
            width={240}
            className="cursor-pointer w-52"
          />

          <ul className=" lg:flex hidden select-none text-xl justify-around items-center gap-x-8">
            <li className="relative cursor-pointer hover-underline-animation after:bg-accent">
              <span className="">About Us</span>
            </li>
            <li className="relative cursor-pointer hover-underline-animation after:bg-accent">
              <span>Our Services</span>
            </li>
            <li className="select-none">
              <ButtonVariant1>Contact Us</ButtonVariant1>
            </li>
            <li className="relative cursor-pointer hover-underline-animation after:bg-accent text-lg">
              <span>EN v</span>
            </li>
          </ul>

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
