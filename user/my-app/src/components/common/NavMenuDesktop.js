import React, {Component, Fragment} from 'react';
import {Col, Navbar, Row} from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" className="Desktop navbar">
                    <Row className="align-items-center">
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div>
                                <Link to="/">
                                    <img width="175px" src={logo} alt="" />
                                </Link>
                                <Link to="/cart" className="btn cart-btn">
                                    <i className="fa fa-shopping-cart" /> 4 items
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="d-flex">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button type="button" className="btn site-btn">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="float-right">
                                <Link to="/favourite" className="btn">
                                    <i className="fa h4 fa-heart" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>

                                <Link to="/notification" className="btn">
                                    <i className="fa h4 fa-bell" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>
                                <Link to="/" className="btn">
                                    <i className="fa h3 fa-mobile" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </Link>
                                <Link to="/onboard" className="btn btn-danger">
                                    LOGIN
                                </Link>
                                <div id="google_translate_element"></div>
                            </div>
                        </Col>
                    </Row>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;
