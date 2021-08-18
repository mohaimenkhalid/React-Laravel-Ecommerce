import {authSlice} from "../slices/authSlice";
import {store} from "../../store/store";
import AppStorage from "../../helpers/AppStorage";
const {actions: authSlices} = authSlice;

//login actions
export const loginAction = (loginResponseData) => {
    console.log(loginResponseData);
    AppStorage.store(loginResponseData.access_token, loginResponseData.user)
    store.dispatch(authSlices.setLogin(loginResponseData))
}

//Logout actions
export const logoutAction = () => {
    AppStorage.clear();
    store.dispatch(authSlices.setLogout())
}
