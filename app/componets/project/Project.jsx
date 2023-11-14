import Title from '@/app/utlis/Title'
import React from 'react'
import data from "../../../public/data/project"
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <div className='mt-10 min-h-screen flex justify-center items-center'>
      <div>
        {/* title  */}
        <Title title="My Work" />
        <div className='flex flex-wrap justify-between mt-10 mx-10 md:mx-20'>
            {
                data.slice(0,6).map(item => (
                    <ProjectItem key={item.id} item={item} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Project
