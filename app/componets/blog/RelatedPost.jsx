import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";

const RelatedPost = ({ category, currentPostId }) => {
  const { state, getCategoryPosts } = useContext(PostContext);

  useEffect(() => {
    if (category) {
      getCategoryPosts(category?._id, currentPostId);
    }
  }, [state.post?._id]);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-slate-800">
        More for {category?.name}
      </h1>
      <div className="flex flex-wrap">
        {!state.loading && state.categoryPosts.length > 0
          ? state.categoryPosts.map((item) => (
              <div className="md:w-1/2">
                <Blog item={item} />
              </div>
            ))
          : [...Array(4)].map((_, index) => (
              <div className="md:w-1/2 w-full">
                <BlogSkeleton key={index} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default RelatedPost;
