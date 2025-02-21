import { useState } from "react"
import { Link } from "react-router-dom"


let Header=()=>{
    let [isLogin,setisLogin]=useState(true)
    return(
        <>
        <div className="header">
            <img src="https://images.unsplash.com/photo-1509315703195-529879416a7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMG9yZGVyfGVufDB8fDB8fHww" alt="" />
            <h1 >Megha's Food order App</h1>
            <ul>
                <li>
                    <Link style={{color:"black"}} to="/">Home</Link>
                    </li>
                <li><Link style={{color:"black"}} to="/about">About</Link></li>
                <li><Link style={{color:"black"}} to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    setisLogin(!isLogin)
                }}>{isLogin?"Login":"Logout"}</button>
            </ul>
            
            
            
        </div>
                </>
    )
}

export default Header