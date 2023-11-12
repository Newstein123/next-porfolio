"use client";
import React, { useState } from "react";
import data from "../../public/data/navbar";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";
import Link from "next/link";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: "https://www.facebook.com/profile.php?id=100077666327550",
  },
  {
    id: 4,
    icon: <FaTelegram />,
    link: "https://www.facebook.com/profile.php?id=100077666327550",
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="md:hidden p-3 bg-violet-700 shadow-md shadow-violet-500">
        <div className="flex justify-between items-center">
          <p> Min Thet Paing</p>
          <div className="flex justify-between items-center">
            {socials.map((item) => (
              <Link key={item.id} href={item.link} className="mx-2">
                {" "}
                {item.icon}{" "}
              </Link>
            ))}
            <div className="ms-3">
              {open && (
                <span onClick={() => setOpen(false)}>
                  <RxCross2 size={30} />
                </span>
              )}
              {!open && (
                <span>
                  <FaBars size={30} onClick={() => setOpen(true)} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="absolute w-full bg-violet-500 md:hidden">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={index == 4 ? "p-2" : "p-2 border-b border-b-white"}
              onClick={() => setOpen(false)}
            >
              <Link href={item.link}> {item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
