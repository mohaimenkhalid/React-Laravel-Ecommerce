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
      return <h5>Loading...</h5>
    }
    return (
      <>
        Checkout

        { this.HomePageRedirect() }
      </>
    );
  }
}

export default CheckoutPage;
