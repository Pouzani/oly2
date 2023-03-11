import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import "./social.css";

export const YtCard = ({lien}) => {
  return (
    <div className="w-full aspect-square yt-background">
      <a href={lien} target="_blank">
        <AiFillYoutube className="text-white text-9xl" />
      </a>
    </div>
  );
};
