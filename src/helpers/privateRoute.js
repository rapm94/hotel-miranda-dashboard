import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? children : <Navigate to="/login" />
}
