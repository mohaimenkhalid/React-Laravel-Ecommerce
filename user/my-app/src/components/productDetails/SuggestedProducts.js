import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";

class SuggestedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h4 className="section-title">YOU MAY LIKE</h4>
                    <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like</h6>
                   {/* <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Card className="card h-100 w-100  image-box ">
                                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">Title</h5>
                                    <p className="product-price-on-card">Price: 5000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>*/}
                </Container>
            </Fragment>
        );
    }
}

export default SuggestedProducts;
