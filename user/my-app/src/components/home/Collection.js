import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

class Collection extends Component {

    constructor() {
        super();
        this.state = {
            collection_products: []
        }
    }

    componentDidMount() {
        //COLLECTION_PRODUCT = 2
        axios.get(AppURL.getProductByRemark, { params: { remark: 2 } })
            .then(res => {
                if(res.status === 200) {
                    this.setState({collection_products: res.data})
                }
            })
            .catch(error => {

            })
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="card py-5 mb-3">
                    <div className="text-center">
                        <h2 className="text-danger">Collection</h2>
                        <p>Some of Our Exclusive Collection, you May Like</p>
                    </div>
                    <Row>
                        {
                            this.state.collection_products.map((product, index) => {
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
            </Fragment>
        );
    }
}

export default Collection;
