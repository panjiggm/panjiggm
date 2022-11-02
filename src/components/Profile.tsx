import { useContext } from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPlusCircle,
} from "react-icons/ai";

import ava from "../assets/avatar.png";
import { GlobalContext } from "../context/GlobalContext";

const LINK_LINKEDIN = `https://www.linkedin.com/in/panjiggm/`;
const LINK_INSTAGRAM = `https://instagram.com/panjiggm`;
const LINK_TWITTER = `https://twitter.com/panjiggm`;
const LINK_GITHUB = `https://github.com/panjiggm`;

const Profile = () => {
  const { setOpenProfileStory } = useContext(GlobalContext);

  const BTN_SOCMED =
    "flex items-center justify-center rounded-lg w-full text-white py-2 cursor-pointer";

  return (
    <div className="dark:text-white">
      <div className="flex items-center justify-between">
        <div className="relative flex flex-col bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full cursor-pointer">
          <a
            onClick={() => setOpenProfileStory(true)}
            className="bg-white p-1 rounded-full transform transition hover:-rotate-6 dark:bg-gray-900"
          >
            <img src={ava} className="w-24 h-24 sm:w-28 sm:h-28" alt="avatar" />
          </a>
          <button className="absolute bottom-0 right-1 bg-white rounded-full dark:bg-gray-900">
            <AiFillPlusCircle className="text-blue-500 hover:text-blue-600 text-2xl sm:text-4xl" />
          </button>
        </div>
        <div className="ml-2 sm:ml-8 flex">
          <div className="w-16 sm:w-20 text-center">
            <h4 className="text-md sm:text-xl">8/10</h4>
            <p className="text-xs sm:text-md">Skills</p>
          </div>
          <div className="w-16 sm:w-20 text-center">
            <h4 className="text-md sm:text-xl">8/10</h4>
            <p className="text-xs sm:text-md">Work</p>
          </div>
          <div className="w-24 sm:w-28 text-center">
            <h4 className="text-md sm:text-xl">8.5/10</h4>
            <p className="text-xs sm:text-md">Communication</p>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <h2 className="font-pacifico text-gray-700 dark:text-white font-light text-xl sm:text-2xl">
          Panji Gumelar
        </h2>
        <h3 className="text-sm sm:text-md text-gray-400">Frontend Engineer</h3>
      </div>
      <p className="pt-1 text-xs">
        A frontend engineer based in Tangerang, Indonesia. below are some
        websites that I have worked on, check the posts ⬇️
      </p>
      <div className="my-4 flex justify-between gap-1">
        <a
          href={LINK_LINKEDIN}
          target="_blank_"
          className={`${BTN_SOCMED} bg-blue-500 hover:bg-blue-400`}
        >
          <AiFillLinkedin />
          <p className="pl-1 text-xs sm:text-sm">LinkedIn</p>
        </a>
        <a
          href={LINK_INSTAGRAM}
          target="_blank_"
          className={`${BTN_SOCMED} bg-pink-600 hover:bg-pink-500`}
        >
          <AiFillInstagram />
          <p className="pl-1 text-xs sm:text-sm">Instagram</p>
        </a>
        <a
          href={LINK_TWITTER}
          target="_blank_"
          className={`${BTN_SOCMED} bg-sky-500 hover:bg-sky-400`}
        >
          <AiFillTwitterCircle />
          <p className="pl-1 text-xs sm:text-sm">Twitter</p>
        </a>
        <a
          href={LINK_GITHUB}
          target="_blank_"
          className={`${BTN_SOCMED} bg-gray-700 hover:bg-gray-600`}
        >
          <AiFillGithub />
          <p className="pl-1 text-xs sm:text-sm">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Profile;
