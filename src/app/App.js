import { Routes, Route } from 'react-router-dom'
import Login from '../components/pages/login'
import Dashboard from '../components/pages/dashboard'
import Contacts from '../components/pages/contacts'
import ContactDetails from '../components/pages/contact-details'
import Rooms from '../components/pages/rooms'
import RoomDetails from '../components/pages/room-details'
import Bookings from '../components/pages/bookings'
import BookingDetails from '../components/pages/booking-details'
import User from '../components/pages/user'
import { PrivateRoute } from '../helpers/privateRoute'
import { useState } from 'react'
import { AuthContext } from '../contexts/auth-context'
import CustomSideAppBar from '../components/SideBar'
import { NavBar } from '../components/NavBar'
import styled from 'styled-components'
import '../components/styles/app.scss'

function App() {
  const loadState = () => {
    try {
      return localStorage.getItem('loggedInState')
        ? localStorage.getItem('loggedInState')
        : false
    } catch (err) {
      console.log(err)
    }
  }

  const [loggedIn, setLoggedIn] = useState(loadState())
  const [toggleMenu, settoggleMenu] = useState(true)

  const handleMenuToggle = (e) => {
    e.preventDefault()
    console.log('toggle')
    settoggleMenu(!toggleMenu)
  }

  const MainContent = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          <NavBar handler={handleMenuToggle} toggle={toggleMenu} />
        ) : null}
        
        
        <MainContent>
        {loggedIn && toggleMenu ? <CustomSideAppBar /> : null}
        <Routes >
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact/:id"
              element={
                <PrivateRoute>
                  <ContactDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/rooms"
              element={
                <PrivateRoute>
                  <Rooms />
                </PrivateRoute>
              }
            />
            <Route
              path="/room/:id"
              element={
                <PrivateRoute>
                  <RoomDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/room/:id/edit"
              element={
                <PrivateRoute>
                  <RoomDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
<Route
              path="/bookings"
              element={
                <PrivateRoute>
                  <Bookings />
                </PrivateRoute>
              }
            />

            <Route
              path="/bookings/:id"
              element={
                <PrivateRoute>
                  <BookingDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/bookings/:id/edit"
              element={
                <PrivateRoute>
                  <BookingDetails />
                </PrivateRoute>
              }
            />
           </Routes>
        </MainContent>
       
      </AuthContext.Provider>
    </>
  )
}

export default App
