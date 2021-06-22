import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import 'axios-progress-bar/dist/nprogress.css'
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <AppRoute />
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
