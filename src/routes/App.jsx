import { useState } from 'react'
import './App.css'
import Createpost from '../components/Createpost'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Sidebar from '../components/Sidebar'
import PostListProvider from '../store/Post-List'
import { Outlet } from 'react-router-dom'
// import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom"


function App() {
  const[selectedTab ,setSelectedTab]=useState("home")
  return (
    <PostListProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    <div className="container2">
    <Header></Header>
    {/* {selectedTab ==="home"?<PostList></PostList>:<Createpost selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Createpost>} */}
    <Outlet/>
    {/* <Createpost></Createpost> */}
    {/* <PostList></PostList> */}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
