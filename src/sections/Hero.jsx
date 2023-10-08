import Typewriter from "typewriter-effect";
import HeroImage from "../assets/images/Hero.svg";

const Hero = () => {
  return (
    <div className="font-gilroy ">
      <div className="z-0 text-[40px] font-bold">
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
      <div className="mt-[20px] flex flex-col space-y-2 text-[14px]">
        <p>
          I'm a Junior Web ~/ Mobile Developer..., and I think that's a
          fullstack developer.
        </p>
        <p>
          Okey next, I very love doing slicing-design-to-code, I can design but,
          just little bit :').
        </p>
        <p>
          <b>*Note:</b>
          <br />
          Cat lover, Badminton lover, Movie Lover, & Anime Lover.
        </p>
      </div>
      <div className="mb-4 mt-6 border border-black"></div>
      <div className="flex h-[180px] justify-between">
        <div className=" w-full">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="flex h-[180px] w-[155px] justify-center"
          />
        </div>
        <div className="mx-4 border border-black"></div>
        <div className=" flex w-full flex-col items-end justify-end text-[11px]">
          <p>
            Just hover and click, you can see{" "}
            <span className="under cursor-pointer underline underline-offset-2">
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
