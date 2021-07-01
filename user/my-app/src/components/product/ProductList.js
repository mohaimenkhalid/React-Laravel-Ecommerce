import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import AppURL from "../../api/AppURL";

class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Row>
                        {
                            this.props.products.map((product, index) => {

                                return (
                                    <Col xl={2} lg={2} md={2} sm={4} xs={6} key={index}>
                                        <Card className="image-box card">
                                            <div className="product-card-image">
                                                <Card.Img variant="top" src={AppURL.ServerBaseURL+product.image} />
                                            </div>
                                            <Card.Body>
                                                <div className="product-card-details">
                                                    <h5 className='product-name-on-card'>{product.name}</h5>
                                                    <h5 className="product-price-on-card">Price:
                                                        {
                                                            product.special_price
                                                                ? (<span><del className="text-muted">{product.price}</del> {product.price}</span>)
                                                                : (<span>{product.price}</span>)

                                                        }
                                                    </h5>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        );
    }
}

export default ProductList;
