import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";

import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element: <About/>,
      },
      {
        path:'/contact',
        element: <Contact/>,
      }
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);