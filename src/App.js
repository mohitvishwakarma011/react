import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const AppLayout = () => {

  const [userName,setUserName] = useState(null);
  useEffect(()=>{
    // Making an api call to get user name 
    const data = {
      name:"Mohit Vishwakarma"
    }

    setUserName(data.name);
  },[])

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>

    <div className="bg-gray-50 ">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hehahaha...this is lazy loading!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
