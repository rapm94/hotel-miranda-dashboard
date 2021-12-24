import { createSlice } from '@reduxjs/toolkit'

/* function usersInitialState() {
  const user = useSelector(userSelector)
  const usersArray = []
  return usersArray.push(user)
} */

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] /* usersInitialState() */,
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    getAllUsers: (state, action) => {
      state.users = action.payload
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    deleteAllUsers: (state, action) => {
      state.users = []
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      )
      state.users[index] = action.payload
    },
    sortUsers: (state, action) => {
      state.users.sort((a, b) => {
        if (a[action.payload.key] < b[action.payload.key]) {
          return -1
        }
        if (a[action.payload.key] > b[action.payload.key]) {
          return 1
        }
        return 0
      })
    },
  },
})

export const {
  addUser,
  getAllUsers,
  deleteUser,
  deleteAllUsers,
  updateUser,
} = usersSlice.actions

export const usersSelector = (state) => state.users.users

export const usersReducer = usersSlice.reducer
