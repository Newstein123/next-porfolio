"use client";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";

const FeaturedPost = () => {
  const { state, getFeaturedPosts } = useContext(PostContext);
  const { lang } = useParams();

  useEffect(() => {
    getFeaturedPosts(lang);
  }, [lang]);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-slate-800">Featured Posts</h1>
      <div className="flex">
        {state.loading && state.posts.data.length > 0 ? (
          <div className="md:w-1/3 w-full">
            <BlogSkeleton />
          </div>
        ) : (
          state.posts.featured.map((item) => (
            <div className="md:w-1/3">
              <Blog key={item._id} item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
