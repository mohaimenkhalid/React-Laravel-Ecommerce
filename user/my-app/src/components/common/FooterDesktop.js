import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'

class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer-section mt-5">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>1010 Avenue, sw 54321, chandigarh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-phone"></i>
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>9876543210 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open"></i>
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>mail@info.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <a href="index.html"><img src={logo}
                                                                      className="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod
                                                tempor incididuntut consec tetur adipisicing
                                                elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">about</a></li>
                                            <li><a href="#">services</a></li>
                                            <li><a href="#">portfolio</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">Expert Team</a></li>
                                            <li><Link to="/contact-us">Contact us</Link></li>
                                            <li><a href="#">Latest News</a></li>
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
                                                    <button><i className="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
