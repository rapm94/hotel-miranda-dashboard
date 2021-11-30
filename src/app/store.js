import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userReducer } from '../reducers/userSlice'
import { authReducer } from '../reducers/authSlice'
import { contactReducer } from '../reducers/contactSlice'
import { usersReducer } from '../reducers/usersSlice'

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  contactReducer,
  usersReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
