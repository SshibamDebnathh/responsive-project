import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Testimonial from './pages/Testimonial'
import Services from './pages/Services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/services",
        element:<Services />,
      },
      {
        path:"/testimonial",
        element:<Testimonial />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
