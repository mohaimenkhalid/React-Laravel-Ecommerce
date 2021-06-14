import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import UserOnBoardPage from "../pages/UserOnBoardPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/onboard" component={UserOnBoardPage} />
                    <Route path="/productDetails" component={ProductDetailsPage} />
                    <Route path="/notification" component={NotificationPage} />
                    <Route path="/favourite" component={FavouritePage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
