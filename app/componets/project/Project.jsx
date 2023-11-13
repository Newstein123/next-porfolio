import Title from '@/app/utlis/Title'
import React from 'react'
import data from "../../../public/data/project"

const Project = () => {
  return (
    <div className='mt-10 min-h-screen flex justify-center items-center'>
      <div>
        {/* title  */}
        <Title title="My Work" />
        <div className='flex flex-wrap justify-between'>
            {
                data.map(item => (
                    <div>
                        <p>  {item.title} </p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Project
