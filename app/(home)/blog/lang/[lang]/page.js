import { PostProvider } from "@/context/PostContext";
import Index from "@/app/componets/blog/Index";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <PostProvider>
        <div className="mx-10 md:mx-20">
          <Index />
        </div>
      </PostProvider>
    </React.Fragment>
  );
};

export default page;
