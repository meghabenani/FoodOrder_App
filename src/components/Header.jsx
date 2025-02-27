import { useState,useContext} from "react"
import { Link } from "react-router-dom"
import useonlineStatus from "../utills/useonlineStatus"
import UserContext from "../utills/UserContext"


let Header=()=>{
    let [isLogin,setisLogin]=useState(true)
    let onlineStatus=useonlineStatus()
    let {loggedInUser}=useContext(UserContext)

    return(
        <>
        <div className="header">
            <img src="https://images.unsplash.com/photo-1509315703195-529879416a7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMG9yZGVyfGVufDB8fDB8fHww" alt="" />
            <h1 >Megha's Food order App</h1>
            <ul>
                <li>
                    <span>
                       {onlineStatus?"💚":"🔴"} </span>
                </li>
                <li>
                    <Link style={{color:"black"}} to="/">Home</Link>
                    </li>
                <li><Link style={{color:"black"}} to="/about">About</Link></li>
                <li><Link style={{color:"black"}} to="/contact">Contact</Link></li>
                <li >Cart</li>
                <li><Link style={{color:"black"}} to="/grocery">Grocery</Link></li>
                <button className="btn" onClick={()=>{
                    setisLogin(!isLogin)
                }}>{isLogin?"Login":"Logout"}</button>
                <li>{loggedInUser}</li>
            </ul>
            
            
            
        </div>
                </>
    )
}

export default Header