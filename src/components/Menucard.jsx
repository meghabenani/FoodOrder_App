import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { res_menu_logo } from "./img_links"


let Menucard=()=>{
    let {resId}=useParams()
    let [resInfo,setresInfo]=useState("")
    let [resMenu,setResMenu]=useState([])
    let resApi=async ()=>{
        let api=await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=`+ resId)
        let res=await api.json()
        setresInfo(res?.data?.cards[2]?.card?.card?.info);
        // console.log(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResMenu(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards)
    }
    useEffect(()=>{
        resApi()
    },[])

    return(
        <div style={{margin:"10px"}} >
        <h2 style={{fontSize:"30px"}}>{resInfo.name}</h2>
        <div style={{border:"1px solid gray",padding:"20px",borderRadius:"20px"}}>
        <div style={{fontWeight:"bolder"}}> <span style={{color:"white",backgroundColor:"green",borderRadius:"15px",padding:"3px",margin:"2px"}}>&#9733; </span> {resInfo.avgRating} ({resInfo.totalRatingsString}) | {resInfo.costForTwoMessage}</div>
        <h3 style={{textDecorationLine:"underLine",color:"orangered"}}>{resInfo.cuisines?.join(", ")}</h3>
        <div><span style={{fontWeight:"bold"}}>Outlet :</span> {resInfo.areaName}</div>
        <br />
        <div style={{fontWeight:"bold"}}>{resInfo.sla?.slaString}</div>
        </div>

        <br />
        <br />
        <h2>Recommended ({resMenu.length})</h2>

        {resMenu.map((i)=>{
            let {id,name,defaultPrice,description,imageId,price}=i?.card?.info
            let {rating,ratingCountV2}=i?.card?.info?.ratings?.aggregatedRating
            return(
                <div key={id}>
                <div style={{display:"flex",justifyContent:"space-between"}} >
                    <div>
                    <h3>{name}</h3>
                    <div style={{fontWeight:"bold",fontSize:"18px"}}>&#8377; {defaultPrice /100 || price/100}</div>
                    <br />
                    <div><span style={{color:"green",fontSize:"18px"}}>&#9733; {rating}</span> ({ratingCountV2})</div>
                    <p>{description}</p>
                    </div>
                    <div>
                        <img style={{width:"150px",marginTop:"50px"}} src={res_menu_logo + imageId} alt="" />
                    </div>
                </div>
                <hr />
                </div>
            )
        })}
        </div>
    )
}

export default Menucard