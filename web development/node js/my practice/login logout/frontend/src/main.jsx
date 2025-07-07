import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tasks from './Tasks.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/tasks',
    element : <Tasks />
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router}/>
  </>
)
