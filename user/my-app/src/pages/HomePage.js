import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import AppURL from "../api/AppURL";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import SubBanner from "../components/home/SubBanner";

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
                <FeaturedCategories />
                <SubBanner />
                <NewArrival />
                <FeaturedProducts />
                <Collection />
            </Fragment>
        );
    }
}

export default HomePage;
