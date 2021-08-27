import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";
import axios from "axios";
import AppStorage from "../../helpers/AppStorage";
import ListLoader from "../../components/loader/ListLoader";
import Moment from "react-moment";

class OrderDetailsPage extends Component {

    constructor() {
        super();
        this.state = {
            order: '',
            isLoading: true
        }
    }
    componentDidMount() {
        if(this.props.match.params.orderId) {
            const headers = {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${AppStorage.getToken()}`
            };
            axios.get(AppURL.getOrderById(this.props.match.params.orderId), {headers: headers})
                .then((res) => {
                    console.log(res.data)
                    this.setState({order: res.data});
                    this.setState({isLoading: false})
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            toast.error("Something went wrong.")
        }
    }


    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <Link to="/my-account/orders" className="btn"> <i className="fa fa-arrow-left" /> Back To Order List</Link>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <h5>Order #{this.state.order.invoice_number}</h5>
                        <h6>Order Date: {
                            <Moment parse="YYYY-MM-DD HH:mm:ss" format="D MMM YYYY">
                                {this.state.order.created_at}
                            </Moment>
                            }
                        </h6>
                        <h6>Order Status: <span className="badge badge-info">{this.state.order.shipping_status}</span></h6>
                        <div>
                            <table className="table">
                                <thead>
                                    <th>Thumbnail</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                </thead>
                                <tbody>
                                    {this.state.isLoading === true
                                        ?
                                        (
                                            <tr>
                                                <td colSpan="6"><ListLoader/></td>
                                            </tr>
                                        )
                                        :
                                        this.state.order.order_details.map((orderDetails) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={`${AppURL.ServerBaseURL}${orderDetails.product.image}`} width="80" alt="image" />
                                                    </td>
                                                    <td>
                                                        {orderDetails.product.name}
                                                    </td>
                                                    <td>
                                                        {orderDetails.unit_price}
                                                    </td>
                                                    <td>
                                                        {orderDetails.quantity}
                                                    </td>
                                                    <td>
                                                        {orderDetails.total_price}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td>Subtotal</td>
                                        <td>
                                            {
                                                this.state.isLoading === true ?
                                                    (<i className="fa fa-spin fa-spinner" />)
                                                    :
                                                    this.state.order.total_amount
                                            }

                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td>Shipping</td>
                                        <td>
                                            {
                                                this.state.isLoading === true ?
                                                    (<i className="fa fa-spin fa-spinner" />)
                                                    :
                                                    this.state.order.shipping_price
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td>Grand total</td>
                                        <td>
                                            {
                                                this.state.isLoading === true ?
                                                    (<i className="fa fa-spin fa-spinner"/>)
                                                    :
                                                    <span>{this.state.order.total_amount + this.state.order.shipping_price}</span>
                                            }

                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <h5>Order Information</h5>
                            </div>
                            {this.state.isLoading === true
                                ?
                                (
                                    <div className="col-md-12">
                                        <ListLoader/>
                                    </div>
                                )
                                :
                                (
                                    <>
                                        <div className="col-md-6">
                                            <h6>Shipping Address</h6>
                                            <p>
                                                {this.state.order.full_shipping_address}

                                            </p>
                                            <p>
                                                <i className="fa fa-phone-square mr-1"/>
                                                {this.state.order.shipping_address ? this.state.order.shipping_address.phone_no : ''}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Payment Method</h6>
                                            <p>{this.state.order.payment_method}</p>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetailsPage;
