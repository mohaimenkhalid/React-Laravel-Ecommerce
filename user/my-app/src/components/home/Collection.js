import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ProductList from "../product/ProductList";

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
                    <ProductList products={this.state.collection_products} />
                </Container>
            </Fragment>
        );
    }
}

export default Collection;
