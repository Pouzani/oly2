import React from "react";
import { FbCard } from "./socials/FbCard";
import { InstaCard } from "./socials/InstaCard";
import { YtCard } from "./socials/YtCard";


const social_media_links = ["https://www.facebook.com/Olympiades.ENSIAS",
                      "https://www.instagram.com/olympiades_ensias/",
                      "https://www.youtube.com/@OlympiadesENSIAS",
                      "https://www.linkedin.com/in/olympiades-ensias-072a97196/"]


export const Socials = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-20">
      <h1 className='text-4xl m-2 text-olytext'>SUIVEZ-NOUS</h1>
    <div className='w-full h-auto flex flex-col gap-4 justify-center items-center md:flex-row md:h-96'>
      <InstaCard lien={social_media_links[1]} />
      <FbCard lien={social_media_links[0]} />
      <YtCard lien={social_media_links[2]} />
    </div>
    </div>
  );
};
