import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import 'axios-progress-bar/dist/nprogress.css'
import 'react-toastify/dist/ReactToastify.css';
import NavMenuDesktop from "./components/common/NavMenuDesktop";
import NavMenuMobile from "./components/common/NavMenuMobile";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <NavMenuDesktop />
                    <NavMenuMobile />
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category/10">Topics</Link>
                        </li>
                    </ul>
                    <AppRoute />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
