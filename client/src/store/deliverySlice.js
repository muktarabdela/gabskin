// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const deliverySlice = createSlice({
    name: 'delivery',
    initialState: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        subCity: '',
        deliveryLocation: '',
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setSubCity: (state, action) => {
            state.subCity = action.payload;
        },
        setDeliveryLocation: (state, action) => {
            state.deliveryLocation = action.payload;
        },
    },
});

export const {
    setFirstName,
    setLastName,
    setPhoneNumber,
    setSubCity,
    setDeliveryLocation,
} = deliverySlice.actions;

export const selectDelivery = (state) => state.delivery;
export default deliverySlice;
