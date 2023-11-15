import React from 'react'
import Image from 'next/image'
import data from '../../../public/data/project'
import { IoPerson } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";


const ProjectDetail = ({id}) => {
    const item =  data.filter(item => item.id == id);
  return (
    <div>
        {/* image  */}
        <img src="https://placehold.co/1920x350" alt='project cover image' width={1920} height={350} />
        <div className='mx-10 md:mx-20 mt-20'>
            {/* Project details || Image  project information */}
            <div className="flex flex-wrap">
                {/* project details  */}
                <div className="w-full lg:w-2/3">
                    <img src="https://placehold.co/803x488" alt='project cover image' width={803} height={488} />
                    {/* Heading One  */}
                    <h1 className='text-2xl font-bold text-slate-700 mt-10'> {item[0].title} </h1>
                    {/* paragraph  */}
                    <p className='text-slate-500'> {item[0].desc} </p>
                    {/* Heading Two  */}
                    <h2 className='text-2xl font-bold text-slate-700 mt-10'> The Challange of Project </h2>
                    {/* paragraph two  */}
                    <p className='text-slate-500'> {item[0].desc} </p>
                    {/* Two Image  */}
                    <div className='flex mt-10'>
                        <div className="w-1/2">
                            <div className="me-3">
                                <img src="https://placehold.co/387x350" alt='project cover image' width={387} height={350} />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="ms-3">
                                <img src="https://placehold.co/387x350" alt='project cover image' width={387} height={350} />
                            </div>
                        </div>
                    </div>
                    {/* Paragraph three */}
                    <p className='text-slate-500 my-10'> {item[0].desc} </p>
                </div>
                {/* project info */}
                <div className="w-full lg:w-1/3">
                    <div className="ms-5">
                        <ProjectInfoCard />
                        <ContactNow />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export const ProjectInfoCard = () => {
    return (
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-violet-700 dark:border-violet-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white"> Project Information </h5>
        </div>
        <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <IoPerson size={25} />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Client
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Min Thet Paing
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <FaLayerGroup size={25} />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Category
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Qr Generator App 
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <BsCalendarDate size={25} />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Date
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    12-03-203 
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <MdLocationPin size={25} />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Location
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    491/B West Ywama Insein, Yangon 
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
        </div>
    )
}

export const ContactNow = () => {   
    return (
        <div className='mt-10'>
            <p> contact now </p>
        </div>
    )
}

export default ProjectDetail
