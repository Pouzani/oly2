import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import "./social.css";

export const InstaCard = ({lien}) => {
  return (
    <div className="w-full aspect-square insta-background">
    <a href={lien} target="_blank">
      <AiOutlineInstagram className="text-white text-9xl" />
    </a>
    </div>
  );
};
