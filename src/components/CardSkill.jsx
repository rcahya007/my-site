import React from "react";

const CardSkill = (props) => {
  return (
    <div className="group relative -z-0 w-max cursor-pointer rounded border border-black px-[45px] py-[16px] shadow-[3px_3px_0px_black] duration-300 hover:scale-105 hover:shadow-[5px_5px_10px_black]">
      <props.icon
        size={40}
        className="opacity-100 transition-all group-hover:opacity-0"
      />
      <div
        className="
        absolute
              left-[50%] 
              -z-0 
              -translate-x-[50%] 
              font-bold 
              opacity-0 
              transition-all 
              group-odd:top-0 
              group-even:bottom-0 
              group-hover:-translate-x-[50%]
              group-hover:-translate-y-[50%] 
              group-hover:text-lg 
              group-hover:text-black 
              group-hover:opacity-100 
              group-hover:group-odd:top-[50%] 
              group-hover:group-odd:-translate-y-[50%] 
              group-hover:group-even:bottom-[50%] 
              group-hover:group-even:translate-y-[50%]"
      >
        {props.skill}
      </div>
    </div>
  );
};

export default CardSkill;
