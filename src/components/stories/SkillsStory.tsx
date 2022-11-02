import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center w-full h-full bg-white dark:bg-gray-900">
          <div className="text-center text-6xl">🥷🏻</div>
          <div>
            <h1 className="mt-8 text-3xl text-gray-600 dark:text-white">
              Key Competencies
            </h1>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Javascript ES6+
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              React/React Native (mostly React)
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Typescript
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              NextJS & JAM Stack
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Redux
            </h3>
            <h3 className="mt-2 text-sm text-white dark:text-gray-800 px-4 py-1 bg-gray-800 dark:bg-white rounded-lg">
              Basic REST API(s) using NodeJS & Databases
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

const SkillsStory = () => {
  const { openSkillsStory, setOpenSkillsStory } = useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openSkillsStory) {
      setStoryIndex(0);
    }
  }, [openSkillsStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenSkillsStory(false);
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
    <div className={`${openSkillsStory ? "block" : "hidden"} w-full`}>
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

export default SkillsStory;
