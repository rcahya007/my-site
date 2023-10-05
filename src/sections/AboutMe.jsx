import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div className="font-gilroy ">
      <div className="font-bold text-[22px] z-0">
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
      <div className="text-[14px] mt-[20px] flex flex-col space-y-2">
        <p>
          My name is Rendy Cahya Edytya, you can call me Rendy or Cahya whatever
          you want. <br />
          <br />
          I'm from Sidoarjo, Indonesia. Graduated from 17 August 1945 Surabaya
          University with a Bachelor degree in Informatics (Informatic of
          Technic)
          <br />
          <br />
          I love exploring and learning new things, for now i'm prefer learning
          more about mobile developers, especially mobile dev with flutter.
          <br />
          <br />
          Outside of developing, I have a routine of playing Badminton, and
          listening music.
          <br />
          <br />
          Now i'm ready for <b>#OpenToWork</b> and <b>Collaboration.</b>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
