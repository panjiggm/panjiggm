import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { darkMode, setDarkMode, setOpenResume } = useContext(GlobalContext);

  const handleOpenResume = () => {
    setOpenResume(true);
  };

  return (
    <nav className="py-10 flex justify-between">
      <h1 className="text-xl font-pacifico text-gray-700 dark:text-white">
        @panjiggm
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl text-teal-700 dark:text-yellow-500"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
          onClick={handleOpenResume}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
