// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        emailError: null,
        phoneError: null
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setErrorData: (state, action) => {
            state.Error = action.payload;
        },
    },
});

export const { setUserId, setErrorData } = userSlice.actions;

export const selectUserId = (state) => state.user.userId;

export default userSlice;
