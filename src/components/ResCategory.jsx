import ResList from "./ResList"
import {v4} from "uuid"

let ResCategory=({category,show,setShow})=>{
    let cards=category?.card?.card?.itemCards
    return(
        <>
               <div  key={v4()} >
               
                <div className="category">
                    <div className="category-header" onClick={()=>{
                        setShow()
                    }}>
                    <h4>{category?.card?.card?.title} ({category?.card?.card?.itemCards.length})</h4>
                    <p >⬇️</p>    
                    </div>
                    
                   {show && <ResList cards={cards}/>}
                   
                </div>
                
                </div>
                
          
        </>
    )
}


export default ResCategory