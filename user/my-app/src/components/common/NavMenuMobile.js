import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import MegaMenu from "../home/MegaMenu";

class NavMenuMobile extends Component {
    render() {
        return (
            <Fragment>
                <div className="Mobile">
                    <input type="checkbox" id="side" name="" value="" />
                    <div className="page-wrap">
                        <div className="page-content">
                            <Container>
                                <Row>

                                    <Col className="col-2">
                                        <label htmlFor="side" className="toggle mt-2">☰</label>
                                    </Col>
                                    <Col className="col-10">
                                        <div className="float-right">
                                            <a className="btn p-0 mr-3 ">
                                                <i className="fa h4 fa-search" />
                                            </a>
                                            <a className="btn p-0 mr-3">
                                                <i className="fa h4 fa-bell" />
                                                <sub>
                                                    <span className="badge badge-danger">4</span>
                                                </sub>
                                            </a>
                                            <a className="btn p-0 mr-3">
                                                <i className="fa h3 fa-mobile" />
                                                <sub>
                                                    <span className="badge badge-danger">4</span>
                                                </sub>
                                            </a>
                                            <Button className="cart-btn">
                                                <i className="fa fa-shopping-cart" /> 4
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="sidebar">
                            <MegaMenu />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NavMenuMobile;
