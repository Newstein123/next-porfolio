import BlogDetail from "@/app/componets/blog/BlogDetail";
import { CommentProvider } from "@/context/CommentContext";
import { PostProvider } from "@/context/PostContext";
import React from "react";

const page = () => {
  return (
    <PostProvider>
      <CommentProvider>
        <BlogDetail />
      </CommentProvider>
    </PostProvider>
  );
};

export default page;
