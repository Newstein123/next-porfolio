"use client"
import React from 'react'
import HeroSection from './HeroSection'
import About from '../about/About'
import Service from '../service/Service'

const HomePage = () => {
  
  return (
    <div>
      <HeroSection />
      <div className='min-h-screen'>
        <About />
      </div>
      <Service />
    </div>
  )
}

export default HomePage
