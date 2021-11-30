import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
});

export default userSlice;

export const {
    setName,
    setEmail,
    setPassword,
    setIsLoggedIn,
    setIsLoading,
    setError,
} = userSlice.actions;

export const userSelector = state => state.user;

export const userReducer = userSlice.reducer;

