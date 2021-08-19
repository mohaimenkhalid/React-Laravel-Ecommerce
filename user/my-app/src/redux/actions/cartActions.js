import {store} from "../../store/store";
import {cartSlice} from "../slices/cartSlice";
import AppStorage from "../../helpers/AppStorage";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";
const {actions: cartSlices} = cartSlice;


export const addToCart = (product) => {
    let cart = localStorage.getItem('cart');
    var dataCart = cart !== null ? JSON.parse(cart) : [];

    if (dataCart.length === 0 || !dataCart.find((p) => p.product_id === product.product_id)) {
        dataCart.push(product)
    } else if (dataCart.find((p) => p.product_id === product.product_id)) {
        product.subtotal += dataCart.find((p) => p.product_id === product.product_id).subtotal
        product.quantity += dataCart.find((p) => p.product_id === product.product_id).quantity
        dataCart.splice(
            dataCart.findIndex((p) => p.product_id === product.product_id),
            1,
            product
        )
    }
    localStorage.setItem('cart', JSON.stringify(dataCart))
    store.dispatch(() => getCartAction());
    toast.success("Product added your cart successfully!")
}

export const getCartAction = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    store.dispatch(cartSlices.setCart(cart))
}

export const updateCartAction = (productId, type) => {
    let cart = localStorage.getItem('cart');
    var dataCart = cart !== null ? JSON.parse(cart) : [];

    let findCartItem = dataCart.find((p) => p.product_id === productId)
    if(type === 'increment') {
        findCartItem.quantity++;
        findCartItem.subtotal += parseInt(findCartItem.price);
    } else if(type === 'decrement') {
        findCartItem.quantity--;
        findCartItem.subtotal -= parseInt(findCartItem.price);
    }

    let cartIndex = dataCart.findIndex((p) => p.product_id === productId);
    if(findCartItem.quantity === 0) {
        dataCart.splice(cartIndex, 1)
    } else {
        dataCart[cartIndex].quantity = findCartItem.quantity;
        dataCart[cartIndex].subtotal = findCartItem.subtotal;
    }

    localStorage.setItem('cart', JSON.stringify(dataCart))
    store.dispatch(() => getCartAction());
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
