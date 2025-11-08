import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import Portal from './pages/Portal'
import Results from './pages/Results'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/portal', element: <Portal /> },
  { path: '/results', element: <Results /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
