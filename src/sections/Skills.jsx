import Typewriter from "typewriter-effect";
import { AiOutlineHtml5, AiTwotoneHtml5 } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="font-gilroy ">
      <div className="font-bold text-[22px] z-0">
        <Typewriter
          options={{
            strings: ["Skills", "Currently"],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <div className="text-[14px] mt-[20px] flex flex-col space-y-2">
        <p className="mb-3">My basic skills are: </p>
        <div className="flex flex-wrap justify-center gap-10 ">
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-100 group-odd:top-0 group-even:bottom-0 group-hover:opacity-100 font-bold group-odd:text-green-600 group-even:text-red-600 ">
              HTML
            </div>
          </div>
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute group-odd:top-0 group-even:bottom-0 left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-100 group-hover:opacity-100 font-bold group-odd:text-green-600 group-even:text-red-600">
              HTML
            </div>
          </div>
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute top-0 left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-0 group-hover:opacity-100 font-bold">
              HTML
            </div>
          </div>
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute top-0 left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-0 group-hover:opacity-100 font-bold">
              HTML
            </div>
          </div>
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute top-0 left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-0 group-hover:opacity-100 font-bold">
              HTML
            </div>
          </div>
          <div className="w-max border border-black px-[60px] py-[18px] relative group">
            <AiOutlineHtml5
              size={30}
              className="group-hover:opacity-0 opacity-100 transition-all"
            />
            <div className="absolute top-0 left-[50%] -translate-x-[50%] group-hover:top-[50%] transition-all group-hover:-translate-y-[50%] group-hover:-translate-x-[50%] opacity-0 group-hover:opacity-100 font-bold">
              HTML
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
