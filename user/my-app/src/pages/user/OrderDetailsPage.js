import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OrderDetailsPage extends Component {
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
                        <h5>Order #RS000087726</h5>
                        <h6>Order Date: 04 July, 2021</h6>
                        <h6>Order Status: <span className="badge badge-success">Shipped</span></h6>

                        <div>
                            <table className="table">
                                <thead>
                                    <th>Thumbnail</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetailsPage;
