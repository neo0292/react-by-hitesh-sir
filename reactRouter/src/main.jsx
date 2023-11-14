import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Home, About, Contact } from './components/index.js'

const router = createBrowserRouter (
  createRoutesFromElements(      // creating nesting of routes inside Layout
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = 'about' element = {<About/>}/>
      <Route path = 'contact' element = {<Contact/>}/>
      {/* <Route path = 'about' element = {<About/>}/>
      <Route path = 'about' element = {<About/>}/> */}



    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
