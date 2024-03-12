'use client'
import { createContext, useReducer } from "react";

const initState = {
  posts: [],
  post: {},
  loading: false,
  error: "",
  message : "",
  success : false
};

function reducer( state, {type, payload}) {
  switch (type) {
    case "getAllPost":
      return {
        ...state,
        posts: payload,
        success : true
      };
    case "getOnePost":
      return {
        ...state,
        post: payload,
        success : true,
      };
    case "getResponseData" : 
      return {
        ...state,
        message : payload,
        success : true,
      }
    case "startLoading":
      return {
        ...state,
        loading: true,
        error : "",
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
        loading : false
      };
    default:
      return state;
  }
}

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  // get all post
  const getAllPost = async () => {
    dispatch({type : 'startLoading'});
    try {
      const res = await fetch("/api/post");
      if (res.ok) {
        dispatch({type : 'endLoading'})
        const data = await res.json();
        if (data.success) {
            dispatch({type : 'getAllPost', payload : data.data})
        } else {
            dispatch({type : 'fail', payload : data.error})
        }
      }
    } catch (error) {
        dispatch({type : 'fail', payload : error.message})
    }
  };

    //get one post 
    const getOnePost = async (id) => {
        dispatch({type : 'startLoading'});
        try {
            const res = await fetch('/api/post/' + id)
            if(res.ok) {
                dispatch({type : 'endLoading'})
                const data = await res.json();
                if(data.success) {
                    dispatch({type : 'getOnePost', payload : data.data})
                } else {
                    dispatch({type : 'fail', payload : data.error})
                }
            }
        } catch (error) {
            dispatch({type : 'fail', payload : error.message})
        }
    }

    // update post 
    const updatePost = async (formData) => {
        dispatch({type : 'startLoading'});
        try {
            const res = await fetch('api/post/' + id, {
                type : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(formData)
            })
            if(res.ok) {
                dispatch({type : 'endLoading'})
                const data = await res.json();
                if(data.success) {
                    dispatch({type : 'getOnePost', payload : data.data})
                } else {
                    dispatch({type : 'fail', payload : data.error})
                }
            }
        } catch (error) {
            dispatch({type : 'fail', payload : error.message})
        }
    }

    // delete Post 
    
    const deletePost = async (id) => {
        dispatch({type : 'startLoading'});
        try {
            const res = await fetch('api/post/' + id, {
                method : 'DELETE',
            })
            if(res.ok) {
                dispatch({type : 'endLoading'})
                const data = await res.json();
                if(data.success) {
                    dispatch({type : 'getOnePost', payload : data.data})
                } else {
                    dispatch({type : 'fail', payload : data.error})
                }
            }
        } catch (error) {
            dispatch({type : 'fail', payload : error.message})
        }
    }

    // create post 
    
    const createPost = async (data) => {
        dispatch({type : 'startLoading'});
        try {
            const res = await fetch('/api/post/', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            if(res.ok) {
                dispatch({type : 'endLoading'})
                const data = await res.json();
                if(data.success) {
                    dispatch({type : 'getResponseData', payload : data.message})
                    getAllPost();
                } else {
                    dispatch({type : 'fail', payload : data.message})
                }
            }
        } catch (error) {
            dispatch({type : 'fail', payload : error.message})
        }
    }

  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
        getAllPost,
        getOnePost,
        updatePost,
        deletePost,
        createPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
