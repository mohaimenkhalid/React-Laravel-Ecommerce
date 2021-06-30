import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Notification from "../components/Notification/Notification";
import FooterDesktop from "../components/common/FooterDesktop";

class NotificationPage extends Component {
    render() {
        return (
            <Fragment>
                <Notification />
            </Fragment>
        );
    }
}

export default NotificationPage;
