import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { resMenuApi } from "./resMenuApi"

let useResMenu=()=>{
    let {resId}=useParams()
    let [category,setCategory]=useState([])
    let [resInfo,setresInfo]=useState("")
    

    let resApi=async ()=>{
        let api=await fetch(resMenuApi+ resId)
        let res=await api.json()
       
        setresInfo(res?.data?.cards[2]?.card?.card?.info);
        // console.log(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        
        setCategory(res?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((i)=>{
           return i?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        }))
        
        
    }
    useEffect(()=>{
        resApi()
    },[])

    return [resInfo,category];
}

export default useResMenu