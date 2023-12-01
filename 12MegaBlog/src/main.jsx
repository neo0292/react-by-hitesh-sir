import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider} from 'react-redux'
import  store  from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login  } from './components/index.js'

import { Home, Signup, AddPost, EditPost, AllPosts, Post } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      
      {
        path: '/',
        element:<Home/>,
      },

      {
        path: '/login',
        element: (
          <AuthLayout authentication = {false}>
            <Login/>
          </AuthLayout>
        ),
      },

      {
        path: '/signup',
        element: (
          <AuthLayout authentication = {false}>
            <Signup/>
          </AuthLayout>
        ),
      },

      {
        path: '/add-post',
        element: (
          <AuthLayout authentication = {true}>
            <AddPost/>
          </AuthLayout>
        ),
      },

      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>  //another authentication syntax for true value
            {" "}
            <AllPosts/>
          </AuthLayout>  
        ),
      },

      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>  
            {" "}
            <EditPost/>
          </AuthLayout>
        ),
      },

      {
        path: '/post/:slug',
        element: <Post/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { store }>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
