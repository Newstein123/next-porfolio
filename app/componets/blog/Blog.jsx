import Link from "next/link";
import Reaction from "./Reaction";
import { formatDistanceToNow } from "date-fns";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const Blog = ({ item }) => {
  const mongoDate = item?.createdAt ? new Date(item.createdAt) : null;
  const postBody = DOMPurify.sanitize(item?.body);

  let postedAt;
  if (mongoDate) {
    postedAt = formatDistanceToNow(mongoDate, {
      addSuffix: true,
    });
  }

  return (
    <div className="my-10">
      <div className="mx-0 md:mx-2">
        {/* thumbnail image  */}
        <Link href={`/blog/${item?._id}`}>
          {item?.post_images && item?.post_images.length > 0 ? (
            <img
              src={item?.post_images[0]}
              alt="thumbnail-image"
              className="rounded-md h-[200px] w-full"
            />
          ) : (
            <img
              src="https://placehold.co/800x400?font=roboto"
              alt="thumbnail-image"
              className="rounded-md h-[200px] w-full"
            />
          )}
        </Link>
        {/* blog body  */}
        <div className="my-3">
          <h2 className="text-xl font-semibold text-slate-800">
            <Link href={`/blog/${item?._id}`}>{item?.title}</Link>
          </h2>
          <p className="text-sm text-slate-500 my-3">
            {parse(postBody).length > 0
              ? parse(postBody).slice(0, 50)
              : parse(postBody)}
            <span> ... </span>
          </p>
          {/* Author name and date  */}
          <small className="text-slate-500">
            {item?.author?.name} - {postedAt}
          </small>

          {/* reaction  */}
          <Reaction views={item?.views} likesCount={item?.likes} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
