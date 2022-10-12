import { useRef, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import stories from "../data/stories.json";
import Story from "./Story";

const Stories = () => {
  const storiesRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (storiesRef.current === null) return;

    if (storiesRef.current.scrollLeft > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    if (
      storiesRef.current.scrollLeft ==
      storiesRef.current.scrollWidth - storiesRef.current.clientWidth
    ) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex space-x-5 overflow-x-scroll max-w-xl border-gray-200 p-4 scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
        ref={storiesRef}
      >
        {stories.map((story) => {
          return (
            <Story
              key={story.id}
              title={story.title}
              avatar={story.avatar}
              color={story.color}
            />
          );
        })}
      </div>
      <div className="absolute top-0 p-4 w-full h-full flex justify-between items-center z-10">
        <button
          onClick={() =>
            storiesRef.current !== null
              ? (storiesRef.current.scrollLeft =
                  storiesRef.current.scrollLeft - 300)
              : null
          }
        >
          <HiArrowCircleLeft
            className={`text-3xl text-white cursor-pointer filter drop-shadow-lg ${
              showLeft ? "visible" : "invisible"
            }`}
          />
        </button>
        <button
          onClick={() =>
            storiesRef.current !== null
              ? (storiesRef.current.scrollLeft =
                  storiesRef.current.scrollLeft + 300)
              : null
          }
        >
          <HiArrowCircleRight
            className={`text-3xl text-white cursor-pointer filter drop-shadow-lg ${
              showRight ? "visible" : "invisible"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Stories;
