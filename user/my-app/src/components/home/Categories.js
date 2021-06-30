import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="card py-5 mb-3 feature-category">
                    <div className="text-center">
                        <h2 className="text-danger">Our Product Categories</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Food
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Home & Cleaning
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Men
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Women
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Personal Care
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    Fruits and Vegetables
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Categories;
