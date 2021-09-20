import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import AppStorage from "../../helpers/AppStorage";
import {Link} from "react-router-dom";

class Favourite extends Component {

    state = {
        wishlists: ''
    }

    componentDidMount() {
        this.getFavouriteList();
    }

    getFavouriteList() {
        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${AppStorage.getToken()}`
        }
        axios.get(AppURL.getFavouriteList, {headers: headers})
            .then(res => {
               this.setState({wishlists: res.data})
            })
            .catch()
    }

    render() {
        return (
            <Fragment>
                <Container className="py-5 mb-3">
                    <div className="text-center">
                        <h2 className="text-danger">Wish List</h2>
                    </div>
                    <Row>
                        {
                            this.state.wishlists.length < 1 ? (<h5>Loading...</h5>) :
                            this.state.wishlists && this.state.wishlists.map((list, index) => {
                                return (
                                    <Col xl={12} lg={12} md={2} sm={4} xs={6}>
                                        <Card className="card mb-3">
                                            <Card.Body>
                                                <div className="row">
                                                    <div className="col-md-3 text-center">
                                                        <Link to={`/product/${list.product.slug}`}>
                                                            <img width="150px" alt="" src={AppURL.ServerBaseURL+list.product.image} />
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-9 py-3">
                                                        <Link to={`/product/${list.product.slug}`}><h3 className="text-dark">{list.product.name}</h3></Link>
                                                        <h5 className="product-price-on-card text-dark">Price: {list.product.price}Tk</h5>
                                                        <button className="btn btn-danger">
                                                            <i className="fa fa-trash-o mr-1" aria-hidden="true" />
                                                            Remove From Favourite
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;
