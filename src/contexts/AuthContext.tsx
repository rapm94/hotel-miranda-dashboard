import { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { IProps, IUser } from "../types/ReusableTypes";

interface IAuthState {
    isAuthenticated: boolean
    user: IUser | null
}

const initialAuthState: IAuthState= {
  isAuthenticated: false,
  user: {
    password: '',
    email: '',
    token: '',
  },
}

const loadAuthState = () => {
    try{
        const authState = localStorage.getItem('auth')
        if(authState){
            return JSON.parse(authState)
        }
        return initialAuthState
    } catch (error) {
      console.log(error)
    }
}

export const AuthContext = createContext(loadAuthState())


export const AuthProvider = ({ children }: IProps)  =>{

  const [state, dispatch] = useReducer( AuthReducer, loadAuthState())
 
  function login( user: IUser ) {
    dispatch({
      type: 'LOGIN',
      payload: user,
    })
  }

  function logout() {
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
