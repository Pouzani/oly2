import React from 'react';
import inkoTemp from "../assets/inko_wide.jpeg";
import inko from "../assets/inko.jpeg";

const Card = () => {
  return (
    <>
    
      <img src={inkoTemp} className="w-full mb-4" alt="" />
      <h1 className=' text-4xl text-center text-olytext mb-4'>PLANNING V8</h1>
      <div className='w-full flex flex-wrap gap-4 justify-center '>
        <div className="bg-white">
          <img src={inko} className="" alt="" />
        </div>
        <div className="bg-white">
          <img src={inko} alt="" />
        </div>
      </div>
    
    </>
  )
}

export default Card;