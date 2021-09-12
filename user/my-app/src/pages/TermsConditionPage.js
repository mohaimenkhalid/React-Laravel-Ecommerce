import React, {Component, Fragment} from 'react';
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast, ToastContainer} from "react-toastify";
import ReactHtmlParser from "react-html-parser";
import LargeTextLoader from "../components/loader/LargeTextLoader";

class TermsConditionPage extends Component {
    constructor() {
        super();
        this.state = {
            termsCondition: '',
            isLoading: true
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        loadProgressBar();
        let session_siteInfo_terms_condition = sessionStorage.getItem('siteInfo_terms_condition');
        if(session_siteInfo_terms_condition === null) {
            axios.get(AppURL.getSiteInfo)
                .then( (res) => {
                    let status_code = res.status;
                    if(status_code === 200) {
                        let termsCondition = res.data[0]['terms'];
                        this.setState({termsCondition: termsCondition})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_terms_condition', JSON.stringify(termsCondition))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({termsCondition: JSON.parse(session_siteInfo_terms_condition)})
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
                                            <h4>Terms & Condition</h4>
                                            <div className="mt-5">
                                                {ReactHtmlParser(this.state.termsCondition)}
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

export default TermsConditionPage;
