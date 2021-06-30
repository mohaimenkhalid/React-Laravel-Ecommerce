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

class PurchaseGuidePage extends Component {
    constructor() {
        super();
        this.state = {
            purchaseGuide: '',
            isLoading: true
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        loadProgressBar();
        let session_siteInfo_purchase_guide = sessionStorage.getItem('siteInfo_purchase_guide');
        if(session_siteInfo_purchase_guide === null) {
            axios.get(AppURL.getSiteInfo)
                .then( (res) => {
                    let status_code = res.status;
                    if(status_code === 200) {
                        let purchaseGuide = res.data[0]['purchase_guide'];
                        this.setState({purchaseGuide: purchaseGuide})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_purchase_guide', JSON.stringify(purchaseGuide))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({purchaseGuide: JSON.parse(session_siteInfo_purchase_guide)})
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
                                            <h4>Purchase Guide</h4>
                                            <div className="mt-5">
                                                {ReactHtmlParser(this.state.purchaseGuide)}
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

export default PurchaseGuidePage;
