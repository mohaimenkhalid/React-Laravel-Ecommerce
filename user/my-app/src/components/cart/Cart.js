import React, {Component, Fragment} from 'react';
import axios from "axios";
import AppURL from "../../api/AppURL";
import AppStorage from "../../helpers/AppStorage";
import CartItemLoader from "../loader/CartItemLoader";
import {loadProgressBar} from "axios-progress-bar";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import EmptyCart from "../../assets/images/cart-empty.png";

class Cart extends Component {

  constructor () {
    super();
    this.state = {
      carts: [],
      totalPrice: '',
      isLoading: true
    }
  }

  componentWillMount () {
      loadProgressBar();
      this.getCart();
  }

  getCart = () => {
    const headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.get(AppURL.getCart, {headers: headers})
      .then(res => {
        this.setState({ carts: res.data});
        this.setState({isLoading: false});
        this.getTotalPrice();
        //console.log(res)
      })
      .catch()
  };

  getTotalPrice = () => {
    let TotalPrice = this.state.carts.reduce(function (accumulator, current) {
      return accumulator + current.total_price;
    }, 0);
    this.setState({totalPrice: TotalPrice});
  };

  updateCartProduct = (cartId, type) => {
    const headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.post(AppURL.updateCartProductQuantity(cartId, type), { }, {headers: headers})
      .then(res => {
        if(res.status === 200) {
          this.getCart();
          toast.success(res.data.message);
        }
      })
      .catch(err => {
        console.log(err)
      });
  };

  cartProductDelete = (cartId) => {
    const headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${AppStorage.getToken()}`
    };
    axios.post(AppURL.cartProductDelete(cartId), { }, {headers: headers})
      .then(res => {
        if(res.status === 200) {
          this.getCart();
          toast.success(res.data.message);
        } else {
          toast.error(res.data.error);
        }
      })
      .catch(err => {
        console.log(err)
      });
  };


    render() {
        return (
            <Fragment>
                <div className="container main-section">
                    <div className="row">
                        <div className="col-lg-12 pb-2">
                            <h4>Your Shopping Cart </h4>
                        </div>
                      {
                        this.state.isLoading
                          ?
                          (
                            <CartItemLoader/>
                          )
                          :
                          (
                            <>
                              {
                                this.state.isLoading === false && this.state.carts.length < 1 ?
                                  (
                                    <div className="row my-5">
                                      <div className="col-md-4 offset-4 text-center">
                                        <img src={EmptyCart} alt="" width="100%" />
                                        <h3 className="mt-5 text-center">Your Cart is Empty!</h3>
                                        <Link to="/" className="btn btn-danger text-center">Continue Shopping </Link>
                                      </div>
                                    </div>
                                  ) :
                                  (
                                    <div className="col-lg-12 pl-3 pt-3">
                                      <table className="table table-hover border bg-white">
                                        <thead>
                                          <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th width="10%">Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>

                                          {
                                            this.state.carts.map((cart, index) => {
                                              return (
                                                <tr>
                                                  <td>
                                                    <div className="row">
                                                      <div className="col-lg-2 Product-img">
                                                        <img src={AppURL.ServerBaseURL + cart.product.image} alt="..."
                                                             className="img-responsive"/>
                                                      </div>
                                                      <div className="col-lg-10">
                                                        <h4 className="nomargin">{cart.product.name}</h4>
                                                        <p>{cart.product.product_details ? cart.product.product_details.short_description : ''}</p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                  <td> {cart.unit_price} </td>
                                                  <td data-th="Quantity" width="12%">
                                                    <div className="d-flex">
                                                      <button className="btn btn-info" onClick={() => this.updateCartProduct(cart.id, 'decrement')}>-</button>
                                                      <input type="number" className="form-control text-center" value={cart.quantity} readOnly/>
                                                      <button className="btn btn-info" onClick={() => this.updateCartProduct(cart.id, 'increment')}>+</button>
                                                    </div>
                                                  </td>
                                                  <td>{cart.total_price}</td>
                                                  <td className="actions" data-th="" width="10%">
                                                    <button onClick={() => this.cartProductDelete(cart.id)} className="btn btn-danger btn-sm" style={{borderRadius: '2rem'}}>
                                                      <i className="fa fa-times"/>
                                                    </button>
                                                  </td>
                                                </tr>
                                              );
                                            })
                                          }
                                        </tbody>
                                        <tfoot>
                                          <tr>
                                            <td>
                                              <a href="#" className="btn btn-warning text-white">
                                                <i className="fa fa-angle-left"/>
                                                Continue Shopping
                                              </a>
                                            </td>
                                            <td colSpan="2" className="hidden-xs"></td>
                                            <td className="hidden-xs text-center" width="10%"><strong>Total :
                                              {this.state.totalPrice}</strong></td>
                                            <td width="20%">
                                              <Link to="/checkout" className="btn btn-success btn-block">Checkout <i
                                                className="fa fa-angle-right"/>
                                              </Link>
                                            </td>
                                          </tr>
                                        </tfoot>
                                      </table>
                                    </div>
                                  )
                              }

                            </>
                          )
                      }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Cart;
