import React, {Component, Fragment} from 'react';
import Favourite from "../components/Favourite/Favourite";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";

class FavouritePage extends Component {
    render() {
        return (
            <Fragment>
                <Favourite />
            </Fragment>
        );
    }
}

export default FavouritePage;
