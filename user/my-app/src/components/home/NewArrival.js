import React, {Component} from 'react';
import Slider from "react-slick";
import {Card, Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";

class NewArrival extends Component {

    constructor(props) {
        super(props);

        this.state = {
            new_products: []
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    componentDidMount() {
        //NEW_PRODUCT = 3
        axios.get(AppURL.getProductByRemark, { params: { remark: 3 } })
            .then(res => {
                if(res.status === 200) {
                    this.setState({new_products: res.data})
                }
            })
            .catch(error => {

            })
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
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container fluid={true} className="card py-5 mb-3">
                <div className="text-center">
                    <h3 className="text-dark-color">Latest Product</h3>
                    <p>New product are comes for you</p>
                </div>
                <div className="d-flex align-self-end">
                    <button className="btn theme-bg btn-sm mr-1" onClick={this.previous}>
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="btn theme-bg btn-sm" onClick={this.next}>
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        this.state.new_products.map((product, index) => {
                            return (
                                <div>
                                    <Link to={`/product/${product.slug}`}>
                                        <Card className="image-box card">
                                            <div className="product-card-image">
                                                <Card.Img variant="top" src={AppURL.ServerBaseURL+product.image} />
                                            </div>
                                            <Card.Body>
                                                <div className="product-card-details">
                                                    <h5 className='product-name-on-card'>{product.name}</h5>
                                                    <h5 className="product-price-on-card">Price: {product.price}Tk</h5>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </Slider>
            </Container>
        );
    }
}

export default NewArrival;
