import React, {Component, Fragment} from 'react';
import UserOnBoard from "../components/common/UserOnBoard";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";

class UserOnBoardPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <UserOnBoard />
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default UserOnBoardPage;
