import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/login'
import Dashboard from './components/pages/dashboard'
import Contacts from './components/pages/contacts'
import ContactDetails from './components/pages/contact-details'
import Rooms from './components/pages/rooms'
import RoomDetails from './components/pages/room-details'
import ConciergeDetails from './components/pages/user-details'
import Users from './components/pages/user'
import { PrivateRoute } from './helpers/private-route'
import { useState } from 'react';
import { AuthContext } from './contexts/auth-context';
import CustomSideAppBar from './components/SideBar';
import { NavBar } from './components/NavBar';
function App() {
  
const loadState = () => {
  try {
     return localStorage.getItem('loggedInState') ? localStorage.getItem('loggedInState') : false;
  } catch (err) {
      console.log(err);
  }
}
  const [loggedIn, setLoggedIn] = useState(loadState());

  return (
    <>
      <div>
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
          {loggedIn ? <NavBar/> : null} 
          {loggedIn ? <CustomSideAppBar /> : null}
          <Routes>
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
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/concierge/:id"
              element={
                <PrivateRoute>
                  <ConciergeDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/concierge/:id/edit"
              element={
                <PrivateRoute>
                  <ConciergeDetails />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthContext.Provider>
      </div>
    </>
  )
}

export default App
