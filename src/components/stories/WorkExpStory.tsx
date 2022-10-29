import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center w-full h-full bg-white dark:bg-gray-900">
          <div className="text-center text-6xl">🧑🏻‍💻</div>
          <div>
            <h1 className="mt-8 text-3xl text-gray-600 dark:text-white">
              Frontend Developer
            </h1>
            <h3 className="text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Performate.id | 2020 - 2022
            </h3>

            <h1 className="mt-8 text-3xl text-gray-600 dark:text-white">
              Software Engineer
            </h1>
            <h3 className="text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              NextByte.co | Apr 2019 - Jan 2020
            </h3>

            <h1 className="mt-8 text-3xl text-gray-600 dark:text-white">
              Software Developer
            </h1>
            <h3 className="text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              PT. Next Transformtech Indonesia (NEXT TI) | Feb 2019 - Jun 2019
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

const WorkExpStory = () => {
  const { openWorkExpStory, setOpenWorkExpStory } = useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openWorkExpStory) {
      setStoryIndex(0);
    }
  }, [openWorkExpStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenWorkExpStory(false);
      setStoryIndex(0);
    }
  }, [storyIndex]);

  const handleStoryChange = (newIndex: number) => {
    setStoryIndex(newIndex);
  };

  return (
    <div className={`${openWorkExpStory ? "block" : "hidden"} w-full`}>
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

export default WorkExpStory;
