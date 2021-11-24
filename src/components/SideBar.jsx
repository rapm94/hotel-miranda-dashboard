import React from 'react'
import styled from 'styled-components'
import { theme } from './styles/themes'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'

const SideAppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: ${theme.bgColor};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SideBarLinks = styled.button`
  color: ${theme.fontColor};
  font-family: ${theme.regularFont};
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
`

export default function CustomSideAppBar() {

  const auth = useContext(AuthContext)
  return (
    <div>
      <SideAppBar>
        <Link to="/dasboard">
          <SideBarLinks>Dashboard</SideBarLinks>
        </Link>
        <Link to="/rooms">
          <SideBarLinks>Rooms</SideBarLinks>
        </Link>
        <Link to="/bookings">
          <SideBarLinks>Bookings</SideBarLinks>
        </Link>
        <Link to="/contacts">
          <SideBarLinks>Contacts</SideBarLinks>
        </Link>
        <Link to="/concierge">
          <SideBarLinks>Concierge</SideBarLinks>
        </Link>
        <Link to="/login">
          <SideBarLinks onClick={() => auth.setLoggedIn(false)}>Logout</SideBarLinks>
        </Link>
      </SideAppBar>
    </div>
  )
}
