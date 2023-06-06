import React from "react";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function MainContent() {
  return (
    <div className="w-[60%] h-[100%] p-4 flex flex-col items-start gap-7">
      <h1 className="text-white text-5xl">
        Shakhzod<span className="text-red-600">News</span>
      </h1>
      <p className="text-white text-2xl">We always share the latest news</p>
      <p className="text-white text-3xl">
        There are the most reliable information which are society, politics,
        <br />
        world, native, documentary, sport and education , in our website
      </p>
      <div className="w-[100%] flex flex-col items-start gap-7">
        <h1 className="text-red-600 text-2xl">
          You can follow our social media pages
        </h1>
        <ul className="text-3xl">
          <li>
            <a href="https://t.me/shakhzod9898">
              <BsTelegram className="text-blue-600 hover:scale-125" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/walker.5898">
              <BsInstagram className="text-red-700 hover:scale-125" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/walkerBEK">
              <BsFacebook className="text-blue-700 hover:scale-125" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/walker_1998">
              <BsTwitter className="text-blue-800 hover:scale-125" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@mr.shakhzod">
              <BsYoutube className="text-red-700 hover:scale-125" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
