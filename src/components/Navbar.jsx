import React, { useState } from "react";
import olyLogo from "../assets/oly_logo.svg";
import olyLogoWhite from "../assets/white.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiFillBackward } from "react-icons/ai";
import { BiCalendar, BiTrophy } from "react-icons/bi";
import { RiMusic2Fill, RiGamepadFill } from "react-icons/ri";
import { MdEarbuds, MdOutlineClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sections = [
    "Planning V8",
    "Chasse au trésors",
    "Soirée",
    "Jeux Videos",
    "Last Year",
    "Activities",
    "Partenaires",
  ];

  const section_icons = [
    <BiCalendar className='text-white w-[38px] h-[38px]' />,
    <BiTrophy className='text-white w-[38px] h-[38px]' />,
    <RiMusic2Fill className='text-white w-[38px] h-[38px]' />,
    <RiGamepadFill className='text-white w-[38px] h-[38px]' />,
    <AiFillBackward className='text-white w-[38px] h-[38px]' />,
    <MdEarbuds className='text-white w-[38px] h-[38px]' />,
    <FaHandshake className='text-white w-[38px] h-[38px]' />,
  ];

  const section_links = [
    "/plan",
    "/chasse",
    "/soiree",
    "/gaming",
    "/lastyear",
    "/activities",
    "/partenaires",
  ];

  const social_media = [
    {
      link: "https://www.facebook.com/Olympiades.ENSIAS",
      icon: <BsFacebook className='text-white w-[29px] h-[29px]' />,
    },
    {
      link: "https://www.instagram.com/olympiades_ensias/",
      icon: <BsInstagram className='text-white w-[29px] h-[29px]' />,
    },
    {
      link: "https://www.youtube.com/@OlympiadesENSIAS",
      icon: <BsYoutube className='text-white w-[29px] h-[29px]' />,
    },
    {
      link: "https://www.linkedin.com/in/olympiades-ensias-072a97196/",
      icon: <IoLogoLinkedin className='text-white w-[29px] h-[29px]' />,
    },
  ];

  // {condition ? <ConditionalComponent /> : null}

  return (
    <>
      <div className='bg-olynav px-[21px] py-[8px] flex justify-between items-center xl:hidden'>
        <Link to={"/"}>
          <img src={olyLogo} className='w-[59px]' alt='' />
        </Link>
        <RxHamburgerMenu
          className='text-olyhamb w-[38px] h-[38px] hover:text-olyback  ease-linear transition-all cursor-pointer'
          onClick={() => {
            setOpen((open) => !open);
            document.body.style.overflow = "hidden";
          }}
        />
      </div>

      <div
        className={
          open
            ? "background_navbar absolute z-10 top-0 left-0 w-[100%] h-[100vh] overflow-hidden slide-in-blurred-bottom"
            : "hidden xl:block background_navbar z-10 top-0 left-0 w-[20%] h-screen overflow-hidden slide-in-blurred-bottom sticky"
        }
      >
        <div className='flex bg-[rgb(0,0,0,0.75)] px-[21px] py-[8px]  justify-between items-center mb-5'>
          <Link to={"/"}>
            <img
              src={olyLogoWhite}
              className='w-[59px] slide-in-blurred-left cursor-pointer'
              alt=''
            />
          </Link>
          <MdOutlineClose
            className='text-white w-[38px] h-[38px] slide-in-blurred-right hover:text-olynav transition-all ease-linear cursor-pointer xl:hidden'
            onClick={() => {
              setOpen(false);
              document.body.style.overflow = "unset";
            }}
          />
        </div>
        <div className='flex flex-col justify-center gap-3 px-[21px] py-[8px]  '>
          {sections.map((section, i) => (
            <Link to={section_links[i]}>
              <div
                className='flex gap-1 items-center fade-in-bottom cursor-pointer '
                key={i}
              >
                {section_icons[i]}
                <p className='text-white text-xl hover:text-olynav ease-linear transition-all'>
                  {section}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className='flex space-x-5 items-center justify-center mt-9'>
          {social_media.map((media, i) => (
            <div className='fade-in-bottom ' key={i}>
              <a href={media.link} target='_blank'>
                {media.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
