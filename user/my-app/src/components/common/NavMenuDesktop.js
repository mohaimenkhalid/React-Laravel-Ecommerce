import React, {Component, Fragment} from 'react';
import {Container, Col, Navbar, Row, Button} from "react-bootstrap";
import logo from '../../assets/images/logo.png'

class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" className="navbar">
                    <Row className="align-items-center">
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div>
                                <Navbar.Brand href="#">
                                    <img width="50px" src={logo} alt="" />
                                </Navbar.Brand>
                                <Button className="cart-btn">
                                    <i className="fa fa-shopping-cart" /> 4 items
                                </Button>
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
                                <a className="btn">
                                    <i className="fa h4 fa-heart" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </a>

                                <a className="btn">
                                    <i className="fa h4 fa-bell" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </a>
                                <a className="btn">
                                    <i className="fa h3 fa-mobile" />
                                    <sub>
                                        <span className="badge badge-danger">4</span>
                                    </sub>
                                </a>
                                <Button className="btn btn-danger">
                                    LOGIN
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;
