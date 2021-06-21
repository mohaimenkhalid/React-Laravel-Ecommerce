import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import {Button, Card, Col} from "react-bootstrap";
import FooterDesktop from "../components/common/FooterDesktop";

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
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
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message" />
                                    </div>
                                    <Button variant="danger">SUBMIT</Button>
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
                <FooterDesktop />
            </Fragment>
        );
    }
}

export default Contact;
