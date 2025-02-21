import { useState,useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,Outlet} from "react-router-dom"
import Contact from "./components/Contact";
import Menucard from "./components/Menucard";

let App=()=>{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

let appRouter=createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<Menucard/>
    }
  ],
  errorElement:<Error/>
 }
  
])


export default appRouter