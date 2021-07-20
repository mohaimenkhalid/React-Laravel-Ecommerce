import React, {Component, Fragment} from 'react';
import axios from "axios";
import AppURL from "../../api/AppURL";
import AppStorage from "../../helpers/AppStorage";

class Cart extends Component {

  constructor () {
    super();
    this.state = {
      carts: [],
    }
  }

  componentWillMount () {
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
        console.log(res)
      })
      .catch()
  };


    render() {
        return (
            <Fragment>
                <div className="container main-section">
                    <div className="row">
                        <div className="col-lg-12 pb-2">
                            <h4>Your Shopping Cart </h4>
                        </div>
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
                                                <img src={AppURL.ServerBaseURL+cart.product.image} alt="..."
                                                     className="img-responsive"/>
                                              </div>
                                              <div className="col-lg-10">
                                                <h4 className="nomargin">{cart.product.name}</h4>
                                                <p>{cart.product.product_details.short_description}</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td> {cart.unit_price} </td>
                                          <td data-th="Quantity">
                                            <input type="number" className="form-control text-center" value={cart.quantity} />
                                          </td>
                                          <td>{cart.total_price}</td>
                                          <td className="actions" data-th="" width="10%">
                                            <button className="btn btn-info btn-sm"><i className="fa fa-refresh" />
                                            </button>
                                            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" /></button>
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
                                        <i className="fa fa-angle-left" /> Continue Shopping
                                      </a>
                                    </td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center" width="10%"><strong>Total :
                                        47,000</strong></td>
                                    <td width="20%">
                                      <a href="#" className="btn btn-success btn-block">Checkout <i
                                        className="fa fa-angle-right" />
                                      </a>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Cart;
