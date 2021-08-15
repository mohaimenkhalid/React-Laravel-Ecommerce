import {authSlice} from "./slice";
import {store} from "../store/store";

const {actions: loginSlice} = authSlice;

//login actions
export const loginAction = (access_token) => {
    store.dispatch(loginSlice.setLogin(access_token))
}
