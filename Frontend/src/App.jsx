import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>

  )
}
