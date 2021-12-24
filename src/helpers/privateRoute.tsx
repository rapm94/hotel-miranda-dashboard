import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import { IProps } from "../types/ReusableTypes"


export const PrivateRoute = ({ children }:any) => {
  const { state } = useContext(AuthContext)
  const { isAuthenticated } = state
  return isAuthenticated ? children : <Navigate to="/login" /> 
}
