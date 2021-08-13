import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        access_token: ''
    },
    reducers: {
        setLogin(state, action) {
            state.isAuth = true;
            state.access_token = action.payload;
            console.log(action)
        }
    }
})
