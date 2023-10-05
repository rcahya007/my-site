import Typewriter from "typewriter-effect";
import HeroImage from "../assets/images/Hero.svg";

const Hero = () => {
  return (
    <div className="font-gilroy ">
      <div className="font-bold text-[40px] z-0">
        <Typewriter
          options={{
            strings: [
              "Hi, I'm Rendy Cahya Edytya",
              "Let me cook your apps, :)",
            ],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <div className="text-[14px] mt-[20px] flex flex-col space-y-2">
        <p>
          I'm a Junior Web ~/ Mobile Developer..., and I think that's a
          fullstack developer.
        </p>
        <p>
          Okey next, I very love doing slicing-design-to-code, I can design but,
          just litle bit :').
        </p>
        <p>
          <b>*Note:</b>
          <br />
          Cat lover, Badminton lover, Movie Lover, & Anime Lover.
        </p>
      </div>
      <div className="border border-black mt-6 mb-4"></div>
      <div className="flex justify-between h-[180px]">
        <div className=" w-full">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-[155px] h-[180px] flex justify-center"
          />
        </div>
        <div className="border border-black mx-4"></div>
        <div className=" w-full flex items-end text-[11px] flex-col justify-end">
          <p>
            Just hover and click, you can see{" "}
            <span className="cursor-pointer underline-offset-2 underline under">
              my portfolio
            </span>
            , and you can also see{" "}
            <span className="cursor-pointer underline underline-offset-2">
              my CV
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
