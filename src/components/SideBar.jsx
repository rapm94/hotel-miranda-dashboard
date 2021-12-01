import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'
import { FaHotel } from 'react-icons/fa'

const SideAppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
  padding-top: 7%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`

export const SideBarLinks = styled.button`
  color: ${(props) => props.toggle ? props.theme.errorColor : props.theme.primaryColor};
  font-family: ${(props) => props.theme.regularFont};
  font-size: 18px;
  margin: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  margin: 0.5rem 0 0 90px;
`
const StyledLogoPack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.secondaryColor};
`

const StyledLogoHotel = styled(FaHotel)`
  font-size: 40px;
  color: ${(props) => props.theme.primaryColor};
`

const LinkAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`

export default function CustomSideAppBar() {

  const [toggleColor, setToggleColor] = useState(false)

  const auth = useContext(AuthContext)

  const handleLogOut = () => {
    localStorage.removeItem('loggedInState')
    auth.setLoggedIn(false)
  }

  const handleToggleColor = (e) => {
    e.preventDefault()
    setToggleColor(!toggleColor)
  }


  return (
    <div>
      <SideAppBar>
        <StyledLogoPack>
          <StyledLogoHotel />
          <h1>Hotel</h1>
        </StyledLogoPack>
        <LinkAndIconContainer>
          <Link to="/">
            <SideBarLinks onClick={handleToggleColor} toggle={toggleColor}>Dashboard</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        <LinkAndIconContainer>
          <Link to="/rooms">
            <SideBarLinks onClick={handleToggleColor} toggle={toggleColor}>Rooms</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        <LinkAndIconContainer>
          <Link to="/bookings">
            <SideBarLinks onClick={handleToggleColor} toggle={toggleColor}>Bookings</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        <LinkAndIconContainer>
          <Link to="/users">
            <SideBarLinks onClick={handleToggleColor} toggle={toggleColor}>Users</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        <LinkAndIconContainer>
          <Link to="/users">
            <SideBarLinks onClick={handleToggleColor} toggle={toggleColor}>Users</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        <LinkAndIconContainer>
          <Link to="/login">
            <SideBarLinks onClick={handleLogOut}>Logout</SideBarLinks>
          </Link>
        </LinkAndIconContainer>
        {/*TODO: cambiar logout*/}
      </SideAppBar>
    </div>
  )
}
