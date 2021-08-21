import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OrderPage extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h3>My Order List</h3>
                        <table className="table">
                            <thead>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Shipped To</th>
                            <th>Order Total</th>
                            <th>Order Status</th>
                            <th>Action</th>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;
