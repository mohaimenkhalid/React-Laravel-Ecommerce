import  {combineReducers} from "@reduxjs/toolkit"
import {authSlice} from "../redux/slices/authSlice";
import {cartSlice} from "../redux/slices/cartSlice";

export const rootReducer =  combineReducers({
    auth: authSlice.reducer,
    cart: cartSlice.reducer
})
