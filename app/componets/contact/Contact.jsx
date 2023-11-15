import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa6'
import Title from "@/app/utlis/Title";

const data = [
  {
    id : 1,
    icon : <FaFacebookF />,
    link : "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id : 2,
    icon : <FaInstagram />,
    link : "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id : 3,
    icon : <FaLinkedin />,
    link : "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id : 4,
    icon : <FaTelegram />,
    link : "https://www.facebook.com/profile.php?id=100077666327550",
  },
]

const Contact = () => {
  return (
    <div className="min-h-screen mt-10 flex justify-center items-center bg-slate-50">
      <div className="w-full">
        <Title title="Get In Touch" />

        <div className="mt-20">
          <div className="flex flex-col-reverse md:flex-row flex-wrap justify-between">
            {/* personal info  */}
            <div className="w-full lg:w-1/4">
              <div className="mx-10 md:me-0  mt-5 md:mt-0 px-3 bg-white rounded-lg pt-3 shadow-md shadow-violet-400">
                <div>
                  <h1 className="text-2xl font-bold text-slate-600 mb-5">
                    Address
                  </h1>
                  <p className="text-slate-500 text-justify">
                    491/B West Ywama Myo Pat Street, Insein Township, Yangon.
                  </p>
                </div>
                {/* contact info  */}
                <div className="mt-10">
                  <div>
                    <BsTelephoneInbound
                      size={20}
                      className="text-violet-700 inline me-3"
                    />
                    <a href="phoneto:09770139207" className="text-slate-500 text-sm">
                      09770139207
                    </a>
                  </div>
                  <div className="mt-3">
                    <AiOutlineMail
                      size={20}
                      className="text-violet-700 inline me-3"
                    />
                    <a
                      href="mailto:minthetpaing376@gmail.com"
                      className="text-slate-500 text-sm"
                    >
                      minthetpaing376@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social info  */}
                <div className="mt-5">
                  <h1 className="font-bold text-slate-600 text-2xl">
                    Follow Me
                  </h1>
                  <div className='flex justify-center my-3 bg-violet-700 px-5 py-3 rounded-tl-lg rounded-tr-lg'>
                    {
                      data.map(item => (
                        <Link href={item.link} className=' text-xl mx-2 hover:text-red-300'>
                          {item.icon}
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* contact form  */}
            <div className="lg:w-3/4">
              <div className="mx-10 md:mx-20">
                <h1 className="text-2xl font-bold text-slate-800 mb-5">
                  Sent Me A Note
                </h1>
                <div className="flex">
                  <div className="w-1/2 me-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-3 border-2 border-slate-300 rounded-md w-full focus:border-violet-700"
                    />
                  </div>
                  <div className="w-1/2 ms-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 border-2 border-slate-300 rounded-md w-full"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    cols="30"
                    rows="5"
                    placeholder="Tell me more about your needs..."
                    className="w-full mt-5 rounded-md border-2 border-slate-300"
                  ></textarea>
                </div>
                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="rounded-3xl transition-all ease-out delay-100  bg-violet-700 text-white px-4 py-3 shadow-md shadow-violet-500 hover:bg-red-400"
                  >
                    Message Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
