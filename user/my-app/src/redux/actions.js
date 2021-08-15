import {authSlice} from "./slice";
import {store} from "../store/store";
import AppStorage from "../helpers/AppStorage";

const {actions: authSlices} = authSlice;

//login actions
export const loginAction = (loginResponseData) => {
    AppStorage.store(loginResponseData.access_token, loginResponseData.user)
    store.dispatch(authSlices.setLogin(loginResponseData))
}

//Logout actions
export const logoutAction = () => {
    AppStorage.clear();
    store.dispatch(authSlices.setLogout())
}
