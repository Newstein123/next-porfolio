import ProjectDetail from '@/app/componets/project/ProjectDetail'
import React from 'react'

export const metadata = {
  title: "Min Thet Paing - Project",
  description: 'Project Detail Page of Min Thet Paing Portfolio',
}

const page = ({params}) => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ProjectDetail id={params.id} />
    </div>
  )
}

export default page
