"use client";
import { createContext, useReducer } from "react";

export const CommentContext = createContext();

const initValue = {
  comments: {
    all: [],
    totalPages: 0,
  },
  postComments: [],
  comment: {},
  loading: false,
  message: "",
  error: null,
  success: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "getAllComments":
      return {
        ...state,
        comments: payload.comments,
        success: true,
        message: payload.message,
      };
    case "getPostComments":
      return {
        ...state,
        postComments: payload.comments,
        success: true,
        message: payload.message,
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

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  // getPostComments

  const getPostComments = async (postId) => {
    dispatch({ type: "startLoading" });
    const res = await fetch(`/api/comments?postId=${postId}`);
    if (res.ok) {
      dispatch({ type: "endLoading" });
      const result = await res.json();
      if (result.success) {
        dispatch({ type: "getPostComments", payload: result.data });
      }
    }
  };

  // createComment

  const createComment = async (data) => {
    dispatch({ type: "startLoading" });
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      dispatch({ type: "endLoading" });
      const result = await res.json();
      if (result.success) {
        getPostComments(data.postId);
      }
    }
  };

  return (
    <CommentContext.Provider
      value={{
        state,
        getPostComments,
        createComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
