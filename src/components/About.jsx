import React from "react"
import UserClass from "./UserClass";
import UserContext from "../utills/UserContext";


class About extends React.Component{

    constructor(){
        super()
        // console.log("Parent constrctor");
        
    }
    componentDidMount(){
        // console.log("Parent did mount");
        
    }
    render(){
        // console.log("parent render");
        
        return(
            <>
            <UserContext.Consumer>
                {(({loggedInUser})=>{
                    return(
                        <>
                        <UserClass name="first"/>
                        <div>{loggedInUser}</div>
                        </>
                    )
                })}
        
            
            </UserContext.Consumer>
        
            </>
        )
    }
}

export default About