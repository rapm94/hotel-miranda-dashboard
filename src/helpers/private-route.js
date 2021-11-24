import { useContext } from "react"
import { AuthContext } from "../contexts/auth-context"
import { Navigate } from "react-router"

export const PrivateRoute = ({ children }) => {

    const auth  = useContext(AuthContext)
   return auth.loggedIn ? children : <Navigate to="/login" />
}




