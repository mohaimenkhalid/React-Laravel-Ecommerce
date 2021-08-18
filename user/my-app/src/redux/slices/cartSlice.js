import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        isLoading: true
    },
    reducers: {
        setCart(state, action) {
            if(action.payload != null) {
                state.items = action.payload;
                state.isLoading = false;
                state.totalPrice = action.payload.reduce(function (accumulator, current) {
                    return accumulator + current.subtotal;
                }, 0);
            }
        },
    }
})
