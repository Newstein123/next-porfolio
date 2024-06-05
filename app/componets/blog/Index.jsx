"use client";
import React, { useContext, useState } from "react";
import "./app.css";
import Search from "./Search";
import Blogs from "./Blogs";
import FeaturedPost from "./FeaturedPost";
import { PostContext } from "@/context/PostContext";
import { useParams } from "next/navigation";

const Index = () => {
  const { state, searchPost, getAllPosts } = useContext(PostContext);
  const { lang } = useParams();
  const [search, setSearch] = useState({
    title: "",
    categoryId: "",
    lang: lang,
    tag: "",
    status: true,
  });
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.title == "" && search.categoryId == "") {
      setShowResult(false);
      getAllPosts({ lang, featured: false });
      return;
    }
    setShowResult(true);
    if (showResult) {
      searchPost(search);
      console.log(state);
    }
  };

  return (
    <React.Fragment>
      {/* search components  */}
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {/* All Blogs  */}
      <Blogs />

      {!showResult && <FeaturedPost />}
    </React.Fragment>
  );
};

export default Index;
