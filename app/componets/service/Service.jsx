import React from "react";
import { BsDatabaseFillGear } from "react-icons/bs";
import {GiGearHammer} from 'react-icons/gi'
import {AiFillApi} from 'react-icons/ai'
import {FaComputer} from 'react-icons/fa6'
import {MdOutlineComputer} from 'react-icons/md'
import {GrServer} from 'react-icons/gr'
import Title from "@/app/utlis/Title";

const data = [
    {
        id: 1,
        name: "Full Stack Development",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <FaComputer size={40} />,
    },
    {
        id: 2,
        name: "Frontend Technologies",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <MdOutlineComputer size={40} />,
    },
    {
        id: 3,
        name: "Backend Technologies",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <GiGearHammer size={40} />,
    },
    {
        id: 4,
        name: "Database Management",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <BsDatabaseFillGear size={40} />,
    },
    {
        id: 5,
        name: "Api Development",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <AiFillApi size={40} />,
    },
    {
        id: 6,
        name: "Server Management",
        desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: <GrServer size={40} />,
    },

];

const Service = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="mt-10 md:mt-0">
        {/* title  */}
        <Title title="My Service" />
        {/* My service  */}
        <div className="flex flex-wrap mt-20 mb-5">
          {data.map((item) => (
            <div className="lg:w-1/2" key={item.id}>
              <div className="flex justify-between mx-10 items-center mt-10">
                <div className="w-1/4">
                  <div className="bg-slate-200 rounded-2xl text-violet-700 text-center px-3 py-5 flex justify-center shadow-md shadow-violet-500">
                    {item.icon}
                  </div>
                </div>
                <div className="w-3/4">
                  <div className="ms-5">
                    <h2 className="text-slate-800 text-2xl font-bold mb-2">
                      {item.name}
                    </h2>
                    <p className="text-slate-500"> {item.desc} </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
