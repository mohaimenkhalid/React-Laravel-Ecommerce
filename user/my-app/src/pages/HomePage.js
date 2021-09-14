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
import newsBg from "../assets/images/news-bg.jpg";

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
                <div className="news-subscribe" style={{"backgroundImage": `url(${newsBg})`}}>
                    <div className="row">
                        <div className="col-md-4 offset-4 top-30 text-center">
                            <h3>Get the latest deals</h3>
                            <p>And receive 20% off coupon for first shopping</p>
                            <form>
                                <input type="text" placeholder="Enter Your Email Address" className="form-control bg-white"/>
                                <button className="btn btn-success mt-1">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
