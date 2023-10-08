import Typewriter from "typewriter-effect";

import CardSkill from "../components/CardSkill";
import DataGlobal from "../common/DataGlobal";

const Skills = () => {
  return (
    <div className="font-gilroy">
      <div className="z-0 text-[22px] font-bold ">
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
      <div className="mt-[20px] flex flex-col space-y-2 text-[14px]">
        <p className="mb-3">My basic skills are: </p>
        <div className="-z-0 flex flex-wrap justify-center gap-10">
          {DataGlobal.dataSkill.map((e, i) => {
            return <CardSkill icon={e.icon} skill={e.skill} key={i}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
