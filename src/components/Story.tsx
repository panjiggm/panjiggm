type StoryProps = {
  title: string;
  avatar: string;
  color: string;
};

const Story = ({ title, avatar, color }: StoryProps) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="p-0.5 bg-gray-300 rounded-full cursor-pointer">
        <div className="p-1 bg-white rounded-full dark:bg-gray-900">
          <div
            className="h-14 w-14 sm:w-16 sm:h-16 text-2xl rounded-full flex justify-center items-center"
            style={{ backgroundColor: color }}
          >
            {avatar}
          </div>
        </div>
      </div>

      <p className="text-xs w-16 text-center truncate dark:text-white">
        {title}
      </p>
    </div>
  );
};

export default Story;
