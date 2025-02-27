import { res_menu_logo } from "../utills/img_links"

let ResList=({cards})=>{
    return(
        <>
        <div className="category-body">
                    {cards.map((i)=>{
                        let {id,name,price,defaultPrice,ratings,description,imageId}=i?.card?.info
                        
                        return(
                            <div key={id} >
                            <div className="res-card">
                                <div>                               
                               <h3>{name}</h3>
                               <div>&#8377; <span style={{fontWeight:"bold",fontSize:"18px"}}>{price/100 || defaultPrice /100}</span></div>
                               <div style={{marginTop:"10px"}}><span className="rating">&#9733;</span> {ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCountV2})</div>
                               <br />
                               <div style={{width:"700px"}}>{description}</div>
                               </div>
                               <div>
                                
                                <img className="res-img" src={res_menu_logo + imageId} alt="" />
                                <button className="res-btn" >Add</button>
                               </div>
                               
                            </div>
                            <hr />
                            </div>
                        )
                    })}
                   </div>
        
        </>
    )
}

export default ResList