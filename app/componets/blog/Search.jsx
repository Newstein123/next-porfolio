"use client";
import { Button, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Language from "./Language";

const Search = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const res = await fetch("/api/category");
    if (res.ok) {
      const result = await res.json();
      setCategories(result.data);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <React.Fragment>
      {/* pattern background */}
      <div className="pattern-bg">
        <div className="absolute top-5 right-0">
          <Language />
        </div>
        <div className="blog-text w-[400px] md:[600px]">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            My Articles
          </h1>
          <p className="text-slate-800 text-sm text-center">
            This is a melting pot of insights, tips, and innovative ways to use
            Myna Ul, tailored for professionals who thrive on web innovation.
          </p>
          <div className="flex my-3 justify-center items-center">
            <TextInput
              type="search"
              placeholder="search my blog"
              className="me-3 w-4/7"
            />
            <Select className="me-3 w-2/7">
              <option value=""> Category </option>
              {categories.map((item) => (
                <option value={item._id} key={item._id}>
                  {item?.name}
                </option>
              ))}
            </Select>
            <Button type="submit">Search</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
