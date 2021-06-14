import React, {Component} from 'react';
import Slider from "react-slick";
import {Card, Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

class NewArrival extends Component {

    constructor(props) {
        super(props);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container fluid={true} className="card py-5 mb-3">
                <div className="text-center">
                    <h5 className="text-danger">New Arrival</h5>
                    <p>Some of Our Exclusive Collection, you May Like</p>
                </div>
                <div className="d-flex align-self-end">
                    <button className="btn btn-danger btn-sm mr-1" onClick={this.previous}>
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={this.next}>
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <Link to="/productDetails">
                            <Card className="p-2">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link to="/productDetails">
                            <Card className="p-2">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Link to="/productDetails">
                            <Card className="p-2">
                                <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                                <Card.Body>
                                    <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                    <h5 className="product-price-on-card">Price: 3000Tk</h5>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                    <div>
                        <Card className="p-2">
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                            <Card.Body>
                                <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                <h5 className="product-price-on-card">Price: 3000Tk</h5>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="p-2">
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                            <Card.Body>
                                <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                <h5 className="product-price-on-card">Price: 3000Tk</h5>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="p-2">
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                            <Card.Body>
                                <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                <h5 className="product-price-on-card">Price: 3000Tk</h5>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="p-2">
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                            <Card.Body>
                                <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                <h5 className="product-price-on-card">Price: 3000Tk</h5>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="p-2">
                            <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" />
                            <Card.Body>
                                <h5 className='product-name-on-card'>HP Pavilion 15-eg0112TX | Core i5-1135G7 | 8GB | 512GB NVMe | GeForce MX450 2GB</h5>
                                <h5 className="product-price-on-card">Price: 3000Tk</h5>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>
        );
    }
}

export default NewArrival;
