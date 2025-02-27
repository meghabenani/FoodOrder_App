import { createContext } from "react";

let UserContext=createContext({
    loggedInUser:"Default"
})

export default UserContext