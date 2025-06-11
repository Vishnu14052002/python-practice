import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './counter/Routing/Home';
import About from './counter/Routing/About';
import ProductSearch from './counter/productSearch/ProductSearch'
import ProductDescription from './counter/productSearch/ProductDescription'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductSearch />
  },
  {
    path: "/description",
    element: <ProductDescription />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )




















// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import ProductSearch from './counter/productSearch/ProductSearch.jsx';
// import ProductDescription from './counter/productSearch/ProductDescription.jsx';

// createRoot(document.getElementById('root')).render(
//     <App />
// )
