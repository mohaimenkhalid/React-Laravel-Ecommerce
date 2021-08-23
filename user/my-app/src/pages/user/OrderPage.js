import React, {Component} from 'react';
import axios from "axios";
import AppURL from "../../api/AppURL";
import AppStorage from "../../helpers/AppStorage";
import ListLoader from "../../components/loader/ListLoader";
import {Link} from "react-router-dom";

class OrderPage extends Component {

    constructor() {
        super();
        this.state = {
            myOrders: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const headers = {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${AppStorage.getToken()}`
        };
        axios.get(AppURL.getMyOrder,  {headers: headers})
            .then(res => {
                if(res.status === 200) {
                    this.setState({myOrders: res.data})
                    this.setState({isLoading: false})
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h3>My Order List</h3>
                        <table className="table">
                            <thead>
                            <th>Order#</th>
                            <th>Date</th>
                            <th>Shipped To</th>
                            <th>Order Total</th>
                            <th>Order Status</th>
                            <th>Action</th>
                            </thead>
                            <tbody>
                            { this.state.isLoading === true
                                ?
                                (
                                    <tr>
                                        <td colSpan="6"><ListLoader /></td>
                                    </tr>
                                )
                                :
                                this.state.myOrders.map((order) => {
                                    return (
                                        <tr>
                                            <td>{order.invoice_number}</td>
                                            <td>{order.created_at}</td>
                                            <td></td>
                                            <td>{order.total_amount}</td>
                                            <td>{order.shipped}</td>
                                            <td>
                                                <Link to={'/my-account/orders/'+order.id} class="btn btn-info btn-sm">
                                                    <i className="fa fa-eye" />
                                                    <span className='ml-1'>View</span>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })

                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;
