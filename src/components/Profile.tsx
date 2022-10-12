import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPlusCircle,
} from "react-icons/ai";

const Profile = () => {
  const BTN_SOCMED =
    "flex items-center justify-center rounded-lg w-full text-white py-2 cursor-pointer";

  return (
    <div className="dark:text-white">
      <div className="flex items-center">
        <div className="relative flex flex-col bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full cursor-pointer">
          <a className="bg-white p-1 rounded-full transform transition hover:-rotate-6 dark:bg-gray-900">
            <img
              src="../public/avatar.png"
              className="w-20 h-20 sm:w-28 sm:h-28"
              alt="avatar"
            />
          </a>
          <button className="absolute bottom-0 right-1 bg-white rounded-full dark:bg-gray-900">
            <AiFillPlusCircle className="text-blue-500 hover:text-blue-600 text-2xl sm:text-4xl" />
          </button>
        </div>
        <div className="ml-2 sm:ml-8 flex">
          <div className="w-20 text-center">
            <h4 className="font-pacifico text-2xl">9/10</h4>
            <p className="font-pacifico text-md">Skills</p>
          </div>
          <div className="w-20 text-center">
            <h4 className="font-pacifico text-2xl">8/10</h4>
            <p className="font-pacifico text-md">Work</p>
          </div>
          <div className="w-28 text-center">
            <h4 className="font-pacifico text-2xl">8.5/10</h4>
            <p className="font-pacifico text-md">Communication</p>
          </div>
        </div>
      </div>
      <h2 className="pt-3 font-pacifico font-light text-3xl">Panji Gumelar</h2>
      <h3 className="pt-1 text-md text-gray-400">Software Engineer</h3>
      <p className="pt-1 text-xs">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <div className="my-4 flex justify-between gap-1">
        <a className={`${BTN_SOCMED} bg-blue-500 hover:bg-blue-400`}>
          <AiFillLinkedin />
          <p className="pl-1 text-xs sm:text-sm">LinkedIn</p>
        </a>
        <a className={`${BTN_SOCMED} bg-pink-600 hover:bg-pink-500`}>
          <AiFillInstagram />
          <p className="pl-1 text-xs sm:text-sm">Instagram</p>
        </a>
        <a className={`${BTN_SOCMED} bg-sky-500 hover:bg-sky-400`}>
          <AiFillTwitterCircle />
          <p className="pl-1 text-xs sm:text-sm">Twitter</p>
        </a>
        <a className={`${BTN_SOCMED} bg-gray-700 hover:bg-gray-600`}>
          <AiFillGithub />
          <p className="pl-1 text-xs sm:text-sm">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Profile;
