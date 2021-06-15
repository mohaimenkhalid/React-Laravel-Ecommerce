import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import OrderForm from "../components/Order/OrderForm";

class OrderPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <OrderForm />
            </Fragment>
        );
    }
}

export default OrderPage;
