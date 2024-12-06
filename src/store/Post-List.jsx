import { createContext, useCallback, useEffect, useReducer, useState } from "react";

const Defaultvalue = {
    postList: [],
    addpost: () => { },
    // addstarting: () => { },
    fetching :false,
    deletepost: () => { },
}
export const PostList = createContext(Defaultvalue);
const postListreducer = (currPostList, action) => {
    let myPost = currPostList
    if (action.type === 'DELETE_POST') {
        myPost = currPostList.filter((postList) => postList.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_IN') {
        myPost = action.payload.posts;
    }
    else if (action.type === 'ADD_POST') {
        myPost = [action.payload, ...currPostList]
        // console.log(`${action.payload.likes}`)
    }

    return myPost
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListreducer, [])
    const [fetching, setfetching] = useState(false)
 
  
    const addpost = (post) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload:
            post
            
        })
    }
    const addstarting = (posts) => {
        dispatchPostList({
            type: "ADD_IN",
            payload: {
                posts: posts,
            }
        })

    }
    const deletepost = useCallback((postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }, [dispatchPostList])
    useEffect(() => {
        setfetching(true)
        const controller = new AbortController();
        const signal = controller.signal;
        fetch("https://dummyjson.com/posts" ,{signal} )
          .then((res) => res.json())
          .then(obj => {
            addstarting(obj.posts);
            setfetching(false);
          });
          return ()=>{
            console.log ("Cleaning up useeffect")
            controller.abort()
          }
      }, []);
    return (
        <PostList.Provider value={{
            postList,
            addpost, fetching, deletepost
        }}>
            {children}
        </PostList.Provider>
    )
}
export default PostListProvider;