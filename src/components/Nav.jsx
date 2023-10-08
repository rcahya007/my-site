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
    <header className="sticky top-0 z-10 bg-white">
      <nav className="flex justify-between border border-black">
        <div
          className={`absolute z-10 m-0 h-screen w-full border border-black bg-white p-0 transition-all duration-500  ${
            isOpen ? "translate-y-0" : "-translate-y-[100%]"
          }`}
        >
          <div
            className="cursor-pointer border-b border-black px-[20px] py-[14px]"
            onClick={() => setOpen(!isOpen)}
          >
            <MdClose size={24} />
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="font-gilroy text-[18px]">Sing in</p>
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="font-gilroy text-[18px]">Shop</p>
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="font-gilroy text-[18px]">Service</p>
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="font-gilroy text-[18px]">Contact</p>
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="font-gilroy text-[18px]">About us</p>
          </div>
          <div className="border-b border-black p-[24px]">
            <p className="mb-[16px] font-gilroy text-[14px]">
              Shipping & returns
            </p>
            <p className="mb-[16px] font-gilroy text-[14px]">
              Terms & conditions
            </p>
            <p className="font-gilroy text-[14px]">Privacy policy</p>
          </div>
          <div className="flex justify-between border-b border-black p-[29px]">
            <FaInstagram size={26} />
            <ImPinterest2 size={26} />
            <FiFacebook size={26} />
            <RxTwitterLogo size={26} />
            <PiTelegramLogoDuotone size={26} />
          </div>
        </div>
        <div
          className="flex w-12 cursor-pointer justify-center border-r border-black p-[12px]"
          onClick={() => setOpen(!isOpen)}
        >
          <FaBars size={24} />
        </div>
        <div className="flex w-12 cursor-pointer justify-center border-l border-black p-[12px]">
          <PiMoonStarsBold size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
