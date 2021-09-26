import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cartProductDelete, setCollapseAction, updateCartAction} from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
import AppURL from "../../api/AppURL";
import emptyShoppingBag from "../../assets/images/emptyShoppingBag.webp";

const CartSideBar = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart);
    const expanded = cartState.collapse;

    const hiddenStyle = {
        width: "0px",
    };
    const expandedStyle = {
        width: "365px",
    };

    const setCollapse = (status) => {
        dispatch(() => setCollapseAction(status))
    }

    return (
        <>
            <div className="cart-wrapper " style={!expanded ? hiddenStyle : expandedStyle}>
                <div className="cart-header d-flex justify-content-between">
                    <h6>{cartState.items.length} ITEM</h6>
                    <button onClick={() => setCollapse(false)}>Close</button>
                </div>
                <div className="cart-body">

                    {
                        cartState.items.length > 0 ?
                            <>
                                <div className="next-process mb-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-dark">Total - BDT { cartState.totalPrice}</h5>
                                            <Link to="/checkout" onClick={()=> setCollapse(false)}
                                                  className="btn theme-bg btn-block">Process Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                                {
                                    cartState.items.map((cart, index) => {
                                        return (
                                           <>
                                               <div className="cart-item">
                                                   <div className="row">
                                                       <div className="col-3">
                                                           <img src={AppURL.ServerBaseURL + cart.image} alt="..."
                                                                className="img-responsive" width="50" />
                                                       </div>
                                                       <div className="col-6">
                                                           <div className="item-name">{cart.name}</div>
                                                           <div className="item-list">Price: {cart.price}</div>
                                                           <div className="item-list">Quantity: {cart.quantity}</div>
                                                           <div className="item-list">Subtotal: {cart.subtotal}</div>
                                                       </div>
                                                       <div className="col-3">
                                                           <button onClick={() => updateCartAction(cart.product_id, 'increment')}>+</button>
                                                           <button onClick={() => updateCartAction(cart.product_id, 'decrement')}>--</button>
                                                       </div>
                                                       <div className="item-remove" onClick={function() {
                                                           let actionDelete = window.confirm(`Are you sure to delete ${cart.name}!`)
                                                           if(actionDelete) {
                                                               dispatch(() => cartProductDelete(cart.product_id));
                                                           }
                                                       }} style={{cursor: "pointer"}}>
                                                           <i className="fas fa-times-circle"></i>
                                                       </div>
                                                   </div>


                                               </div>
                                           </>
                                        );
                                    })
                                }
                            </>
                            :
                            (
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={emptyShoppingBag} alt="..."
                                            width="100%" />
                                            <h6 className="mt-3">Your shopping bag is empty. Start shopping</h6>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="shopping-cart-button" onClick={() => setCollapse(false)}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            {
                !expanded ?
                    ( <div className="CartStickyHeader" onClick={() => setCollapse(true)}>
                        <div className="items">
                            <i className="fa fa-shopping-bag bounce text-white fa-2x" />
                            <h5>{cartState.items.length} Item</h5>

                        </div>
                        <div>
                            <h6 className="text-center my-0">{cartState.totalPrice}</h6>
                        </div>
                    </div>) : ''
            }

        </>
    );
};


export default CartSideBar;
