import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/Post-List'
import WelcomeMess from './WelcomeMess'
import Loading from './Loading';

export default function PostList() {
  const { fetching } = useContext(PostListData);
  const { postList } = useContext(PostListData);
  //   const handleGetPost=()=>{
  //     // console.log("fatching")
  //     fetch('https://dummyjson.com/posts')
  // .then((res) => res.json())
  // .then(obj =>{addstarting(obj.posts)})
  //   }
  return (
    <>
      {fetching && <Loading />} 
      {!fetching && postList.length === 0 && <WelcomeMess />}
      { postList.map((post) => (<Post key={post.id} post={post} />))}

    </>
  )
}
