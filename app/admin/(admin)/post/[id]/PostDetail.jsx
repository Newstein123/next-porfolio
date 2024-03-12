import PostDetailLoading from "@/app/admin/components/loading/PostDetailLoading";
import { PostContext } from "@/context/PostContext";
import { Badge, Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { HiHome } from "react-icons/hi";

const PostDetail = () => {
  const { state, getOnePost } = useContext(PostContext);
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id);
  }, []);

  return (
    <div>
      {/* breadcrumb */}
      <div className="my-3 p-3 bg-slate-300">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/admin/dashboard" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item as="div"> 
                <Link href="/admin/post" > Posts </Link>
            </Breadcrumb.Item>
          <Breadcrumb.Item href="#"> Post Detail </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {!state.loading ? (
        <React.Fragment>
          {state.post && (
            <div>
              <p className="text-slate-700 text-2xl"> {state.post.title} </p>
              <p className="text-slate-500 text-sm">
                Posted By <span> {state.post.author?.name} </span> |
                <span> {state.post.createdAt} </span>
              </p>
              <div className="flex my-3">
                {state.post.tags?.map((item) => (
                  <Badge className="me-3"> {item} </Badge>
                ))}
              </div>
              {/* images  */}
              {/* body  */}
              <p className="text-slate-800 text-justify"> {state.post.body} </p>
            </div>
          )}
        </React.Fragment>
      ) : (
        <PostDetailLoading />
      )}
    </div>
  );
};

export default PostDetail;
