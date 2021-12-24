import { createSlice } from '@reduxjs/toolkit'

const RoomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    loading: false,
    error: null,
  },
  reducers: {
    createRoom: (state, action) => {
      state.rooms.push(action.payload)
    },
    deleteRoom: (state, action) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload)
    },
    updateRoom: (state, action) => {
      const roomIndex = state.rooms.findIndex(
        (room) => room.id === action.payload.id,
      )
      state.rooms[roomIndex] = action.payload
    },
    //Function that returns just one room
    getRooms: (state, action) => {
      const roomIndex = state.rooms.findIndex(
        (room) => room.id === action.payload.id,
      )
      return roomIndex
    },
    getARoom: (state, action) => {
      state.loading = false
      state.rooms = action.payload
    },
  },
})

export const {
  createRoom,
  deleteRoom,
  updateRoom,
  setRooms,
  getAllRooms,
  getAllRoomsSuccess,
  getOneRoom,
  getOneRoomSuccess,
} = RoomsSlice.actions

export const roomsSelector = (state) => state.rooms.rooms

export const roomsReducer = RoomsSlice.reducer
