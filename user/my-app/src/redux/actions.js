import {authSlice} from "./slice";
const {actions: loginSlice} = authSlice;

//login actions
export const loginAction = (access_token) => (dispatch) =>{
    dispatch(loginSlice.setLogin(access_token))
}
