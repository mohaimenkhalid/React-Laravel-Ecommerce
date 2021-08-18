import React, {Component, Fragment} from 'react';
import AppURL from "../../api/AppURL";
import CartItemLoader from "../loader/CartItemLoader";
import {loadProgressBar} from "axios-progress-bar";
import {Link} from "react-router-dom";
import EmptyCart from "../../assets/images/cart-empty.png";
import {connect} from "react-redux";
import {store} from "../../store/store";
import {cartProductDelete, updateCartAction} from "../../redux/actions/cartActions";

class Cart extends Component {

  constructor () {
    super();
    this.state = {
      carts: [],
      totalPrice: '',
      isLoading: false
    }
  }

  componentWillMount () {
      loadProgressBar();
  }

  updateCartProduct = (cartId, type) => {
      store.dispatch(() => updateCartAction(cartId, type));
  };

  cartProductDelete = (cartId) => {
    store.dispatch(() => cartProductDelete(cartId));
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
                            this.props.carts.length < 1 ?
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
                                        this.props.carts.map((product, index) => {
                                          return (
                                            <tr>
                                              <td>
                                                <div className="row">
                                                  <div className="col-lg-2 Product-img">
                                                    <img src={AppURL.ServerBaseURL + product.image} alt="..."
                                                         className="img-responsive"/>
                                                  </div>
                                                  <div className="col-lg-10">
                                                    <h5 className="nomargin">{product.name}</h5>
                                                    <p>{product.description }</p>
                                                  </div>
                                                </div>
                                              </td>
                                              <td> {product.unit_price} </td>
                                              <td data-th="Quantity" width="12%">
                                                <div className="d-flex">
                                                  <button className="btn btn-info" onClick={() => this.updateCartProduct(product.id, 'decrement')}>-</button>
                                                  <input type="number" className="form-control text-center" value={product.quantity} readOnly/>
                                                  <button className="btn btn-info" onClick={() => this.updateCartProduct(product.id, 'increment')}>+</button>
                                                </div>
                                              </td>
                                              <td>{this.props.total_price}</td>
                                              <td className="actions" data-th="" width="10%">
                                                <button onClick={() => this.cartProductDelete(product.id)} className="btn btn-danger btn-sm" style={{borderRadius: '2rem'}}>
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
                                        <td className="hidden-xs text-center" width="10%">
                                            <strong>Total :
                                          {this.props.totalPrice}</strong></td>
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
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.cart.items,
        isLoading: state.cart.isLoading,
        totalPrice: state.cart.totalPrice,
    }
}

export default connect(mapStateToProps)(Cart)
