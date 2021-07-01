import React, {Component} from 'react';
import { Container, Row, Col, Card} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

class FeaturedProducts extends Component {

    constructor() {
        super();
        this.state = {
            featured_products: []
        }
    }

    componentDidMount() {
        //FEATURED_PRODUCT = 1
        axios.get(AppURL.getProductByRemark, { params: { remark: 1 } })
            .then(res => {
                if(res.status === 200) {
                  this.setState({featured_products: res.data})
                }
            })
            .catch(error => {

            })
    }

    render() {
        return (
            <div>
                <Container fluid={true} className="card py-5 mb-3">
                    <div className="text-center">
                        <h2 className="text-danger">Featured Product</h2>
                        <p>Some of Our Exclusive Collection, you May Like</p>
                    </div>
                    <Row>
                        {
                            this.state.featured_products.map((product, index) => {
                                return (
                                    <Col xl={2} lg={2} md={2} sm={4} xs={6} key={index}>
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
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FeaturedProducts;
