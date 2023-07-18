import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
