import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../contexts/auth-context';
import { useContext, useEffect, useState } from 'react';

export default function Login() {

  let navigate = useNavigate();

  const { loggedIn, setLoggedIn } = useContext(AuthContext)

  const [ userId , setUserId ] = useState('')
  const [ password , setPassword ] = useState('')

  const userName = 'raul'
  const userPassword = '123'

  useEffect(() => {
    if (loggedIn) {
      navigate('/', { replace: true });
    }
  } , [loggedIn, navigate]);
    

  const handleChange = (e) => {
    e.preventDefault()
    const userId = e.target.value
    setUserId(userId)
  }
  const handleChangePassword = (e) => {
    e.preventDefault()
    const passwordId = e.target.value
    setPassword(passwordId)
    console.log(passwordId === userPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userId === userName && password === userPassword){
      setLoggedIn(true)
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <input onChange={handleChangePassword} type="password" />
          <button>Login</button>
      </form>
    </>
  )
}
