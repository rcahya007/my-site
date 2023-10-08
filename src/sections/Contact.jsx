import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div className=" text-center font-gilroy">
      <div
        className="
        text-[22px]
        font-semibold
        "
      >
        <Typewriter
          options={{
            strings: ["Let's be together"],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <p className="text-[16px]">
        Collaboration does not see who is better, but will make us grow more
        together
      </p>
      <br />
      <p className="text-[16px]">
        Tell me in detail what we can do together and let's make it happen. :)
      </p>
    </div>
  );
};

export default Contact;
