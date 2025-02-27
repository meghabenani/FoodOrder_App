import React from "react";
class UserClass extends React.Component{
   
constructor(props){
    super(props)
    // console.log(this.props.name + "Child Constructor");
    this.state={
        userInfo:{

        }
    }
    
}
async componentDidMount(){
    // console.log(this.props.name + "child did mount");
    let api=await fetch("https://api.github.com/users/meghabenani")
    let json=await api.json()
    this.setState({
        userInfo:json
    })
    
}
    render(){
       
        // console.log(this.props.name + "child render");
        
        return(
            <>
                <h1>{this.state.userInfo.name}</h1>                
            </>
        )
    }
}

export default UserClass