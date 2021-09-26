import React, {Component} from 'react';
import axios from "axios";
import AppURL from "../../api/AppURL";
import AppStorage from "../../helpers/AppStorage";
import ListLoader from "../../components/loader/ListLoader";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import noOrder from "../../assets/images/no-order.jpg";
import {Pagination} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

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
                console.log(res)
                if(res.status === 200) {
                    this.setState({myOrders: res.data})
                    this.setState({isLoading: false})
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    getPaginationOrder(url) {
        this.setState({isLoading: true})
        const headers = {
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${AppStorage.getToken()}`
        };
        axios.get(url,  {headers: headers})
            .then(res => {
                console.log(res)
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
                                <tr>
                                    <th>Order#</th>
                                    <th>Date</th>
                                    <th>Shipped To</th>
                                    <th>Order Total</th>
                                    <th>Order Status</th>
                                    <th>Action</th>
                                </tr>
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

                                (
                                    this.state.myOrders.length < 1
                                        ? (

                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    <img className="mb-5" src={noOrder} alt="No Order Found."/>
                                                    <h5>You don't have any order.</h5>
                                                    <Link to="/" className="btn badge-info">Continue Shopping</Link>
                                                </td>
                                            </tr>
                                            )
                                        :
                                        (
                                            <>
                                                {
                                                    this.state.myOrders.data.map((order, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{order.invoice_number}</td>
                                                                <td>
                                                                    {
                                                                        <Moment parse="YYYY-MM-DD HH:mm:ss" format="D MMM YYYY">
                                                                            {order.created_at}
                                                                        </Moment>
                                                                    }
                                                                </td>
                                                                <td>{order.shipping_address ? order.shipping_address.full_name : ''}</td>
                                                                <td>{order.total_amount}</td>
                                                                <td>
                                                                    <span className="badge badge-secondary">
                                                                    {order.shipped === 1 ? "Shipped" : "Not Shipped"}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link to={'/my-account/orders/'+order.id} className="btn btn-info btn-sm">
                                                                        <i className="fa fa-eye" />
                                                                        <span className='ml-1'>View</span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }

                                                <Pagination>
                                                    {
                                                        this.state.myOrders.links.map((link, index) => {
                                                            return (
                                                                <Pagination.Item disabled={link.url === null} key={index} active={link.active} onClick={() => this.getPaginationOrder(link.url)}>
                                                                    {ReactHtmlParser(link.label) }
                                                                </Pagination.Item>
                                                            );
                                                        })
                                                    }
                                                </Pagination>
                                            </>
                                        )
                                )


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
