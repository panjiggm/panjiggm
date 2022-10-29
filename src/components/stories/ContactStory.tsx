import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center w-full h-full bg-white dark:bg-gray-900">
          <div className="text-center text-6xl">☎️</div>
          <div>
            <h1 className="mt-8 text-3xl text-gray-600 dark:text-white">
              Contact Me at
            </h1>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Email: panjiggm@gmail.com
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Phone/Whatsapp: 081218227597
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Address: Tangerang, Banten, Indonesia
            </h3>
          </div>
        </div>
      );
    },
    duration: 5000,
  },
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center items-center w-full h-full bg-white dark:bg-gray-900">
          <h1 className="mt-6 text-2xl text-gray-700 dark:text-white">
            See more on my Resume
          </h1>
        </div>
      );
    },
    duration: 2000,
  },
];

const ContactStory = () => {
  const { openContactStory, setOpenContactStory } = useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openContactStory) {
      setStoryIndex(0);
    }
  }, [openContactStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenContactStory(false);
      setStoryIndex(0);
    }
  }, [storyIndex]);

  const handleStoryChange = (newIndex: number) => {
    if (newIndex + 2 < stories.length) {
      setStoryIndex(newIndex + 1);
    } else {
      setStoryIndex(newIndex);
    }
  };

  return (
    <div className={`${openContactStory ? "block" : "hidden"} w-full`}>
      <div className="drop-shadow-lg">
        <Stories
          loop={false}
          keyboardNavigation
          stories={stories}
          currentIndex={storyIndex}
          width="100%"
          height="100vh"
          onStoryEnd={(index: number) => {
            handleStoryChange(index);
          }}
        />
      </div>
    </div>
  );
};

export default ContactStory;
