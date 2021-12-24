import { createSlice } from '@reduxjs/toolkit'
import { fetchBookings } from '../helpers/fetchData'



const bookingState = () => {
  const bookings = []
  const data:any = fetchBookings()
  bookings.push(data)
}

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: bookingState, 
    loading: false,
    error: null,
  },
  reducers: {
    createBooking: (state, action) => {
      state.bookings.push(action.payload)
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload,
      )
    },
    modifyBooking: (state, action) => {
      const booking = state.bookings.find(
        (booking) => booking.id === action.payload.id,
      )
      Object.assign(booking, action.payload)
    },
    // function that returns the booking state sorted by date
    orderBookings: (state, action) => {
      if (action.payload === 'new' || action.payload === 'old') {
        state.bookings.sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          if (action.payload === 'new') {
            return dateB - dateA
          } else {
            return dateA - dateB
          }
        })
      } else if (
        action.payload === 'guest' ||
        action.payload === 'checkIn' ||
        action.payload === 'checkOut' ||
        action.payload === 'roomType'
      ) {
        state.bookings.sort((a, b) => {
          if (action.payload === 'guest') {
            return a.guest.localeCompare(b.guest)
          } else if (action.payload === 'checkIn') {
            return a.checkIn.localeCompare(b.checkIn)
          } else if (action.payload === 'checkOut') {
            return a.checkOut.localeCompare(b.checkOut)
          } else if (action.payload === 'roomType') {
            return a.roomType.localeCompare(b.roomType)
          }
        })
      }
    },
    //function that return a single booking
    getBooking: (state, action) => {
      state.bookings.find((booking) => booking.id === action.payload)
    },
  },
})

export const {
  createBooking,
  deleteBooking,
  modifyBooking,
  getBooking,
  getBookings,
  orderBookings,
} = bookingSlice.actions

export const bookingSelector = (state) => state.bookings
console.log(bookingSelector)

export const bookingReducer = bookingSlice.reducer
