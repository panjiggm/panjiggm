import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center items-center w-full h-full bg-gradient-to-bl from-teal-400 to-violet-600">
          <h1 className="font-pacifico text-6xl text-white underline">
            Career Sum!
          </h1>
        </div>
      );
    },
  },
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center items-center w-full h-full bg-gradient-to-bl from-teal-400 to-violet-600">
          <h1 className="font-pacifico text-6xl text-white underline">
            Career Sum! 2
          </h1>
        </div>
      );
    },
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
