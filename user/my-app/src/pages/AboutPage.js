import React, {Component, Fragment} from 'react';
import axios from "axios";
import { loadProgressBar } from 'axios-progress-bar';
import AppURL from "../api/AppURL";
import ReactHtmlParser from 'react-html-parser';
import TextLoader from "../components/loader/TextLoader";
import {toast, ToastContainer} from "react-toastify";


class AboutPage extends Component {

    constructor() {
        super();
        this.state = {
            about: '',
            isLoading: true
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        loadProgressBar();
        let session_siteInfo_about = sessionStorage.getItem('siteInfo_about');
        if(session_siteInfo_about === null) {
            axios.get(AppURL.getSiteInfo)
                .then( (res) => {
                    let status_code = res.status;
                    if(status_code === 200) {
                        let about = res.data[0]['about'];
                        this.setState({about: about})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_about', JSON.stringify(about))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({about: JSON.parse(session_siteInfo_about)})
            this.setState({isLoading: false})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            {   this.state.isLoading
                                ? <TextLoader />
                                : (
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>About Us</h4>
                                            <div className="mt-5">
                                                {ReactHtmlParser(this.state.about)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Fragment>
        );
    }
}

export default AboutPage;
