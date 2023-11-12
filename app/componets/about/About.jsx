import React from 'react'
import {LiaDownloadSolid} from 'react-icons/lia'

const data = [
  {
    id : 1,
    number : 2,
    name : "Years Experience",
  },
  {
    id : 2,
    number : 5,
    name : "Happy Clients",
  },
  {
    id : 3,
    number : 10,
    name : "Project Done",
  },
  {
    id : 4,
    number : 2,
    name : "Rewards",
  },
]

const About = () => {
  return (
    <div className='my-10'>
      <div className="relative text-center">
        <h1 className='text-3xl inline leading-normal font-bold text-slate-800'> Know Me More </h1>
        <span className='absolute left-1/2 bottom-0 -translate-x-1/2 w-32 bg-violet-700 h-1'>  </span>
      </div>
      {/* Information  */}
      <div className="flex flex-wrap mt-20">
        <div className='lg:w-2/3'>
          <div className='mx-10 md:mx-20'>
            <h1 className='text-2xl text-slate-800 font-bold'> I'm  <span className='text-2xl text-violet-700 ms-3'> Min Thet Paing </span>, a Full Stack Web Developer </h1>
            <br />
            <p className='text-slate-500 leading-loose text-justify'>
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <br />
            <p className='text-slate-500 leading-loose text-justify'>
            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 text-lg ">
            <div className='mx-10 md:mx-20 lg:mx-0 mt-5 lg:mt-0'>
              <div>
                <div className="relative">
                  <div className='mb-2 py-3'> <span className='font-bold text-slate-800'> Name: </span> <span className='ms-3 text-slate-500'>  Min Thet Paing  </span></div>
                  <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
                </div>
                <div className="relative">
                  <div className='mb-2 py-3'> <span className='font-bold text-slate-800'> Email: </span> <a href='mailto:minthetpaing376@gmail.com' className='ms-3 text-violet-700'> minthetpaing376@gmail.com   </a></div>
                  <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
                </div>
                <div className="relative">
                  <div className='mb-2 py-3'> <span className='font-bold text-slate-800'> Age: </span> <span className='ms-3 text-slate-500'>  25  </span></div>
                  <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
                </div>
                <div className="relative">
                  <div className='mb-2 py-3'> <span className='font-bold text-slate-800'> From: </span> <span className='ms-3 text-slate-500'>  Insein, Yangon  </span></div>
                  <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
                </div>
                <div className='text-center mt-10'>
                  <a href="" className='py-3 px-4 bg-violet-700 text-white  rounded-3xl' > Download CV <LiaDownloadSolid className='inline' /> </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* status section  */}
      <div className='flex flex-wrap mt-20 md:mx-20 md:mb-10 lg:mb-0'>
          {
            data.map(item => (
              <div className='w-1/2 lg:w-1/4' key={item.id}>
                <div className='border-r-2 border-r-slate-300 px-4  mx-5 mt-3 md:mt-0'>
                  <div className="flex text-slate-800  font-bold items-center justify-center mb-5">
                    <h1 className='text-6xl'> {item.number} </h1>
                    <div> <span className='text-5xl'> + </span>  </div>
                  </div>
                  <div>
                    <h1 className='text-slate-500 text-center'> {item.name} </h1>
                  </div>
                </div>
              </div> 
            ))
          }   
      </div>
    </div>
  )
}

export default About
