import { Tab } from '@headlessui/react';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { BsGrid3X3 } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';

import Post from './Post';
import Project from './Project';
import TechStack from './TechStack';

import group_1 from '../assets/Group_1.png';
import group_2 from '../assets/Group_2.png';
import group_3 from '../assets/Group_3.png';
import group_4 from '../assets/Group_4.png';
import group_5 from '../assets/Group_5.png';
import group_6 from '../assets/Group_6.png';
import group_1_1 from '../assets/Group_1-1.png';
import group_2_1 from '../assets/Group_2-1.png';
import group_3_1 from '../assets/Group_3-1.png';
import group_4_1 from '../assets/Group_4-1.png';
import group_5_1 from '../assets/Group_5-1.png';
import logo_1 from '../assets/next-byte-logo.png';
import logo_2 from '../assets/performate-logo.png';
import logo_3 from '../assets/greencover-logo.png';
import logo_4 from '../assets/mobekal-logo.png';
import logo_5 from '../assets/logo-cybercave.png';
import logo_6 from '../assets/sushiman-logo.png';
import { useState } from 'react';

const categories = [
  {
    name: 'Portfolio',
    icon: <BsGrid3X3 className="text-lg" />,
    content: [
      {
        name: 'Sushiman',
        address: 'https://sushiman-eight.vercel.app/',
        imageSrc: group_6,
        images: [group_6],
        logo: logo_6,
        description:
          'Sushiman is slicing project landing page website using HTML & CSS',
      },
      {
        name: 'Cybercave.id',
        address: 'https://cybercave.id',
        imageSrc: group_5,
        images: [group_5, group_5_1],
        logo: logo_5,
        description:
          'Cybercave Indonesia is an IT consultant that focuses on providing solutions for technology needs and business performance management.',
      },
      {
        name: 'Mobekal',
        address: 'https://mobekal.vercel.app',
        imageSrc: group_4,
        images: [group_4, group_4_1],
        logo: logo_4,
        description:
          'Mobekal is a ready-to-eat food product that is packaged in a portable way so it is very easy to carry anywhere, the Mobekal menu is delicious served with rice.',
      },
      {
        name: 'Greencover',
        address: 'https://greencover.co.id',
        imageSrc: group_3,
        images: [group_3, group_3_1],
        logo: logo_3,
        description:
          "Greencover is a skin care product brand from Indonesia, which was founded in 2006. Derived from the word 'green' which is the color of life, it is closely related to nature and energy.",
      },
      {
        name: 'Performate',
        address: 'https://performate.id',
        imageSrc: group_2,
        images: [group_2, group_2_1],
        logo: logo_2,
        description:
          'Performate.id helps improve the performance of your employees, so you can focus on increasing turnover and growing your business',
      },
      {
        name: 'Nextbyte',
        address: 'https://nextbyte.co',
        imageSrc: group_1,
        images: [group_1, group_1_1],
        logo: logo_1,
        description:
          'Unlock Your Coding Skill for Freedom. Become a skilled professional programmer, build your app and collaborate with the team',
      },
    ],
  },
  {
    name: 'Project',
    icon: <FaLaptopCode className="text-2xl" />,
    content: [
      {
        name: 'Chuaks',
        address: 'https://chuaks.vercel.app',
        imageSrc: group_1,
        images: [],
        logo: group_1,
        description:
          'Chuaks is an application to write funny sentences and other users can comment and like on them.',
      },
    ],
  },
  {
    name: 'Tech Stack',
    icon: <HiOutlineSquare3Stack3D className="text-2xl" />,
    content: [],
  },
];

const Posts = () => {
  const [tab, setTab] = useState<number>(0);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="py-4">
      <div className="w-full max-w-md sm:px-0">
        <Tab.Group selectedIndex={tab} onChange={setTab}>
          <Tab.List className="flex space-x-1 p-1">
            {categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 leading-5',
                    'ring-opacity-60 focus:outline-none',
                    'flex justify-center',
                    selected
                      ? 'shadow border-b-2 border-gray-500 dark:text-gray-100'
                      : 'text-gray-300 dark:text-gray-500'
                  )
                }
              >
                <span>{category.icon}</span>
                <span className="ml-2 text-sm">{category.name}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {categories.map((category, idx) => {
              return (
                <Tab.Panel key={idx}>
                  {tab === 0 && (
                    <div className="grid grid-cols-3 gap-0.5">
                      {category.content?.map((item, i) => {
                        return (
                          <Post
                            key={i}
                            name={item.name}
                            imageSrc={item.imageSrc}
                            images={item.images}
                            logo={item.logo}
                            address={item.address}
                            description={item.description}
                          />
                        );
                      })}
                    </div>
                  )}
                  {tab === 1 &&
                    category.content?.map((item, i) => {
                      return (
                        <Project
                          key={i}
                          name={item.name}
                          imageSrc={item.imageSrc}
                          logo={item.logo}
                          address={item.address}
                          description={item.description}
                        />
                      );
                    })}
                  {tab === 2 && <TechStack />}
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Posts;
