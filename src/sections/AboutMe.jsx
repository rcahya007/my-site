import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div className="mx-auto font-gilroy xl:flex xl:h-full ">
      {/* LEFT */}
      <div className="hidden xl:flex xl:flex-1 xl:border-r xl:border-black xl:px-20 xl:pb-20 xl:pt-32">
        <p className="xl:text-[50px] xl:font-semibold">About me</p>
      </div>
      {/* RIGHT */}
      <div className="xl:flex-1  xl:px-20 xl:pb-60 xl:pt-32">
        <div className="z-0 text-[22px] font-bold sm:text-4xl">
          <Typewriter
            options={{
              strings: ["About me", "Let me introduce my self"],
              autoStart: true,
              loop: true,
              delay: "natural",
              cursorClassName: "",
            }}
          />
        </div>
        <div className="mt-[20px] flex flex-col space-y-3 text-base sm:space-y-4 ">
          <p className="leading-6">
            My name is Rendy Cahya Edytya, you can call me Rendy or Cahya
            whatever you want. I'm from Sidoarjo, Indonesia. Graduated from 17
            August 1945 Surabaya University with a Bachelor degree in
            Informatics (Informatic of Technic).
          </p>
          <p className="leading-6">
            I love exploring and learning new things, for now i'm prefer
            learning more about mobile developers, especially mobile dev with
            flutter. Outside of developing, I have a routine of playing
            Badminton, and listening music. Now i'm ready for <b>#OpenToWork</b>{" "}
            and <b>Collaboration.</b>
          </p>
        </div>
        <a
          href="#contact"
          className="mt-16 flex w-fit rounded border border-black p-4 text-sm shadow-[2px_2px_0px_black] transition-all
        hover:scale-105 hover:shadow-[5px_5px_10px_black] "
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
