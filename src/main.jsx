import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Auth/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
