import { FaBars, FaInstagram } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FiGithub, FiRefreshCcw, FiTwitter, FiYoutube } from "react-icons/fi";

import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-white xl:absolute xl:mx-auto xl:w-full">
      <nav className="flex max-w-screen-2xl justify-between border border-black xl:mx-auto xl:w-full">
        {/* NAVBAR OPENED */}
        <div
          className={`absolute z-10 m-0 flex h-screen w-full flex-col justify-between overflow-hidden p-0 transition-all duration-500 sm:w-full sm:flex-row xl:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-[100%]"
          }`}
        >
          <div className="flex w-full flex-1 flex-col justify-between border-r border-black bg-white">
            <div>
              <div
                className="cursor-pointer border-b border-black px-[16px] py-[12px]"
                onClick={() => setOpen(!isOpen)}
              >
                <MdClose size={32} />
              </div>
              <a
                href="#home"
                className="flex border-b border-black p-[24px] font-gilroy text-[18px]"
                onClick={() => setOpen(!isOpen)}
              >
                Home
              </a>
              <a
                href="#about"
                className="flex border-b border-black p-[24px] font-gilroy text-[18px]"
                onClick={() => setOpen(!isOpen)}
              >
                About
              </a>
              <a
                href="#skills"
                className="flex border-b border-black p-[24px] font-gilroy text-[18px]"
                onClick={() => setOpen(!isOpen)}
              >
                Skills
              </a>
              <a
                href="#eksperience"
                className="flex border-b border-black p-[24px] font-gilroy text-[18px]"
                onClick={() => setOpen(!isOpen)}
              >
                Eksperience
              </a>
              <a
                href="#projects"
                className="flex border-b border-black p-[24px] font-gilroy text-[18px]"
                onClick={() => setOpen(!isOpen)}
              >
                Projects
              </a>
              <div className="flex flex-col border-b border-black px-[24px] pt-[24px]">
                <a
                  href="#collab"
                  className="mb-[16px] font-gilroy text-[14px]"
                  onClick={() => setOpen(!isOpen)}
                >
                  Collab
                </a>
                <a
                  href="#contact"
                  className="mb-[16px] font-gilroy text-[14px]"
                  onClick={() => setOpen(!isOpen)}
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex justify-between border-y border-black  p-[29px]">
              <a
                href="https://www.instagram.com/rendycahya_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com/RendyCahyaE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter size={28} />
              </a>
              <a
                href="https://www.youtube.com/@codingwithopwarnet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube size={28} />
              </a>
              <a
                href="https://github.com/rcahya007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={28} />
              </a>
            </div>
          </div>
          <div className="hidden w-full flex-1 backdrop-blur-sm sm:flex"></div>
        </div>

        {/* NAVBAR STICKY */}
        <div
          className="flex w-12 cursor-pointer justify-center border-r border-black p-3 sm:w-14 sm:p-4 xl:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <FaBars size={24} />
        </div>

        {/* Navbar Active */}
        <div
          className="flex w-12 cursor-pointer justify-center border-l border-black p-3 sm:w-14 sm:p-4 xl:hidden"
          onClick={() => window.location.reload()}
        >
          <FiRefreshCcw size={24} />
        </div>

        {/* NAVBAR DESKTOP */}
        <div className="hidden max-w-screen-2xl xl:fixed xl:left-0 xl:right-0 xl:top-0 xl:mx-auto xl:flex xl:w-full xl:justify-between xl:border-b xl:border-black xl:bg-white">
          <div className="flex font-gilroy">
            <a
              href="#home"
              className="group flex justify-center border-x border-black xl:w-[180px] xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:rotate-45">
                Home
              </span>
            </a>
            <a
              href="#about"
              className="group flex justify-center border-r border-black  xl:w-[180px] xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:rotate-45">
                About
              </span>
            </a>
          </div>
          <div className="flex font-gilroy">
            <a
              href="#skills"
              className="group flex justify-center border-l border-black xl:w-[180px]  xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:-translate-y-2 ">
                Skills
              </span>
            </a>
            <a
              href="#eksperience"
              className="group flex justify-center border-x border-black xl:w-[180px]  xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:-translate-y-2 ">
                Eksperience
              </span>
            </a>
            <a
              href="#projects"
              className="group flex justify-center border-r border-black xl:w-[180px]  xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:-translate-y-2 ">
                Projects
              </span>
            </a>
          </div>
          <div className="flex font-gilroy">
            <a
              href="#collab"
              className="group flex justify-center border-l border-black xl:w-[180px]  xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:-rotate-45">
                Collab
              </span>
            </a>
            <a
              href="#contact"
              className="group flex justify-center border-x border-black xl:w-[180px]  xl:py-8 xl:text-base"
            >
              <span className="transition-all xl:group-hover:-rotate-45">
                Contact
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
