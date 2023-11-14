import ProjectDetail from '@/app/componets/project/ProjectDetail'
import React from 'react'

const page = ({params}) => {
  
  return (
    <div className='min-h-screen bg-slate-50'>
      <ProjectDetail id={params.id} />
    </div>
  )
}

export default page
