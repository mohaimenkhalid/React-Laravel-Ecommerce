import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import AppURL from "../../api/AppURL";
import {toast} from "react-toastify";
import ReactHtmlParser from "react-html-parser";
import TextLoader from "../loader/TextLoader";

class FooterDesktop extends Component {

    constructor() {
        super();
        this.state = {
            footerData: '',
            isLoading: true
        }
    }

    componentDidMount() {
        let siteInfoFooter = sessionStorage.getItem('siteInfoFooter');
        if(siteInfoFooter  === null) {
            axios.get(AppURL.getSiteInfo)
                .then(res => {
                    this.setState({
                            footerData: res.data[0],
                            isLoading: false
                        })
                    sessionStorage.setItem("siteInfoFooter", JSON.stringify(res.data[0]))

                })
                .catch(error => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({footerData: JSON.parse(siteInfoFooter)})
            this.setState({isLoading: false})
        }
    }


    render() {
        return (
            <Fragment>
                <footer className="footer-section mt-5">
                    {
                        this.state.isLoading
                            ? <TextLoader />
                            : (
                                <div className="container">
                                    <div className="footer-content pt-5 pb-5">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 mb-50">
                                                <div className="footer-widget">
                                                    <div className="footer-logo">
                                                        <Link to="/"><img src={logo}
                                                                          className="img-fluid" alt="logo" /></Link>
                                                    </div>
                                                    <div className="footer-text">
                                                        { ReactHtmlParser(this.state.footerData.about_company) }
                                                    </div>
                                                    <div className="footer-social-icon">
                                                        <span>Follow us</span>
                                                        <a href={this.state.footerData.facebook_link} target="_blank">
                                                            <i className="fa fa-facebook facebook-bg" />
                                                        </a>
                                                        <a href={this.state.footerData.twitter_link} target="_blank">
                                                            <i className="fa fa-twitter twitter-bg" />
                                                        </a>
                                                        <a href={this.state.footerData.instagram_link} target="_blank">
                                                            <i className="fa fa-google-plus google-bg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                <div className="footer-widget">
                                                    <div className="footer-widget-heading">
                                                        <h3>Useful Links</h3>
                                                    </div>
                                                    <ul>
                                                        <li><Link to="/">Home</Link></li>
                                                        <li><Link to="/about">about</Link></li>
                                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                                        <li><Link to="/terms-condition">Terms & Condition</Link></li>
                                                        <li><Link to="privacy-policy">Privacy Policy</Link></li>
                                                        <li><Link to="delivery-notice">Delivery Notice</Link></li>
                                                        <li><Link to="purchase-guide">Purchase Guide</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                                <div className="footer-widget">
                                                    <div className="footer-widget-heading">
                                                        <h3>Subscribe</h3>
                                                    </div>
                                                    <div className="footer-text mb-25">
                                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                                    </div>
                                                    <div className="subscribe-form">
                                                        <form action="#">
                                                            <input type="text" placeholder="Email Address" />
                                                            <button>Subscribe</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2018, All Right Reserved <a
                                            href="#">mohaimen</a></p>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 d-none d-lg-block text-right">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/terms-condition">Terms & Condition</Link></li>
                                            <li><Link to="/purchase-guide">Purchase Guide</Link></li>
                                            <li><Link to="/delivery-notice">Delivery Notice</Link></li>
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/contact-us">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default FooterDesktop;
