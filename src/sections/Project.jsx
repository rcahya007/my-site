import Typewriter from "typewriter-effect";
import DataGlobal from "../common/DataGlobal";
import CardProject from "../components/CardProject";

const Project = () => {
  return (
    <div className="font-gilroy">
      <div className="z-0 text-[22px] font-bold ">
        <Typewriter
          options={{
            strings: ["Projects", "Finished", "Coming soon"],
            autoStart: true,
            loop: true,
            delay: "natural",
            cursorClassName: "",
          }}
        />
      </div>
      <div className="mt-[20px] text-[14px]">
        <p className="mb-3">
          Below are some of my projects, some of which are still in the
          development stage:
        </p>
        <div className="mt-7 flex flex-wrap gap-10">
          {DataGlobal.dataProject.map((e, i) => {
            return <CardProject data={e} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
