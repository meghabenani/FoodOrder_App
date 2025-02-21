import { useRouteError } from "react-router-dom"

let Error=()=>{
    let err=useRouteError()
    return(
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong..</h2>
            <div>{err.status }: {err.statusText }</div>
        </div>
    )
}

export default Error