import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { contactReducer } from '../reducers/contactSlice'
import { bookingReducer } from '../reducers/bookingSlice'
import { usersReducer } from '../reducers/usersSlice'
import { roomsReducer } from '../reducers/roomSlice'

const rootReducer = combineReducers({
  contactReducer,
  usersReducer,
  roomsReducer,
  bookingReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
