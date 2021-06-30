import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import 'axios-progress-bar/dist/nprogress.css'
import 'react-toastify/dist/ReactToastify.css';
import NavMenuDesktop from "./components/common/NavMenuDesktop";
import NavMenuMobile from "./components/common/NavMenuMobile";
import MegaMenu from "./components/home/MegaMenu";
import FooterDesktop from "./components/common/FooterDesktop";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavMenuDesktop />
                    <NavMenuMobile />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 p-0 desktop_menu">
                                <div className="sticky-top top-70">
                                    <MegaMenu />
                                </div>
                            </div>
                            <div className="col-md-10 p-0">
                                <AppRoute />
                            </div>
                        </div>
                    </div>
                    <FooterDesktop />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
