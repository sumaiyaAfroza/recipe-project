import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import {Home} from "./Pages/Home.jsx";
import axios from "axios";

const getAllRecipes  = async () => {
  const res = await axios.get('http://localhost:5000/recipe')
  return res.data.data
}


const router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: getAllRecipes
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
