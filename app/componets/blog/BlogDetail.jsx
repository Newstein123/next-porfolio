"use client";
import { Badge, Breadcrumb } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import RelatedPost from "./RelatedPost";
import Link from "next/link";
import ReactAction from "./Reaction";
import { PostContext } from "@/context/PostContext";
import { useParams } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import Comments from "./comment/Comments";
import PostDetailSkeleton from "../skeleton/BlogDetailSkeleton";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { id } = useParams();
  const { state, getOnePost, reactionAdded } = useContext(PostContext);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  // date
  const mongoDate = state.post?.createdAt
    ? new Date(state.post.createdAt)
    : null;
  let postedAt;
  if (mongoDate) {
    postedAt = formatDistanceToNow(mongoDate, {
      addSuffix: true,
    });
  }

  // body

  const textBody = DOMPurify.sanitize(state.post?.body);

  const handleLikeClick = () => {
    if (isLiked) return;
    reactionAdded(state.post._id);
    if (state.success) {
      // do something
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  useEffect(() => {
    if (state.post && state.post.likes !== undefined) {
      setLikesCount(state.post.likes);
    }
  }, [state.post]);

  useEffect(() => {
    getOnePost(id);
  }, [id]);

  console.log(state);

  return (
    <div>
      {/* breadcumb  */}
      <div className="fixed top-0 w-full z-10">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item icon={HiHome}>
            <Link href="/"> Home </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item as="div">
            <Link href="/blog/lang/en">Blogs </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {state.post?.category_id?.name ?? "Category"}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* blog details  */}
      <div className="flex justify-center items-center my-10">
        <div className="w-full md:w-[600px] mx-10 md:mx-0">
          {JSON.stringify(state.post) !== "{}" ? (
            <>
              <div className="my-10">
                <h1 className="text-slate-800 text-3xl font-bold leading-normal">
                  {state.post.title}
                </h1>
                <div className="flex items-center mt-5">
                  {/* author  */}
                  <small className="text-slate-500 me-5">
                    By
                    <span className="text-violet-700 ms-2">
                      <Link href="/about">{state.post.author?.name}</Link>
                    </span>
                    . <span> {postedAt} || </span>
                  </small>
                  {/* tags  */}
                  <div className="me-3">
                    {state.post?.tags?.map((item) => (
                      <Badge color="purple" className="inline me-2" key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* views and likes  */}
                <ReactAction
                  handleLikeClick={handleLikeClick}
                  isLiked={isLiked}
                  likesCount={likesCount}
                  views={state.post?.views}
                />
                {/* post image  */}
                {state.post.post_images && state.post.post_images.length > 0 ? (
                  <img
                    src={
                      state.post.post_images
                        ? state.post.post_images[0]
                        : "https://placehold.co/600x400?font=roboto"
                    }
                    alt="post-detail-image"
                    width="100%"
                    height={400}
                    className="my-3"
                  />
                ) : (
                  <img
                    src="https://placehold.co/600x400?font=roboto"
                    alt="post-detail-image"
                    width="100%"
                    height={400}
                    className="my-3"
                  />
                )}

                {/* post body  */}
                <p className="my-5 text-slate-700 leading-8">
                  {parse(textBody)}
                </p>
              </div>

              {/* next and previous button  */}
              <div className="flex justify-between">
                <button className="text-violet-700"> Previous </button>
                <button className="text-violet-700"> Next </button>
              </div>

              {/* comments  */}
              <Comments postId={state.post._id} />

              {/* related post  */}
              <RelatedPost
                category={state.post?.category_id}
                currentPostId={state.post?._id}
              />
            </>
          ) : (
            <PostDetailSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
