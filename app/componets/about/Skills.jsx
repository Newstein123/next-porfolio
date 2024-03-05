import React from "react";
import skills from "../../../public/data/skills.json";
import Title from "@/app/utlis/Title";

const Skills = () => {
  return (
    <div>
      <Title title="Skills" />
      {skills.map((item) => (
        <div
          data-aos="fade-up"
          className="flex justify-between items-center my-3"
          key={item.id}
        >
          <div className="w-2/12 md:w-1/12">
            <img
              className="w-[40px] md:w-[50px]"
              src={item.logo}
              alt={`skill logo of ${item.name}`}
              width={50}
              height={50}
            />
          </div>
          <div className="w-10/12 md:w-11/12 bg-gray-200 rounded-full h-2.5 md:h-3.5">
            {item?.color &&
              <div
              className={`bg-indigo-500 md:text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2.5 md:h-3.5`}
              style={{ width: item.percentage }}
            >
              {item.percentage}
            </div>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
