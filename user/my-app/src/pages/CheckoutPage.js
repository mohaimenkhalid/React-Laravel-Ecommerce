import React, {Component} from 'react';
import AppStorage from "../helpers/AppStorage";
import axios from "axios";
import AppURL from "../api/AppURL";
import {loadProgressBar} from "axios-progress-bar";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";

class CheckoutPage extends Component {

  constructor () {
    super();
    this.state = {
      carts: [],
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
        //console.log(res)
      })
      .catch()
  };

  HomePageRedirect = () => {
    if(this.state.carts.length < 1) {
      toast.error("Your cart is empty.");
      return <Redirect to="/" />
    }
  };

  render() {

    if (this.state.isLoading === true) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h5>
              <i className="fa fa-spinner fa-spin mx-2" />
              Loading...
            </h5>
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
                      <input type="text" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col-6">
                      <input type="text" className="form-control" placeholder="Enter Phone No." />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-12"><strong>Address</strong></label>
                    <div className="form-group col-4">
                      <select className="form-control">
                          <option>Select Region</option>
                          <option>Dhaka</option>
                      </select>
                    </div>
                    <div className="form-group col-4">
                      <input type="text" className="form-control" placeholder="Enter Your City" />
                    </div>
                    <div className="form-group col-4">
                      <input type="text" className="form-control" placeholder="Enter Your Area" />
                    </div>
                    <div className="form-group col-12">
                      <textarea className="form-control" placeholder="Enter Your Address" />
                    </div>
                  </div>

                  <div className="row">
                    <label className="col-12"><strong>Payment</strong></label>
                    <div className="form-group col-12">
                      <select className="form-control">
                        <option>Cash on Delivery</option>
                        <option>Stripe</option>
                      </select>
                    </div>
                  </div>
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
