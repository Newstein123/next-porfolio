import React, { useContext, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { CommentContext } from "@/context/CommentContext";

const Comments = ({ postId }) => {
  const [openComments, setOpenComments] = useState(false);
  const [text, setText] = useState("See All Comments");
  const { state, getPostComments } = useContext(CommentContext);

  const handleTextChange = () => {
    setOpenComments(!openComments);
    if (!openComments) {
      setText("Hide Comments");
    } else {
      setText("See All Comments");
    }
  };

  useEffect(() => {
    getPostComments(postId);
  }, [postId]);

  return (
    <React.Fragment>
      <h2 className="cursor-pointer text-blue-800" onClick={handleTextChange}>
        {text}
      </h2>
      {openComments && (
        <div className="rounded-md border border-violet-700 px-10 py-3 my-5">
          {/* total comments  */}
          <h3 className="text-slate-700">
            <span className="text-xl text-violet-700 font-bold me-2">
              {state.postComments.length ?? 0}
            </span>
            Comments
          </h3>

          {/* comment form  */}
          <CommentForm />

          {/* Comments  */}
          {!state.loading &&
            state.postComments.length > 0 &&
            state.postComments.map((item) => (
              <Comment key={item._id} item={item} />
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Comments;
