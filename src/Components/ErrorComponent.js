import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>Err....</h1>
            <h1>Something Went Wrong</h1>
            <p>{err.status} :{err.statusText} </p>
        </div>
    )
}

export default ErrorComponent