import { createSlice } from '@reduxjs/toolkit';
const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        name: '',
        email: "",
        password: '',
        confirmPassword: "",
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
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
        // Add other reducer functions for additional fields
    },
});
export const selectRegistration = (state) => state.registration;

export const { setName, setEmail, setPassword, setConfirmPassword } = registrationSlice.actions;

export default registrationSlice;
