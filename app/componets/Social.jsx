import React from 'react'
import Link from 'next/link'
import {FaFacebookF, FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'

const data = [
  {
    id : 1,
    icon : <FaFacebookF />,
    link : "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id : 2,
    icon : <FaInstagram />,
    link : "https://www.instagram.com/newstein26?igsh=MWE5OWY4ZmR2dzNjMw%3D%3D&utm_source=qr",
  },
  {
    id : 3,
    icon : <FaLinkedin />,
    link : "www.linkedin.com/in/min-thet-paing-793738241",
  },
  {
    id : 4,
    icon : <FaTelegram />,
    link : "https://t.me/alpha27century",
  },
  {
    id : 5,
    icon : <FaWhatsapp />,
    link : "https://wa.me/+6588571785 ",
  },
]

const Social = () => {
  return (
    <div className='fixed bottom-0'>
      <div className='flex justify-center bg-red-400 px-5 py-2 border-t-red-500 rounded-tl-lg rounded-tr-lg'>
        {
          data.map(item => (
            <Link 
              href={item.link} 
              key={item.id} 
              className='text-white text-xl mx-2 hover:scale-150'
              target='_blank'
            >
              {item.icon}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Social
