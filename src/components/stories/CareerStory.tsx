import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center items-center text-center w-full h-full bg-white dark:bg-gray-900">
          <h1 className="font-pacifico text-6xl text-gray-700 dark:text-white">
            Hi!
          </h1>

          <p className="mt-8 text-gray-700 dark:text-white">
            I'm a Frontend Engineer who are passionate about building Web or
            Mobile Application based in Tangerang, Indonesia.
          </p>
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

const CareerStory = () => {
  const { openCareerStory, setOpenCareerStory } = useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openCareerStory) {
      setStoryIndex(0);
    }
  }, [openCareerStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenCareerStory(false);
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
    <div className={`${openCareerStory ? "block" : "hidden"} w-full`}>
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

export default CareerStory;
