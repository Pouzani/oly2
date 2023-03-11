import React from "react";
import ActivityButton from "./activities/ActivityButton";
import { ActivityCard } from "./activities/ActivityCard";
import { Link } from "react-router-dom";

export const ActivitiesSection = () => {
  const handleClick = (e) => {
    window.location.href(`activities/${e.target.id}`);
  };

  const ActivitiesList = [
    {
      name: "SPORTS",
      image: "sports",
      bg: "olybg",
      title: "SPORTS",
      para: `Après une longue journée bien chargée,
      pleine de compétitions, d'activités culture-
      lles, et de shows, une soirée s'avère indis-
      pensable pour finir dans la meilleure des
      humeurs.`,
      textSize: "8xl",
    },
    {
      name: "conference",
      image: "image-background",
      bg: "olybg",
      title: "CONFERENCE",
      para: "Fugiat pariatur tempor sunt occaecat mollit cillum laboris ipsum cillum anim commodo elit.",
      textSize: "5xl",
    },
  ];

  return (
    <>
      <h1 className='text-4xl text-olytext'>ACTIVITEES</h1>
      <div className='flex flex-col items-center gap-20'>
        <div className='w-full flex flex-wrap gap-24 justify-center'>
          <div className=' max-w-[450px] h-[340px] mb-12'>
            <div
              className={`flex w-full h-full bg-conference items-center justify-center p-10 text-7xl text-white bg-contain bg-no-repeat bg-start`}
            >
              CONFERENCE
            </div>
            <Link>
              <p className='text-xl text-olytext py-6'>
                Fugiat pariatur tempor sunt occaecat mollit cillum laboris ipsum
                cillum anim commodo elit.
              </p>
            </Link>
          </div>
          <div className=' max-w-[450px] h-[340px] mb-12'>
            <div
              className={`flex w-full h-full bg-gaming items-center justify-center pr-10 text-7xl text-white bg-contain bg-no-repeat bg-start`}
            >
              GAMING
            </div>
            <Link>
              <p className='text-xl text-olytext py-6'>
              A tournament that starts with online regulations and ends with michestoto finals right here in ENSIAS !</p>
            </Link>
          </div>
          <div className=' max-w-[500px] h-[340px] mb-12'>
            <div
              className={`flex flex-col w-full h-full bg-olybg items-center justify-center pr-10 text-8xl text-white bg-contain bg-no-repeat bg-start `}
            >
              CHASSE <p className="text-4xl">AU TRESOR</p>
            </div>
            <Link>
              <p className='text-xl text-olytext py-6'>Fugiat pariatur tempor sunt occaecat mollit cillum laboris ipsum cillum anim commodo elit.</p>
            </Link>
          </div>
        </div>

        <ActivityButton />
      </div>
    </>
  );
};
