import { useContext, useState, useEffect } from "react";
import Stories from "react-insta-stories";

import { GlobalContext } from "../../context/GlobalContext";

const stories = [
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center items-center w-full h-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
          <h1 className="font-pacifico text-8xl text-white">Hola!</h1>
          <h3 className="mt-10 text-md bg-white px-2 rounded-lg">
            Welcome to my official site
          </h3>

          <p className="mt-2 text-md bg-white px-2 rounded-lg">
            Don't forget to follow me on social media 😉
          </p>
        </div>
      );
    },
    duration: 5000,
  },
  {
    content: () => {
      return (
        <div className="px-6 flex flex-col justify-center items-center w-full h-full bg-gradient-to-bl from-lime-400 to-violet-600">
          <h1 className="font-pacifico text-6xl text-white">Thank You!</h1>
        </div>
      );
    },
    duration: 2000,
  },
];

const ProfileStory = () => {
  const { openProfileStory, setOpenProfileStory } = useContext(GlobalContext);
  const [storyIndex, setStoryIndex] = useState<number>(0);

  useEffect(() => {
    if (openProfileStory) {
      setStoryIndex(0);
    }
  }, [openProfileStory]);

  useEffect(() => {
    if (storyIndex + 1 === stories.length) {
      setOpenProfileStory(false);
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
    <div className={`${openProfileStory ? "block" : "hidden"} w-full`}>
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

export default ProfileStory;

const contentStyle = {
  background: "#333",
  width: "100%",
  padding: 20,
  color: "white",
  height: "100%",
};

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};
