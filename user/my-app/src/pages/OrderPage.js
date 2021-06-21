import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import OrderForm from "../components/Order/OrderForm";
import FooterDesktop from "../components/common/FooterDesktop";

class OrderPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <OrderForm />
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default OrderPage;
