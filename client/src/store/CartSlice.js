import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        stickers: [],
        totalQuantity: 0,
        totalPrice: 0,
        stickerId: null,
        quantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.stickers.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.stickers.push({
                    id: newItem._id,
                    price: newItem.price,
                    size: newItem.size,
                    quantity: newItem.quantity,
                    category: newItem.category,
                    imageUrl: newItem.imageUrl,
                    name: newItem.name
                });
            }
            state.totalQuantity += newItem.quantity;
            state.stickerId = newItem._id;
            state.quantity = newItem.quantity;
            state.totalPrice = state.stickers.reduce((total, sticker) => {
                return total + sticker.price * sticker.quantity;
            }, 0);

        },
        sendCartToOrders: (state) => {
            const cartItems = state.stickers;
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.stickers = state.stickers.filter((item) => item.id !== itemIdToRemove);
            state.totalQuantity -= 1;
        },
        incrementQuantity(state, action) {
            const itemId = action.payload;
            const sticker = state.stickers.find(item => item.id === itemId);
            if (sticker) {
                sticker.quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const itemId = action.payload;
            const sticker = state.stickers.find(item => item.id === itemId);
            if (sticker && sticker.quantity > 1) {
                sticker.quantity -= 1;
            }
        },
        selectors: {
            selectCartCount: (state) => state.cart.stickers.length,
        },
        updateTotalQuantity: (state, action) => {
            state.totalQuantity = action.payload;
        },
    }
});
export const selectCartCount = (state) => state.cart.totalQuantity;
export const selectCartItems = (state) => state.cart.stickers;
export const selectStickerId = (state) => state.cart.stickerId;
export const selectQuantity = (state) => state.cart.quantity;

export const selectTotalPrice = createSelector(
    (state) => state.cart.stickers,
    (stickers) => stickers.reduce((total, sticker) => total + sticker.price * sticker.quantity, 0)
);
export const { updateTotalQuantity, addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice;
