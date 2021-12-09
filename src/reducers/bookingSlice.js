import { createSlice } from '@reduxjs/toolkit';


const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },
    reducers: {
        createBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        deleteBooking: (state, action) => {
            state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
        },
        setBookings: (state, action) => {
            state.bookings = action.payload;
        },
        modifyBooking: (state, action) => {
            const booking = state.bookings.find(booking => booking.id === action.payload.id);
            Object.assign(booking, action.payload);
        },
        getBookings: (state, action) => {
            
            
    }
});

