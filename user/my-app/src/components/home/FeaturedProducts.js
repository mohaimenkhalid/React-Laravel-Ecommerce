import React, {Component} from 'react';
import { Container} from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ProductList from "../product/ProductList";

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
                <Container fluid={true} className="card pb-5 mb-3">
                    <div className="text-center">
                        <h2 className="text-dark-color">Featured Product</h2>
                        <p>Some of Our Exclusive Collection, you May Like</p>
                    </div>
                    <ProductList products={this.state.featured_products} />
                </Container>
            </div>
        );
    }
}

export default FeaturedProducts;
