import React, { useContext, useRef } from 'react'
import { PostList } from '../store/Post-List';
import { useNavigate } from 'react-router-dom';

export default function Createpos({setSelectedTab}) {
  const {addpost}=useContext(PostList)
  const navigate = useNavigate()
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const likeElement = useRef();
  const dislikeElement = useRef();
  const tagsElement = useRef();
  const viewsElement = useRef()

  const handleSubmit =(event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody =PostBodyElement.current.value;
    const  likes =likeElement.current.value;
    const  dislikes =dislikeElement.current.value;
    const tags = tagsElement.current.value.split(' ')
    const views = viewsElement.current.value

    userIdElement.current.value=""
    PostTitleElement.current.value=""
    PostBodyElement.current.value=""
    likeElement.current.value=""
    dislikeElement.current.value=""
    tagsElement.current.value=""
    viewsElement.current.value=""

   
    console.log(`${views}`)
    // addpost(userId,PostTitle,PostBody,likes,dislikes,tags,views)
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
                title: PostTitle,
                body: PostBody,
                likes:likes,
                dislikes:dislikes,
                reactions:{likes ,dislikes ,views},
                userId: userId,
                tags: tags,
                views: views,
      })
    })
    .then(res => res.json())
    .then(post =>{ console.log(post)
       addpost(post)});
       navigate("/")
    // setSelectedTab("home")
    
    
  }
  return (
    <>
      <form className='create-post' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your userId here</label>
    <input type="text" ref={userIdElement} placeholder="Your user Id" className="form-control" id="userId" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" placeholder="What's new today" ref={PostTitleElement} className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows={4} type="text" ref={PostBodyElement} placeholder='How are you feeling today...' className="form-control" id="body" />
  </div>
  <div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of like</label>
    <input type="text" placeholder="How many people liked this post" ref={likeElement} className="form-control" id="like" />
  </div>
  <div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of dislike</label>
    <input type="text" placeholder="How many people disliked this post" ref={dislikeElement} className="form-control" id="dislike" />
  </div>
  <div className="mb-3">
  <label htmlFor="views" className="form-label">Number of Veiws</label>
    <input type="text" placeholder="Number of people watched this post" ref={viewsElement} className="form-control" id="views" />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" placeholder="Please enter tags using space" ref={tagsElement} className="form-control" id="tags" />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  )
}
