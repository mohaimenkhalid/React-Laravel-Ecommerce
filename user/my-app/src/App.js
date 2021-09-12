import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import 'axios-progress-bar/dist/nprogress.css'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/common/NavBar";
import MegaMenu from "./components/home/MegaMenu";
import FooterDesktop from "./components/common/FooterDesktop";
import {ToastContainer} from "react-toastify";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavBar />
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
                    <ToastContainer />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
