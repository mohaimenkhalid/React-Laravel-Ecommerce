import React, {Component, Fragment} from 'react';
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast, ToastContainer} from "react-toastify";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import TextLoader from "../components/loader/TextLoader";
import ReactHtmlParser from "react-html-parser";
import FooterDesktop from "../components/common/FooterDesktop";

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
                        let about = res.data[0]['terms'];
                        this.setState({about: about})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_terms_condition', JSON.stringify(about))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({about: JSON.parse(session_siteInfo_terms_condition)})
            this.setState({isLoading: false})
        }
    }

    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            {   this.state.isLoading
                                ? <TextLoader />
                                : (
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>Terms & Condition</h4>
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
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default TermsConditionPage;
