import CardItemSkill from "./CardItemSkill";

const CardProject = (props) => {
  return (
    <div className="h-full max-w-[343px] rounded border border-black shadow-[3px_3px_0px_black] duration-300 hover:shadow-[5px_5px_10px_black] sm:mb-10 sm:break-inside-avoid">
      <img
        src={props.data.img}
        alt={props.data.titleProject}
        className="rounded-tl-lg rounded-tr-lg border-b p-[2px]"
      />
      <div className="p-[16px]">
        <div className="mb-[16px]">
          <p className="text-[18px] font-bold leading-3">
            {props.data.titleProject}
          </p>
          <p>{props.data.typeProject}</p>
        </div>
        <p>{props.data.descriptionProject}</p>
        <div className="flex gap-2">
          {props.data.tech.map((e, i) => {
            return <CardItemSkill dataIcon={e} key={i} />;
          })}
        </div>
      </div>
      <div className="mb-3 flex cursor-not-allowed items-center justify-center">
        <p
          className="w-fit 
          border-b-2 
          border-dashed
          border-black 
        transition-all
        hover:border-2
        hover:border-b-2
        hover:px-2
        hover:py-1
        "
        >
          Read More
        </p>
      </div>
      <div className="m-[2px] flex items-center justify-center gap-2 rounded-bl rounded-br bg-black p-2 text-center text-white">
        <a
          href={props.data.linkDemo}
          target="_blank"
          className="cursor-alias rounded border border-white px-3 py-1 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
        >
          View Demo
        </a>
        <a
          href={props.data.linkSource}
          target="_blank"
          className="cursor-alias rounded border border-white px-3 py-1 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default CardProject;
