import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import Contact from "../pages/Contact";
import AboutPage from "../pages/AboutPage";
import PolicyPage from "../pages/PolicyPage";
import PurchaseGuidePage from "../pages/PurchaseGuidePage";
import DeliveryNoticePage from "../pages/DeliveryNoticePage";
import TermsConditionPage from "../pages/TermsConditionPage";
import CategoryProductView from "../pages/CategoryProductView";
import ProductSearchPage from "../pages/ProductSearchPage";
import SearchComponent from "../components/product/SearchComponent";
import RegisterPage from "../pages/RegisterPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
                    <Route path="/category/:slug" component={CategoryProductView} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/notification" component={NotificationPage} />
                    <Route path="/favourite" component={FavouritePage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/order" component={OrderPage} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/terms-condition" component={TermsConditionPage} />
                    <Route path="/privacy-policy" component={PolicyPage} />
                    <Route path="/purchase-guide" component={PurchaseGuidePage} />
                    <Route path="/delivery-notice" component={DeliveryNoticePage} />
                    <Route path="/delivery-notice" component={DeliveryNoticePage} />
                    <Route path="/search/:query" component={ProductSearchPage} />
                    <Route path="/search" component={SearchComponent} />
                    <Route path="/product/:slug" component={ProductDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
