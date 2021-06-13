import React, {Component, Fragment} from 'react';
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

class ProductDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <ProductDetails />
                <SuggestedProducts />
            </Fragment>
        );
    }
}

export default ProductDetailsPage;
