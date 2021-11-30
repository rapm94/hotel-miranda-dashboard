import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteAContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      )
    },
    deleteAllContacts: (state) => {
      state.contacts = []
    },
    sortContacts: (state, action) => {
      state.contacts.sort((a, b) => {
        if (a[action.payload.key] < b[action.payload.key]) {
          return -1
        }
        if (a[action.payload.key] > b[action.payload.key]) {
          return 1
        }
        return 0
      })
    },
    getAllContacts: (state, action) => {
      state.contacts = action.payload
    },
  },
})

export const {
  deleteAContact,
  deleteAllContacts,
  sortContacts,
  getAllContacts,
} = contactSlice.actions

export const contactReducer = contactSlice.reducer

export const contactSelector = (state) => state.contact.contacts
