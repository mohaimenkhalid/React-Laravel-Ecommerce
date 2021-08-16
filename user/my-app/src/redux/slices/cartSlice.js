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
            state.items = action.payload.data;
            state.isLoading = false;
            state.totalPrice = action.payload.data.reduce(function (accumulator, current) {
                return accumulator + current.total_price;
            }, 0);
        },
    }
})
