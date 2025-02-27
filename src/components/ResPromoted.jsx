let ResPromoted=(RestaurantCards)=>{
    return (props)=>{
        return(
            <>
            <label style={{position:"absolute", backgroundColor:"black", color:"white", borderRadius:"10px", margin:"5px", padding:"8px"}}>Promoted</label>
            <RestaurantCards {...props}/> 
            </>
           
        )
    }
}

export default ResPromoted