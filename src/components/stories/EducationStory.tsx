import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center w-full h-full bg-gradient-to-br to-lime-400 from-green-700">
          <h1 className="mt-6 text-4xl text-white">🎓 Raharja University</h1>
          <h3 className="mt-4 text-lg text-yellow-100">
            Creative Communication and Innovative Technology (CCIT) | Oct 2018
          </h3>
        </div>
      );
    },
  },
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center w-full h-full bg-gradient-to-br to-lime-400 from-green-700">
          <h1 className="mt-6 text-4xl text-white">🏫 SMK Al-Fattah</h1>
          <h3 className="mt-4 text-lg text-yellow-100">
            Technical Computer & Networking | 2010 - 2013
          </h3>
        </div>
      );
    },
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
