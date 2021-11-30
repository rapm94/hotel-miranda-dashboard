import { createSlice } from '@reduxjs/toolkit';
 

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    }
});

export const {
    login,
    logout,
} = authSlice.actions;

export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectError = state => state.auth.error;
export const selectAuth = state => state.auth;
export const authReducer = authSlice.reducer;
export default authSlice;