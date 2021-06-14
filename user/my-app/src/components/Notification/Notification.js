import React, {Component, Fragment} from 'react';
import {Container, Row, Col,Modal} from "react-bootstrap";

class Notification extends Component {

    constructor() {
        super();
        this.state = {
            NotificationModal: false
        }
    }

    handleClose = () => {
        this.setState({NotificationModal: false})
    };
    handleShow = () => {
        this.setState({NotificationModal: true})
    }

    render() {
        return (
            <Fragment>
                <Container className="">
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10}  sm={12} xs={12}>
                            <Row className="">
                                <Col className="d-flex justify-content-around p-1" md={6} lg={6} sm={12} xs={12}>
                                    <div className="card" onClick={this.handleShow}>
                                        <div className="card-body">
                                            <h6 className="notification-title"> sdfsf</h6>
                                            <p className="py-1  px-0 notification-date m-0"><i className="fa  fa-bell"/>  54-89-2020</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-around p-1" md={6} lg={6} sm={12} xs={12}>
                                    <div className="card" onClick={this.handleShow}>
                                        <div className="card-body">
                                            <h6 className="notification-title"> sdfsf</h6>
                                            <p className="py-1 px-0 notification-date m-0"><i className="fa  fa-bell"/>  54-89-2020</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> <i className="fa theme-text fa-bell"/> Date: {this.state.NotificationDate}</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="notification-title">Title here</h6>
                        <p>dfhgdgedgtertgewt</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;
