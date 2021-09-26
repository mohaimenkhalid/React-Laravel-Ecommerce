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
                <div className="row mt-3 m-1">
                    <div className="col-md-3 col-6">
                        <div className="serviceItem d-flex">
                            <i className="fa fa-truck" />
                            <div>
                                <h5>Free Home Delivery</h5>
                                <p>Free shipping</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="serviceItem d-flex">
                            <i className="fas fa-headset" />
                            <div>
                                <h5>Help Center</h5>
                                <p>24/7 Support System</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="serviceItem d-flex">
                            <i className="fas fa-dollar-sign" />
                            <div>
                                <h5>Money Back Guarantee</h5>
                                <p>Money Back Within 7 Days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="serviceItem d-flex">
                            <i className="fab fa-cc-stripe" />
                            <div>
                                <h5>Payment With Stripe</h5>
                                <p>Secure Payment With stripe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturedCategories />
                <SubBanner />
                <NewArrival />
                <FeaturedProducts />
                <Collection />
                <div className="news-subscribe" style={{"backgroundImage": `url(${newsBg})`}}>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 top-30 text-center">
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
