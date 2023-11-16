import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../public/image/hero.png'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Button from '@/app/utlis/Button'

const HeroSection = () => {
  return (
    <div className='relative'>
      <Image
        src={HeroImage}
        alt="HeroImage"
        className='min-h-screen object-cover'
      />
      <div className='text-center absolute top-1/2 text-white w-full translate-y-[-50%]'>
        <div className='text-xl'> Welcome, <span> I am Min Thet Paing </span></div>
        <h1 style={{fontSize : '60px'}} className='font-bold mt-10'>I am 
          <span className='ms-3 text-violet-700'> 
            <Typewriter  
              words={['Full Stack', 'Laravel', 'NodeJs', 'React']}
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span> Develper </span> 
        </h1>
        <Button link="/contact" name="Hire Me" />
      </div>
    </div>
  )
}

export default HeroSection
