import React from "react";
import { Link } from "react-router-dom";

export const ActivityCard = (props) => {
  return (
    <div className=' max-w-[500px] h-[340px] mb-12'>
      <div
        className={`flex w-full h-full ${props.image} bg-${props.bg} items-center justify-end pr-10 text-${props.textSize} text-olytext bg-contain bg-no-repeat bg-start hover:bg-olyhover cursor-pointer`}
        onClick={(e) => props.click(e)}
        id={props.name}
      >
        {props.title}
      </div>
      <Link>
        <p className='text-xl text-olytext py-6'>{props.para}</p>
      </Link>
    </div>
  );
};
