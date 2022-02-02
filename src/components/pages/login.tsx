import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaHotel } from 'react-icons/fa'
import axios, { AxiosRequestHeaders } from 'axios'
import { containerUrl } from '../../env'


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 500px;
  font-size: 30px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  box-shadow: 0px 16px 30px #00000014;
  top: 20%;
  left: 33%;
  position: absolute;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  font-size: 20px;
  font-weight: 600;
`

const LoginInput = styled.input`
  height: 50px;
  font: normal normal 400 18px/46px Poppins;
  padding: 0 15px;
  margin: 10px 0 20px;
  border: none;
  border-radius: 10px;
  color: black;
  background-color: ${(props) => props.theme.lightGreen};
`

const LoginSubmit = styled.input`
  width: 150px;
  height: 50px;
  margin: 0 auto 30px 70px;
  text-align: center;
  font: normal normal 500 20px/46px Poppins;
  cursor: pointer;
  color: black;
  background-color: transparent;
  border: none;
  border-radius: 8px;
`

const StyledLogoHotel = styled(FaHotel)`
  font-size: 40px;
  color: ${(props) => props.theme.primaryColor};
  margin-top: 60px;
`

export default function Login() {

  let navigate = useNavigate()

  const { login, isAuthenticated } = useContext(AuthContext)

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')


  const user = {
    email: userId,
    password: password,
  }

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleChangeUser = (e: any) => {
    e.preventDefault()
    const userId = e.target.value
    setUserId(userId)
  }
  const handleChangePassword = (e: any) => {
    e.preventDefault()
    const passwordId = e.target.value
    setPassword(passwordId)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const headers:AxiosRequestHeaders = {
      'Content-Type': 'application/json',
    }
    try{
      await axios.post(`${containerUrl}:8000/auth/login`, user, headers).then((res) => {
        login(res.data)
      })
    }catch (error) {
      console.log(error)
    }


  }
  return (
    <LoginContainer>
      <StyledLogoHotel />
      <div>Travl</div>
      <LoginForm onSubmit={handleSubmit}>
        <label className="input-label">User</label>
        <LoginInput
          type="text"
          className="user-input"
          onChange={handleChangeUser}
        />
        <label className="input-label">Password</label>
        <LoginInput
          type="password"
          className="password-input"
          onChange={handleChangePassword}
        />
        <LoginSubmit type="submit" value="Login" />
      </LoginForm>
    </LoginContainer>
  )
}
