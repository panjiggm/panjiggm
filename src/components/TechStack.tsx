import { FC, ReactNode } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiPostgresql,
  SiTrpc,
  SiGatsby,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';

interface TectProps {
  icon: ReactNode;
  text: string;
}

const Tech: FC<TectProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-xs text-gray-500 font-semibold">{text}</p>
    </div>
  );
};

const TechStack: FC = () => {
  return (
    <div className="my-6  w-full">
      <h1 className="font-semibold text-gray-800">
        The tech and language I use
      </h1>

      <div className="mb-5">
        <div className="flex gap-1">
          <SiJavascript className="text-sm text-yellow-400" />
          <SiTypescript className="text-sm text-blue-800" />
        </div>
        <p className="my-1 text-gray-500 text-xs text-justify">
          I am a Javascript and Typescript Developer, and I build
          applications using this language and its ecosystem.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-semibold text-sm text-gray-700">
          Fullstack
        </h2>
        <p className="my-1 text-gray-500 text-xs text-justify">
          I'm using T3 stack for fullstack development. The T3 stack
          consists of Next, Typescript, tRPC, Tailwind (opt) and
          Prisma. And for database I usually use postgresql.
        </p>
        <div className="my-3 grid grid-cols-4 gap-2">
          <Tech
            icon={<SiNextdotjs className="text-xl text-gray-900" />}
            text="Next"
          />
          <Tech
            icon={<SiTrpc className="text-xl text-blue-800" />}
            text="tRPC"
          />
          <Tech
            icon={<SiPrisma className="text-xl text-gray-800" />}
            text="Primsa"
          />
          <Tech
            icon={<SiPostgresql className="text-xl text-blue-800" />}
            text="Postgresql"
          />
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-semibold text-sm text-gray-700">
          Frontend - Web
        </h2>
        <p className="my-1 text-gray-500 text-xs text-justify">
          Since 2018 I know React, and until now I really like it.
        </p>
        <div className="my-3 grid grid-cols-4 gap-2">
          <Tech
            icon={<SiReact className="text-xl text-blue-500" />}
            text="React"
          />
          <Tech
            icon={<SiRedux className="text-xl text-violet-600" />}
            text="Redux"
          />
          <Tech
            icon={<SiNextdotjs className="text-xl text-gray-900" />}
            text="Next"
          />
          <Tech
            icon={<SiGatsby className="text-xl text-purple-600" />}
            text="Gatsby"
          />
        </div>
      </div>

      <div className="mb-10">
        <h2 className="font-semibold text-sm text-gray-700">
          Frontend - Mobile
        </h2>
        <p className="my-1 text-gray-500 text-xs text-justify">
          Because I'm used to the React ecosystem. so, for mobile
          development I use React Native.
        </p>
        <div className="my-3 grid grid-cols-4 gap-2">
          <Tech
            icon={
              <TbBrandReactNative className="text-2xl text-blue-500" />
            }
            text="React Native"
          />
        </div>
      </div>

      <div className="">
        <h2 className="font-semibold text-sm text-gray-700">
          Styling
        </h2>
        <p className="my-1 text-gray-500 text-xs text-justify">
          Some of the CSS frameworks that I've used.
        </p>
        <div className="my-3 grid grid-cols-4 gap-2">
          <Tech
            icon={<SiTailwindcss className="text-xl text-blue-400" />}
            text="Tailwind"
          />
          <Tech
            icon={<SiMui className="text-xl text-blue-600" />}
            text="Material UI"
          />
          <Tech
            icon={<SiChakraui className="text-xl text-teal-500" />}
            text="Chakra UI"
          />
          <Tech
            icon={<FaSass className="text-xl text-pink-700" />}
            text="Sass"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
