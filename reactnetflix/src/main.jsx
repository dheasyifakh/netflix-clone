import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Home'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Browse from './pages/Browse'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/browse",
    element: <Browse/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
