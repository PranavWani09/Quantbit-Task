import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></>
    },
    {
      path: "/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path: "/About",
      element:<><Navbar/><About/></>
    }
  ])
  return (
    <RouterProvider router ={router}/> 
  )
}

export default App
