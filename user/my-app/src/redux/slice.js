import {createSlice} from "@reduxjs/toolkit";
import AppStorage from "../helpers/AppStorage";

export const authSlice = createSlice({
    name: "loginAuth",
    initialState: {
        isAuth: !!AppStorage.getToken(),
        access_token: AppStorage.getToken(),
        user: AppStorage.getUser()
    },
    reducers: {
        setLogin(state, action) {
            AppStorage.store(action.payload.access_token, action.payload.user)
            state.isAuth = true;
            state.access_token = action.payload.access_token;
            state.user = action.payload.user;
        }
    }
})
