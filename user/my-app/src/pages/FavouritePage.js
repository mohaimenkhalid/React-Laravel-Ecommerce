import React, {Component, Fragment} from 'react';
import Favourite from "../components/Favourite/Favourite";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

class FavouritePage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <Favourite />
            </Fragment>
        );
    }
}

export default FavouritePage;
