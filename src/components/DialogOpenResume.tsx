import { useContext, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import { GlobalContext } from "../context/GlobalContext";

const PASSWORD: string = import.meta.env.VITE_RESUME_PASSWORD;

const DialogOpenResume = () => {
  const { openResume, setOpenResume } = useContext(GlobalContext);
  const [message, setMessage] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleDownload = () => {
    if (inputPassword === PASSWORD) {
      var a = document.createElement("a");
      a.href = "/Resume_Panji_Gumelar.pdf";
      a.setAttribute("download", "Resume_Panji_Gumelar");
      a.click();

      setInputPassword("");
      setMessage("");
      setOpenResume(false);
    } else {
      setMessage("Password is Not Valid!");
    }
  };

  const handleCloseDialog = () => {
    setOpenResume(false);
    setMessage("");
    setInputPassword("");
  };

  return (
    <Transition.Root show={openResume} as={Fragment}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Get My Resume
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Enter the password if you want to get my Resume.
                          Contact me via twitter, instagram or email
                        </p>
                      </div>

                      <label
                        htmlFor="password"
                        className="mt-4 block text-sm font-medium text-gray-700"
                      >
                        Insert password
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type={visible ? "text" : "password"}
                          name="password"
                          value={inputPassword}
                          onChange={(e) => setInputPassword(e.target.value)}
                          autoComplete="given-name"
                          className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                        />
                        <button
                          className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                          onClick={() => setVisible((prev) => !prev)}
                        >
                          {visible ? (
                            <HiOutlineEye className="text-lg" />
                          ) : (
                            <HiOutlineEyeOff className="text-lg" />
                          )}
                        </button>
                      </div>
                      {message !== "" && (
                        <span className="text-xs text-red-700">{message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleDownload}
                  >
                    Download
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCloseDialog}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogOpenResume;
