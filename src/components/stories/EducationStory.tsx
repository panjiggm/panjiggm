import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center w-full h-full bg-white dark:bg-gray-900">
          <div className="text-center text-6xl">🎓</div>
          <h1 className="mt-6 text-3xl text-gray-600 dark:text-white">
            Raharja University
          </h1>
          <h3 className="text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
            Creative Communication and Innovative Technology (CCIT) | Oct 2018
          </h3>

          <h1 className="mt-6 text-3xl text-gray-600 dark:text-white">
            SMK Al Fattah
          </h1>
          <h3 className="text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
            Technical Computer & Networking | 2010 - 2013
          </h3>
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

const EducationStory = () => {
  const { openEducationStory, setOpenEducationStory } =
    useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openEducationStory) {
      setStoryIndex(0);
    }
  }, [openEducationStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenEducationStory(false);
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
    <div className={`${openEducationStory ? "block" : "hidden"} w-full`}>
      <div className="drop-shadow-lg">
        <Stories
          loop={false}
          keyboardNavigation
          stories={stories}
          currentIndex={storyIndex}
          width="100%"
          height="100vh"
          onStoryEnd={(index: number, story: any) => {
            handleStoryChange(index);
          }}
        />
      </div>
    </div>
  );
};

export default EducationStory;
