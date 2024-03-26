import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err= useRouteError();
    console.log(err)
    return (
        <div className="m-5">
            <h1 className="text-4xl font-bold">oops</h1>
            <h1 className="text-3xl font-semibold">something went wrong </h1>
            <h1 className="text-lg">{err.status} : {err.statusText}</h1>
        </div>
     
    )
}
export default Error;