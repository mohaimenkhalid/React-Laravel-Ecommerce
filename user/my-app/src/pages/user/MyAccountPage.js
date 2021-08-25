import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import UserPanelRoute from "../../route/UserPanelRoute";

class MyAccountPage extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card user-panel-left-sidebar">
                            <div className="card-body">
                                <ul>
                                    <li><NavLink exact activeClassName='is-active' to={this.props.match.path}>Account Setting</NavLink> </li>
                                    <li><NavLink  activeClassName='is-active' to={`${this.props.match.path}/orders`}>My Orders</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <UserPanelRoute />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountPage;
