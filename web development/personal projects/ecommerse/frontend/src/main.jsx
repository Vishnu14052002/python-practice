import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home.jsx';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />
    }
])

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <RouterProvider router = {router} />
    </>
)
