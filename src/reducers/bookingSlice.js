import { createSlice } from '@reduxjs/toolkit'
import { fetchBookings } from '../helpers/fetchData'



const bookingState = () => {
  const bookings = []
  const data = fetchBookings()
  bookings.push(data)
}

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    booking: bookingState, 
    loading: false,
    error: null,
  },
  reducers: {
    createBooking: (state, action) => {
      state.booking.push(action.payload)
    },
    deleteBooking: (state, action) => {
      state.booking = state.booking.filter(
        (booking) => booking.id !== action.payload,
      )
    },
    modifyBooking: (state, action) => {
      const booking = state.booking.find(
        (booking) => booking.id === action.payload.id,
      )
      Object.assign(booking, action.payload)
    },
    // function that returns the booking state sorted by date
    orderBookings: (state, action) => {
      if (action.payload === 'new' || action.payload === 'old') {
        state.booking.sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          if (action.payload === 'new') {
            return dateB.getTime() - dateA.getTime()
          } else {
            return dateA.getTime() - dateB.getTime()
          }
        })
      } else if (
        action.payload === 'guest' ||
        action.payload === 'checkIn' ||
        action.payload === 'checkOut' ||
        action.payload === 'roomType'
      ) {
        state.booking.sort((a, b) => {
          if (a[action.payload] > b[action.payload]) {
            return 1;
          }
          if (a[action.payload] < b[action.payload]) {
            return -1;
          }
          return 0;
        });
      }
    },
    //function that return a single booking
    detailedBooking: (state, action) => {
      state.id = action.payload;
    },
  },
})

export const {
  createBooking,
  deleteBooking,
  modifyBooking,
  detailedBooking,
  orderBookings,
} = bookingSlice.actions

export const bookingSelector = (state) => state.bookings


export const bookingReducer = bookingSlice.reducer
