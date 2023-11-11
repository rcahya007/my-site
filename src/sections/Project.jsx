import Typewriter from "typewriter-effect";
import DataGlobal from "../common/DataGlobal";
import CardProject from "../components/CardProject";

const Project = () => {
  return (
    <div className="xl:flex">
      <div className="hidden xl:inline xl:w-1/2 xl:border-r xl:border-black xl:px-20 xl:py-32 ">
        <p className="xl:sticky xl:top-[88px] xl:font-gilroy xl:text-[50px] xl:font-semibold ">
          Projects
        </p>
      </div>
      <div className="font-gilroy sm:px-20 xl:flex xl:flex-1 xl:flex-col xl:py-32">
        <div className="z-0 text-[22px] font-bold sm:text-[38px]">
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
        <div className="mt-[20px] text-[14px] sm:text-base">
          <p className="mb-3">
            Below are some of my projects, some of which are still in the
            development stage:
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-10 sm:inline-block sm:w-full sm:columns-2 sm:text-sm">
            {DataGlobal.dataProject.map((e, i) => {
              return <CardProject data={e} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
