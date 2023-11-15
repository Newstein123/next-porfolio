"use client"
import React from 'react'
import Image from 'next/image'
import Social from './Social'
import Link from 'next/link'
import data from '../../public/data/navbar'
import ProfileImage from '../../public/image/profile.jpg'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className='fixed top-0 start-0 mt-10 md:w-2/6 lg:w-1/6'>
      <div className='flex flex-col justify-center items-center'>
        <div className=''>
          <Image 
              src={ProfileImage}
              width={200}
              height={200}
              className='rounded-full'
              blurDataURL="data:..."
              placeholder="blur"
              alt='profile image'
          />
          <h3 className='font-bold text-slate-200 text-center text-xl mt-3'> Min Thet Paing </h3>
        </div>
        {/* navbar  */}
        <div className='text-center my-20'>
          <ul className='list-none'>
              {
                  data.map(item => (
                      <li 
                        key={item.id}
                        className={`my-5 text-lg text-white hover:text-red-500 ${pathname == item.link ? "text-red-400" : ""}`}
                      > 
                        <Link href={item.link}> {item.name} </Link> 
                      </li>
                  ))
              }
          </ul>
        </div>
        <Social/>
      </div>
    </div>
  )
}

export default Sidebar
