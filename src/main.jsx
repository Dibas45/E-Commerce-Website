import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LogIn from './components/Login.jsx';
import Home from './components/Home.jsx';
import Card from './components/ProductCard.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: 'card',
        element: <Card />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
