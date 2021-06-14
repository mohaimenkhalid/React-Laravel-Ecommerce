import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Favourite extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5 mb-3">
                    <div className="text-center">
                        <h2 className="text-danger">My Favourite Products</h2>
                        <p>Some of Our Exclusive Collection, you May Like</p>
                    </div>
                    <Row>
                        <Col xl={12} lg={12} md={2} sm={4} xs={6}>
                            <Card className="card mb-3">
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img  className="w-100" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                        </div>
                                        <div className="col-md-9 py-3">
                                            <h3>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h3>
                                            <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                            <button className="btn btn-danger">
                                                <i className="fa fa-trash-o mr-1" aria-hidden="true" />
                                                 Remove From Favourite
                                            </button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} lg={12} md={2} sm={4} xs={6}>
                            <Card className="card mb-3">
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img  className="w-100" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                        </div>
                                        <div className="col-md-9 py-3">
                                            <h3>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h3>
                                            <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                            <button className="btn btn-danger">Remove From Favourite</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} lg={12} md={2} sm={4} xs={6}>
                            <Card className="card mb-3">
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img  className="w-100" alt="" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                        </div>
                                        <div className="col-md-9 py-3">
                                            <h3>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h3>
                                            <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                            <button className="btn btn-danger">Remove From Favourite</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;
