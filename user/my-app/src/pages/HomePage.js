import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import Test from "../components/Test";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
        this.getVisitorDetails();
    }

    getVisitorDetails = () => {
        loadProgressBar()
        axios.get(AppURL.visitorDetails)
            .then()
            .catch()
    }


    render() {
        return (
            <Fragment>
                <HomeTop />
                <Categories />
                <NewArrival />
                <FeaturedProducts />
                <Collection />
            </Fragment>
        );
    }
}

export default HomePage;
