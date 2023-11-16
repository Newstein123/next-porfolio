"use client"
import Title from '@/app/utlis/Title'
import React, { useEffect, useState } from 'react'
import data from "../../../public/data/project"
import ProjectItem from './ProjectItem'
import { usePathname } from 'next/navigation'
import Button from '@/app/utlis/Button'

const Project = () => {
  var number = "";
  const pathname = usePathname();
  const [home, setHome] = useState(false);

  useEffect(() => {
    pathname == '/' && setHome(true)
  }, [pathname])
  return (
    <div className='mt-10 min-h-screen flex justify-center items-center'>
      <div>
        {/* title  */}
        <Title title="My Work" />
        <div className='flex flex-wrap justify-between mt-10 mx-10 md:mx-20'>
            {
                data.slice(0,home ? 6 : data.length).map(item => (
                    <ProjectItem key={item.id} item={item} />
                ))
            }
        </div>
        {home && 
        <div className="text-center">
            <Button link="/project" name="See All Projects" />
        </div> }
      </div>
    </div>
  )
}

export default Project
