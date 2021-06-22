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
const axios = require('axios');


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
                <NavMenuDesktop />
                <NavMenuMobile />
                <HomeTop />
                <NewArrival />
                <FeaturedProducts />
                <Categories />
                <Collection />
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default HomePage;
