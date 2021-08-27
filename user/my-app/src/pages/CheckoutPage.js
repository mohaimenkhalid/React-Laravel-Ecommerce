import React, {Component} from 'react';
import AppStorage from "../helpers/AppStorage";
import axios from "axios";
import AppURL from "../api/AppURL";
import {loadProgressBar} from "axios-progress-bar";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {store} from "../store/store";
import {getCartAction} from "../redux/actions/cartActions";
import { loadStripe } from "@stripe/stripe-js";
import {CardElement, Elements} from "@stripe/react-stripe-js";
import "../assets/css/stripe.css";

class CheckoutPage extends Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,
      full_name: '',
      phone_no: '',
      region: '',
      city: '',
      area: '',
      address: '',
      payment_type: 'cash_on_delivery',
      submit: false,
      redirectAfterOrderComplete: false,
      processing: false,
      error: null,
      disabled: true,
      email: '',
      isProcessingPayment: false
    }
  }

   cardStyle = {
     style: {
       base: {
         color: "#32325d",
         fontFamily: 'Arial, sans-serif',
         fontSmoothing: "antialiased",
         fontSize: "16px",
         "::placeholder": {
           color: "#32325d"
         }
       },
       invalid: {
         color: "#fa755a",
         iconColor: "#fa755a"
       }
     }
  };

  componentWillMount () {
    loadProgressBar();
  }

  /*componentDidMount() {
    if(this.props.carts.length < 1) {
      toast.error("Your cart is empty. Continue shopping.");
      this.props.history.push("/");
    }
  }*/

  redirectAfterOrder = () => {
    if(this.state.redirectAfterOrderComplete === true) {
      this.props.history.push("/my-account/orders");
    }
  };

  full_nameChangeHandle = (e) => {
    this.setState({full_name: e.target.value});
  };
  phoneChangeHandle = (e) => {
    this.setState({phone_no: e.target.value});
  };

  regionChangeHandle = (e) => {
    this.setState({region: e.target.value});
  };

  cityChangeHandle = (e) => {
    this.setState({city: e.target.value});
  };

  areaChangeHandle = (e) => {
    this.setState({area: e.target.value});
  };

  addressChangeHandle = (e) => {
    this.setState({address: e.target.value});
  };

  paymentTypeChangeHandle = (e) => {
    this.setState({payment_type: e.target.value});
  };

  handleCardChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    this.setState({disabled: event.empty })

    if(event.error) {
      this.setState({error: event.error.message});
      this.setState({disabled: true })
    } else {
      this.setState({error: ""});
    }
  };

  confirmOrder = (e) => {
    e.preventDefault();
    this.setState({submit: true});
    if(this.validate() !== false) {
      this.setState({isProcessingPayment: true});
      this.order();
    } else {
      this.setState({submit: false});
    }
  };

  order = () => {
    let totalPrice = this.props.totalPrice;
    let full_name = this.state.full_name;
    let phone_no = this.state.phone_no;
    let region = this.state.region;
    let city = this.state.city;
    let area = this.state.area;
    let address = this.state.address;
    let payment_type = this.state.payment_type;

    let orderFormData = new FormData();
    orderFormData.append('total_amount', totalPrice);
    orderFormData.append('full_name', full_name);
    orderFormData.append('phone_no', phone_no);
    orderFormData.append('region', region);
    orderFormData.append('city', city);
    orderFormData.append('area', area);
    orderFormData.append('address', address);
    orderFormData.append('payment_type', payment_type);
    orderFormData.append('carts', JSON.stringify(this.props.carts));

    const headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${AppStorage.getToken()}`
    };

    axios.post(AppURL.placeOrder, orderFormData, {headers: headers})
      .then((res) => {
        if (res.status === 200 && res.data) {
          localStorage.removeItem('cart')
          store.dispatch(() => getCartAction());
          this.setState({isProcessingPayment: false});
          toast.success(res.data.message);
          this.setState({'redirectAfterOrderComplete': true});
        } else {
          toast.error("Something went wrong!");
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  validate() {
    if(this.state.full_name === '') {
      toast.error("Name field is empty.", {position: "bottom-left",});
    }
    if(this.state.phone_no === '') {
      toast.error("Phone field is empty.", {position: "bottom-left",});
    }
    if(this.state.region === '') {
      toast.error("Region field is empty.", {position: "bottom-left",});
    }
    if(this.state.city === '') {
      toast.error("City field is empty.", {position: "bottom-left",});
    }
    if(this.state.area === '') {
      toast.error("Area field is empty.", {position: "bottom-left",});
    }
    if(this.state.address === '') {
      toast.error("Address field is empty.", {position: "bottom-left",});
    }
    if(this.state.payment_type === '') {
      toast.error("Payment Type field is empty.", {position: "bottom-left",});
    }

    if(this.state.payment_type === 'pay_with_stripe' && this.state.email === '') {
      toast.error("Email field is empty.", {position: "bottom-left",});
    }

    if(this.state.full_name === ''
      || this.state.phone_no === ''
      || this.state.region === ''
      || this.state.city === ''
      || this.state.area === ''
      || this.state.address === ''
      || this.state.payment_type === ''
    ) {
      return false;
    }
  }

  render() {
    const promise = loadStripe("pk_test_51JT1fGH9lpuw7xB2N43mzN5hNVz1sWNoIKpZ9hRQ6sOL6YYsD5KqkVvF1NuSpxosBIF9sSAix4WSxHEA8249kffB00tCPGLZsT");
    if (this.props.isLoading === true) {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="loader-custom-wrapper">
              <h4>
                <i className="fa fa-spinner fa-spin mx-2" />
                Loading...
              </h4>
            </div>
          </div>
        </div>
      )
    }
    return (
      <>
        <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h5>Shipping Information</h5>
                  <div className="row mt-3">
                    <label className="col-12"><strong>Contact</strong></label>
                    <div className="form-group col-6">
                      <input onChange={this.full_nameChangeHandle} type="text" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col-6">
                      <input onChange={this.phoneChangeHandle} type="text" className="form-control" placeholder="Enter Phone No." />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-12"><strong>Address</strong></label>
                    <div className="form-group col-4">
                      <select className="form-control" onChange={this.regionChangeHandle}>
                          <option value="">Select Region</option>
                          <option value="dhaka">Dhaka</option>
                      </select>
                    </div>
                    <div className="form-group col-4">
                      <input onChange={this.cityChangeHandle} type="text" className="form-control" placeholder="Enter Your City" />
                    </div>
                    <div className="form-group col-4">
                      <input onChange={this.areaChangeHandle} type="text" className="form-control" placeholder="Enter Your Area" />
                    </div>
                    <div className="form-group col-12">
                      <textarea onChange={this.addressChangeHandle} className="form-control" placeholder="Enter Your Address" />
                    </div>
                  </div>

                  <div className="row">
                    <label className="col-12"><strong>Payment Type</strong></label>
                    <div className="form-group col-12 d-flex">

                      <div className="form-check">
                        <input className="form-check-input" type="radio" onChange={this.paymentTypeChangeHandle} name="flexRadioDefault" id="CashOnDelivery" value="cash_on_delivery" defaultChecked />
                          <label className="form-check-label" htmlFor="CashOnDelivery">
                            Cash On Delivery
                          </label>
                      </div>
                      <div className="form-check ml-3">
                        <input className="form-check-input" type="radio" onChange={this.paymentTypeChangeHandle} value="pay_with_stripe" name="flexRadioDefault" id="payWithStripe" />
                          <label className="form-check-label" htmlFor="payWithStripe">
                            Pay with Stripe
                          </label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="card w-100 mt-3">
                <div className="card-body">
                  <h5>Order Review</h5>
                  <table className="table border bg-white">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
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
                              <td> {product.price} </td>
                              <td>
                                <div className="d-flex">
                                  {product.quantity}
                                </div>
                              </td>
                              <td>{product.subtotal}</td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <Link to="/" className="btn btn-danger text-white">
                            <i className="fa fa-angle-left mr-1"/>
                            <span>Continue Shopping</span>
                          </Link>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                      <h5>Order Summery</h5>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <h6>Total</h6>
                        <h6>
                          { this.props.totalPrice }
                        </h6>
                      </div>

                      {
                        this.state.payment_type === 'pay_with_stripe'
                            ?
                            (<div className="row">
                              <div className="form-group col-12">
                                <Elements stripe={promise}>
                                  <form id="payment-form" onSubmit={this.confirmOrder}>
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({email: e.target.value})}
                                        placeholder="Enter email address"
                                    />
                                    <CardElement id="card-element" options={this.cardStyle} onChange={this.handleCardChange} />
                                    <button
                                        disabled={this.state.processing || this.state.disabled}
                                        id="submit"
                                    >
                                    <span id="button-text">
                                      {this.state.processing ? (
                                          <div className="spinner" id="spinner"></div>
                                      ) : (
                                          "Pay now"
                                      )}
                                    </span>
                                    </button>
                                    {/* Show any error that happens when processing the payment */}
                                    {this.state.error && (
                                        <div className="card-error text-danger text-center my-2" role="alert">
                                          <strong>{this.state.error}</strong>
                                        </div>
                                    )}
                                  </form>
                                </Elements>
                              </div>
                            </div>)
                            :
                            (
                                <button onClick={this.confirmOrder} className="btn btn-danger btn-lg btn-block mt-5" disabled={this.state.submit}>
                                  {this.state.submit ? (<div>< i className="fa fa-spin fa-spinner mr-2" /> Processing...</div>) : 'Place Order'}
                                </button>
                            )
                      }
                    </div>
                </div>
            </div>
            {
              this.state.isProcessingPayment === true ?
                  (
                      <div className="login-overlay text-center">
                        <div>
                          <i className="fa fa-spinner fa-spin"></i><br />
                          <h5>Your Payment is Processing please wait...</h5>
                        </div>
                      </div>
                  ) : ''

            }
        </div>

        { this.redirectAfterOrder() }
      </>
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

export default connect(mapStateToProps)(CheckoutPage)

