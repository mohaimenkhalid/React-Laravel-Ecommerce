import React, {Component} from 'react';
import AppStorage from "../helpers/AppStorage";
import axios from "axios";
import AppURL from "../api/AppURL";
import {loadProgressBar} from "axios-progress-bar";
import {Link, Redirect} from "react-router-dom";
import {toast} from "react-toastify";

class CheckoutPage extends Component {

  constructor () {
    super();
    this.state = {
      carts: [],
      isLoading: true,
      totalPrice: 0,
      name: '',
      phone_no: '',
      region: '',
      city: '',
      area: '',
      address: '',
      payment_type: '',
      submit: false,
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
        this.getTotalPrice();
        this.setState({isLoading: false});
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

  HomePageRedirect = () => {
    if(this.state.carts.length < 1) {
      toast.error("Your cart is empty.");
      return <Redirect to="/" />
    }
  };

  nameChangeHandle = (e) => {
    this.setState({name: e.target.value});
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

  confirmOrder() {
    this.setState({submit: true});
    this.validate();



    this.setState({submit: false});
  }

  validate() {
    if(this.state.name === '') {
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
  }


  render() {

    if (this.state.isLoading === true) {
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
                      <input onChange={this.nameChangeHandle} type="text" className="form-control" placeholder="Enter Your Name" />
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
                    <div className="form-group col-12">
                      <select className="form-control" onChange={this.paymentTypeChangeHandle}>
                        <option value="cash_on_delivery">Cash on Delivery</option>
                        <option value="">Stripe</option>
                      </select>
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
                                    <h5 className="nomargin">{cart.product.name}</h5>
                                    <p>{cart.product.product_details ? cart.product.product_details.short_description : ''}</p>
                                  </div>
                                </div>
                              </td>
                              <td> {cart.unit_price} </td>
                              <td>
                                <div className="d-flex">
                                  {cart.quantity}
                                </div>
                              </td>
                              <td>{cart.total_price}</td>
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
                          { this.state.totalPrice }
                        </h6>
                      </div>
                      <button onClick={() => this.confirmOrder()} className="btn btn-danger btn-lg btn-block mt-5" disabled={this.state.submit}>
                        {this.state.submit ? (<div>< i className="fa fa-spin fa-spinner mr-2" /> Processing...</div>) : 'Place Order'}

                      </button>
                    </div>
                </div>
            </div>
        </div>

        { this.HomePageRedirect() }
      </>
    );
  }
}

export default CheckoutPage;
