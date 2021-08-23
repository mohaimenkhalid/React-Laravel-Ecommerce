import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import OrderPage from "../pages/user/OrderPage";
import OrderDetailsPage from "../pages/user/OrderDetailsPage";
import MyAccountIndex from "../pages/user/MyAccountIndex";

class UserPanelRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route
                        path="/my-account"
                        render={(props) => {
                            return (
                                <>
                                    <Route path={`${props.match.path}/`} component={MyAccountIndex} exact />
                                    <Route path={`${props.match.path}/orders`} component={OrderPage} exact />
                                    <Route path={`${props.match.path}/orders/:orderId`} component={OrderDetailsPage}/>
                                </>
                            )}
                        }
                    />

                </Switch>
            </Fragment>
        );
    }
}

export default UserPanelRoute;
