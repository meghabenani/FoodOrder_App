import { useState,useEffect } from "react"

let useonlineStatus=()=>{
    let [onlineStatus,setonlineStatus]=useState(true)

    window.addEventListener("offline",()=>{
        setonlineStatus(false)
    })
    window.addEventListener("online",()=>{
        setonlineStatus(true)
    })
    return onlineStatus

}

export default useonlineStatus