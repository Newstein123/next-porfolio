"use client";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";

const FeaturedPost = ({ lang }) => {
  const { state, getFeaturedPosts } = useContext(PostContext);
  const params = useParams();

  useEffect(() => {
    getFeaturedPosts(params.lang);
  }, [params.lang]);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-slate-800">
        {lang.blog.featuredPosts}
      </h1>
      <div className="flex my-10">
        {state.featuredLoading ? (
          [...Array(3)].map((_, index) => (
            <div className="md:w-1/3 w-full">
              <BlogSkeleton key={index} />
            </div>
          ))
        ) : state.featuredPosts.length > 0 ? (
          state.featuredPosts.map((item) => (
            <div className="md:w-1/3 w-full">
              <Blog key={item._id} item={item} />
            </div>
          ))
        ) : (
          <p className="text-red-700 text-xl font-bold">{lang.blog.noPost}</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
