"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import data from '../../../public/data/project'
import { IoPerson } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import ProjectDetailImg from '../../../public/image/projects/project_details.png'


const ProjectDetail = ({id}) => {
    const [item, setItem] = useState({})
    const filteredResult =  data.filter(item => item.id == id);

    useEffect(() => {
        setItem(filteredResult[0])
    }, [id])
  return (
    <div>
        {/* image  */}
        <div className='mx-10 pt-5'>
            <Image src={ProjectDetailImg} alt='project cover image' width={1920} height={350} className='rounded-lg' />
        </div>
        <div className='mx-10 md:mx-20 mt-20'>
            {/* Project details || Image  project information */}
            <div className="flex flex-wrap">
                {/* project details  */}
                <div className="w-full lg:w-2/3">
                    <img src="https://placehold.co/803x488" alt='project cover image' width={803} height={488} />
                    {/* Heading One  */}
                    <h1 className='text-2xl font-bold text-slate-700 mt-10'> {item.title} </h1>
                    {/* paragraph  */}
                    <p className='text-slate-500'> {item.desc} </p>
                    {/* Heading Two  */}
                    <h2 className='text-2xl font-bold text-slate-700 mt-10'> The Challange of Project </h2>
                    {/* paragraph two  */}
                    <p className='text-slate-500'> {item.desc} </p>
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
                    <p className='text-slate-500 my-10'> {item.desc} </p>
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
  )
}

export const ProjectInfoCard = ({item}) => {
    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-violet-700 dark:border-violet-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"> Project Information </h5>
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
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
