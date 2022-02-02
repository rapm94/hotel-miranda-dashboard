import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { containerUrl } from '../env'

let roomState = async () => {
  try {
    const rooms = []
    const data = await axios.get(`${containerUrl}/api/rooms`)
    rooms.push(data.data)
    if (data === undefined) {
      return rooms
    } else {
      return (data = {
        rooms: [],
        loading: false,
        error: null,
      })
    }
  } catch (err) {
    console.log(err)
  }
}

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
    orderByRooms: (state, action) => {
      if (action.payload === 'higher') {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return -1
          }
          if (a.price < b.price) {
            return 1
          }
          return 0
        })
      } else if (action.payload === 'lower') {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return 1
          }
          if (a.price < b.price) {
            return -1
          }
          return 0
        })
      } else if (action.payload === 'roomNumber') {
        state.rooms = state.rooms.sort((a, b) => {
          if (a.price > b.price) {
            return 1
          }
          if (a.price < b.price) {
            return -1
          }
          return 0
        })
      }
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
  orderByRooms,
} = RoomsSlice.actions

export const roomsSelector = (state) => state.rooms.rooms

export const roomsReducer = RoomsSlice.reducer
