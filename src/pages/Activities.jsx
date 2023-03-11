import React from "react";
import Navbar from "../components/Navbar";
import { ActivityCard } from "../components/activities/ActivityCard";

const Activities = () => {
  
  const handleClick = (e) => {
    window.location.href=`activities/${e.target.id}`;
  };

  const ActivitiesList = [
    {
      name:"soiree",
      image: "image-background",
      bg: "olybg",
      title:"SOIREE",
      para:"Fugiat pariatur tempor sunt occaecat mollit cillum laboris ipsum cillum anim commodo elit."
    }
  ]



  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-9 items-center'>
        <h1 className='text-4xl text-olytext mt-5'>ACTIVITEES</h1>
        <div className='w-[90%] flex flex-wrap gap-16 justify-center'>
          {ActivitiesList.map((activity,i) => <ActivityCard {...activity} key={i} click={handleClick} />)}
        </div>
      </div>
    </>
  );
};

export default Activities;
