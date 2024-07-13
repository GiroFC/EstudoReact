import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GlobalStyle } from './styles/global'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Feed from './pages/Feed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/feed",
    element: <Feed/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

