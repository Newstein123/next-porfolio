"use client";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";

const Blogs = () => {
  const { state, getAllPosts } = useContext(PostContext);
  const { lang } = useParams();

  useEffect(() => {
    getAllPosts({ lang, featured: false });
  }, [lang]);

  return (
    <div className="bg-slate-200">
      <div className="py-10">
        <h1 className="text-2xl font-bold text-slate-800">All Posts</h1>
        <div className="flex flex-wrap">
          {/* blog component  */}
          {state.loading
            ? [...Array(6)].map((_, index) => (
                <div className="md:w-1/3 w-full">
                  <BlogSkeleton key={index} />
                </div>
              ))
            : state.posts.data.slice(0, 6).map((item) => (
                <div className="md:w-1/3">
                  <Blog key={item._id} item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
