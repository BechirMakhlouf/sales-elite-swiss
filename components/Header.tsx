import Image from "next/image";
import FullLogo from "../public/Full Logo.svg";
import MenuIcon from "@/public/icons/menu-icon.svg";
import NavBar from "./ui/Navbar";
import MenuSideBar from "./ui/MenuSideBar";
import Link from "next/link";
const Header = async () => {
  return (
    <>
      <div className="lg:z-20 left-0  w-full flex justify-center">
        <div className=" py-4 px-8  w-full xl:w-[80%] lg:w-[90%] flex justify-between items-center">
          <Link href="/">
            <Image
              alt="sales elite swiss logo with slogan"
              src={FullLogo}
              width={240}
              className="cursor-pointer w-52"
            />
          </Link>
          <NavBar />
          <div className="w-fit h-fit lg:hidden">
            <MenuSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
