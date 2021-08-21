import React, {Component} from 'react';
import {Link, matchPath} from "react-router-dom";
import {Route, Switch} from "react-router";
import OrderPage from "./OrderPage";

class MyAccountPage extends Component {
    constructor() {
        super();
        this.state = {
            currentUrl: ''
        }
    }
    componentDidMount() {
        this.setState({currentUrl: this.props.history.location.pathname})
    }

    render() {
        console.log(this.props.history);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>My Order List</h3>
                                <ul>
                                    <li><Link to="/my-account">Account Setting</Link> </li>
                                    <li><Link to="/my-account/orders">My Orders</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Switch>
                            <Route exact path="/my-account">
                                <h3>Please select a topic.</h3>
                            </Route>
                            <Route path="/my-account/:pageId"
                                render={(props) => {
                                    console.log(props);
                                    if(props.location.pathname === '/my-account/orders') {
                                        return <OrderPage {...props} />
                                    }}
                                }
                            />

                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountPage;
