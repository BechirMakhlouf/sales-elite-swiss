import Image from "next/image";
import FullLogo from "../public/Full Logo.svg";
import ButtonVariant1 from "./ui/ButtonVariant1";

const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="py-4 px-8 xl:w-[85%] md:w-[90%] w-full flex justify-between items-center">
          <Image
            alt="sales elite swiss logo with slogan"
            src={FullLogo}
            width={240}
          />
          <ul className="lg:flex hidden text-xl justify-around items-center gap-x-8">
            <li className="cursor-pointer">
              <span>About Us</span>
            </li>
            <li className="cursor-pointer">
              <span>Our Services</span>
            </li>
            <li className="cursor-pointer">
              <ButtonVariant1>Contact Us</ButtonVariant1>
            </li>
            <li className="cursor-pointer text-lg">
              <span>EN v</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
