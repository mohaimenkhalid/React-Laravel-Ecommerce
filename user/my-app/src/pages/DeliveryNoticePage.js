import React, {Component, Fragment} from 'react';
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";
import AppURL from "../api/AppURL";
import {toast, ToastContainer} from "react-toastify";
import LargeTextLoader from "../components/loader/LargeTextLoader";
import ReactHtmlParser from "react-html-parser";

class DeliveryNoticePage extends Component {
    constructor() {
        super();
        this.state = {
            deliveryNotice: '',
            isLoading: true
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
        loadProgressBar();
        let session_siteInfo_delivery_notice = sessionStorage.getItem('siteInfo_delivery_notice');
        if(session_siteInfo_delivery_notice === null) {
            axios.get(AppURL.getSiteInfo)
                .then( (res) => {
                    let status_code = res.status;
                    if(status_code === 200) {
                        let deliveryNotice = res.data[0]['delivery_notice'];
                        this.setState({deliveryNotice: deliveryNotice})
                        this.setState({isLoading: false})
                        sessionStorage.setItem('siteInfo_delivery_notice', JSON.stringify(deliveryNotice))
                    }
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: "bottom-center"
                    });
                })
        } else {
            this.setState({deliveryNotice: JSON.parse(session_siteInfo_delivery_notice)})
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
                                            <h4>Delivery Notice</h4>
                                            <div className="mt-5">
                                                {ReactHtmlParser(this.state.deliveryNotice)}
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

export default DeliveryNoticePage;
