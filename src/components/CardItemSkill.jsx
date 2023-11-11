import React from "react";

const CardItemSkill = (props) => {
  return (
    <div
      className={`
      group 
      relative 
      mt-2 
      w-fit 
      rounded 
      border 
      border-black 
      p-2 
      shadow-[2px_2px_0px_black]
    `}
    >
      <div
        className="
      absolute
      left-[50%]
      top-[50%]
      -translate-x-[50%] 
      -translate-y-[150%]
      rounded
      border 
      border-black   
      bg-white
      px-2
      py-1
      text-xs
      opacity-0
      shadow-[1px_1px_0px_black]
      transition-all
      group-hover:-translate-y-[185%] 
      group-hover:opacity-100 
      "
      >
        {props.dataIcon.titleIcon}
      </div>
      <props.dataIcon.icon size={20} />
    </div>
  );
};

export default CardItemSkill;
