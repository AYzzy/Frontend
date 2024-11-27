import { useState } from 'react'
import ROUTES from "./route/route"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([...ROUTES])

function App() {

  return (
    <>
      <RouterProvider router = {routes}/>
    </>
  )
}

export default App

