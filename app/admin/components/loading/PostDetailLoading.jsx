import React from 'react'

const PostDetailLoading = () => {
  return (
    <div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      <div className='flex my-5 items-center'>
        {/* category  */}
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
        {/* date  */}
        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
      </div>
      {/* images  */}
      {/* body  */}
      {Array.from({length : 20}, (_, index) => (
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      ))}
    </div>
  )
}

export default PostDetailLoading
