import React, { useContext } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostList } from '../store/Post-List';
export default function Post({ post }) {
  const { deletepost } = useContext(PostList)

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <label htmlFor="userId" className="form-label userid">{post.userId}</label>
        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletepost(post.id)}>
              <RiDeleteBin5Fill />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map(tags => <span key={tags} className="badge text-bg-primary hastag">{tags}</span>)}
          {/* <div className="alert alert-success reaction" role="alert">
            A simple success alert—check it out!
          </div> */}
          <div className="btn-cont">
            <div className="react">
              {/* <span className=" top-0  translate-middle badge rounded-pill bg-success like">
                {post.reactions.likes}
                <span className="visually-hidden">unread messages</span>
              </span> */}
              <button type="button" className="btn btn-outline-primary likess">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="148 122 1000 1000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z">
                  </path>
                </svg>
              </button>
              <span className=" top-0  translate-middle badge rounded-pill bg-success like">
                {post.reactions.likes}
                <span className="visually-hidden">unread messages</span>
              </span>
              {/* <span className=" top-0  translate-middle badge rounded-pill bg-success like">
                {post.reactions.dislikes}
                <span className="visually-hidden">unread messages</span>
              </span> */}
              <button type="button" className="btn btn-outline-primary dislike">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="142 122 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"></path></svg>
              </button>
              <span className=" top-0  translate-middle badge rounded-pill bg-success like">
                {post.reactions.dislikes}
                <span className="visually-hidden">unread messages</span>
              </span>
            
              <button type="button" className="btn btn-outline-primary view">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="50 0 600 600" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
              </button>
              <span className=" top-0  translate-middle badge rounded-pill bg-success like">
                {post.reactions.views} {post.views}
                <span className="visually-hidden">unread messages</span>
              </span>
          
            </div>
            
          </div>
        </div>
      </div >
    </>
  )
}
