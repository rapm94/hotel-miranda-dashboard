import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts:  [],
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
      return state.contacts
    },
    getAContact: (state, action) => {
      return state.contacts.filter(
        (contact) => contact.id === action.payload.id,
      )
    }, 
    modifyAContact: (state, action) => {
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload.id,
      )
      if (contact) {
        contact.firstName = action.payload.firstName
        contact.lastName = action.payload.lastName
        contact.email = action.payload.email
        contact.phone = action.payload.phone
      }
    }
  },
})

export const {
  deleteAContact,
  deleteAllContacts,
  sortContacts,
  getAllContacts,
} = contactSlice.actions

export const contactSelector = (state) => state.contact.contacts

export const contactReducer = contactSlice.reducer
