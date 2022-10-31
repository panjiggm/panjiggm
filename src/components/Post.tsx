import React from "react";

interface PostProps {
  name: string;
  imageSrc: string;
}

const Post = ({ imageSrc, name }: PostProps) => {
  return (
    <div className="cursor-pointer hover:opacity-80">
      <img src={imageSrc} alt={name} width="100%" height="100%" />
    </div>
  );
};

export default Post;
