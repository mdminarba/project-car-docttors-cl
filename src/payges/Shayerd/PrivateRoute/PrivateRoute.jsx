import { useContext } from "react"
import { AuthContext } from "../AuthProbider/AuthProbider"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <div className=" flex justify-center ">

            <span className="loading loading-spinner text-success w-72"></span>
        </div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

PrivateRoute.propTypes = {}

export default PrivateRoute