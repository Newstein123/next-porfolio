import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";


const ProjectItem = ({ item }) => {
 
  return (
      <CardItemTwo item={item} />
  );
};

export const CardItemOne = ({item}) => {
   return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="me-3 mt-2 group relative transition ease-in-out delay-150">
        <Image src={item.image} alt="project image" width={400} height={300} />
        {/* overlay div  */}
        <div className="hidden absolute top-0 group-hover:block bg-black bg-opacity-50 w-full h-full">
          <div className="flex flex-col justify-center items-center mx-5 md:mx-10 mt-10">
            <h1 className="text-slate-50 text-2xl font-bold mb-3">
              {item.title}
            </h1>
            <p className="text-slate-200 text-justify mb-3">
              {item.desc.slice(0, 100)}
            </p>
            <Link href={`/project/detail/${item.id}`} className="px-4 py-3 bg-violet-700 rounded-3xl">
              See Details <AiOutlineArrowRight className="ms-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export const CardItemTwo = ({item}) => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-200 me-3 mt-3 relative group">
        <Link href={`/project/detail/${item.id}`}>
          <Image className="rounded-t-lg" src={item.image} alt="" width={400} height={300} priority/>
        </Link>
        <div className="hidden p-5 absolute top-0 group-hover:block bg-black bg-opacity-75 w-full h-full">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
              {item.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
          <Link
            href={`/project/detail/${item.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
          <span className="me-3"> See Details </span> <AiOutlineArrowRight className="inline" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;
