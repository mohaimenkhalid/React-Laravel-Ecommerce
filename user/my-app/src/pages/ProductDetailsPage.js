import React, {Component, Fragment} from 'react';
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";
import axios from "axios";
import AppURL from "../api/AppURL";

class ProductDetailsPage extends Component {

    constructor() {
        super();
        this.state = {
            product: ''
        }
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.getProductDetails(slug)
    }

    getProductDetails(slug) {
       axios.get(AppURL.getProductDetails(slug))
           .then(res => {
               if (res.status === 200) {
                   this.setState({
                       product: res.data
                   })
               }
           })
           .catch(error => {

           })
    }

    render() {
        return (
            <Fragment>
                <ProductDetails product={this.state.product} />
                <SuggestedProducts />
            </Fragment>
        );
    }
}

export default ProductDetailsPage;
