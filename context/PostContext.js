"use client";
import loading from "@/app/(home)/project/loading";
import { createContext, useReducer } from "react";
import toast from "react-hot-toast";

const initState = {
  posts: {
    data: [],
    featured: [],
    totalPages: 0,
  },
  post: {},
  categoryPosts: [],
  loading: false,
  error: "",
  message: "",
  success: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "getAllPosts":
      return {
        ...state,
        posts: {
          ...state.posts,
          data: payload.posts,
          totalPages: payload.totalPages,
        },
        success: true,
      };
    case "getFeaturedPosts":
      return {
        ...state,
        posts: {
          ...state.posts,
          featured: payload.posts,
        },
        success: true,
      };
    case "getCategoryPosts":
      return {
        ...state,
        categoryPosts: payload.posts,
      };
    case "getOnePost":
      return {
        ...state,
        post: payload,
        success: true,
      };
    case "getResponseData":
      return {
        ...state,
        message: payload,
        success: true,
      };
    case "startLoading":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "endLoading":
      return {
        ...state,
        loading: false,
      };
    case "fail":
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  // featured changed

  const featureChanged = async (id, featured) => {
    try {
      const res = await fetch("/api/post/featured-changed", {
        method: "POST",
        body: JSON.stringify({ id, featured }),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message);
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // status changed

  const statusChanged = async (id) => {
    try {
    } catch (error) {}
  };

  // reaction changed

  const reactionChanged = async (id) => {
    try {
    } catch (error) {}
  };

  // paginate post

  const paginatePost = async (page) => {
    dispatch({ type: "startLoading" });
    try {
      const response = await fetch(`/api/post?page=${page}`);

      if (response.ok) {
        dispatch({ type: "endLoading" });
        const posts = await response.json();
        dispatch({ type: "getAllPosts", payload: posts.data });
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // search post
  const searchPost = async (e, searchData) => {
    e.preventDefault();
    dispatch({ type: "startLoading" });
    try {
      const response = await fetch(
        `/api/post?title=${searchData.title}&tag=${searchData.tag}`
      );

      if (response.ok) {
        dispatch({ type: "endLoading" });
        const posts = await response.json();
        dispatch({ type: "getAllPosts", payload: posts.data });
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // get category with posts
  //
  const getCategoryPosts = async (categoryId, currentPostId) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch(
        `/api/post?categoryId=${categoryId}&currentPostId=${currentPostId}`
      );
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const result = await res.json();
        if (result.success) {
          dispatch({ type: "getCategoryPosts", payload: result.data });
        } else {
          dispatch({ type: "fail", payload: posts.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // get featured posts

  const getFeaturedPosts = async (lang) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch(`/api/post?lang=${lang ?? "en"}&featured=true`);
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const result = await res.json();
        if (result.success) {
          dispatch({ type: "getFeaturedPosts", payload: result.data });
        } else {
          dispatch({ type: "fail", payload: posts.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // get all post
  const getAllPosts = async (params) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch(
        `/api/post?lang=${params.lang ?? "en"}&featured=${
          params.featured ?? false
        }`
      );
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const result = await res.json();
        if (result.success) {
          dispatch({ type: "getAllPosts", payload: result.data });
        } else {
          dispatch({ type: "fail", payload: posts.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  //get one post
  const getOnePost = async (id) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch("/api/post/" + id);
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const data = await res.json();
        if (data.success) {
          dispatch({ type: "getOnePost", payload: data.data });
        } else {
          dispatch({ type: "fail", payload: data.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // update post
  const updatePost = async (formData) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch("api/post/" + id, {
        type: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const data = await res.json();
        if (data.success) {
          dispatch({ type: "getOnePost", payload: data.data });
        } else {
          dispatch({ type: "fail", payload: data.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // delete Post

  const deletePost = async (id) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch("api/post/" + id, {
        method: "DELETE",
      });
      console.log(res);
      return;
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const data = await res.json();
        console.log(data);
        if (data.success) {
          dispatch({ type: "getAllPosts", payload: data.data });
        } else {
          dispatch({ type: "fail", payload: data.error });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  // create post

  const createPost = async (data) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch("/api/post/", {
        method: "POST",
        body: data,
      });
      console.log(res);
      if (res.ok) {
        dispatch({ type: "endLoading" });
        const data = await res.json();
        if (data.success) {
          toast.success(data.message);
          dispatch({ type: "getResponseData", payload: data.message });
          getAllPosts();
        } else {
          toast.error("Something Went Wrong");
          dispatch({ type: "fail", payload: data.message });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
        getAllPosts,
        getOnePost,
        updatePost,
        deletePost,
        createPost,
        searchPost,
        paginatePost,
        featureChanged,
        getFeaturedPosts,
        getCategoryPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
