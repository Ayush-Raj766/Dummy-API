import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './routes/App.jsx'
import { RouterProvider,Link , createBrowserRouter, Router } from 'react-router-dom'
import Createpos from './components/Createpost.jsx'
import PostList from './components/PostList.jsx'
const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path: "/create-post", element: <Createpos />},
    { path: "/", element: <PostList /> },]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} >
    <App/>
    </RouterProvider>
    
  </React.StrictMode>,
)
