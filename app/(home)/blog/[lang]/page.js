import { PostProvider } from "@/context/PostContext";
import Index from "@/app/componets/blog/Index";
import React from "react";
import { CategoryProvider } from "@/context/CategoryContext";

const page = () => {
  return (
    <React.Fragment>
      <PostProvider>
        <CategoryProvider>
          <div className="mx-10 md:mx-20">
            <Index />
          </div>
        </CategoryProvider>
      </PostProvider>
    </React.Fragment>
  );
};

export default page;
