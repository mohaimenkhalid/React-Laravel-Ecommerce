import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import UserPanelRoute from "../../route/UserPanelRoute";

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
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card user-panel-left-sidebar">
                            <div className="card-body">
                                <ul>
                                    <li><NavLink exact activeClassName='is-active' to="/my-account">Account Setting</NavLink> </li>
                                    <li><NavLink  activeClassName='is-active' to="/my-account/orders">My Orders</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <UserPanelRoute />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountPage;
