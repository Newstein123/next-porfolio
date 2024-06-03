import React from "react";
import "./app.css";
import Search from "./Search";
import Blogs from "./Blogs";
import FeaturedPost from "./FeaturedPost";

const Index = () => {
  return (
    <div>
      {/* search components  */}
      <Search />

      {/* All Blogs  */}
      <Blogs />

      {/* featured posts  */}
      <FeaturedPost />
    </div>
  );
};

export default Index;
