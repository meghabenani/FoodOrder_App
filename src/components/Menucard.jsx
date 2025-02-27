import { useEffect, useState } from "react"
import useResMenu from "../utills/useResMenu"
import { res_menu_logo } from "../utills/img_links";
import ResList from "./ResList";

import ResCategory from "./ResCategory";

let Menucard=()=>{
   let [resInfo,category]=useResMenu()
    let [show,setShow]=useState(null)
   
    return(
        <div className="menucard">
        <div style={{margin:"10px"}} >
        <h2 style={{fontSize:"30px"}}>{resInfo.name}</h2>
        <div className="res-info">
        <div style={{fontWeight:"bolder"}}> <span className="rating">&#9733; </span> {resInfo.avgRating} ({resInfo.totalRatingsString}) | {resInfo.costForTwoMessage}</div>
        <h3 style={{textDecorationLine:"underLine",color:"orangered"}}>{resInfo.cuisines?.join(", ")}</h3>
        <div><span style={{fontWeight:"bold"}}>Outlet :</span> {resInfo.areaName}</div>
        <br />
        <div style={{fontWeight:"bold"}}>{resInfo.sla?.slaString}</div>
        </div>

        <br />
        <br />

        {category.map((i,j)=>{
            return(
                <ResCategory key={j} category={i} show={j==show?true:false}
                setShow={()=>{
                    setShow(j)
                }}/>
            )
        })}

       
            
        
        
        </div>
        </div>
    )
}

export default Menucard;