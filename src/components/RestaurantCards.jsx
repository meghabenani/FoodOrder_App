import { res_logo } from "../utills/img_links"


let RestaurantCards=({data})=>{
    
    let {id,name,cloudinaryImageId,avgRating,cuisines}=data.info
    let {deliveryTime}=data.info.sla
    

    return(
        <div className="cards" key={id}>
            <img className="res_logo" src={res_logo + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <p>&#9733; {avgRating} | {deliveryTime} mins</p>
            <p>{cuisines.join(", ")}</p>
            
        </div>
    )
}

export default RestaurantCards