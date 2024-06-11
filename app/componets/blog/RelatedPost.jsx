import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";
import NoPost from "./NoPost";
import { v4 as uuidv4 } from "uuid";

const RelatedPost = ({ category, currentPostId, lang }) => {
  const { state, getCategoryPosts } = useContext(PostContext);
  const params = useParams();

  useEffect(() => {
    if (category) {
      getCategoryPosts(category?._id, currentPostId, lang);
    }
  }, [state.post?._id]);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-slate-800">
        {params.lang == "en"
          ? lang.blog.relatedPosts + " " + category?.name
          : category?.name + " " + lang.blog.relatedPosts}
      </h1>
      <div className="flex flex-wrap my-10">
        {!state.loading ? (
          state.categoryPosts.length > 0 ? (
            state.categoryPosts.map((item) => (
              <div className="md:w-1/2" key={item._id}>
                <Blog item={item} />
              </div>
            ))
          ) : (
            <NoPost text={lang.blog.noPost} />
          )
        ) : (
          [...Array(4)].map((_, index) => (
            <div className="md:w-1/2 w-full" key={uuidv4()}>
              <BlogSkeleton />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedPost;
