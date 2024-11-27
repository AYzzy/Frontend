import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

const routers = createBrowserRouter([...router])

function App() {

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
