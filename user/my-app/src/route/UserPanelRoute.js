import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import OrderPage from "../pages/user/OrderPage";

class UserPanelRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/my-account">
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path="/my-account/:pageId"
                           render={(props) => {
                               if(props.match.params.pageId === 'orders') {
                                   return <OrderPage {...props} />
                               }}
                           }
                    />

                </Switch>
            </Fragment>
        );
    }
}

export default UserPanelRoute;
