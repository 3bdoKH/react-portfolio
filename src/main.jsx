import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about.jsx'
import Articles from './pages/articles/articles.jsx'
import Projects from './pages/projects.jsx'
import Speaking from './pages/speaking.jsx'
import Uses from './pages/Uses.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found
      <a href="/">Back To Home Page</a>
    </div>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/speaking',
    element: <Speaking />
  },
  {
    path: '/uses',
    element: <Uses />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
