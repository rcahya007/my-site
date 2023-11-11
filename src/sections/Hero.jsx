import Typewriter from "typewriter-effect";
import HeroProfile from "../assets/images/Hero.svg";
import HeroRight from "../assets/images/heroRight.svg";

const Hero = () => {
  return (
    <div className="flex font-[gilroy] xl:h-full xl:w-full xl:justify-center">
      <div
        className="xl:flex xl:flex-1 xl:flex-col xl:justify-center xl:border-r xl:border-black xl:px-20
      xl:py-32"
      >
        <div className="z-0 text-[40px] font-semibold sm:text-[42px] sm:font-black lg:leading-none">
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
        <div className="mt-4 flex flex-col space-y-2 text-sm font-normal sm:text-lg">
          <p>
            I'm a Junior Web ~/ Mobile Developer..., and I think that's a
            fullstack developer.
          </p>
          <p>
            Okey next, I very love doing slicing-design-to-code, I can design
            but, just little bit :').
          </p>
          <p>
            <b>*Note:</b> Cat lover, Badminton lover, Movie Lover, & Anime
            Lover.
          </p>
        </div>
        <div className="mb-4 mt-6 border border-black"></div>
        <div className="flex h-[180px] justify-between sm:h-[256px]">
          <div className="flex w-full justify-center ">
            <img
              src={HeroProfile}
              alt="Hero Image"
              className="h-[180px] w-[155px] sm:h-[256px] sm:w-[280px]"
            />
          </div>
          <div className="mx-4 border border-black"></div>
          <div className="flex w-full flex-col items-end justify-end text-[11px] font-normal sm:text-sm">
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
      <div className="hidden xl:flex xl:w-full xl:flex-1 xl:items-center xl:px-20 xl:py-32">
        <img src={HeroRight} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
