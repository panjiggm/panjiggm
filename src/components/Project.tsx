import { FC } from 'react';

import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTrpc,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiSupabase,
} from 'react-icons/si';

interface ProjectProps {
  name: string;
  imageSrc: string;
  images?: string[];
  logo: string;
  address: string;
  description: string;
}

const Project: FC<ProjectProps> = ({
  name,
  imageSrc,
  logo,
  address,
  description,
}) => {
  return (
    <div className="flex w-full bg-gray-50 p-3 rounded-lg shadow-md">
      <a href={address} target="_blank">
        <div className="mr-3 flex items-center justify-center p-4 w-20 h-20 bg-slate-500 rounded-lg">
          <h1 className="font-pacifico text-white">{name}</h1>
        </div>
      </a>
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-500">{description}</p>
        <div className="">
          <h2 className="text-xs text-gray-700">Stack:</h2>
          <div className="flex gap-2 mt-1">
            <SiTypescript className="text-lg text-blue-800" />
            <SiReact className="text-lg text-blue-500" />
            <SiNextdotjs className="text-lg text-gray-900" />
            <SiTrpc className="text-lg text-blue-800" />
            <SiReactquery className="text-lg text-orange-700" />
            <SiPrisma className="text-lg text-gray-800" />
            <SiPostgresql className="text-lg text-blue-800" />
            <SiSupabase className="text-lg text-green-500" />
            <SiTailwindcss className="text-lg text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
