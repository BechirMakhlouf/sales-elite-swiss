import Image from "next/image";
import FullLogo from "../public/Full Logo.svg";
import ButtonVariant1 from "./ui/ButtonVariant1";

const Header = () => {
  return (
    <>
      <div className="fixed w-full flex justify-center ">
        <div className="py-4 px-8 xl:w-[85%] md:w-[90%] w-full flex justify-between items-center">
          <Image
            alt="sales elite swiss logo with slogan"
            src={FullLogo}
            width={240}
            className="cursor-pointer"
          />
          <ul className="lg:flex hidden select-none text-xl justify-around items-center gap-x-8">
            <li className="relative cursor-pointer hover-underline-animation after:bg-secondary">
              <span className="">About Us</span>
            </li>
            <li className="relative cursor-pointer hover-underline-animation after:bg-secondary">
              <span>Our Services</span>
            </li>
            <li className="select-none">
              <ButtonVariant1>Contact Us</ButtonVariant1>
            </li>
            <li className="relative cursor-pointer hover-underline-animation after:bg-secondary text-lg">
              <span>EN v</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
