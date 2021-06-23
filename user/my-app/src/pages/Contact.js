import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import {Button, Card, Col} from "react-bootstrap";
import FooterDesktop from "../components/common/FooterDesktop";
import Validation from "../validation/validation";
import AppURL from "../api/AppURL";
import { loadProgressBar } from 'axios-progress-bar';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            mobile: "",
            message: "",
        };
    }

    nameOnChange = (event) => {
        let name = event.target.value;
        this.setState({
            name: name
        })
    }

    emailOnChange = (event) => {
        let email = event.target.value;
        this.setState({
            email: email
        })
    }

    mobileOnChange = (event) => {
        let mobile = event.target.value;
        this.setState({
            mobile: mobile
        })
    }

    messageOnChange = (event) => {
        let message = event.target.value;
        this.setState({
            message: message
        })
    }

    resetValues = () => {
        this.setState(this.initialState)
    }


    onFormSubmit = (event) => {
        loadProgressBar()
        event.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let mobile = this.state.mobile;
        let message = this.state.message;

        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');

        if(name.length === 0) {
            toast.error("Name is required!");
        }
        if(email.length === 0) {
            toast.error("Email is required!");
        }
        if(mobile.length === 0) {
            toast.error("Mobile is required!");
        }
        if(name.length !== 0 && !Validation.NameRegx.test(name)) {
            toast.error("Name format is not allow.");
        } else if(email.length !== 0 && !Validation.EmailRegx.test(email)) {
            toast.error("Email is not valid.");
        } else if(mobile.length !== 0 && !Validation.MobileRegx.test(mobile)) {
            toast.error("Mobile number is allow only BD.");
        } else if(message.length === 0) {
            toast.error("Message field is required!");
        } else {
            sendBtn.innerHTML="Sending...";

            let contactFormData = new FormData();
            contactFormData.append('name', name)
            contactFormData.append('email', email)
            contactFormData.append('mobile', mobile)
            contactFormData.append('message', message)

            axios.post(AppURL.postContactDetails, contactFormData)
                .then(function (res) {
                    if (res.status === 200 && res.data) {
                        contactForm.reset();
                        toast.success("Message send to us successfully!");
                        sendBtn.innerHTML="SUBMIT";
                    } else {
                        toast.error("Something went wrong!");
                        sendBtn.innerHTML="SUBMIT";
                    }
                })
                .catch(function (error) {
                    console.log(error)
                    sendBtn.innerHTML="SUBMIT";
                })
        }

    }

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <NavMenuMobile />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <Card style={{ width: '18rem' }} className="mt-5">
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title className="text-danger">Contact US</Card.Title>
                                    <p>Enter Your Details Here. We Will Get Back To You.</p>
                                    <form onSubmit={this.onFormSubmit} id="contactForm">
                                        <div className="form-group">
                                            <input onChange={this.nameOnChange} type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.emailOnChange} type="text" className="form-control" placeholder="Your Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.mobileOnChange} type="text" className="form-control" placeholder="Mobile Number" />
                                        </div>
                                        <div className="form-group">
                                            <textarea onChange={this.messageOnChange} className="form-control" placeholder="Your Message" />
                                        </div>
                                        <div className="form-group">
                                            <Button className="btn-block" id="sendBtn" variant="danger" type="submit">SUBMIT</Button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="p-0 mt-5" style={{ width: '18rem' }}>
                                <Card.Body className="p-0">
                                    <iframe style={{border: 0}}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.833077176066!2d90.37697376486105!3d23.75333119458154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ac20cff015%3A0xff2b5ccc3b603741!2sShukrabad%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1624297403625!5m2!1sen!2sbd"
                                        width="600" height="385" allowFullScreen=""
                                        loading="lazy" />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <ToastContainer />
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default Contact;
