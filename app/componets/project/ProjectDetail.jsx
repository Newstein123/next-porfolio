"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../../public/data/project";
import { IoPerson } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ProjectDetailImg from "../../../public/image/projects/project_details.png";
import Link from "next/link";
import ProjectDetailSkeleton from "../skeleton/ProjectDetailSkeleton";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Stick } from "next/font/google";

const ProjectDetail = ({ id }) => {
  const [item, setItem] = useState({});
  const filteredResult = data.filter((item) => item.id == id);

  useEffect(() => {
    setItem(filteredResult[0]);
  }, [id]);

  return (
    <div>
      {/* image  */}
      <div className="mx-10 pt-5">
        <Image
          src={ProjectDetailImg}
          alt="project cover image"
          width={1920}
          height={350}
          className="rounded-lg"
        />
      </div>
      <div className="mx-10 md:mx-20 mt-20">
        {/* Project details || Image  project information */}
        <div className="flex flex-wrap">
          {/* project details  */}
          <div className="w-full lg:w-2/3">
            <img
              src={item.project_img?.main ?? "https://placehold.co/803x488"}
              alt="project cover image"
              width={803}
              height={488}
            />
            {/* Heading One  */}
            <h1 className="text-2xl font-bold text-slate-700 mt-10">
              {item.title}
            </h1>
            {/* paragraph  */}
            <p className="text-slate-500 text-justify"> {item.project_desc} </p>
            {/* technologies  */}
            <div className="my-5">
              <h2 class="mb-2 text-lg font-semibold text-gray-700">
                Project Technologies:
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-inside">
                {
                    item.project_tech?.map(proj => (
                        <li class="flex items-center">
                            <svg
                                class="w-3.5 h-3.5 me-2 text-violet-500 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            {proj}
                        </li>
                    ))
                }
              </ul>
            </div>
            {/* Heading Two  */}
            <h2 className="text-2xl font-bold text-slate-700 mt-10">
              The Challange of Project
            </h2>
            {/* paragraph two  */}
            <p className="text-slate-500 text-justify"> {item.project_challenge?.intro} </p>
            {/* Two Image  */}
            <div className="flex flex-wrap mt-10">
                {/* Image one  */}
              <div className="w-full md:w-1/2">
                <div data-aos="slide-left" className="me-0 md:me-3">
                  <img
                    src={
                      item.project_img?.imageone ??
                      "https://placehold.co/387x350"
                    }
                    alt="project cover image"
                    width={387}
                    height={350}
                  />
                </div>
              </div>
              {/* Image two  */}
              <div className="w-full md:w-1/2">
                <div className="ms-0 md:ms-3 mt-3 md:mt-0" data-aos="slide-right">
                  <img
                    src={
                      item.project_img?.imagetwo ??
                      "https://placehold.co/387x350"
                    }
                    alt="project cover image"
                    width={387}
                    height={350}
                  />
                </div>
              </div>
            </div>
            {/* Paragraph three */}
            <p className="text-slate-500 text-justify my-10"> {item.project_challenge?.short_desc} </p>
          </div>
          {/* project info */}
          <div className="w-full lg:w-1/3">
            <div className="ms-5">
              <ProjectInfoCard item={item} />
              <ContactNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectInfoCard = ({ item }) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-violet-700 dark:border-violet-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {" "}
          Project Information{" "}
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

export const ContactNow = () => {
  return (
    <div className="mt-10">
      <p> contact now </p>
    </div>
  );
};

export default ProjectDetail;
