import { useContext, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend, FiBookmark, FiMoreHorizontal, FiSmile } from "react-icons/fi";

import { GlobalContext } from "../context/GlobalContext";

const DialogPostDetail = () => {
  const { darkMode, openPostDetail, setOpenPostDetail, dataPost } =
    useContext(GlobalContext);

  const [comment, setComment] = useState<string>("");

  const handleCloseDialog = () => {
    setOpenPostDetail(false);
  };

  return (
    <Transition.Root show={openPostDetail} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`${!darkMode ? "bg-white" : "bg-gray-900"
                  } relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
              >
                <Dialog.Title
                  as="h3"
                  className={`text-lg font-medium leading-6 ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <a href={dataPost?.address} target="_blank">
                        <div className="flex items-center">
                          <img
                            src={dataPost?.logo}
                            className="rounded-full h-8"
                          />
                          <h3 className="ml-1.5 text-sm font-bold">
                            {dataPost?.name}
                          </h3>
                        </div>
                      </a>

                      <FiMoreHorizontal className="text-xl cursor-pointer" />
                    </div>
                  </div>
                  <img src={dataPost?.imageSrc} alt={dataPost?.name} />
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FaRegHeart className="text-xl cursor-pointer" />
                        <IoChatbubbleOutline className="text-xl cursor-pointer" />
                        <FiSend className="text-xl cursor-pointer" />
                      </div>

                      <FiBookmark className="text-xl cursor-pointer" />
                    </div>
                    <div className="text-sm mt-2">
                      Liked by <b>panjiggm</b> and <b>others</b>
                    </div>
                    <div className="text-sm mt-2">
                      <a href={dataPost?.address} target="_blank">
                        <b>{dataPost?.name.toLocaleLowerCase()}</b>{" "}
                      </a>
                      <span className="text-justify">
                        {dataPost?.description}
                      </span>
                    </div>
                    <div className="text-sm mt-2">
                      <a href={dataPost?.address} target="_blank" className="text-blue-600 underline">
                        #GoTo{dataPost?.name}
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4 w-full">
                        <FiSmile className="text-xl cursor-pointer opacity-60" />
                        <input
                          placeholder="Add a comment"
                          className={`text-xs outline-none font-light ${darkMode
                            ? "text-gray-100 bg-gray-600"
                            : "text-gray-600"
                            } w-full rounded-md p-2`}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </div>

                      <button
                        className={`${comment !== "" ? "text-blue-500" : "text-blue-300"
                          } text-sm font-semibold`}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogPostDetail;
