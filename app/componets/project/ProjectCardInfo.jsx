import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectCardInfo = ({item}) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-violet-700 dark:border-violet-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Project Information
        </h5>
      </div>
      <div className="flow-root overflow-hidden">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {/* client info */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <IoPerson size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Client
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.client}
                </p>
              </div>
            </div>
          </li>
          {/* category  */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaLayerGroup size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Category
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.category}
                </p>
              </div>
            </div>
          </li>
          {/* project start date  */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BsCalendarDate size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Date
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.date}
                </p>
              </div>
            </div>
          </li>
          {/* location  */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MdLocationPin size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Location
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.location}
                </p>
              </div>
            </div>
          </li>
          {/* website url  */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <IoIosGlobe size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Website Url
                </p>
                {item.website_url !== "" ? (
                  <Link
                    href={item?.website_url ?? "#"}
                    target="_blank"
                    className="text-sm text-gray-500 dark:text-gray-400 underline hover:text-blue-500"
                  >
                    {item.website_url}
                  </Link>
                ) : (
                  <p className="text-sm text-gray-400"> Not Provided</p>
                )}
              </div>
            </div>
          </li>
          {/* github link  */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaGithub size={25} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Github Url
                </p>
                {item.gitlink !== "" ? (
                  <Link
                    href={item?.gitlink ?? "#"}
                    target="_blank"
                    className="text-sm text-gray-500 dark:text-gray-400 underline hover:text-blue-400"
                  >
                    {item.gitlink}
                  </Link>
                ) : (
                  <p className="text-sm text-gray-400"> Not Provided </p>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCardInfo;
