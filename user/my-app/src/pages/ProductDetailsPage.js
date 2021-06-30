import React, {Component, Fragment} from 'react';
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";

class ProductDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <ProductDetails />
                <SuggestedProducts />
            </Fragment>
        );
    }
}

export default ProductDetailsPage;
