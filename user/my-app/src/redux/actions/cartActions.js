import {store} from "../../store/store";
import {cartSlice} from "../slices/cartSlice";
import AppStorage from "../../helpers/AppStorage";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";
const {actions: cartSlices} = cartSlice;


export const getCartAction = () => {
    const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.get(AppURL.getCart, {headers: headers})
        .then(res => {
            store.dispatch(cartSlices.setCart(res))
        })
        .catch()

}

export const updateCartAction = (cartId, type) => {
    const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.post(AppURL.updateCartProductQuantity(cartId, type), { }, {headers: headers})
        .then(res => {
            if(res.status === 200) {
                store.dispatch(() => getCartAction());
            }
        })
        .catch(err => {
            console.log(err)
        });

}

export const cartProductDelete = (cartId) => {
    const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.post(AppURL.cartProductDelete(cartId), { }, {headers: headers})
        .then(res => {
            if(res.status === 200) {
                store.dispatch(() => getCartAction());
                toast.success(res.data.message);
            } else {
                toast.error(res.data.error);
            }
        })
        .catch(err => {
            console.log(err)
        });
}
