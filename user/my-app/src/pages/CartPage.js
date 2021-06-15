import React, {Component,Fragment} from 'react';
import Cart from "../components/cart/Cart";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

class CartPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <Cart />
            </Fragment>
        );
    }
}

export default CartPage;
