import { PostProvider } from '@/context/PostContext'
import React from 'react'
import PostAll from './PostAll'

const page = () => {
  return (
    <PostProvider>
        <PostAll />
    </PostProvider>
  )
}

export default page
