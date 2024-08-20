// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        emailError: null,
        phoneError: null,
        error: '',
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setErrorData: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUserId, setErrorData } = userSlice.actions;

export const selectUserId = (state) => state.user.userId;

export default userSlice;
