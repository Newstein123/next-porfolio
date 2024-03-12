import React from 'react'
import { cookies } from 'next/headers'
import { getUserInfo } from '@/utlis/getUserInfo'

const page = () => {
  const userInfo = getUserInfo();

  return (
    <div className='text-slate-700'>
      Welcome, {userInfo.name}
    </div>
  )
}

export default page
