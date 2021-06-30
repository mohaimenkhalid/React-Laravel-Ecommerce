import React, {Component, Fragment} from 'react';
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast, ToastContainer} from "react-toastify";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ReactHtmlParser from "react-html-parser";
import FooterDesktop from "../components/common/FooterDesktop";
import LargeTextLoader from "../components/loader/LargeTextLoader";

class PolicyPage extends Component {
    constructor() {
        super();
        this.state = {
            privacyPolicy: '',
            isLoading: true
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        loadProgressBar();
        let session_siteInfo_privacy_policy = sessionStorage.getItem('siteInfo_privacy_policy');
        if(session_siteInfo_privacy_policy === null) {
            axios.get(AppURL.getSiteInfo)
                .then( (res) => {
                    let status_code = res.status;
                    if(status_code === 200) {
                        let privacyPolicy = res.data[0]['policy'];
                        this.setState({privacyPolicy: privacyPolicy})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_privacy_policy', JSON.stringify(privacyPolicy))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({privacyPolicy: JSON.parse(session_siteInfo_privacy_policy)})
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
                                ? <LargeTextLoader />
                                : (
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>Privacy Policy</h4>
                                            <div className="mt-5">
                                                {ReactHtmlParser(this.state.privacyPolicy)}
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

export default PolicyPage;
