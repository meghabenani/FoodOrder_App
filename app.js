import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import Res_menu from "./Components/Res_menu";


let App=()=>{
    
    return(
        <div className="app">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
let router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/home",
                element:<Home/>
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
                path:"/restaurant/:resId" ,
                element:<Res_menu/>
            }
            
        ],
        errorElement:<Error/>
    },
   
])



let root=ReactDOM.createRoot(document.querySelector(".root"))
root.render(<RouterProvider router={router}/>)