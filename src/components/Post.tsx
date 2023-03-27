import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { HiSquare2Stack } from 'react-icons/hi2';

interface PostProps {
  name: string;
  imageSrc: string;
  logo: string;
  address: string;
  description: string;
  images: string[];
}

const Post = ({
  imageSrc,
  logo,
  name,
  address,
  description,
  images,
}: PostProps) => {
  const { setOpenPostDetail, setDataPost } =
    useContext(GlobalContext);

  const handlePostDetail = () => {
    console.log('Post', name);

    const selcted = {
      name,
      imageSrc,
      logo,
      address,
      description,
      images,
    };

    setDataPost(selcted);

    setOpenPostDetail(true);
  };

  return (
    <div
      className="cursor-pointer hover:opacity-80 relative"
      onClick={handlePostDetail}
    >
      <img src={imageSrc} alt={name} width="100%" height="100%" />
      <HiSquare2Stack className="absolute top-2 right-2 text-white" />
    </div>
  );
};

export default Post;
