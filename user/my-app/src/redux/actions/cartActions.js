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

    let findCartItem = dataCart.find((p) => p.product_id === product.product_id);

    if (dataCart.length === 0 || !findCartItem) {
        dataCart.push(product)
    } else if (findCartItem) {
        product.subtotal += findCartItem.subtotal
        product.quantity += findCartItem.quantity
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

export const cartProductDelete = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let findCartItem = cart.find((p) => p.product_id === productId)
    if(cart && findCartItem) {
        let cartIndex = cart.findIndex((p) => p.product_id === productId);
        console.log(cartIndex);
        cart.splice(cartIndex, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        store.dispatch(() => getCartAction());
        toast.error("Product removed from Cart!")
    } else {
        toast.error("Something went wrong!")
    }

}
