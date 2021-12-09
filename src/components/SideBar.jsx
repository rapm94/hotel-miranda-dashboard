import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'
import { FaHotel } from 'react-icons/fa'
import {
  RiDashboardLine,
  RiKey2Line,
  RiUser5Line,
  RiCalendar2Line,
  RiArticleLine,
  RiLogoutBoxRLine,
} from 'react-icons/ri'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'

const SideAppBar = styled.div`
  width: 17.5%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding-top: 1%;
  margin: 0 40px 0 0;
  position: fixed;
  z-index: 999;
`

export const SideBarLinks = styled.button`
  color: ${(props) =>
    props.toggle ? props.theme.errorColor : props.theme.primaryColor};
  font-family: ${(props) => props.theme.regularFont};
  font-size: 14px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  margin-bottom: 12px;
`
const StyledLogoPack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 10px;
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
  margin: 10px 0 0 70px;
`

const DashboardIcon = styled(RiDashboardLine)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`
const KeyIcon = styled(RiKey2Line)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`
const BookingIcon = styled(RiCalendar2Line)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`
const UserIcon = styled(RiUser5Line)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`
const ContactIcon = styled(RiArticleLine)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`
const LogOutIcon = styled(RiLogoutBoxRLine)`
  font-size: 20px;
  color: ${(props) => props.theme.primaryColor};
  margin: 0 15px 0 0;
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  box-shadow: 0px 15px 30px #00000010;
  border-radius: 18px;
`
const StyledCopyrightContainer = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin: 0 auto;
`

const StyledAdminDashboard = styled.div`
  text-align: left;
  font: normal normal 300 12px Poppins;
  letter-spacing: 0px;
  color: ${(props) => props.theme.titleColor};
`

const StyledCopyright = styled.div`
  font: normal normal 600 10px Poppins;
  text-align: left;
  color: ${(props) => props.theme.titleColor};
`

const SelectedButtonDecoration = styled.div`
  height: 100%;
  witdh: 6px;
  background-color: ${(props) => props.theme.errorColor};
`

export default function CustomSideAppBar() {
  const [toggleColor, setToggleColor] = useState(false)

  const auth = useContext(AuthContext)

  const handleLogOut = () => {
    localStorage.removeItem('loggedInState')
    auth.setLoggedIn(false)
  }

  const location = useLocation()
  const path = location.pathname

  return (
    <SideAppBar>
      <StyledLogoPack>
        <StyledLogoHotel />
        <h1>Travl</h1>
      </StyledLogoPack>
      <LinkAndIconContainer>
        <DashboardIcon />
        <Link to="/">
          <SideBarLinks toggle={toggleColor}>Dashboard</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <LinkAndIconContainer>
        <KeyIcon />
        <Link to="/rooms">
          <SideBarLinks toggle={toggleColor}>Rooms</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <LinkAndIconContainer>
        <SelectedButtonDecoration />
        <BookingIcon />
        <Link to="/bookings">
          <SideBarLinks toggle={toggleColor}>Bookings</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <LinkAndIconContainer>
        <UserIcon />
        <Link to="/users">
          <SideBarLinks toggle={toggleColor}>Users</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <LinkAndIconContainer>
        <Link to="/contact">
          <ContactIcon />
          <SideBarLinks>Contact</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <LinkAndIconContainer>
        <LogOutIcon />
        <Link to="/login">
          <SideBarLinks onClick={handleLogOut}>Logout</SideBarLinks>
        </Link>
      </LinkAndIconContainer>
      <UserContainer>
        <div
          style={{
            background: '#C5C5C5 0% 0% no-repeat padding-box',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            color: '#C5C5C5',
            marginBottom: '15px;',
          }}
        ></div>
        <div
          style={{
            color: '#393939',
            font: 'normal normal medium 12px Poppins',
            marginBottom: '5px',
          }}
        >
          Raúl Puigbó
        </div>
        <div
          style={{
            color: '#B2B2B2',
            font: 'normal normal 300 12px/18px Poppins',
            marginBottom: '16px',
          }}
        >
          rapm_94@hotmail.com
        </div>
        <Button contact weight="500">
          Edit
        </Button >
      </UserContainer>
      <StyledCopyrightContainer>
        <StyledAdminDashboard>Travl Hotel Admin Dashboard</StyledAdminDashboard>
        <StyledCopyrightContainer>
          <StyledCopyright>© 2021 All Rights Reserved</StyledCopyright>
        </StyledCopyrightContainer>
      </StyledCopyrightContainer>
    </SideAppBar>
  )
}
