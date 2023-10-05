import { FaBars, FaInstagram } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { ImPinterest2 } from "react-icons/im";
import { FiFacebook } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { PiMoonStarsBold, PiTelegramLogoDuotone } from "react-icons/pi";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white">
      <nav className="border border-black flex justify-between ">
        <div
          className={`transition-all duration-500 m-0 p-0 absolute bg-white w-full border border-black h-screen z-10  ${
            isOpen ? "translate-y-0" : "-translate-y-[100%] hidden"
          }`}
        >
          <div
            className="px-[20px] py-[14px] border-b border-black cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <MdClose size={24} />
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[18px]">Sing in</p>
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[18px]">Shop</p>
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[18px]">Service</p>
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[18px]">Contact</p>
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[18px]">About us</p>
          </div>
          <div className="p-[24px] border-b border-black">
            <p className="font-gilroy text-[14px] mb-[16px]">
              Shipping & returns
            </p>
            <p className="font-gilroy text-[14px] mb-[16px]">
              Terms & conditions
            </p>
            <p className="font-gilroy text-[14px]">Privacy policy</p>
          </div>
          <div className="p-[29px] border-b border-black flex justify-between">
            <FaInstagram size={26} />
            <ImPinterest2 size={26} />
            <FiFacebook size={26} />
            <RxTwitterLogo size={26} />
            <PiTelegramLogoDuotone size={26} />
          </div>
        </div>
        <div
          className="p-[12px] border-r border-black w-12 flex justify-center cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <FaBars size={24} />
        </div>
        <div className="p-[12px] border-l border-black w-12 flex justify-center cursor-pointer">
          <PiMoonStarsBold size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
