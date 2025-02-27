import { useState,useEffect } from "react"
import RestaurantCards from "./RestaurantCards"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonlineStatus from "../utills/useonlineStatus"
import ResPromoted from "./ResPromoted";
import { useContext } from "react";
import UserContext from "../utills/UserContext";


let Body=()=>{
    let [val,setVal]=useState("")
    let [data,setData]=useState([])
    let [update,setUpdate]=useState([])
    let onlineStatus=useonlineStatus()
    let PromotedRes=ResPromoted(RestaurantCards)
    let {loggedInUser,setValContext}=useContext(UserContext)

    let searchFunc=()=>{
        let x=data.filter((i)=>{
            return i.info.name.toLowerCase().includes(val.toLowerCase())
        })
       
        setUpdate(x)
    }

    let ratedFunc=()=>{
        let x=update.filter((i)=>{
            return i.info.avgRating>4.5
        })
        setUpdate(x)
    }

    let fetchApi=async ()=>{
        try{
            let api=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,{mode:"cors"})
            let res=await api.json() 
            // console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setData(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setUpdate(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch(err){
            console.log(err);
            
        }
        
    }
    useEffect(()=>{
        fetchApi()
    },[])
   
    if(!onlineStatus){
        return(
            <h1>🥹Please check your internet connection..</h1>
        )
    }

    return update.length==0?<Shimmer/>:(
        <>
        <input className="input" type="text" value={val} onChange={(e)=>{
            setVal(e.target.value)
        }} />
        <button onClick={()=>{
            searchFunc()
        }}>Search</button>
        <button className="rate" onClick={()=>{
            ratedFunc()
        }}>Top rated Restaurants</button>
        <input type="text" value={loggedInUser} onChange={(e)=>{
            setValContext(e.target.value)
        }}/>
        <div className="app">
            
            {update.map((i)=>{
                return(
                    <div key={i.info.id} >
                        <Link style={{textDecorationLine:"none",color:"black"}} to={'restaurants/'+ i.info.id}>
                        {i.info.avgRating>4.5 ?<PromotedRes data={i}/>:<RestaurantCards data={i}/> }
                        </Link>
                    </div>
                  
                )
            })}
        </div>
        </>
    )
}

export default Body