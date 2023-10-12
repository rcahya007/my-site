import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";

const ContactMe = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 font-gilroy xl:py-40">
      <h1 className="text-center text-[22px] font-bold text-[#808080] sm:text-3xl">
        Contact me
      </h1>
      <div className="text-center sm:text-lg">
        <p className="text-[14px] font-normal text-[#808080] sm:text-base">
          Address
        </p>
        <p className="text-[14px] font-medium sm:text-base">
          <a href="https://maps.app.goo.gl/6hxd97Y7w4s2CQsH7" target="_blank">
            Joyoboyo, 19, Waru, Sidoarjo.
          </a>
        </p>
      </div>
      <div className="text-center">
        <p className="text-[14px] font-normal text-[#808080] sm:text-base">
          Phone
        </p>
        <p className="text-[14px] font-medium sm:text-base">
          <a href="https://wa.me/6281238620212" target="_blank">
            +6281238620212
          </a>
        </p>
      </div>
      <div className="text-center">
        <p className="text-[14px] font-normal text-[#808080] sm:text-base">
          Email
        </p>
        <p className="text-[14px] font-medium sm:text-base">
          <a href="mailto:rendycahya6@gmail.com" target="_blank">
            rendycahya6@gmail.com
          </a>
        </p>
      </div>
      <h1 className="text-center text-[22px] font-bold text-[#808080] sm:text-3xl">
        Follow me
      </h1>
      <div className="flex justify-center gap-6">
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
      <footer>
        <p className=" text-center">
          Copyright {"\u00A9"} 2023 OPWarnet. Inspiration from{" "}
          <a
            href="https://www.instagram.com/tomashuk01/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-blue-500 underline"
          >
            Dmytro Tomashshuk
          </a>
          . <span>{"\u2764\uFE0F"}</span>
        </p>
      </footer>
    </div>
  );
};

export default ContactMe;
