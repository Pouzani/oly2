import React from "react";
import { MdFacebook } from "react-icons/md";
import "./social.css";


export const FbCard = ({lien}) => {
  return (
    <div className="w-full aspect-square fb-background">
    <a href={lien} target="_blank" >
      <MdFacebook className="text-white text-9xl" />
      </a>
    </div>
  );
};
