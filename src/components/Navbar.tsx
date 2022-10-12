import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <nav className="py-10 flex justify-between">
      <h1 className="text-xl font-pacifico dark:text-white">@panjiggm</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl text-teal-700 dark:text-yellow-500"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
