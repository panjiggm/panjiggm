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
    <div>
      <div className="flex items-center">
        <div className="relative flex flex-col bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full cursor-pointer">
          <a className="bg-white p-1 rounded-full transform transition hover:-rotate-6">
            <img
              src="../public/avatar.png"
              width={100}
              height={100}
              alt="avatar"
            />
          </a>
          <button className="absolute bottom-0 right-0 bg-white rounded-full">
            <AiFillPlusCircle className="text-blue-500 hover:text-blue-600 text-4xl" />
          </button>
        </div>
        <div className="ml-8 flex">
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
      <h3 className="pt-1 text-md">Software Engineer</h3>
      <p className="pt-1 text-xs">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <div className="my-4 flex justify-between gap-1">
        <a className={`${BTN_SOCMED} bg-blue-500 hover:bg-blue-400`}>
          <AiFillLinkedin />
          <p className="pl-1 text-sm">LinkedIn</p>
        </a>
        <a className={`${BTN_SOCMED} bg-pink-600 hover:bg-pink-500`}>
          <AiFillInstagram />
          <p className="pl-1 text-sm">Instagram</p>
        </a>
        <a className={`${BTN_SOCMED} bg-sky-500 hover:bg-sky-400`}>
          <AiFillTwitterCircle />
          <p className="pl-1 text-sm">Twitter</p>
        </a>
        <a className={`${BTN_SOCMED} bg-gray-800 hover:bg-gray-700`}>
          <AiFillGithub />
          <p className="pl-1 text-sm">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Profile;
