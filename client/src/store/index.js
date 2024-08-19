import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import authSlice from "./authSlice";
import deliverySlice from "./deliverySlice";
import registrationSlice from "./registrationSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        auth: authSlice.reducer,
        delivery: deliverySlice.reducer,
        registration: registrationSlice.reducer,
        user: userSlice.reducer
    }
})

export default store