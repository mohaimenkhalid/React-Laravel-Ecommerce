import React, {Component} from 'react';
import { Container, Row, Col, Card} from "react-bootstrap";

class FeaturedProducts extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="card py-5 mb-3">
                    <div className="text-center">
                        <h5 className="text-danger">Featured Product</h5>
                        <p>Some of Our Exclusive Collection, you May Like</p>
                    </div>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FeaturedProducts;
