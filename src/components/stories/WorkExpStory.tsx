import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="p-6 flex flex-col justify-center w-full h-full bg-gradient-to-br to-lime-400 from-green-700">
          <h1 className="mt-6 text-4xl text-white">🎓 Frontend Developer</h1>
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
        <div className="p-6 flex flex-col justify-center w-full h-full bg-gradient-to-br to-amber-200 from-green-700">
          <h1 className="mt-6 text-4xl text-white">🏫 SMK Al-Fattah</h1>
          <h3 className="mt-4 text-lg text-emerald-800">
            Technical Computer & Networking | 2010 - 2013
          </h3>
        </div>
      );
    },
  },
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
