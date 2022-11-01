import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface PostProps {
  name: string;
  imageSrc: string;
  logo: string;
  address: string;
  description: string;
}

const Post = ({ imageSrc, logo, name, address, description }: PostProps) => {
  const { setOpenPostDetail, setDataPost } = useContext(GlobalContext);

  const handlePostDetail = () => {
    console.log("Post", name);

    const selcted = {
      name,
      imageSrc,
      logo,
      address,
      description,
    };

    setDataPost(selcted);

    setOpenPostDetail(true);
  };

  return (
    <div className="cursor-pointer hover:opacity-80" onClick={handlePostDetail}>
      <img src={imageSrc} alt={name} width="100%" height="100%" />
    </div>
  );
};

export default Post;
