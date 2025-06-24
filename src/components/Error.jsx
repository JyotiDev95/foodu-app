 import { useRouteError } from "react-router-dom";

 const ErrorPage =()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <div className="text-center flex items-center h-screen gap-2 justify-center">
            <div>
            <h1 className="text-6xl mb-4">Opps...</h1>
          <h2>{err.status}: {err.statusText}</h2>
          <h3>{err.data}</h3>
          </div>
        </div>
    )
}

export default ErrorPage;