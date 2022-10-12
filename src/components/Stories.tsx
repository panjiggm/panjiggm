import stories from "../data/stories.json";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="flex space-x-5 overflow-x-scroll max-w-xl border-gray-200 scroll-smooth scrollbar-hide">
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
  );
};

export default Stories;
