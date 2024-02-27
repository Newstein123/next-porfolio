"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../../public/data/project";
import ProjectDetailImg from "../../../public/image/projects/project_details.png";
import ProjectCardInfo from "./ProjectCardInfo";

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
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Project Technologies:
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside">
                {
                    item.project_tech?.map((proj, index) => (
                        <li className="flex items-center" key={index}>
                            <svg
                                className="w-3.5 h-3.5 me-2 text-violet-500 flex-shrink-0"
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
              <ProjectCardInfo item={item} />
              <ContactNow />
            </div>
          </div>
        </div>
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
