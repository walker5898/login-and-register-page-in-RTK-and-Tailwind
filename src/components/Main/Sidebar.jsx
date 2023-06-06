import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineLocalPolice } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-[40%] h-[100%] p-4 cursor-pointer flex flex-col items-start justify-start gap-4">
      <h1 className="text-white text-xl flex items-center gap-4 hover:text-red-600">
        <AiOutlineGlobal className="text-red-600" /> World
      </h1>
      <h1 className="text-white text-xl flex items-center gap-4 hover:text-red-600">
        <MdLocalOffer className="text-red-600" /> Local
      </h1>
      <h1 className="text-white text-xl flex items-center gap-4 hover:text-red-600">
        <MdOutlineLocalPolice className="text-red-600" /> Politics
      </h1>
      <h1 className="text-white text-xl flex items-center gap-4 hover:text-red-600">
        <MdSportsSoccer className="text-red-600" /> Sport
      </h1>
      <h1 className="text-white text-xl flex items-center gap-4 hover:text-red-600">
        <GiGraduateCap className="text-red-600" /> Education
      </h1>
    </div>
  );
}

export default Sidebar;
