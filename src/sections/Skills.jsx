import Typewriter from "typewriter-effect";

import CardSkill from "../components/CardSkill";
import DataGlobal from "../common/DataGlobal";

const Skills = () => {
  return (
    <div className="font-gilroy xl:flex xl:h-full">
      <div className="hidden  xl:flex xl:flex-1 xl:border-r xl:border-black xl:px-20 xl:pb-20 xl:pt-32">
        <p className="xl:text-[50px] xl:font-semibold">Skil Tech</p>
      </div>
      <div className=" xl:flex xl:flex-1 xl:flex-col xl:border-black xl:px-20 xl:pb-24 xl:pt-32">
        <div className="z-0 text-[22px] font-bold sm:text-4xl">
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
        <div className="mt-[20px] flex flex-col space-y-2 ">
          <p className="mb-3 text-base">My basic skills are: </p>
          <div className="-z-0 flex flex-wrap justify-center gap-10">
            {DataGlobal.dataSkill.map((e, i) => {
              return <CardSkill icon={e.icon} skill={e.skill} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
