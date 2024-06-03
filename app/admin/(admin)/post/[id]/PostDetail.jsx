import PostDetailLoading from "@/app/admin/components/loading/PostDetailLoading";
import { PostContext } from "@/context/PostContext";
import { Badge, Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { HiHome } from "react-icons/hi";
import { formatDistanceToNow } from "date-fns";

const PostDetail = () => {
  const { state, getOnePost } = useContext(PostContext);
  const { id } = useParams();
  const mongoDate = state.post?.createdAt
    ? new Date(state.post.createdAt)
    : null;

  let postedAt;
  if (mongoDate) {
    postedAt = formatDistanceToNow(mongoDate, {
      addSuffix: true,
    });
  }
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
            <Link href="/admin/post"> Posts </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#"> Post Detail </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {!state.loading ? (
        <React.Fragment>
          {state.post && (
            <div className="my-10">
              {/* post title  */}
              <div className="my-2">
                <p className="text-slate-700 text-2xl"> {state.post.title} </p>
              </div>
              {/* posted at  */}
              <p className="text-slate-500 text-sm">
                Posted By <span> {state.post.author?.name} </span> |
                <span> {postedAt} </span>
              </p>

              {/* post tags  */}
              <div className="flex my-3">
                {state.post.tags?.map((item) => (
                  <Badge className="me-3"> {item} </Badge>
                ))}
              </div>

              {/* post categories */}
              <div className="flex my-2">
                <span className="text-slate-600 font-bold">
                  {state.post.category_id?.name} |
                </span>
              </div>
              {/* images  */}
              <div className="my-3">
                {state.post?.post_images?.length > 0 &&
                  state.post?.post_images?.map((item) => (
                    <img src={item} alt="post-image" width="100%" />
                  ))}
              </div>
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
