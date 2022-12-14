import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BiUserPin } from "react-icons/bi";
import { BsGrid3X3 } from "react-icons/bs";

import Post from "./Post";

import group_1 from "../assets/Group_1.png";
import group_2 from "../assets/Group_2.png";
import group_3 from "../assets/Group_3.png";
import logo_1 from "../assets/next-byte-logo.png";
import logo_2 from "../assets/performate-logo.png";
import logo_3 from "../assets/greencover-logo.png";

const Posts = () => {
  let [categories] = useState([
    {
      name: "Posts",
      icon: <BsGrid3X3 className="text-lg" />,
      content: [
        {
          name: "Greencover",
          address: "https://greencover.co.id",
          imageSrc: group_3,
          logo: logo_3,
          description:
            "Greencover is a skin care product brand from Indonesia, which was founded in 2006. Derived from the word 'green' which is the color of life, it is closely related to nature and energy.",
        },
        {
          name: "Performate",
          address: "https://performate.id",
          imageSrc: group_2,
          logo: logo_2,
          description:
            "Performate.id helps improve the performance of your employees, so you can focus on increasing turnover and growing your business",
        },
        {
          name: "Nextbyte",
          address: "https://nextbyte.co",
          imageSrc: group_1,
          logo: logo_1,
          description:
            "Unlock Your Coding Skill for Freedom. Become a skilled professional programmer, build your app and collaborate with the team",
        },
      ],
    },
    { name: "Tags", icon: <BiUserPin className="text-2xl" />, content: [] },
  ]);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="mt-4">
      <div className="w-full max-w-md sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 p-1">
            {categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 leading-5",
                    "ring-opacity-60 focus:outline-none",
                    "flex justify-center",
                    selected
                      ? "shadow border-b-2 border-gray-500 dark:text-gray-100"
                      : "text-gray-300 dark:text-gray-500"
                  )
                }
              >
                {category.icon}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {categories.map((category, idx) => (
              <Tab.Panel key={idx}>
                {category.content.length > 0 ? (
                  <div className="grid grid-cols-3 gap-0.5">
                    {category.content?.map((item, i) => {
                      return (
                        <Post
                          key={i}
                          name={item.name}
                          imageSrc={item.imageSrc}
                          logo={item.logo}
                          address={item.address}
                          description={item.description}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-16 flex justify-center items-center w-full">
                    <h3 className="text-md text-gray-700 dark:text-gray-200">
                      No tagged post(s) ????
                    </h3>
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Posts;
